$('document').ready(
function()
{

  function newGame()
  {
    count=0;
    userscore=0;
    $('.help-intro').show();
    $('.question-7').hide();
    $('.question-6').hide();
    $('.question-5').hide();
    $('.question-4').hide();
    $('.question-3').hide();
    $('.question-2').hide();
    $('.Finish-screen').hide();
    $('.question-1').hide();
    $('.active').text('Start');
    $("#answer1").removeClass('btn-danger btn-success');
    $("#answer2").removeClass('btn-danger btn-success');
    $("#answer3").removeClass('btn-danger btn-success');
    $("#answer4").removeClass('btn-danger btn-success');
    $("#answer5").removeClass('btn-danger btn-success');
    $("#answer6").removeClass('btn-danger btn-success');
    $("#answer7").removeClass('btn-danger btn-success');

  }

  /*logic for the Page starts*/
  newGame();


  $('.active').click(function()
  {
    /*--Checking the value of the answer*/
    /*$(".question-1-answer input[name='answer1']").click(function(){*/

    /*});*/

    count=count+1;

    $('.active').text('Next');

    if (count===1){
      $('.help-intro').hide();
      $('.question-7').hide();
      $('.question-6').hide();
      $('.question-5').hide();
      $('.question-4').hide();
      $('.question-3').hide();
      $('.question-2').hide();
      $('.Finish-screen').hide();
      $('.question-1').show();
      }
    else if(count===2){
      $('.help-intro').hide();
      $('.question-7').hide();
      $('.question-6').hide();
      $('.question-5').hide();
      $('.question-4').hide();
      $('.question-3').hide();
      $('.question-2').show();
      $('.Finish-screen').hide();
      $('.question-1').hide();
      if($('input:radio[name=answer1]:checked').val() == "Obama"){
          //$('#select-table > .roomNumber').attr('enabled',false);
          $('#answer1').addClass('btn-success');
          userscore=userscore+1;
        }
      else {
          $('#answer1').addClass('btn-danger');
        }
    }
    else if (count===3)
    {
      $('.help-intro').hide();
      $('.question-7').hide();
      $('.question-6').hide();
      $('.question-5').hide();
      $('.question-4').hide();
      $('.question-3').show();
      $('.question-2').hide();
      $('.Finish-screen').hide();
      $('.question-1').hide();
      if($('input:radio[name=answer2]:checked').val() == "Manmohan"){
          //$('#select-table > .roomNumber').attr('enabled',false);
          $('#answer2').addClass('btn-success');
          userscore=userscore+1;
        }
      else {
          $('#answer2').addClass('btn-danger');
        }
    }
    else if(count===4){
      $('.help-intro').hide();
      $('.question-7').hide();
      $('.question-6').hide();
      $('.question-5').hide();
      $('.question-4').show();
      $('.question-3').hide();
      $('.question-2').hide();
      $('.Finish-screen').hide();
      $('.question-1').hide();
      if($('input:radio[name=answer3]:checked').val() == "Russel Crowe"){
          //$('#select-table > .roomNumber').attr('enabled',false);
          $('#answer3').addClass('btn-success');
          userscore=userscore+1;
        }
      else {
          $('#answer3').addClass('btn-danger');
        }
    }

    else if(count===5){
      $('.help-intro').hide();
      $('.question-7').hide();
      $('.question-6').hide();
      $('.question-5').show();
      $('.question-4').hide();
      $('.question-3').hide();
      $('.question-2').hide();
      $('.Finish-screen').hide();
      $('.question-1').hide();
      if($('input:radio[name=answer4]:checked').val() == "Russia"){
          //$('#select-table > .roomNumber').attr('enabled',false);
          $('#answer4').addClass('btn-success');
          userscore=userscore+1;
        }
      else {
          $('#answer4').addClass('btn-danger');
        }

    }
    else if (count===6){
      $('.help-intro').hide();
      $('.question-7').hide();
      $('.question-6').show();
      $('.question-5').hide();
      $('.question-4').hide();
      $('.question-3').hide();
      $('.question-2').hide();
      $('.Finish-screen').hide();
      $('.question-1').hide();
      if($('input:radio[name=answer5]:checked').val() == "Australia"){
          //$('#select-table > .roomNumber').attr('enabled',false);
          $('#answer5').addClass('btn-success');
          userscore=userscore+1;
        }
      else {
          $('#answer5').addClass('btn-danger');
        }
    }
    else if (count===7){
      $('.help-intro').hide();
      $('.question-7').show();
      $('.question-6').hide();
      $('.question-5').hide();
      $('.question-4').hide();
      $('.question-3').hide();
      $('.question-2').hide();
      $('.question-1').hide();
      $('.Finish-screen').hide();
      if($('input:radio[name=answer6]:checked').val() == "Natural Gysers"){
          //$('#select-table > .roomNumber').attr('enabled',false);
          $('#answer6').addClass('btn-success');
          userscore=userscore+1;
        }
      else {
          $('#answer6').addClass('btn-danger');
        }
    }
    else if (count===8)
    {
      $('.help-intro').hide();
      $('.question-7').hide();
      $('.question-6').hide();
      $('.question-5').hide();
      $('.question-4').hide();
      $('.question-3').hide();
      $('.question-2').hide();
      $('.question-1').hide();
      $('.Finish-screen').show();
      $('.active').text('Finish');
      if($('input:radio[name=answer7]:checked').val() == "Russel Crowe"){
          //$('#select-table > .roomNumber').attr('enabled',false);
          $('#answer7').addClass('btn-success');
          userscore=userscore+1;

        }
      else {
          $('#answer7').addClass('btn-danger');
          $('#finalMessage').text("Congratulations!!! your have earned  "+ userscore*2 +" out of 14 points");

        }
    }
    else if(count>8){
        newGame();
      }
    else {

      console.log("Error");
      }

    console.log(count);

  });

$(".Newgame").click(function()
  {
    newGame();
  });








});
