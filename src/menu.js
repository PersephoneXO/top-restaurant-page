//function to create main container
const createMainMenuContainer=()=>{
    let mainContainer=document.createElement('div');
    mainContainer.classList.add('main-container');
    mainContainer.id='menu-content-container';

    //create inner container for the title
    let menuTitleContainer=document.createElement('div');
    menuTitleContainer.classList.add('menu-title-container');

    //create title content
    //create upper subtitle
    let menuUpperSubtitle=document.createElement('p');
    menuUpperSubtitle.id='menu-top-subtitle';
    menuUpperSubtitle.textContent=`FEATURES`;
    menuTitleContainer.appendChild(menuUpperSubtitle);
    //create title
    let menuTitle=document.createElement('p');
    menuTitle.id='menu-title';
    menuTitle.textContent=`Our Menu Highlights`;
    menuTitleContainer.appendChild(menuTitle);
    //create lower subtitle
    let menuSubtitle=document.createElement('p');
    menuSubtitle.id='menu-subtitle';
    menuSubtitle.textContent=`Discover our mouthwatering selection of dishes`;
    menuTitleContainer.appendChild(menuSubtitle);

    //append menu title container to the main container
    mainContainer.appendChild(menuTitleContainer);


    //create 2nd inner container for the menu divs
    let menuDivContainer=document.createElement('div');
    menuDivContainer.classList.add('menu-div-container');

    //create all menu divs
    menuDivContainer.appendChild(createMenuDiv('Appetizers','Delicious starters to kick off your meal'));
    menuDivContainer.appendChild(createMenuDiv('Main Courses','Satisfying dishes for the main event'));
    menuDivContainer.appendChild(createMenuDiv('Desserts','Sweet treats to end your meal on a high note'));
    menuDivContainer.appendChild(createMenuDiv('Beverages','Refreshing drinks to quench your thirst'));

    //append menu div container to the main container
    mainContainer.appendChild(menuDivContainer);
    return mainContainer
};


//function to create a menu div
function createMenuDiv(title,subtitle){
    let menuDiv=document.createElement('div');
    menuDiv.classList.add('menu-div');
    //add svg
    menuDiv.innerHTML+='<svg class="menu-div-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#2d2d2d" d="M121.059 29.509 64.596 0 6.919 29.509V95.51L67.087 128l53.993-32.554V29.53l-.021-.021zM60.7 117.291 13.307 91.699V39.856L60.7 63.574v53.717zm3.321-59.21L14.009 33.065 64.554 7.154l49.458 25.89-49.991 25.037zm50.672 33.682-47.606 28.785V63.659l47.606-23.803v51.907z"/></svg>';
    //create menu div title
    let menuDivTitle=document.createElement('p');
    menuDivTitle.classList.add('menu-div-title');
    menuDivTitle.textContent=title;
    menuDiv.appendChild(menuDivTitle);
    //create menu div subtitle
    let menuDivSubtitle=document.createElement('p');
    menuDivSubtitle.classList.add('menu-div-subtitle');
    menuDivSubtitle.textContent=subtitle;
    menuDiv.appendChild(menuDivSubtitle);

    return menuDiv;
};

export{createMainMenuContainer};
