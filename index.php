<?php
 require_once "data.php";
?>

<!DOCTYPE html>
<html>

<head>
    <title>Apophenia task v2</title>
    <script src="conf.js"></script>
    <script src="https://unpkg.com/jspsych@7.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-image-keyboard-response@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/pluginAPI@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-survey-text@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-html-slider-response@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-preload@1.0.0"></script>
    <script src="fn.js"></script>

    <link href="https://unpkg.com/jspsych@7.0.0/css/jspsych.css" rel="stylesheet" type="text/css" />
</head>
<script>
    const workerId = 123

    const jsPsych = initJsPsych({
        defult_iti: 0
        //on_finish: function(){saveData(jsPsych.data.get().csv());}
    });

    timeline = [];

    let introduction = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "You will see a series of images. Press the space bar when you think you see something. Press the space bar to begin.",
        choices: "ALL_KEYS"
    }
    timeline.push(introduction)



    let init_response = 1;

    let preload = {
        type: jsPsychPreload,
        auto_preload: true
    }

    let trials = {
        type: jsPsychImageKeyboardResponse,
        choices: " ",
        // prompt: "<p>Press the space bar if you see an object",
        trial_duration: 500,
        stimulus: jsPsych.timelineletiable('stimulus'),
        post_trial_gap: 0,
        // render_on_canvas: true,
        on_finish: function (data) {
            if (jsPsych.pluginAPI.compareKeys(data.response, ' ')) {
                init_response = 1;
            } else {
                init_response = 0;
            }
        }
    };

    let response_trial = {
        type: jsPsychSurveyText,
        questions: [
            { prompt: 'What did you see?' }
        ]
    }

    let certainty_trial = {
        type: jsPsychHtmlSliderResponse,
        stimulus: "<p>How certain are you?",
        require_movement: true,
        labels: ['0%', '50%', '100%']
    }

    let response_initiated = {
        timeline: [response_trial, certainty_trial],
        conditional_function: function () {
            if (init_response == 1) { return true; }
            return false;
        }
    }

    let test_procedure = {
        timeline: [trials, response_initiated],
        timeline_letiables: test_stimuli,
    };
    timeline.push(test_procedure)

    let save_data = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "<p>Data saving...</p>" +
            "<p>Do not close this window until the text dissapears.</p>",

        choices: jsPsych.NO_KEYS,
        trial_duration: 5000,
        on_finish: function () {
            'use strict';
            saveData("apophenia_" + workerId, jsPsych.data.get().csv());
        }
    };
    timeline.push(save_data)

    jsPsych.run(timeline);


</script>

</html>