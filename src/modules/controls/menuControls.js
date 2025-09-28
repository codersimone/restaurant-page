export function initMenuControls(menuList) {
    const toggles = menuList.querySelectorAll('.headerBtn');

    toggles.forEach((toggle) => {
        const sectionItem = toggle.closest('.sectionItem');
        const dishesList = sectionItem.querySelector('.dishesList');

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';

            if (expanded) {
                toggle.setAttribute('aria-expanded', 'false');
                dishesList.setAttribute('aria-hidden', 'true');
                dishesList.style.maxHeight = '0px';
                sectionItem.classList.remove('open');
            } else {
                toggle.setAttribute('aria-expanded', 'true');
                dishesList.setAttribute('aria-hidden', 'false');
                dishesList.style.maxHeight = dishesList.scrollHeight + 'px';
                sectionItem.classList.add('open');
            }
        });
    });
}
