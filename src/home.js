

//funtion to create header div
const createHeader=()=>{
    let headerContainer=document.createElement('div');
    headerContainer.classList.add('header');

    //create header title
    let headerTitle=document.createElement('p');
    headerTitle.id='header-title';
    headerTitle.textContent='RESTAURANT';
    headerContainer.appendChild(headerTitle);

    //create header tabs
    let headerTabContainer=document.createElement('div');
    headerTabContainer.classList.add('header-tabs');
    headerTabContainer.appendChild(createHeaderTabs('Home'));
    headerTabContainer.appendChild(createHeaderTabs('Menu'));
    headerTabContainer.appendChild(createHeaderTabs('Contact'));
    headerContainer.appendChild(headerTabContainer);

    return headerContainer;
}

//function to create header tab buttons
function createHeaderTabs(page){
    let headerTab=document.createElement('button');
    headerTab.textContent=page;
    headerTab.classList.add('header-tab-styles');
    return headerTab;
}

//function to create main container
const createMainHomeContainer=()=>{
    let mainContainer=document.createElement('div');
    mainContainer.classList.add('main-container');

    //create second container for the content
    let mainContentContainer=document.createElement('div');
    mainContentContainer.classList.add('main-content-container');

    //create content
    //create title
    let welcomeTitle=document.createElement('p');
    welcomeTitle.id='welcome-title';
    welcomeTitle.textContent=`Welcome to [Restaurant Name]`;
    mainContentContainer.appendChild(welcomeTitle);
    //create subtitle
    let welcomeSubtitle=document.createElement('p');
    welcomeSubtitle.id='welcome-subtitle';
    welcomeSubtitle.textContent=`Delicious food and great ambiance`;
    mainContentContainer.appendChild(welcomeSubtitle);
    //create view menu button
    let viewMenuButton=document.createElement('button');
    viewMenuButton.id='view-menu-button';
    viewMenuButton.textContent=`View Menu`;
    mainContentContainer.appendChild(viewMenuButton);

    //append the main content container to the main container
    mainContainer.appendChild(mainContentContainer);

    return mainContainer;
}


export {createHeader,createMainHomeContainer};
