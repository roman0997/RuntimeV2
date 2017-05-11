(function() {
    "use strict";

    //// custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"#27cce4", cursorwidth: '5', cursorborderradius: '10px', background: '#424f63', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});

    $(".left-side").niceScroll({styler:"fb",cursorcolor:"#27cce4", cursorwidth: '3', cursorborderradius: '10px', background: '#424f63', spacebarenabled:false, cursorborder: '0'});


    $(".left-side").getNiceScroll();
    if ($('body').hasClass('left-side-collapsed')) {
        $(".left-side").getNiceScroll().hide();
    }



    // Toggle Left Menu
   jQuery(document).on("click", ".menu-list > a", function () {   
      var parent = jQuery(this).parent();
      var sub = parent.find('> ul');
      
      if(!jQuery('body').hasClass('left-side-collapsed')) {
         if(sub.is(':visible')) {
            sub.slideUp(200, function(){
               parent.removeClass('nav-active');
               jQuery('.main-content').css({height: ''});
               mainContentHeightAdjust();
            });
         } else {
            visibleSubMenuClose();
            parent.addClass('nav-active');
            sub.slideDown(200, function(){
                mainContentHeightAdjust();
            });
         }
      }
      return false;
   });

   function visibleSubMenuClose() {
      jQuery('.menu-list').each(function() {
         var t = jQuery(this);
         if(t.hasClass('nav-active')) {
            t.find('> ul').slideUp(200, function(){
               t.removeClass('nav-active');
            });
         }
      });
   }

   function mainContentHeightAdjust() {
      // Adjust main content height
      var docHeight = jQuery(document).height();
      if(docHeight > jQuery('.main-content').height())
         jQuery('.main-content').height(docHeight);
   }

    //  class add mouse hover
   jQuery(document).on("mouseenter", ".custom-nav > li", function () {
       jQuery(this).addClass('nav-hover');
   });
   jQuery(document).on("mouseleave", '.custom-nav > li', function () {
       jQuery(this).removeClass('nav-hover');
   });
   //jQuery('.menu-list').hover(,);


   // Menu Toggle
   jQuery(document).on("click", ".toggle-btn", function () {
       $(".left-side").getNiceScroll().hide();
       
       if ($('body').hasClass('left-side-collapsed')) {
           $(".left-side").getNiceScroll().hide();
       }
      var body = jQuery('body');
      var bodyposition = body.css('position');
      if(bodyposition != 'relative') {
          
         if(!body.hasClass('left-side-collapsed')) {
             $(".ft-appengine-workspace-select").hide();
             body.addClass('left-side-collapsed');
            jQuery('.custom-nav ul').attr('style','');
            jQuery(this).addClass('menu-collapsed');

            var mq = window.matchMedia("(min-width: 800px)");
            if (!mq.matches) {

                jQuery(this).removeClass('menu-collapsed');
                $(".sticky-left-side").hide()
            }

         } else {
             $(".ft-appengine-workspace-select").show();
            body.removeClass('left-side-collapsed chat-view');
            jQuery('.custom-nav li.active ul').css({display: 'block'});

            jQuery(this).removeClass('menu-collapsed');

            //wkh
            var mq = window.matchMedia("(min-width: 800px)");
            if (!mq.matches) {
                $(".sticky-left-side").show()
            }
         }
      } else {        
         if(body.hasClass('left-side-show'))
            body.removeClass('left-side-show');
         else
            body.addClass('left-side-show');

         mainContentHeightAdjust();
      }

   });
   

   searchform_reposition();

   jQuery(window).resize(function(){

      if(jQuery('body').css('position') == 'relative') {

         jQuery('body').removeClass('left-side-collapsed');

      } else {

         jQuery('body').css({left: '', marginRight: ''});
      }

      searchform_reposition();

   });

   function searchform_reposition() {
      if(jQuery('.searchform').css('position') == 'relative') {
         jQuery('.searchform').insertBefore('.left-side-inner .logged-user');
      } else {
         jQuery('.searchform').insertBefore('.menu-right');
      }
   }
})(jQuery);

                      // Dropdowns Script
						//$(document).ready(function() {
						//  $(document).on('click', function(ev) {
						//    ev.stopImmediatePropagation();
						//    $(".dropdown-toggle").dropdown("active");
						//  });
						//});
						
	
     
  /************** Search ****************/
		$(function() {
	    var button = $('#loginButton');
	    var box = $('#loginBox');
	    var form = $('#loginForm');
	    button.removeAttr('href');
	    button.mouseup(function(login) {
	        box.toggle();
	        button.toggleClass('active');
	    });
	    form.mouseup(function() { 
	        return false;
	    });
	    $(this).mouseup(function(login) {
	        if(!($(login.target).parent('#loginButton').length > 0)) {
	            button.removeClass('active');
	            box.hide();
	        }
	    });
	});
	