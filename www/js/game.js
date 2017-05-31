var keyboard, sky, enemy, enemys, gas, kalaban1, kalaban1s, car1, patong, pp, p, pep, paw, eww, startText, buhay, buhays, kalaban, kalabans, motor, motors, kot, gameover, score, bestScore;
var w = 800, h = 600;
var titlepage;
var startButton;
var restartButton, nextButton;
var playing = false;
        var b=3,a = 0;
var bg_music;
var kots, buhays,motors, restartB, life;
var game = new Phaser.Game(w, h, Phaser.CANVAS, 'display_game');
var effect_music, title_music, button_music, bg_music;


	game.state.add('boot',bootGame);
	game.state.add('preload',preloadGame);
	game.state.add('menu',menuGame);
	game.state.add('play', playGame);
	game.state.add('win', winGame);
	game.state.add('lose',loseGame);
	game.state.add('game', game);
	// game.state.add('about',aboutGame);

	//	Now start the Boot state.
	game.state.start('boot');
