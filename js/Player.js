var Player = function () {
	//		
	var requiredPower = [1, 2, 3, 4, 5, 6, 7, 8];
	//		
	var x, y, r, dx, dy, speed, lives, score, powerLevel, power;
	//		
	var firingTimer, firingDelay, recoveryTimer;
	//		
	var left, right, up, down, firing, recovering;
	//		
	var imageUp, image, imageUpTrans;
	var player = new Spaceship();
};
/*
public void update () {
if (left) dx = -speed;
if (right) dx = speed;
if (up) dy = -speed;
if (down) dy = speed;
x += dx;
y += dy;
// setting the frame limit
if (x < r) x = r;
if (y < r) y = r;
if (x > SpacePanel.width - r) x = SpacePanel.width - r;
if (y > SpacePanel.height - r) y = SpacePanel.height - r;
dx = 0;
dy = 0;
if (firing) {
long elapsed = (System.nanoTime() - firingTimer) / 1000000;
if (elapsed > firingDelay) {
firingTimer = System.nanoTime();
if (powerLevel < 2)
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
} else {
SpacePanel.bullets.add(new Bullet(264, (x + 10) - 3, y));
SpacePanel.bullets.add(new Bullet(267, (x + 10) - 3, y));
SpacePanel.bullets.add(new Bullet(270, (x + 10), y));
SpacePanel.bullets.add(new Bullet(273, (x + 10) + 3, y));
SpacePanel.bullets.add(new Bullet(276, (x + 10) + 3, y));
}
}
}
// Time, i am invencible (2 s)
if (recovering) {
long elapsed = (System.nanoTime() - recoveryTimer) / 1000000;
if (elapsed > 2000) {
recovering = false;
recoveryTimer = 0;
}
}
}
*/
Player.prototype.update = function () {};

/*
public void draw (Graphics2D g) {
if (recovering)
image = imageUpTrans;
else
image = imageUp;
g.drawImage(image, x - r, y - r, null);
}
*/
Player.prototype.draw = function (objGraphics) {};

//		Setters
Player.prototype.setLife = function (life) {
	lives = life;
};
Player.prototype.setLeft = function (direction) {
	left = direction;
};
Player.prototype.setRigth = function (direction) {
	right = direction;
};
Player.prototype.setUp = function (direction) {
	up = direction;
};
Player.prototype.setDown = function (direction) {
	down = direction;
};
Player.prototype.setFiring = function (fire) {
	firing = fire;
};
Player.prototype.setScore = function (sc) {
	score += sc;
};

//		Getters
Player.prototype.isDead = function () {
	return lives <= 0;
};
Player.prototype.isRecovering = function () {
	return recovering;
};
Player.prototype.getLives = function () {
	return lives;
};
Player.prototype.getPower = function () {
	return power;
};
Player.prototype.getPowerLevel = function () {
	return powerLevel;
};
Player.prototype.getR = function () {
	return r;
};
Player.prototype.getRequiredPower = function () {
	return requiredPower[powerLevel];
};
Player.prototype.getScore = function () {
	return score;
};
Player.prototype.getX = function () {
	return x;
};
Player.prototype.getY = function () {
	return y;
};

//		General methods
Player.prototype.loseLife = function () {
	lives--;
	recovering = true;
	//recoveryTimer = System.nanoTime();
};
Player.prototype.increasePower = function (pwr) {
	if (power < 6) {
		power += pwr;
		if (power >= requiredPower[powerLevel]) {
			power -= requiredPower[powerLevel];
			powerLevel++;
		}
	}
};
