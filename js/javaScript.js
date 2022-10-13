// JavaScript Document



// eMail verhacken
function email(){
        name = 'lauralopezdoval';
        domain = 'hotmail';
        topdop = 'com';
        miemail="mailto:"+name+"@"+domain+"."+topdop;
        location.href=miemail;
}


$(document).ready(function(){
    
    var route = {
          _routes : {}, // array -> objeto
          add : function( url, action ){
            this._routes[url] = action;
          },
          run : function(){
            $.each( this._routes, function( patron ){
               if( location.href.match( patron ) ){
                 // Puedo ejecutar cualquier codigo
                 this();
               }
            });
          }
      };
    
    route.add( 'seiteZwei.html', function(){
        $(window).scroll(function(){

            // Musterbahn effects ------------------------------ 
            //Inhalte von der Seite hereinfliegen lassen ///////////
            //y-Position der id-Bereiche ///////////////////////////

            var eins = $('#eins').offset().top; 
            var zwei = $('#relative').offset().top; 
            //aktuell gescrollte y-Position //////
            var topnow = $(window).scrollTop();
            //Korrekturwert in % der  Bildschirmhöhe <-<-<-<-<-<-
            var korr = $(window).height() * 0.7;

            if (topnow > (eins - korr) ) {
                $('#eins .linelinks').addClass('schieben');
                $('#eins .links').addClass('nachrechts');
                $('#eins .rechts').addClass('nachlinks');
            }

            else {
                $('#eins .linelinks').removeClass('schieben'), 
                $('#eins .links').removeClass('nachrechts'), 
                $('#eins .rechts').removeClass('nachlinks');
            }

            if (topnow > (zwei-korr) )  {
                $('#relative .obeneins').addClass('nachoben');
                $('#relative .obenzwei').addClass('nachoben');
                $('#relative .obendrei').addClass('nachoben');
            } 
            else {  
                $('#relative .oben1').removeClass('nachoben'),
                $('#relative .oben2').removeClass('nachoben'), 
                $('#relative .oben3').removeClass('nachoben');
            }
        });
    });
    
    route.run();
    
    $(window).scroll(function(){
        
        // visibility innernavi --------------------------
        var y = $('#hero').height();

        if($(window).scrollTop() > y){
            $('#down a').fadeOut();
        }
        else {
            $('#down a').fadeIn(); 
        }

        // Pfeil nach oben ---------------------------------
        if($(window).scrollTop() > 200){
            $('#back-top').fadeIn();
        }
        else {
            $('#back-top').fadeOut(); 
        }

        // Background nav ---------------------------------
        var z = $('header').height();

        if($(window).scrollTop() > z){
            $('#topnav').addClass('background');
        }
        else {
            $('#topnav').removeClass('background');
        }
    });
    
    // Innernavi, Pfeil nach unter ---------------------------------
	$('#topnav a, #down a').on('click', function(){ 
		var linkziel = $(this).attr('href'); 
		$('html,body').animate({scrollTop:($(linkziel).offset().top)} , 1000); 
		return false;
	});
    
    // Pfeil nach oben ---------------------------------
    $('#back-top a').on('click', function(){
        var ziel = $(this).attr('href');
		$('html,body').animate({scrollTop:0},1000); 
		return false;
	});
    
    $('.zumLink').on('click', function() {
        $('#hautpnav').hide().fadeTo('slow', 0.00);
        
        $('#navchecker').prop('checked', function (i, val) {
             return !val;
         }) ;
        
    });
    
    
	
    
    
});







