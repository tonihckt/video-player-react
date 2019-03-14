//import React, {Component} from 'react';
import React from 'react';

import Media from './media.js';
import './Playlist.css';
//import Play from '../../icons/components/play.js';
import Control from '../../icons/components/control.js';
import Category from '../../categories/components/category.js';

function Playlist(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => {
          return <Media 
            openModal = {props.handleOpenModal} 
            {...item} 
            key={item.id} />
        })
      }
    </div>
  )
}


/*
/// componete funcional
function Playlist(props){//función que muestra los Playlist
    const category = props.data.categories;
    return (//devolvemos el componente entero
      <div>
      {
        category.map((item) => {//renderizamos cada categoria a partir de aqui
          return(//por cada mapeo devolvemos Categoria
            <div className="Category"key={item.id}>
            <section>


                <h2 className="Category-title">{item.title} </h2>
                <h3 className="Category-descrip">{item.description}</h3>
                <div className="Playlist">
                {
                    item.playlist.map((playlist) => {//renderizamos cada playlist a partir de aqui
                    return(//por cada mapeo devolvemos Playlist
                        <Media {...playlist} key={playlist.id} />//uasmos el componente media para cada cover
                    )//cierro return playlist
                    })//cierro map playlist
                }
                </div>
              </section>
            </div>
          )//cierro return categoria
        })//cierro map categoria
      }
      </div>
    )
}//cierro componet

*/

//  prure compnet
/*
class Playlist extends Component{
    render(){
        console.log(this.props.data);
        const playlist = this.props.data.categories[0].playlist;
        
        //const trends = this.props.data.categories[0].playlist;
        //const popular= this.props.data.categories[1].playlist;
        //const recommendations = this.props.data.categories[2].playlist;

        //const {trends, popular, recommendations} = {trends, popular, recommendations}.map((item) => {
        //    return <Media {...item} key={item.id} />
        //  });
       
        return(
            <div className="Category">
                <section>
                    <h1 className="Category-title">{ this.props.data.categories[0].title }</h1>
                    <p className="Category-descrip"></p>

                    <div className="Playlist">
                    <Play
                      size={100}
                      color="red"
                    />
                    {
                      playlist.map((item)=>{
                          return <Media
                              //title={item.title}
                              {...item}
                              key={item.id}/>
                      })  
                    }
                    </div>
                </section>
            </div>

        )
    }
}
*/
export default Playlist;