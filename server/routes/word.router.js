module.exports = (app) => {
    var word = require('../controllers/word.controller');

    app.post('/save-word', word.saveWord);

    app.get('/find-word', word.findWord);

}