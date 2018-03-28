$('.carousel video').on("stop ended", function(e) {
    var carItem = $(e.target).parent();
    if(carItem.hasClass("active")){
        carItem.parent().carousel('next');
        carItem.parent().carousel('pause'); //Needs to be added due to https://github.com/twbs/bootstrap/issues/5747
    }
});
$('.carousel').on("slid.bs.carousel",function(e){
    $(e.target).find("video").each(function(){
        this.pause();
        this.currentTime=0;
    });
    var video = $(e.target).find(".active").children().first().get(0).play();
});
