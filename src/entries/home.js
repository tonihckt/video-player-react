//console.log ('Hola mundo');
// Para crear componetes
import React from 'react';
// Para renderizarlo
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

//import { render } from"react-dom";

// Los compoxnente siempre en Mayusculas
//import Media from './src/playlist/components/media.js';
//import Playlist from './src/playlist/components/playlist.js'
//import Saludo from './src/saludo.js';
import Home from '../pages/containers/home.js'


/* importar APIS---------------------------------------- */
import data from '../data/api.json';
import extras from '../data/api-extra.json';
import user from '../data/user.json';
import friends from '../data/friends.json';

/* Styles---------------------------------------- */
import '../css/style.css'






//const app = document.getElementById('app');
const homeContainer = document.getElementById('home-container');

//const saludo = <h1>Hola! Est</h1>;
//ReactDOM.render(que voy a renderizar, y donde);
/*
ReactDOM.render(<Media 
    type="video"
    title="Que es responsive" 
    author="Toni" 
    image="./images/covers/responsive.jpg"/>, app);
*/
//ReactDOM.render(<Playlist 
//    data={data}/>, app);

//ReactDOM.render(<Home data={data}/>, homeContainer);
render(<Home data={data}/>, homeContainer);