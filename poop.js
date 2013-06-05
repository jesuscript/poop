Poop = function (msg, times) {
    if(typeof jQuery == 'undefined') {console.log("Poop: no jQuery found :("); return;}
    var $ = jQuery;
    times = times || 1;
    performPoop = function () {
        var $poop = $("<span/>").html("&#x1f4a9;" + msg + "&#x1f4a9;").css({
            position: "absolute",
            top: Math.round(Math.random * jQuery(window).height()),
            left: Math.round(Math.random()*$(window).width()),
            "font-size": "50px",
            "-webkit-transition": "-webkit-transform 1s linear",
            "-moz-transition": "-moz-transform 1s linear",
            "transition": "transform 1s linear",
            "z-index": 10000,
            "white-space": "nowrap",
            "font-family": "'Segoe UI Symbol', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        });
        $("body").append($poop);
        setTimeout(function () {
            var scaleAmount = 0.5 + Math.random() * 1.5;
            $poop.css("-webkit-transform", "translate(" + Math.round(Math.random()*($(window).width() - $poop.width()) - $poop.offset().left) + "px," + Math.round(Math.random()* ($(window).height() - $poop.height()) - $poop.offset().top) + "px) " + "scale(" + scaleAmount + "," + scaleAmount + ")")
        });
        setTimeout(function () {
            $poop.remove()
        }, 3000)
    };
    for(var i=0; i<times; i++) performPoop();
}
