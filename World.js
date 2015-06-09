var world = (
	function (){
		const ACCELERATION = 10;
		const MAX_SPEED = 400;
		const POINTS_STYLE = {
			font: "28px Arial",
			fill: "#F0EC1A",
			stroke: "black",
			strokeThickness: 3
		};
		

		function a(){this.index = new Array(); this.upAheadQueue = new Queue(); this.add = function(elem){this.index.push(elem); this.upAheadQueue.enqueue(elem)}}
		var background = new a();
		background.init = function(length){
			var n = 9 || length;
			for(var x = 0; x < n; x++) this.add(game.add.sprite(x*622,0,'fundo'));
			delete n;
		}
		var ground = new a();
		ground.init = function(length){
			var n = 9 || length;
			for(var x = 0; x < n; x++){
				this.add(game.add.sprite(x*205, game.height - 25, 'rua'));
				game.physics.enable(this.index[this.index.length-1], Phaser.Physics.ARCADE);
				this.index[this.index.length-1].body.allowGravity = false;
				this.index[this.index.length-1].body.immovable = true;
			}
			delete n;
		}

		return {get: function(name){ return eval(name);}}
	}
)();