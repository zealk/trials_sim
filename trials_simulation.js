let win_rate = 60;
let iteration = 100000;
let total_rounds = 0;
let total_resets = 0;
let reset_threshold = 5;
for (let i = 0; i < iteration; i++) {
    let rounds = 0;
    let resets = 0;
    let mercy = true;
    let wins = 0;
    while (wins < 7) {
        let random = Math.floor(Math.random() * 100);
        if (random < win_rate) {
          wins++;
        } else {
          if (mercy && wins >= reset_threshold) {
            mercy = false;
          } else {
            wins = 0;
            resets ++;
          }
        }
        rounds++;
    }
    total_rounds += rounds;
    total_resets += resets;
}
console.log("Average rounds per flawless: %f, average resets per flawless: %f", total_rounds / iteration, total_resets / iteration);
