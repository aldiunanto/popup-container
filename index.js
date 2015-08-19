index = {

	init: function(){
		index._open();
	},
	_open: function(){
		$('.opener').on('click', function(){
			var content  = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>';
				content += '<p>Magni quod alias cupiditate, maiores, blanditiis recusandae, ipsam explicabo tempora qui aperiam vitae rerum?</p>';
				content += '<p>Amet sed tempore, enim corporis distinctio exercitationem ea.</p>';

			LIBS.popup('open', {
				'caption'		: 'Popup Container',
				'content'		: content,
				'okAction'		: function(){ LIBS.popup('close'); },
				'cancelAction'	: function(){ LIBS.popup('close'); }
			});
		});
	}

};

jQuery(index.init);