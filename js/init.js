(function () {
	"use strict";
	init: {
		var canvas = document.getElementById("lienzo");
		var ctx = canvas.getContext("2d");
		var fondo;
		var player = new Player();
	};
	document.addEventListener('DOMContentLoaded', function (e) {
		function gameUpdate () {
			player.update();
		}
		function gameRender () {
			//		Dibujando nuestro fondo
			loadMedia();
			//		Dibujando nuestro heroe
			player.draw(ctx);
		}
		function gameDraw () {}
		function loadMedia () {
			fondo = new Image();
			fondo.src = GeneralValues.stages.background1;
			fondo.onload = function () {
				frameLoop();
			}
		}
		function drawBackground () {
			ctx.drawImage(fondo, 0, 0);
			player.update();
		}
		function frameLoop () {
			drawBackground();
		}
		function gameRun () {
			setInterval(function () {
				gameUpdate();
				gameRender();
			}, 1000/55);
		}
		//		Valores para iniciar
		//gameRun();
	});
})();