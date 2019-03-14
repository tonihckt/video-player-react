import React, {PureComponent}from 'react';
import './media.css';
import PropTypes from "prop-types";

class Media extends PureComponent{
  /*
    //cambiar un estado
    constructor(props){
        super(props)
        //this.handleClick = this.handleClick.bind(this);
        this.state = {
            author: this.props.author
        }
    }
  */
    state = {
        author: 'autor viejo',
    }

    handleClick (event){
        console.log(this.props.title)
    }

    
    handleClick = (event) => {
        //console.log(this.props.title)

        //this.setState({
        //    author: 'Nuevo Autor',
        //})
        //this.props.openModal(this.props);
        this.props.openModal(this.props);
    }
    
    ///plugin de babel para las propiedades estáticas de Ecma2016 
    //@babel/plugin-proposal-class-properties
    
    static propTypes = {
        cover: PropTypes.string,
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        type: PropTypes.oneOf(['video', 'audio'])
      };
    
    render(){
        // estilos en linea
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '2px solid red',
            }
        }
        const { title, author, cover} = this.props;
        
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                        src={cover}
                        alt=""
                        width={269}
                        height={160}
                    className="Media-image" />
                    <h3 className="Media-title">{title}</h3>
                    
                    <p className="Media-author">{author}</p>
                </div>
            </div>

            // estilos en linea
            /* 
            <div style={styles.container}>
                <div>
                    <img
                        src="./images/covers/bitcoin.jpg"
                        alt=""
                        width={269}
                        height={160}
                    />
                    <h3>Aprender</h3>
                    <p>Autor</p>
                </div>
            </div>
            */
        )
    }
}

// validr porpiedades
/*
Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}*/
export default Media;