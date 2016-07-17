'use strict';
var items = document.getElementById('items');

var btnDel = document.getElementById('Delete_btn');
var btnCreate =  document.getElementById('Create');
var btnTTop = document.getElementById("top_btn");
var btnSelectFirst = document.getElementById("first_btn");
var btnSelectLast = document.getElementById("last_btn");
var btnSelectNext = document.getElementById("next_btn");
var btnSelectPrevious = document.getElementById("previous_btn");


btnCreate.addEventListener('click', function () {
    //Create new el
    var newEl = document.createElement('li');
    newEl.innerHTML = "NEW";
    //last children
    items.appendChild(newEl);
});


btnDel.addEventListener('click', function () {
    items.removeChild(items.lastElementChild);
});

btnTTop.addEventListener('click', function () {
    var newEl = document.createElement('li');
    newEl.innerHTML = "NEW";
    items.insertBefore (newEl,items.firstElementChild);
});

 btnSelectFirst.addEventListener('click', function (){
     delActive();
     var firstChild = items.firstElementChild;
     //add class
     firstChild.classList.add('active');
  
});

function delActive () {
    var activeNow = document.getElementsByClassName('active');
    if (activeNow[0])
        {
            activeNow[0].classList.remove('active');
        }
};

 btnSelectLast.addEventListener('click', function (){
     delActive();
     var lastChild = items.lastElementChild;
     //add class
     lastChild.classList.add('active');
  
});

btnSelectNext.addEventListener('click', function () {
    var children = items.children;
    for (var key in children)
        {
            if ( children[key].classList.contains('active'))
                {
                    if(key == children.length-1)
                        {
                            children[key].classList.remove('active'); 
                            children[0].classList.add('active');
                            break;
                        }
                    children[key].classList.remove('active');   
                    children[+key+1].classList.add('active');
                    break;                   
                }       
        }
});

btnSelectPrevious.addEventListener('click', function () {
    var children = items.children;
    for (var key in children)
        {
            if ( children[key].classList.contains('active'))
                {
                    if(key == 0)
                        {
                            children[key].classList.remove('active'); 
                            children[children.length-1].classList.add('active');
                            break;
                        }
                    children[key].classList.remove('active');   
                    children[+key-1].classList.add('active');
                    break;                   
                }       
        }
});

/*
var btnPrevious =  document.getElementById('previous_btn');
btnPrevious.addEventListener('click', function () {
    var newEl = document.createElement('li');
    newEl.innerHTML = "NEW";
    var lastEl =document.getElementById('activ');
    //last children
    items.insertBefore(newEl, lastEl);}
                            );
*/




