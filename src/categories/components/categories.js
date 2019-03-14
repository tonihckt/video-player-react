import React from 'react';
import Category from './category.js'
import './categories.css';
import Search from '../../widgets/containers/search-container.js'


function Categories (props) {
    return(
        <div className="Categories">
        <div className = "Categories-header">
            <Search />
        </div>
        {
            props.categories.map((item)=>{
                return (
                    <Category 
                        key={item.id}
                        {...item}
                        handleOpenModal = {props.handleOpenModal}
                    />
                )
            })
        }
        </div>
    )
}

export default Categories;