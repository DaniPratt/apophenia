let test_procedure = {
    timeline: [trial, response_initiated],
    timeline_variables: test_stimuli,
};

timeline.push(introduction);
timeline.push(test_procedure);
timeline.push(save_data);

jsPsych.run(timeline);
