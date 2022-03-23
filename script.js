(function() {	
	'use strict';
	
	var startTime = Date.now();
	var timeLimit = 20000;
	
	var interval = setInterval(function() {
		var currentTime = Date.now();
		var component = $("#clarify-box")[0];
		
		if (component) {
			$(component).remove();
			clearInterval(interval);
		}
		if (!component && currentTime - startTime > timeLimit) {
			clearInterval(interval);
		}
	})
})();
