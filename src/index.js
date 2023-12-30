//DOM elements
const contentContainer=document.querySelector('#content');

import { createHeader,createMainHomeContainer } from "./home";

//run functions to create home page on page load
document.addEventListener('DOMContentLoaded',()=>{
    contentContainer.appendChild(createHeader());
    contentContainer.appendChild(createMainHomeContainer());
    return contentContainer;
});
