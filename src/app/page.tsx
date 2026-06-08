"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

type Feature = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  bullets: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  visualTone?: "default" | "dark";
  reverse?: boolean;
};

type Stat = {
  value: string;
  text: string;
  sourceLabel: string;
  sourceHref: string;
};

type Faq = {
  question: string;
  answer: string[];
};

const valueProps = [
  {
    title: "나만을 위한 ADHD 파트너",
    body: "Untangle은 당신의 고유한 어려움과 강점을 이해하고, 함께 발전해 나가는 맞춤형 전략을 제안합니다.",
    icon: "brain",
  },
  {
    title: "똑똑한 하루 계획과 할 일 관리",
    body: "벅찬 일을 실행 가능한 단계로 나누고, 하루의 우선순위를 정하고, 상황에 맞게 계획을 조정할 수 있도록 도와줍니다.",
    icon: "calendar",
  },
  {
    title: "언제나 곁에 있는 ADHD 동반자",
    body: "필요한 순간마다 알림, 집중 전략, 그리고 다시 움직일 수 있는 힘을 낮과 밤 구분 없이 건네드립니다.",
    icon: "chat",
  },
];

const features: Feature[] = [
  {
    eyebrow: "생산성을 높이는 방식",
    title: "ADHD에 맞춰 설계된 할 일 관리",
    titleAccent: "할 일 관리",
    description: "Untangle은 당신의 할 일을 이렇게 함께 정리합니다:",
    bullets: [
      "그날의 에너지에 맞춰 하루 계획을 세워주고",
      "복잡한 프로젝트를 실행 가능한 단계로 나누고",
      "하루 동안 바뀌는 상황에 맞게 유연하게 조정합니다",
    ],
    image: {
      src: "/source-assets/feature-1.jpeg",
      alt: "Untangle task planner screenshot",
      width: 753,
      height: 1024,
    },
  },
  {
    eyebrow: "나에게 맞는 코칭",
    title: "개인화된 ADHD 코칭",
    titleAccent: "ADHD 코칭",
    description:
      "Untangle은 당신에게 맞는 실행 전략을 함께 설계합니다:",
    bullets: [
      "당신의 ADHD 강점과 반복되는 어려움을 파악하고",
      "실제로 지속 가능한 전략을 함께 만들고",
      "필요한 순간마다 바로 실행할 수 있는 가이드를 제공합니다",
    ],
    image: {
      src: "/source-assets/feature-2.jpeg",
      alt: "Untangle coaching support screenshot",
      width: 753,
      height: 1024,
    },
    reverse: true,
  },
  {
    eyebrow: "흐름을 놓치지 않도록",
    title: "먼저 챙겨주는 AI 어시스턴트",
    titleAccent: "AI 어시스턴트",
    description: "Untangle은 당신이 기억해내길 기다리지 않습니다:",
    bullets: [
      "할 일을 시작할 수 있도록 적절한 순간에 가볍게 알려주고",
      "중요한 일정이나 미뤄둔 일을 놓치지 않게 점검해주고",
      "그날의 흐름에 맞는 실행 전략을 바로 제안합니다",
    ],
    image: {
      src: "/source-assets/feature-3.jpeg",
      alt: "Untangle proactive messages screenshot",
      width: 766,
      height: 1024,
    },
    visualTone: "dark",
  },
];

const stats: Stat[] = [
  {
    value: "4.4%",
    text: "성인 중 4.4%가 ADHD를 겪고 있지만, 도움을 받는 비율은 20% 미만입니다",
    sourceLabel: "Source: National Institute of Health",
    sourceHref:
      "https://www.nimh.nih.gov/health/statistics/attention-deficit-hyperactivity-disorder-adhd",
  },
  {
    value: "80%",
    text: "ADHD를 가진 성인의 80%는 정리, 시간 관리, 할 일 완료에 어려움을 겪습니다",
    sourceLabel: "Source: Journal of Attention Disorders",
    sourceHref: "https://www.ncbi.nlm.nih.gov/",
  },
  {
    value: "3X",
    text: "ADHD를 가진 성인은 스트레스, 우울, 정서적 어려움을 겪을 가능성이 3배 높습니다",
    sourceLabel: "Source: National Comorbidity Survey Replication",
    sourceHref: "https://www.ncbi.nlm.nih.gov/",
  },
];

const faqs: Faq[] = [
  {
    question: "Untangle은 ChatGPT 같은 일반 AI와 무엇이 다른가요?",
    answer: [
      "ChatGPT 같은 일반 AI도 대화를 도와줄 수는 있지만, ADHD 지원을 위해 특별히 설계된 도구는 아닙니다.",
      "Untangle은 일정과 할 일 맥락을 이해하는 ADHD 전용 코치이자 어시스턴트로 설계되었습니다. 시간이 지날수록 사용자의 패턴, 어려움, 목표를 더 깊이 이해하게 되고, 그에 맞는 더 개인화된 전략을 제안할 수 있습니다.",
    ],
  },
  {
    question: "왜 일반적인 투두 앱이나 일정 관리 앱 대신 Untangle을 써야 하나요?",
    answer: [
      "ADHD가 있는 많은 사람들에게는 투두 리스트를 만드는 일 자체도 버겁게 느껴질 수 있습니다. 일반 앱은 의욕이 충분할 때는 도움이 되지만, 막막하거나 집중이 흐트러질 때는 한계가 있습니다.",
      "Untangle은 하루 상태에 맞춰 계획 수준을 조절하고, 할 일을 작은 단계로 나누고, 필요한 타이밍에 리마인드를 제공합니다. 단순히 적어두는 앱이 아니라, 실제로 실행까지 이어지도록 돕는 도구입니다.",
    ],
  },
  {
    question: "SNS에서 자주 보이는 다른 ADHD 앱과는 무엇이 다른가요?",
    answer: [
      "많은 ADHD 앱은 정보 제공이나 일반적인 팁 중심으로 구성되어 있습니다. 그런 정보도 유용하지만, 실제 하루를 운영하는 데에는 별도의 실행 도구가 필요합니다.",
      "Untangle은 ADHD 관리에 대한 이해를 바탕으로, 매일의 일정과 할 일 안에서 바로 실행할 수 있는 형태로 도움을 제공합니다. 즉, 지식 전달을 넘어서 실제 행동 변화까지 연결하는 데 초점이 있습니다.",
    ],
  },
  {
    question: "Untangle이 정말 제 ADHD 특성을 이해할 수 있나요?",
    answer: [
      "네. Untangle은 각 사용자의 ADHD 패턴을 더 깊고 구체적으로 이해하도록 설계되어 있습니다.",
      "단순히 정해진 답을 반복하는 AI가 아니라, 지속적인 상호작용을 통해 사용자의 습관, 어려움, 선호하는 방식 등을 학습합니다. 사용할수록 더 정확하게 필요를 예측하고, 더 맞춤형 전략을 제안할 수 있습니다.",
    ],
  },
  {
    question: "공식적으로 ADHD 진단을 받지 않았어도 사용할 수 있나요?",
    answer: [
      "물론입니다. Untangle은 공식 진단을 받은 사람만을 위한 도구가 아닙니다.",
      "ADHD와 비슷한 어려움을 겪고 있거나, 실행 기능 문제로 일상 관리가 어렵거나, 전반적으로 신경다양성 맥락에서 도움이 필요한 경우에도 유용할 수 있습니다. 다만 ADHD나 다른 인지 특성이 의심된다면 전문가 상담은 함께 받아보는 것을 권장합니다.",
    ],
  },
  {
    question: "Untangle을 쓰다 보면 AI에 의존하게 되지 않을까요?",
    answer: [
      "그렇지 않습니다. Untangle의 목표는 사용자가 ADHD를 더 잘 관리할 수 있도록 돕는 것입니다.",
      "장기적으로는 스스로 조절하고 실행하는 힘을 키우는 방향을 지향합니다. 시간이 지나면서 Untangle은 밀착 코치라기보다, 당신이 하루를 어떻게 운영하는지 잘 아는 스마트한 보조 도구에 가까워질 수 있습니다.",
    ],
  },
  {
    question: "Untangle이 인간 코치나 치료사를 대체할 수 있나요?",
    answer: [
      "Untangle은 유용한 지원 도구이지만, 전문적인 의료 조언이나 치료를 대신할 수는 없습니다.",
      "기존 치료나 코칭과 함께 사용할 때 더 효과적일 수 있습니다. 일상적인 실행 지원과 진행 상황 추적을 통해 전문적인 도움을 보완하는 역할을 합니다.",
    ],
  },
  {
    question: "내 데이터는 안전한가요?",
    answer: [
      "Untangle은 개인정보 보호와 데이터 보안을 매우 중요하게 다룹니다. 업계 표준 수준의 암호화와 엄격한 데이터 보호 원칙을 따릅니다.",
      "개인정보는 판매되거나 제3자와 공유되지 않으며, 일부 AI 서비스처럼 다른 목적의 모델 학습에 임의로 사용되지 않습니다. 원하면 언제든 데이터 삭제를 요청할 수 있습니다.",
    ],
  },
  {
    question: "Untangle은 언제 사용할 수 있고, 가격은 어떻게 되나요?",
    answer: [
      "출시 후에는 무료 체험 기간을 통해 Untangle의 기능을 직접 경험해볼 수 있습니다.",
      "초기 사용자에게는 베타 또는 파일럿 기간 동안 특별 할인 혜택이 제공될 예정입니다. 정확한 가격은 출시 시점에 더 가까워지면 안내되며, 목표는 높은 품질의 개인화된 지원을 유지하면서도 최대한 많은 사람이 접근할 수 있게 하는 것입니다.",
    ],
  },
];

function BrainIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M19.5 10c-4.4 0-8 3.6-8 8v1c-2 1.2-3.5 3.5-3.5 6.2 0 3.4 2.4 6.2 5.7 6.8.4 3.5 3.4 6.3 7 6.3 1.7 0 3.3-.6 4.6-1.6 1.3 1 2.9 1.6 4.6 1.6 3.7 0 6.7-2.8 7-6.4 3.2-.7 5.6-3.5 5.6-6.8 0-2.7-1.5-5-3.5-6.2v-1c0-4.4-3.6-8-8-8-2.2 0-4.2.9-5.6 2.4A7.8 7.8 0 0 0 19.5 10Z" />
      <path d="M25.5 12.8v22.5M19.4 15.6c2 1 3.3 3 3.3 5.3v1.4c0 2.6-1.6 4.9-4 5.9m12.9-12.6c-2 1-3.3 3-3.3 5.3v1.4c0 2.6 1.6 4.9 4 5.9M16.4 24.6c1.9.1 3.6 1.1 4.7 2.7m10.5-2.7a6.4 6.4 0 0 0-4.7 2.7" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M13 10.5v6M35 10.5v6M11 17.5h26M14 37h20a3 3 0 0 0 3-3V15a3 3 0 0 0-3-3H14a3 3 0 0 0-3 3v19a3 3 0 0 0 3 3Z" />
      <path d="M18 24h6v7h-6zM31.5 17.3a5.8 5.8 0 1 1 0 11.5 5.8 5.8 0 0 1 0-11.5Zm0 0v3.2l2 1.8" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M11 13h26a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H23l-7.5 5v-5H11a3 3 0 0 1-3-3V16a3 3 0 0 1 3-3Z" />
      <path d="M16 21h16M16 26h10" />
    </svg>
  );
}

function ValueIcon({ type }: { type: string }) {
  if (type === "brain") return <BrainIcon />;
  if (type === "calendar") return <CalendarIcon />;
  return <ChatIcon />;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactMode, setContactMode] = useState<"phone" | "email">("phone");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.page}>
      <header
        className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
      >
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#top" aria-label="Untangle home">
            <span className={styles.brandText}>Untangle</span>
          </a>
          <a className={styles.topbarCta} href="#pre-register">
            사전 등록하기
          </a>
        </div>
      </header>

      <main id="top">
        <section className={styles.heroShell}>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <p className={styles.heroEyebrow}>ADHD를 위한 Untangle</p>
              <h1 className={styles.heroTitle}>
                함께 생각을 정리하고
                <br />
                나를 이해하는 파트너
              </h1>
              <p className={styles.heroBody}>
                하루를 정리하고, 내 뇌를 더 잘 이해하고, 삶을 바꾸도록
                설계된 AI 코치와 함께 잠재력을 끌어올려 보세요.
              </p>
              <div className={styles.heroActions}>
                <a
                  className={styles.ctaSecondary}
                  href="#pre-register"
                >
                  사전 등록하기
                </a>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <Image
                src="/source-assets/hero-phone-cutout.png"
                alt="Untangle mobile app preview"
                width={414}
                height={824}
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles.introSection}>
          <div className={styles.containerNarrow}>
            <h2 className={styles.introTitle}>
              Untangle, ADHD를 위한 올인원 관리 파트너
            </h2>
            <p className={styles.introSubtitle}>
              당신의 삶에 맞춰 반응하는 AI 지원으로
              집중력을 높이고, 다시 앞으로 나아가게 합니다.
            </p>
            <div className={styles.valueGrid}>
              {valueProps.map((item) => (
                <article key={item.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <ValueIcon type={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <div className={styles.container}>
            {features.map((feature) => {
              const title = feature.title.replace(
                feature.titleAccent,
                `__ACCENT__${feature.titleAccent}__ACCENT__`,
              );

              return (
                <article
                  key={feature.title}
                  className={`${styles.feature} ${
                    feature.reverse ? styles.featureReverse : ""
                  }`}
                >
                  <div className={styles.featureText}>
                    <p className={styles.eyebrow}>{feature.eyebrow}</p>
                    <h2>
                      {title.split("__ACCENT__").map((part, index) =>
                        index % 2 === 1 ? (
                          <span key={part} className={styles.featureAccent}>
                            {part}
                          </span>
                        ) : (
                          <span key={part}>{part}</span>
                        ),
                      )}
                    </h2>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                    <ul className={styles.featureList}>
                      {feature.bullets.map((bullet) => (
                        <li key={bullet}>
                          <span className={styles.check}>✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.featureVisualFrame}>
                    <div
                      className={`${styles.featureVisual} ${
                        feature.visualTone === "dark"
                          ? styles.featureVisualDark
                          : ""
                      }`}
                    >
                      <Image
                        src={feature.image.src}
                        alt={feature.image.alt}
                        width={feature.image.width}
                        height={feature.image.height}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="pre-register" className={styles.statsSection}>
          <div className={styles.container}>
            <h2 className={styles.statsTitle}>
              ADHD, 우리가 이 문제에 집중하는 이유
            </h2>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <article key={stat.value} className={styles.statCard}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <p>{stat.text}</p>
                  <a href={stat.sourceHref} target="_blank" rel="noreferrer">
                    ({stat.sourceLabel})
                  </a>
                </article>
              ))}
            </div>
            <form
              className={styles.preRegisterCard}
              onSubmit={(event) => event.preventDefault()}
            >
              <p className={styles.preRegisterTitle}>사전 등록하기</p>
              <p className={styles.preRegisterBody}>
                연락받기 편한 방식 하나만 선택해 남겨주시면 출시 소식을 가장
                먼저 알려드릴게요.
              </p>
              <div className={styles.contactToggle} role="tablist" aria-label="연락 수단 선택">
                <button
                  type="button"
                  className={`${styles.contactToggleButton} ${
                    contactMode === "phone" ? styles.contactToggleButtonActive : ""
                  }`}
                  aria-pressed={contactMode === "phone"}
                  onClick={() => setContactMode("phone")}
                >
                  전화번호
                </button>
                <button
                  type="button"
                  className={`${styles.contactToggleButton} ${
                    contactMode === "email" ? styles.contactToggleButtonActive : ""
                  }`}
                  aria-pressed={contactMode === "email"}
                  onClick={() => setContactMode("email")}
                >
                  이메일
                </button>
              </div>
              <div className={styles.preRegisterFields}>
                <label className={styles.preRegisterField}>
                  <span>{contactMode === "phone" ? "전화번호" : "이메일 주소"}</span>
                  {contactMode === "phone" ? (
                    <input
                      type="tel"
                      name="phone"
                      placeholder="010-1234-5678"
                    />
                  ) : (
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                    />
                  )}
                </label>
              </div>
              <button type="submit" className={styles.preRegisterButton}>
                사전 등록하기
              </button>
            </form>
          </div>
        </section>

        <section className={`${styles.faqSection} ${styles.hiddenSection}`}>
          <div className={styles.containerFaq}>
            <h2 className={styles.faqTitle}>자주 묻는 질문</h2>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <article
                    key={faq.question}
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqItemOpen : ""
                    }`}
                  >
                    <button
                      type="button"
                      className={styles.faqButton}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen ? (
                      <div className={styles.faqAnswer}>
                        {faq.answer.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <p>
            Untangle is your personal AI Coach and ADHD Assistant helping you
            learn, grow, and get more done.
          </p>
        </div>
        <div className={styles.footerBottom}>
          <p>© Rethinkifi, LLC</p>
          <p>
            <a href="https://helloari.ai/privacy/">Privacy</a> |{" "}
            <a href="https://helloari.ai/terms/">Terms of Use</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
