var Player = function() {
	this.player = null;
};

Player.prototype = {

	preload: function() {
		game.load.image('player', 'assets/player.png');
	},

	create: function() {
		this.player = game.add.sprite(500, 500, 'player');
		this.player.anchor.setTo(.5,.5);
	},

	update: function() {

	},

	render: function(){
	}
};