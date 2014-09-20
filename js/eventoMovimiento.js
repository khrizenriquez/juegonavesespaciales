(function () {
	var operacion;
	init:{
		operacion = 0;
		if (window.DeviceOrientationEvent) {
			window.addEventListener("orientationchange", readDeviceOrientation);
			window.addEventListener("deviceorientation", escuchadorOrientacion);
	  	} else {
	  		document.getElementsByClassName("mensaje")[0].textContent = ":(";
	  	}
	}
	readDeviceOrientation();

	function readDeviceOrientation() {
		//		para validarlo en ladscape lo puedo hacer con los valores 90 y -90
	    if (window.orientation === 90) {
	        // Landscape | - izquierda, + derecha
	        operacion = 90;
	    } else 
	    if (window.orientation === -90) {
	        // Landscape | - derecha, + izquierda
	        operacion = -90;
	    }
	}

	function escuchadorOrientacion () {
		var valor = document.getElementsByClassName("mensaje")[0];
		//		Los limites de la nave
		var limNaveI = 0;
		var limNaveD = 0;
		valor.textContent = ((25 + Math.round(event.beta)) * 5) + " op " + operacion;
	    if (operacion === 90) {
	    	nave.x = ((25 + Math.round(event.beta)) * 5);
	    	limNaveI = 25 - 25;
	    	limNaveD = 310 - 25;
	    }
	    else 
	    if (operacion === -90) {
	    	nave.x = -((-25 + Math.round(event.beta)) * 5);
	    	limNaveI = 25 - 25;
	    	limNaveD = 310 - 25;
	    }
	    else 
	    	nave.x = -((30 + Math.round(event.beta)) * 5);
	    if (nave.x < limNaveI) nave.x = limNaveI;
	    if (nave.x > limNaveD) nave.x = limNaveD;

	    //nave.x = (Math.round(event.beta) * 5);
	    //valor.textContent = "valores variables I:" + valorI + " D:" + valorD + " | " + 
	    //"Valores alpha:" + Math.round(event.alpha) + ' beta: ' + Math.round(event.beta) + ' gamma: ' + Math.round(event.gamma);
	}
})();