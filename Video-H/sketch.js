

function hideoverlay(){
	document.getElementById("overlay").style.display = "none";
	$("#video")[0].src += "&autoplay=1";
}


var popcorn = Popcorn( "#video" );
popcorn.cue(1, function() {
	console.log("www");
	document.getElementById("overlay").style.display = "block";

  
});
