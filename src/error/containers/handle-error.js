import React, {Component} from 'react';
import RegularError from '../components/regular-error.js';

class HandleError extends Component{
    state = {
        HandleError: false,
    }
    componentDidCatch(error, info){
        this.setState({
            HandleError: true,
        })
        // envia error a servicio central


    }
    render(){
        if (this.state.HandleError){
            return (
                <RegularError />
            )
        }
        return this.props.children
    }
}

export default HandleError;