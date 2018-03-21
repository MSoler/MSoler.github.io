"use strict";
$(document).ready(function() {
    $("#page").load("contents/home.html");
    $("ul.navbar-nav li").each(function() {
        $(this).click(function(e) {
            $("#page").load("contents/"+$(this).attr("loadpage")+".html");
            $("ul.navbar-nav li").removeClass("active");
            $(this).addClass("active");
        });
    });
});