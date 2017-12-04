
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
              sectionsColor: ['#000', '#000', '#171717', '#000', '#000'],
              anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5fifth'],
              menu: '#menu',
              scrollBar: true,
              scrollOverflow: true,
              
              

            });
        });
        
    }
};











var onLoad = function () {
    LOADER.bindLoader();
    PARALLAX.bindParralax();
 
};


$(document).foundation();
window.onload = onLoad();
