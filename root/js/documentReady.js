import $ from 'jquery';

var documentReady = {
	ready: function ready() {
		$(window).resize(documentReady.adjustSize);
		//start the stuff necessary to do when the document has been loaded
		var widthToSet = $(document.documentElement).outerWidth();
		$('#page').css({ 'width': widthToSet + 'px' });
	},
	adjustSize: function adjustSize() {
		var widthToSet = $(document.documentElement).outerWidth();
		$('#page').css({ 'width': widthToSet + 'px' });
	}
};

exports = documentReady;