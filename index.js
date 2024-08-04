let themeButton = document.getElementById("theme-button")
const toggleDarkMode = () => {
   document.body.classList.toggle("dark-mode");
  
}

themeButton.addEventListener("click", toggleDarkMode)

const addSignature = (person) => {
  const email = document.getElementById("petition-email").value;
  const name = document.getElementById("petition-name").value;
  const hometown = document.getElementById("petition-hometown").value;
console.log(person)
const signatures = document.getElementById("signatures");
const newP = document.createElement('p');
  newP.innerHTML = '' + person.name + ' from ' + person.hometown + ' supports this.';
signatures.appendChild(newP);
}

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  console.log(petitionInputs);
  let person = {
    "name" : petitionInputs[0].value,
    "hometown" : petitionInputs[1].value,
    "email" : petitionInputs[2].value
  }
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++){
     
  }

  // TODO: Validate the value of each input



  // TODO: Call addSignature() and clear fields if no errors
  addSignature(person);
  toggleModal(person);
}
let signNowButton = document.getElementById("sign-now-button");
signNowButton.addEventListener('click', validateForm);

let animation = {
  'revealDistance': 150,
  'initialOpacity': 0,
  'transitionDelay': 0,
  'transitionDuration' :'2s',
  'transitionProperty': 'all',
  'transitionTimingFunction': 'ease'
}



const reveal = (event) => {
  const  revealableContainers = document.querySelectorAll('.revealable');
  for(let i = 0; i < revealableContainers.length ; i++){
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add("active");
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const toggleModal = (person) => {
  let modal = document.getElementById('thanks-modal');
  let modalContent = document.querySelector('#thanks-modal-content');

  modal.style.display = 'flex';
    modalContent.innerHTML = `Thank you ${person.name} for donationg`;

  setTimeout( () => {
    modal.style.display = 'none';
  }, 3178)
}