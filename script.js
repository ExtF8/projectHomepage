const CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#demo-navigation');
const CShamburgerMenu = document.querySelector('#demo-navigation .demo-toggle');

CShamburgerMenu.addEventListener('click', function () {
    CShamburgerMenu.classList.toggle('demo-active');
    CSnavbarMenu.classList.toggle('demo-active');
    CSbody.classList.toggle('demo-open');
    ariaExpanded();
});

function ariaExpanded() {
    const csUL = document.querySelector('#demo-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

const dropDowns = Array.from(document.querySelectorAll('#demo-navigation .demo-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('demo-active');
    };
    item.addEventListener('click', onClick);
}
