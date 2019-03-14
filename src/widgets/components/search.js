import React from 'react';
import './search.css';
import SearchIcon from '../../icons/components/search.js';


/*
function Search (props) {
    return(
        <form>

        </form>
    )
}
*/

const Search = (props) => (
    <form 
        className="Search" 
        action=""
        onSubmit={props.handleSubmit}
    >
        <input
            ref={props.setRef}
            type="text"
            className="Search-input"
            placeholder="Search"
            name="search"
            //defaultValue="Luis Fonsi"
            onChange={props.handleChange}
            value={props.value}
        />
        <button className="Search-button">
            <SearchIcon
                size = "20"
                color = "red"
            />
        </button>
    </form>
)

export default Search;