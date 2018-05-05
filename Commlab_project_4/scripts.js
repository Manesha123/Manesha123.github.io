





	console.log("We are ready");

	/*************************/
	//Initialize some variables
	/*************************/

	//Set the video link
	//Replace '&controls=0' to hide youtube player controls
	var theVideoLink = "https://www.youtube.com/watch?v=l1SBijQ0hDg&feature=youtu.be";
	
	//Set the page element
	var theElement = "#video";
	
	//Create the Popcorn video object
	var myVideo = Popcorn.smart(theElement, theVideoLink);
	
	
	/*******************/
	//Trigger some events
	/*******************/
	myVideo.pause();
	//Automatically play the video
	// myVideo.autoplay(true);

	//Use 'cue' to make an event happen at a specific time in the video
	//In this case, the number 2 is the second at which the cue should happen
	myVideo.cue(66,function(){
		myVideo.pause();
		document.getElementById("overlaytwo").style.display = "block";
		document.getElementById("jingle").play();
	});

	myVideo.cue(388,function(){
		myVideo.pause();
		document.getElementById("overlaythree").style.display = "block";
		document.getElementById("jingle").play();
	});





	//Use '.code' to make a events happen at a specific start and end time
	// myVideo.code({
	// 	start: 4,
	// 	end: 10,
	// 	onStart: function(){
	// 		$('#info').html('We hit 4 seconds...');
	// 	},
	// 	onEnd: function(){
	// 		$('#info').html('Having fun yet???');
	// 	}
	// });


	//"ON" EVENTS
	// myVideo.on("play", function(){
	// 	$('body').append("<div class='playDiv'>PLAY!PLAY!PLAY!</div>");
	// });
	// myVideo.on("pause", function(){
	// 	$('body').append("<div class='pauseDiv'>PAUSE!PAUSE!PAUSE!</div>");
	// });
	// myVideo.on("timeupdate", function(){
	// 	//console.log(myVideo.currentTime());
	// 	$('body').append("<div class='updatingDiv'>UPDATING!UPDATING!UPDATING</div>");
	// });

	/*******************************/
	//Set some button event listeners
	/*******************************/

	//Using jQuery to set 'onclick' event listeners
	


function hideoverlay(){

	var elems = document.getElementsByClassName('overlays');
	for (var i=0;i<elems.length;i+=1){
	  elems[i].style.display = 'none';	
	  myVideo.play();
	   document.getElementById("jingle").pause();
	}
}

function redirect(){

	var elems = document.getElementsByClassName('overlays');
	
	for (var i=0;i<elems.length;i+=1){
	  elems[i].style.display = 'none';
	}
	document.getElementById("redirect").style.display = "block";
    var timeleft = 5;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if (timeleft ==0 && document.getElementById("redirect").style.display =="block") 
    	window.location.href = "https://www.youtube.com/watch?v=xO8Cz-9qKTI";
    if(timeleft <= 0)
        clearInterval(downloadTimer);

    },1000);
    
}

function skipseconds(number){
	console.log(number);
	document.getElementById("overlaythree").style.display = "none";
	myVideo.currentTime(number);
	myVideo.play();
	if (number == 389)
		myVideo.cue(399,function(){
		myVideo.currentTime(407);
		myVideo.play();
		document.getElementById("jingle").pause();
	});
}


	