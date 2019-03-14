import React from 'react';
import './user-info.css';
import Avatar from '../../libs/components/avatar.js'
import Icon from '../../icons/components/icon.js'

const UserInfo = (props) => {
    
    <div 
        className="UserInfo"
        onClick="prop.handleClick"
    >
        <div className="UserInfo-name">
            <span>{props.name}{props.surname}</span>  
        </div>

        <div className = "UserInfo-avatar">
            <Avatar
                size      = {20}
                imageURL  = {props.avatar}
            />
        </div>

        <div className = "UserInfo-chevron">
            <Icon
            size  = {10}
            color = "red"
            >
{/*
            <path d="M 3.0650221,5.6443397 A 2.9772189,2.9772189 0 0 0 0.84105256,10.694059 L 15.99893,26.776411 31.156809,10.694059 A 2.9772189,2.9772189 0 1 0 26.825155,6.6095127 L 15.99893,18.095661 5.1727056,6.6095127 A 2.9772189,2.9772189 0 0 0 3.0650221,5.6443397 Z"></path>
*/}
            </Icon>
        </div>

    </div>
    
    
}

export default UserInfo;