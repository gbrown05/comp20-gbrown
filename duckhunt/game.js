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
			sky = "87CEEB";
			dirt = "C96A1B";
			ctx.fillStyle = sky;
			ctx.fillRect(0, 0, 800, 600);
			
			//extra dirt at bottom of canvas

			ctx.fillStyle = dirt;
			ctx.fillRect(0, 563, 800, 37);
			
			//dirt, grass, 2 bushes
			ctx.drawImage(img, 0, 717, 900, 183, 0, 380, 800, 183);

			//tree
			ctx.drawImage(img, 0, 271, 81, 129, 200, 128, 200, 350);

			//dog
			ctx.drawImage(img, 63, 0, 57, 46, 380, 430, 160, 140);

			//birds are placed at random points in the sky
			x = Math.floor(Math.random() * 800);
			y = Math.floor(Math.random() * 400);
			ctx.drawImage(img, 41, 156, 34, 34, x, y, 70, 70);

		}
		img.src = "assets/duckhunt.png";

	}
	else {
		alert("Your browser doesn't support Duckhunt!")
	}
}

