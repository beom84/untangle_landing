# PRD: Untangle 랜딩페이지

## 1. 제품 개요 (Product Overview)

**제품명:** Untangle  
**슬로건:** "함께 생각을 정리하고, 나를 이해하는 파트너"  
**플랫폼:** iOS 앱 (사전 출시 단계)  
**현재 상태:** 사전 등록(Waitlist) 수집 중  
**메타 설명:** "Untangle offers personalized ADHD strategies, task management, and daily support to help you boost focus, build habits, and achieve your goals."

Untangle은 성인 ADHD를 위한 AI 기반 개인 코치 및 일상 플래너 앱이다. 단순 할 일 관리 앱과 달리, 사용자의 ADHD 특성을 학습하고, 에너지 수준에 맞게 하루를 계획하며, 필요할 때 먼저 도움을 제안하는 능동적 파트너를 지향한다.

---

## 2. 문제 정의 (Problem Statement)

성인 ADHD 환자들이 겪는 핵심 어려움:
- 전체 성인의 4.4%가 ADHD를 경험하지만, 20% 미만만이 적절한 도움을 받는다
- ADHD 성인의 80%가 체계적 정리, 시간 관리, 업무 완료에 어려움을 겪는다
- ADHD 성인은 스트레스, 우울, 감정 조절 어려움을 겪을 확률이 3배 높다

기존 솔루션의 한계:
- 일반 AI(ChatGPT): ADHD 특성을 이해하지 못하는 범용 도구
- 일반 할 일 앱: ADHD 뇌에 맞게 설계되지 않음
- 기존 ADHD 앱: 지속적 학습과 개인화 부족
- 치료사/코치: 비용 높고 24/7 접근 불가

---

## 3. 타겟 사용자 (Target Users)

**주요 대상:** 한국어 사용 성인 ADHD 환자

**페르소나:**
- 20~40대 직장인 또는 학생
- ADHD 진단을 받았거나 자가 진단한 성인
- 할 일 목록을 만들지만 실행에 어려움을 겪는 사람
- 집중력 유지, 루틴 형성, 감정 조절에 도움이 필요한 사람
- 공식 진단이 없어도 사용 가능 (진단 불필요)

---

## 4. 제품 목표 (Product Goals)

**랜딩페이지 목표:**
1. 브랜드 인지도 구축: Untangle의 가치 제안을 명확하게 전달
2. 사전 등록 전환: 방문자를 waitlist 신청으로 전환
3. 신뢰 구축: 통계, 기능 스크린샷, FAQ를 통해 신뢰성 확보

**앱 제품 목표:**
1. 사용자 개인화: ADHD 강점과 어려움을 학습하여 맞춤 전략 제공
2. 실행 가능성: 압도적인 과제를 실행 가능한 단계로 분해
3. 능동적 지원: 사용자가 기억하기 전에 먼저 알림/제안

---

## 5. 핵심 기능 (Core Features)

### 5.1 ADHD 맞춤 할 일 관리
- 에너지 수준 기반 하루 계획 수립
- 복잡한 프로젝트를 실행 가능한 단계로 분해
- 변화하는 하루에 유연하게 계획 조정

### 5.2 개인화 ADHD 코칭
- 사용자의 ADHD 강점과 반복 어려움 파악
- 지속 가능한 전략 생성 및 학습
- 실행 가이드 제공

### 5.3 능동적 AI 어시스턴트
- 사용자가 기억하기 전에 먼저 타이밍 맞는 알림 발송
- 중요 마감일 및 미루는 할 일 확인
- 실행 전략 제안

---

## 6. 랜딩페이지 섹션 구조 (Page Structure)

| # | 섹션 | 목적 |
|---|------|------|
| 1 | Header (고정) | 브랜드 로고 + 사전 등록 CTA |
| 2 | Hero | 핵심 가치 제안 + 앱 목업 + 주 CTA |
| 3 | 가치 제안 3종 카드 | 핵심 기능 요약 (아이콘 + 설명) |
| 4 | 기능 상세 #1 | ADHD 맞춤 할 일 관리 (스크린샷 + 설명) |
| 5 | 기능 상세 #2 | 개인화 ADHD 코칭 (스크린샷 + 설명) |
| 6 | 기능 상세 #3 | 능동적 AI 어시스턴트 (스크린샷 + 설명) |
| 7 | 통계 + 사전 등록 폼 | 문제 규모 제시 + 전환 유도 |
| 8 | FAQ (현재 숨김) | 자주 묻는 질문 8가지 |
| 9 | Footer | 회사 정보 + 링크 |

---

## 7. UI/UX 요구사항 (Design Requirements)

### 컬러 시스템

| 용도 | 색상 |
|------|------|
| Primary Gradient | #479949 → #007e9c (318deg) |
| CTA 버튼 | #ffe813 (Yellow) |
| 본문 텍스트 | #161616, #101010 |
| 강조 (체크마크, 하이라이트) | #4f8f9b, #8dbdc8 |
| Footer 배경 | #1a1a1a |

### 타이포그래피
- 폰트: System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI"`)
- Hero 제목: 60px (모바일: 33px)
- 섹션 제목: 56px → 28px (반응형)
- 본문: 25px → 17px (반응형)

### 반응형 브레이크포인트

| 구간 | 너비 |
|------|------|
| Desktop | 1240px+ |
| Tablet | 1024px |
| Mobile | 767px |

### 레이아웃 패턴
- Hero: 2컬럼 그리드 (580px + 1fr)
- 가치 제안: 3컬럼
- 기능 상세: 좌우 교대 레이아웃 (1.05fr + 0.95fr)
- 통계: 3컬럼
- Container 최대 너비: 1240px

### 특수 효과
- Header: 스크롤 시 backdrop-blur (18~22px)
- Hero/Stats 배경: 그라디언트
- Feature 이미지: drop-shadow
- 섹션 border-radius: 24~40px

---

## 8. 사전 등록 폼 (Pre-registration Form)

**입력 방식:** 전화번호 / 이메일 토글 선택
- 전화번호: `010-1234-5678` 형식
- 이메일: `name@example.com` 형식

**CTA 텍스트:** "사전 등록하기"

**위치:** Header (고정), Hero 섹션, Stats 섹션 (3곳)

---

## 9. FAQ 항목 (숨김 상태)

현재 `display: none` 처리된 8가지 질문:
1. Untangle이 일반 AI(ChatGPT)와 다른 점
2. 일반 할 일 앱과 Untangle의 차이
3. 다른 ADHD 앱과의 차별점
4. Untangle이 실제로 ADHD를 이해할 수 있는가
5. 공식 ADHD 진단 없이 사용 가능한가
6. AI 의존성 우려
7. 치료사/코치를 대체할 수 있는가
8. 데이터 프라이버시 및 보안

---

## 10. 기술 스택 (Tech Stack)

| 항목 | 기술 |
|------|------|
| Framework | Next.js 16.2.7 |
| UI Library | React 19.2.4 |
| Language | TypeScript 5 |
| Styling | CSS Modules (Tailwind 미사용) |
| Deployment | Vercel (추정) |
| App Platform | iOS (App Store 배지 사용) |

---

## 11. 콘텐츠 에셋 (Content Assets)

| 에셋 | 파일 | 용도 |
|------|------|------|
| 앱 목업 | hero-phone-cutout-v2.png | Hero 섹션 |
| 기능 스크린샷 1 | feature-1-cutout.png | 할 일 관리 섹션 |
| 기능 스크린샷 2 | feature-2-cutout.png | 코칭 섹션 |
| 기능 스크린샷 3 | feature-3-cutout.png | AI 어시스턴트 섹션 |
| 능동적 메시지 | proactive-messages.png | 기능 3 보조 이미지 |
| 앱 로고 | cropped-ari-logo-256x256-1.png | 헤더/푸터 |
| App Store 배지 | Download_on_the_App_Store_Badge.svg | 다운로드 링크 |

---

## 12. 성공 지표 (Success Metrics)

- **주 KPI:** 사전 등록 전환율 (CVR)
- **보조 KPI:**
  - 랜딩페이지 방문자 수
  - 페이지 체류 시간
  - 스크롤 깊이 (feature 섹션까지 도달 비율)
  - 폼 시작 대비 완료율

---

## 13. 오픈 이슈 / 추후 검토 사항

- FAQ 섹션 노출 시점 결정 필요 (현재 숨김)
- 폼 제출 시 백엔드 연동 방식 미구현
- Android 지원 계획 없음 (iOS 전용 App Store 배지만 사용)
- 헤드샷 이미지(`headshot.jpeg`) 사용 섹션 미확인 (삭제 또는 추가 섹션 예정)
- "Ari" 브랜드명 참조 (로고 파일명 `cropped-ari-logo-256x256-1.png`) — Untangle과 관계 정리 필요
