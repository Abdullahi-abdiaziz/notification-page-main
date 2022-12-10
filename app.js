const mark = document.querySelector('.header__mark');
const popup = document.querySelector('.notification__popup');
const unread = document.querySelectorAll('.unread');
const state = document.querySelectorAll('.status__state');

mark.addEventListener('click',()=> {
    popup.classList.add('hidden');
    unread.forEach(item => {
        item.classList.remove('unread');
    })
    state.forEach(item => {
        item.classList.remove('status__state');
    })
});
