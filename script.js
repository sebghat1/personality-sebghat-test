const questions = [
  {
    question: "اگه گرسنه باشی، اولین چیزی که بهش فکر می‌کنی چیه؟",
    answers: [
      { text: "پیتزا", type: "شوخ‌طبع" },
      { text: "کباب", type: "باهوش" },
      { text: "سالاد", type: "آروم" }
    ]
  },
  {
    question: "دوست داری وقت آزادت رو چطور بگذرونی؟",
    answers: [
      { text: "خواب!", type: "آروم" },
      { text: "فیلم دیدن", type: "باهوش" },
      { text: "بازی کردن", type: "شوخ‌طبع" }
    ]
  },
  {
    question: "صبح‌ها چطور بیدار می‌شی؟",
    answers: [
      { text: "با سه تا آلارم!", type: "شوخ‌طبع" },
      { text: "بدون آلارم", type: "باهوش" },
      { text: "اصلاً بیدار نمی‌شم!", type: "آروم" }
    ]
  },
  {
    question: "اگه یه گربه باهات حرف بزنه، چی کار می‌کنی؟",
    answers: [
      { text: "شروع می‌کنم باهاش حرف زدن", type: "شوخ‌طبع" },
      { text: "می‌رم تحقیق می‌کنم چرا!", type: "باهوش" },
      { text: "نگاش می‌کنم و می‌خوابم!", type: "آروم" }
    ]
  },
  {
    question: "بهت بگن بریم مسافرت، چی کار می‌کنی؟",
    answers: [
      { text: "همین الان آماده‌ام!", type: "شوخ‌طبع" },
      { text: "برنامه‌ریزی می‌کنم", type: "باهوش" },
      { text: "می‌پرسم جا نرم باشه؟", type: "آروم" }
    ]
  },
  {
    question: "دوست داری تو چه دنیایی زندگی کنی؟",
    answers: [
      { text: "دنیای کارتون‌ها!", type: "شوخ‌طبع" },
      { text: "دنیای علمی تخیلی", type: "باهوش" },
      { text: "دنیای هنر و تخیل", type: "خلاق" }
    ]
  },
  {
    question: "اگه یه روز کامل اینترنت قطع باشه؟",
    answers: [
      { text: "با خانوادم وقت می‌گذرونم", type: "آروم" },
      { text: "می‌رم کتاب می‌خونم", type: "باهوش" },
      { text: "می‌خوابم تا وصل شه", type: "شوخ‌طبع" }
    ]
  },
  {
    question: "رنگ مورد علاقه‌ات چیه؟",
    answers: [
      { text: "زرد روشن", type: "شوخ‌طبع" },
      { text: "آبی تیره", type: "باهوش" },
      { text: "سبز ملایم", type: "آروم" }
    ]
  },
  {
    question: "تو مهمونی معمولاً چطوری هستی؟",
    answers: [
      { text: "مرکز توجه!", type: "شوخ‌طبع" },
      { text: "مشغول بحث‌های عمیق", type: "باهوش" },
      { text: "یه گوشه ساکت نشستم", type: "آروم" }
    ]
  },
  {
    question: "یه دوستت ناراحته، چی کار می‌کنی؟",
    answers: [
      { text: "با شوخی آرومش می‌کنم", type: "شوخ‌طبع" },
      { text: "نصیحتش می‌کنم", type: "باهوش" },
      { text: "بغلش می‌کنم", type: "آروم" }
    ]
  }
];

const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");
const submitBtn = document.getElementById("submit");

let selectedAnswers = [];

questions.forEach((q, i) => {
  const qDiv = document.createElement("div");
  qDiv.innerHTML = `<h3>${q.question}</h3>`;
  q.answers.forEach((a, j) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="q${i}" value="${a.type}" />
      ${a.text}
    `;
    qDiv.appendChild(label);
    qDiv.appendChild(document.createElement("br"));
  });
  quizDiv.appendChild(qDiv);
});

submitBtn.addEventListener("click", () => {
  selectedAnswers = [];
  resultDiv.innerHTML = ""; // پاک کردن نتایج قبلی

  questions.forEach((q, i) => {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer) selectedAnswers.push(answer.value);
  });

  if (selectedAnswers.length !== questions.length) {
    resultDiv.innerHTML = "لطفاً به همه سوال‌ها جواب بده!";
    return;
  }

  const count = {};
  selectedAnswers.forEach((type) => {
    count[type] = (count[type] || 0) + 1;
  });

  const messages = {
    "شوخ‌طبع": "تو یه آدم پرانرژی و خنده‌دار هستی! دوستات عاشق شوخی‌هاتن.",
    "باهوش": "تو باهوش و تحلیلی هستی! همیشه دنبال دلیل و منطق می‌گردی.",
    "آروم": "تو یه آدم آرام، مهربون و شنوا هستی. بودن باهات لذت‌بخشه.",
    "خلاق": "تو یه فرد خلاق و خیال‌پرداز هستی که همیشه دنبال ایده‌های نو می‌گردی!"
  };

  const sortedTypes = Object.keys(count).sort((a, b) => count[b] - count[a]);
  sortedTypes.forEach((type) => {
    if (messages[type]) {
      const box = document.createElement("div");
      box.className = "result-box";
      box.innerText = messages[type];
      resultDiv.appendChild(box);
    }
  });
});