var Word = require('../models/word.model');
var Language = require('./word.language')
var crypto = require('crypto');


const WordService = {
    findWord: async (req) => {
        var query = {}
        query['text'] = req.body.text
        return Word.find(query, {text: 0, createdAt: 0, updatedAt: 0, __v: 0, _id: 0})
    },
    saveWord: async (req) => {
        if (Language.findLanguages(req.body.text).includes('English')) {
            var word = new Word({
                code: crypto.randomBytes(5).toString('hex'),
                language: Language.Detect(req.body.text),
                text: req.body.text
            })
            word.save()
            return word
        }
        else throw new Error('The word could not be preserved, Try to keep a valuable word in English');;
    }
}

module.exports = WordService;