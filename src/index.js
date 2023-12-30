//DOM elements
const contentContainer=document.querySelector('#content');

//import functions from external files
import { createHeader,createMainHomeContainer } from "./home";
import { createMainMenuContainer } from "./menu";

//run functions to create home page on page load

document.addEventListener('DOMContentLoaded',()=>{
    contentContainer.appendChild(createHeader());
    contentContainer.appendChild(createMainMenuContainer());
    //contentContainer.appendChild(createMainHomeContainer());
    return contentContainer;
});
