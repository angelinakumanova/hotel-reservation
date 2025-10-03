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


document.addEventListener('DOMContentLoaded', () => {
    // Back button
    document.querySelector('#search-back-btn')?.addEventListener('click', fillSearchForm);

    function fillSearchForm(e) {
        e.preventDefault();
        changeContent('search-form-content');
        document.querySelector('#check-in').value = reservation.startDate || '';
        document.querySelector('#check-out').value = reservation.endDate || '';
        document.querySelector('#people').value = reservation.guestsCount || '';
    }

    // Избор на стая
    document.querySelectorAll('.room-type').forEach(room => {
        room.addEventListener("click", selectRoomType)
    });

    function selectRoomType(e) {
        let myTarget;
        e.preventDefault();
        if (e.target.querySelector('img') != null) {
            myTarget = e.target;
        } else {
            myTarget = e.target.parentElement;
        }
        document.querySelectorAll('.room-type').forEach(room =>
            room.classList.remove('selected-room'));
        myTarget.classList.add('selected-room');
    }

    // Напред бутон
    document.querySelector('#search-next-btn')?.addEventListener('click', findRoom);

    function findRoom(e) {
        e.preventDefault();
        const roomInfo = document.querySelector('.selected-room h4').textContent;
        reservation.roomType = roomInfo;
        console.log(reservation);
        changeContent('guest-details-form-content');
    }
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
