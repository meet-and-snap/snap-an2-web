# snap-an2-web

---

## Context View 
![image](https://github.com/meet-and-snap/snap-an2-web/assets/50311545/955b1816-d449-4532-a6aa-846cfaaf859b)

---

## User API

### 회원가입
- POST - /users/sign-up
- body : id (str), pw(str), email(str), address(str), phone-number(str)
### 로그인 
- POST - /users/{id}
- body : pw(str)
### 회원 정보 수정
- PATCH - /users/{id}
- body : pw(str), email(str), address(str), phone-number(str) {Optional}
### 회원 예약 정보 조회
- GET - /users/{id}/bookings
### 회원 예약 정보 삭제
- DELETE - /users/{id}/bookings/{booking-number}

---

## User DB

![image](https://github.com/meet-and-snap/snap-an2-web/assets/50311545/5f482b6f-ca63-4724-aeb5-f142a34d8aa5)

---

## DP

1. DB 선정
2. FE Framework 선정
3. OAuth 추가 개발 여부
4. 자동 로그인 쿠키 추가 개발 여부
