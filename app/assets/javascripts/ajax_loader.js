            $(document).ajaxSend(function(event, request, settings) {
                $('.loading-indicator-container').fadeIn('fast');
                $('.loading-indicator').fadeIn('fast');
            });

            $(document).ajaxComplete(function(event, request, settings) {
                $('.loading-indicator-container').fadeOut('fast');
                $('.loading-indicator').fadeOut('fast');
            });