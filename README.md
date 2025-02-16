# prography-10th-frontend 과제

![prography-10th-frontend onrender com_ (1)](https://github.com/user-attachments/assets/5b45f473-8501-46b6-a70a-71c90c8f29c6)


#### 배포 URL 
> [prography-10th-frontend](https://prography-10th-frontend.onrender.com/) (오랫동안 접속 안하면 서버가 꺼져서 50초 이상 걸릴 수 있습니다.🥲)

#### 로컬 실행방법
> yarn run dev

## 주안점

### FSD (Featured Slice Design)
모듈식 아키텍처 대신 FSD 아키텍처를 구현하려고 노력했습니다.
초반에 형식을 갖추느라 시간이 오래걸렸는데, 개발 후반으로 갈수록 개발속도가 빨라지는 것을 느낄 수 있었습니다.
다만 하나의 컴포넌트가 어느 레이어나 슬라이스에 들어가는지 고민하는 시간이 개발 시간과 맞먹고 아키텍처 구조에 확신이 안가서 개발 끝까지 FSD 아키텍처를 지킬 수 없었습니다.
더 FSD 아키텍처 예제를 찾아보며 공부해야겠습니다.😅

### Zero Install
Yarn PnP의 Zero Install을 적용해서 배포시간 단축을 꾀했습니다.

[Feature-Sliced Design](https://feature-sliced.design/kr/)

## 개발환경

- Language : TS
- Styling : CSS Module
- Library : React, React Router, Zustand, clsx
- Lint : biome
