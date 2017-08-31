import React, {Component} from 'react';


class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render(){
        return (<div className="search-bar"><input
            value = {this.state.term}
            onChange={(event) => this.onInputChange({term: event.target.value})}/>
        </div>);
    }

    onInputChange(term){
        this.setState(term);
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
