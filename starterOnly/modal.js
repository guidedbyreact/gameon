function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

/**
 * Validates the modal form fields.
 * 
 * @returns {boolean} - Returns true if all fields are valid, otherwise returns false.
 */
 function validate() {
  let isValid = true;
 

  /** @type {HTMLInputElement} 
   * Validation du prenom
  */
  const firstName = document.getElementById('first');
  if (firstName.value.trim() === "") {
      isValid = false;
      firstName.classList.add('invalid');
      firstName.parentElement.setAttribute("data-error", "Invalid first name");
      firstName.parentElement.setAttribute("data-error-visible", "true");
  } else {
      firstName.classList.remove('invalid');
      firstName.parentElement.removeAttribute("data-error");
      firstName.parentElement.setAttribute("data-error-visible", "false");
  }

  /** @type {HTMLInputElement} 
   * validation du nom
  */
  const lastName = document.getElementById('last');
  if (lastName.value.trim() === "") {
    isValid = false;
    lastName.classList.add('invalid');
    lastName.parentElement.setAttribute("data-error", "Invalid last name");
    lastName.parentElement.setAttribute("data-error-visible", "true");
  } else {
    lastName.classList.remove('invalid');
    lastName.parentElement.removeAttribute("data-error");
    lastName.parentElement.setAttribute("data-error-visible", "false");
  }

  /** @type {HTMLInputElement} 
   * Validation du mail
  */
  const email = document.getElementById('email');
  if (email.value.trim() === "") {
    isValid = false;
    email.classList.add('invalid');
    email.parentElement.setAttribute("data-error", "Invalid email");
    email.parentElement.setAttribute("data-error-visible", "true");
  } else {
    email.classList.remove('invalid');
    email.parentElement.removeAttribute("data-error");
    email.parentElement.setAttribute("data-error-visible", "false");
  }

  /** @type {HTMLInputElement} 
   * Validation de l 'anniversaire
  */
  const birthdate = document.getElementById('birthdate');
  if (birthdate.value.trim() === "") {
    isValid = false;
    birthdate.classList.add('invalid');
    birthdate.parentElement.setAttribute("data-error", "Invalid birtdate");
    birthdate.parentElement.setAttribute("data-error-visible", "true");
  } else {
    birthdate.classList.remove('invalid');
    birthdate.parentElement.removeAttribute("data-error");
    birthdate.parentElement.setAttribute("data-error-visible", "false");
  }

  /** @type {HTMLInputElement} 
   * validation de la quantité
  */
  const quantity = document.getElementById('quantity');
  if (quantity.value.trim() === "") {
    isValid = false;
    quantity.classList.add('invalid');
    quantity.parentElement.setAttribute("data-error", "Invalid quantity");
    quantity.parentElement.setAttribute("data-error-visible", "true");
  } else {
    quantity.classList.remove('invalid');
    quantity.parentElement.removeAttribute("data-error");
    quantity.parentElement.setAttribute("data-error-visible", "false");
  }

  /** @type {NodeListOf<HTMLInputElement>}
   * validation de la location
   */
  const locations = Array.from(document.querySelectorAll('input[name="location"]'));
  if (!locations.some(location => location.checked)) {
    isValid = false;
    locations[0].parentElement.setAttribute("data-error", "Invalid location");
    locations[0].parentElement.setAttribute("data-error-visible", "true");
  } else {
 
    locations[0].parentElement.removeAttribute("data-error");
    locations[0].parentElement.setAttribute("data-error-visible", "false");
  }

  /** @type {HTMLInputElement} 
   * validation des checkbox
  */
  const checkbox1 = document.getElementById('checkbox1');
  if (!checkbox1.checked) {
    checkbox1.classList.add('invalid');
    checkbox1.parentElement.setAttribute("data-error", "Invalid checkbox1");
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
  } else {
    checkbox1.classList.remove('invalid');
    checkbox1.parentElement.removeAttribute("data-error");
    checkbox1.parentElement.setAttribute("data-error-visible", "false");
  }

  if (isValid) {
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = "none"; 
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block'; 
  }
  
  if (isValid) {
    const confirmationModal = document.querySelector(".confirmation-modal");
    confirmationModal.style.display = "block"; 
  }
  

  return false;
}

/*const confirmationCloseBtn = document.querySelector(".confirmation-modal .close");
confirmationCloseBtn.addEventListener("click", function() {
const confirmationModal = document.querySelector(".confirmation-modal");
confirmationModal.style.display = "none";*/


// close modal event listener
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

// close modal enent listener if click hors modal
modalbg.addEventListener("click", function(event) {
  if (event.target === modalbg) {
    closeModal();
  }
});



