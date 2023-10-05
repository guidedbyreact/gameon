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
  } else {
      firstName.classList.remove('invalid');
  }

  /** @type {HTMLInputElement} 
   * validation du nom
  */
  const lastName = document.getElementById('last');
  if (lastName.value.trim() === "") {
      isValid = false;
      lastName.classList.add('invalid');
  } else {
      lastName.classList.remove('invalid');
  }

  /** @type {HTMLInputElement} 
   * Validation du mail
  */
  const email = document.getElementById('email');
  if (email.value.trim() === "") {
      isValid = false;
      email.classList.add('invalid');
  } else {
      email.classList.remove('invalid');
  }

  /** @type {HTMLInputElement} 
   * Validation de l 'anniversaire
  */
  const birthdate = document.getElementById('birthdate');
  if (birthdate.value.trim() === "") {
      isValid = false;
      birthdate.classList.add('invalid');
  } else {
      birthdate.classList.remove('invalid');
  }

  /** @type {HTMLInputElement} 
   * validation de la quantité
  */
  const quantity = document.getElementById('quantity');
  if (quantity.value.trim() === "") {
      isValid = false;
      quantity.classList.add('invalid');
  } else {
      quantity.classList.remove('invalid');
  }

  /** @type {NodeListOf<HTMLInputElement>}
   * validation de la location
   */
  const locations = document.querySelectorAll('input[name="location"]');
  if (![...locations].some(location => location.checked)) {
      isValid = false;
      locations.forEach(location => location.classList.add('invalid'));
  } else {
      locations.forEach(location => location.classList.remove('invalid'));
  }

  /** @type {HTMLInputElement} 
   * validation des checkbox
  */
  const checkbox1 = document.getElementById('checkbox1');
  if (!checkbox1.checked) {
      isValid = false;
      checkbox1.classList.add('invalid');
  } else {
      checkbox1.classList.remove('invalid');
  }

  if (isValid) {
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = "none"; 
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block'; 
  }
  

  return isValid;
}

// close modal event listener
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

// close modal enent listener if click hors modal
modalbg.addEventListener("click", function(event) {
  if (event.target === modalbg) {
    closeModal();
  }
});


