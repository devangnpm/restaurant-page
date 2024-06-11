import {HomepageLoad} from './homepageLoad.js';
import {MenuPageLoad} from './menupageLoad.js';
import './style.css';
import {AboutPageLoad} from './aboutpageLoad.js';


const content=document.querySelector('#content');
const home_button=document.querySelector('#home');
const menu_button=document.querySelector('#menu');
const about_button=document.querySelector('#about');

HomepageLoad();

menu_button.addEventListener('click',()=>{
    content.innerHTML='';
    MenuPageLoad();
})

home_button.addEventListener('click',()=>{
    content.innerHTML='';
    HomepageLoad();
})

about_button.addEventListener('click',()=>{
    content.innerHTML='';
    AboutPageLoad();
})