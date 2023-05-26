// toggle version //
const version = "steve";
// const version = "inkblot";

// toggle practice //
const practice = false;

// trial count //
const testTrials = 50; // default: 50
const practiceTrials = 1; // default: 1

// default to experiment //
let trials = testTrials;

if (practice == true) {
    trials = practiceTrials;
}
