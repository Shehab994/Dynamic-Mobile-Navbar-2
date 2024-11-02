let icons = document.querySelectorAll('a');
let toggleBox = document.querySelector('.toggle-box');

icons.forEach((icon) => {
    icon.addEventListener('click', (btn) => {
        toggleBox.style.left = (btn.target.offsetLeft) + 'px';
        toggleBox.style.width = (btn.target.offsetWidth) + 'px';

    })
});

toggleBox.style.width = icons[0].offsetWidth + 'px';