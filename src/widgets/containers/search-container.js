import React, {Component} from 'react';
import Search from '../components/search.js';

class SearchContainer extends Component{
    state={
        value: "Search"
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.input.value, 'submit');
    }
    setInputRef = (element) => {
        this.input = element;
    }
    handleInputChange = (evento) => {
        this.setState({
            value:event.target.value.replace(' ', '-')
        })
    }
    render(){
        return(
            <Search 
            setRef={this.setInputRef}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleInputChange}
            value={this.state.value}
            />
        )
    }
}

export default SearchContainer;