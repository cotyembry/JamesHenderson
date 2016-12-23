exports.home = function(req, res) {
	res.render('index', { appTitle: "Sovereign Chickamauga Cherokee" });
}

//start Coty added 12-22-2016
exports.application = function(req, res) {
	res.render('application', { appTitle: "Sovereign Chickamauga Cherokee" });
}

exports.beliefs = function(req, res) {
	res.render('beliefs', { appTitle: "Sovereign Chickamauga Cherokee" });
}

exports.contact = function(req, res) {
	res.render('contact', { appTitle: "Sovereign Chickamauga Cherokee" });
}

exports.history = function(req, res) {
	res.render('history', { appTitle: "Sovereign Chickamauga Cherokee" });
}

exports.tribaladministration = function(req, res) {
	res.render('tribaladministration', { appTitle: "Sovereign Chickamauga Cherokee" });
}
//end
