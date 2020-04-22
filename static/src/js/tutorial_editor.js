//https://www.odoo.com/documentation/11.0/howtos/themes.html#snippet-options
odoo.define('theme_tutorial.snippet_testimonial_options', function (require) {
	'use strict';

	//creamos una instancia del website
	//generamos la varianble options
	var options = require('web_editor.snippets.options');

	//vamos a meternos al namespace de los snippets
	//website.snippet.Option = Core

	//este codigo solo se ejecuta cuando este requerimiento este completo
	//la extendimos
	// snippet_testimonial_options = data-js del options.xml
	options.registry.snippet_testimonial_options = options.Class.extend({
		onFocus: function (){
			alert('hola'); 
		}

	});

});