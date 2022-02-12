# 2주차 과제 SWIT 기업과제 메신저 구현

## [Go Demo🚀](https://condescending-gates-c7cc70.netlify.app/)

url=https://condescending-gates-c7cc70.netlify.app/

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

</table>

<table align="center">
<tr>
<td align="center"><b>팀원<b></td>
<td align="center"><b>역할</b></td>
</tr>
<tr>
<td>신원규</td>
<td>전반적인 프로젝트 매니지먼트 / userProfile 구현 / Input 컴포넌트 / CSS 통일성 유지 보수</td>
</tr>
<tr>
<td>김서윤</td>
<td>Redux 전역상태 관리 / 메시지 삭제기능 / 로그인,로그아웃 컴포넌트 </td>
</tr>
<tr>
<td>권영채</td>
<td>프로젝트 초기세팅 / 메시지(Ballon) 컴포넌트 / 메시지 답장기능 / Button 컴포넌트 / 탑바 </td>
</tr>

</table>

## 구현 요구사항

### ✅레이아웃

대화목록
- 대화목록은 상단에 위치하며, 입력창은 하단에 있습니다.

입력창

- 왼쪽에는 입력란이 있습니다.
- 오른쪽에는 보내기 버튼이 존재합니다.

메시지

- 프로필 이미지는 원형으로 왼쪽에 보입니다.
- 오른쪽 컨텐츠 영역 상단에는 이름과 보낸 날짜 하단에는 보낸 메시지의 내용이 출력됩니다.
- 메시지의 가장 오른쪽에는 삭제 버튼과 답장 버튼이 존재합니다.

### ✅기능

대화목록
- 메시지의 정렬은 과거 부터 최신 순으로 정렬됩니다.
- 메시지를 보낼때 대화목록은 항상 가장 아래로 스크롤 됩니다.
- 대화목록은 미리 생성된 데이터로 3명이 5건의 메시지를 주고 받는 내용이 출력됩니다.

  
입력창
- 엔터키로 전송할 수 있습니다. 입력시 전송버튼은 즉시 활성화 됩니다.
- 컨텐츠를 입력하지 않으면 전송할 수 없습니다.
- 입력란은 멀티라인으로 입력하고 메시지에서의 출력도 그대로 출력됩니다.

메시지

- 내가 전송한 메시지의 경우 이름 옆에 * 문자가 출력됩니다.
- 보낸 날짜의 경우 yyyy-mm-dd hh:MM:ss 포멧으로 출력됩니다. (사용자의 시간대로 출력)
- 답장을 클릭하면 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력창에 자동으로 삽입됩니다. (\n 개행, 입력창에 내용이 존재할때는 입력된 내용 앞에 입력됩니다.
- 삭제 버튼을 클릭하면 "*** 메시지를 삭제하시겠습니까?" 라는 메시지가 출력되며 응답시 삭제됩니다. (***은 메시지 내용중 최대 10자 까지 보여주며 뒤에는 ... 처리됩니다.)

데이터
- 메시지의 데이터 모델에는 userId, userName, profileImage, content, date 등이 있습니다.

<br/>

## 프로젝트 실행 방법

```
$ git clone https://github.com/PreOnboardingTeam-16/2ndweek-swit-task.git
$ npm install
$ npm start

```

<br/>

## 이슈정리


### Top-Down & Bottom-Up

![https://user-images.githubusercontent.com/84373490/153566544-f316567b-2720-4948-9934-3f2c772c2e63.jpg](https://user-images.githubusercontent.com/84373490/153566544-f316567b-2720-4948-9934-3f2c772c2e63.jpg)

우리팀은 지난 1주차 과제에서는 요구사항을 분석하고, 설계하는데 시간을 많이 들이는 `Top-Down` 개발방식으로 진행했습니다.

`Top-Down`은 견고한 설계를 가지고 큰 것을 작은 요소로 분해해 개발해 나가기 때문에 접근이 쉽고, 속도가 빠른 장점이 있었습니다. 하지만 계획의 수정이 필요하면, 앞서 구현한 내용에도 역시 크고 작은 수정이 필요하다는 단점이 있었습니다.

이에 우리팀은 이번 과제에서 `Bottom-Up` 방식의 개발방식을 선택했습니다. 작은 것 부터 시작해 재사용할 수 있는 코드의 사용성을 높이고, 전체적인 코드가 결합되기 전이니 계획의 수정에도 좀 더 유연하게 대처할 수 있었습니다. 두 개발방식의 장단점은 분명히 존재하나 `Agile` 방법론에 가까운 개발방식은 `Bottom-Up`이라고 생각했습니다.

<br/>

### TypeScript 사용

이번 프로젝트에서는 JavaScript와 TypeScript 중에서 TypeScript를 선택해서 사용했습니다. 프로젝트 시작 전, 팀원들과 브레인스토밍을 통해 JavaScript를 사용하면 기능을 빠르게 구현할 수 있다는 장점이 있지만 자율성이 큰 만큼 프로그램이 의도대로 동작하는지 확인하기 힘들다는  나왔습니다. JavaSCript의 이러한 단점은 비용 낭비를 일으키는 문제로 초래될 수 있습니다. 따라서 우리팀은 런타임 전에 타입 에러를 검출하여 디버깅해주는 TypeScript가 비용대비 이점이 크다고 생각하여 TypeScript를 사용하기로 했습니다.

<br/>

### 전역상태 관리

Redux로 로그인된 유저의 정보를 전역상태로 관리하라는 과제 요구사항이 있었습니다. 유저의 정보처럼 대화목록도 redux에서 상태를 관리해야할지 고민하였습니다. 하지만 폴더 구조를 설계하면서 대화목록은 한 폴더 내에서만 쓰이기 때문에 전역상태로 관리해줄 필요가 없다는 결론이 나왔고, 유저 정보만 전역상태로 관리하였습니다.

### Redux Persist

![https://user-images.githubusercontent.com/84373490/153620985-b063959a-e210-4a4d-9b33-70d24822fbe4.jpg](https://user-images.githubusercontent.com/84373490/153620985-b063959a-e210-4a4d-9b33-70d24822fbe4.jpg)

`Redux persist`를 사용하여 Refresh 이후에도 state가 유지되도록 만들었습니다. Login 정보가 담긴 state는 `localStorage`에 저장됩니다.

<br/>


  
### unable to resolve dependency tree
  
<details>
  <summary>상세 보기</summary>

![https://user-images.githubusercontent.com/84373490/153573779-801d3bb0-4fe0-4e9c-b04b-86b86ed67254.jpg](https://user-images.githubusercontent.com/84373490/153573779-801d3bb0-4fe0-4e9c-b04b-86b86ed67254.jpg)

프로젝트 초기설정을 위해 `craco`를 설치하던 도중 에러를 만났습니다.

에러 메시지를 읽어보니 `craco` 설치를 위해서는 `react-scripts 4.0.0`이 필요한데, 현재 프로젝트는 `react-scripts 5.0.0` 라는 버전 에러 였습니다. 그리고 `--force`나 `--legacy-peer-deps` 키워드를 사용하면 해결할 수 있지만 잠재적으로 깨질 수 있지만 해결할 수 있다고 합니다.

[What does npm install --legacy-peer-deps do exactly?🚀](https://stackoverflow.com/questions/66239691/what-does-npm-install-legacy-peer-deps-do-exactly-when-is-it-recommended-wh)

[When to use --force and --legacy-peer-deps?🚀](https://stackoverflow.com/questions/66020820/npm-when-to-use-force-and-legacy-peer-deps)

위 문서의 요약은 다음과 같습니다.

우리가 라이브러리를 설치하면 `package.json`의 `dependencies` , `devDependencies` 항목에 기록이 됩니다. 그리고 여기에 기록되지 않는 `peerDependencies` 라는 항목이 있습니다. 이 항목은 해당 라이브러리의 실행을 위해서 필요한 `dependencies`의 정보입니다. 이 항목 설치 후 `package-lock.json`에 기록되어 있습니다.

![https://user-images.githubusercontent.com/84373490/153626757-acc2be23-6b51-4bc5-b2fa-ee9b71709303.jpg](https://user-images.githubusercontent.com/84373490/153626757-acc2be23-6b51-4bc5-b2fa-ee9b71709303.jpg)

우리는 `craco`를 설치하려고 했을 때 `carco`의 `peerDependencies` 항목의 `react-scripts 4.0.0`이 필요하다고 했지만 프로젝트에는 `react-scripts 5.0.0`이 있었기 때문에 오류가 발생했던 것이였습니다.

`npm VER.4-6` 까지는 `peerDependencies` 관련 이슈가 발생하면 오류가 아닌 경고만 출력했지만, 작년 21월 2월 `npm VER.7`이 출시되면서(현재는 `VER.8`) 오류가 발생하는것으로 변경되었습니다.

여기서 `--force` 키워드를 사용하면 필요한 `peerDependencies`를 설치 후, 설치를 진행합니다.

![https://user-images.githubusercontent.com/84373490/153630787-d53ebd82-7829-4038-babf-bee1b9c3766e.jpg](https://user-images.githubusercontent.com/84373490/153630787-d53ebd82-7829-4038-babf-bee1b9c3766e.jpg)

위 사진에서는 `react-scripts 4.0.0`을 설치하려했지만 충돌이 발생하여 설치하지 않고, 해당 라이브러리를 설치합니다. 버전다운 시킬 수 없어 패스한걸로 보입니다. 이 외에도 `package-lock.json`에 추가되는 파일이 존재합니다. 여기서 만약 설치에 실패한다면

```
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.

```

라는 오류 메시지를 출력합니다.

- `-legacy-peer-deps` 키워드를 사용하면 `peerDependencies` 설치 없이, 설치를 진행합니다.

![https://user-images.githubusercontent.com/84373490/153620989-6b802011-9255-4e0a-85bb-33b29e6a1d32.jpg](https://user-images.githubusercontent.com/84373490/153620989-6b802011-9255-4e0a-85bb-33b29e6a1d32.jpg)

만약 해당 이슈를 만난다면 `--force` 키워드 사용을 추천합니다. 버전을 고정시키려는 시도가 있기 때문에 `--legacy-peer-deps` 키워드보다 엄격하다고 볼 수 있습니다.

  </details>
<br/>

### [⚡구현 중 기술적 이슈들](https://www.notion.so/147cebca75be4244952fbc6e2c316065)
<br/>

## 디렉토리 구조

```
├─public
│  └─Images
└─src
    ├─Components
    │  ├─Header
    │  ├─Login
    │  ├─Main
    │  ├─Messenger
    │  │  ├─Balloon
    │  │  ├─Button
    │  │  ├─Chat
    │  │  └─Input
    │  └─UserProfile
    ├─Const
    ├─Hooks
    ├─Redux
    ├─Style
    └─Types

```

## 프로젝트 후기

- 🎹신원규 : 바텀업으로 개발하며, 팀원간의 소통이 이전에 비해 활발해져 의사결정시간이 단축되어 좋은 아웃풋이 나오지 않았나 생각합니다.<br/>특히, 답장 기능이 기술적 이슈를 팀적으로 해결하는 경험은 상당히 흥미로웠고 협업을 하며 이슈를 어떤식으로 관리해야하는지에 대해 경험을 쌓을 수 있었던 기회였습니다.
- 🎇김서윤 : 유저 정보를 전역 상태로 관리하면서, 팀원들과 활발한 소통을 통해 코드를 수정하면서 더 효율적으로 상태관리를 할 수 있었습니다. 그리고 기술적 이슈가 생겼을 때, 팀원들과 함께 고민하는 과정에서 팀원들의 문제해결 스킬도 배울 수 있었습니다.
- 🎈권영채 :
