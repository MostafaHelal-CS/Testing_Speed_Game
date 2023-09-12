// Get Html Fields
let selectType=document.querySelector("select");
let lvlName=document.querySelector(".lvl");
let lvlSeconds=document.querySelector(".seconds");
let theWord=document.querySelector(".the-word");
let theInput=document.querySelector("input");
let theStart=document.querySelector(".start");
let theUpComingWords=document.querySelector(".upComing-Words");
let theSecondGot=document.querySelector(".theSeconds");
let theScoreGot=document.querySelector(".Scoregot");
let theScoreTotal=document.querySelector(".scoreTotal");
let FinishMsg=document.querySelector(".finish");
let thestatistics=document.querySelector(".statistics");
let tryAgin=document.querySelector(".try");

// Array That Contains Words
let words=["algorithm", "array", "binary", "bug", "class",
    "compiler", "constant", "debugging", "database", "encapsulation",
    "exception", "function", "inheritance", "iteration", "javascript", "library", "loop", "method", "namespace", "object",
    "polymorphism", "query", "recursion", "syntax", "variable", "web", "API", "backend", "frontend", "server", "client",
    "interface", "framework", "debug", "code", "compiler", "development", "agile", "testing", "deployment", "version",
    "control", "git", "repository", "branch", "merge", "pull", "push", "commit", "interface", "documentation", "comment",
    "logic", "variable", "data", "structure", "algorithm", "code", "software", "hardware",
    "language", "debugging", "iteration", "loop", "function", "method", "object", "class", "inheritance",
    "polymorphism", "library", "syntax", "variable", "web", "backend", "frontend", "server", "client", "framework",
    "testing", "deployment", "version", "control", "repository", "branch", "merge", "commit", "interface", "documentation",
    "logic", "data", "structure", "algorithm", "software", "hardware", "language", "bug", "debugging", "loop"
];

// Get Easy Word
let easyWords=[];
let normalWords=[];
let hardWords=[];
for(let i=0; i<words.length; i++) {
    if(words[i].length<5) {
        easyWords.push(words[i]);
    } else if(words[i].length<7) {
        normalWords.push(words[i]);
    } else {
        hardWords.push(words[i]);
    }
}

// Make Object To Conatins Level
let levels={
    "Easy": 6,
    "Normal": 4,
    "Hard": 3,
    "Genral": 2
};


let temp, tempLvl;
// Select Type Of Level From Select Box
selectType.onchange=function () {
    // Choise The Type Level And Seconds
    let Level=selectType.value;
    let LevelSecond=levels[Level];
    temp=LevelSecond;
    tempLvl=Level;
    // Setting level & Seconds & in span
    lvlName.innerHTML=Level;
    lvlSeconds.innerHTML=LevelSecond;
    theSecondGot.innerHTML=LevelSecond;
    //To Control The Length Of Array Length
    if(Level==="Genral") {
        theScoreTotal.innerHTML=words.length;
    } else if(Level==="Easy") {
        theScoreTotal.innerHTML=easyWords.length;
    } else if(Level==="Normal") {
        theScoreTotal.innerHTML=normalWords.length;
    } else {
        theScoreTotal.innerHTML=hardWords.length;
    }
};


// Setting Default Level And Seconds
let defaultLevel=selectType.value;
let defaultLevelSecond=levels[defaultLevel];
temp=defaultLevelSecond;
// Setting level & Seconds & in span
lvlName.innerHTML=defaultLevel;
lvlSeconds.innerHTML=defaultLevelSecond;
theSecondGot.innerHTML=defaultLevelSecond;
theScoreTotal.innerHTML=normalWords.length;


function statistic () {
    let statLvl=document.createElement("p");
    statLvl.innerHTML=`Level : ${tempLvl||defaultLevel}`;
    let statSec=document.createElement("p");
    statSec.innerHTML=`Time Available To Write Each Word : ${temp} Seconds`;
    let statScore=document.createElement("p");
    statScore.innerHTML=`Your Score Is : ${theScoreGot.innerHTML} From ${theScoreTotal.innerHTML}`;
    thestatistics.appendChild(statLvl);
    thestatistics.appendChild(statSec);
    thestatistics.appendChild(statScore);
    thestatistics.style.padding='20px';
}


// Start Function
theStart.onclick=function () {
    this.remove();
    theInput.focus();
    theWord.style.padding="10px";
    // Generate Function To Get Random Word From Array
    GenerateWord();
};

// Generate Word
function GenerateWord () {
    if(selectType.value==="Genral") {
        // Generate Random Word From Array
        let randomWord=words[Math.floor(Math.random()*words.length)];
        // Get Word Index
        let wordIndex=words.indexOf(randomWord);
        console.log(wordIndex);
        // Remove Word From Array To Prevent Repeat Word
        words.splice(wordIndex, 1);
        // Empty The UpComming Words
        theUpComingWords.innerHTML='';
        // Add The Word To The Div
        theWord.innerHTML=randomWord;
        // generate Words From Array Added To Div
        for(let i=0; i<words.length; i++) {
            // Appear Words In The Upcomming Words
            let TheDiv=document.createElement("div");
            let txt=document.createTextNode(words[i]);
            TheDiv.appendChild(txt);
            theUpComingWords.appendChild(TheDiv);
        }
        theUpComingWords.style.display="none";
    } else if(selectType.value==="Easy") {
        // Generate Random Word From Array
        let randomWord=easyWords[Math.floor(Math.random()*easyWords.length)];
        // Get Word Index
        let wordIndex=easyWords.indexOf(randomWord);
        console.log(wordIndex);
        // Remove Word From Array To Prevent Repeat Word
        easyWords.splice(wordIndex, 1);
        // Empty The UpComming Words
        theUpComingWords.innerHTML='';
        // Add The Word To The Div
        theWord.innerHTML=randomWord;
        // generate Words From Array Added To Div
        for(let i=0; i<easyWords.length; i++) {
            // Appear Words In The Upcomming Words
            let TheDiv=document.createElement("div");
            let txt=document.createTextNode(words[i]);
            TheDiv.appendChild(txt);
            theUpComingWords.appendChild(TheDiv);
        }
        theUpComingWords.style.display="none";
    } else if(selectType.value==="Normal") {
        // Generate Random Word From Array
        let randomWord=normalWords[Math.floor(Math.random()*normalWords.length)];
        // Get Word Index
        let wordIndex=normalWords.indexOf(randomWord);
        console.log(wordIndex);
        // Remove Word From Array To Prevent Repeat Word
        normalWords.splice(wordIndex, 1);
        // Empty The UpComming Words
        theUpComingWords.innerHTML='';
        // Add The Word To The Div
        theWord.innerHTML=randomWord;
        // generate Words From Array Added To Div
        for(let i=0; i<normalWords.length; i++) {
            // Appear Words In The Upcomming Words
            let TheDiv=document.createElement("div");
            let txt=document.createTextNode(words[i]);
            TheDiv.appendChild(txt);
            theUpComingWords.appendChild(TheDiv);
        }
        theUpComingWords.style.display="none";
    } else {
        // Generate Random Word From Array
        let randomWord=hardWords[Math.floor(Math.random()*hardWords.length)];
        // Get Word Index
        let wordIndex=hardWords.indexOf(randomWord);
        console.log(wordIndex);
        // Remove Word From Array To Prevent Repeat Word
        hardWords.splice(wordIndex, 1);
        // Empty The UpComming Words
        theUpComingWords.innerHTML='';
        // Add The Word To The Div
        theWord.innerHTML=randomWord;
        // generate Words From Array Added To Div
        for(let i=0; i<hardWords.length; i++) {
            // Appear Words In The Upcomming Words
            let TheDiv=document.createElement("div");
            let txt=document.createTextNode(words[i]);
            TheDiv.appendChild(txt);
            theUpComingWords.appendChild(TheDiv);
        }
        theUpComingWords.style.display="none";
    }
    // Start Timing Function
    startTiming();
}

// Show Congratolation Or Failed
function congratzOrFail () {
    FinishMsg.style.padding="20px";
    FinishMsg.style.color="white";
    FinishMsg.style.background="#ff4d6d";
    FinishMsg.style.fontSize="30px";
    setInterval(() => {
        FinishMsg.innerHTML+=".";
    }, 1000);
    setTimeout(() => {
        window.location.reload();
    }, 3000);
}

tryAgin.onclick=function () {
    setInterval(() => {
        FinishMsg.innerHTML+=".";
    }, 1000);
    window.location.reload();
};

// Start Timung Function\
function startTiming () {
    theSecondGot.innerHTML=temp;
    let startTime=setInterval(() => {
        theSecondGot.innerHTML--;
        if(theSecondGot.innerHTML=="0") {
            // Stop SetInterval
            clearInterval(startTime);
            // Compersion word With The Input Word
            if(theWord.innerHTML.toLowerCase()===theInput.value.toLowerCase()) {
                // Empty input Field
                theInput.value="";
                // Increase the ScoreGot
                theScoreGot.innerHTML++;
                if(selectType.value=="Genral") {
                    if(words.length>0) {
                        GenerateWord();
                    } else {
                        congratzOrFail();
                        FinishMsg.innerHTML="Congratolation";
                        statistic();
                    }
                } else if(selectType.value=="Easy") {
                    if(easyWords.length>0) {
                        GenerateWord();
                    } else {
                        congratzOrFail();
                        FinishMsg.innerHTML="Congratolation";
                        statistic();
                    }
                } else if(selectType.value=="Normal") {
                    if(normalWords.length>0) {
                        GenerateWord();
                    } else {
                        congratzOrFail();
                        FinishMsg.innerHTML="Congratolation";
                        statistic();
                    }
                } else {
                    if(hardWords.length>0) {
                        GenerateWord();
                    } else {
                        congratzOrFail();
                        FinishMsg.innerHTML="Congratolation";
                        statistic();
                    }
                }
            }

            else {
                FinishMsg.style.padding="20px";
                FinishMsg.style.color="white";
                FinishMsg.style.fontSize="30px";
                FinishMsg.innerHTML="Game Over";
                setInterval(() => {
                    FinishMsg.innerHTML+=".";
                }, 3000);
                tryAgin.style.display="block";
            }
        }
    }, 1000);
}
