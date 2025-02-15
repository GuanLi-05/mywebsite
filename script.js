// Language list
// English: en
// Chinese: zh
// French: fr
// Japanese: ja
// Italian: it
// German: de

const language = ["en", "zh", "fr", "ja", "it", "de"];
const wordData = {
    en: { home: "Home", about: "About", experience: "Experience", contact: "Contact" },
    zh: { home: "首页", about: "关于", experience: "经验", contact: "联系" },
    fr: { home: "Accueil", about: "À propos", experience: "Expérience", contact: "Contact" },
    ja: { home: "ホーム", about: "約", experience: "経験", contact: "連絡先" },
    it: { home: "Home", about: "Chi siamo", experience: "Esperienza", contact: "Contatto" },
    de: { home: "Startseite", about: "Über uns", experience: "Erfahrung", contact: "Kontakt" }
};

const imgData = {
    en: { flag: "e-flag", character: "english" },
    zh: { flag: "c-flag", character: "chinese" },
    fr: { flag: "f-flag", character: "french" },
    ja: { flag: "j-flag", character: "japanese" },
    it: { flag: "i-flag", character: "italian" },
    de: { flag: "g-flag", character: "german" }
};

const pageDataTitle = [
    { en: "Who ?", zh: "谁？", fr: "Qui ?", ja: "誰？", it: "Chi?", de: "Wer?" }, // page 0
    { en: "About.", zh: "关于", fr: "À propos.", ja: "について", it: "Chi siamo.", de: "Über uns." }, // page 1
    { en: "Experience.", zh: "经验", fr: "Expérience.", ja: "経験", it: "Esperienza.", de: "Erfahrung." }, // page 2
    { en: "Contacts !", zh: "联系方式！", fr: "Contacts !", ja: "連絡先！", it: "Contatti!", de: "Kontakte!" } // page 3
];

const pageDataTop = [
    { en: "Human Male. Age 19.", zh: "人类男性, 19岁。", fr: "Homme humain. Âge 19.", ja: "人間男性。年齢19歳。", it: "Uomo umano. Età 19.", de: "Menschlicher Mann. Alter 19." }, // page 0
    { en: "Sleeps a lot.", zh: "睡得很多。", fr: "Dort beaucoup.", ja: "たくさん寝る。", it: "Dorme molto.", de: "Schläft viel." }, // page 1
    { en: "Studies CS at UNSW. Second year student.", zh: "在 UNSW 学习计算机科学。二年级学生。", fr: "Étudie l'informatique à l'UNSW. Étudiant en deuxième année.", ja: "UNSWでコンピュータサイエンスを学んでいます。二年生の学生。", it: "Studia Informatica all'UNSW. Studente del secondo anno.", de: "Studiert Informatik an der UNSW. Zweites Studienjahr." }, // page 2
    { en: "Shhhh. Here are my socials.", zh: "嘘！这是我的社交账号。", fr: "Chut. Voici mes réseaux sociaux.", ja: "シーッ。これが私のソーシャルメディアです。", it: "Shhhh. Ecco i miei social.", de: "Pst. Hier sind meine sozialen Netzwerke." } // page 3
];

const pageDataBot = [
    { 
        en: "Enjoys taking long walks on the beach.", 
        zh: "喜欢在海滩上散步。",
        fr: "Aime se promener sur la plage.",
        ja: "ビーチを散歩するのが好き。",
        it: "Ama fare lunghe passeggiate sulla spiaggia.",
        de: "Genießt lange Spaziergänge am Strand." 
    }, // page 0

    { 
        en: "Sometimes will go climb plastic rocks.", 
        zh: "有时会去攀爬塑料岩壁。",
        fr: "Parfois, il grimpe sur des rochers en plastique.",
        ja: "たまにプラスチックの岩を登る。",
        it: "A volte scala rocce di plastica.",
        de: "Klettert manchmal auf Plastikfelsen." 
    }, // page 1

    { 
        en: "Yet to take a shower.", 
        zh: "还没洗澡。",
        fr: "N'a pas encore pris de douche.",
        ja: "まだシャワーを浴びていない。",
        it: "Non ha ancora fatto la doccia.",
        de: "Hat noch nicht geduscht." 
    }, // page 2

    { 
        en: "", 
        zh: "", 
        fr: "", 
        ja: "", 
        it: "", 
        de: "" 
    } // page 3
];

const sounds = ["plane-sound", "car-sound", "train-sound", "bike-sound"];

let page = 0;

let i = 0;
let isCooldown = false;
let cooldownDelay = 1510;
let animationDelay = 1300;
let longDelay = 1500;
let sound = false;
let prevSound = -1;

// Icon Clicked
function planeClicked() {
    // click cooldown
    if (isCooldown) return;
    isCooldown = true;
    setTimeout(() => {
        isCooldown = false;
    }, cooldownDelay);

    // DEBUG
    // alert("curr lang: " + document.documentElement.lang + " next lang: " + language[i])  
    i++;
    i = i % 6; 
    document.documentElement.lang = language[i];
    changeLanguage(document.documentElement.lang);
    runAnimation();
    updatePage();
    planeSound();
}

function runAnimation() {
    // runs animation
    const blinkElements = document.querySelectorAll('.blink');
    blinkElements.forEach(function(element) {
        element.style.animation = 'none';  // remove current animation
        element.style.animation = '';  
        element.style.animationPlayState = 'running';

        setTimeout(function() {
            element.style.animationPlayState = 'paused';
            element.style.animation = 'none';
        }, animationDelay);
    });

    const blinkLong = document.querySelectorAll('.blink-long');
    blinkLong.forEach(function(element) {
        element.style.animation = 'none';  // remove current animation
        element.style.animation = '';  
        element.style.animationPlayState = 'running';

        setTimeout(function() {
            element.style.animationPlayState = 'paused';
            element.style.animation = 'none';
        }, longDelay);
    });
} 

// Change Language 
function changeLanguage(data) {
    // nav bar
    document.getElementById('home').innerText = wordData[data].home;
    document.getElementById('about').innerText = wordData[data].about;
    document.getElementById('experience').innerText = wordData[data].experience;
    document.getElementById('contact').innerText = wordData[data].contact;

    // images
    document.getElementById('flag').src = "images/" + imgData[data].flag + ".png";
    document.getElementById('character').src = "images/" + imgData[data].character + ".png";
}

// Updates Information on Website
function updatePage() {
    const data = document.documentElement.lang;
    document.getElementById('page-title').innerText = pageDataTitle[page][data];
    document.getElementById('page-top').innerText = "\n" + pageDataTop[page][data];
    document.getElementById('page-bot').innerText = pageDataBot[page][data];
    if (page == 3) {
        document.getElementById("social-icon").classList.add("visible");
    } else {
        document.getElementById("social-icon").classList.remove("visible");
    }
}

// Icon Clicked
function soundClicked() {
    const audio = document.getElementById('bossanova');
    // plays sound first time clicked
    if (!sound) {
        sound = true;
        audio.play().catch(error => console.log(error));
        audio.volume = 0.7; 
    }
    // toggle mute and icon
    const icon = document.getElementById('sound');
    audio.muted = !audio.muted;
    if (audio.muted) {
        icon.src = "images/sound-off.png"
    } else {
        icon.src = "images/sound-on.png"
    }
}

// plays button sound
function buttonSound() {
    const audio = document.getElementById('button-sound');
    audio.volume = 0.4; 
    audio.play().catch(error => console.log(error));
}

// plays random transport sound when globe clicked
// same sound cannot be played twice
function planeSound() {
    let rand;
    do {
        rand = Math.floor(Math.random() * sounds.length);
    } while (rand == prevSound);

    const randomSound = sounds[rand];
    const audio = document.getElementById(randomSound);
    adjustVolume(audio, rand);
    audio.play().catch(error => console.log(error));
    prevSound = rand;
}

function adjustVolume(audio, num) {
    if (num == 0) { // plane
        audio.volume = 1;
    } else if (num == 1) { // car
        audio.volume = 1;
    } else if (num == 2) { // train
        audio.volume = 0.65;
    } else if (num == 3) { // bike
        audio.volume = 0.6;
    }
}

// Listen for click (globe icon)
document.querySelector('.plane').addEventListener('click', planeClicked);

// Listen for click (sound icon)
document.querySelector('.sound-control').addEventListener('click', soundClicked);

// Listen for click (home)
document.getElementById('home').addEventListener('click', function() {
    page = 0; 
    updatePage();  
    buttonSound();
});

// Listen for click (about)
document.getElementById('about').addEventListener('click', function() {
    page = 1; 
    updatePage();  
    buttonSound();
});

// Listen for click (experience)
document.getElementById('experience').addEventListener('click', function() {
    page = 2; 
    updatePage();  
    buttonSound();
});

// Listen for click (contact)
document.getElementById('contact').addEventListener('click', function() {
    page = 3; 
    updatePage(); 
    buttonSound(); 
});


