const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askquestion(question) {
  return new Promise((resolve) => {
    rl.question(question,(answer) => {
      resolve(answer);
    });
  });
}

function closeInput() {
  rl.close();
}

module.exports = {
  askquestion,
  closeInput,
};
