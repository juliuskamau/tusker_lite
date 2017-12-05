
   LOADER = {
    bindLoader: function () {
   
        $(document).ready(function() {
            
             // Fakes the loading setting a timeout
               setTimeout(function() {
                   $('body').addClass('loaded');
               }, 3500);
            
           });
        
    }
};


PARALLAX = {
    bindParralax: function () {
        $(document).ready(function() {
            $('#fullpage').fullpage({
              sectionsColor: ['#000', '#000', '#171717', '#000', '#000','#000'],
              anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5fifthpage','6sixthpage'],
              menu: '#menu',
              scrollBar: true, 
              
             
              responsiveWidth: 900,
              afterResponsive: function(isResponsive){
              
              }

              
              

            });
        });
        
    },
    bindClassActive: function () {
        $(function(){
            $('.callender_wrapper .panel.relative').click(function(){
                $('.callender_wrapper .panel.relative.active').removeClass('active');
                $(this).addClass('active');
            });
        });
        
    }
};











var onLoad = function () {
    LOADER.bindLoader();
    PARALLAX.bindParralax();
    PARALLAX.bindClassActive();
 
};


$(document).foundation();
window.onload = onLoad();
