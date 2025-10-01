// Global reservation object (shared between roles)
let reservation = {
  startDate: null,
  endDate: null,
  guestsCount: 0,
  roomType: null,
  name: null,
  phone: null,
  email: null,
};

// Function to switch visible content
function changeContent(className) {
  document.querySelectorAll('.custom-form')
    .forEach(div => div.classList.add('hidden'));
  const target = document.querySelector(`.${className}`);
  if (target) target.classList.remove('hidden');
}

// Offerer role: handle offers form
function showOffers() {
  let room = document.getElementById('offerRoom').value;
  let nights = document.getElementById('offerNights').value;
  let price = document.getElementById('offerPrice').value;

  console.log(`Room: ${room}, Nights: ${nights}, Price: ${price}`);

  // Temporary navigation to next form
  changeContent('search-result-form-content');
}

document.addEventListener('DOMContentLoaded', () => {
  // Offerer
  const btnOffers = document.getElementById('btnOffersNext');
  if (btnOffers) btnOffers.addEventListener('click', showOffers);

  // Verifier: back button
  const btnBack = document.querySelector('#confirm-back-btn');
  if (btnBack) btnBack.addEventListener('click', (e) => {
    e.preventDefault();
    changeContent('guest-details-form-content');
  });

  // Verifier: confirm reservation
  const btnConfirm = document.querySelector('#confirm-reservation');
  if (btnConfirm) btnConfirm.addEventListener('click', (e) => {
    e.preventDefault();
    changeContent('thank-you-content');
  });

  // Thank you page: new reservation
  const btnNew = document.querySelector('#new-reservation');
  if (btnNew) btnNew.addEventListener('click', (e) => {
    e.preventDefault();
    changeContent('search-form-content');
  });
});
