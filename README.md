# Popup Container
A simple popup container for your content using jQuery

Usage
------------

Import **jQuery Library** (I used jquery-1.10.2 version) and `libs.js`
```html
<script type="text/javascript" src="libs.js"></script>
```

Load the stylesheets (popup stylesheet and Font-Awesome). In this case, I loaded Font-Awesome version 4.4.0 from [BootstrapCDN](http://www.bootstrapcdn.com/#fontawesome_tab) by [MaxCDN](http://tracking.maxcdn.com/c/148092/3982/378) or you can download Font-Awesome and load locally instead.
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="style.css" />
```

Create your 'container' element.
```html
<div id="popup">
  <div class="header">
    <a class="close-button" href="javascript:;"><i class="fa fa-close"></i></a>
    <div class="caption"><i class="fa fa-info"></i><span></span></div>

    <div class="clearfix"></div>
  </div>
  <div class="content"></div>
  <div class="footer">
    <button class="btn primary positive"></button>
    <button class="btn default negative">cancel</button>

    <div class="clearfix"></div>
  </div>
</div>
```

Then, call it with your event handler. e.g.
```javascript
$('.opener').on('click', function(){
	var content  = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>';
		content += '<p>Magni quod alias cupiditate, maiores, blanditiis recusandae, ipsam explicabo tempora qui aperiam vitae rerum?</p>';
		content += '<p>Amet sed tempore, enim corporis distinctio exercitationem ea.</p>';

  //content load statically. You can custom this by your advance something like load via ajax, etc.

	LIBS.popup('open', {
		'caption'		: 'Popup Container',
		'content'		: content,
		'okAction'		: function(){ LIBS.popup('close'); },
		'cancelAction'	: function(){ LIBS.popup('close'); }
	});
});
```

Note
----------------

This property (i.e. `LIBS.popup`) required 4 parameters and 1 optional parameter.

1. `.caption` -> The popup's title (required)
2. `.content` -> Your message to be displayed (required)
3. `.okAction` -> The callback when user click 'OK' button (required)
4. `.calcelAction` -> The callback when user click 'Cancel' button (required)
5. `.posButtonText` -> A method for you if you wish to replace 'OK' with your own text. So 'OK' as a default text. (optional)

*Your 'popup-container' element should has an ID called `#popup`

Enjoy!

**Contributor and owner: [Aldi Unanto](http://aldiunanto.com) - aldiunanto@yahoo.com**
