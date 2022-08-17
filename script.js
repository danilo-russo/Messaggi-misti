const randomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

const text = {
  soggetto: ["Il mare", "il lago", "il fiume"],
  aggettivo: ["è agitato", "è calmo"],
  azione: [
    "usiamo il surf",
    "usiamo la canoa",
    "usiamo il windsurf",
    "andiamo via",
  ],
};

let message = [];

for (let ele in text) {
  message.push(text[ele][randomNumber(text[ele].length)]);
}

console.log(message.join(" "));
