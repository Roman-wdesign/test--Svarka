import * as $ from 'jquery';


import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

$('#trigger').hover(function(){
    $('#list').fadeIn();
    $('#table').hide();
});

$('#trigger').mouseenter(function(){
    $('#table').show();
    $('#list').hide();
});

$('.element_1').mouseleave(function(){
    $('#table').hide();
    $('#list').show();

});


//#list change name in HTML

let table = document.getElementsByClassName('name_of');
let editingTd;

table.onclick = function(event){
    let target = event.target.closest('.edit-cancel,.edit-ok,td');

    if (!table.contains(target)) return;

    if (target.className == 'edit-cancel') {
        finishTdEdit(editingTd.elem, false);
    } else if (target.className == 'edit-ok') {
        finishTdEdit(editingTd.elem, true);
    } else if (target.nodeName == 'TD') {
        if (editingTd) return;

        makeTdEditable(target);
    }
};


document.querySelectorAll('.col').forEach(e => {
    e.draggable = true;
    e.ondragstart = e => {
        e.dataTransfer.setData("id", e.target.id);
        e.target.classList.add('dragging');
    }
    e.ondragover = e => {
        let old = document.querySelector('.over');
        old && old.classList.remove('over')
        e.target.classList.add('over');
        e.preventDefault();
    };
    e.ondrop = e => {
        let old = document.querySelector('.dragging');
        old && old.classList.remove('dragging')
        old = document.querySelector('.over');
        old && old.classList.remove('over');
        let v = e.target.innerHTML;
        let fromEl = document.querySelector('#'+e.dataTransfer.getData('id'));
        e.target.innerHTML = fromEl.innerHTML;
        fromEl.innerHTML = v;

    };
})
