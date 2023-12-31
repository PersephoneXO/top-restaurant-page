//DOM elements
const contentContainer=document.querySelector('#content');

//import functions from external files
import { createHeader,createMainHomeContainer } from "./home";
import { createMainMenuContainer } from "./menu";
import { createMainContactContainer } from "./contact";

//import css file
import '../src/'

//run functions to create home page on page load
document.addEventListener('DOMContentLoaded',()=>{
    contentContainer.appendChild(createHeader());
    contentContainer.appendChild(createMainHomeContainer());
    return contentContainer;
});

//run functions to create and load home page on tab click
contentContainer.addEventListener('click',(e)=>{
    if(e.target.id=='home-button'){
        contentContainer.innerHTML='';
        contentContainer.appendChild(createHeader());
        contentContainer.appendChild(createMainHomeContainer());
        return contentContainer
    }
});

//run functions to create and load menu page on tab or button click
contentContainer.addEventListener('click',(e)=>{
    if(e.target.id=='menu-button'||e.target.id=='view-menu-button'){
        contentContainer.innerHTML='';
        contentContainer.appendChild(createHeader());
        contentContainer.appendChild(createMainMenuContainer());
        return contentContainer
    }
});

//run functions to create and load contact page on tab click
contentContainer.addEventListener('click',(e)=>{
    if(e.target.id=='contact-button'){
        contentContainer.innerHTML='';
        contentContainer.appendChild(createHeader());
        contentContainer.appendChild(createMainContactContainer());
        return contentContainer
    }
});
