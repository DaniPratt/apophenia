const version = "steve";
//const version = "inkblot";

let test_stimuli = [];

switch (version) {
    case "inkblot":
        for (let i = 1; i < 51; i++) {
            for (let j = 1; j < 8; j++) {
                test_stimuli.push({
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
        for (let i = 1; i < 2; i++) {
            for (let j = 1; j < 8; j++) {
                test_stimuli.push({
                    stimulus:
                        "stim/steve/Steve_step_" + i + "_round_" + j + ".jpg",
                });
            }
        }
        break;
}
