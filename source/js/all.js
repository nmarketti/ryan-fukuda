jQuery( document ).ready(function($) {

$(window).on('load resize', function(){
$(".hero-wrapper").css("height", window.innerHeight);
});


// Scroll 2 ID
var $menu = $("#menu"),
    $window = $(window);
	$body = $("html, body")

$menu.on("click", "a", function(){
    var $this = $(this),
        href = $this.attr("href"),
        topY = $(href).offset().top;
		$('#toggle').toggleClass('active');
        $('#overlay').toggleClass('open');
   
    TweenMax.to($window, 1, {
        scrollTo:{
            y: topY, 
            autoKill: true
        }, 
        ease:Power2.easeInOut 
     });
  
  return false;
});  

$(".bookScroll").click(function(e) {
 TweenMax.to($window, 1, {
        scrollTo:{
            y: "#services",
            autoKill: true
        }, 
        ease:Power2.easeInOut 
     });
});


// Explore Projects Blue Panel Scroll Button
$(".projectsScroll").click(function(e) {
 TweenMax.to($window, 1, {
        scrollTo:{
            y: "#ventures",
            autoKill: true
        }, 
        ease:Power2.easeInOut 
     });
});


// Learn More Red Panel Scroll Button
$(".serviceScroll").click(function(e) {
 TweenMax.to($window, 1, {
        scrollTo:{
            y: "#services",
            autoKill: true
        }, 
        ease:Power2.easeInOut 
     });
});
	
// FAQ Scroll2ID
 $(document).ready(function() {
        $('html, body').hide();

        if (window.location.hash) {
            setTimeout(function() {
                $('html, body').scrollTop(0).show();
                $('html, body').animate({
                    scrollTop: $(window.location.hash).offset().top
					
                    })
            });
        }
        else {
            $('html, body').show();
        }
    });  


// Hamburger
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


// PRIMARY INTRO ANIMATIC

var  bluebar = $(".blue-bar"),
	 redbar = $(".red-bar"),
	 bluetitle = $(".blue-title"),
	 redtitle = $(".red-title"),
	 logotype = $('.logotype'),
	 // rfsymbol = $(".symbol-blue"),
	 bluewave = $(".blue-wave"),
	 redwave = $(".red-wave"),
	 left = $(".left-arrow"),
	 right = $(".right-arrow"),
	 social = $(".social-icon")

var hero = new TimelineMax();

hero.from(bluebar, 1, {yPercent:100, ease:Power4.easeInOut}, 0)
	.from(redbar, 1, {yPercent:-100, ease:Power4.easeInOut}, 0)
	.from(bluewave, .75, {left:-55, ease:Power4.easeInOut}, .5)
	.from(redwave, .75, {right:-55, ease:Power4.easeInOut}, .5)
	.from (bluetitle, 1, {css:{marginTop:50, opacity:0}, ease:Power4.easeInOut}, 1)
	.from (redtitle, 1,{css:{marginTop:-50, opacity:0}, ease:Power4.easeInOut}, 1)
	.from (left, 1,{css:{marginTop:35, opacity:0}, ease:Power4.easeInOut}, 1.25)
	.from (right, 1,{css:{marginTop:-35, opacity:0}, ease:Power4.easeInOut}, 1.25)
	.from (logotype, 1, {opacity:0, ease:Power4.easeInOUt}, 2.25)
	// .from (rfsymbol, 1, {opacity:1, rotation:90, ease:Power4.easeInOUt}, 2.25)
    .staggerFromTo(social, .85, {top:-75 },{top:0, ease:Power4.easeOut}, .10)

// LOGO FADE TRANSITION

var logofade = new TimelineMax();

logofade.to(".symbol-blue",1, {opacity:1, repeatDelay:1, repeat:-1, yoyo:true, rotation:360}, 1)
		.to(".symbol-red",1, {opacity:1, repeatDelay:1, repeat:-1, yoyo:true, rotation:360},3)

logofade.play();


// BLUE PANEL

var bluepanel = new TimelineMax({paused:true});

bluepanel.to(".blue-right-block", 1, {xPercent:-100, ease:Power4.easeInOut}, .45)
		 .to(".blue-left-block", 1, {xPercent:100, ease:Power4.easeInOut}, .25)
		 .to(".close", .5, {rotation:180, opacity:1}, .80)

$(".left-arrow").click(function(){ bluepanel.play() }) ;


$(".close, .projectsScroll").click(function(){ bluepanel.reverse() }) ;





// RED PANEL

var redpanel = new TimelineMax({paused:true});

redpanel.to(".red-right-block", 1, {xPercent:-100, ease:Power4.easeInOut}, .45)
		.to(".red-left-block", 1, {xPercent:100, ease:Power4.easeInOut}, .25)
		.to(".close", .5, {rotation:180, opacity:1}, .80)


$(".right-arrow").click(function(){ redpanel.play() }) ;

$(".close, .serviceScroll").click(function(){ redpanel.reverse() }) ;




/////////////////////////////////

// init controller
var ctrl = new ScrollMagic.Controller({
	addIndicators: true,
    globalSceneOptions: {
        triggerHook: 'onCenter'
    }
});

// Headers

var headers = new TimelineMax();

headers.from(".serviceHeader", .5, {yPercent:100, ease:Power4.EaseInOut} );

new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'#services',
})
.setTween(headers)
.addTo(ctrl);


var ventures = new TimelineMax();

ventures.from(".ventureHeader", .5, {yPercent:100, ease:Power4.EaseInOut} );

new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'#ventures',
})
.setTween(ventures)
.addTo(ctrl);

// Contact

var event = new TimelineMax();

event.from('.contactHeader', .5, {yPercent:100, ease:Power4.easeOut});


new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'#contact',
})
.setTween(event)
.addTo(ctrl);

// Blog Header
var blogHeader = new TimelineMax();

blogHeader.from('.blogHeader', .5, {yPercent:100, ease:Power4.easeOut});


new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'#blogHeader',
})
.setTween(blogHeader)
.addTo(ctrl);


// Energy Readings

var energy = new TimelineMax();
var paneltext = $(this).find(".panel-text");

energy.from(".energyOne", 1, {css:{marginTop:100, opacity:0}, ease:Power4.EaseInOut}, .30)
energy.staggerFromTo(paneltext, 1, {yPercent:100 }, {yPercent:0, ease:Power4.easeOut}, .10)
energy.from(".energy", 2, { opacity:0, ease:Power4.ease}, {opacity:1}, .80)
energy.from(".energyTwo", 1, {css:{marginTop:10, opacity:0}, ease:Power4.EaseInOut}, .60);


new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'#energyTrigger'
})
.setTween(energy)
.addTo(ctrl)

// Healing 

var healings = new TimelineMax();

healings.from(".divider-healings", .5, {yPercent:-100, ease:Power1.easeOut});


new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'.service-divider',
})
.setTween(healings)
.addTo(ctrl);


var healing = new TimelineMax();

healing.from(".healingOne", 1, {css:{marginTop:100, opacity:0}, ease:Power4.EaseInOut}, .30)
healing.staggerFromTo(".panel-text-energy", 1, {yPercent:100 }, {yPercent:0, ease:Power4.easeOut}, .10)
healing.from(".healing", 2, { opacity:0, ease:Power4.ease }, .80)
healing.from(".healingTwo", 1, {css:{marginTop:10, opacity:0}, ease:Power4.EaseInOut}, .60);


new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'#healingTrigger',
})
.setTween(healing)
.addTo(ctrl);


// Workshops

var workshop = new TimelineMax();

workshop.from($('.divider-workshops'), .5, {yPercent:-100, ease:Power1.easeOut});


new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'.workshop-divider-trigger',
})
.setTween(workshop)
.addTo(ctrl);


var workshop = new TimelineMax();

workshop.from(".workshopOne", 1, {css:{marginTop:100, opacity:0}, ease:Power4.EaseInOut}, .30)
workshop.staggerFromTo(".panel-text-workshop", 1, {yPercent:100 }, {yPercent:0, ease:Power4.easeOut}, .10)
workshop.from(".workshops", 2, { opacity:0, ease:Power4.ease }, .80)
workshop.from(".workshopTwo", 1, {css:{marginTop:10, opacity:0}, ease:Power4.EaseInOut}, .60);


new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'#workshopTrigger',
})
.setTween(workshop)
.addTo(ctrl);


// Events 

var event = new TimelineMax();

event.from($('.divider-events'), .5, {yPercent:-100, ease:Power1.easeOut});


new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'.events-divider-trigger',
})
.setTween(event)
.addTo(ctrl);


var workshop = new TimelineMax();

event.from(".eventOne", 1, {css:{marginTop:100, opacity:0}, ease:Power4.EaseInOut}, .30)
event.staggerFromTo(".panel-text-events", 1, {yPercent:100 }, {yPercent:0, ease:Power4.easeOut}, .10)
event.from(".events", 2, { opacity:0, ease:Power4.ease }, .80)
event.from(".eventTwo", 1, {css:{marginTop:10, opacity:0}, ease:Power4.EaseInOut}, .60);


new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'#eventTrigger',
})
.setTween(event)
.addTo(ctrl);

// Ventures

var venturesContent = new TimelineMax();

venturesContent.from(".venture-one", 1, {yPercent:20, opacity:0, ease:Power4.EaseInOut}, .10);
venturesContent.from(".venture-two", 1, {yPercent:20, opacity:0, ease:Power4.EaseInOut}, .20);
venturesContent.from(".venture-three", 1, {yPercent:20, opacity:0, ease:Power4.EaseInOut}, .30);
venturesContent.from(".venture-four", 1, {yPercent:5, opacity:0, ease:Power4.EaseInOut}, .40);

venturesContent.from(".venture-five", 1, {yPercent:20, opacity:0, ease:Power4.EaseInOut}, .50);
venturesContent.from(".venture-six", 1, {yPercent:20, opacity:0, ease:Power4.EaseInOut}, .60);
venturesContent.from(".venture-seven", 1, {yPercent:20, opacity:0, ease:Power4.EaseInOut}, .70);
venturesContent.from(".venture-eight", 1, {yPercent:5, opacity:0, ease:Power4.EaseInOut}, .80);



new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'#ventureTrigger',
})
.setTween(venturesContent)
.addTo(ctrl);

// Blog

var blogContent = new TimelineMax();

blogContent.staggerFrom(".blogStagger", 1, {yPercent:5, opacity:0, ease:Power4.EaseInOut}, .10);



new ScrollMagic.Scene({
	triggerHook:0,
	triggerElement:'#blogTrigger',
})
.setTween(blogContent)
.addTo(ctrl);


});