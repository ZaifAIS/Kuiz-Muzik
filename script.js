/* =====================================
   SCRIPT.JS
   KUIZ PENDIDIKAN MUZIK
   TINGKATAN 3,4 & 5
===================================== */


// ==============================
// PEMBOLEH UBAH UTAMA
// ==============================


let playerName = "";

let currentQuestion = 0;

let selectedQuestions = [];

let correctAnswer = 0;

let wrongAnswer = 0;

let totalQuestions = 20;


// Masa 20 minit
let timeLeft = 1200;

let timer;



// ==============================
// DAPATKAN ELEMENT HTML
// ==============================


const startPage = document.getElementById("startPage");

const quizPage = document.getElementById("quizPage");

const resultPage = document.getElementById("resultPage");


const startButton = document.getElementById("startButton");

const nextButton = document.getElementById("nextButton");

const playAgainButton = document.getElementById("playAgainButton");


const playerNameInput =
document.getElementById("playerName");


const timerDisplay =
document.getElementById("timer");


const questionText =
document.getElementById("questionText");


const answerContainer =
document.getElementById("answerContainer");


const questionNumber =
document.getElementById("questionNumber");


const correctScore =
document.getElementById("correctScore");


const wrongScore =
document.getElementById("wrongScore");


const progressBar =
document.getElementById("progressBar");



// ==============================
// BANK SOALAN AKAN DITAMBAH
// DALAM BAHAGIAN SETERUSNYA
// ==============================


let questionBank = [];



// ==============================
// BUTANG MULA KUIZ
// ==============================


startButton.addEventListener("click",()=>{


    playerName =
    playerNameInput.value.trim();



    if(playerName === ""){


        alert("Sila masukkan nama anda dahulu.");

        return;


    }



    startGame();


});





// ==============================
// FUNGSI MULA PERMAINAN
// ==============================


function startGame(){


    startPage.classList.add("hidden");


    quizPage.classList.remove("hidden");



    currentQuestion = 0;

    correctAnswer = 0;

    wrongAnswer = 0;


    correctScore.innerHTML = 0;

    wrongScore.innerHTML = 0;



    timeLeft = 1200;



    selectedQuestions =
    shuffleArray(questionBank)
    .slice(0,totalQuestions);



    startTimer();


    showQuestion();



}






// ==============================
// TIMER 20 MINIT
// ==============================


function startTimer(){


    clearInterval(timer);



    timer = setInterval(()=>{


        let minutes =
        Math.floor(timeLeft / 60);



        let seconds =
        timeLeft % 60;



        timerDisplay.innerHTML =

        `${minutes}:${seconds < 10 ? "0":""}${seconds}`;



        timeLeft--;



        if(timeLeft < 0){


            clearInterval(timer);


            finishQuiz();


        }



    },1000);



}





// ==============================
// ACAK ARRAY
// ==============================


function shuffleArray(array){


    return array.sort(()=>Math.random()-0.5);


}

// =====================================
// BANK SOALAN BAHAGIAN 1
// BILANGAN NOT & SIMBOL MUZIK
// =====================================


questionBank = [


/* ============================
   BILANGAN NOT (20 SOALAN)
============================ */


{
question:"Berapakah nilai not semibrif?",
symbol:"𝅝",
answers:[
"1 kiraan",
"2 kiraan",
"4 kiraan",
"8 kiraan"
],
correct:2
},


{
question:"Berapakah nilai not minim?",
symbol:"𝅗𝅥",
answers:[
"1 kiraan",
"2 kiraan",
"4 kiraan",
"8 kiraan"
],
correct:1
},


{
question:"Berapakah nilai not krocet?",
symbol:"♩",
answers:[
"1 kiraan",
"2 kiraan",
"3 kiraan",
"4 kiraan"
],
correct:0
},


{
question:"Berapakah nilai not kuaver?",
symbol:"♪",
answers:[
"1/2 kiraan",
"1 kiraan",
"2 kiraan",
"4 kiraan"
],
correct:0
},


{
question:"Dua not kuaver bersamaan dengan?",
symbol:"♫",
answers:[
"1 krocet",
"1 minim",
"1 semibrif",
"1 breve"
],
correct:0
},


{
question:"Empat not krocet bersamaan dengan?",
symbol:"♩♩♩♩",
answers:[
"1 semibrif",
"1 minim",
"1 kuaver",
"1 rehat"
],
correct:0
},


{
question:"Lapan not kuaver bersamaan dengan?",
symbol:"♪♪♪♪♪♪♪♪",
answers:[
"1 minim",
"1 semibrif",
"2 semibrif",
"1 krocet"
],
correct:2
},


{
question:"Not apakah yang mempunyai kepala not kosong dan batang?",
symbol:"𝅗𝅥",
answers:[
"Minim",
"Krocet",
"Kuaver",
"Semikuaver"
],
correct:0
},


{
question:"Not apakah mempunyai satu bendera?",
symbol:"♪",
answers:[
"Semibrif",
"Minim",
"Kuaver",
"Krocet"
],
correct:2
},


{
question:"Nilai not semikuaver ialah?",
symbol:"♬",
answers:[
"1/4 kiraan",
"1/2 kiraan",
"1 kiraan",
"2 kiraan"
],
correct:0
},


{
question:"Apakah nama not paling panjang dalam muzik moden?",
symbol:"𝅝",
answers:[
"Kuaver",
"Minim",
"Semibrif",
"Krocet"
],
correct:2
},


{
question:"Satu minim mempunyai berapa krocet?",
symbol:"𝅗𝅥",
answers:[
"1",
"2",
"3",
"4"
],
correct:1
},


{
question:"Satu semibrif mempunyai berapa minim?",
symbol:"𝅝",
answers:[
"1",
"2",
"3",
"4"
],
correct:1
},


{
question:"Dua semikuaver bersamaan dengan?",
symbol:"♬",
answers:[
"Satu kuaver",
"Satu minim",
"Satu krocet",
"Satu semibrif"
],
correct:0
},


{
question:"Nilai rehat yang sama dengan semibrif ialah?",
symbol:"𝄻",
answers:[
"Rehat semibrif",
"Rehat minim",
"Rehat krocet",
"Rehat kuaver"
],
correct:0
},


{
question:"Not yang mempunyai nilai 4 kiraan ialah?",
symbol:"♩",
answers:[
"Krocet",
"Kuaver",
"Minim",
"Semikuaver"
],
correct:0
},


{
question:"Not yang bernilai separuh daripada krocet ialah?",
symbol:"♪",
answers:[
"Minim",
"Kuaver",
"Semibrif",
"Breve"
],
correct:1
},


{
question:"Apakah hubungan minim dengan krocet?",
symbol:"𝅗𝅥",
answers:[
"1 minim = 2 krocet",
"1 minim = 4 krocet",
"1 minim = 8 krocet",
"1 minim = 1 krocet"
],
correct:0
},


{
question:"Apakah hubungan semibrif dengan krocet?",
symbol:"𝅝",
answers:[
"1 semibrif = 2 krocet",
"1 semibrif = 3 krocet",
"1 semibrif = 4 krocet",
"1 semibrif = 8 krocet"
],
correct:2
},


{
question:"Not yang paling pendek antara berikut ialah?",
symbol:"♬",
answers:[
"Semibrif",
"Minim",
"Krocet",
"Semikuaver"
],
correct:3
},




/* ============================
   SIMBOL MUZIK (20 SOALAN)
============================ */


{
question:"Apakah nama simbol ♯?",
symbol:"♯",
answers:[
"Flat",
"Sharp",
"Natural",
"Fermata"
],
correct:1
},


{
question:"Apakah nama simbol ♭?",
symbol:"♭",
answers:[
"Sharp",
"Flat",
"Tanda ulang",
"Accent"
],
correct:1
},


{
question:"Apakah nama simbol ♮?",
symbol:"♮",
answers:[
"Natural",
"Flat",
"Sharp",
"Rest"
],
correct:0
},


{
question:"Simbol dinamika f bermaksud?",
symbol:"f",
answers:[
"Forte",
"Piano",
"Moderato",
"Allegro"
],
correct:0
},


{
question:"Simbol p dalam muzik bermaksud?",
symbol:"p",
answers:[
"Piano",
"Forte",
"Presto",
"Pause"
],
correct:0
},


{
question:"Simbol > dalam muzik menunjukkan?",
symbol:">",
answers:[
"Accent",
"Ulang",
"Rehat",
"Tempo"
],
correct:0
},


{
question:"Simbol fermata menunjukkan?",
symbol:"𝄐",
answers:[
"Berhenti seketika / panjangkan bunyi",
"Main laju",
"Main perlahan",
"Tukar nada"
],
correct:0
},


{
question:"Simbol crescendo menunjukkan?",
symbol:"<",
answers:[
"Bunyi semakin kuat",
"Bunyi semakin perlahan",
"Berhenti",
"Ulang"
],
correct:0
},


{
question:"Simbol diminuendo menunjukkan?",
symbol:">",
answers:[
"Semakin kuat",
"Semakin perlahan",
"Lebih cepat",
"Lebih tinggi"
],
correct:1
},


{
question:"Apakah simbol ulangan dalam muzik?",
symbol:":||",
answers:[
"Repeat",
"Sharp",
"Rest",
"Slur"
],
correct:0
}

];

/* =====================================
   SAMBUNGAN BANK SOALAN
   SIMBOL MUZIK + METER LAGU
===================================== */


/* ============================
   TAMBAH SIMBOL MUZIK
   (SOALAN 31 - 40)
============================ */


questionBank.push(


{
question:"Apakah nama simbol rehat dalam muzik?",
symbol:"𝄽",
answers:[
"Rest",
"Sharp",
"Flat",
"Natural"
],
correct:0
},


{
question:"Simbol tie digunakan untuk?",
symbol:"‿",
answers:[
"Menyambung dua not sama tinggi",
"Menukar tempo",
"Menguatkan bunyi",
"Memberhentikan lagu"
],
correct:0
},


{
question:"Simbol slur menunjukkan?",
symbol:"⌒",
answers:[
"Not dimainkan secara bersambung",
"Not dimainkan pendek",
"Tempo perlahan",
"Tukar nada"
],
correct:0
},


{
question:"Apakah maksud simbol Allegro?",
symbol:"Allegro",
answers:[
"Laju",
"Perlahan",
"Sangat perlahan",
"Berhenti"
],
correct:0
},


{
question:"Apakah maksud simbol Adagio?",
symbol:"Adagio",
answers:[
"Perlahan",
"Laju",
"Sangat kuat",
"Sangat tinggi"
],
correct:0
},


{
question:"Simbol crescendo ditulis sebagai?",
symbol:"<",
answers:[
"Bertambah kuat",
"Bertambah perlahan",
"Berhenti",
"Ulangan"
],
correct:0
},


{
question:"Simbol diminuendo ditulis sebagai?",
symbol:">",
answers:[
"Bertambah kuat",
"Bertambah perlahan",
"Laju",
"Rehat"
],
correct:1
},


{
question:"Tanda dinamik digunakan untuk menunjukkan?",
symbol:"mf",
answers:[
"Tahap kekuatan bunyi",
"Kelajuan lagu",
"Nama not",
"Jenis alat muzik"
],
correct:0
},


{
question:"Simbol mf bermaksud?",
symbol:"mf",
answers:[
"Mezzo forte",
"Molto forte",
"Minor forte",
"Music fast"
],
correct:0
},


{
question:"Simbol pp bermaksud?",
symbol:"pp",
answers:[
"Sangat perlahan",
"Sangat kuat",
"Laju",
"Sedang"
],
correct:0
}



);




/* ============================
   METER LAGU
   (SOALAN 41 - 60)
============================ */


questionBank.push(


{
question:"Apakah maksud meter 4/4?",
symbol:"4/4",
answers:[
"Empat kiraan dalam satu bar",
"Dua kiraan dalam satu bar",
"Tiga kiraan dalam satu bar",
"Lapan kiraan dalam satu bar"
],
correct:0
},


{
question:"Meter 3/4 mempunyai berapa kiraan setiap bar?",
symbol:"3/4",
answers:[
"2",
"3",
"4",
"6"
],
correct:1
},


{
question:"Meter 2/4 biasanya mempunyai?",
symbol:"2/4",
answers:[
"Dua kiraan setiap bar",
"Tiga kiraan setiap bar",
"Empat kiraan setiap bar",
"Lapan kiraan setiap bar"
],
correct:0
},


{
question:"Nombor atas dalam meter menunjukkan?",
symbol:"4/4",
answers:[
"Bilangan kiraan dalam satu bar",
"Nilai not",
"Nama lagu",
"Tempo"
],
correct:0
},


{
question:"Nombor bawah dalam meter menunjukkan?",
symbol:"4/4",
answers:[
"Jenis not yang menjadi kiraan",
"Bilangan bar",
"Tempo",
"Kunci lagu"
],
correct:0
},


{
question:"Meter 6/8 biasanya dikira sebagai?",
symbol:"6/8",
answers:[
"Enam kuaver setiap bar",
"Empat krocet",
"Dua minim",
"Satu semibrif"
],
correct:0
},


{
question:"Lagu waltz biasanya menggunakan meter?",
symbol:"3/4",
answers:[
"3/4",
"4/4",
"2/4",
"6/8"
],
correct:0
},


{
question:"Meter paling biasa digunakan dalam muzik moden ialah?",
symbol:"4/4",
answers:[
"4/4",
"1/4",
"5/8",
"7/8"
],
correct:0
},


{
question:"Bar muzik dibahagikan oleh?",
symbol:"|",
answers:[
"Garis bar",
"Klef",
"Tanda kromatik",
"Not"
],
correct:0
},


{
question:"Garis menegak yang memisahkan bar dipanggil?",
symbol:"|",
answers:[
"Bar line",
"Slur",
"Tie",
"Fermata"
],
correct:0
},


{
question:"Meter 3/8 mempunyai jumlah kiraan?",
symbol:"3/8",
answers:[
"3",
"4",
"6",
"8"
],
correct:0
},


{
question:"Meter 2/2 juga dikenali sebagai?",
symbol:"2/2",
answers:[
"Cut time",
"Waltz",
"Common time",
"Triple time"
],
correct:0
},


{
question:"Common time merujuk kepada meter?",
symbol:"C",
answers:[
"4/4",
"3/4",
"2/4",
"6/8"
],
correct:0
},


{
question:"Meter menunjukkan susunan?",
symbol:"4/4",
answers:[
"Kiraan dalam muzik",
"Warna bunyi",
"Nama alat muzik",
"Lirik lagu"
],
correct:0
},


{
question:"Satu bar 4/4 mempunyai berapa krocet?",
symbol:"♩♩♩♩",
answers:[
"2",
"3",
"4",
"8"
],
correct:2
},


{
question:"Satu bar 3/4 mempunyai berapa minim?",
symbol:"𝅗𝅥",
answers:[
"1",
"2",
"3",
"4"
],
correct:2
},


{
question:"Meter menunjukkan corak?",
symbol:"3/4",
answers:[
"Rentak",
"Nada",
"Lirik",
"Alat"
],
correct:0
},


{
question:"Apakah fungsi garis bar?",
symbol:"|",
answers:[
"Membahagi muzik kepada bar",
"Menukar nada",
"Menambah laju",
"Menguatkan bunyi"
],
correct:0
},


{
question:"Meter 4/4 juga dipanggil?",
symbol:"C",
answers:[
"Common time",
"Slow time",
"Triple time",
"Minor time"
],
correct:0
},


{
question:"Tanda meter biasanya ditulis selepas?",
symbol:"🎼",
answers:[
"Klef",
"Lirik",
"Tajuk lagu",
"Dinamik"
],
correct:0
}


);

/* =====================================
   MAJOR & MINOR
   SOALAN 61 - 80
===================================== */


questionBank.push(


{
question:"Apakah maksud Major dalam muzik?",
symbol:"C Major",
answers:[
"Skala yang biasanya mempunyai bunyi ceria",
"Skala yang sentiasa perlahan",
"Skala tanpa not",
"Skala rehat"
],
correct:0
},


{
question:"Apakah maksud Minor dalam muzik?",
symbol:"A Minor",
answers:[
"Skala yang biasanya mempunyai bunyi lebih sedih",
"Skala yang sangat laju",
"Skala tanpa nada",
"Skala muzik tradisional sahaja"
],
correct:0
},


{
question:"C Major mempunyai berapa tanda kromatik?",
symbol:"C",
answers:[
"Tiada",
"1 Sharp",
"2 Flat",
"3 Sharp"
],
correct:0
},


{
question:"Relative minor bagi C Major ialah?",
symbol:"C Major",
answers:[
"A Minor",
"D Minor",
"E Minor",
"G Minor"
],
correct:0
},


{
question:"Relative minor bagi G Major ialah?",
symbol:"G Major",
answers:[
"E Minor",
"A Minor",
"D Minor",
"C Minor"
],
correct:0
},


{
question:"Relative minor bagi F Major ialah?",
symbol:"F Major",
answers:[
"D Minor",
"A Minor",
"E Minor",
"G Minor"
],
correct:0
},


{
question:"Tangga nada G Major mempunyai tanda?",
symbol:"G Major",
answers:[
"1 Sharp",
"1 Flat",
"Tiada",
"2 Flat"
],
correct:0
},


{
question:"Tangga nada F Major mempunyai tanda?",
symbol:"F Major",
answers:[
"1 Flat",
"1 Sharp",
"Tiada",
"2 Sharp"
],
correct:0
},


{
question:"Apakah tanda kromatik bagi G Major?",
symbol:"G",
answers:[
"F Sharp",
"C Sharp",
"B Flat",
"E Flat"
],
correct:0
},


{
question:"Apakah tanda kromatik bagi F Major?",
symbol:"F",
answers:[
"B Flat",
"F Sharp",
"C Sharp",
"G Sharp"
],
correct:0
},


{
question:"Skala Major mempunyai susunan ton dan semiton tertentu yang menghasilkan?",
symbol:"Major",
answers:[
"Bunyi ceria",
"Bunyi tanpa nada",
"Rentak sahaja",
"Senandung"
],
correct:0
},


{
question:"Skala Minor biasanya digunakan untuk menghasilkan suasana?",
symbol:"Minor",
answers:[
"Sedih atau melankolik",
"Sangat bising",
"Tanpa melodi",
"Tanpa harmoni"
],
correct:0
},


{
question:"Apakah relative minor bagi D Major?",
symbol:"D Major",
answers:[
"B Minor",
"E Minor",
"A Minor",
"F Minor"
],
correct:0
},


{
question:"Apakah relative minor bagi A Major?",
symbol:"A Major",
answers:[
"F Sharp Minor",
"C Minor",
"E Minor",
"D Minor"
],
correct:0
},


{
question:"Apakah relative minor bagi E Major?",
symbol:"E Major",
answers:[
"C Sharp Minor",
"A Minor",
"G Minor",
"D Minor"
],
correct:0
},


{
question:"Apakah relative minor bagi B Flat Major?",
symbol:"Bb Major",
answers:[
"G Minor",
"D Minor",
"A Minor",
"E Minor"
],
correct:0
},


{
question:"Kunci Major dan relative minor mempunyai?",
symbol:"🎼",
answers:[
"Tanda kromatik yang sama",
"Tempo yang sama",
"Lirik yang sama",
"Rentak yang sama"
],
correct:0
},


{
question:"A Minor mempunyai berapa tanda kromatik?",
symbol:"A Minor",
answers:[
"Tiada",
"1 Sharp",
"2 Flat",
"3 Sharp"
],
correct:0
},


{
question:"Apakah perbezaan utama Major dan Minor?",
symbol:"Major / Minor",
answers:[
"Rasa dan warna bunyi",
"Bilangan bar",
"Kelajuan sahaja",
"Jenis alat muzik"
],
correct:0
},


{
question:"C Major dan A Minor adalah contoh?",
symbol:"C ↔ Am",
answers:[
"Relative Major dan Minor",
"Meter lagu",
"Klef",
"Tempo"
],
correct:0
}


);


/* =====================================
   SEMAK JUMLAH SOALAN
===================================== */

console.log(
    "Jumlah bank soalan:",
    questionBank.length
);

/* =====================================
   PAPAR SOALAN & JAWAPAN
===================================== */


function showQuestion(){


    let current = selectedQuestions[currentQuestion];


    questionNumber.innerHTML =
    currentQuestion + 1;



    questionText.innerHTML =
    current.question;



    document.getElementById("symbolImage").innerHTML =
    current.symbol;



    answerContainer.innerHTML = "";



    current.answers.forEach((answer,index)=>{


        let button =
        document.createElement("button");


        button.className =
        "answer-button";


        button.innerHTML =
        answer;



        button.onclick = function(){


            checkAnswer(
                index,
                button
            );


        };


        answerContainer.appendChild(button);


    });



    updateProgress();


}





/* =====================================
   SEMAK JAWAPAN
===================================== */


function checkAnswer(selected,button){


    let current =
    selectedQuestions[currentQuestion];



    let buttons =
    document.querySelectorAll(".answer-button");



    buttons.forEach(btn=>{

        btn.disabled = true;

    });



    if(selected === current.correct){


        button.classList.add("correct");


        correctAnswer++;


        correctScore.innerHTML =
        correctAnswer;



    }else{


        button.classList.add("wrong");


        buttons[current.correct]
        .classList.add("correct");



        wrongAnswer++;


        wrongScore.innerHTML =
        wrongAnswer;



    }



}







/* =====================================
   SOALAN SETERUSNYA
===================================== */


nextButton.addEventListener("click",()=>{


    currentQuestion++;



    if(currentQuestion < totalQuestions){


        showQuestion();



    }else{


        finishQuiz();



    }



});






/* =====================================
   PROGRESS BAR
===================================== */


function updateProgress(){


    let progress =

    ((currentQuestion) / totalQuestions) * 100;



    progressBar.style.width =
    progress + "%";


}






/* =====================================
   TAMAT KUIZ
===================================== */


function finishQuiz(){


    clearInterval(timer);



    quizPage.classList.add("hidden");


    resultPage.classList.remove("hidden");



    let usedSeconds =
    1200 - timeLeft;



    let minutes =
    Math.floor(usedSeconds / 60);



    let seconds =
    usedSeconds % 60;



    document.getElementById("resultName")
    .innerHTML =
    playerName;



    document.getElementById("finalCorrect")
    .innerHTML =
    correctAnswer;



    document.getElementById("finalWrong")
    .innerHTML =
    wrongAnswer;



    document.getElementById("finalTime")
    .innerHTML =
    `${minutes}:${seconds < 10 ? "0":""}${seconds}`;



    let mark =
    Math.round(
    (correctAnswer / totalQuestions) * 100
    );



    document.getElementById("finalMark")
    .innerHTML =
    mark + "%";



    let grade="";


    if(mark >= 80){

        grade="🏆 Gred A";

    }

    else if(mark >= 60){

        grade="🥈 Gred B";

    }

    else if(mark >= 40){

        grade="🥉 Gred C";

    }

    else{

        grade="📚 Teruskan Latihan";

    }



    document.getElementById("finalGrade")
    .innerHTML =
    grade;



    saveScore();



}

/* =====================================
   LEADERBOARD & SIMPAN SKOR
===================================== */


function saveScore(){


    let usedSeconds =
    1200 - timeLeft;



    let minutes =
    Math.floor(usedSeconds / 60);



    let seconds =
    usedSeconds % 60;



    let record = {


        name: playerName,


        correct: correctAnswer,


        wrong: wrongAnswer,


        time:
        `${minutes}:${seconds < 10 ? "0":""}${seconds}`,


        timeValue:
        usedSeconds,


        date:
        new Date().toLocaleDateString("ms-MY")


    };



    let leaderboard =
    JSON.parse(
        localStorage.getItem("muzikLeaderboard")
    )
    || [];



    leaderboard.push(record);



    leaderboard.sort((a,b)=>{


        if(b.correct !== a.correct){


            return b.correct - a.correct;


        }


        return a.timeValue - b.timeValue;


    });



    leaderboard =
    leaderboard.slice(0,10);



    localStorage.setItem(

        "muzikLeaderboard",

        JSON.stringify(leaderboard)

    );



    showLeaderboard();


}







/* =====================================
   PAPAR LEADERBOARD
===================================== */


function showLeaderboard(){


    let leaderboard =

    JSON.parse(

        localStorage.getItem("muzikLeaderboard")

    )
    || [];



    let table =

    document.getElementById(
        "leaderboardBody"
    );



    table.innerHTML = "";



    leaderboard.forEach((player,index)=>{


        let row =

        document.createElement("tr");



        row.innerHTML = `

        <td>

        ${index+1}

        </td>


        <td>

        ${player.name}

        </td>


        <td>

        ${player.correct}

        </td>


        <td>

        ${player.wrong}

        </td>


        <td>

        ${player.time}

        </td>

        `;



        table.appendChild(row);



    });



}





/* =====================================
   MAIN SEMULA
===================================== */


playAgainButton.addEventListener(
"click",
()=>{


    resultPage.classList.add("hidden");


    startPage.classList.remove("hidden");



    playerNameInput.value="";



    showLeaderboard();



});







/* =====================================
   PAPAR LEADERBOARD SEMASA BUKA
===================================== */


window.onload = function(){


    showLeaderboard();


};
