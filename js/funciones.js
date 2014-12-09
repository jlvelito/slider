jq = jQuery.noConflict();

jq(document).ready(function(){

	jq.fn.animateRotate = function(angle, duration, easing, complete) {
    return this.each(function() {
        var jqelem = jq(this);

        jq({deg: 0}).animate({deg: angle}, {
            duration: duration,
            easing: easing,
            step: function(now) {
                jqelem.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            },
            complete: complete || jq.noop
        });
    });


};



	

	jq( '.cycle-slideshow' ).on( 'cycle-after', function( currSlide, nextSlide, opts ) {
    		var caption = jq(".cycle-slideshow").data("cycle.opts").currSlide;
        	var cancion = caption - 1;

			jq('.utilitaria').animate({marginLeft:54,opacity:0},800);
        	jq('#regla p').removeClass('active');
        	jq('#regla p').removeClass('uctive');
        	jq('#regla p').removeClass('iniciado');
        	jq('#regla p:eq('+cancion+')').addClass('uctive');
        	if(cancion=='-1'){
        		cancion = 0;
        	jq('#regla p').removeClass('iniciado');
        	}
        	var usarreg = jq('#regla p.uctive').attr('rel');
        	if(usarreg==0){
        		jq('#regla p').removeClass('active');
        		jq('#regla p').removeClass('uctive');
        		jq('#regla p').addClass('iniciado');
        		jq('#regla p.none').removeClass('iniciado');
		jq('#evo').removeClass('activao');
		soundManager.pauseAll();
        	}
        	if(usarreg==1){

        	jq('#regla p').removeClass('none');
        		primeraanima();
        	}
        	if(usarreg==2){
        	jq('#regla p').removeClass('none');
        		segundaanima();
        	}
        	if(usarreg==3){
        	jq('#regla p').removeClass('none');
        		terceraanima();
        	}
        	if(usarreg==4){
        	jq('#regla p').removeClass('none');
        		cuartaanima();
        	}
        	if(usarreg==5){
        	jq('#regla p').removeClass('none');
        		quintaanima();
        	}
        	if(usarreg==6){
        		sextaanima();
        	}
	});

	jq('#regla p').click(function(){
		var direction = jq(this).attr('rel');
		jq('.cycle-slideshow').cycle('goto', direction);
	});

	/*jq('.fakeizq li a').click(function(event){
		event.preventDefault();
		var direction2 = jq(this).attr('rel');
		jq('.fakeder').cycle('goto', direction2);
		jq('.fakeizq li a').removeClass('active');
		jq(this).addClass('active');
		if(direction2==1){
			sextaanima();
		}
	});*/




	/* explosive */


	/* explosive */





	jq('#evo').click(function(){
		jq('.cycle-slideshow').cycle('goto', '6');

        	jq('#regla p').removeClass('iniciado');
		sextaanima();
	});

	jq('#scolest').click(function(event){
		event.preventDefault();
		jq('.cycle-slideshow').cycle('goto', '7');
	});

	jq('.cycle-nexto').click(function(){
		jq('#regla p').removeClass('active');
        		jq('#regla p').removeClass('uctive');
        		jq('#regla p').removeClass('none');
		jq('.cycle-slideshow').cycle('goto', '0');

        		jq('#regla p').addClass('iniciado');


        		
	});

	jq('.cycle-nexto4').click(function(){
		jq('.fakeizq li a').removeClass('active');
		jq('#fakeli2').addClass('active');
		jq('.fakeder').cycle('goto', '1');	
	jq('.catalism').removeClass('activer');	
		jq('.cycle-nexto3').addClass('activer');
		jq('.cycle-prev2').addClass('activer');
		jq('#sexta .u48 img').animate({marginTop:41},500);
	jq('#sexta .full img').animate({marginTop:0},500);
	jq('#sexta .u60 img').animate({marginTop:28},500);
	jq('#sexta .u90 img').animate({marginTop:8},500);
	jq('#sexta .u80 img').animate({marginTop:13},500);
	jq('#sexta .u70 img').animate({marginTop:22},500);
	jq('#sexta .u10 img').animate({marginTop:48},500);
	});

	jq('.cycle-nexto3').click(function(){
		jq('.fakeizq li a').removeClass('active');
		jq('#fakeli3').addClass('active');
		jq('.fakeder').cycle('goto', '2');	
	jq('.catalism').removeClass('activer');	
		jq('.cycle-nexto2').addClass('activer');
		jq('.cycle-prev3').addClass('activer');
	});

	jq('.cycle-nexto2').click(function(){
		jq('.fakeizq li a').removeClass('active');
		jq('#fakeli4').addClass('active');
		jq('.fakeder').cycle('goto', '3');	
	jq('.catalism').removeClass('activer');	
		jq('.cycle-nexto').addClass('activer');
		jq('.cycle-prev4').addClass('activer');
	});

	jq('.cycle-prev2').click(function(){
		jq('.fakeizq li a').removeClass('active');
		jq('#fakeli1').addClass('active');
		jq('.fakeder').cycle('goto', '0');	
	jq('.catalism').removeClass('activer');	
		jq('.cycle-nexto4').addClass('activer');
		jq('#sexta .cycle-prev').addClass('activer');

	});

	jq('.cycle-prev3').click(function(){
		jq('.fakeizq li a').removeClass('active');
		jq('#fakeli2').addClass('active');
		jq('.fakeder').cycle('goto', '1');	
	jq('.catalism').removeClass('activer');	
		jq('.cycle-nexto3').addClass('activer');
		jq('.cycle-prev2').addClass('activer');

	});

	jq('.cycle-prev4').click(function(){
		jq('.fakeizq li a').removeClass('active');
		jq('#fakeli3').addClass('active');
		jq('.fakeder').cycle('goto', '2');	
	jq('.catalism').removeClass('activer');	
		jq('.cycle-nexto2').addClass('activer');
		jq('.cycle-prev3').addClass('activer');

	});


	jq('#fakeli1').click(function(){
		jq('.fakeizq li a').removeClass('active');
		jq('#fakeli1').addClass('active');
		jq('.fakeder').cycle('goto', '0');	
	jq('.catalism').removeClass('activer');	
		jq('.cycle-nexto4').addClass('activer');
		jq('#sexta .cycle-prev').addClass('activer');
	});

	jq('#fakeli2').click(function(){
		jq('.fakeizq li a').removeClass('active');
		jq('#fakeli2').addClass('active');
		jq('.fakeder').cycle('goto', '1');	
	jq('.catalism').removeClass('activer');	
		jq('.cycle-nexto3').addClass('activer');
		jq('#sexta .cycle-prev2').addClass('activer');
	});

	jq('#fakeli3').click(function(){
		jq('.fakeizq li a').removeClass('active');
		jq('#fakeli3').addClass('active');
		jq('.fakeder').cycle('goto', '2');	
	jq('.catalism').removeClass('activer');	
		jq('.cycle-nexto2').addClass('activer');
		jq('#sexta .cycle-prev3').addClass('activer');
	});

	jq('#fakeli4').click(function(){
		jq('.fakeizq li a').removeClass('active');
		jq('#fakeli4').addClass('active');
		jq('.fakeder').cycle('goto', '3');	
	jq('.catalism').removeClass('activer');	
		jq('.cycle-nexto').addClass('activer');
		jq('#sexta .cycle-prev4').addClass('activer');
	});


	jq('.fakeder').cycle();

	/*jq('.cycle-slideshow2').cycle();*/


	/* animaciones */
	
	function primeraanima(){

		/*quinta rsemble*/

		soundManager.pauseAll();

		jq('#evo').removeClass('activao');	

		jq('.fakeizq li a').removeClass('active');

		jq('#fakeli1').addClass('active');
	jq('#quinto .texto_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .facebook_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .music_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .video_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .film_ .contenedor_ .contenido_').stop();
	jq('#quinto .film_ .contenedor_ .contenido_').animate({width:0},10);

	/*quinta rsemble*/
	s.record({
pageName: "/internet/schnelles-internet/evolution-internetverbindung/akustikkoppler",
channel: "Sales/Internet",
prop23: "Sales",
prop24: "Internet",
prop30: "DE",
events: "event9"
});

	jq('#primero .texto_ .contenedor_ .contenido_').animate({width:305},300000);
	jq('#primero .facebook_ .contenedor_ .contenido_').animate({width:305},3330000);
	jq('#primero .music_ .contenedor_ .contenido_').animate({width:305},11520000);
	jq('#primero .video_ .contenedor_ .contenido_').animate({width:305},120960000);
	jq('#primero .film_ .contenedor_ .contenido_').animate({width:305},2592000000);
        	jq('#regla p').removeClass('active');
	jq('#ak').addClass('active');
	jq('#primero .u48 img').animate({marginTop:42},300);
	jq('#primero .u50 img').animate({marginTop:31},300);
	jq('#primero .utilitaria').animate({marginLeft:0,opacity:1},800);
	jq('#primero .full img').animate({marginTop:0},300);
	setTimeout((function() {
                    jq('#primero .local_cir').fadeIn('slow');
                }), 1000);
		jq('#evo').removeClass('activao');

	};

	var song = jq('#song');

	function segundaanima(){

		/*quinta rsemble*/

		jq('#evo').removeClass('activao');	

		jq('.fakeizq li a').removeClass('active');

		jq('#fakeli1').addClass('active');
	jq('#quinto .texto_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .facebook_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .music_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .video_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .film_ .contenedor_ .contenido_').stop();
	jq('#quinto .film_ .contenedor_ .contenido_').animate({width:0},10);

	/*quinta rsemble*/

	s.record({
pageName: "/internet/schnelles-internet/evolution-internetverbindung/telefonmodem",
channel: "Sales/Internet",
prop23: "Sales",
prop24: "Internet",
prop30: "DE",
events: "event9"
});

	jq('#segundo .texto_ .contenedor_ .contenido_').animate({width:305},22000);
	jq('#segundo .facebook_ .contenedor_ .contenido_').animate({width:305},144000);
	jq('#segundo .music_ .contenedor_ .contenido_').animate({width:305},498000);
	jq('#segundo .video_ .contenedor_ .contenido_').animate({width:305},5400000);
	jq('#segundo .film_ .contenedor_ .contenido_').animate({width:305},138240000);
        	jq('#regla p').removeClass('active');
	jq('#tf').addClass('active');
	jq('#segundo .circ1 .virt1 img').animateRotate(-25);
	jq('#segundo .circ2 .virt1 img').animateRotate(-7);
	jq('#segundo .full img').animate({marginTop:0},300);
	jq('#segundo .u10 img').animate({marginTop:60},300);
	jq('#segundo .u15 img').animate({marginTop:55},300);
	jq('#segundo .u90 img').animate({marginTop:8},300);
	jq('#segundo .utilitaria').animate({marginLeft:0,opacity:1},800);
	/*song.get(0).play();*/
	setTimeout((function() {
                    jq('#segundo .local_cir').fadeIn('slow');
                }), 1000);
		jq('#evo').removeClass('activao');
	};

	function terceraanima(){

		/*quinta rsemble*/

		soundManager.pauseAll();

		jq('#evo').removeClass('activao');	

		jq('.fakeizq li a').removeClass('active');

		jq('#fakeli1').addClass('active');
	jq('#quinto .texto_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .facebook_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .music_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .video_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .film_ .contenedor_ .contenido_').stop();
	jq('#quinto .film_ .contenedor_ .contenido_').animate({width:0},10);

	/*quinta rsemble*/

	s.record({
pageName: "/internet/schnelles-internet/evolution-internetverbindung/isdn",
channel: "Sales/Internet",
prop23: "Sales",
prop24: "Internet",
prop30: "DE",
events: "event9"
});

	jq('#tercero .texto_ .contenedor_ .contenido_').animate({width:305},19000);
	jq('#tercero .facebook_ .contenedor_ .contenido_').animate({width:305},120000);
	jq('#tercero .music_ .contenedor_ .contenido_').animate({width:305},438000);
	jq('#tercero .video_ .contenedor_ .contenido_').animate({width:305},4680000);
	jq('#tercero .film_ .contenedor_ .contenido_').animate({width:305},120960000);
        	jq('#regla p').removeClass('active');
	jq('#is').addClass('active');
	jq('#tercero .circ1 .virt1 img').animateRotate(-118);
	jq('#tercero .circ2 .virt1 img').animateRotate(-21);
	jq('#tercero .u20 img').animate({marginTop:47},300);
	jq('#tercero .u90 img').animate({marginTop:8},300);
	jq('#tercero .u60 img').animate({marginTop:28},300);
	jq('#tercero .utilitaria').animate({marginLeft:0,opacity:1},800);
	setTimeout((function() {
                    jq('#tercero .local_cir').fadeIn('slow');
                }), 1000);
		jq('#evo').removeClass('activao');

	};

	function cuartaanima(){

	/*quinta rsemble*/

	soundManager.pauseAll();

		jq('#evo').removeClass('activao');	

		jq('.fakeizq li a').removeClass('active');

		jq('#fakeli1').addClass('active');
	jq('#quinto .texto_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .facebook_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .music_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .video_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .film_ .contenedor_ .contenido_').stop();
	jq('#quinto .film_ .contenedor_ .contenido_').animate({width:0},10);

	/*quinta rsemble*/

	s.record({
pageName: "/internet/schnelles-internet/evolution-internetverbindung/kabelmodem",
channel: "Sales/Internet",
prop23: "Sales",
prop24: "Internet",
prop30: "DE",
events: "event9"
});


	jq('#cuarto .texto_ .contenedor_ .contenido_').animate({width:305},400);
	jq('#cuarto .facebook_ .contenedor_ .contenido_').animate({width:305},4000);
	jq('#cuarto .music_ .contenedor_ .contenido_').animate({width:305},14000);
	jq('#cuarto .video_ .contenedor_ .contenido_').animate({width:305},150000);
	jq('#cuarto .film_ .contenedor_ .contenido_').animate({width:305},3960000);
        	jq('#regla p').removeClass('active');
	jq('#km').addClass('active');
	jq('#cuarto .circ1 .virt1 img').animateRotate(-25);
	jq('#cuarto .circ2 .virt1 img').animateRotate(-4);
	jq('#cuarto .circ1 .virt3 img').animateRotate(-180);
	jq('#cuarto .utilitaria').animate({marginLeft:0,opacity:1},800);
	setTimeout((function() {
                    jq('#cuarto .circ1 .virt4 img').stop().animateRotate(-54);
                    jq('#cuarto .local_cir').fadeIn('slow');
                }), 1000);
	jq('#cuarto .circ2 .virt3 img').animateRotate(-54);

	jq('#cuarto .u48 img').animate({marginTop:35},300);
		jq('#evo').removeClass('activao');
	};

	function quintaanima(){

		soundManager.pauseAll();

		jq('.fakeizq li a').removeClass('active');

		jq('#fakeli1').addClass('active');
	jq('#quinto .texto_ .contenedor_ .contenido_').animate({width:305},5);
	jq('#quinto .facebook_ .contenedor_ .contenido_').animate({width:305},50);
	jq('#quinto .music_ .contenedor_ .contenido_').animate({width:305},190);
	jq('#quinto .video_ .contenedor_ .contenido_').animate({width:305},2000);
	jq('#quinto .film_ .contenedor_ .contenido_').animate({width:305},53300);
        	jq('#regla p').removeClass('active');
	jq('#gf').addClass('active');
	jq('#quinto .circ1 .virt1 img').animateRotate(-47);
	jq('#quinto .circ2 .virt1 img').animateRotate(-11);
	jq('#quinto .circ1 .virt3 img').animateRotate(-180);
	setTimeout((function() {
                    jq('#quinto .circ1 .virt4 img').stop().animateRotate(-108);
                    jq('#quinto .local_cir').fadeIn('slow');
                }), 1100);
	jq('#quinto .circ2 .virt3 img').animateRotate(-140);
	jq('#quinto .u48 img').animate({marginTop:35},300);

	jq('#quinto .u90 img').animate({marginTop:26},300);

	jq('#quinto .utilitaria').animate({marginLeft:0,opacity:1},800);
		jq('#evo').removeClass('activao');	

		jq('#evo').removeClass('activao');	
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

		jq('#evo').removeClass('activao');	

		jq('.fakeizq li a').removeClass('active');
        	jq('#regla p').attr('class','none');
        	jq('#regla p').removeClass('iniciado');
	jq('#quinto .texto_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .facebook_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .music_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .video_ .contenedor_ .contenido_').animate({width:0},10);
	jq('#quinto .film_ .contenedor_ .contenido_').stop();
	jq('#quinto .film_ .contenedor_ .contenido_').animate({width:0},10);

	/*quinta rsemble*/

	jq('#sexta .u48 img').animate({marginTop:41},500);
	jq('#sexta .full img').animate({marginTop:0},500);
	jq('#sexta .u60 img').animate({marginTop:28},500);
	jq('#sexta .u65 img').animate({marginTop:35},500);
	jq('#sexta .u90 img').animate({marginTop:8},500);
	jq('#sexta .u80 img').animate({marginTop:13},500);
	jq('#sexta .u70 img').animate({marginTop:22},500);
	jq('#sexta .u10 img').animate({marginTop:48},500);
	jq('.catalism').removeClass('activer');
	jq('.cycle-nexto4').addClass('activer');
	jq('#sexta .cycle-prev').addClass('activer');

		jq('#fakeli1').addClass('active');

		jq('.fakeder').cycle('goto', '0');	
		jq('#evo').addClass('activao');	
		jq('#regla #ak').removeClass('iniciado');
	};


	/* animaciones */





/* infos */


/*jq('.icons_info p img').mouseover(function(){
	var regular = jq(this).parent().attr('rel');
	jq('.icons_info p').removeClass('active');
	jq(this).parent().addClass('active');
	jq('.burbujas').stop().delay(1000).css('display','none');
	jq(this).parent().parent().parent().find('.burbujas').css('display','block');
	jq('.burbuja').css('display','none');
	jq('#'+regular+'').fadeIn('slow');
});

/*jq('.icons_info p img').mouseout(function(){
	jq('.burbuja').fadeOut('slow');
	jq('.icons_info p').removeClass('active');
	jq('.burbujas').stop().delay(1000).css('display','none');
});*/

/*jq('.cerrar_').click(function(){
	jq('.burbuja').fadeOut('slow');
	jq('.icons_info p').removeClass('active');
	jq('.burbujas').stop().delay(1000).css('display','none');
});*/

/* infos */

jq('.fancyboxinline').fancybox({
	fitToView	: false,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
		width       : '960px',
		height      : '705px',
		padding     : 0
	});

jq('.fancybox').fancybox({
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

jq( '#cicla2' ).on( 'cycle-after', function( currSlide, nextSlide, opts, slideCount ) {
    		var caption50 = jq("#cicla2").data("cycle.opts").currSlide;
    		var caption51 = caption50+1;
    		var caption52 = jq("#cicla2").data("cycle.opts").slideCount;
        	jq('#segundo .infos .estruc strong').text(''+caption51+'/'+caption52+'');
	});
jq( '#cicla3' ).on( 'cycle-after', function( currSlide, nextSlide, opts, slideCount ) {
    		var caption50 = jq("#cicla3").data("cycle.opts").currSlide;
    		var caption51 = caption50+1;
    		var caption52 = jq("#cicla3").data("cycle.opts").slideCount;
        	jq('#tercero .infos .estruc strong').text(''+caption51+'/'+caption52+'');
	});
jq( '#cicla4' ).on( 'cycle-after', function( currSlide, nextSlide, opts, slideCount ) {
    		var caption50 = jq("#cicla4").data("cycle.opts").currSlide;
    		var caption51 = caption50+1;
    		var caption52 = jq("#cicla4").data("cycle.opts").slideCount;
        	jq('#cuarto .infos .estruc strong').text(''+caption51+'/'+caption52+'');
	});
jq( '#cicla5' ).on( 'cycle-after', function( currSlide, nextSlide, opts, slideCount ) {
    		var caption50 = jq("#cicla5").data("cycle.opts").currSlide;
    		var caption51 = caption50+1;
    		var caption52 = jq("#cicla5").data("cycle.opts").slideCount;
        	jq('#quinto .infos .estruc strong').text(''+caption51+'/'+caption52+'');
	});

*/

jq('.flerriba').click(function(){
	var naturaleza = jq(this).parent().parent().children('ul').children('li').size();
	var naturaleza3 = jq(this).parent().parent();
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

jq('.flebajo').click(function(){
	var naturaleza = jq(this).parent().parent().children('ul').children('li').size();
	var naturaleza3 = jq(this).parent().parent();
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
	jq('#ak').trigger('click');
}
if(hash=="telefonmodem"){
	jq('#tf').trigger('click');
}
if(hash=="isdn"){
	jq('#is').trigger('click');
}
if(hash=="kabelmodem"){
	jq('#km').trigger('click');
}
if(hash=="glasfaser"){
	jq('#gf').trigger('click');
}


jq(".fancyboxinline2").fancybox({
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