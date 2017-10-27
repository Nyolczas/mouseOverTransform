var box1 = document.querySelector('#layer1');
var box2 = document.querySelector('#layer2');
var box3 = document.querySelector('#layer3');
var box4 = document.querySelector('#layer4');
var box5 = document.querySelector('#layer5');

window.onmousemove = function(e){
    var xkoordinata = e.clientX;
    var ykoordinata = e.clientY;
    var txt = 'X: ' + xkoordinata + "<br>" + 'Y: ' + ykoordinata;

    box1.style.transform = 'translate(' + xkoordinata * 0.1 + 'px,' + ykoordinata * 0.1 + 'px)';
    box2.style.transform = 'translate(' + xkoordinata * 0.3 + 'px,' + ykoordinata * 0.3 + 'px)';
    box3.style.transform = 'translate(' + xkoordinata * 0.5 + 'px,' + ykoordinata * 0.5 + 'px)';
    box4.style.transform = 'translate(' + xkoordinata * 0.7 + 'px,' + ykoordinata * 0.7 + 'px)';
    box5.style.transform = 'translate(' + xkoordinata * 0.9 + 'px,' + ykoordinata * 0.9 + 'px)';    
}

var WW = window.innerWidth;
var WH = window.innerHeight;

function setBox (b) {
    b.style.width = "8880px";
    b.style.height = "8880px";
    b.style.left = WW * -1 + "px";
    b.style.top = WH * -1 + "px";
}

setBox (box1);
setBox (box2);
setBox (box3);
setBox (box4);
setBox (box5);