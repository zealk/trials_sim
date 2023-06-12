let win_rate = 60;
let iteration = 100000;
let best_reset_threshold = 0;
let best_total_rounds = -1;
let best_total_resets = -1;
for (let reset_threshold = 0; reset_threshold <= 7; reset_threshold++) {
    let total_rounds = 0;
    let total_resets = 0;
    for (let i = 0; i < iteration; i++) {
        let rounds = 0;
        let resets = 0;
        let mercy = 2;
        let wins = 0;
        while (wins < 7) {
            let random = Math.floor(Math.random() * 100);
            if (random < win_rate) {
              wins++;
            } else {
              if ((mercy == 2 && wins < reset_threshold) || mercy == 0) {
                wins = 0;
                mercy = 2;
                resets ++;
              } else {
                mercy --;
              }
            }
            rounds ++;
        }
        total_rounds += rounds;
        total_resets += resets;
    }
    console.log("Reset threshold: %d, avg total rounds until flawless: %f, avg total resets until flawless: %f", reset_threshold, total_rounds / iteration, total_resets / iteration);
    if (best_total_rounds == -1 || total_rounds < best_total_rounds) {
        best_reset_threshold = reset_threshold;
        best_total_rounds = total_rounds;
        best_total_resets = total_resets;
    }
}
console.log("Best reset threshold: %d, avg total rounds until flawless: %f , avg total resets until flawless: %f", best_reset_threshold, best_total_rounds / iteration, best_total_resets / iteration);
