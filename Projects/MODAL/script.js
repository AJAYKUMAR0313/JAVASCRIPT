'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal')
const btnOpenModel = document.querySelectorAll('.show-modal')
const OpenModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const CloseModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for (let i = 0; i < btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click', OpenModal);
}
btnCloseModel.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && (!modal.classList.contains('hidden'))) {
        CloseModal();
    }
});
