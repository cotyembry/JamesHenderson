exports.index = function(req, res) {
	//i.e. the signup page
	res.render('index', { appTitle: "Coty's startup website ^_^" });
}


exports.home = function(req, res) {
	res.render('home', { appTitle: "Coty's website ^_^" });
}
