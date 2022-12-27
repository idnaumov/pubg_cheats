$(document).ready( function() {

   // NAVBAR BEFORE ACTIVE
   $('.link').hover( 
      function() {
         $(this).addClass( 'active' );
      }, function() {
         $(this).removeClass( 'active' );
   });

   // BUTTON BLOCK (OS)
   $('.windows').click( 
      function( e ) {

         if (!$(this).hasClass('active')) {
            $(this).addClass( 'active' );
            $('.windows').addClass( 'active' );
            $('.button_windows').addClass( 'active' );

            $('.ios').removeClass( 'active' );
            $('.button_ios').removeClass( 'active' );

            $('.android').removeClass( 'active' );
            $('.button_android').removeClass( 'active' );

            $('.1mnth').html('250')
            $('.3mnth').html('1 099')
            $('.mnth').html('2 499')
         }
         
      });

      $('.android').click( 
         function( e ) {
            
            if (!$(this).hasClass('active')) {
               $(this).addClass( 'active' );
               $('.android').addClass( 'active' );
               $('.button_android').addClass( 'active' );
   
               $('.windows').removeClass( 'active' );
               $('.button_windows').removeClass( 'active' );
   
               $('.ios').removeClass( 'active' );
               $('.button_ios').removeClass( 'active' );

               $('.1mnth').html('450')
               $('.3mnth').html('1 299')
               $('.mnth').html('2 699')
            }
            
         });

      $('.ios').click( 
            function( e ) {
               
               if (!$(this).hasClass('active')) {
                  $(this).addClass( 'active' );
                  $('.ios').addClass( 'active' );
                  $('.button_ios').addClass( 'active' );
      
                  $('.windows').removeClass( 'active' );
                  $('.button_windows').removeClass( 'active' );
      
                  $('.android').removeClass( 'active' );
                  $('.button_android').removeClass( 'active' );

                  $('.1mnth').html('650')
                  $('.3mnth').html('1 499')
                  $('.mnth').html('2 899')
               }
               
            });

      // FAQ
      $('.item').click( 
         function( e ) {
            var img = this.querySelectorAll( ".open__close" );  
            var info = this.querySelectorAll( ".info" );  
            
            if (!$(this).hasClass('active')) {
               $(this).addClass( 'active' );
               $(img).addClass( 'active' );
               $(info).addClass( 'active' );
            } else {
               $(this).removeClass( 'active' );
               $(img).removeClass( 'active' );
               $(info).removeClass( 'active' );
            }
                  
         });

      //SCROLL
      $('a[href^="#"').on('click', function() {

         let href = $(this).attr('href');
     
         $('html, body').animate({
             scrollTop: $(href).offset().top
         });
         return false;
     });
});