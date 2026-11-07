
"use strict";

/* =====================================
   ЗАҢ ЖӘНЕ ТӘРТІП
   BY DARKHAN
===================================== */

const app = document.getElementById("app");

/* ФОТОЛАР */

const photos = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
];

/* YOUTUBE ВИДЕОЛАРЫ */

const videos = [
  {
    id: "AXrvC76tF_Q",
    title: "Заң мен тәртіп",
    time: "2:10"
  },
  {
    id: "z3UipdWdQF4",
    title: "Заң мен тәртіп",
    time: "1:03"
  },
  {
    id: "IeZEKaWmTwA",
    title: "Заң мен тәртіп",
    time: "0:37"
  }
];

/* =====================================
   15 ТҮСІНДІРМЕ БЕТІ
===================================== */

const slides = [

  /* 1-БЕТ */

  {
    type: "speech",
    title: "Заң және тәртіп дегеніміз не?",

    text: `Қайырлы күн, құрметті ұстаздар және студенттер!

Бүгінгі ашық тәрбие сағатымыздың тақырыбы — «Заң және тәртіп».

Заң — қоғамдағы адамдардың құқықтары мен міндеттерін реттейтін ережелер жүйесі.

Тәртіп — осы ережелерге құрметпен қарап, ортақ қауіпсіздікті сақтауға ұмтылу.

Заң барлығына ортақ. Әр азаматтың құқығын қорғау және өзгенің құқығын құрметтеу маңызды.

Бүгін біз әділдік, жауапкершілік және құқықтық мәдениет туралы сөйлесеміз.`
  },

  /* 2-БЕТ */

  {
    type: "gallery",
    title: "Қоғам және жауапкершілік",
    images: [
      photos[0],
      photos[1],
      photos[2]
    ]
  },

  /* 3-БЕТ */

  {
    type: "video",
    title: "Заң мен тәртіп",
    video: videos[0],

    intro: "Заң мен тәртіптің қоғамдағы маңызын көрсететін қысқа бейнероликті тамашалаймыз.",

    outro: "Әр адамның жауапкершілігі ортақ қауіпсіздікке әсер етеді."
  },

  /* 4-БЕТ */

  {
    type: "speech",
    title: "Азаматтың құқықтары",

    text: `Әр адамның заңмен қорғалатын құқықтары бар.

Білім алу, жеке өмірін құрметтеуді талап ету және заңды мүдделерін қорғау — маңызды құқықтардың қатарына жатады.

Бірақ өз құқығымызды пайдалану өзгенің құқығын шектеуге себеп болмауы тиіс.

Мысалы, біз өз пікірімізді айтуға құқылымыз, бірақ басқа адамды қорламауымыз керек.

Құқықтық мәдениет өз құқығыңды білуден және басқаларды құрметтеуден басталады.`
  },

  /* 5-БЕТ */

  {
    type: "gallery",
    title: "Әділдік қағидасы",

    images: [
      photos[2],
      photos[3],
      photos[4]
    ]
  },

  /* 6-БЕТ */

  {
    type: "speech",
    title: "Міндет пен жауапкершілік",

    text: `Құқықтармен бірге міндеттер де болады.

Колледж студенті сабаққа қатысу, оқу орнының ішкі тәртіп ережелерін сақтау және басқа студенттерге құрметпен қарау сияқты міндеттерді орындауы керек.

Жауапты азамат өз әрекетінің салдарын түсінеді.

Қателессе, оны мойындап, түзетуге тырысады.

Жауапкершілік — қауіпсіз әрі әділ қоғам қалыптастырудың маңызды негізі.`
  },

  /* 7-БЕТ */

  {
    type: "gallery",
    title: "Құқықтық мәдениет",

    images: [
      photos[1],
      photos[4],
      photos[5]
    ]
  },

  /* 8-БЕТ */

  {
    type: "speech",
    title: "Қоғамдық тәртіп",

    text: `Қоғамдық тәртіп адамдардың қауіпсіз әрі жайлы ортада өмір сүруіне көмектеседі.

Көшеде, көлікте, колледжде және интернетте ортақ ережелерді сақтау қажет.

Мысалы, қоғамдық орында өзгелердің тыныштығын құрметтеу және жол қозғалысы ережелерін сақтау маңызды.

Құқықтық мәдениеті жоғары адам ережені тек бақылаудан қорқып емес, оның маңызын түсінгендіктен сақтайды.`
  },

  /* 9-БЕТ */

  {
    type: "gallery",
    title: "Қауіпсіз орта",

    images: [
      photos[3],
      photos[0],
      photos[5]
    ]
  },

  /* 10-БЕТ */

  {
    type: "video",
    title: "Әділ қоғам",
    video: videos[1],

    intro: "Қысқа бейнеролик арқылы заңды құрметтеу мен жауапкершілік мәселесін қарастырамыз.",

    outro: "Әділ қоғам әр азаматтың күнделікті дұрыс шешімінен басталады."
  },

  /* 11-БЕТ */

  {
    type: "speech",
    title: "Интернеттегі құқық пен тәртіп",

    text: `Қазіргі уақытта құқықтық мәдениет интернетте де маңызды.

Басқа адамның жеке мәліметтерін рұқсатсыз тарату, біреуді қорлау немесе жалған ақпарат тарату зиян келтіруі мүмкін.

Интернетте белгісіз адамнан келген хабарға сақтықпен қарау керек.

Егер біреу қорқытса немесе қысым көрсетсе, сенімді ересек адамнан және тиісті қызметтерден көмек сұраған дұрыс.

Цифрлық жауапкершілік — қазіргі азаматтың маңызды қасиеті.`
  },

  /* 12-БЕТ */

  {
    type: "gallery",
    title: "Қоғамдағы өзара құрмет",

    images: [
      photos[5],
      photos[2],
      photos[1]
    ]
  },

  /* 13-БЕТ */

  {
    type: "speech",
    title: "Әділдік және адалдық",

    text: `Әділдік — адамдарға бірдей өлшеммен қарап, шешімді нақты деректерге сүйеніп қабылдау.

Адалдық — өз міндетін шын ниетпен орындау, өтірік айтпау және өзгенің еңбегін құрметтеу.

Мысалы, топтық жұмыста әр студенттің үлесін дұрыс бағалау әділдіктің көрінісі.

Заңға құрмет пен адалдық қатар жүргенде қоғамдағы сенім нығаяды.`
  },

  /* 14-БЕТ */

  {
    type: "gallery",
    title: "Болашақтың саналы азаматтары",

    images: [
      photos[4],
      photos[0],
      photos[3]
    ]
  },

  /* 15-БЕТ */

  {
    type: "video",
    title: "Заң мен тәртіп — қорытынды",
    video: videos[2],

    intro: "Түсіндірме бөлімін қысқа бейнероликпен қорытындылаймыз.",

    outro: "Енді командаларға бөлініп, заң мен тәртіп тақырыбын күрделі суреттер арқылы бейнелейміз."
  }

];

/* =====================================
   КОМАНДАЛАР
===================================== */

const teamNames = [
  "Әділдік",
  "Құқық",
  "Тәртіп",
  "Сенім",
  "Парасат",
  "Бірлік"
];

/* =====================================
   БІРІНШІ СУРЕТ ТАПСЫРМАЛАРЫ
===================================== */

const drawingTasks = [

  {
    title: "Әділ сот — шындықтың таразысы",

    description: "Азаматтың құқығы қорғалатын сот залын күрделі композиция ретінде салыңдар.",

    details: [
      "Судья, екі тарап және куәгер көрінсін",
      "Істің мән-жайын көрсететін дәлел бейнеленсін",
      "Әділ шешімге келу жолы анық байқалсын",
      "Суретте әділдік таразысы және қысқа ұран болсын"
    ]
  },

  {
    title: "Киберқауіпсіздік — цифрлық құқық",

    description: "Интернетте адамның жеке мәліметін қорғауға арналған үш кезеңді постер салыңдар.",

    details: [
      "Бірінші көріністе цифрлық қауіп көрсетілсін",
      "Екінші көріністе дұрыс қорғану әрекеті болсын",
      "Үшінші көріністе мәселенің қауіпсіз шешімі бейнеленсін",
      "Қауіп пен қорғанысты әртүрлі түспен ажыратыңдар"
    ]
  },

  {
    title: "Қауіпсіз қала — тәртіп картасы",

    description: "Бір уақытта бірнеше қауіпсіздік ережесі орындалатын үлкен қала қиылысын салыңдар.",

    details: [
      "Жол қиылысы, бағдаршам, жаяу жүргінші жолы болсын",
      "Көлік, велосипед және жаяу жүргінші бейнеленсін",
      "Кемінде үш дұрыс қауіпсіздік әрекетін көрсетіңдер",
      "Белгілер мен қозғалыс бағыттары түсінікті болсын"
    ]
  },

  {
    title: "Тұтынушы құқығы — әділ шешім",

    description: "Дүкенде ақаулы зат сатып алған адамның құқығын қорғау жолын бейнелеңдер.",

    details: [
      "Сатушы, сатып алушы және тауар көрсетілсін",
      "Түбіртек немесе сатып алу дәлелі болсын",
      "Мәселені сыпайы түрде шешу әрекеті салынсын",
      "Оқиғаның басы, мәселесі және шешімі көрінсін"
    ]
  },

  {
    title: "Жемқорлықсыз болашақ",

    description: "Әділ қоғам мен жемқорлыққа жол бермеуді түсіндіретін мазмұнды постер құрастырыңдар.",

    details: [
      "Әділ және әділетсіз таңдау салыстырылсын",
      "Адал еңбек пен ашық бағалау бейнеленсін",
      "Қоғам сенімі көрініспен көрсетілсін",
      "Өздерің ойлап тапқан мағыналы ұран қосыңдар"
    ]
  },

  {
    title: "Заңға құрмет — бір қала, бір қоғам",

    description: "Қаладағы бірнеше қоғамдық орынды біріктіріп, адамдардың тәртіп сақтауын көрсетіңдер.",

    details: [
      "Саябақ, көше, колледж және қоғамдық көлік болсын",
      "Әр орында тәртіптің бөлек үлгісі көрсетілсін",
      "Адамдардың бір-бірін құрметтеуі байқалсын",
      "Барлық көріністі ортақ бір идея біріктірсін"
    ]
  }

];

/* =====================================
   ҚОСЫМША ТАПСЫРМАЛАР
===================================== */

const extraTasks = [

  {
    title: "Соттан тыс бейбіт келісім",

    description: "Екі адамның келіспеушілікті өзара сыйластықпен шешуін бейнелеңдер.",

    details: [
      "Келіспеушіліктің себебі көрінсін",
      "Екі тараптың пікірі бейнеленсін",
      "Келісімге келу жолын көрсетіңдер"
    ]
  },

  {
    title: "Авторлық құқық әлемі",

    description: "Суретші мен дизайнер еңбегінің қалай қорғалатынын көрсететін постер салыңдар.",

    details: [
      "Туынды авторы белгіленсін",
      "Рұқсатсыз көшіру мәселесі көрсетілсін",
      "Заңды пайдалану жолы бейнеленсін"
    ]
  },

  {
    title: "Мектеп маңындағы қауіпсіз қозғалыс",

    description: "Білім беру мекемесінің маңын қауіпсіз ететін жол жоспарын салыңдар.",

    details: [
      "Жаяу жүргіншілер бағыты болсын",
      "Көлік қозғалысы бөлек көрсетілсін",
      "Қауіпсіздік белгілері орналастырылсын"
    ]
  },

  {
    title: "Құқықты қорғаудың үш қадамы",

    description: "Өз құқығы бұзылған адамның мәселені заңды түрде шешу жолын көрсетіңдер.",

    details: [
      "Мәселені анықтау кезеңі болсын",
      "Дәлел жинау және көмек сұрау бейнеленсін",
      "Қорытынды шешім көрсетілсін"
    ]
  },

  {
    title: "Адал конкурс",

    description: "Байқаудағы ашық бағалау мен әділ жеңісті бейнелейтін күрделі постер салыңдар.",

    details: [
      "Қатысушылар және ортақ өлшемдер болсын",
      "Бағалау үдерісі ашық көрсетілсін",
      "Еңбек нәтижесіне сай жеңімпаз анықталсын"
    ]
  },

  {
    title: "Бірлік пен жауапкершілік",

    description: "Әртүрлі маман иелері қоғам қауіпсіздігі үшін бірлесіп әрекет ететін көрініс салыңдар.",

    details: [
      "Кемінде төрт түрлі маман бейнеленсін",
      "Әрқайсының қоғамға пайдасы көрсетілсін",
      "Ортақ қауіпсіздік идеясы анық болсын"
    ]
  }

];

/* =====================================
   САЙТТЫҢ КҮЙІ
===================================== */

let view = "home";
let currentSlide = 0;

let teamCount = 3;
let scores = Array(6).fill(null);

let gameStarted = false;
let gameFinished = false;
let extraEnabled = false;

let mode = "lesson";

let secondsLeft = 900;
let running = false;
let deadline = 0;

let activeVideo = false;

let typingFrame = null;
let fullText = "";

const scoreChoices = [
  55, 60, 65, 70, 75,
  80, 85, 90, 95, 100
];

/* =====================================
   ТАЙМЕР
===================================== */

function refreshClock() {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const clockText =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  document.getElementById("clock").textContent =
    clockText;

  document.getElementById("phase").textContent =
    mode === "lesson"
      ? "ТҮСІНДІРУ"
      : "СУРЕТ САЛУ";

  document.getElementById("clockBtn").textContent =
    running ? "Ⅱ" : "▶";

  const bigClock = document.getElementById("bigClock");

  if (bigClock) {
    bigClock.textContent = clockText;
  }
}

function startClock() {
  if (running || secondsLeft <= 0) return;

  running = true;
  deadline = Date.now() + secondsLeft * 1000;

  refreshClock();
}

function pauseClock() {
  if (!running) return;

  secondsLeft = Math.max(
    0,
    Math.ceil((deadline - Date.now()) / 1000)
  );

  running = false;

  refreshClock();
}

function toggleTimer() {
  if (running) {
    pauseClock();
  } else {
    startClock();
  }
}

function switchMode(nextMode) {
  if (mode !== nextMode) {
    pauseClock();

    mode = nextMode;

    secondsLeft =
      nextMode === "lesson" ? 900 : 600;
  }

  refreshClock();
}

setInterval(() => {
  if (!running) return;

  secondsLeft = Math.max(
    0,
    Math.ceil((deadline - Date.now()) / 1000)
  );

  if (secondsLeft === 0) {
    running = false;

    if (
      mode === "game" &&
      gameStarted &&
      !gameFinished
    ) {
      finishGame();
    }
  }

  refreshClock();
}, 250);

/* =====================================
   ТОЛЫҚ ЭКРАН
===================================== */

function fullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement
      .requestFullscreen?.()
      .catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
}

/* =====================================
   ҚОСЫМША ФУНКЦИЯЛАР
===================================== */

function progress(current, total) {
  const percent = current / total * 100;

  return `
    <div class="progress">
      <div class="progress-fill"
           style="width:${percent}%">
      </div>
    </div>
  `;
}

function stopTyping() {
  if (typingFrame !== null) {
    cancelAnimationFrame(typingFrame);
    typingFrame = null;
  }
}

function typeText(text) {
  stopTyping();

  const element = document.getElementById("typedText");
  if (!element) return;

  fullText = text.trim();

  element.textContent = "";
  element.classList.add("typing");

  const start = performance.now();

  function frame(now) {
    if (!element.isConnected) return;

    const count = Math.min(
      fullText.length,
      Math.floor((now - start) / 1000 * 180)
    );

    element.textContent = fullText.slice(0, count);

    if (count < fullText.length) {
      typingFrame = requestAnimationFrame(frame);
    } else {
      typingFrame = null;
      element.classList.remove("typing");

      const button = document.getElementById("revealText");

      if (button) {
        button.hidden = true;
      }
    }
  }

  typingFrame = requestAnimationFrame(frame);
}

function revealText() {
  stopTyping();

  const element = document.getElementById("typedText");

  if (element) {
    element.textContent = fullText;
    element.classList.remove("typing");
  }

  const button = document.getElementById("revealText");

  if (button) {
    button.hidden = true;
  }
}

function fallbackPhoto(image) {
  const attempt = Number(image.dataset.retry || 0);

  if (attempt >= 3) {
    image.onerror = null;
    return;
  }

  image.dataset.retry = attempt + 1;
  image.src = photos[(attempt + 3) % photos.length];
}

/* =====================================
   БАСТЫ БЕТ
===================================== */

function showHome() {
  stopTyping();
  pauseClock();

  activeVideo = false;
  view = "home";

  app.innerHTML = `
    <section class="hero page-enter">

      <div>

        <div class="eyebrow">
          ҚҰҚЫҚ · ӘДІЛДІК · ҚАУІПСІЗДІК
        </div>

        <h1>
          ЗАҢ ЖӘНЕ<br>
          <span>ТӘРТІП</span>
        </h1>

        <p>
          Бірінші курс студенттеріне арналған
          түсіндірме және шығармашылық
          командалық сайыс.
        </p>

        <div class="actions">

          <button class="btn primary"
                  onclick="showSlide(0)">
            Сабақты бастау →
          </button>

          <button class="btn"
                  onclick="showGame()">
            Сурет салу сайысы
          </button>

        </div>

        <p>
          15 минут түсіндірме · 10 минут ойын
        </p>

      </div>

      <div class="hero-image">
        <img src="${photos[1]}"
             alt="Студенттер">
      </div>

    </section>
  `;

  window.scrollTo(0, 0);
}

/* =====================================
   СЛАЙДТАР
===================================== */

function showSlide(index) {
  stopTyping();

  switchMode("lesson");

  currentSlide = Math.max(
    0,
    Math.min(slides.length - 1, index)
  );

  activeVideo = false;
  view = "slide";

  if (!running && secondsLeft > 0) {
    startClock();
  }

  renderSlide();

  window.scrollTo(0, 0);
}

/* АРТҚА ЖӘНЕ КЕЛЕСІ БЕТ
   ЕКЕУІ ДЕ ОҢ ЖАҚТА */

function slideControls() {
  const lastSlide =
    currentSlide === slides.length - 1;

  return `
    <div class="slide-controls">

      <button class="btn"
              onclick="previousSlide()">
        ← Артқа
      </button>

      <button class="btn primary"
              onclick="nextSlide()">

        ${lastSlide
          ? "Ойынға өту →"
          : "Келесі бет →"}

      </button>

    </div>
  `;
}

function previousSlide() {
  if (currentSlide === 0) {
    showHome();
  } else {
    showSlide(currentSlide - 1);
  }
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    showGame();
  } else {
    showSlide(currentSlide + 1);
  }
}

/* =====================================
   СЛАЙДТЫ КӨРСЕТУ
===================================== */

function renderSlide() {
  const slide = slides[currentSlide];

  let content = "";

  /* ТҮСІНДІРМЕ */

  if (slide.type === "speech") {
    content = `
      <section class="card speech-card">

        <span class="eyebrow">
          ТҮСІНДІРМЕ
        </span>

        <h2>${slide.title}</h2>

        <div id="typedText"
             class="teacher-text">
        </div>

        <div class="actions">

          <button class="btn"
                  id="revealText"
                  onclick="revealText()">
            Мәтінді толық ашу
          </button>

        </div>

      </section>
    `;
  }

  /* ФОТОЛАР */

  if (slide.type === "gallery") {
    content = `
      <div class="photo-grid">

        ${slide.images.map((src, index) => `
          <div class="photo-box"
               style="--i:${index}">

            <img src="${src}"
                 alt="Сурет ${index + 1}"
                 loading="eager"
                 onerror="fallbackPhoto(this)">

          </div>
        `).join("")}

      </div>
    `;
  }

  /* YOUTUBE ВИДЕО */

  if (slide.type === "video") {
    const id = slide.video.id;

    content = `
      <section class="card video-box">

        <div class="note">
          ${slide.intro}
        </div>

        ${activeVideo ? `
          <div class="video-frame">

            <iframe
              src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1"
              title="${slide.title}"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen>
            </iframe>

          </div>
        ` : `
          <div class="video-frame">

            <div>
              <h2>${slide.title}</h2>
              <p>
                Ұзақтығы: ${slide.video.time}
              </p>
            </div>

          </div>
        `}

        <!-- YOUTUBE БАТЫРМАЛАРЫ ОҢ ЖАҚТА -->

        <div class="actions">

          <button class="btn primary"
                  onclick="toggleVideo()">

            ${activeVideo
              ? "■ Тоқтату"
              : "▶ Видеоны бастау"}

          </button>

          <a class="btn"
             href="https://www.youtube.com/watch?v=${id}"
             target="_blank"
             rel="noopener noreferrer">
            ▶ YouTube-та ашу
          </a>

        </div>

        <div class="note">
          ${slide.outro}
        </div>

      </section>
    `;
  }

  /* БЕТ ҚҰРЫЛЫМЫ */

  app.innerHTML = `
    <div class="page-enter">

      <div class="row-between">

        <div>
          <div class="eyebrow">
            ЗАҢ ЖӘНЕ ТӘРТІП
          </div>

          <h1>${slide.title}</h1>
        </div>

        <span class="chip">
          ${currentSlide + 1} / ${slides.length}
        </span>

      </div>

      ${progress(currentSlide + 1, slides.length)}

      ${content}

      ${slideControls()}

    </div>
  `;

  if (slide.type === "speech") {
    typeText(slide.text);
  }
}

function toggleVideo() {
  activeVideo = !activeVideo;
  renderSlide();
}

/* =====================================
   ОЙЫН БЕТІ
===================================== */

function showGame() {
  stopTyping();

  activeVideo = false;

  switchMode("game");

  if (gameFinished) {
    showResults();
    return;
  }

  if (gameStarted) {
    renderDrawing();
    return;
  }

  view = "setup";
  renderSetup();
}

/* =====================================
   КОМАНДА САНЫН ТАҢДАУ
===================================== */

function renderSetup() {
  app.innerHTML = `
    <section class="card setup page-enter">

      <div class="eyebrow">
        ШЫҒАРМАШЫЛЫҚ КОМАНДАЛЫҚ САЙЫС
      </div>

      <h1>ЗАҢ ЖӘНЕ ТӘРТІП</h1>

      <h2>Қанша команда қатысады?</h2>

      <div class="count-picker">

        ${[3, 4, 5, 6].map(n => `
          <button
            class="count-btn ${teamCount === n ? "selected" : ""}"
            onclick="selectCount(${n})">

            ${n}

            <small>КОМАНДА</small>

          </button>
        `).join("")}

      </div>

      <div class="rules">

        <strong>Ойын ережесі:</strong>

        <p>
          • Әр командаға бір-біріне ұқсамайтын
          күрделі сурет тапсырмасы беріледі.
        </p>

        <p>
          • Суреттер қағазға салынады.
          Барлық команда бір уақытта бастайды.
        </p>

        <p>
          • Барлық командаға ортақ уақыт —
          10 минут.
        </p>

        <p>
          • Командалар ерте аяқтаса,
          жүргізуші ойынды аяқтай алады
          немесе қосымша тапсырма береді.
        </p>

        <p>
          • Әр команданың жұмысы
          55–100 ұпай аралығында бағаланады.
        </p>

      </div>

      <div class="actions">

        <button class="btn primary"
                onclick="beginDrawing()">

          ${teamCount} тапсырманы ашу
          және бастау →

        </button>

      </div>

    </section>
  `;

  window.scrollTo(0, 0);
}

function selectCount(number) {
  if (![3, 4, 5, 6].includes(number)) return;

  teamCount = number;
  scores = Array(6).fill(null);

  renderSetup();
}

/* =====================================
   ОЙЫНДЫ БАСТАУ
===================================== */

function beginDrawing() {
  gameStarted = true;
  gameFinished = false;
  extraEnabled = false;

  scores = Array(6).fill(null);

  mode = "game";
  secondsLeft = 600;
  running = false;

  startClock();
  renderDrawing();
}

/* =====================================
   ӘР КОМАНДАҒА ТАПСЫРМА
===================================== */

function renderTaskCard(task, index, isExtra) {
  return `
    <section class="card task-card">

      <span class="team-name">
        ${index + 1}-КОМАНДА · ${teamNames[index]}
      </span>

      <h2>${task.title}</h2>

      <p>
        <strong>${task.description}</strong>
      </p>

      <ul>
        ${task.details.map(detail => `
          <li>${detail}</li>
        `).join("")}
      </ul>

      <span class="chip">
        ${isExtra
          ? "ЕКІНШІ СУРЕТ"
          : "БІРІНШІ СУРЕТ"}
      </span>

    </section>
  `;
}

/* =====================================
   СУРЕТ САЛУ САЙЫСЫ
===================================== */

function renderDrawing() {
  view = "drawing";

  const tasks = extraEnabled
    ? extraTasks
    : drawingTasks;

  app.innerHTML = `
    <div class="page-enter">

      <div class="row-between">

        <div>

          <div class="eyebrow">
            ${teamCount} КОМАНДА ·
            ${teamCount} БӨЛЕК ТАПСЫРМА
          </div>

          <h1>
            ${extraEnabled
              ? "Қосымша сурет салу"
              : "Күрделі сурет салу сайысы"}
          </h1>

        </div>

        <span class="chip">
          ${extraEnabled
            ? "2-КЕЗЕҢ"
            : "1-КЕЗЕҢ"}
        </span>

      </div>

      <div class="drawing-toolbar">

        <div>

          <div class="eyebrow">
            ҚАЛҒАН УАҚЫТ
          </div>

          <span class="timer-large"
                id="bigClock">

            ${document.getElementById("clock").textContent}

          </span>

        </div>

        <div>

          <strong>
            Барлық команда бір уақытта
            сурет салады.
          </strong>

          <p>
            Уақыт бітсе, бағалауға өтеміз.
          </p>

        </div>

      </div>

      <div class="drawing-grid">

        ${tasks.slice(0, teamCount).map((task, index) =>
          renderTaskCard(task, index, extraEnabled)
        ).join("")}

      </div>

      <section class="card"
               style="margin-top:23px">

        <h2>
          ${extraEnabled
            ? "Қосымша тапсырмалар дайын ба?"
            : "Бірінші суреттер дайын ба?"}
        </h2>

        <p>
          Егер командалар тапсырманы ерте
          орындаса, келесі әрекетті таңдауға болады.

          Қосымша кезеңде уақыт қайта басталмайды.
        </p>

        <div class="actions">

          <button class="btn primary"
                  onclick="finishGame()">
            ✓ Аяқтау
          </button>

          ${!extraEnabled && secondsLeft > 0 ? `
            <button class="btn"
                    onclick="startExtra()">
              + Тағы тапсырма
            </button>
          ` : ""}

        </div>

      </section>

    </div>
  `;

  window.scrollTo(0, 0);
}

/* =====================================
   ҚОСЫМША КЕЗЕҢ
===================================== */

function startExtra() {
  if (gameFinished || secondsLeft <= 0) return;

  extraEnabled = true;
  renderDrawing();
}

/* =====================================
   ОЙЫНДЫ АЯҚТАУ
===================================== */

function finishGame() {
  if (gameFinished) return;

  pauseClock();

  gameFinished = true;

  showResults();
}

/* =====================================
   БАҒАЛАУ
===================================== */

function showResults() {
  view = "results";

  running = false;
  refreshClock();

  renderResults();

  window.scrollTo(0, 0);
}

function renderResults() {
  const activeScores = scores.slice(0, teamCount);

  const graded = activeScores.filter(
    score => score !== null
  );

  const allGraded =
    graded.length === teamCount;

  const maxScore = graded.length
    ? Math.max(...graded)
    : null;

  const winners = teamNames
    .slice(0, teamCount)
    .filter((name, index) =>
      scores[index] !== null &&
      scores[index] === maxScore
    );

  app.innerHTML = `
    <div class="page-enter">

      <section class="card"
               style="text-align:center">

        <div class="eyebrow">
          ЗАҢ ЖӘНЕ ТӘРТІП · ҚОРЫТЫНДЫ
        </div>

        <h1>
          Шығармашылық сайыс аяқталды!
        </h1>

        <p style="font-size:20px">
          Әр команданың жұмысын
          бағалаңыз.
        </p>

        <span class="chip">
          ${graded.length} / ${teamCount}
          команда бағаланды
        </span>

      </section>

      <div class="result-grid">

        ${teamNames.slice(0, teamCount).map((name, index) => `

          <section class="card">

            <div class="eyebrow">
              ${index + 1}-КОМАНДА
            </div>

            <h2>${name}</h2>

            <p>
              ${drawingTasks[index].title}
            </p>

            ${extraEnabled ? `
              <p>
                Қосымша:
                ${extraTasks[index].title}
              </p>
            ` : ""}

            <div class="result-score">
              ${scores[index] === null
                ? "—"
                : scores[index]}
            </div>

            <div class="grade-buttons">

              ${scoreChoices.map(value => `
                <button
                  class="grade-btn ${scores[index] === value ? "selected" : ""}"
                  onclick="gradeTeam(${index},${value})">

                  ${value}

                </button>
              `).join("")}

            </div>

          </section>

        `).join("")}

      </div>

      <section class="card"
               style="margin-top:24px;text-align:center">

        ${allGraded ? `

          <h2>
            Үздік нәтиже:
            ${winners.join(", ")}
          </h2>

          <p>
            Барлық командаларға белсенді
            қатысқандары үшін рақмет!
          </p>

        ` : `

          <h2>Бағалау жалғасуда</h2>

          <p>
            Әр командаға ұпай қойылған соң
            қорытынды нәтиже шығады.
          </p>

        `}

        <h1 class="goodbye">
          Сау болыңыздар!
        </h1>

        <p style="font-size:22px">
          Заңды құрметтейік,
          тәртіпті сақтайық!
        </p>

        <div class="actions">

          <button class="btn primary"
                  onclick="showHome()">
            Басты бет
          </button>

          <button class="btn"
                  onclick="restartGame()">
            Қайта бастау
          </button>

        </div>

        <h3 style="color:#b68635;margin-top:30px">
          BY DARKHAN
        </h3>

      </section>

    </div>
  `;
}

/* =====================================
   ҰПАЙ БЕРУ
===================================== */

function gradeTeam(index, value) {
  if (index < 0 || index >= teamCount) return;

  if (!scoreChoices.includes(value)) return;

  const oldScroll = window.scrollY;

  scores[index] = value;

  renderResults();

  window.scrollTo(0, oldScroll);
}

/* =====================================
   ОЙЫНДЫ ҚАЙТА БАСТАУ
===================================== */

function restartGame() {
  const answer = confirm(
    "Ойынды жаңадан бастаймыз ба?"
  );

  if (!answer) return;

  running = false;

  gameStarted = false;
  gameFinished = false;
  extraEnabled = false;

  scores = Array(6).fill(null);

  mode = "game";
  secondsLeft = 600;

  refreshClock();

  view = "setup";

  renderSetup();
}

/* =====================================
   ПЕРНЕТАҚТАМЕН БАСҚАРУ
===================================== */

document.addEventListener("keydown", event => {

  if (
    event.key === "ArrowRight" &&
    view === "slide"
  ) {
    nextSlide();
  }

  if (
    event.key === "ArrowLeft" &&
    view === "slide"
  ) {
    previousSlide();
  }

});

/* =====================================
   САЙТТЫ ІСКЕ ҚОСУ
===================================== */

refreshClock();
showHome();
