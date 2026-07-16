/* ==========================================
   KUIZ PENDIDIKAN MUZIK
   SCRIPT.JS BAHAGIAN 1
========================================== */


/* ==========================
   AMBIL ELEMEN HTML
========================== */


const homePage =
document.getElementById("homePage");


const quizPage =
document.getElementById("quizPage");


const resultPage =
document.getElementById("resultPage");


const playerName =
document.getElementById("playerName");


const startBtn =
document.getElementById("startBtn");


const timerDisplay =
document.getElementById("timer");


const correctDisplay =
document.getElementById("correct");


const wrongDisplay =
document.getElementById("wrong");


const questionText =
document.getElementById("questionText");


const questionNumber =
document.getElementById("questionNumber");


const musicSymbol =
document.getElementById("musicSymbol");


const answers =
document.getElementById("answers");


const nextBtn =
document.getElementById("nextBtn");


const progressBar =
document.getElementById("progressBar");





/* ==========================
   PEMBOLEH UBAH KUIZ
========================== */


let namaPemain = "";


let masa = 1200;
// 1200 saat = 20 minit


let timer;


let soalanSemasa = 0;


let jumlahSoalan = 20;


let soalanDipilih = [];


let betul = 0;


let salah = 0;





/* ==========================
   BANK SOALAN
   AKAN DIMASUKKAN
========================== */


let bankSoalan = [];







/* ==========================
   BUTANG MULA
========================== */


startBtn.onclick = function(){


    namaPemain =
    playerName.value.trim();



    if(namaPemain === ""){


        alert(
        "Sila masukkan nama anda."
        );


        return;


    }



    mulaKuiz();


};







/* ==========================
   MULA KUIZ
========================== */


function mulaKuiz(){



    homePage.classList.add(
        "hidden"
    );



    quizPage.classList.remove(
        "hidden"
    );



    betul = 0;

    salah = 0;


    correctDisplay.innerHTML = 0;

    wrongDisplay.innerHTML = 0;



    soalanSemasa = 0;



    masa = 1200;



    soalanDipilih =
    pilihSoalanRawak();



    mulaTimer();



    paparSoalan();



}






/* ==========================
   PILIH 20 SOALAN RAWAK
========================== */


function pilihSoalanRawak(){


    let campur =

    [...bankSoalan]
    .sort(
        ()=>Math.random()-0.5
    );


    return campur.slice(
        0,
        jumlahSoalan
    );


}






/* ==========================
   TIMER SAAT
========================== */


function mulaTimer(){


    clearInterval(timer);



    timer =

    setInterval(function(){



        timerDisplay.innerHTML =

        masa + " saat";



        masa--;



        if(masa < 0){


            clearInterval(timer);


            tamatKuiz();


        }



    },1000);


}

/* ==========================================
   BANK SOALAN
   BAHAGIAN 1:
   BILANGAN NOT (20 SOALAN)
========================================== */


bankSoalan.push(


{
soalan:
"Apakah nama not ini?",

simbol:
"𝅝",

jawapan:[
"Semibrif",
"Minim",
"Krocet",
"Kuaver"
],

betul:0

},



{
soalan:
"Nilai not semibrif ialah?",

simbol:
"𝅝",

jawapan:[
"1 saat",
"2 saat",
"4 saat",
"8 saat"
],

betul:2

},



{
soalan:
"Apakah nama not ini?",

simbol:
"𝅗𝅥",

jawapan:[
"Minim",
"Krocet",
"Kuaver",
"Semikuaver"
],

betul:0

},



{
soalan:
"Nilai not minim ialah?",

simbol:
"𝅗𝅥",

jawapan:[
"1 saat",
"2 saat",
"3 saat",
"4 saat"
],

betul:1

},



{
soalan:
"Apakah nama not ini?",

simbol:
"♩",

jawapan:[
"Semibrif",
"Minim",
"Krocet",
"Kuaver"
],

betul:2

},



{
soalan:
"Nilai krocet ialah?",

simbol:
"♩",

jawapan:[
"1 saat",
"2 saat",
"4 saat",
"8 saat"
],

betul:0

},



{
soalan:
"Apakah nama not ini?",

simbol:
"♪",

jawapan:[
"Krocet",
"Kuaver",
"Minim",
"Semibrif"
],

betul:1

},



{
soalan:
"Nilai satu kuaver ialah?",

simbol:
"♪",

jawapan:[
"1/2 saat",
"1 saat",
"2 saat",
"4 saat"
],

betul:0

},



{
soalan:
"Dua kuaver bersamaan dengan?",

simbol:
"♫",

jawapan:[
"1 krocet",
"2 krocet",
"1 minim",
"1 semibrif"
],

betul:0

},



{
soalan:
"Empat semikuaver bersamaan dengan?",

simbol:
"♬",

jawapan:[
"1 krocet",
"1 minim",
"2 krocet",
"1 semibrif"
],

betul:0

},



{
soalan:
"Not yang paling panjang ialah?",

simbol:
"𝅝",

jawapan:[
"Kuaver",
"Krocet",
"Semibrif",
"Minim"
],

betul:2

},



{
soalan:
"Not yang mempunyai nilai separuh minim ialah?",

simbol:
"𝅗𝅥",

jawapan:[
"Krocet",
"Kuaver",
"Semibrif",
"Semikuaver"
],

betul:0

},



{
soalan:
"Not yang lebih pendek daripada krocet ialah?",

simbol:
"♪",

jawapan:[
"Semibrif",
"Minim",
"Kuaver",
"Breve"
],

betul:2

},



{
soalan:
"Susunan nilai not dari panjang ke pendek ialah?",

simbol:
"🎵",

jawapan:[
"Semibrif - Minim - Krocet - Kuaver",
"Kuaver - Krocet - Minim - Semibrif",
"Krocet - Kuaver - Minim - Semibrif",
"Minim - Semibrif - Kuaver - Krocet"
],

betul:0

},



{
soalan:
"Apakah simbol krocet?",

simbol:
"♩",

jawapan:[
"♩",
"♪",
"𝅗𝅥",
"𝅝"
],

betul:0

},



{
soalan:
"Apakah simbol minim?",

simbol:
"𝅗𝅥",

jawapan:[
"♪",
"𝅗𝅥",
"♩",
"♬"
],

betul:1

},



{
soalan:
"Apakah simbol kuaver?",

simbol:
"♪",

jawapan:[
"𝅝",
"♩",
"♪",
"𝅗𝅥"
],

betul:2

},



{
soalan:
"Semibrif biasanya mempunyai nilai?",

simbol:
"𝅝",

jawapan:[
"1 saat",
"2 saat",
"4 saat",
"8 saat"
],

betul:2

},



{
soalan:
"Jika krocet bernilai 1 saat, minim bernilai?",

simbol:
"𝅗𝅥",

jawapan:[
"1 saat",
"2 saat",
"3 saat",
"4 saat"
],

betul:1

},



{
soalan:
"Jika krocet bernilai 1 saat, semibrif bernilai?",

simbol:
"𝅝",

jawapan:[
"2 saat",
"3 saat",
"4 saat",
"8 saat"
],

betul:2

}


);

let bankSoalan = [];

/* ==========================================
   BANK SOALAN
   BAHAGIAN 2:
   SIMBOL MUZIK (20 SOALAN)
========================================== */


bankSoalan.push(


{
soalan:
"Apakah nama simbol ini?",

simbol:
"♯",

jawapan:[
"Sharp",
"Flat",
"Natural",
"Rest"
],

betul:0
},



{
soalan:
"Fungsi simbol Sharp (♯) ialah?",

simbol:
"♯",

jawapan:[
"Menurunkan nada setengah ton",
"Menaikkan nada setengah ton",
"Memberhentikan lagu",
"Menukar tempo"
],

betul:1
},



{
soalan:
"Apakah nama simbol ini?",

simbol:
"♭",

jawapan:[
"Sharp",
"Flat",
"Natural",
"Klef"
],

betul:1
},



{
soalan:
"Fungsi Flat (♭) ialah?",

simbol:
"♭",

jawapan:[
"Menurunkan nada setengah ton",
"Menaikkan nada",
"Melajukan lagu",
"Menambah kiraan"
],

betul:0
},



{
soalan:
"Apakah nama simbol ini?",

simbol:
"♮",

jawapan:[
"Natural",
"Sharp",
"Flat",
"Rest"
],

betul:0
},



{
soalan:
"Apakah fungsi Natural (♮)?",

simbol:
"♮",

jawapan:[
"Membatalkan Sharp atau Flat",
"Menaikkan nada",
"Menurunkan nada",
"Menukar meter"
],

betul:0
},



{
soalan:
"Apakah maksud simbol rehat?",

simbol:
"𝄽",

jawapan:[
"Diam seketika",
"Bunyi kuat",
"Naik nada",
"Turun nada"
],

betul:0
},



{
soalan:
"Apakah maksud dinamik p?",

simbol:
"p",

jawapan:[
"Perlahan",
"Kuat",
"Sangat kuat",
"Laju"
],

betul:0
},



{
soalan:
"Apakah maksud simbol f?",

simbol:
"f",

jawapan:[
"Forte (kuat)",
"Flat",
"Fast",
"Fine"
],

betul:0
},



{
soalan:
"Apakah maksud ff?",

simbol:
"ff",

jawapan:[
"Sangat kuat",
"Sangat perlahan",
"Sederhana",
"Berhenti"
],

betul:0
},



{
soalan:
"Apakah maksud pp?",

simbol:
"pp",

jawapan:[
"Sangat perlahan",
"Sangat kuat",
"Laju",
"Sederhana"
],

betul:0
},



{
soalan:
"Apakah maksud Allegro?",

simbol:
"Allegro",

jawapan:[
"Laju",
"Perlahan",
"Berhenti",
"Kuat"
],

betul:0
},



{
soalan:
"Apakah maksud Adagio?",

simbol:
"Adagio",

jawapan:[
"Perlahan",
"Laju",
"Kuat",
"Berulang"
],

betul:0
},



{
soalan:
"Apakah maksud crescendo?",

simbol:
"<",

jawapan:[
"Semakin kuat",
"Semakin perlahan",
"Berhenti",
"Ulangan"
],

betul:0
},



{
soalan:
"Apakah maksud diminuendo?",

simbol:
">",

jawapan:[
"Semakin perlahan",
"Semakin kuat",
"Lebih tinggi",
"Lebih rendah"
],

betul:0
},



{
soalan:
"Apakah fungsi fermata?",

simbol:
"𝄐",

jawapan:[
"Memanjangkan not",
"Memendekkan not",
"Menukar nada",
"Menukar meter"
],

betul:0
},



{
soalan:
"Apakah nama tanda ini?",

simbol:
":||",

jawapan:[
"Repeat sign",
"Sharp",
"Flat",
"Natural"
],

betul:0
},



{
soalan:
"Apakah maksud ritardando?",

simbol:
"rit.",

jawapan:[
"Semakin perlahan",
"Semakin laju",
"Kuat",
"Berhenti"
],

betul:0
},



{
soalan:
"Apakah maksud accelerando?",

simbol:
"accel.",

jawapan:[
"Semakin laju",
"Semakin perlahan",
"Lembut",
"Berhenti"
],

betul:0
},



{
soalan:
"Simbol dinamik menunjukkan?",

simbol:
"mf",

jawapan:[
"Kekuatan bunyi",
"Nama not",
"Meter lagu",
"Kunci muzik"
],

betul:0
}


);

/* ==========================================
   BANK SOALAN
   BAHAGIAN 3:
   METER LAGU (20 SOALAN)
========================================== */


bankSoalan.push(


{
soalan:
"Apakah maksud meter 4/4?",

simbol:
"4/4",

jawapan:[
"4 saat dalam satu bar",
"4 not dalam satu lagu",
"4 jenis klef",
"4 tempo berbeza"
],

betul:0
},



{
soalan:
"Meter 3/4 mempunyai berapa kiraan?",

simbol:
"3/4",

jawapan:[
"2 saat",
"3 saat",
"4 saat",
"6 saat"
],

betul:1
},



{
soalan:
"Meter 2/4 mempunyai berapa kiraan?",

simbol:
"2/4",

jawapan:[
"2 saat",
"3 saat",
"4 saat",
"8 saat"
],

betul:0
},



{
soalan:
"Nombor atas dalam meter menunjukkan?",

simbol:
"4/4",

jawapan:[
"Bilangan detik dalam satu bar",
"Kelajuan lagu",
"Nama alat muzik",
"Kunci lagu"
],

betul:0
},



{
soalan:
"Nombor bawah dalam meter menunjukkan?",

simbol:
"4/4",

jawapan:[
"Jenis nilai not",
"Bilangan bar",
"Nama lagu",
"Tempo lagu"
],

betul:0
},



{
soalan:
"Common time merujuk kepada meter?",

simbol:
"C",

jawapan:[
"4/4",
"3/4",
"2/4",
"6/8"
],

betul:0
},



{
soalan:
"Lagu waltz biasanya menggunakan meter?",

simbol:
"3/4",

jawapan:[
"3/4",
"4/4",
"2/4",
"5/4"
],

betul:0
},



{
soalan:
"Meter yang paling biasa dalam muzik moden ialah?",

simbol:
"4/4",

jawapan:[
"4/4",
"1/4",
"7/8",
"9/8"
],

betul:0
},



{
soalan:
"Simbol garis pemisah bar dipanggil?",

simbol:
"|",

jawapan:[
"Bar line",
"Klef",
"Sharp",
"Slur"
],

betul:0
},



{
soalan:
"Fungsi bar line ialah?",

simbol:
"|",

jawapan:[
"Membahagikan muzik kepada bar",
"Mengubah nada",
"Menambah tempo",
"Menguatkan bunyi"
],

betul:0
},



{
soalan:
"Meter 6/8 mempunyai berapa detik?",

simbol:
"6/8",

jawapan:[
"6 detik",
"4 detik",
"3 detik",
"8 detik"
],

betul:0
},



{
soalan:
"Dalam meter 4/4, satu bar mengandungi berapa krocet?",

simbol:
"♩♩♩♩",

jawapan:[
"2",
"3",
"4",
"8"
],

betul:2
},



{
soalan:
"Dalam meter 3/4, satu bar mengandungi berapa krocet?",

simbol:
"♩♩♩",

jawapan:[
"1",
"2",
"3",
"4"
],

betul:2
},



{
soalan:
"Meter lagu menunjukkan?",

simbol:
"4/4",

jawapan:[
"Susunan detik dan rentak",
"Warna bunyi",
"Nama alat muzik",
"Lirik lagu"
],

betul:0
},



{
soalan:
"Apakah maksud meter lagu?",

simbol:
"3/4",

jawapan:[
"Susunan detik dalam muzik",
"Jenis suara",
"Nama komposer",
"Jenis alat"
],

betul:0
},



{
soalan:
"Meter 2/2 juga dikenali sebagai?",

simbol:
"2/2",

jawapan:[
"Cut time",
"Waltz",
"Common time",
"Triple time"
],

betul:0
},



{
soalan:
"Tanda meter biasanya ditulis selepas?",

simbol:
"🎼",

jawapan:[
"Klef",
"Tajuk lagu",
"Lirik",
"Dinamika"
],

betul:0
},



{
soalan:
"Apakah maksud meter 3/8?",

simbol:
"3/8",

jawapan:[
"3 detik dalam satu bar",
"8 detik dalam satu bar",
"3 bar lagu",
"8 not sahaja"
],

betul:0
},



{
soalan:
"Meter membantu pemuzik memahami?",

simbol:
"4/4",

jawapan:[
"Rentak lagu",
"Warna alat",
"Lirik",
"Nama penyanyi"
],

betul:0
},



{
soalan:
"Jumlah detik dalam bar ditentukan oleh?",

simbol:
"METER",

jawapan:[
"Masa meter lagu",
"Nama lagu",
"Jenis alat",
"Kunci suara"
],

betul:0
}


);

/* ==========================================
   BANK SOALAN
   BAHAGIAN 4:
   MAJOR & MINOR (20 SOALAN)
========================================== */


bankSoalan.push(


{
soalan:
"Apakah maksud skala Major?",

simbol:
"C Major",

jawapan:[
"Skala yang biasanya berbunyi ceria",
"Skala tanpa not",
"Skala rehat",
"Skala tanpa melodi"
],

betul:0
},



{
soalan:
"Apakah maksud skala Minor?",

simbol:
"A Minor",

jawapan:[
"Skala yang biasanya berbunyi sedih atau lembut",
"Skala paling laju",
"Skala tanpa not",
"Skala rentak sahaja"
],

betul:0
},



{
soalan:
"Berapakah tanda kromatik dalam C Major?",

simbol:
"C Major",

jawapan:[
"Tiada",
"1 Sharp",
"1 Flat",
"2 Sharp"
],

betul:0
},



{
soalan:
"Relative minor bagi C Major ialah?",

simbol:
"C Major",

jawapan:[
"A Minor",
"D Minor",
"E Minor",
"G Minor"
],

betul:0
},



{
soalan:
"Relative minor bagi G Major ialah?",

simbol:
"G Major",

jawapan:[
"E Minor",
"A Minor",
"C Minor",
"D Minor"
],

betul:0
},



{
soalan:
"Relative minor bagi F Major ialah?",

simbol:
"F Major",

jawapan:[
"D Minor",
"A Minor",
"E Minor",
"C Minor"
],

betul:0
},



{
soalan:
"G Major mempunyai berapa Sharp?",

simbol:
"G Major",

jawapan:[
"1 Sharp",
"1 Flat",
"Tiada",
"2 Flat"
],

betul:0
},



{
soalan:
"F Major mempunyai tanda kromatik?",

simbol:
"F Major",

jawapan:[
"1 Flat",
"1 Sharp",
"Tiada",
"2 Sharp"
],

betul:0
},



{
soalan:
"Sharp bagi G Major ialah?",

simbol:
"G",

jawapan:[
"F♯",
"C♯",
"B♭",
"E♭"
],

betul:0
},



{
soalan:
"Flat bagi F Major ialah?",

simbol:
"F",

jawapan:[
"B♭",
"F♯",
"C♯",
"G♯"
],

betul:0
},



{
soalan:
"Major biasanya memberi rasa?",

simbol:
"Major",

jawapan:[
"Ceria",
"Sedih",
"Gelap",
"Sunyi"
],

betul:0
},



{
soalan:
"Minor biasanya memberi rasa?",

simbol:
"Minor",

jawapan:[
"Sedih atau melankolik",
"Sentiasa gembira",
"Sangat laju",
"Tiada emosi"
],

betul:0
},



{
soalan:
"Relative minor bagi D Major ialah?",

simbol:
"D Major",

jawapan:[
"B Minor",
"E Minor",
"A Minor",
"F Minor"
],

betul:0
},



{
soalan:
"Relative minor bagi A Major ialah?",

simbol:
"A Major",

jawapan:[
"F♯ Minor",
"C Minor",
"E Minor",
"D Minor"
],

betul:0
},



{
soalan:
"Relative minor bagi E Major ialah?",

simbol:
"E Major",

jawapan:[
"C♯ Minor",
"A Minor",
"G Minor",
"D Minor"
],

betul:0
},



{
soalan:
"Relative minor bagi B♭ Major ialah?",

simbol:
"B♭ Major",

jawapan:[
"G Minor",
"D Minor",
"A Minor",
"E Minor"
],

betul:0
},



{
soalan:
"Major dan relative Minor mempunyai?",

simbol:
"C Major ↔ A Minor",

jawapan:[
"Tanda kromatik yang sama",
"Tempo yang sama",
"Meter yang sama",
"Not yang sama sahaja"
],

betul:0
},



{
soalan:
"A Minor mempunyai tanda kromatik?",

simbol:
"A Minor",

jawapan:[
"Tiada",
"1 Sharp",
"2 Flat",
"3 Sharp"
],

betul:0
},



{
soalan:
"Perbezaan utama Major dan Minor ialah?",

simbol:
"Major / Minor",

jawapan:[
"Warna dan rasa bunyi",
"Bilangan bar",
"Kelajuan sahaja",
"Nama alat muzik"
],

betul:0
},



{
soalan:
"C Major dan A Minor ialah contoh?",

simbol:
"C ↔ Am",

jawapan:[
"Relative Major dan Minor",
"Meter lagu",
"Klef",
"Tempo"
],

betul:0
}


);

/* ==========================================
   SISTEM PAPAR SOALAN
   BAHAGIAN 6
========================================== */



function paparSoalan(){


    let soalan = 
    soalanDipilih[soalanSemasa];



    questionNumber.innerHTML =

    `Soalan ${soalanSemasa + 1} / ${jumlahSoalan}`;



    questionText.innerHTML =

    soalan.soalan;



    musicSymbol.innerHTML =

    soalan.simbol;



    answers.innerHTML = "";





    /* ==========================
       ACAK JAWAPAN
    ========================== */


    let pilihan = 
    soalan.jawapan.map(
    function(item,index){


        return {


            teks:item,


            betul:
            index === soalan.betul


        };


    });



    pilihan.sort(
        ()=>Math.random()-0.5
    );






    pilihan.forEach(
    function(item,index){



        let butang =

        document.createElement(
            "button"
        );



        butang.className =
        "answerBtn";



        let huruf =

        [
        "A",
        "B",
        "C",
        "D"
        ];



        butang.innerHTML =

        huruf[index] +
        ". " +
        item.teks;



        butang.onclick =

        function(){


            semakJawapan(
                item.betul,
                butang
            );


        };



        answers.appendChild(
            butang
        );



    });





    kemaskiniProgress();


}







/* ==========================
   SEMAK JAWAPAN
========================== */


function semakJawapan(
Jawapanbetul,
butang
){



    let semuaButang =

    document.querySelectorAll(
        ".answerBtn"
    );



    semuaButang.forEach(
    function(btn){


        btn.disabled = true;


    });





    if(jawapanbetul){


        butang.classList.add(
            "correct"
        );


        betul++;

        correctDisplay.innerHTML =
        betul;



    }

    else{


        butang.classList.add(
            "wrong"
        );


        salah++;


        wrongDisplay.innerHTML =
        salah;


    }


}






/* ==========================
   PROGRESS BAR
========================== */


function kemaskiniProgress(){



    let peratus =

    (
        soalanSemasa /
        jumlahSoalan
    )
    * 100;



    progressBar.style.width =

    peratus + "%";



}






/* ==========================
   BUTANG SETERUSNYA
========================== */


nextBtn.onclick = function(){



    soalanSemasa++;



    if(
        soalanSemasa <
        jumlahSoalan
    ){


        paparSoalan();


    }

    else{


        tamatKuiz();


    }


};

/* ==========================================
   KEPUTUSAN & LEADERBOARD
   BAHAGIAN 7
========================================== */



const resultName =
document.getElementById("resultName");


const finalCorrect =
document.getElementById("finalCorrect");


const finalWrong =
document.getElementById("finalWrong");


const finalScore =
document.getElementById("finalScore");


const finalTime =
document.getElementById("finalTime");


const finalGrade =
document.getElementById("finalGrade");


const restartBtn =
document.getElementById("restartBtn");


const leaderboardBody =
document.getElementById("leaderboardBody");







/* ==========================
   TAMAT KUIZ
========================== */


function tamatKuiz(){



    clearInterval(timer);



    quizPage.classList.add(
        "hidden"
    );


    resultPage.classList.remove(
        "hidden"
    );




    let masaDiguna =

    1200 - masa;



    resultName.innerHTML =

    namaPemain;



    finalCorrect.innerHTML =

    betul;



    finalWrong.innerHTML =

    salah;



    let markah =

    Math.round(

    (betul /
    jumlahSoalan)
    *100

    );



    finalScore.innerHTML =

    markah + "%";




    finalTime.innerHTML =

    masaDiguna + " saat";





    if(markah >= 80){


        finalGrade.innerHTML =
        "🏆 GRED A";


    }

    else if(markah >=60){


        finalGrade.innerHTML =
        "🥈 GRED B";


    }

    else if(markah >=40){


        finalGrade.innerHTML =
        "🥉 GRED C";


    }

    else{


        finalGrade.innerHTML =
        "📚 GRED D";


    }




    simpanLeaderboard(
        markah,
        masaDiguna
    );



}









/* ==========================
   SIMPAN LEADERBOARD
========================== */


function simpanLeaderboard(
markah,
masaDiguna
){



    let data = {


        nama:
        namaPemain,


        betul:
        betul,


        salah:
        salah,


        markah:
        markah,


        masa:
        masaDiguna



    };





    let papan =

    JSON.parse(

    localStorage.getItem(
    "leaderboardMuzik"
    )

    )

    || [];




    papan.push(data);




    papan.sort(

    function(a,b){



        if(
        b.betul !== a.betul
        ){

            return b.betul -
            a.betul;

        }



        return a.masa -
        b.masa;



    });



    papan =

    papan.slice(
        0,
        10
    );




    localStorage.setItem(

    "leaderboardMuzik",

    JSON.stringify(
        papan
    )

    );



    paparLeaderboard();



}









/* ==========================
   PAPAR LEADERBOARD
========================== */


function paparLeaderboard(){



    let papan =

    JSON.parse(

    localStorage.getItem(
    "leaderboardMuzik"
    )

    )

    || [];



    leaderboardBody.innerHTML =
    "";





    papan.forEach(

    function(pemain,index){



        let row =

        document.createElement(
        "tr"
        );



        row.innerHTML = `


        <td>
        ${index+1}
        </td>


        <td>
        ${pemain.nama}
        </td>


        <td>
        ${pemain.betul}
        </td>


        <td>
        ${pemain.salah}
        </td>


        <td>
        ${pemain.markah}%
        </td>


        <td>
        ${pemain.masa} saat
        </td>


        `;



        leaderboardBody.appendChild(
            row
        );



    });



}









/* ==========================
   MAIN SEMULA
========================== */


restartBtn.onclick = function(){



    resultPage.classList.add(
        "hidden"
    );



    homePage.classList.remove(
        "hidden"
    );



    playerName.value =
    "";



    paparLeaderboard();



};






/* ==========================
   PAPAR DATA AWAL
========================== */


window.onload = function(){


    paparLeaderboard();


};