const version = "steve";
//const version = "inkblot";

switch (version) {
    case "steve":
        let inkblot_stimuli = [];
        for (let i = 1; i < 51; i++) {
            for (let j = 1; j < 8; j++) {
                inkblot_stimuli.push({
                    stimulus: "Inkblot_2_step_" + i + "_round_" + j + ".jpg",
                });
            }
        }
        break;

    case "inkblot":
        let steve_stimuli = [];
        for (let i = 1; i < 51; i++) {
            for (let j = 1; j < 8; j++) {
                inkblot_stimuli.push({
                    stimulus: "Steve_2_step_" + i + "_round_" + j + ".jpg",
                });
            }
        }
        break;
}
