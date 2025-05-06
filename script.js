const questions = [
    { question: "وقتی تنها هستی، چه کاری بیشتر دوست داری انجام بدهی؟", answers: [
      { text: "مطالعه یا یادگیری چیزهای جدید", type: "باهوش" },
      { text: "گوش دادن به موسیقی آرام", type: "آرام" },
      { text: "طراحی یا نوشتن داستان", type: "خلاق" }
    ]},
    { question: "در جمع دوستان معمولاً چطور هستی؟", answers: [
      { text: "رهبر گروه هستم", type: "رهبر" },
      { text: "همیشه جو را شاد می‌کنم", type: "انگیزشی" },
      { text: "دنبال ماجراجویی هستم", type: "ماجراجو" }
    ]},
    { question: "در برخورد با چالش‌ها چه واکنشی داری؟", answers: [
      { text: "تحلیل می‌کنم و راه‌حل منطقی پیدا می‌کنم", type: "باهوش" },
      { text: "صبور و با آرامش عمل می‌کنم", type: "آرام" },
      { text: "جسورانه وارد عمل می‌شوم", type: "جسور" }
    ]},
    { question: "چه چیزی برایت الهام‌بخش است؟", answers: [
      { text: "افرادی که باهوش‌اند", type: "باهوش" },
      { text: "طبیعت و سکوت", type: "آرام" },
      { text: "داستان‌های موفقیت", type: "انگیزشی" }
    ]},
    { question: "نظرت درباره کار تیمی چیست؟", answers: [
      { text: "دوست دارم رهبری کنم", type: "رهبر" },
      { text: "در هماهنگی با گروه خوبم", type: "مهربان" },
      { text: "ترجیح می‌دهم مستقل باشم", type: "خلاق" }
    ]},
    { question: "در سفر ترجیح می‌دهی کجا بری؟", answers: [
      { text: "مناطق ناشناخته و هیجان‌انگیز", type: "ماجراجو" },
      { text: "جاهای تاریخی و فرهنگی", type: "باهوش" },
      { text: "جایی آرام و خلوت", type: "آرام" }
    ]},
    { question: "در یک پروژه جدید چطور عمل می‌کنی؟", answers: [
      { text: "ایده‌پردازی می‌کنم", type: "خلاق" },
      { text: "کارها را به خوبی سازماندهی می‌کنم", type: "رهبر" },
      { text: "همه را به حرکت درمی‌آورم", type: "انگیزشی" }
    ]},
    { question: "چه چیزی تو را خوشحال می‌کند؟", answers: [
      { text: "دیدن پیشرفت خودم", type: "باهوش" },
      { text: "بودن با کسانی که دوست‌شان دارم", type: "عاطفی" },
      { text: "رسیدن به اهداف بزرگ", type: "جسور" }
    ]},
    { question: "دوست داری دیگران تو را چگونه توصیف کنند؟", answers: [
      { text: "باهوش و منطقی", type: "باهوش" },
      { text: "مهربان و شنونده", type: "مهربان" },
      { text: "پرشور و مثبت", type: "انگیزشی" }
    ]},
    { question: "چه سبک فیلمی را دوست داری؟", answers: [
      { text: "مستند یا علمی", type: "باهوش" },
      { text: "درام احساسی", type: "عاطفی" },
      { text: "اکشن و ماجراجویی", type: "جسور" }
    ]},
    { question: "وقتی کسی ناراحته، تو چطور رفتار می‌کنی؟", answers: [
      { text: "سعی می‌کنم به او انگیزه بدم", type: "انگیزشی" },
      { text: "با او همدردی می‌کنم", type: "عاطفی" },
      { text: "تحلیل می‌کنم ببینم مشکل چیه", type: "باهوش" }
    ]},
    { question: "کدام جمله بیشتر شبیه توئه؟", answers: [
      { text: "من عاشق خلق چیزهای جدیدم", type: "خلاق" },
      { text: "همیشه آماده‌ام برای کشف ناشناخته‌ها", type: "ماجراجو" },
      { text: "دوست دارم همه خوشحال باشن", type: "مهربان" }
    ]},
    { question: "با استرس چطور کنار میای؟", answers: [
      { text: "نفس عمیق و آرامش", type: "آرام" },
      { text: "با انگیزه باهاش می‌جنگم", type: "جسور" },
      { text: "تحلیل می‌کنم که مشکل کجاست", type: "باهوش" }
    ]},
    { question: "وقتی وقت آزاد داری، چی کار می‌کنی؟", answers: [
      { text: "نقاشی یا نویسندگی", type: "خلاق" },
      { text: "رفتن به مکان‌های جدید", type: "ماجراجو" },
      { text: "صحبت با دوستان و گوش دادن", type: "عاطفی" }
    ]},
    { question: "در زمان سختی به چی تکیه می‌کنی؟", answers: [
      { text: "خودم و توانایی‌هام", type: "جسور" },
      { text: "دوستان و خانواده‌م", type: "مهربان" },
      { text: "آرامشم و تفکر منطقی", type: "آرام" }
    ]}
  ];
  
  const messages = {
    "باهوش": "تو فردی باهوش و تحلیل‌گر هستی که همیشه دنبال رشد ذهنی هستی!",
    "آرام": "تو فردی آرام، باوقار و مثبت‌اندیش هستی که دیگران با تو احساس راحتی می‌کنند.",
    "خلاق": "تو ذهنی خلاق و هنری داری که همیشه دنبال راه‌حل‌های خاص و نو هستی.",
    "رهبر": "تو یک رهبر طبیعی هستی که می‌تونه دیگران رو مدیریت کنه و الهام‌بخش باشه.","انگیزشی": "تو پر از انگیزه و انرژی مثبتی که دیگران رو تشویق می‌کنی و لبخند به لب میاری.",
  "ماجراجو": "تو دنبال هیجان و تجربه‌های جدید هستی و از ناشناخته‌ها نمی‌ترسی.",
  "عاطفی": "تو قلب مهربونی داری و احساسات دیگران رو عمیقاً درک می‌کنی.",
  "جسور": "تو شجاع و نترس هستی و جلوی هیچ چیزی کوتاه نمیای.",
  "مهربان": "تو انسانی دلسوز و مراقب هستی که همیشه هوای دیگران رو داره.",
  "تحلیل‌گر": "تو همیشه همه چیز رو با دقت بررسی می‌کنی و منطقی تصمیم می‌گیری.",
  "طنزپرداز": "تو حس شوخ‌طبعی داری و دیگران با تو لحظات شادی رو تجربه می‌کنن.",
  "کاوشگر": "تو دوست داری دنیا رو بشناسی، یاد بگیری و کشف کنی!"
};

const form = document.getElementById("quizForm");
questions.forEach((q, index) => {
  const qDiv = document.createElement("div");
  qDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
  q.answers.forEach((a, i) => {
    const id = `q${index}_a${i}`;
    qDiv.innerHTML += `
      <label for="${id}">
        <input type="radio" id="${id}" name="question${index}" value="${a.type}" />
        ${a.text}
      </label><br>`;
  });
  form.appendChild(qDiv);
});

document.getElementById("submit").addEventListener("click", () => {
  const resultCount = {};
  let allAnswered = true;

  questions.forEach((_, i) => {
    const selected = document.querySelector(`input[name="question${i}"]:checked`);
    if (!selected) {
      allAnswered = false;
      return;
    }
    resultCount[selected.value] = (resultCount[selected.value] || 0) + 1;
  });

  const resultDiv = document.getElementById("result");

  if (!allAnswered) {
    resultDiv.innerHTML = "<div class='result-box'>لطفاً به همه سوال‌ها جواب بده!</div>";
    return;
  }

  const max = Math.max(...Object.values(resultCount));
  const topTypes = Object.keys(resultCount).filter(key => resultCount[key] === max);
  const finalType = topTypes[Math.floor(Math.random() * topTypes.length)];

  resultDiv.innerHTML = `<div class='result-box'>${messages[finalType] || "تو شخصیتی منحصر به فرد داری که قابل توصیف با یک واژه نیست!"}</div>`;
});