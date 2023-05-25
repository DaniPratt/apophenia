<?php
 require_once "data.php";
?>

<!DOCTYPE html>
<html>

<head>
    <title>Apophenia task v2</title>

    <script src="db/validate.js"></script>
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="https://unpkg.com/jspsych@7.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-image-keyboard-response@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/pluginAPI@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-survey-text@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-html-slider-response@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-preload@1.0.0"></script>
    <link href="https://unpkg.com/jspsych@7.0.0/css/jspsych.css" rel="stylesheet" type="text/css" />
    <link href="css/style.css" rel="stylesheet" type="text/css" />
</head>
<script src="exp/fn.js"></script>
<script src="exp/conf.js"></script>
<?php
      if ($db_connection_status == true) {
        include_once "include/nda.php";
        // echo'<br>';
        // echo'connected';
      } else if ($db_connection_status == false) {
        include_once "include/intake.php";
        // echo'<br>';
        // echo'not connected';
      }
    ?>
<script>

    const jsPsych = initJsPsych({
        defult_iti: 0
        //on_finish: function(){saveData(jsPsych.data.get().csv());}
    });



</script>

<footer>

<script src="exp/fn.js"></script>
    <script src="exp/var.js"></script>
    <script type="text/javascript">
      // declare NDA required variables
      let GUID;
      let subjectID;
      let sexAtBirth;
      let siteNumber;
      let ageAtAssessment;
      let groupStatus;
      let feedbackLink;

      if (db_connection === false) {
        GUID = "";
        subjectID = "";
        sexAtBirth = "";
        siteNumber = "";
        ageAtAssessment = "";
        groupStatus = "";
        feedbackLink = "";
      } else if (db_connection === true) {
        GUID = "<?php echo $subjectKey?>";
        subjectID = "<?php echo $consortId?>";
        sexAtBirth = "<?php echo $sexAtBirth?>";
        siteNumber = "<?php echo $institutionAlias?>";
        ageAtAssessment = "<?php echo $ageInMonths?>";
        groupStatus = "<?php echo $groupStatus?>";
        feedbackLink = "https://belieflab.yale.edu/omnibus/eCRFs/feedback/tasks/dd.php?candidateId=<?php echo $candidateId?>&studyId=<?php echo $studyId?>";
      }
    </script>
</footer>




</html>