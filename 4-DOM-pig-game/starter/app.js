/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
    var scores, roundScore, activePLayer, gamePlaying;
    
      init();

      var lastDice;
    
      document.querySelector('.btn-roll').addEventListener('click', function() {
        if(gamePlaying) {
          
          //1.Radnom number something 
          dice = Math.floor(Math.random() * 6) + 1;
          
          //display de Result
          var diceDOM = document.querySelector('.dice');
          diceDOM.style.display = 'block';
          diceDOM.src = 'dice-' + dice + '.png';
          
          
          //3. Updatethe round score if the rolled number was not 1 
          if (dice === 6 %% lastDice ===6 ){
            // player looses scores
            scores[activePLayer] = 0;
            document.querySelector('#score-' + activePLayer).textContent = 0;
            nextPLayer();
          } else if (dice !== 1){
            // Add Score 
            roundScore += dice;
            document.querySelector('#current-' + activePLayer).textContent = roundScore;

          } else {
            //next player
            nextPLayer();
          }
          

        }
    });

        document .querySelector('.btn-hold').addEventListener('click', function() {
            if (gamePlaying){
              
                //Add current score to GLOBAL scores
                 scores[activePLayer] += roundScore;
                 
                 //Update UI
                 document.querySelector('#score-' + activePLayer).textContent = scores[activePLayer];
                 
                // check if player won the game 
                if (scores[activePLayer] >= 100) {
                  document.querySelector('#name-' + activePLayer).textContent= 'Winner!'; 
                  document.querySelector('.dice').style.display = 'none';
                  document.querySelector('.player-' + activePLayer + '-panel').classList.add('winner');
                  document.querySelector('.player-' + activePLayer + '-panel').classList.remove('active');
                  gamePlaying = false;
                } else {
                  //next player
                 nextPLayer();
                }
                
                lastDice = dice;
            }
        });
 
 
        function nextPLayer() {
          // next player
          activePLayer === 0 ? activePLayer = 1 : activePLayer = 0;
          roundScore = 0;
          
          document.getElementById('current-0').textContent = '0';
          document.getElementById('current-1').textContent = '0';
          
          document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');

          //document.querySelector('.player-0-panel').classList.remove('active');
          //document.querySelector('.player-1-panel').classList.add('active')
          
          document.querySelector('.dice').style.display = 'none';
        }
          document.querySelector('.btn-new').addEventListener('click', init);
      
        function init() {
          scores = [0,0];
          activePLayer = 0;
          roundScore = 0;
          gamePlaying = true;
          
          document.querySelector('.dice').style.display = 'none';
          
          document.getElementById('score-0').textContent = '0';
          document.getElementById('score-1').textContent = '0';
          document.getElementById('current-0').textContent = '0';
          document.getElementById('current-1').textContent = '0';
          
          document.getElementById('name-0' ).textContent= 'Player 1'; 
          document.getElementById('name-1' ).textContent= 'Player 2'; 
          document.querySelector('.player-0-panel').classList.remove('Winner');
          document.querySelector('.player-1-panel').classList.remove('Winner');
          document.querySelector('.player-0-panel').classList.remove('active');
          document.querySelector('.player-1-panel').classList.remove('active');
          document.querySelector('.player-0-panel').classList.add('active');



          
          
          
        }
      
      
          // document.querySelector('#current-' + activePLayer).textContent = dice;
          // document.querySelector('#current-' + activePLayer).innerHTML = '<em>' + dice + '</em>'
           // 
           // var x = document.querySelector('#score-0').textContent;
           // console.log(x);
           
 
 
 
 
