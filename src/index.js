import * as $ from 'jquery';


import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

$('#trigger').hover(function(){
    $('#list').fadeIn();
});

$('#trigger').mouseenter(function(){
    $('#table').show();
    $('#list').hide();
});

$('.element_1').mouseleave(function(){
    $('#table').hide();
    $('#list').show();

});