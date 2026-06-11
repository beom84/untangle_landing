import type { Metadata } from "next";
import Link from "next/link";
import styles from "./privacy.module.css";

const title = "개인정보 처리방침 | Untangle";
const description =
  "Untangle 사전등록 랜딩페이지에 적용되는 개인정보 처리방침입니다.";

export const metadata: Metadata = {
  title,
  description,
};

const collectionRows = [
  {
    category: "사전등록 신청",
    items: ["전화번호 또는 이메일 주소(택1)", "신청 시각", "submissionKey"],
    purpose: "사전등록 접수, 중복 신청 확인, 출시 안내 발송",
  },
  {
    category: "사전 설문 응답",
    items: [
      "생각이 많이 맴도는 영역",
      "최근 어려움을 느낀 순간",
      "현재 사용 중인 대처 방법",
      "지금 방법에서 아쉬운 점",
      "직접 입력한 기타 응답",
    ],
    purpose: "사용자 수요 파악, 서비스 개선, 출시 준비",
  },
  {
    category: "서비스 이용 과정",
    items: [
      "접속 일시",
      "브라우저 및 기기 정보",
      "이벤트 로그",
      "쿠키 또는 유사 기술 기반 식별자",
    ],
    purpose: "접속 통계 분석, 오류 확인, 서비스 품질 개선",
  },
];

const retentionRows = [
  {
    label: "사전등록 정보 및 설문 응답",
    value:
      "서비스 출시 안내 완료일 또는 수집일로부터 12개월이 경과한 날 중 먼저 도래하는 시점까지 보관 후 지체 없이 파기합니다.",
  },
  {
    label: "이용기록 및 분석 데이터",
    value:
      "분석 목적 달성 시까지 또는 각 수탁사의 보관정책에 따른 기간 동안 보관 후 삭제됩니다.",
  },
  {
    label: "예외",
    value:
      "관계 법령에 따라 별도로 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.",
  },
];

const transferRows = [
  {
    name: "Google LLC",
    country: "미국 등 Google 클라우드 서비스 제공 지역",
    method: "사전등록 또는 설문 제출 시 네트워크를 통한 전송",
    items: "연락처, 신청 시각, submissionKey, 설문 응답",
    purpose: "Google Apps Script 및 Google Sheets를 이용한 신청 정보 저장",
    period: "보유기간 종료 시 또는 위탁 종료 시까지",
  },
  {
    name: "Amplitude, Inc.",
    country: "미국",
    method: "페이지 이용 시 네트워크를 통한 전송",
    items: "이벤트 로그, 브라우저/기기 정보, 쿠키 또는 유사 식별자",
    purpose: "이용 통계 분석 및 서비스 개선",
    period: "분석 목적 달성 시 또는 위탁 종료 시까지",
  },
];

const rights = [
  "개인정보 열람, 정정, 삭제, 처리정지 및 동의 철회를 요청할 수 있습니다.",
  "권리 행사는 아래 문의 채널을 통해 요청할 수 있으며, 특별한 사정이 없는 한 지체 없이 조치합니다.",
  "법령에 따라 일부 요청은 제한되거나 추가 확인 절차가 필요할 수 있습니다.",
];

const safeguards = [
  "개인정보 접근 권한을 필요한 범위로 제한합니다.",
  "개인정보가 저장된 외부 서비스의 접근 권한과 공유 범위를 주기적으로 점검합니다.",
  "개인정보 처리 시스템의 접근기록 및 오류 상황을 확인해 오남용을 방지합니다.",
];

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Privacy Policy</p>
          <h1 className={styles.title}>Untangle 개인정보 처리방침</h1>
          <p className={styles.description}>
            본 개인정보 처리방침은 Untangle 사전등록 랜딩페이지에서 수집되는
            개인정보의 처리 기준을 설명합니다.
          </p>
          <div className={styles.metaRow}>
            <span>시행일: 2026년 6월 5일</span>
            <Link href="/" className={styles.backLink}>
              랜딩으로 돌아가기
            </Link>
          </div>
        </div>

        <section className={styles.section}>
          <h2>1. 처리하는 개인정보 항목 및 목적</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>수집 항목</th>
                  <th>처리 목적</th>
                </tr>
              </thead>
              <tbody>
                {collectionRows.map((row) => (
                  <tr key={row.category}>
                    <td>{row.category}</td>
                    <td>
                      <ul className={styles.cellList}>
                        {row.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>2. 개인정보의 보유 및 이용기간</h2>
          <div className={styles.infoList}>
            {retentionRows.map((row) => (
              <article key={row.label} className={styles.infoCard}>
                <h3>{row.label}</h3>
                <p>{row.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>3. 개인정보의 제3자 제공</h2>
          <p className={styles.paragraph}>
            Untangle은 정보주체의 개인정보를 제1항의 처리 목적 범위에서만
            처리하며, 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
            다만 법령에 특별한 규정이 있거나 정보주체의 별도 동의가 있는 경우는
            예외로 합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. 개인정보 처리 위탁 및 국외 이전</h2>
          <p className={styles.paragraph}>
            Untangle은 서비스 운영을 위해 아래와 같이 외부 서비스를 이용할 수
            있으며, 이 과정에서 개인정보가 국외로 이전될 수 있습니다.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>수탁사</th>
                  <th>이전 국가</th>
                  <th>이전 시점 및 방법</th>
                  <th>이전 항목</th>
                  <th>이용 목적</th>
                  <th>보유 기간</th>
                </tr>
              </thead>
              <tbody>
                {transferRows.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.country}</td>
                    <td>{row.method}</td>
                    <td>{row.items}</td>
                    <td>{row.purpose}</td>
                    <td>{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>5. 개인정보의 파기 절차 및 방법</h2>
          <ul className={styles.bulletList}>
            <li>
              보유기간이 경과하거나 처리 목적이 달성된 개인정보는 지체 없이
              파기합니다.
            </li>
            <li>
              전자적 파일 형태의 개인정보는 복구 또는 재생이 어렵도록 합리적인
              방법으로 삭제합니다.
            </li>
            <li>
              종이 문서에 출력된 개인정보는 분쇄 또는 소각 등의 방법으로
              파기합니다.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. 정보주체의 권리와 행사 방법</h2>
          <ul className={styles.bulletList}>
            {rights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. 개인정보의 안전성 확보조치</h2>
          <ul className={styles.bulletList}>
            {safeguards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. 쿠키 및 유사 기술의 이용</h2>
          <p className={styles.paragraph}>
            Untangle은 이용 행태 분석과 서비스 품질 개선을 위해 쿠키 또는
            이와 유사한 기술을 사용할 수 있습니다. 이용자는 브라우저 설정을
            통해 쿠키 저장을 거부하거나 삭제할 수 있으나, 일부 분석 기능이
            제한될 수 있습니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. 문의 채널</h2>
          <div className={styles.contactCard}>
            <p>서비스명: Untangle</p>
            <p>
              문의 채널:{" "}
              <a
                href="https://open.kakao.com/o/sgF3hZyi"
                target="_blank"
                rel="noreferrer"
                className={styles.externalLink}
              >
                카카오톡 오픈채팅 바로가기
              </a>
            </p>
            <p>
              개인정보 관련 열람, 정정, 삭제, 처리정지, 동의 철회 요청은 위
              채널을 통해 접수할 수 있습니다.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>10. 처리방침 변경</h2>
          <p className={styles.paragraph}>
            본 개인정보 처리방침의 내용 추가, 삭제 또는 수정이 있는 경우에는
            변경사항 시행 전에 본 페이지를 통해 공지합니다.
          </p>
        </section>
      </div>
    </main>
  );
}
