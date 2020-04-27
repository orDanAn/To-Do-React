import React, { Component } from 'react'; 

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onLabelSearch = (event) => {
        
        const term = event.target.value;
        this.setState({ term});
        this.props.onsearchState(term);

    } 

    render() {
        return <input type="text"
                    className="form-control search-input"
                    placeholder="поиск дел" 
                    onChange={ this.onLabelSearch }
                    value={this.state.term}
                    />
    }
}

