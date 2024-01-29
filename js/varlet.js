for (var i=0;i<3;i++) {
	setTimeout(function() {
		console.log('setTimeout', i);
	}, i*200);
}

for (let i=0;i<3;i++) {
	setTimeout(function() {
		console.log('setTimeout', i);
	}, i*200);
}

