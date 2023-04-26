var en = require("./en.json");
var sv = require("./sv.json");

const i18n = {
	translations: {
		en,
		sv,
	},
	defaultLang: "sv",
	useBrowserDefault: true,
};

module.exports = i18n;