import React, { Component } from 'react';
import axios from 'axios';

class WordLanguageService extends Component {
    
    constructor(props) {
      super(props);
      this.state = { word: '' , errors: { word: ''}};
    }

    handleWordChange = (evt) => {
        this.setState({ word: evt.target.value });
    }

    saveWord = async (e) => { 
        axios.post('http://localhost:9000/save-word', { text: this.state.word } )
             .then( (succ) => { 
                 if (succ.data != '') { alert('word created!'); console.log(succ.data); } })
             .catch( (err) => { alert(err.massage); console.error(err); });
    };

    findWordLanguage = async (e) => { 
        axios.get('http://localhost:9000/find-word', { text: this.state.word } )
             .then( (succ) => { 
                if (succ.data = {}) { alert('The word you were looking for was not found,\nTry to save it first'); }
                else { alert('List of languages viewed:\n' + succ.data.forEach((lang) => lang.language)); }
            }).catch(err => { console.error(err); });
    };

    render() {
        const enabled = this.state.word.length > 0;
        return (
            <div>
                <h1 className='title'>Language Service</h1>
                <input type="text"  ref='word' className='txt-input' placeholder="Enter some word..." 
                    value={this.state.word}
                    onChange={this.handleWordChange}
                ></input>
                <br></br>
                <input type="button" className='btn-input' style={{ 'marginRight': '142px' }} value="Detect languages" 
                    onClick={this.findWordLanguage}
                    disabled={!enabled}
                ></input>
                <input type="button" className='btn-input' value="Save" 
                    onClick={this.saveWord} 
                    disabled={!enabled}                   
                ></input>
            </div>
        );
    } 
}  

export default WordLanguageService;