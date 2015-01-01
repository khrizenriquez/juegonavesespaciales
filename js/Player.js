var Player = function () {
	var limitX, limitY;
};
Player.prototype.update = function () {
	limitX = document.getElementById('lienzo').clientWidth;
	limitY = document.getElementById('lienzo').clientHeight;

	if (Spaceship.left) Spaceship.dx = -Spaceship.speed;
	if (Spaceship.right) Spaceship.dx = Spaceship.speed;
	if (Spaceship.up) Spaceship.dy = -Spaceship.speed;
	if (Spaceship.down) Spaceship.dy = Spaceship.speed;

	Spaceship.x += Spaceship.dx;
	Spaceship.y += Spaceship.dy;

	//	Límite del contenedor
	if (Spaceship.x < Spaceship.r) Spaceship.x = Spaceship.r;
	if (Spaceship.y < Spaceship.r) Spaceship.y = Spaceship.r;
	if (Spaceship.x > limitX - Spaceship.r) Spaceship.x = limitX - Spaceship.r;
	if (Spaceship.y > limitY - Spaceship.r) Spaceship.y = limitY - Spaceship.r;

	Spaceship.dx = 0;
	Spaceship.dy = 0;

	if (Spaceship.firing) {
		//var elapsed = (System.nanoTime() - firingTimer) / 1000000;
		if (elapsed > Spaceship.firingDelay) {
			//Spaceship.firingTimer = System.nanoTime();
			/*
			if (Spaceship.powerLevel < 2)
			SpacePanel.bullets.add(new Bullet(270, (x + 10), y));
			else
			if (powerLevel < 3) {
			SpacePanel.bullets.add(new Bullet(270, (x + 10) + 5, y));
			SpacePanel.bullets.add(new Bullet(270, (x + 10) - 5, y));
			} else
			if (powerLevel < 4) {
			SpacePanel.bullets.add(new Bullet(265, (x + 10) - 5, y));
			SpacePanel.bullets.add(new Bullet(270, (x + 10), y));
			SpacePanel.bullets.add(new Bullet(277, (x + 10) + 5, y));
			else
			SpacePanel.bullets.add(new Bullet(264, (x + 10) - 3, y));
			SpacePanel.bullets.add(new Bullet(267, (x + 10) - 3, y));
			SpacePanel.bullets.add(new Bullet(270, (x + 10), y));
			SpacePanel.bullets.add(new Bullet(273, (x + 10) + 3, y));
			SpacePanel.bullets.add(new Bullet(276, (x + 10) + 3, y));
			*/
		}
	}

	// Time, i am invencible (2 s)
	/*if (recovering) {
		long elapsed = (System.nanoTime() - recoveryTimer) / 1000000;
		if (elapsed > 2000) {
			recovering = false;
			recoveryTimer = 0;
		}
	}*/
};

Player.prototype.draw = function (canvasCtx) {
	var actualImg = Spaceship.imagePlayer.image;

	actualImg = (Spaceship.recovering) ? Spaceship.imagePlayer.imageTrans : Spaceship.imagePlayer.image;

	console.log(actualImg);
	canvasCtx.drawImage(actualImg, Spaceship.x - Spaceship.r, Spaceship.y - Spaceship.r);
};

//		Setters
Player.prototype.setLife = function (life) {
	Spaceship.lives = life;
};
Player.prototype.setLeft = function (direction) {
	Spaceship.left = direction;
};
Player.prototype.setRigth = function (direction) {
	Spaceship.right = direction;
};
Player.prototype.setUp = function (direction) {
	Spaceship.up = direction;
};
Player.prototype.setDown = function (direction) {
	Spaceship.down = direction;
};
Player.prototype.setFiring = function (fire) {
	Spaceship.firing = fire;
};
Player.prototype.setScore = function (sc) {
	Spaceship.score += sc;
};

//		Getters
Player.prototype.isDead = function () {
	return Spaceship.lives <= 0;
};
Player.prototype.isRecovering = function () {
	return Spaceship.recovering;
};
Player.prototype.getLives = function () {
	return Spaceship.lives;
};
Player.prototype.getPower = function () {
	return Spaceship.power;
};
Player.prototype.getPowerLevel = function () {
	return Spaceship.powerLevel;
};
Player.prototype.getR = function () {
	return Spaceship.r;
};
Player.prototype.getRequiredPower = function () {
	return Spaceship.requiredPower[powerLevel];
};
Player.prototype.getScore = function () {
	return Spaceship.score;
};
Player.prototype.getX = function () {
	return Spaceship.x;
};
Player.prototype.getY = function () {
	return Spaceship.y;
};

//		General methods
Player.prototype.loseLife = function () {
	Spaceship.lives--;
	Spaceship.recovering = true;
	//recoveryTimer = System.nanoTime();
};
Player.prototype.increasePower = function (pwr) {
	if (Spaceship.power < 6) {
		Spaceship.power += pwr;
		if (Spaceship.power >= Spaceship.requiredPower[Spaceship.powerLevel]) {
			Spaceship.power -= Spaceship.requiredPower[Spaceship.powerLevel];
			Spaceship.powerLevel++;
		}
	}
};
