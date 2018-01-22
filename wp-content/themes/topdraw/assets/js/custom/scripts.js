(function ($, root, undefined) {

	$(function () {

		var $document = $(document),
				$window = $(window);

		$('input[type="text"], input[type="email"]').each(function(){
			var default_value = this.value;
			$(this).focus(function(){
				if(this.value === default_value) {
					this.value = '';
				}
			});
			$(this).blur(function(){
				if(this.value === '') {
					this.value = default_value;
				}
			});
		});

		$(".table").tablesorter({

		});
		// $(".table").DataTable();

		$('.species-information, .species-chart').tabbedContent({
			links: '.animal-chooser li a',
			currentClass : 'current',
			loop: false
		});

		$('.unit-information').tabbedContent({
			links: '.info-chooser li a',
			currentClass: 'current',
			loop: false
		});

		// $('header').scrollupbar();

		//Sticky Stuff
		$window.scroll(function(e){
			var y = $(this).scrollTop();
			if (y >= '250'){
				$('header').addClass('shown');
			} else {
				$('header').removeClass('shown');
			}
		});

		$('.hamburger').on('click', function(e){
			$(this).toggleClass('active');
			$('nav.nav').toggleClass('active');
			e.preventDefault();
		});

		$('.join').on('click', function(){
			$('.nav').removeClass('active');
		});

		// MEMBERSHIP STUFF

		$('.ms-price.price').html('<span class="dollar">$</span>99');
		$document.ready(function(e){
			var alertBox = $('.ms-alert-box').clone();
			$('.ms-account-wrapper .ms-alert-box').remove();
			$('body').prepend(alertBox);
		});

		// Expand the table to full screen
		$document.on('click', '.expand', function(e){
			$('body').addClass('table-active');
			return false;
		});

		// Close the table to full screen
		$document.on('click', '.close', function(e){
			$('body').removeClass('table-active');
			return false;
		});

		// TOOLTIP STUFF
		// NEED TO APPLY THIS TO ALL OF THE TOOLTIPS THROUGHOUT TOPDRAW
		$('td.orange').hover(
			function(e){
				var tip = $(this).attr('tip-text');
				$(this).find('span.tooltip').text(tip);
			}, function(e){
				$(this).find('span.tooltip').text(tip);
			}
		);

		// Animal Chooser Dropdown stuff
		function DropDown(el) {
			this.dd = el;
			this.placeholder = this.dd.children('span');
			this.opts = this.dd.find('ul.animal-chooser > li');
			this.optsInfo = this.dd.find('ul.info-chooser > li');
			this.val = '';
			this.index = -1;
			this.initEvents();
		}

		DropDown.prototype = {
			initEvents : function() {
				var obj = this;
				var hash = window.location.hash.substring(1);

				obj.dd.on('click', function(event){
					$(this).toggleClass('active');
					return false;
				});

				obj.opts.on('click', function(){
					var opt = $(this);
					obj.val = opt.text();
					obj.index = opt.index();
					obj.placeholder.text('Animal Species: ' + obj.val);
				});

				obj.optsInfo.on('click', function(){
					var opt = $(this);
					obj.val = opt.text();
					obj.index = opt.index();
					obj.placeholder.text(obj.val);
				});

				$document.ready(function(){
					var unit = $('body').hasClass('page-template-page-unit-analysis'),
							trophy = $('body').hasClass('page-template-page-trophy-analysis'),
							rules = $('body').hasClass('page-template-page-rules-regulations');

					if(hash !== '' && unit){
						obj.placeholder.text('Animal Species: ' + hash);
					}
					else if(hash !== '' && trophy ) {
						obj.placeholder.text('Animal Species: ' + hash);
					}
					else if(hash !== '' && rules ) {
						obj.placeholder.text(hash);
					}
				});

			},
			getValue : function(){
				return this.val;
			},
			getIndex : function(){
				return this.index;
			}
		};

		$(function(){

			var dd = new DropDown($('#dd'));

			$document.click(function(){
				$('.button-group').removeClass('active');
			});

		});

		// Change the class and margin on paragraphs that have a strong (in the BOXES and RECORDS AREA)
		$(function(){
			$('.boxes p').addClass('item');
			$('.boxes p strong').parent().addClass('header').removeClass('item');
			$('.boxes p').each(function(){
				var $p = $(this),
						txt = $p.html();

				if(txt === '&nbsp;'){
					$p.addClass('spacer-thing').removeClass('item');
				}
			});
			$('.record').each(function(){
				var $p = $(this),
						num = $p.children().length;
				if(num === 2){
					$p.addClass('full-width');
				}
			});
		});

		// If the email address already exists, let them know
		$document.ready(function(){
			if(window.location.href === "https://topdrawconsulting.com/register/?action=register_user") {
				$('.error-thing').addClass('visible');
				console.log("this is an error yo");
			}
		});

		// If a link has the words coming soon add a class that makes them inactive
		$(".sub-menu a:contains('Coming Soon')").addClass('coming-soon-link');
		$(".animal-chooser a:contains('Coming Soon')").addClass('coming-soon-link');

	});

})(jQuery, this);