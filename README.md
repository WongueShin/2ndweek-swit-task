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
