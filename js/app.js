
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
              sectionsColor: ['#000', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
              anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
              menu: '#menu',
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
