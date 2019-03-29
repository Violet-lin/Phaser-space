let gameScene = new Phaser.Scene('Game');

gameScene.init = function() {
  this.playerSpeed = 1.5;
  this.enemyMaxY = 280;
  this.enemyMinY = 80;
}
var cursors;
gameScene.preload = function() {

  // game.load.baseURL = 'http://examples.phaser.io/assets/';
  // game.load.crossOrigin = 'anonymous';
  this.load.image('background', 'assets/background.jpg');
  this.load.image('star_field', 'assets/star.png');
  this.load.image('player', 'assets/spaceship.png');
  this.load.image('particle', 'assets/yellow.png');


}
gameScene.create = function() {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let topBackgroundXOrigin = windowWidth / 2;
  let topBackgroundYOrigin = (windowHeight / 5) * 1.5;
  let topBackgroundHeight = (windowHeight / 5) * 3;
  let imageBaseWidth = 1920;
  let imageBaseHeight = 1080;
  let heightRatio = topBackgroundHeight / imageBaseHeight;
  let offsetX = -45;
  let offsetY = 0;


  this.add.sprite(0, 0, 'background');
  this.background1 = this.add.tileSprite(topBackgroundXOrigin, topBackgroundYOrigin, imageBaseWidth, imageBaseHeight, 'background');
  this.background1.setScale(1.2);

  cursors = this.input.keyboard.createCursorKeys();

  var particles = this.add.particles('particle');
  var emitter = particles.createEmitter({
    speed: 10,
    scale: {
      start: 0.5,
      end: 0
    },
    accelerationX: -400,
    blendMode: 'ADD'
  });


  this.player = this.physics.add.sprite(200, this.sys.game.config.height / 2, 'player');
  this.player.setScale(0.8);

  // emitter.startFollow(this.player);
  emitter.startFollow(this.player, offsetX, offsetY, true);
  this.star_field1 = this.add.tileSprite(topBackgroundXOrigin, topBackgroundYOrigin, imageBaseWidth, imageBaseHeight, 'star_field');
  this.star_field1.setScale(1.2);
  this.star_field2 = this.add.tileSprite(topBackgroundXOrigin, topBackgroundYOrigin, imageBaseWidth, imageBaseHeight, 'star_field');
  this.star_field2.setScale(1.5);
};

let config = {
  type: Phaser.AUTO, //webgl/canvas
  width: 760,
  height: 380,
  transparent: true,
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: 300 },
      debug: false
    }
  },

  scene: gameScene
};

let game = new Phaser.Game(config);


gameScene.update = function() {
  this.star_field2.x -= 0.5;
  this.star_field1.x -= 0.3;
  this.background1.x -= 0.25;
  if (cursors.left.isDown) {
    this.player.setVelocityX(-160);
  } else if (cursors.right.isDown) {
    this.player.setVelocityX(160);
  } else {
    this.player.setVelocityX(0);
  }
  if (cursors.up.isDown) {
    this.player.setVelocityY(-160);
  } else if (cursors.down.isDown) {
    this.player.setVelocityY(160);
  } else {
    this.player.setVelocityY(0);
  }
  // game.off('hidden', game.onHidden, game);
  // game.off('visible', game.onVisible, game);
};

gameScene.render = function() {

};
