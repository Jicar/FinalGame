menuGame = {
	create:function(){
 	button4 = game.add.button(game.width/2-75,game.height/2-100,"button4",this.play)
 	button = game.add.button(game.width/2-70,game.height/2+50,"about",this.about)

 	menuText  = game.add.text(game.width/2-60,game.height/3-70,"Menu",{"fill":"black"});
 	menuText.scale.x = 2;
 	menuText.scale.y = 2;
 	console.log(menuGame);
	},
	update:function(){
		if(keyboard.up.isDown){

			game.state.start('play');
		}

	},
	about:function(){
		game.state.start('lose');
	},
	play:function(){
		game.state.start('play');
	}
}