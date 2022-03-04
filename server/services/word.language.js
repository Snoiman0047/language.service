const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

const LanguageDetectService = {
    Detect: (word) => {
        return lngDetector.detect(word, 1)[0][0];
    },
    findLanguages: (word) => {
        var langs = []
        lngDetector.detect(word).forEach( (lang) => {langs.push(lang[0])} );
        return langs;
    }
}

module.exports = LanguageDetectService;