var Spaceship = {
	//		Movimientos de la nave
	left: false,
	righ: false,
	up: false,
	down: false,
	//		Opciones de disparos
	firing: false,
	firingTimer: 0,
	firingDelay: 200,
	power: 0,
	//		Puntaje y vidas
	lives: 3,
	score: 0,
	//		Posiciones de la nave y su radio
	x: document.getElementById('lienzo').clientWidth / 2,
	y: document.getElementById('lienzo').clientHeight - 100,
	r: 25,
	dx: 0,
	dy: 0,
	speed: 5,
	//		Opciones de recuperación
	recovering: false,
	recoveryTimer: 0,
	isDead: 0,
};

/*
if (imageUp == null) imageUp = new Generals().loadImg("/img/hero/hero-up.png");
if (imageUpTrans == null) imageUpTrans = new Generals().loadImg("/img/hero/hero-up-transp.png");
image = imageUp;
}
*/