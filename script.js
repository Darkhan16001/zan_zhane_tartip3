
"use strict";

// =====================================
// ЗАҢ ЖӘНЕ ТӘРТІП
// 25 МИНУТ
// 6 КОМАНДА
// BY DARKHAN
// =====================================

const app = document.getElementById("app");

// =====================================
// КОМАНДАЛАР
// =====================================

const teamNames = [
  "⚖️ Әділет",
  "🛡️ Құқық",
  "📘 Тәртіп",
  "🤝 Бірлік",
  "🏛️ Заңгерлер",
  "🌟 Адалдық"
];

const scores = [
  null, null, null, null, null, null
];

const gradeOptions = [
  55, 60, 65, 70, 75,
  80, 85, 90, 95, 100
];

// =====================================
// САБАҚТЫҢ МАҚСАТЫ
// =====================================

const goals = [
  "Заң мен тәртіптің маңызын түсіндіру.",
  "Құқықтық сауаттылықты арттыру.",
  "Әділдік пен жауапкершілікке тәрбиелеу.",
  "Сурет арқылы өз ойларын шығармашылықпен жеткізу."
];

// =====================================
// 15 ТҮСІНДІРМЕ
// =====================================

const slides = [
  {
    title: "Заң және тәртіп дегеніміз не?",
    text: "Заң — мемлекет белгілейтін, қоғамдағы қатынастарды реттейтін міндетті құқықтық ережелер жүйесі. Тәртіп — адамдардың ортақ ережелерді сақтауы. Заң мен тәртіп азаматтардың құқықтарын қорғауға, қауіпсіздікті қамтамасыз етуге және қоғамда әділдік орнатуға көмектеседі.",
    question: "Заң мен тәртіп қоғамға не үшін қажет?",
    answer: "Адамдардың құқықтарын қорғау, қауіпсіздік пен қоғамдық тәртіпті қамтамасыз ету үшін."
  },
  {
    title: "Құқықтық мемлекет",
    text: "Құқықтық мемлекетте заң үстемдігі сақталады. Мемлекеттік органдар мен азаматтар заң талаптарына бағынады. Адамның құқықтары мен бостандықтарын қорғау құқықтық мемлекеттің басты қағидаларының бірі.",
    question: "Құқықтық мемлекеттің басты белгісі қандай?",
    answer: "Заң үстемдігі мен адам құқықтарының қорғалуы."
  },
  {
    title: "Қазақстан Республикасының Конституциясы",
    text: "Конституция — Қазақстан Республикасының негізгі заңы. Ол мемлекет құрылымының негіздерін, адам мен азаматтың құқықтарын, бостандықтарын және міндеттерін белгілейді. Конституция барлық азамат үшін маңызды құқықтық құжат.",
    question: "Конституция неге негізгі заң деп аталады?",
    answer: "Өйткені ол мемлекеттің құқықтық жүйесінің негізгі қағидаларын белгілейді."
  },
  {
    title: "Адам құқықтары",
    text: "Адам құқықтары әр адамның қадір-қасиеті мен бостандықтарын қорғауға бағытталған. Білім алу, заң алдында тең болу, жеке басының қорғалуы және пікір білдіру құқықтары — негізгі құқықтардың мысалдары. Өз құқығын жүзеге асырғанда өзгенің құқығын да құрметтеу қажет.",
    question: "Адам құқықтарына қандай мысалдар келтіруге болады?",
    answer: "Білім алу, жеке басының қорғалуы және заң алдында тең болу."
  },
  {
    title: "Азаматтың міндеттері",
    text: "Әр азаматтың құқықтарымен қатар міндеттері де бар. Конституция мен заңдарды сақтау, басқа адамдардың құқықтары мен қадір-қасиетін құрметтеу маңызды. Құқық пен міндет өзара тығыз байланысты.",
    question: "Азаматтың негізгі міндеттерін ата.",
    answer: "Заңды сақтау және басқа адамдардың құқықтарын құрметтеу."
  },
  {
    title: "Заң алдындағы теңдік",
    text: "Заң алдындағы теңдік — барлық адамның құқықтарының кемсітусіз қорғалуы. Әділ қоғамда әр адамның қадір-қасиеті құрметтеліп, құқықтық ережелер бірдей қағидалар негізінде қолданылады.",
    question: "Заң алдындағы теңдік нені білдіреді?",
    answer: "Барлық адамның заң алдында тең болуын."
  },
  {
    title: "Қоғамдық тәртіп",
    text: "Қоғамдық тәртіп — көшеде, оқу орнында, көлікте және басқа да қоғамдық орындарда белгіленген ережелерді сақтау. Өзара құрмет, қауіпсіздік және жауапкершілік қоғамдағы тәртіпті нығайтады.",
    question: "Қоғамдық тәртіпке үш мысал келтір.",
    answer: "Ортақ ережелерді сақтау, өзгені құрметтеу және қауіпсіз әрекет ету."
  },
  {
    title: "Құқық бұзушылық",
    text: "Құқық бұзушылық — заң талаптарына қайшы келетін және заң бойынша жауаптылық көзделетін әрекет немесе әрекетсіздік. Құқық бұзушылықтың құқықтық салдары нақты жағдайлар мен қолданыстағы заң талаптарына байланысты болады.",
    question: "Құқық бұзушылық дегеніміз не?",
    answer: "Заңға қайшы келетін және құқықтық жауаптылық көзделген әрекет немесе әрекетсіздік."
  },
  {
    title: "Жауапкершілік",
    text: "Жауапкершілік — адамның өз іс-әрекетінің салдарын түсінуі. Уәдені орындау, ортақ ережелерді сақтау, қателікті мойындау және өзгелерге құрметпен қарау жауапкершіліктің көрінісі.",
    question: "Жауапты адам қандай қасиеттерге ие болады?",
    answer: "Адалдық, тәртіптілік, өз ісіне жауап беру және міндеттерін орындау."
  },
  {
    title: "Жастар және құқық",
    text: "Жастар өз құқықтары мен міндеттерін білуі керек. Құқықтық сауаттылық күрделі жағдайларда дұрыс шешім қабылдауға және көмек қажет болған кезде тиісті адамдарға жүгінуге көмектеседі.",
    question: "Жастарға құқықтық сауаттылық не үшін қажет?",
    answer: "Өз құқықтарын қорғау және міндеттерін түсіну үшін."
  },
  {
    title: "Интернеттегі тәртіп",
    text: "Интернетте де адам құқықтарын құрметтеу маңызды. Басқаларды қорламау, жеке ақпаратты рұқсатсыз таратпау және күмәнді хабарламаларға абай болу — цифрлық мәдениеттің белгілері.",
    question: "Интернетте қандай қауіпсіздік ережелерін сақтау қажет?",
    answer: "Жеке мәліметтерді қорғау, өзгелерді құрметтеу және күмәнді ақпаратқа сақ болу."
  },
  {
    title: "Буллингтің алдын алу",
    text: "Буллинг — адамды қайталап қорқыту, кемсіту немесе қудалау. Мұндай әрекеттердің алдын алу үшін сыйластық пен қолдау маңызды. Буллингке куә болғанда сенімді педагогке немесе жауапты ересекке хабарлау керек.",
    question: "Буллингке куә болғанда қандай әрекет жасау керек?",
    answer: "Зардап шеккен адамға қолдау көрсетіп, сенімді ересекке хабарлау."
  },
  {
    title: "Келіспеушіліктерді бейбіт шешу",
    text: "Адамдардың пікірлері әртүрлі болуы мүмкін. Келіспеушілікті бір-бірін тыңдап, сабырлы сөйлесіп және ортақ шешім іздеу арқылы шешуге болады. Қажет кезде педагог немесе маман көмегіне жүгінуге болады.",
    question: "Келіспеушілікті қалай бейбіт шешуге болады?",
    answer: "Бір-бірін тыңдау және сабырлы сөйлесу арқылы."
  },
  {
    title: "Әділдік пен адалдық",
    text: "Әділдік — адамдардың құқықтарын құрметтеу және ортақ ережелерді тең қолдану. Адалдық — шыншыл болу, өзгелердің сенімін ақтау және жауапкершілікпен әрекет ету. Бұл қасиеттер қоғамдағы өзара сенімді нығайтады.",
    question: "Әділдік пен адалдықтың айырмашылығы қандай?",
    answer: "Әділдік — тең әрі әділетті қарау, адалдық — шыншыл және сенімді болу."
  },
  {
    title: "Заңды құрметтеу — ортақ міндет",
    text: "Қоғамдағы заң мен тәртіпті сақтау әр адамның жауапкершілігінен басталады. Өзгенің құқығын құрметтеу, қоғамдық ережелерді орындау және саналы әрекет ету қауіпсіз әрі әділ орта қалыптастыруға көмектеседі.",
    question: "Заң мен тәртіпті нығайту үшін әр адам не істей алады?",
    answer: "Заңды сақтау, өзгелерді құрметтеу және жауапкершілік таныту."
  }
];

// =====================================
// 3 БЕЙНЕМАТЕРИАЛ
// =====================================

// YouTube бейнелерін сабаққа дейін
// тексеріңіз. Ендіруге тыйым салынса,
// сыртқы сілтеме арқылы ашуға болады.

const videos = [
  {
    after: 3,
    title: "Заң және тәртіп",
    id: "QrvXdLxjswU",
    question: "Құқықтық сауаттылық неліктен маңызды?"
  },
  {
    after: 8,
    title: "Заң мен тәртіп — әділетті қоғам",
    id: "k121G3k8DNU",
    question: "Әділ қоғамда қандай қағидалар сақталуы керек?"
  },
  {
    after: 12,
    title: "Құқық бұзушылықтың алдын алу",
    id: "F3VaTUPTBGM",
    question: "Жастар құқық бұзушылықтың алдын алуға қалай көмектесе алады?"
  }
];

// =====================================
// 6 КОМАНДАНЫҢ 6 ТҮРЛІ СУРЕТІ
// =====================================

const drawingTasks = [
  {
    title: "Әділдік таразысы",

    description:
      "Ақ парақтың ортасына тең тұрған үлкен әділдік таразысы бейнеленеді. Таразының бір жағына «Құқық», екінші жағына «Міндет» сөзі орналастырылады. Таразының артқы жағына жарық сәулелері салынады. Бұл сурет қоғамдағы әділдік пен тепе-теңдікті білдіреді.",

    slogan:
      "Әділдік — қоғамның тірегі!"
  },

  {
    title: "Адам құқықтарын қорғау",

    description:
      "Парақтың ортасына үлкен қорғаныс қалқаны бейнеленеді. Қалқанның ішінде адам бейнесі орналасады. Оның айналасына кітап, үй және жүрек белгілері салынады. Бұл белгілер білім алу, қауіпсіз өмір сүру және адамның қадір-қасиетін құрметтеу идеяларын көрсетеді.",

    slogan:
      "Әр адамның құқығы қорғалуы тиіс!"
  },

  {
    title: "Тәртіпті оқу орны",

    description:
      "Оқу орнының ауласы мен кіреберісі бейнеленеді. Бірнеше студент бір-біріне көмектесіп, ортақ ережелерді сақтап жүр. Жанында тәртіп ережелері жазылған тақта болады. Суретте сыйластық, тазалық және қоғамдық тәртіп көрініс табады.",

    slogan:
      "Тәртіп — табыстың бастауы!"
  },

  {
    title: "Бірлік пен сыйластық",

    description:
      "Парақтың ортасында адамдар шеңбер құрып, қол ұстасып тұрады. Шеңбердің ортасына Қазақстанның картасы салынады. Айналасына достық, бейбітшілік және ынтымақ белгілері орналастырылады. Сурет адамдар арасындағы бірлік пен өзара құрметті білдіреді.",

    slogan:
      "Бірлік бар жерде — береке бар!"
  },

  {
    title: "Қазақстан Конституциясы",

    description:
      "Парақтың ортасына ашық тұрған үлкен Конституция кітабы салынады. Кітаптың бетіне «Конституция» сөзі жазылады. Оның жанында Қазақстанның көк туы мен әділдік таразысы орналасады. Бұл сурет заңның қоғамдағы маңызын бейнелейді.",

    slogan:
      "Заңды білу — заман талабы!"
  },

  {
    title: "Адал әрекет",

    description:
      "Бір студент жерде тауып алған әмиянды иесіне қайтарып беріп жатқан сәт бейнеленеді. Әмиян иесі алғысын білдіріп тұр. Айналасында адамдардың өзара сенімі мен құрметін көрсететін көрініс салынады. Сурет адалдықтың күнделікті өмірдегі маңызын білдіреді.",

    slogan:
      "Адалдық — адамдықтың белгісі!"
  }
];

// =====================================
// САБАҚТЫҢ БЕТТЕР РЕТІ
// =====================================

const sequence = [];

slides.forEach((slide, index) => {
  sequence.push({
    type: "slide",
    index: index
  });

  videos.forEach((video, videoIndex) => {
    if (video.after === index) {
      sequence.push({
        type: "video",
        index: videoIndex
      });
    }
  });
});

// =====================================
// НЕГІЗГІ АЙНЫМАЛЫЛАР
// =====================================

let view = "home";
let slideIndex = 0;
let drawingTeam = 0;

const slideAnswers = {};

// =====================================
// 25 МИНУТТЫҚ ТАЙМЕР
// =====================================

let timeLeft = 25 * 60;
let running = false;
let timerEnd = null;
let timerInterval = null;

function updateClock() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  document.getElementById("clock").textContent =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  document.getElementById("timerButton").textContent =
    running ? "Ⅱ" : "▶";
}

function tickTimer() {
  if (!running || timerEnd === null) {
    return;
  }

  timeLeft = Math.max(
    0,
    Math.ceil((timerEnd - Date.now()) / 1000)
  );

  if (timeLeft === 0) {
    running = false;

    clearInterval(timerInterval);

    timerInterval = null;
    timerEnd = null;
  }

  updateClock();
}

function startTimer() {
  if (running || timeLeft === 0) {
    return;
  }

  running = true;
  timerEnd = Date.now() + timeLeft * 1000;

  timerInterval = setInterval(tickTimer, 250);

  updateClock();
}

function pauseTimer() {
  if (running) {
    tickTimer();
  }

  running = false;

  clearInterval(timerInterval);

  timerInterval = null;
  timerEnd = null;

  updateClock();
}

function toggleTimer() {
  if (running) {
    pauseTimer();
  } else {
    startTimer();
  }
}

// =====================================
// КӨМЕКШІ ФУНКЦИЯЛАР
// =====================================

function card(title, body) {
  return `
    <div class="card">
      <h2>${title}</h2>
      ${body}
    </div>
  `;
}

function progress(current, total) {
  return `
    <div class="progress">
      <div
        class="progress-fill"
        style="width:${current / total * 100}%">
      </div>
    </div>
  `;
}

function scrollTopPage() {
  window.scrollTo(0, 0);
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen?.();
  } else {
    document.documentElement.requestFullscreen?.();
  }
}

function updateRail() {
  const labels = {
    home: "БАСТЫ БЕТ",
    lesson: "ТҮСІНДІРМЕ",
    drawing: "СУРЕТ САЛУ САЙЫСЫ",
    final: "ҚОРЫТЫНДЫ",
    goodbye: "АЯҚТАЛДЫ"
  };

  document.getElementById("phaseLabel").textContent =
    labels[view] || "САБАҚ";

  document.getElementById("backButton").disabled =
    view === "home";

  document.getElementById("nextButton").disabled =
    view === "goodbye" ||
    (
      view === "drawing" &&
      scores[drawingTeam] === null
    );
}

// =====================================
// БАСТЫ БЕТ — ҮЛКЕН СУРЕТ ЖОҚ
// =====================================

function showHome() {
  view = "home";

  app.innerHTML = `
    <section class="hero page-enter">

      <div class="eyebrow">
        ЗАҢ · ӘДІЛДІК · ЖАУАПКЕРШІЛІК
      </div>

      <h1>
        ЗАҢ ЖӘНЕ<br>
        <span>ТӘРТІП</span>
      </h1>

      <p>
        Құқықтық мәдениет — әділ әрі
        қауіпсіз қоғамның негізі.
        Интерактивті ашық тәрбие сағаты.
      </p>

      <div class="lesson-goal">
        <h2>🎯 Сабақтың мақсаты</h2>

        <p>
          Білім алушыларға заң мен
          тәртіптің маңызын түсіндіру,
          құқықтық сауаттылығын арттыру
          және жауапты азаматтық
          ұстанымды қалыптастыру.
        </p>

        <ul>
          ${goals.map(goal => `
            <li>${goal}</li>
          `).join("")}
        </ul>
      </div>

      <div class="actions">
        <button
          class="btn primary"
          onclick="showSlide(0)">
          Сабақты бастау →
        </button>
      </div>

      <div class="stats">
        <div>
          <b>25</b>
          <small>Минут</small>
        </div>

        <div>
          <b>15</b>
          <small>Түсіндірме</small>
        </div>

        <div>
          <b>3</b>
          <small>Видео</small>
        </div>

        <div>
          <b>6</b>
          <small>Команда</small>
        </div>
      </div>

    </section>
  `;

  updateRail();
  scrollTopPage();
}

// =====================================
// ТҮСІНДІРМЕ БЕТТЕРІ
// =====================================

function showSlide(index) {
  slideIndex = Math.max(
    0,
    Math.min(index, sequence.length - 1)
  );

  view = "lesson";

  renderLesson();

  if (!running && timeLeft === 25 * 60) {
    startTimer();
  }
}

function renderLesson() {
  const item = sequence[slideIndex];

  if (item.type === "video") {
    renderVideo(item.index);
    return;
  }

  const slide = slides[item.index];

  app.innerHTML = `
    <section class="page-enter">

      <div class="eyebrow">
        ТҮСІНДІРМЕ · ${item.index + 1}/15
      </div>

      <h1 class="section-title">
        ${slide.title}
      </h1>

      ${progress(slideIndex + 1, sequence.length)}

      ${card(
        "📖 Тақырыпты түсіндіру",
        `
          <p>${slide.text}</p>
        `
      )}

      ${card(
        "🎤 Ауызша сұрақ",
        `
          <p>${slide.question}</p>

          <div class="actions">
            <button
              class="btn primary"
              onclick="toggleSlideAnswer(${item.index})">
              ${
                slideAnswers[item.index]
                  ? "Жауапты жасыру"
                  : "👁 Жауапты көрсету"
              }
            </button>
          </div>

          ${
            slideAnswers[item.index]
              ? `<div class="answer-box">
                   <strong>Үлгі жауап:</strong>
                   <p>${slide.answer}</p>
                 </div>`
              : ""
          }
        `
      )}

      <div class="actions">
        <button
          class="btn primary"
          onclick="nextSlide()">
          Келесі бет →
        </button>
      </div>

    </section>
  `;

  updateRail();
  scrollTopPage();
}

function toggleSlideAnswer(index) {
  slideAnswers[index] = !slideAnswers[index];
  renderLesson();
}

// =====================================
// БЕЙНЕМАТЕРИАЛ БЕТТЕРІ
// =====================================

function renderVideo(index) {
  const video = videos[index];

  const url =
    `https://www.youtube.com/watch?v=${video.id}`;

  app.innerHTML = `
    <section class="page-enter">

      <div class="eyebrow">
        БЕЙНЕМАТЕРИАЛ · ${index + 1}/3
      </div>

      <h1 class="section-title">
        🎬 ${video.title}
      </h1>

      ${progress(slideIndex + 1, sequence.length)}

      ${card(
        "▶ Бейнематериал",
        `
          <iframe
            class="video-frame"
            src="https://www.youtube-nocookie.com/embed/${video.id}"
            title="${video.title}"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>

          <div class="actions">
            <a
              class="btn primary"
              href="${url}"
              target="_blank"
              rel="noopener noreferrer">
              ▶ YouTube-та ашу
            </a>
          </div>

          <p>
            Сайт ішінде видео ашылмаса,
            YouTube батырмасын басыңдар.
          </p>
        `
      )}

      ${card(
        "🎤 Талқылау",
        `
          <p>${video.question}</p>
        `
      )}

      <div class="actions">
        <button
          class="btn primary"
          onclick="nextSlide()">
          Келесі бет →
        </button>
      </div>

    </section>
  `;

  updateRail();
  scrollTopPage();
}

// =====================================
// ТҮСІНДІРМЕ НАВИГАЦИЯСЫ
// =====================================

function nextSlide() {
  if (slideIndex < sequence.length - 1) {
    showSlide(slideIndex + 1);
  } else {
    showDrawing(0);
  }
}

function previousSlide() {
  if (slideIndex > 0) {
    showSlide(slideIndex - 1);
  } else {
    showHome();
  }
}

// =====================================
// 6 КОМАНДАНЫҢ ҰПАЙЛАРЫ
// =====================================

function teamCards() {
  return `
    <div class="teams">
      ${teamNames.map((name, index) => `
        <div class="team ${
          view === "drawing" &&
          drawingTeam === index
            ? "selected"
            : ""
        }">

          <h3>${name}</h3>

          <div class="score">
            ${
              scores[index] === null
                ? "—"
                : scores[index]
            }
          </div>

          <small>
            ${
              scores[index] === null
                ? "Бағаланбаған"
                : "ұпай"
            }
          </small>

        </div>
      `).join("")}
    </div>
  `;
}

// =====================================
// 6 КОМАНДАНЫҢ ТАПСЫРМА ТІЗІМІ
// =====================================

function drawingTasksPage() {
  return card(
    "🎨 Командалардың тапсырмалары",
    `
      <p>
        Әр команда өзіне берілген
        сипаттама бойынша сурет салады.
        Суреттің астына берілген ұранды
        жазады. Дайын болған соң
        жұмысын ауызша қорғайды.
      </p>

      <div class="task-list">
        ${drawingTasks.map((task, index) => `
          <div class="task-item">

            <h3>${teamNames[index]}</h3>

            <p>${task.description}</p>

            <small>
              «${task.slogan}»
            </small>

          </div>
        `).join("")}
      </div>
    `
  );
}

// =====================================
// СУРЕТ САЛУ САЙЫСЫН АШУ
// =====================================

function showDrawing(index = 0) {
  drawingTeam = Math.max(
    0,
    Math.min(index, teamNames.length - 1)
  );

  view = "drawing";

  renderDrawing();

  if (!running && timeLeft === 25 * 60) {
    startTimer();
  }
}

// =====================================
// СУРЕТ САЛУ БЕТІ
// =====================================

function renderDrawing() {
  const task = drawingTasks[drawingTeam];
  const name = teamNames[drawingTeam];
  const score = scores[drawingTeam];

  app.innerHTML = `
    <section class="page-enter">

      <div class="eyebrow">
        СУРЕТ САЛУ САЙЫСЫ · ${drawingTeam + 1}/6
      </div>

      <h1 class="section-title">
        🎨 Заң және тәртіп
      </h1>

      ${progress(drawingTeam + 1, 6)}

      ${
        drawingTeam === 0
          ? drawingTasksPage()
          : ""
      }

      <div class="drawing-heading">
        <small>
          БАҒАЛАНАТЫН КОМАНДА
        </small>

        <strong>${name}</strong>
      </div>

      ${card(
        "🎨 Сурет сипаттамасы",
        `
          <h3>${task.title}</h3>

          <p class="drawing-description">
            ${task.description}
          </p>

          <div class="slogan-box">
            <small>
              ✍️ Суреттің астына жазылатын сөз
            </small>

            <strong>
              «${task.slogan}»
            </strong>
          </div>

          <p>
            Команда суретті салып болған соң,
            оның мағынасын ауызша түсіндіреді.
          </p>
        `
      )}

      ${card(
        "🏅 Ұпай таңдаңыз",
        `
          <p>
            Команданың салған суретін,
            шығармашылық идеясын және
            түсіндіруін бағалаңдар.
          </p>

          <div class="grade-grid">
            ${gradeOptions.map(point => `
              <button
                class="grade-btn ${
                  score === point ? "chosen" : ""
                }"
                onclick="giveGrade(${point})">
                ${point}
              </button>
            `).join("")}
          </div>

          ${
            score !== null
              ? `<div class="feedback">
                   ✅ ${name}<br>
                   ${score} ұпай
                 </div>`
              : ""
          }
        `
      )}

      ${card(
        "🏆 Командалардың нәтижелері",
        teamCards()
      )}

      <div class="actions">
        <button
          class="btn primary"
          onclick="nextDrawing()"
          ${score === null ? "disabled" : ""}>

          ${
            drawingTeam === 5
              ? "Қорытынды нәтижелер →"
              : "Келесі команда →"
          }

        </button>
      </div>

    </section>
  `;

  updateRail();
  scrollTopPage();
}

// =====================================
// ҰПАЙ БЕРУ
// =====================================

function giveGrade(point) {
  if (!gradeOptions.includes(point)) {
    return;
  }

  scores[drawingTeam] = point;

  // Қайта баға қойса, алдыңғы баға
  // жаңасымен ауыстырылады.
  renderDrawing();
}

// =====================================
// КЕЛЕСІ КОМАНДА
// =====================================

function nextDrawing() {
  if (scores[drawingTeam] === null) {
    return;
  }

  if (drawingTeam < teamNames.length - 1) {
    showDrawing(drawingTeam + 1);
  } else {
    showFinal();
  }
}

function previousDrawing() {
  if (drawingTeam > 0) {
    showDrawing(drawingTeam - 1);
  } else {
    showSlide(sequence.length - 1);
  }
}

// =====================================
// ҚОРЫТЫНДЫ
// =====================================

function showFinal() {
  view = "final";

  const results = teamNames.map((name, index) => ({
    name: name,
    score: scores[index]
  }));

  const ranked = [...results].sort(
    (a, b) =>
      (b.score ?? -1) - (a.score ?? -1)
  );

  const graded = results.filter(
    item => item.score !== null
  );

  const allGraded =
    graded.length === teamNames.length;

  const maxScore = graded.length
    ? Math.max(...graded.map(item => item.score))
    : null;

  const winners = results.filter(
    item =>
      item.score !== null &&
      item.score === maxScore
  );

  let winnerText = "Әзірге баға қойылған жоқ";

  if (allGraded) {
    winnerText = winners
      .map(item => item.name)
      .join(", ");
  }

  app.innerHTML = `
    <section class="page-enter">

      <div class="eyebrow">
        САЙЫС ҚОРЫТЫНДЫСЫ
      </div>

      <h1 class="section-title">
        🏆 Сурет салу сайысының нәтижесі
      </h1>

      ${card(
        "6 команданың ұпайлары",
        teamCards()
      )}

      ${card(
        allGraded
          ? "🥇 Жеңімпаз"
          : "📊 Аралық нәтиже",
        `
          ${
            allGraded
              ? `<div class="winner">
                   ${winnerText}
                 </div>

                 <p style="text-align:center">
                   ${maxScore} ұпай
                 </p>`
              : `<p>
                   ${graded.length}/6
                   команда бағаланды.
                 </p>`
          }
        `
      )}

      ${card(
        "📋 Нәтижелер кестесі",
        ranked.map((item, index) => `
          <div class="result-row">

            <span>
              ${index + 1}. ${item.name}
            </span>

            <strong>
              ${
                item.score === null
                  ? "Бағаланбаған"
                  : item.score + " ұпай"
              }
            </strong>

          </div>
        `).join("")
      )}

      ${card(
        "⚖️ Сабақты қорытындылау",
        `
          <p>
            Бүгін командалар заң,
            тәртіп, әділдік, адам құқықтары,
            бірлік және адалдық туралы
            түсініктерін сурет арқылы
            көрсетті.
          </p>

          <p>
            Әр команда суретінің
            негізгі идеясын түсіндіріп,
            заң мен тәртіпті сақтаудың
            қоғамдағы маңызын талқылады.
          </p>
        `
      )}

      <div class="actions">

        ${
          !allGraded
            ? `<button
                 class="btn secondary"
                 onclick="showDrawing(${scores.findIndex(s => s === null)})">
                 Бағалауды жалғастыру
               </button>`
            : ""
        }

        <button
          class="btn primary"
          onclick="showGoodbye()"
          ${!allGraded ? "disabled" : ""}>
          Сабақты аяқтау →
        </button>

      </div>
    </section>
  `;

  updateRail();
  scrollTopPage();
}

// =====================================
// СОҢҒЫ БЕТ
// =====================================

function showGoodbye() {
  if (scores.some(score => score === null)) {
    showFinal();
    return;
  }

  pauseTimer();

  view = "goodbye";

  app.innerHTML = `
    <section
      class="page-enter"
      style="text-align:center;padding:60px 0">

      <div style="font-size:75px">
        ⚖️🇰🇿
      </div>

      <h1 class="section-title">
        Назарларыңызға рақмет!
      </h1>

      <p style="
        font-size:24px;
        line-height:1.8;
      ">
        Заңды құрметтейік!<br>
        Әділдік пен тәртіпті сақтайық!
      </p>

      <h2 style="color:var(--green)">
        Сау болыңыздар!
      </h2>

      <p>BY DARKHAN</p>

      <div class="actions">
        <button
          class="btn primary"
          onclick="showHome()">
          Басты бетке оралу
        </button>
      </div>

    </section>
  `;

  updateRail();
  scrollTopPage();
}

// =====================================
// ОҢ ЖАҚТАҒЫ БАТЫРМАЛАР
// =====================================

function goNext() {
  if (view === "home") {
    showSlide(0);
  }

  else if (view === "lesson") {
    nextSlide();
  }

  else if (view === "drawing") {
    nextDrawing();
  }

  else if (view === "final") {
    showGoodbye();
  }
}

function goBack() {
  if (view === "lesson") {
    previousSlide();
  }

  else if (view === "drawing") {
    previousDrawing();
  }

  else if (view === "final") {
    showDrawing(teamNames.length - 1);
  }

  else if (view === "goodbye") {
    showFinal();
  }
}

// =====================================
// САЙТТЫ ІСКЕ ҚОСУ
// =====================================

updateClock();
showHome();
