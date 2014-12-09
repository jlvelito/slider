$(document).ready(function(){

	$.fn.animateRotate = function(angle, duration, easing, complete) {
    return this.each(function() {
        var $elem = $(this);

        $({deg: 0}).animate({deg: angle}, {
            duration: duration,
            easing: easing,
            step: function(now) {
                $elem.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            },
            complete: complete || $.noop
        });
    });
};
	

	$( '.cycle-slideshow' ).on( 'cycle-after', function( currSlide, nextSlide, opts ) {
    		var caption = $(".cycle-slideshow").data("cycle.opts").currSlide;
        	var cancion = caption - 1;

			$('.utilitaria').animate({marginLeft:54,opacity:0},800);
        	$('#regla p').removeClass('active');
        	$('#regla p').removeClass('uctive');
        	$('#regla p').removeClass('iniciado');
        	$('#regla p:eq('+cancion+')').addClass('uctive');
        	if(cancion=='-1'){
        		cancion = 0;
        	$('#regla p').removeClass('iniciado');
        	}
        	var usarreg = $('#regla p.uctive').attr('rel');
        	if(usarreg==0){
        		$('#regla p').removeClass('active');
        		$('#regla p').removeClass('uctive');
        		$('#regla p').addClass('iniciado');
        		$('#regla p.none').removeClass('iniciado');
		$('#evo').removeClass('activao');
		soundManager.pauseAll();
        	}
        	if(usarreg==1){

        	$('#regla p').removeClass('none');
        		primeraanima();
        	}
        	if(usarreg==2){
        	$('#regla p').removeClass('none');
        		segundaanima();
        	}
        	if(usarreg==3){
        	$('#regla p').removeClass('none');
        		terceraanima();
        	}
        	if(usarreg==4){
        	$('#regla p').removeClass('none');
        		cuartaanima();
        	}
        	if(usarreg==5){
        	$('#regla p').removeClass('none');
        		quintaanima();
        	}
        	if(usarreg==6){
        		sextaanima();
        	}
	});

	$('#regla p').click(function(){
		var direction = $(this).attr('rel');
		$('.cycle-slideshow').cycle('goto', direction);
	});

	/*$('.fakeizq li a').click(function(event){
		event.preventDefault();
		var direction2 = $(this).attr('rel');
		$('.fakeder').cycle('goto', direction2);
		$('.fakeizq li a').removeClass('active');
		$(this).addClass('active');
		if(direction2==1){
			sextaanima();
		}
	});*/




	/* explosive */


	/* explosive */





	$('#evo').click(function(){
		$('.cycle-slideshow').cycle('goto', '6');

        	$('#regla p').removeClass('iniciado');
		sextaanima();
	});

	$('#scolest').click(function(event){
		event.preventDefault();
		$('.cycle-slideshow').cycle('goto', '7');
	});

	$('.cycle-nexto').click(function(){
		$('#regla p').removeClass('active');
        		$('#regla p').removeClass('uctive');
        		$('#regla p').removeClass('none');
		$('.cycle-slideshow').cycle('goto', '0');

        		$('#regla p').addClass('iniciado');


        		
	});

	$('.cycle-nexto4').click(function(){
		$('.fakeizq li a').removeClass('active');
		$('#fakeli2').addClass('active');
		$('.fakeder').cycle('goto', '1');	
	$('.catalism').removeClass('activer');	
		$('.cycle-nexto3').addClass('activer');
		$('.cycle-prev2').addClass('activer');
		$('#sexta .u48 img').animate({marginTop:41},500);
	$('#sexta .full img').animate({marginTop:0},500);
	$('#sexta .u60 img').animate({marginTop:28},500);
	$('#sexta .u90 img').animate({marginTop:8},500);
	$('#sexta .u80 img').animate({marginTop:13},500);
	$('#sexta .u70 img').animate({marginTop:22},500);
	$('#sexta .u10 img').animate({marginTop:48},500);
	});

	$('.cycle-nexto3').click(function(){
		$('.fakeizq li a').removeClass('active');
		$('#fakeli3').addClass('active');
		$('.fakeder').cycle('goto', '2');	
	$('.catalism').removeClass('activer');	
		$('.cycle-nexto2').addClass('activer');
		$('.cycle-prev3').addClass('activer');
	});

	$('.cycle-nexto2').click(function(){
		$('.fakeizq li a').removeClass('active');
		$('#fakeli4').addClass('active');
		$('.fakeder').cycle('goto', '3');	
	$('.catalism').removeClass('activer');	
		$('.cycle-nexto').addClass('activer');
		$('.cycle-prev4').addClass('activer');
	});

	$('.cycle-prev2').click(function(){
		$('.fakeizq li a').removeClass('active');
		$('#fakeli1').addClass('active');
		$('.fakeder').cycle('goto', '0');	
	$('.catalism').removeClass('activer');	
		$('.cycle-nexto4').addClass('activer');
		$('#sexta .cycle-prev').addClass('activer');

	});

	$('.cycle-prev3').click(function(){
		$('.fakeizq li a').removeClass('active');
		$('#fakeli2').addClass('active');
		$('.fakeder').cycle('goto', '1');	
	$('.catalism').removeClass('activer');	
		$('.cycle-nexto3').addClass('activer');
		$('.cycle-prev2').addClass('activer');

	});

	$('.cycle-prev4').click(function(){
		$('.fakeizq li a').removeClass('active');
		$('#fakeli3').addClass('active');
		$('.fakeder').cycle('goto', '2');	
	$('.catalism').removeClass('activer');	
		$('.cycle-nexto2').addClass('activer');
		$('.cycle-prev3').addClass('activer');

	});


	$('#fakeli1').click(function(){
		$('.fakeizq li a').removeClass('active');
		$('#fakeli1').addClass('active');
		$('.fakeder').cycle('goto', '0');	
	$('.catalism').removeClass('activer');	
		$('.cycle-nexto4').addClass('activer');
		$('#sexta .cycle-prev').addClass('activer');
	});

	$('#fakeli2').click(function(){
		$('.fakeizq li a').removeClass('active');
		$('#fakeli2').addClass('active');
		$('.fakeder').cycle('goto', '1');	
	$('.catalism').removeClass('activer');	
		$('.cycle-nexto3').addClass('activer');
		$('#sexta .cycle-prev2').addClass('activer');
	});

	$('#fakeli3').click(function(){
		$('.fakeizq li a').removeClass('active');
		$('#fakeli3').addClass('active');
		$('.fakeder').cycle('goto', '2');	
	$('.catalism').removeClass('activer');	
		$('.cycle-nexto2').addClass('activer');
		$('#sexta .cycle-prev3').addClass('activer');
	});

	$('#fakeli4').click(function(){
		$('.fakeizq li a').removeClass('active');
		$('#fakeli4').addClass('active');
		$('.fakeder').cycle('goto', '3');	
	$('.catalism').removeClass('activer');	
		$('.cycle-nexto').addClass('activer');
		$('#sexta .cycle-prev4').addClass('activer');
	});


	$('.fakeder').cycle();

	/*$('.cycle-slideshow2').cycle();*/


	/* animaciones */
	
	function primeraanima(){

		/*quinta rsemble*/

		soundManager.pauseAll();

		$('#evo').removeClass('activao');	

		$('.fakeizq li a').removeClass('active');

		$('#fakeli1').addClass('active');
	$('#quinto .texto_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .facebook_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .music_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .video_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .film_ .contenedor_ .contenido_').stop();
	$('#quinto .film_ .contenedor_ .contenido_').animate({width:0},10);

	/*quinta rsemble*/
	s.record({
pageName: "/internet/schnelles-internet/evolution-internetverbindung/akustikkoppler",
channel: "Sales/Internet",
prop23: "Sales",
prop24: "Internet",
prop30: "DE",
events: "event9"
});

	$('#primero .texto_ .contenedor_ .contenido_').animate({width:305},300000);
	$('#primero .facebook_ .contenedor_ .contenido_').animate({width:305},3330000);
	$('#primero .music_ .contenedor_ .contenido_').animate({width:305},11520000);
	$('#primero .video_ .contenedor_ .contenido_').animate({width:305},120960000);
	$('#primero .film_ .contenedor_ .contenido_').animate({width:305},2592000000);
        	$('#regla p').removeClass('active');
	$('#ak').addClass('active');
	$('#primero .u48 img').animate({marginTop:42},300);
	$('#primero .u50 img').animate({marginTop:31},300);
	$('#primero .utilitaria').animate({marginLeft:0,opacity:1},800);
	$('#primero .full img').animate({marginTop:0},300);
	setTimeout((function() {
                    $('#primero .local_cir').fadeIn('slow');
                }), 1000);
		$('#evo').removeClass('activao');

	};

	var song = $('#song');

	function segundaanima(){

		/*quinta rsemble*/

		$('#evo').removeClass('activao');	

		$('.fakeizq li a').removeClass('active');

		$('#fakeli1').addClass('active');
	$('#quinto .texto_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .facebook_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .music_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .video_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .film_ .contenedor_ .contenido_').stop();
	$('#quinto .film_ .contenedor_ .contenido_').animate({width:0},10);

	/*quinta rsemble*/

	s.record({
pageName: "/internet/schnelles-internet/evolution-internetverbindung/telefonmodem",
channel: "Sales/Internet",
prop23: "Sales",
prop24: "Internet",
prop30: "DE",
events: "event9"
});

	$('#segundo .texto_ .contenedor_ .contenido_').animate({width:305},22000);
	$('#segundo .facebook_ .contenedor_ .contenido_').animate({width:305},144000);
	$('#segundo .music_ .contenedor_ .contenido_').animate({width:305},498000);
	$('#segundo .video_ .contenedor_ .contenido_').animate({width:305},5400000);
	$('#segundo .film_ .contenedor_ .contenido_').animate({width:305},138240000);
        	$('#regla p').removeClass('active');
	$('#tf').addClass('active');
	$('#segundo .circ1 .virt1 img').animateRotate(-25);
	$('#segundo .circ2 .virt1 img').animateRotate(-7);
	$('#segundo .full img').animate({marginTop:0},300);
	$('#segundo .u10 img').animate({marginTop:60},300);
	$('#segundo .u15 img').animate({marginTop:55},300);
	$('#segundo .u90 img').animate({marginTop:8},300);
	$('#segundo .utilitaria').animate({marginLeft:0,opacity:1},800);
	/*song.get(0).play();*/
	setTimeout((function() {
                    $('#segundo .local_cir').fadeIn('slow');
                }), 1000);
		$('#evo').removeClass('activao');
	};

	function terceraanima(){

		/*quinta rsemble*/

		soundManager.pauseAll();

		$('#evo').removeClass('activao');	

		$('.fakeizq li a').removeClass('active');

		$('#fakeli1').addClass('active');
	$('#quinto .texto_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .facebook_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .music_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .video_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .film_ .contenedor_ .contenido_').stop();
	$('#quinto .film_ .contenedor_ .contenido_').animate({width:0},10);

	/*quinta rsemble*/

	s.record({
pageName: "/internet/schnelles-internet/evolution-internetverbindung/isdn",
channel: "Sales/Internet",
prop23: "Sales",
prop24: "Internet",
prop30: "DE",
events: "event9"
});

	$('#tercero .texto_ .contenedor_ .contenido_').animate({width:305},19000);
	$('#tercero .facebook_ .contenedor_ .contenido_').animate({width:305},120000);
	$('#tercero .music_ .contenedor_ .contenido_').animate({width:305},438000);
	$('#tercero .video_ .contenedor_ .contenido_').animate({width:305},4680000);
	$('#tercero .film_ .contenedor_ .contenido_').animate({width:305},120960000);
        	$('#regla p').removeClass('active');
	$('#is').addClass('active');
	$('#tercero .circ1 .virt1 img').animateRotate(-118);
	$('#tercero .circ2 .virt1 img').animateRotate(-21);
	$('#tercero .u20 img').animate({marginTop:47},300);
	$('#tercero .u90 img').animate({marginTop:8},300);
	$('#tercero .u60 img').animate({marginTop:28},300);
	$('#tercero .utilitaria').animate({marginLeft:0,opacity:1},800);
	setTimeout((function() {
                    $('#tercero .local_cir').fadeIn('slow');
                }), 1000);
		$('#evo').removeClass('activao');

	};

	function cuartaanima(){

	/*quinta rsemble*/

	soundManager.pauseAll();

		$('#evo').removeClass('activao');	

		$('.fakeizq li a').removeClass('active');

		$('#fakeli1').addClass('active');
	$('#quinto .texto_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .facebook_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .music_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .video_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .film_ .contenedor_ .contenido_').stop();
	$('#quinto .film_ .contenedor_ .contenido_').animate({width:0},10);

	/*quinta rsemble*/

	s.record({
pageName: "/internet/schnelles-internet/evolution-internetverbindung/kabelmodem",
channel: "Sales/Internet",
prop23: "Sales",
prop24: "Internet",
prop30: "DE",
events: "event9"
});


	$('#cuarto .texto_ .contenedor_ .contenido_').animate({width:305},400);
	$('#cuarto .facebook_ .contenedor_ .contenido_').animate({width:305},4000);
	$('#cuarto .music_ .contenedor_ .contenido_').animate({width:305},14000);
	$('#cuarto .video_ .contenedor_ .contenido_').animate({width:305},150000);
	$('#cuarto .film_ .contenedor_ .contenido_').animate({width:305},3960000);
        	$('#regla p').removeClass('active');
	$('#km').addClass('active');
	$('#cuarto .circ1 .virt1 img').animateRotate(-25);
	$('#cuarto .circ2 .virt1 img').animateRotate(-4);
	$('#cuarto .circ1 .virt3 img').animateRotate(-180);
	$('#cuarto .utilitaria').animate({marginLeft:0,opacity:1},800);
	setTimeout((function() {
                    $('#cuarto .circ1 .virt4 img').stop().animateRotate(-54);
                    $('#cuarto .local_cir').fadeIn('slow');
                }), 1000);
	$('#cuarto .circ2 .virt3 img').animateRotate(-54);

	$('#cuarto .u48 img').animate({marginTop:35},300);
		$('#evo').removeClass('activao');
	};

	function quintaanima(){

		soundManager.pauseAll();

		$('.fakeizq li a').removeClass('active');

		$('#fakeli1').addClass('active');
	$('#quinto .texto_ .contenedor_ .contenido_').animate({width:305},5);
	$('#quinto .facebook_ .contenedor_ .contenido_').animate({width:305},50);
	$('#quinto .music_ .contenedor_ .contenido_').animate({width:305},190);
	$('#quinto .video_ .contenedor_ .contenido_').animate({width:305},2000);
	$('#quinto .film_ .contenedor_ .contenido_').animate({width:305},53300);
        	$('#regla p').removeClass('active');
	$('#gf').addClass('active');
	$('#quinto .circ1 .virt1 img').animateRotate(-47);
	$('#quinto .circ2 .virt1 img').animateRotate(-11);
	$('#quinto .circ1 .virt3 img').animateRotate(-180);
	setTimeout((function() {
                    $('#quinto .circ1 .virt4 img').stop().animateRotate(-108);
                    $('#quinto .local_cir').fadeIn('slow');
                }), 1100);
	$('#quinto .circ2 .virt3 img').animateRotate(-140);
	$('#quinto .u48 img').animate({marginTop:35},300);

	$('#quinto .u90 img').animate({marginTop:26},300);

	$('#quinto .utilitaria').animate({marginLeft:0,opacity:1},800);
		$('#evo').removeClass('activao');	

		$('#evo').removeClass('activao');	
		s.record({
pageName: "/internet/schnelles-internet/evolution-internetverbindung/glasfaser",
channel: "Sales/Internet",
prop23: "Sales",
prop24: "Internet",
prop30: "DE",
events: "event9"
});
	};

	function sextaanima(){

		soundManager.pauseAll();

		/*quinta rsemble*/

		$('#evo').removeClass('activao');	

		$('.fakeizq li a').removeClass('active');
        	$('#regla p').attr('class','none');
        	$('#regla p').removeClass('iniciado');
	$('#quinto .texto_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .facebook_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .music_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .video_ .contenedor_ .contenido_').animate({width:0},10);
	$('#quinto .film_ .contenedor_ .contenido_').stop();
	$('#quinto .film_ .contenedor_ .contenido_').animate({width:0},10);

	/*quinta rsemble*/

	$('#sexta .u48 img').animate({marginTop:41},500);
	$('#sexta .full img').animate({marginTop:0},500);
	$('#sexta .u60 img').animate({marginTop:28},500);
	$('#sexta .u65 img').animate({marginTop:35},500);
	$('#sexta .u90 img').animate({marginTop:8},500);
	$('#sexta .u80 img').animate({marginTop:13},500);
	$('#sexta .u70 img').animate({marginTop:22},500);
	$('#sexta .u10 img').animate({marginTop:48},500);
	$('.catalism').removeClass('activer');
	$('.cycle-nexto4').addClass('activer');
	$('#sexta .cycle-prev').addClass('activer');

		$('#fakeli1').addClass('active');

		$('.fakeder').cycle('goto', '0');	
		$('#evo').addClass('activao');	
		$('#regla #ak').removeClass('iniciado');
	};


	/* animaciones */


$('.brands img').qtip({
	position: {
        my: 'bottom right',  // Position my top left...
        at: 'top center'
    },
    style: {
        classes: 'qtip-light qtip-shadow'
    }
});


/* infos */


/*$('.icons_info p img').mouseover(function(){
	var regular = $(this).parent().attr('rel');
	$('.icons_info p').removeClass('active');
	$(this).parent().addClass('active');
	$('.burbujas').stop().delay(1000).css('display','none');
	$(this).parent().parent().parent().find('.burbujas').css('display','block');
	$('.burbuja').css('display','none');
	$('#'+regular+'').fadeIn('slow');
});

/*$('.icons_info p img').mouseout(function(){
	$('.burbuja').fadeOut('slow');
	$('.icons_info p').removeClass('active');
	$('.burbujas').stop().delay(1000).css('display','none');
});*/

/*$('.cerrar_').click(function(){
	$('.burbuja').fadeOut('slow');
	$('.icons_info p').removeClass('active');
	$('.burbujas').stop().delay(1000).css('display','none');
});*/

/* infos */

$('.fancyboxinline').fancybox({
	fitToView	: false,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
		width       : '960px',
		height      : '705px',
		padding     : 0
	});

$('.fancybox').fancybox({
	fitToView	: false,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
		width       : '630px',
		height      : '460px',
		padding     : 0
	});


/*

$( '#cicla2' ).on( 'cycle-after', function( currSlide, nextSlide, opts, slideCount ) {
    		var caption50 = $("#cicla2").data("cycle.opts").currSlide;
    		var caption51 = caption50+1;
    		var caption52 = $("#cicla2").data("cycle.opts").slideCount;
        	$('#segundo .infos .estruc strong').text(''+caption51+'/'+caption52+'');
	});
$( '#cicla3' ).on( 'cycle-after', function( currSlide, nextSlide, opts, slideCount ) {
    		var caption50 = $("#cicla3").data("cycle.opts").currSlide;
    		var caption51 = caption50+1;
    		var caption52 = $("#cicla3").data("cycle.opts").slideCount;
        	$('#tercero .infos .estruc strong').text(''+caption51+'/'+caption52+'');
	});
$( '#cicla4' ).on( 'cycle-after', function( currSlide, nextSlide, opts, slideCount ) {
    		var caption50 = $("#cicla4").data("cycle.opts").currSlide;
    		var caption51 = caption50+1;
    		var caption52 = $("#cicla4").data("cycle.opts").slideCount;
        	$('#cuarto .infos .estruc strong').text(''+caption51+'/'+caption52+'');
	});
$( '#cicla5' ).on( 'cycle-after', function( currSlide, nextSlide, opts, slideCount ) {
    		var caption50 = $("#cicla5").data("cycle.opts").currSlide;
    		var caption51 = caption50+1;
    		var caption52 = $("#cicla5").data("cycle.opts").slideCount;
        	$('#quinto .infos .estruc strong').text(''+caption51+'/'+caption52+'');
	});

*/

$('.flerriba').click(function(){
	var naturaleza = $(this).parent().parent().children('ul').children('li').size();
	var naturaleza3 = $(this).parent().parent();
	var naturaleza2 = naturaleza3.find('.sustive').index();
	if(naturaleza2>0){
		var naturaleza4 = naturaleza2-1;
		naturaleza3.find('li').removeClass('sustive');
		naturaleza3.find('li').eq(naturaleza4).addClass('sustive');
		var naturaleza5 = naturaleza3.find('.sustive').index()+1;
		naturaleza3.find('strong.rep').text(''+naturaleza5+'/'+naturaleza+'')
	}
	if(naturaleza2==0){
		var naturaleza4 = naturaleza-1;
		naturaleza3.find('li').removeClass('sustive');
		naturaleza3.find('li').eq(naturaleza4).addClass('sustive');
		var naturaleza5 = naturaleza3.find('.sustive').index()+1;
		naturaleza3.find('strong.rep').text(''+naturaleza5+'/'+naturaleza+'')
	}
});

$('.flebajo').click(function(){
	var naturaleza = $(this).parent().parent().children('ul').children('li').size();
	var naturaleza3 = $(this).parent().parent();
	var naturaleza2 = naturaleza3.find('.sustive').index();
	var naturaleza6 = naturaleza-1;
	if(naturaleza2<naturaleza){
		var naturaleza4 = naturaleza2+1;
		naturaleza3.find('li').removeClass('sustive');
		naturaleza3.find('li').eq(naturaleza4).addClass('sustive');
		var naturaleza5 = naturaleza3.find('.sustive').index()+1;
		naturaleza3.find('strong.rep').text(''+naturaleza5+'/'+naturaleza+'')
	}
	if(naturaleza2==naturaleza6){
		var naturaleza4 = 0;
		naturaleza3.find('li').removeClass('sustive');
		naturaleza3.find('li').eq(naturaleza4).addClass('sustive');
		var naturaleza5 = naturaleza3.find('.sustive').index()+1;
		naturaleza3.find('strong.rep').text(''+naturaleza5+'/'+naturaleza+'')
	}
});

var hash = document.URL.substr(document.URL.indexOf('#')+1);


if(hash=="akustikkoppler"){
	$('#ak').trigger('click');
}
if(hash=="telefonmodem"){
	$('#tf').trigger('click');
}
if(hash=="isdn"){
	$('#is').trigger('click');
}
if(hash=="kabelmodem"){
	$('#km').trigger('click');
}
if(hash=="glasfaser"){
	$('#gf').trigger('click');
}


$(".fancyboxinline2").fancybox({
		fitToView	: false,
		width		: '300px',
		height		: '130px',
		autoSize	: false,
		closeClick	: false,
		content		: '<div class="spike"><p>Einfach diesen Code kopieren, um die Infografik des Slides «Web Evolution auf einen Blick» in Ihre Website einzubinden und Ihre Leser zu begeistern:</p> <strong>&lt;img arc=&quot;http://www.upc-cablecom.ch/content/dam/www-upc-cablecom-ch/other/slider/images/igembed.png&quot; alt=&quot;&quot; style=&quot;display:block; width: 600px; height:2800px; float:none; clear:both;&quot; /&gt;</strong></div>',
		openEffect	: 'elastic',
		closeEffect	: 'elastic'
	});

















});