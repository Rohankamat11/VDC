

var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var btn3 = document.getElementById('btn-3');
var btn4 = document.getElementById('btn-4');
var btn5 = document.getElementById('btn-5');
var btn6 = document.getElementById('btn-6');
var btn7 = document.getElementById('btn-7');
var btn8 = document.getElementById('btn-8');
var btn9 = document.getElementById('btn-9');
var btn10 = document.getElementById('btn-10');
var btn11 = document.getElementById('btn-11');
var btn12 = document.getElementById('btn-12');
var btn13 = document.getElementById('btn-13');
var btn14 = document.getElementById('btn-14');
var btn15 = document.getElementById('btn-15');
var btn16 = document.getElementById('btn-16');
var btn17 = document.getElementById('btn-17');
var btn18 = document.getElementById('btn-18');
var btn19 = document.getElementById('btn-19');
var btn20 = document.getElementById('btn-20');


var inp1 = document.getElementById('val1');
var inp2 = document.getElementById('val2');
var inp3 = document.getElementById('val3');
var inp4 = document.getElementById('val4');
var inp5 = document.getElementById('val5');
var inp6 = document.getElementById('val6');
var inp7 = document.getElementById('val7');
var inp8 = document.getElementById('val8');
var inp9 = document.getElementById('val9');
var inp10 = document.getElementById('val10');
var inp11 = document.getElementById('val11');
var inp12 = document.getElementById('val12');
// var inp13 = document.getElementById('val13');
// var inp14 = document.getElementById('val14');
// var inp15 = document.getElementById('val15');
// var inp16 = document.getElementById('val16');
// var inp17 = document.getElementById('val17');
// var inp18 = document.getElementById('val18');
// var inp19 = document.getElementById('val19');
// var inp20 = document.getElementById('val20');
var d1 = document.getElementById("date1");
var d2 = document.getElementById("date2");
var d3 = document.getElementById("date3");
var d4 = document.getElementById("date4");
var d5 = document.getElementById("date5");
var d6 = document.getElementById("date6");
var d7 = document.getElementById("date7");
var d8 = document.getElementById("date8");
var d9 = document.getElementById("date9");
var d10 = document.getElementById("date10");
var d11 = document.getElementById("date11");
var d12 = document.getElementById("date12");

var din = document.getElementById('tareek');

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 01; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = day + "-" + month + "-" + year;




localStorage.setItem("date", newdate);
din.value = localStorage.getItem("date");




inp1.value = localStorage.getItem("key1");
inp2.value = localStorage.getItem("key2");
inp3.value = localStorage.getItem("key3");
inp4.value = localStorage.getItem("key4");
inp5.value = localStorage.getItem("key5");
inp6.value = localStorage.getItem("key6");
inp7.value = localStorage.getItem("key7");
inp8.value = localStorage.getItem("key8");
inp9.value = localStorage.getItem("key9");
inp10.value = localStorage.getItem("key10");
inp11.value = localStorage.getItem("key11");
inp12.value = localStorage.getItem("key12");
// inp13.value = localStorage.getItem("key13");
// inp14.value = localStorage.getItem("key14");
// inp15.value = localStorage.getItem("key15");
// inp16.value = localStorage.getItem("key16");
// inp17.value = localStorage.getItem("key17");
// inp18.value = localStorage.getItem("key18");
// inp19.value = localStorage.getItem("key19");
// inp20.value = localStorage.getItem("key20");

d1.value = localStorage.getItem("dat1");
d2.value = localStorage.getItem("dat2");
d3.value = localStorage.getItem("dat3");
d4.value = localStorage.getItem("dat4");
d5.value = localStorage.getItem("dat5");
d6.value = localStorage.getItem("dat6");
d7.value = localStorage.getItem("dat7");
d8.value = localStorage.getItem("dat8");
d9.value = localStorage.getItem("dat9");
d10.value = localStorage.getItem("dat10");
d11.value = localStorage.getItem("dat11");
d12.value = localStorage.getItem("dat12");



function increment1() {

    if (btn1) {
        inp1.value++;
        localStorage.setItem("key1", inp1.value);
    }
}

function increment2() {

    if (btn2) {
        inp2.value++;
        localStorage.setItem("key2", inp2.value);
    }
}

function increment3() {

    if (btn3) {
        inp3.value++;
        localStorage.setItem("key3", inp3.value);
    }
}

function increment4() {

    if (btn4) {
        inp4.value++;
        localStorage.setItem("key4", inp4.value);
    }
}

function increment5() {

    if (btn5) {
        inp5.value++;
        localStorage.setItem("key5", inp5.value);
    }
}

function increment6() {

    if (btn6) {
        inp6.value++;
        localStorage.setItem("key6", inp6.value);
    }
}

function increment7() {

    if (btn7) {
        inp7.value++;
        localStorage.setItem("key7", inp7.value);
    }
}

function increment8() {

    if (btn8) {
        inp8.value++;
        localStorage.setItem("key8", inp8.value);
    }
}

function increment9() {

    if (btn9) {
        inp9.value++;
        localStorage.setItem("key9", inp9.value);
    }
}

function increment10() {

    if (btn10) {
        inp10.value++;
        localStorage.setItem("key10", inp10.value);
    }
}

function increment11() {

    if (btn11) {
        inp11.value++;
        localStorage.setItem("key11", inp11.value);
    }
}

function increment12() {

    if (btn12) {
        inp12.value++;
        localStorage.setItem("key12", inp12.value);
    }
}

// function increment13() {

//     if (btn13) {
//         inp13.value++;
//         localStorage.setItem("key13", inp13.value);
//     }
// }

// function increment14() {

//     if (btn14) {
//         inp14.value++;
//         localStorage.setItem("key14", inp14.value);
//     }
// }

// function increment15() {

//     if (btn15) {
//         inp15.value++;
//         localStorage.setItem("key15", inp15.value);
//     }
// }

// function increment16() {

//     if (btn16) {
//         inp16.value++;
//         localStorage.setItem("key16", inp16.value);
//     }
// }

// function increment17() {

//     if (btn17) {
//         inp17.value++;
//         localStorage.setItem("key17", inp17.value);
//     }
// }

// function increment18() {

//     if (btn18) {
//         inp18.value++;
//         localStorage.setItem("key18", inp18.value);
//     }
// }

// function increment19() {

//     if (btn19) {
//         inp19.value++;
//         localStorage.setItem("key19", inp19.value);
//     }
// }

// function increment20() {

//     if (btn20) {
//         inp20.value++;
//         localStorage.setItem("key20", inp20.value);
//     }
// }


function resetting() {


    let text = "Press a button!\n For reset!";
    if (confirm(text) == true) {
        inp1.value = 0;
        inp2.value = 0;
        inp3.value = 0;
        inp4.value = 0;
        inp5.value = 0;
        inp6.value = 0;
        inp7.value = 0;
        inp8.value = 0;
        inp9.value = 0;
        inp10.value = 0;
        inp11.value = 0;
        inp12.value = 0;
        // inp13.value = 0;
        // inp14.value = 0;
        // inp15.value = 0;
        // inp16.value = 0;
        // inp17.value = 0;
        // inp18.value = 0;
        // inp19.value = 0;
        // inp20.value = 0;

        d1.value = "dd-mm-yyyy";
        d2.value = "dd-mm-yyyy";
        d3.value = "dd-mm-yyyy";
        d4.value = "dd-mm-yyyy";
        d5.value = "dd-mm-yyyy";
        d6.value = "dd-mm-yyyy";
        d7.value = "dd-mm-yyyy";
        d8.value = "dd-mm-yyyy";
        d9.value = "dd-mm-yyyy";
        d10.value = "dd-mm-yyyy";
        d11.value = "dd-mm-yyyy";
        d12.value = "dd-mm-yyyy";
        
        
        localStorage.clear();


    } 
    else {
    }
}

function setdate(){
    localStorage.setItem("dat1",d1.value);
    localStorage.setItem("dat2",d2.value);
    localStorage.setItem("dat3",d3.value);
    localStorage.setItem("dat4",d4.value);
    localStorage.setItem("dat5",d5.value);
    localStorage.setItem("dat6",d6.value);
    localStorage.setItem("dat7",d7.value);
    localStorage.setItem("dat8",d8.value);
    localStorage.setItem("dat9",d9.value);
    localStorage.setItem("dat10",d10.value);
    localStorage.setItem("dat11",d11.value);
    localStorage.setItem("dat12",d12.value);

    localStorage.setItem("key1", inp1.value);
    localStorage.setItem("key2", inp2.value);
    localStorage.setItem("key3", inp3.value);
    localStorage.setItem("key4", inp4.value);
    localStorage.setItem("key5", inp5.value);
    localStorage.setItem("key6", inp6.value);
    localStorage.setItem("key7", inp7.value);
    localStorage.setItem("key8", inp8.value);
    localStorage.setItem("key9", inp9.value);
    localStorage.setItem("key10", inp10.value);
    localStorage.setItem("key11", inp11.value);
    localStorage.setItem("key12", inp12.value);

}

