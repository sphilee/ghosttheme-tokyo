jQuery(document).ready(function(){
    var txt = $('.content')[0].textContent,
    wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;
    var readingTimeInMinutes = Math.floor(wordCount / 250) + 1;
    var readingTimeAsString = readingTimeInMinutes + " min";
    $('article .reading-time').html(readingTimeAsString);

    (function(){
        configurePagination();
        configureHighlighter();
        configureCopyright();
        configureVideos();
        configureAnalytics();
        configureShortcodes();
        configureSidebar();
        addIcons();

        jQuery('.twitter-block').on('DOMSubtreeModified propertychange', "#twitter-  widget-0", function() {
              jQuery(".twitter-timeline").contents().find(".timeline-Tweet-media").css("display", "none");
      jQuery(".twitter-block").css("height", "100%");
    });
    })();


    // PRETTIFY PRE TAGS

    function configureHighlighter(){
        jQuery('pre code').each(function(index){
            if(typeof jQuery(this).attr('data-language') === 'undefined' || jQuery(this).attr('data-language') === false){
                jQuery(this).attr('data-language', 'javascript');
            }
        });
        if(config.highlightcode === true){
            Rainbow.color();
        }
    }


    // LAYOUT SIDEBAR

    function configureSidebar(){
        if(config.layout_right_sidebar === true) {
            jQuery('.content').addClass('leftside');
            jQuery('.alternate').addClass('rightside');
        }
    }


    // BACK TO TOP

    jQuery('.backtotop').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
    });


    // FITVIDS

    function configureVideos(){
        jQuery(".post").fitVids();
    }


    // RESPONSIVE NAVIGATION

    jQuery(".inlinemenu > .graybar").click(function(){
        jQuery(".inlinemenu > .menu").toggle();
    });

    function addIcons(){
      jQuery(".inlinemenu > .menu li:nth-of-type(1) a").before('<i class="fal fa-outdent"></i>');
      jQuery(".inlinemenu > .menu li:nth-of-type(2) a").before('<i class="fal fa-portrait"></i>');
      jQuery(".inlinemenu > .menu li:nth-of-type(3) a").before('<i class="fal fa-wrench"></i>');
      jQuery(".inlinemenu > .menu li:nth-of-type(4) a").before('<i class="fal fa-rocket"></i>');
    }


    // HIDE EMPTY PAGINATION

    function configurePagination(){
        if(jQuery('.pagination a').length === 0){
            jQuery('.pagination').hide();
        }
    }


    // COPYRIGHT DISCLAIMER

    function configureCopyright(){
        if(config.show_ecko_disclaimer === false){
            jQuery('.copyright .ecko').hide();
        }
    }

    // ANALYTICS

    function configureAnalytics(){
        if(config.analytics_id !== '' && config.analytics_id !== null && config.analytics_id !== undefined){
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', config.analytics_id, 'auto');
            ga('send', 'pageview');
        }
    }


    // SHORTCODE TOGGLE

    jQuery('.shorttoggle .toggleheader').click(function(){
        jQuery(this).siblings( ".togglecontent" ).toggle();
    });


    // SHORTCODE TABS

    function configureShortcodes(){
        jQuery('.shorttabs').each(function(){
            jQuery('.shorttabscontent', this).hide();
            jQuery('.shorttabscontent', this).first().show();
            jQuery('.shorttabsheader', this).first().addClass('active');
        });
    }

    jQuery('.shorttabsheader').click(function(){
        jQuery('.shorttabscontent', jQuery(this).parent()).hide();
        jQuery('.shorttabsheader.active', jQuery(this).parent()).removeClass('active');
        jQuery(this).addClass('active');
        jQuery( ".shorttabscontent[data-id='" + jQuery(this).attr('data-id') + "']" ).show();
    });

});
