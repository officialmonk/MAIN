$(document).ready(function(){
    
$("#burger").on('click', function () {
    $(".header-mobile").slideToggle();
})

var active1 = $("#all");
var active2 = $(".not-active2");
var active3 = $(".not-active3");
var active4 = $(".not-active4");
var active5 = $(".not-active5");

var remove_active = $(".active_filter");
var remove_active2 = $(".not-active2");
var remove_active3 = $(".not-active3");
var remove_active4 = $(".not-active4");
var remove_active5 = $(".not-active5");


$("#all").on('click', function () {
    remove_active.removeClass('active_filter');
    remove_active2.removeClass('active_filter');
    remove_active3.removeClass('active_filter');
    remove_active4.removeClass('active_filter');
    remove_active5.removeClass('active_filter');
    active1.addClass('active_filter');
    $(".divs").css({"display": "flex"})
})

$(".not-active2").on('click', function () {
    remove_active.removeClass('active_filter');
    remove_active2.removeClass('active_filter');
    remove_active3.removeClass('active_filter');
    remove_active4.removeClass('active_filter');
    remove_active5.removeClass('active_filter');
    active2.addClass('active_filter');
    $(".Web_template, .User_interface, .Mock-up").css({"display": "none"})
    $(".Print_template").css({"display": "flex"})
})

$(".not-active3").on('click', function () {
    remove_active.removeClass('active_filter');
    remove_active2.removeClass('active_filter');
    remove_active3.removeClass('active_filter');
    remove_active4.removeClass('active_filter');
    remove_active5.removeClass('active_filter');
    active3.addClass('active_filter');
    $(".Print_template, .User_interface, .Mock-up").css({"display": "none"})
    $(".Web_template").css({"display": "flex"})
})

$(".not-active4").on('click', function () {
    remove_active.removeClass('active_filter');
    remove_active2.removeClass('active_filter');
    remove_active3.removeClass('active_filter');
    remove_active4.removeClass('active_filter');
    remove_active5.removeClass('active_filter');
    active4.addClass('active_filter');
    $(".Print_template, .Web_template, .Mock-up").css({"display": "none"})
    $(".User_interface").css({"display": "flex"})
})

$(".not-active5").on('click', function () {
    remove_active.removeClass('active_filter');
    remove_active2.removeClass('active_filter');
    remove_active3.removeClass('active_filter');
    remove_active4.removeClass('active_filter');
    remove_active5.removeClass('active_filter');
    active5.addClass('active_filter');
    $(".Print_template, .Web_template, .User_interface").css({"display": "none"})
    $(".Mock-up").css({"display": "flex"})
})
})

