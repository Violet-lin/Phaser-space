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
    this.load.image('player', 'assets/spaceship.png');
    this.load.image('particle', 'assets/yellow.png');


}
gameScene.create = function() {
    this.add.sprite(0, 0, 'background');

    cursors = this.input.keyboard.createCursorKeys();
    var particles = this.add.particles('particle');

    var emitter = particles.createEmitter({
        speed: 10,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });
    this.player = this.physics.add.sprite(200, this.sys.game.config.height / 2,'player');
    this.player.setScale(0.8);
        emitter.startFollow(this.player);
};

let config = {
  type: Phaser.AUTO,    //webgl/canvas
  width: 760,
  height: 320,
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
  if (cursors.left.isDown)
  {
      this.player.setVelocityX(-160);
  }
  else if (cursors.right.isDown)
  {
      this.player.setVelocityX(160);
  }
  else
  {
      this.player.setVelocityX(0);
  }
  if (cursors.up.isDown)
  {
      this.player.setVelocityY(-160);
  }
  else if (cursors.down.isDown)
  {
      this.player.setVelocityY(160);
  }
  else
  {
      this.player.setVelocityY(0);
  }

};

gameScene.render = function() {

};
