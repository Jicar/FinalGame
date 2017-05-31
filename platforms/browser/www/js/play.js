playGame={
	create:function(){
  p = game.add.sprite(0,580,"p");
        p.scale.x = 2;
        game.physics.arcade.enable(p);
        p.body.immovable = true;

        patong = game.add.sprite(325,480,"patong");
        patong.scale.x = 4;
        game.physics.arcade.enable(patong);
        patong.body.immovable = true;

        pp = game.add.sprite(325,380,"pp");
        pp.scale.x = 4;
        game.physics.arcade.enable(pp);
        pp.body.immovable = true;

        pep = game.add.sprite(325,290,"pep");
        pep.scale.x = 4;
        game.physics.arcade.enable(pep);
        pep.body.immovable = true;

        paw = game.add.sprite(325,200,"paw");
        paw.scale.x = 3.5;
        game.physics.arcade.enable(paw);
        paw.body.immovable = true;

        eww = game.add.sprite(335,120,"eww");
        eww.scale.x = 3.5;
        game.physics.arcade.enable(eww);
        eww.body.immovable = true;

        sky = game.add.sprite(0,0,'sky');
        gas = game.add.sprite(350,10,'finish');
        car1 =  game.add.sprite(355,500,'car1');
        pause_label = game.add.image(900, 320, 'pause');

        game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.scale.forcelLandscape = true;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.setScreenSize = true;
   
        game.physics.arcade.enable(car1);
        game.physics.arcade.enable(gas);

        button = game.add.button(160,500,'button1',this.pushRight);
        button = game.add.button(40,500,'button2',this.pushLeft);
        button = game.add.button(670,495,'s',this.pushJump);

      
        bg_music = game.add.audio("bg_music");
        bg_music.play();


        car1.body.collideWorldBounds = true;
        sky.animations.add('jump',[0,1,2],2,true);

          pause_label.inputEnabled = true;
                pause_label.events.onInputUp.add(function () {
                    game.paused = true;
                });

            game.input.onDown.add(unpause, self);
            function unpause(event){
                if(game.paused){ 
                    pause_label.destroy();
                    startText.visible=false;
                        game.paused = false;
                    }               
            };            

        
        this.createEnemys(4000);
        enemy = game.add.group();
        enemy.enableBody = true;
     
        this.createKalaban1s(8000);
        kalaban1 = game.add.group();
        kalaban1.enableBody = true;

        this.createMotors(5000);
        motor = game.add.group();
        motor.enableBody = true;
       
        this.createKots(3000);
        kot = game.add.group();
        kot.enableBody = true;

        keyboard = game.input.keyboard.createCursorKeys();

        car1.body.collideWorldBounds = true;
        car1.body.gravity.y = 10000;
        car1.body.bounce.y = .3
        car1.scale.y = 0.5;
        gas.scale.y = 0.75;


        life = game.add.text(50,10,'Life: 3',{fill:'red'});
        score = game.add.text(650,10,'Score: 0',{fill:'red'});
        score.fixedToCamera = true;
        bestScore = game.add.text(650,50,'Best: '+this.retrieveBest(),{fill:'red'});
        bestScore.fixedToCamera = true;
        titlepage = game.add.sprite(0,0, "title");
        startButton = game.add.button(game.world.centerY -1, 340, 'button', this.actionOnClick, this, 2, 1, 0);

        
 
	},
	update:function(){
      game.physics.arcade.collide(car1,p);
        game.physics.arcade.collide(car1,patong);
        game.physics.arcade.collide(car1,pp);
        game.physics.arcade.collide(car1,pep);
        game.physics.arcade.collide(car1,paw);

        game.physics.arcade.collide(car1,gas,this.killGas);
        game.physics.arcade.overlap(car1,enemy,this.killKalaban1);
        game.physics.arcade.overlap(car1,kalaban1,this.killKalaban1);
        game.physics.arcade.overlap(car1,kot,this.killKalaban1);
        game.physics.arcade.overlap(car1,motor,this.killKalaban1);


    if(keyboard.right.isDown){
        car1.body.velocity.x=210;
        car1.animations.stop();
        game.camera.y +=1;
}
    else if(keyboard.left.isDown){;
        car1.body.velocity.x=-210;
        game.camera.y +=1;
}

    else if(keyboard.up.isDown){
        car1.body.velocity.y=-210;
        game.camera.y +=1;
}
    else if(keyboard.down.isDown){
        car1.body.velocity.y=210;
        game.camera.y +=1;
}
    else{
        sky.animations.play('jump');
        car1.body.velocity.x=0;
        car1.body.velocity.y=0;
        game.camera.y +=1;
    }
},
actionOnClick:function(){
    titlepage.visible =! startButton.visible;
    startButton.destroy();
    startText = game.add.text(260,300,'Press Anywhere To Start',{ fontSize: '25px', fill: 'red' });
    game._paused=true;
    button.frame = 1;

        }, 
        
         createKalaban1s:function(time){
            setInterval(function(){
                 kalaban1s = kalaban1.create(-100,320,"kalaban1");
                 kalaban1s.body.velocity.x=300;
            },time)
        }, 
  
         createMotors:function(time){
            setInterval(function(){
                 motors = motor.create(800,220,"motor");
                 motors.body.velocity.x=-400;
            },time)
        },
         createEnemys:function(time){
            setInterval(function(){
                 enemys = enemy.create(800,420,"enemy");
                 enemys.body.velocity.x=-300;

            },time)
        },
         createKots:function(time){
            setInterval(function(){
                 kots = kot.create(-100,140,"kot");
                 kots.body.velocity.x=400;

            },time)
        },

    
         killGas:function(car1,gas){
            if(gas.kill()){
                a = a + 1;
                score.text = "Score: "+a;

        nextButton = game.add.button(320,260,"next",playGame.nextGame);
        game._paused=true;
        if(a==2){
        playGame.createKalaban1s(4700);
        }
        else if(a==5){
        playGame.createMotors(2200);
        }
        else if(a==9){
        playGame.createEnemys(2200);
        }
        else if(a==14){
        playGame.createKots(1400);
        }
    }
        
        },

         killKalaban1:function(car1,kalaban1s,motors,kots,kalabans, enemys){
                if(kalaban1s.kill()){
                b = b - 1;
                life.text = "Life: "+b;
                car1.reset(350,500);
            }
            if(b==0){
            
        restartButton = game.add.button(350,150,"restart",playGame.restartB);
                car1.kill();
            game.add.image(320,230,'gameover');
                    if(playGame.retrieveBest() <= a){
                   localStorage.setItem("gameStorage",a);
        }
               }

           },
        restartB:function (){
            window.location.href=window.location.href;

               },
        nextGame:function (){
            nextButton.destroy();
                gas.reset(350,10);
                car1.reset(350,500);

               },
       
         pushRight:function(){
            car1.animations.play('walk-right');
            car1.body.velocity.x=800;
            // button_music.play();
        },
         pushLeft:function(){
            car1.animations.play('walk-left');
            car1.body.velocity.x=-800;
            // button_music.play();


        },
         pushJump:function(){
            car1.animations.play('jump-up');
            car1.body.velocity.y=-7000;
            // button_music.play();


        },
         retrieveBest:function(){
            return ((localStorage.getItem("gameStorage") != null) || (localStorage.getItem("gameStorage") != ""))?
            localStorage.getItem("gameStorage"):0;
        }
    }