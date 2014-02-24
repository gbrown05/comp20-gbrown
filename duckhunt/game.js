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
		ctx.fillStyle = "87CEEB";
		ctx.fillRect(0, 0, 800, 600);
		img.onload = function() {
			//sky = "#87CEEB";
			//ctx.fillRect(0, 0, 800, 600);


			ctx.drawImage(img, 0, 717, 900, 183, 0, 417, 800, 183);

			//dirt = "#C96A1B";
			//ctx.fillStyle = dirt;
			//ctx.drawImage(img,0,12500);

			//ctx.fillStyle = sky;

		}
		img.src = "assets/duckhunt.png";



	}
	else {
		alert("Your browser doesn't support Duckhunt!")
	}
}




/*
0, 12500
0, 11755
12,500, 12,500
12,500, 11755

DOG:  870,620
1653,620
870,0
1653,0
*/






