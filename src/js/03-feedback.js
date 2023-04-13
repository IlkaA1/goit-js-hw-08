
import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
populateSettings();
form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', onSubmit);
const formInput = {};




function onSubmit(evt){
    evt.preventDefault();

   if(form.elements.email.value === "" || form.elements.message.value === ""){
    return console.log('Please, fill in all data 🧐')
   }

    console.clear();
    evt.currentTarget.reset();
   localStorage.removeItem(LOCALSTORAGE_KEY);
   console.log("Please send your message!")
}

function  handleInput(evt) {
    evt.preventDefault();
   
    formInput[evt.target.name] = evt.target.value;
    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formInput));
};





function populateSettings(){
    const savedSettings = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if(savedSettings){
        const {email, message} = savedSettings;
         form.email.value = email;
         form.message.value = message;
         console.log(savedSettings);
        }
}



