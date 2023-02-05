// encode base64URL
function btoaURL(string) {
	return btoa(unescape(encodeURIComponent(string)))
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=/g, "");
}

// decode base64URL
function atobURL(string) {
	string = string.replace(/-/g, "+").replace(/_/g, "/");
	while (string.length % 4) {
		string += "=";
	}
	return decodeURIComponent(escape(atob(string)));
}
