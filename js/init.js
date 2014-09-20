(function () {
	"use strict";
	init:{
		var canvas = document.getElementById("lienzo");
		var ctx = canvas.getContext("2d");
		var fondo = "";
	};
	var EntornoGlobal = function () {
		this.ejecutandoValores = function () {
			loadMedia();
		};
		function loadMedia () {
			fondo = new Image();
			fondo.src = "img/fondos/050303.jpg";
			fondo.onload = function () {
				var intervalo = setInterval(frameLoop, 1000/55);
			}
		}
		function drawBackground () {
			ctx.drawImage(fondo, 0, 0);
			new NaveEspacial(ctx).dibujarNave();
		}
		function frameLoop () {
			drawBackground();
		}
	};
	new EntornoGlobal().ejecutandoValores();
})();