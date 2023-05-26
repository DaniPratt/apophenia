const stimuli = [];

switch (version) {
    case "inkblot":
        for (let i = 1; i <= trials; i++) {
            for (let j = 1; j < 8; j++) {
                stimuli.push({
                    stimulus:
                        "stim/inkblot/Inkblot_2_step_" +
                        i +
                        "_round_" +
                        j +
                        ".jpg",
                });
            }
        }
        break;

    case "steve":
        for (let i = 1; i <= trials; i++) {
            for (let j = 1; j < 8; j++) {
                stimuli.push({
                    stimulus:
                        "stim/steve/Steve_step_" + i + "_round_" + j + ".jpg",
                });
            }
        }
        break;
}
