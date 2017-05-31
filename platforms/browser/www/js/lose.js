loseGame={
	create:function(){

        game.add.image(0,0,'aboutt');
        button = game.add.button(350,520,'menu',this.menu);
	},
    update:function(){

    },
    menu:function(){

		game.state.start('menu');
    }
}