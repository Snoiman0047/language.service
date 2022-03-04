var WordService = require('../services/word.service');

exports.findWord = async (req, res) => {
    WordService.findWord(req)
               .then(succ => { res.send(succ) })
               .catch(err => { res.send(err)})
};

exports.saveWord = async (req, res) => {
    WordService.saveWord(req)
               .then(succ => { res.send(succ) })
               .catch(err => { res.send(err)})
};