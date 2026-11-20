let count = 0;
let superCount = 0;

function like() {
  count = count + 1;
  document.getElementById("num").textContent = count;
  document.getElementById("note").textContent = "괜찮네요~";
}

function superLike() {
  superCount = superCount + 1;
  document.getElementById("superNum").textContent = superCount;
  document.getElementById("note").textContent = "와... 진짜 좋아하시는군요?! 😳";
  if (superCount >= 5) {
    document.getElementById("note").textContent = "너무 과하게 좋아하시는 거 아니에요?! 😂";
  }
}

function goAI() {
  const ais = [
    "https://chatgpt.com",
    "https://gemini.google.com",
    "https://grok.com"
  ];
  const random = ais[Math.floor(Math.random() * ais.length)];
  const a = document.createElement("a");
  a.href = random;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function goGame() {
  const a = document.createElement("a");
  a.href = "https://store.steampowered.com";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function answerQuiz(isO) {
  const result = document.getElementById("quiz-result");
  const dogIntro = document.getElementById("dog-intro");
  if (isO) {
    result.textContent = "정답! 강아지를 더 좋아해요 🐶";
    result.style.color = "#2e7d32";
    dogIntro.style.display = "block";
  } else {
    result.textContent = "땡! 강아지가 최고예요 ㅋㅋ";
    result.style.color = "#c62828";
    dogIntro.style.display = "none";
  }
}

let reactionStart = 0;
let reactionTimeout;
let gameActive = false;

function reactionGame() {
  const btn = document.getElementById("reaction-btn");
  const result = document.getElementById("reaction-result");
  btn.textContent = "기다리세요...";
  btn.style.background = "#ffcdd2";
  result.textContent = "";
  gameActive = false;
  clearTimeout(reactionTimeout);
  const delay = Math.random() * 2000 + 1000;
  reactionTimeout = setTimeout(() => {
    btn.textContent = "지금 클릭!";
    btn.style.background = "#c8e6c9";
    reactionStart = Date.now();
    gameActive = true;
  }, delay);
}

function checkReaction() {
  const btn = document.getElementById("reaction-btn");
  const result = document.getElementById("reaction-result");
  if (btn.textContent === "시작!" || btn.textContent === "다시 시작") {
    reactionGame();
    return;
  }
  if (gameActive && btn.textContent === "지금 클릭!") {
    const time = Date.now() - reactionStart;
    result.textContent = "반응속도: " + time + "ms! " + (time < 300 ? "빠르시네요 🚀" : "조금 더 연습해봐요 ㅋㅋ");
    btn.textContent = "다시 시작";
    btn.style.background = "white";
    gameActive = false;
  }
}

function toggleDark() {
  document.body.classList.toggle("dark");
}

function greet() {
  const name = document.getElementById("who").value || "방문자";
  const hour = new Date().getHours();
  let word = "좋은 저녁이에요";
  if (hour < 12) {
    word = "좋은 아침이에요";
  } else if (hour < 18) {
    word = "좋은 오후예요";
  }
  document.getElementById("hello").textContent = name + "님, " + word + "! 안희준의 페이지에 오신 것을 환영합니다.";
}

function tick() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString("ko-KR");
}
tick();
setInterval(tick, 1000);
  </script>
