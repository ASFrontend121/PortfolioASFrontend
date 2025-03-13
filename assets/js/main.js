'use strict';

function modal() {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelector('#btnModal');
    const modalClose = document.querySelector('.modal__close');
    const overlay = document.querySelector('.overlay');

    modalClose.addEventListener('click', function() {
        modal.classList.remove('modal-active');
        overlay.classList.remove('overlay-active');
    });

    modalBtn.addEventListener('click', function() {
        modal.classList.add('modal-active');
        overlay.classList.add('overlay-active');
    });

    overlay.addEventListener('click', function() {
        modal.classList.remove('modal-active');
        overlay.classList.remove('overlay-active');
    })
};

modal();