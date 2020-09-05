function rpsGame(yourChoice){
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice: ', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

    function randToRpsInt(){
        return Math.floor(Math.random()*3);
    }
    
    function numberToChoice(number){
        return ['rock', 'paper', 'scissors'][number]
    }

    function decideWinner(yourChoice, computerChoice){
        let rpsObject = {
            'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
            'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
            'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
        };

        let yourScore = rpsObject[yourChoice][computerChoice];
        let computerScore = rpsObject[computerChoice][yourChoice]; 

        return [yourScore, computerScore];
    }

    function finalMessage([yourScore, computerScore]){
        if(yourScore === 0){
            return {'message': 'You Lost!', 'color': 'red' };
        } else if(yourScore === 0.5){
            return {'message': 'You Tied!', 'color': 'yellow'};
        } else{
            return {'message': 'You Won!', 'color': 'green'};
        }
    }

    function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
        let imagesObject = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src
        };

        //remove all images

        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();

        let humanDiv = document.createElement('div');
        let botDiv = document.createElement('div');
        let messageDiv = document.createElement('div');

        humanDiv.innerHTML = "<img src='" + imagesObject[humanImageChoice] + "' width=150 height=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
        messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
        botDiv.innerHTML = "<img src='" + imagesObject[botImageChoice] + "' width=150 height=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
        
        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);
    }


