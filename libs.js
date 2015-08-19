LIBS = {

	popup: function(event, args){

		/*
		*
		* Available Parameters :
		*---------------------------------------
		* (1) .caption -> Dialog's caption
		* (2) .content -> Main content of dialog
		* (3) .posButtonText -> Positive button's text
		* (4) .okAction -> Performing positive button
		* (5) .cancelAction -> Performing negative button
		*
		*/

		var el = $('#popup');
		
		switch(event){
			case 'open' :
				el.slideUp(200, function(){
					el.find('.caption span').html(args.caption);
					el.find('.content').html(args.content);
					el.css({
						'top'	: '55px',
						'left'	: (($(window).width() - el.width()) / 2) + 'px'
					});

					el.find('.close-button').on('click', function(){
						LIBS.popupDialog('close');
					});

					var positiveButton = el.find('.positive');
					if(typeof args.posButtonText !== 'undefined'){
						positiveButton.html(args.posButtonText);
					}else{
						positiveButton.html('ok');
					}

					if(typeof args.doSomething !== 'undefined'){
						args.doSomething();
					}

					positiveButton.off().on('click', args.okAction);
					el.find('.negative').on('click', args.cancelAction);

					el.fadeIn(500);
				});
			break;
			case 'close' :
				el.fadeOut();
			break;
		}
	}

}