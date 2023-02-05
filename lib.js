exports.btoaURL = (string) => {
	return btoa(unescape(encodeURIComponent(string)))
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=/g, "");
};
exports.atobURL = (string) => {
	string = string.replace(/-/g, "+").replace(/_/g, "/");
	while (string.length % 4) {
		string += "=";
	}
	return decodeURIComponent(escape(atob(string)));
};
