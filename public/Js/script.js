/*1. `beforeBegin` -- перед `elem`.
2. `afterBegin` -- внутрь `elem`, в самое начало.
3. `beforeEnd` -- внутрь `elem`, в конец.
4. `afterEnd` -- после `elem`.*/
(function () {
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
    
    items.insertAdjacentHTML ('beforeEnd', "<li>NEW</li>")
});

btnDel.addEventListener('click', function () {
    
    items.removeChild(items.lastElementChild);
});

btnTTop.addEventListener('click', function () {
    
     items.insertAdjacentHTML ('afterBegin', "<li>NEW</li>")  
});

btnSelectFirst.addEventListener('click', function (){ 
    
     /* Является такая запись говнокодом? */
     delActive();
     items.firstElementChild.className.add('active');
});

function delActive () {
    
    items.classList.contains('avtive').remove('avtive');
};

btnSelectLast.addEventListener('click', function (){
    
     items.lastElementChild.className.add('avtive');
});

btnSelectNext.addEventListener('click', function () {
    
     var children = items.children;
    for (var key in children)
        {
            if ( children[key].classList.contains('active'))
                {
                    if(key == 0)
                        {
                            children[key].classList.remove('active'); 
                            children[children.length+1].classList.add('active');
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
} () );

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




