// George Brown
// Comp 20, Assignment #2: Duckhunt Part I
// 25 Febraury 2014
// game.js

function draw() {
	var canvas = document.getElementById("game");

	// Check to make sure browser supports <canvas> 
	if (canvas.getContext) {
		ctx = canvas.getContext("2d");
		var img = new Image();
		img.onload = function() {
			ctx.fillStyle = "87CEEB";
			ctx.fillRect(0, 0, 800, 600);
			
			ctx.fillStyle = "C96A1B";
			ctx.fillRect(0, 563, 800, 37);
			
			//dirt, grass, 2 bushes
			ctx.drawImage(img, 0, 717, 900, 183, 0, 380, 800, 183);

			//tree
			ctx.drawImage(img, 0, 271, 81, 129, 200, 128, 200, 350);



		}
		img.src = "assets/duckhunt.png";

	}
	else {
		alert("Your browser doesn't support Duckhunt!")
	}
}

