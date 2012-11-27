var doCharCount = function() {
	var $wc = $("#counter");
	var len = $("#tip-edit").val().length;
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

$(function() {
	$("#tip-edit").bind("input propertychange", function() {
		$(".tip-content").html($("#tip-edit").val());
		setupPrettyPrint();
		doCharCount();
	});
});
