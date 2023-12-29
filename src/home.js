//DOM elements
const contentContainer=document.querySelector('#content');


//funtion to create header div
function createHeader(){
    let headerContainer=document.createElement('div');
    headerContainer.classList.add('header');

    //create header title
    let headerTitle=document.createElement(p);
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
function createMainContainer(){
    let mainContainer=document.createElement('div');
    mainContainer.classList.add('main-container');

    //create second container for the content
    let mainContentContainer=document.createElement('div');

}
