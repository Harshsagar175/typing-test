let setOfWords = [
    "Hey I am Harsh Sagar and I am a competitive programmer and front-end web-developer" , "Currently I am a prefinal year undergrad in NIT Jamshedpur." , "My hobbies include sketching and illustrations."
];

let msg = document.getElementById('msg');
let typeWords = document.getElementById('myWords');
let btn = document.getElementById('btn');
let startTime , endTime;

let playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

let endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime)/1000;
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
    
    let speed = Math.floor((wordCount / totalTime)*60);
    let finalMsg = "You typed at a speed of "+speed+" words per minute ";
    
    finalMsg += compareWords(msg.innerText , totalStr);
    
    msg.innerText = finalMsg;
}

let compareWords = (s , t)=>{
    let word1 = s.split(" ");
    let word2 = t.split(" ");
    let cnt = 0;

    word1.forEach(function (item , index) {
        if(item == word2[index]){
            cnt ++;
        }
    })
    let errorWords = (word1.length - cnt);
    return (cnt + " correct out of "+word1.length + " words and the total number of errors are "+ errorWords+".");
}

let wordCounter = (str) =>{
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener('click' , function(){
    console.log(this);
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }
    else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})