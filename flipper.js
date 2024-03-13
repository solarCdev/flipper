const card = document.querySelector("button");
const fin = document.querySelector(".fin");
const scoreNow = document.getElementById("score");
const des = document.querySelector(".des");

let score = 0;
const fill = [
  {
    what: "+1",
    color: "#FF2626",
    font: 1,
    fn: () => {
      score++;
    },
    p: 5,
  },
  {
    what: "+2",
    color: "#FF8A00",
    font: 1,
    fn: () => {
      score += 2;
    },
    p: 4,
  },
  {
    what: "+3",
    color: "#FFCC19",
    font: 0,
    fn: () => {
      score++;
    },
    p: 3,
  },
  {
    what: "+4",
    color: "#FF1995",
    font: 0,
    fn: () => {
      score++;
    },
    p: 2,
  },
  {
    what: "LUCKY!<br> +5",
    color: "#1A83FF",
    font: 1,
    fn: () => {
      score++;
    },
    p: 1,
  },
  {
    what: "폭파! <br> 탈락... 🧨",
    color: "#191919",
    font: 1,
    fn: () => {
      if (fin.innerHTML === "다시 플레이하기") {
        window.location.reload();
      }
      card.setAttribute("disabled", "disabled");
      des.style.display = "none";
      fin.innerHTML = "다시 플레이하기";
      scoreNow.innerHTML = "최종 점수 : " + scoreNow.innerHTML;
    },
    p: 0.5,
  },
  {
    what: "x2배",
    color: "#00EA95",
    font: 0,
    fn: () => {
      score *= 2;
    },
    p: 1,
  },
  {
    what: "-1...",
    color: "#3B3B3B",
    font: 1,
    fn: () => {
      score--;
    },
    p: 7,
  },
  {
    what: "-5...",
    color: "#2D234A",
    font: 1,
    fn: () => {
      score -= 5;
    },
    p: 2,
  },
  {
    what: "지금까지 모든 것 초기화 🕐",
    color: "yellow",
    font: 0,
    fn: () => {
      score = 0;
    },
    p: 1,
  },
];

let sum = 0;
for (let v of fill) {
  sum += v.p;
}

card.addEventListener("click", () => {
  let s = Math.ceil(Math.random() * sum);
  console.log(s, sum);
  let p = 0;
  let i = 0;
  for (; p < s; i++) {
    p += fill[i].p;
  }
  i--;
  console.log(i, fill[i].color);

  card.style.backgroundColor = fill[i].color;
  card.innerHTML = fill[i].what;
  card.style.color = fill[i].font ? "white" : "black";
  fill[i].fn();
  scoreNow.innerHTML = score;
});

fin.addEventListener("click", (event) => {
  if (event.target.innerHTML === "다시 플레이하기") {
    window.location.reload();
  }
  card.style.display = "none";
  des.style.display = "none";
  event.target.innerHTML = "다시 플레이하기";
  scoreNow.innerHTML = "최종 점수 : " + scoreNow.innerHTML;
});
