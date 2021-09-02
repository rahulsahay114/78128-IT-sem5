function press() {
    console.log('pressed');
    }

function doRed() {
    document.getElementById("text").style.color = 'red';
}

function doGreen() {
    document.getElementById("text").style.color = 'green';
}

function doBlue() {
    document.getElementById("text").style.color = 'blue';
}

function sizeTen() {
    document.getElementById("text").style.fontSize = '1.2em';
}


red = document.getElementById("redButton");
green = document.getElementById("greenButton");
blue = document.getElementById("blueButton");

red.addEventListener('click', doRed, false);
green.addEventListener('click', doGreen, false);
blue.addEventListener('click', doBlue, false);

////directing to a function on event click via an event listener;  Change size to 10
b10 = document.getElementById("ten");
b10.addEventListener('click', sizeTen, false);

//using an anonymous function here, Change size to 20
document.getElementById("twenty").addEventListener('click', function(){
    document.getElementById("text").style.fontSize = '1.4em';
}, false);

//using an anonymous function here, Change Size to 30
document.getElementById("thirty").addEventListener('click', function(){
    document.getElementById("text").style.fontSize = '1.6em';
}, false);

document.getElementById("arial").addEventListener('click', function(){
    document.getElementById("text").style.fontFamily = 'Arial';
}, false);

document.getElementById("courier").addEventListener('click', function(){
    document.getElementById("text").style.fontFamily = 'Courier New';
}, false);

document.getElementById("garamond").addEventListener('click', function(){
    document.getElementById("text").style.fontFamily = 'Garamond';
}, false);


