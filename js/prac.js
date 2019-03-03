function rollDice(){

	var result= Math.ceil(Math.random()*6)
	return Math.round(result)
}
var newScore=[];
var constArray=[];
var imageArray=["img/one.png","img/two.png","img/three.png","img/four.png","img/five.png","img/six.png"]
$(document).ready(function(){
	$("#play").click(function(){
		$("#players").fadeIn(2000);
		$("#players").show()
		$("#demo").hide();
	})
	$("#players").submit(function(event){
		event.preventDefault();
		var playerOne=$("#play1").val();
		var playerTwo=$("#play2").val();
		$("#players").hide();
		$("#hide1").hide();
		$("#demo").hide();
		$("#show2").slideDown(2000);
		$("#show1").slideDown(2000);
		$("#show2").show();
		$("#show1").show();
		$("#one").text(playerOne);
		$("#two").text(playerTwo);
		$("#winOne").hide();
		$("#winTwo").hide();

	})



  $("#rollOne").click(function(){
  var roll=rollDice();
	var diceMe=roll;
	if(diceMe==1){
		var img=0
		document.getElementById('img').src=imageArray[img];

	}
	else if (diceMe==2) {
		var img=1;
		document.getElementById('img').src=imageArray[img];

	}
	else if (diceMe==3) {
		var img=2;
		document.getElementById('img').src=imageArray[img];

	}
	else if (diceMe==4) {
		var img=3;
		document.getElementById('img').src=imageArray[img];

	}
	else if (diceMe==5) {
		var img=4;
		document.getElementById('img').src=imageArray[img];

	}
	else {
		var img=5;
		document.getElementById('img').src=imageArray[img];
	}
  $("#playone").text(roll)
  var total=0
  if (roll!=1) {
    newScore.push(roll);
    constArray.push(roll);


    for(i=0;i<newScore.length;i++){
      total=total+newScore[i]
    }
    $("#perRound").text(total)
    var newtotal=0;
    for(z=0;z<constArray.length;z++){
      newtotal=newtotal+constArray[z]
    }
    console.log(total)
    console.log(newScore)


  }

  else {
        alert("you rolled one and your roll has ended ")
        $("#show").text(0)
        /////////
        var em=[]
        em.push(total)

        console.log(em)
        newScore.length=0;





  }
  $("#holdOne").click(function(){
    $("#perRound").text(0);
    newScore.length=0;
    $("#save").text(newtotal)
  })

  /*var green=[];
  green.push(total);
  alert(green)*/



  });
  });
