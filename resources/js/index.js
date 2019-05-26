const menuTrigger = document.querySelector('.global-navigation__menu-trigger');
const menu = document.querySelector('.global-navigation__menu');
const menuItems = document.querySelectorAll('.global-navigation__menu li'); //They're not really links, you're grabbing the surrounding `li` elements

const setAnimationDelayForElements = (elements) => {
    elements.forEach((element, index) => {
        element.style.animationDelay = `${(index + 1) * 0.15}s`;
        return null;
        //  In functions like this where we are only causing
        // "side-effects" (DOM manipulation, etc) I like to still return something.
        // It's a personal preference but I like to be explicit
        // in general and always having a return value
        // that I set. It helps me keep track of what I intend
        // to be happening.
        // And I return `null` in particular because functions return `undefined` by default
        // so by setting to something else I know "I did that" / "I did that on purpose"
    });
};

const onMenuTriggerClick = (menu, menuTrigger) => {
    menu.classList.toggle('global-navigation__menu--active');
    menuTrigger.classList.toggle('global-navigation__menu-trigger--active');
    return null;
};

const init = (menuTrigger, menuItems) => {
    setAnimationDelayForElements(menuItems); // We don't need to set all of the animation properties with JS, we only care about the delay, and we only need to set it once (not on every time we open the menu)
    menuTrigger.addEventListener('click', () => {
        onMenuTriggerClick(menu, menuTrigger);
    });
    return null;
};

init(menuTrigger, menuItems); // I wouldn't modularize it just for this small showcase unless you actually were componentizing the functionality (like this site showcasing a react component or something)
