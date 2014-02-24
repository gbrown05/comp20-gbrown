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

			//Specify colors for dirt and sky
			var sky = "87CEEB";
			var dirt = "C96A1B";
			
			//Draw the sky first (even though it's specified in CSS)
			//ctx.fillStyle = sky;
			//ctx.fillRect(0, 0, 800, 600);
			
			//Add extra dirt at bottom of canvas
			ctx.fillStyle = dirt;
			ctx.fillRect(0, 563, 800, 37);
			
			//Now, the stuff from the sprite sheet
			//Draw the dirt, grass and two bushes
			ctx.drawImage(img, 0, 717, 900, 183, 0, 380, 800, 183);

			//Draw the tree
			ctx.drawImage(img, 0, 271, 81, 129, 200, 128, 200, 350);

			//Draw the dog sniffing the road
			ctx.drawImage(img, 63, 0, 57, 46, 380, 430, 160, 140);

			// 5 different birds are placed at different points in the sky
			// Coordinates and birds are not random (but could easily be)
			ctx.drawImage(img, 41, 156, 34, 34, 200, 30, 70, 70);
			ctx.drawImage(img, 339, 156, 34, 34, 0, 300, 70, 70);
			ctx.drawImage(img, 212, 199, 34, 34, 300, 100, 70, 70);
			ctx.drawImage(img, 81, 120, 34, 34, 700, 270, 70, 70);
			ctx.drawImage(img, 263, 156, 34, 34, 510, 140, 70, 70);
		}

		img.src = "assets/duckhunt.png";

	}

	//Otherwise, the browser doesn't support canvas
	else {
		alert("Your browser doesn't support Duckhunt!")
	}
}

