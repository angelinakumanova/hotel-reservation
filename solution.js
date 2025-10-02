// Global state
let reservation = {
  startDate: null,
  endDate: null,
  guestsCount: 0,
  roomType: null,
  name: null,
  phone: null,
  email: null,
};

function changeContent(className) {
  document.querySelectorAll('.custom-form')
    .forEach(div => div.classList.add('hidden'));
  const target = document.querySelector(`.${className}`);
  if (target) target.classList.remove('hidden');
}


document.querySelector('#search-back-btn')
  ?.addEventListener('click', (e) => {
    e.preventDefault();
    changeContent('search-form-content');
    const inEl  = document.querySelector('#check-in');
    const outEl = document.querySelector('#check-out');
    const pplEl = document.querySelector('#people');
    if (inEl)  inEl.value  = reservation.startDate || '';
    if (outEl) outEl.value = reservation.endDate   || '';
    if (pplEl) pplEl.value = reservation.guestsCount || '';
  });

document.querySelectorAll('.room-type').forEach(card => {
  card.addEventListener('click', (e) => {
    document.querySelectorAll('.room-type')
      .forEach(x => x.classList.remove('selected-room'));
    e.currentTarget.classList.add('selected-room');
  });
});


document.querySelector('#search-next-btn')
  ?.addEventListener('click', (e) => {
    e.preventDefault();
    const chosen = e.target
      .closest('form')
      .querySelector('.selected-room h4')
      ?.textContent || '';
    reservation.roomType = chosen;
    console.log('Selected offer:', reservation.roomType);
    changeContent('guest-details-form-content');
  });

// ----- Verifier / Thank-you wiring -----
document.querySelector('#confirm-back-btn')
  ?.addEventListener('click', (e) => {
    e.preventDefault();
    changeContent('guest-details-form-content');
  });

document.querySelector('#confirm-reservation')
  ?.addEventListener('click', (e) => {
    e.preventDefault();
    changeContent('thank-you-content');
  });

document.querySelector('#new-reservation')
  ?.addEventListener('click', (e) => {
    e.preventDefault();
    changeContent('search-form-content');
  });
