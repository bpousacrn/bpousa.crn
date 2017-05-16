
function aco1() {
    var x = document.getElementById('content1');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function aco2() {
    var x = document.getElementById('content2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function aco3() {
    var x = document.getElementById('content3');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function cross(x) {
    x.classList.toggle("change");
}

function drop() {
    document.getElementById("list").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function canvia1(){
var estrella=document.getElementById("star1");

    if (estrella.src.match("img/stare.png")) {
        estrella.src="img/starf.png";
    } else if(estrella.src="img/starf.png"){
        estrella.src="img/stare.png";

    };

}
function canvia2(){
var estrella=document.getElementById("star2");

    if (estrella.src.match("img/stare.png")) {
        estrella.src="img/starf.png";
    } else if(estrella.src="img/starf.png"){
        estrella.src="img/stare.png";

    };

}
function canvia3(){
var estrella=document.getElementById("star3");

    if (estrella.src.match("img/stare.png")) {
        estrella.src="img/starf.png";
    } else if(estrella.src="img/starf.png"){
        estrella.src="img/stare.png";

    };

}
function canvia4(){
var estrella=document.getElementById("star4");

    if (estrella.src.match("img/stare.png")) {
        estrella.src="img/starf.png";
    } else if(estrella.src="img/starf.png"){
        estrella.src="img/stare.png";

    };

}
function canvia5(){
var estrella=document.getElementById("star5");

    if (estrella.src.match("img/stare.png")) {
        estrella.src="img/starf.png";
    } else if(estrella.src="img/starf.png"){
        estrella.src="img/stare.png";

    };

}
