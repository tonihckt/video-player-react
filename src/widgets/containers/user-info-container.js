import React, {Component} from 'react';
import UserInfo from '../components/user-info.js';

class UserInforContainer extends Component{
    state = {
        inputValue:'',
    }

	toggleInfo = (event) => {
		event.preventDefault()
		//alert(1)
    }
    
    render (){
        return (
            <UserInfo
                {...props.myUserInfo}
                handleClick = {this.toggleInfo}
            />
        )
    }

}

export default UserInforContainer;