jQuery.fn.extend({
    search_sort: function(arg) {
        // get args
        var search_sort = {
          url: window.location.href,
          select_input: $(this),
          container: arg.container,
          grid_container: arg.grid_container,
          title_wrapper: arg.title_wrapper,
          price_wrapper: arg.price_wrapper || ".money",
          range_wrapper: arg.range_wrapper || ".price-range-container",
          range_submit: arg.range_submit || "#sort_apply"
        };
        

        // sort options/values
        var sorting_options = {
          title_descending: "title-descending",
          title_ascending: "title-ascending",
          price_lowest: "price-lowest",
          price_highest: "price-highest"
        };

        // when select input changes
        $('#search-sort button').on("click",function() {
          
          var val   = $(this).attr('data-value');
          let title = ''

          $('#search-sort button').removeClass('is-selected')
          $(this).addClass('is-selected');

          if(val === sorting_options.title_descending) {
            search_sort.sortByTitleDescending();
            Cookies.set('sorting-option', sorting_options.title_descending);
            title = 'Title descending (Z-A)'
          } 
    
          else if(val === sorting_options.title_ascending) {
            search_sort.sortByTitleascending();
            Cookies.set('sorting-option', sorting_options.title_ascending);
            title = 'Title ascending (A-Z)'
          } 
    
          else if(val === sorting_options.price_lowest) {
            search_sort.priceLowest();
            Cookies.set('sorting-option', sorting_options.price_lowest);
            title = 'Price lowest'
          } 
    
          else if(val === sorting_options.price_highest) {
            search_sort.priceHighest();
            Cookies.set('sorting-option', sorting_options.price_highest);
            title = 'Price highest'
          }
          
          if(val !== sorting_options.price_range) {
            $(search_sort.range_wrapper).addClass("hide");
          }

          if(window.innerWidth > 640) {
            $('.value-picker-button span').text(`Sort by: ${title}`)
          }
          $('.value-picker-button').click()
          
        });
        
      
        
        // Sort Alphabetically (Descending)
        search_sort.sortByTitleDescending = function() {
          $.ajax({
            url: search_sort.url,
            dataType: "html",
            success: function(data) {
              var container = $(data).find(search_sort.container);
              var items = container.find(search_sort.grid_container);
    
              items.sort(function(a,b){
                var an = a.querySelector(search_sort.title_wrapper).innerHTML,
                    bn = b.querySelector(search_sort.title_wrapper).innerHTML;
    
                if(an < bn) {
                  return 1;
                }
                if(an > bn) {
                  return -1;
                }
                return 0;
              });
    
              $(search_sort.container).html(items);
            }
          })
        }
    
        // Sort Alphabetically (Ascending)
        search_sort.sortByTitleascending = function() {
          $.ajax({
            url: search_sort.url,
            dataType: "html",
            success: function(data) {
              var container = $(data).find(search_sort.container);
              var items = container.find(search_sort.grid_container);
    
              items.sort(function(a,b){
                var an = a.querySelector(search_sort.title_wrapper).innerHTML,
                    bn = b.querySelector(search_sort.title_wrapper).innerHTML;
    
                if(an > bn) {
                  return 1;
                }
                if(an < bn) {
                  return -1;
                }
                return 0;
              });
    
              $(search_sort.container).html(items);
            }
          })
        }
    
        // Sort Price (Low to High)
        search_sort.priceLowest = function() {
          $.ajax({
            url: search_sort.url,
            dataType: "html",
            success: function(data) {
              var container = $(data).find(search_sort.container);
              var items = container.find(search_sort.grid_container);
    
              items.sort(function(a,b){
                var an = a.querySelector('.product-item__price').innerHTML.replace(/[^0-9\\.]/g,''),
                    bn = b.querySelector('.product-item__price').innerHTML.replace(/[^0-9\\.]/g,'');
    
                return an - bn;
              });
    
              $(search_sort.container).html(items);
            }
          })
        }
    
        // Sort Price (High to Low)
        search_sort.priceHighest = function() {
          $.ajax({
            url: search_sort.url,
            dataType: "html",
            success: function(data) {
              var container = $(data).find(search_sort.container);
              var items = container.find(search_sort.grid_container);
    
              items.sort(function(a,b){
                var an = a.querySelector(search_sort.price_wrapper).innerHTML.replace(/[^0-9\\.]/g,''),
                    bn = b.querySelector(search_sort.price_wrapper).innerHTML.replace(/[^0-9\\.]/g,'');
    
                return bn - an;
              });
    
              $(search_sort.container).html(items);
            }
          })
        }
        
       
        
        
        // Get options from cookies on page load
        var cooke_sorting_option = Cookies.get('sorting-option');
        if(cooke_sorting_option === sorting_options.title_descending) {
          $(search_sort.select_input).val(cooke_sorting_option).change();
          search_sort.sortByTitleDescending();
        } 
    
        else if(cooke_sorting_option === sorting_options.title_ascending) {
          $(search_sort.select_input).val(cooke_sorting_option).change();
          search_sort.sortByTitleascending();
        }
    
        else if(cooke_sorting_option === sorting_options.price_lowest) {
          $(search_sort.select_input).val(cooke_sorting_option).change();
          search_sort.priceLowest();
        }
    
        else if(cooke_sorting_option === sorting_options.price_highest) {
          $(search_sort.select_input).val(cooke_sorting_option).change();
          search_sort.priceHighest();
        }

      }
    });