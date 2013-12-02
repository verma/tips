var doCharCount = function(txt) {
	var $wc = $("#counter");
	var len = txt.length;
	console.log('len', len);
	$wc.removeClass();
	if (len == 0)
		$wc.html('');
	else {
		$wc.html(len.toString());
		$wc.addClass(
			(len < 300 ? 'wc-good' :
				(len < 600 ? 'wc-ok' : 'wc-bad')));
	}

}

var converter = Markdown.getSanitizingConverter();
var editor = new Markdown.Editor(converter);

converter.hooks.chain("postConversion", function (text) {
	doCharCount(text);
	return text;
});

editor.hooks.chain("onPreviewRefresh", function () {
	setupPrettyPrint();
});

$(function() {
	editor.run();

	// start with our tip title focused
	$("#tip-title").focus();
});

