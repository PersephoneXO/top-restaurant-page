//function to create the main contact container
const createMainContactContainer=()=>{
    let mainContainer=document.createElement('div');
    mainContainer.classList.add('main-container');
    mainContainer.id='contact-content-container';

    //create contact title
    let contactTitle=document.createElement('p');
    contactTitle.id='contact-title';
    contactTitle.textContent='Contact Us';
    mainContainer.appendChild(contactTitle);

    //create div that contains the form
    let formContainer=document.createElement('div');
    formContainer.classList.add('contact-form-container');

    //create form
    let form=document.createElement('form');
    form.setAttribute('action','#');
    form.setAttribute('method','post');
    form.classList.add('form-element');

    //create input container
    let inputContainer=document.createElement('div');
    inputContainer.classList.add('input-container');

    //create all single line inputs
    inputContainer.appendChild(createSingleLineInput('text','name-input',"Your name *"));
    inputContainer.appendChild(createSingleLineInput('email','email-input',"Your e-mail *"));
    inputContainer.appendChild(createSingleLineInput('tel','phone-input',"Your phone number *"));
    //create multi line input
    let multiLineInput=document.createElement('textarea');
    multiLineInput.classList.add('multi-line-input');
    multiLineInput.setAttribute('name','message-input');
    multiLineInput.setAttribute('placeholder','Message *');
    inputContainer.appendChild(multiLineInput);

    //append input container to the form
    form.appendChild(inputContainer);

    //create send message button
    let sendMessageButton=document.createElement('button');
    sendMessageButton.id='send-message-button';
    sendMessageButton.setAttribute('type','submit');
    sendMessageButton.setAttribute('value','send-message-button');
    sendMessageButton.setAttribute('formmethod','post');
    sendMessageButton.textContent='Send Message';
    form.appendChild(sendMessageButton);

    //append form to the form container
    formContainer.appendChild(form);

    //append the form container to the main container
    mainContainer.appendChild(formContainer);

    return mainContainer;
};

//function to create the single line inputs for the form
function createSingleLineInput(type,name,placeholder){
    let input=document.createElement('input');
    input.setAttribute('type',type);
    input.classList.add('single-line-input');
    input.setAttribute('name',name);
    input.setAttribute('placeholder',placeholder);
    return input;
}

export{createMainContactContainer};
