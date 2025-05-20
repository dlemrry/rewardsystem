# rewardsystem

nexon homework

## 실행방법

(현재 auth 서버만 구현한 상태입니다.)

nest  
nest start auth

도커 (현재 안됨)  
docker-compose build --no-cache  
docker-compose up

## 구현내용

passport 로 jwt 토큰을 검증하는 로직을 적용했습니다.  
글로벌 가드 적용, 데코레이터 적용.
dto 사용하여 class-validator 검증 적용
