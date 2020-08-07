# 부캠나우 2주차 (2020-08-07)

---

# 요구사항

## 2주차

- 댓글 기능이 구현된 게시판(코딩, 아재개그, 운동, 음악, 역사, 맛집, 음주 등)
- 관심사(코딩, 운동, 음악, 역사, 맛집탐방, 음주 등)
- 기능 A (주) : 욕설 필터링 / 욕설, 비방을 걸러주는 기능
- 기능 A (부) : 읽음이 / TTS(CSS) 서비스를 통해 게시글 읽어주는 서비스

---

# 프론트 엔드

## 전체 구조

![https://i.imgur.com/urcYXIV.png](https://i.imgur.com/urcYXIV.png)

프론트엔드의 전체 구조를 설정하였습니다.

## 웹 프레임워크 : React

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/66445b41-5c76-4538-ad61-41969d662249/Untitled.png](https://jeonghwan-kim.github.io/assets/imgs/2018/07/16/react-logo.jpg)

유저 인터페이스를 만드는 데 사용되는 오픈 소스 자바스크립트 라이브러리로 페이스북에서 개발하였습니다. Components 를 이용한 Class 형식의 웹 제작 툴로, 현재 부스트캠프에서 배우는 자바스크립트를 잘 활용 할 수 있을 거라 생각해서 선택하게 되었습니다. 실시간 동기화로 코드를 수정하면 바로 웹 페이지에 적용됩니다.

## 디자인 프레임워크 : Material UI

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9a11654-6b36-4820-aa2e-6d085d76aa64/Untitled.png](https://material-ui.com/static/logo_raw.svg)

현재 React를 사용할 경우 가장 많이 이용되는 CSS 라이브러리 입니다. React의 장점인 npm install을 통해 쉽게 설치할 수 있으며, 기본적인 템플릿이나 기능을 제공합니다.

## 메인 화면

![https://i.imgur.com/Fp1rW5Q.png](https://i.imgur.com/Fp1rW5Q.png)

현재 구현된 기능은 메인 화면, 글쓰기, 게시물 내용입니다.  댓글 기능을 제외하고 나머지에 집중하였습니다. 일단 게시판은 자유게시판 하나만 구현했으며, 글쓰기를 이용해서 새 글을 올릴 수 있습니다.

 

---

# 백엔드

써주세요~