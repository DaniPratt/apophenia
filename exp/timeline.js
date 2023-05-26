timeline = [];

let indexIterator = 1;

let introduction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
        "You will see a series of images. Press the space bar when you think you see something. Press the space bar to begin.",
    choices: "ALL_KEYS",
};
timeline.push(introduction);

let init_response = 1;

let preload = {
    type: jsPsychPreload,
    auto_preload: true,
};

let trials = {
    type: jsPsychImageKeyboardResponse,
    choices: " ",
    // prompt: "<p>Press the space bar if you see an object",
    trial_duration: 500,
    stimulus: jsPsych.timelineVariable("stimulus"),
    post_trial_gap: 0,
    // render_on_canvas: true,
    on_finish: (data) => {
        "use strict";
        data.subjectkey = GUID;
        data.src_subject_id = workerId;
        data.site = siteNumber;
        data.interview_date = today;
        data.interview_age = ageAtAssessment;
        data.sex = sexAtBirth;
        data.phenotype = groupStatus;
        data.handedness = handedness;
        data.index = indexIterator;
        indexIterator++;
        if (jsPsych.pluginAPI.compareKeys(data.response, " ")) {
            init_response = 1;
        } else {
            init_response = 0;
        }
    },
};

let response_trial = {
    type: jsPsychSurveyText,
    questions: [{ prompt: "What did you see?" }],
    on_finish: (data) => {
        "use strict";
        data.subjectkey = GUID;
        data.src_subject_id = workerId;
        data.site = siteNumber;
        data.interview_date = today;
        data.interview_age = ageAtAssessment;
        data.sex = sexAtBirth;
        data.phenotype = groupStatus;
        data.handedness = handedness;
        data.index = indexIterator;
    },
};

let certainty_trial = {
    type: jsPsychHtmlSliderResponse,
    stimulus: "<p>How certain are you?",
    require_movement: true,
    labels: ["0%", "50%", "100%"],
};

let response_initiated = {
    timeline: [response_trial, certainty_trial],
    conditional_function: () => {
        if (init_response == 1) {
            return true;
        }
        return false;
    },
    on_finish: (data) => {
        "use strict";
        data.subjectkey = GUID;
        data.src_subject_id = workerId;
        data.site = siteNumber;
        data.interview_date = today;
        data.interview_age = ageAtAssessment;
        data.sex = sexAtBirth;
        data.phenotype = groupStatus;
        data.handedness = handedness;
        data.index = indexIterator;
    },
};

let test_procedure = {
    timeline: [trials, response_initiated],
    timeline_variables: test_stimuli,
};
timeline.push(test_procedure);

let save_data = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
        "<p>Data saving...</p>" +
        '<div class="sk-cube-grid">' +
        '<div class="sk-cube sk-cube1"></div>' +
        '<div class="sk-cube sk-cube2"></div>' +
        '<div class="sk-cube sk-cube3"></div>' +
        '<div class="sk-cube sk-cube4"></div>' +
        '<div class="sk-cube sk-cube5"></div>' +
        '<div class="sk-cube sk-cube6"></div>' +
        '<div class="sk-cube sk-cube7"></div>' +
        '<div class="sk-cube sk-cube8"></div>' +
        '<div class="sk-cube sk-cube9"></div>' +
        "</div>" +
        "<p>Do not close this window until the text dissapears.</p>",

    choices: jsPsych.NO_KEYS,
    trial_duration: 5000,
    on_finish: function () {
        "use strict";
        saveData("apophenia_" + workerId, jsPsych.data.get().csv());
    },
};
timeline.push(save_data);

jsPsych.run(timeline);
