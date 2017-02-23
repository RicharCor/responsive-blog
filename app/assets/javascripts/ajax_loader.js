$(document).ajaxStart(function() {
                $('.loading-indicator-container').fadeIn('fast');
                $('.loading-indicator').fadeIn('fast');
}).ajaxStop(function() {
                $('.loading-indicator-container').fadeOut('fast');
                $('.loading-indicator').fadeOut('fast');
});