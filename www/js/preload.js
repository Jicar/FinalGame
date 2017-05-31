preloadGame = {
	preload : function (){
	    game.load.image('car1', 'img/car2.png');
	    game.load.spritesheet('s', 'img/s.png',100,100);
	    game.load.image('enemy', 'img/car6.png');
	    game.load.image('gas', 'img/gas.png');
	    game.load.image('button1', 'img/button1.png');
	    game.load.image('button', 'img/playbuts.png');
	    game.load.image('button4', 'img/game.png');
	    game.load.image('button5', 'img/mee.png');
	    game.load.image('about', 'img/about.png');
	    game.load.image('menu', 'img/menu.png');
	    game.load.image('aboutt', 'img/about.jpg');
	    game.load.image('restart', 'img/refresh.png');
	    game.load.image("pause","img/brick1.png");
	    game.load.image('button2', 'img/button2.png');
	    game.load.image('title','img/bangcar.png',800,600);
	    game.load.image('motor', 'img/motor.png');
	    game.load.image('kot', 'img/kot.png');
	    game.load.image('kalaban1', 'img/kalaban1.png');
	    game.load.image('sky', 'img/roadto3.png',800, 600);
	    game.load.image("p","img/p.png");
	    game.load.image("patong","img/patong.png");
	    game.load.image("pp","img/pp.png");
	    game.load.image("pep","img/pep.png");
	    game.load.image("paw","img/paw.png");
	    game.load.image("eww","img/eww.png");
	    game.load.image("finish","img/finish.png");
	    game.load.image('gameover', 'img/gameover.png'); 
	    game.load.image("next", "img/next.png");  
	    game.load.audio("bg_music"," audio/sound1.mp3");

	},
	create: function(){
		game.state.start('menu');
	}
}