$('document').ready(
function()
{

  function newGame()
  {
    count=0;
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

  }

  /*logic for the Page starts*/
  newGame();


  $('.active').click(function()
  {
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
