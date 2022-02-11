# 2주차 과제 SWIT 기업과제 메신저 구현

## Go Demo🚀

url=

## Member

<table align="center">
<tr>
<td align="center"><a href="https://github.com/WongueShin"><img src="https://media.vlpt.us/images/yeonbee/post/a3b02f02-0826-4cc9-b63e-9ddce5fbd857/wongyu.jpg" width="100%" /></a></td>
<td align="center"><a href="https://github.com/yunred"><img src="https://avatars.githubusercontent.com/u/84527643?v=4" width="85%" /></a></td>
<td align="center"><a href="https://github.com/zerochae"><img src="https://avatars.githubusercontent.com/u/84373490?v=4" width="85%" /></a></td>
</a></td>
</tr>
<tr>
<td align="center"><b>신원규(팀장)</b></td>
<td align="center"><b>김서윤</b></td>
<td align="center"><b>권영채</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

## 이슈정리

### Top-Down & Bottom-Up

![개발방식](https://user-images.githubusercontent.com/84373490/153566544-f316567b-2720-4948-9934-3f2c772c2e63.jpg)

우리팀은 지난 1주차 과제에서는 요구사항을 분석하고, 설계하는데 시간을 많이 들이는 `Top-Down` 개발방식으로 진행했습니다. 

`Top-Down`은 견고한 설계를 가지고 큰 것을 작은 요소로 분해해 개발해 나가기 때문에 접근이 쉽고, 속도가 빠른 장점이 있었습니다. 하지만 계획의 수정이 필요하면, 앞서 구현한 내용에도 역시 크고 작은 수정이 필요하다는 단점이 있었습니다. 

이에 우리팀은 이번 과제에서 `Bottom-Up` 방식의 개발방식을 선택했습니다. 작은 것 부터 시작해 재사용할 수 있는 코드의 사용성을 높이고, 전체적인 코드가 결합되기 전이니 계획의 수정에도 좀 더 유연하게 대처할 수 있었습니다. 두 개발방식의 장단점은 분명히 존재하나 `Agile` 방법론에 가까운 개발방식은 `Bottom-Up`이라고 생각했습니다.

### unable to resolve dependency tree

![Error](https://user-images.githubusercontent.com/84373490/153573779-801d3bb0-4fe0-4e9c-b04b-86b86ed67254.jpg)

프로젝트 초기설정을 위해 `craco`를 설치하던 도중 에러를 만났습니다.

에러 메시지를 읽어보니 `craco` 설치를 위해서는 `react-scripts 4.0.0`이 필요한데, 현재 프로젝트는 `react-scripts 5.0.0` 라는 버전 에러 였습니다. 그리고 `--force`나 `--legacy-peer-deps` 키워드를 사용하면 해결할 수 있지만 잠재적으로 깨질 수 있지만 해결할 수 있다고 합니다.

[What does npm install --legacy-peer-deps do exactly?🚀](https://stackoverflow.com/questions/66239691/what-does-npm-install-legacy-peer-deps-do-exactly-when-is-it-recommended-wh)

[When to use `--force` and `--legacy-peer-deps`?🚀](https://stackoverflow.com/questions/66020820/npm-when-to-use-force-and-legacy-peer-deps)

위 문서의 요약은 다음과 같습니다.

우리가 라이브러리를 설치하면 `package.json`의 `dependencies` , `devDependencies` 항목에 기록이 됩니다. 그 외에 `peerDependencies` 라는 항목은 해당 파일에 기록이 되지 않습니다. 이 항목은 해당 프로젝트를 실행하기 위해 필요한 모든 의존성이 있는 아이템들을 리스트하기 위해 존재합니다. 

우리는 `craco`를 설치하려고 했을 때 `peerDependencies`에서 `carco` 에는 `react-scripts 4.0.0`이 필요하다고 했지만 `react-scripts 5.0.0`이 있었기 때문에 오류가 발생했던 것이였습니다.


`npm VER.4-6` 까지는 `peerDependencies`가 있으면 오류가 아닌 경고만 출력했습니다. 

작년 21월 2월 `npm VER.7`이 출시되면서(현재는 `VER.8`) 오류가 출력되는것으로 변경되었습니다. 

여기서 `--force` 키워드를 사용하면 필요한 `peerDependencies`를 설치 후, 설치를 진행합니다.

![force](https://user-images.githubusercontent.com/84373490/153620995-853dcf0e-5416-4420-88bf-92fea4ed797e.jpg)

`--legacy-peer-deps` 키워드를 사용하면 `peerDependencies` 설치 없이, 설치를 진행합니다.

![legacy](https://user-images.githubusercontent.com/84373490/153620989-6b802011-9255-4e0a-85bb-33b29e6a1d32.jpg)


### Redux Persist

![persist](https://user-images.githubusercontent.com/84373490/153620985-b063959a-e210-4a4d-9b33-70d24822fbe4.jpg)

`Redux persist`를 사용하여 Refresh 이후에도 state가 유지되도록 만들었습니다. Login 정보가 담긴 state는 `localStorage`에 저장됩니다.

## 구현 요구사항

### 레이아웃

<details>
<summary>대화목록</summary>
- 대화목록은 상단에 위치하며, 입력창은 하단에 있습니다.
</details>

<details>
<summary>입력창</summary>
- 왼쪽에는 입력란이 있습니다.
- 오른쪽에는 보내기 버튼이 존재합니다.
</details>

<details>
<summary>메시지</summary>
- 프로필 이미지는 원형으로 왼쪽에 보입니다.
- 오른쪽 컨텐츠 영역 상단에는 이름과 보낸 날짜 하단에는 보낸 메시지의 내용이 출력됩니다.
- 메시지의 가장 오른쪽에는 삭제 버튼과 답장 버튼이 존재합니다.
</details>

### 기능

<details>
<summary>입력창</summary>
- 엔터키로 전송할 수 있습니다. 입력시 전송버튼은 즉시 활성화 됩니다.
- 컨텐츠를 입력하지 않으면 전송할 수 없습니다.
- 입력란은 멀티라인으로 입력하고 메시지에서의 출력도 그대로 출력됩니다.
</details>

<details>
<summary>대화목록</summary>
- 메시지의 정렬은 과거 부터 최신 순으로 정렬됩니다.
- 메시지를 보낼때 대화목록은 항상 가장 아래로 스크롤 됩니다.
- 대화목록은 미리 생성된 데이터로 3명이 5건의 메시지를 주고 받는 내용이 출력됩니다.
</details>

<details>
<summary>메시지</summary>
- 내가 전송한 메시지의 경우 이름 옆에 * 문자가 출력됩니다.
- 보낸 날짜의 경우 yyyy-mm-dd hh:MM:ss 포멧으로 출력됩니다. (사용자의 시간대로 출력)
- 답장을 클릭하면 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력창에 자동으로 삽입됩니다. (\n 개행, 입력창에 내용이 존재할때는 입력된 내용 앞에 입력됩니다.
- 삭제 버튼을 클릭하면 "*** 메시지를 삭제하시겠습니까?" 라는 메시지가 출력되며 응답시 삭제됩니다. (***은 메시지 내용중 최대 10자 까지 보여주며 뒤에는 ... 처리됩니다.)
</details>

<details>
<summary>데이터</summary>
- 메시지의 데이터 모델에는 userId, userName, profileImage, content, date 등이 있습니다.
</details>

## 프로젝트 후기

- 🎹신원규 : 

- 🎇김서윤 : 

- 🎈권영채 : 
