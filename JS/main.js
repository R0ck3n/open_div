const open = (p1,p2) => {
    p2.style.height="auto";
    p2.style.padding="2rem 1rem 2rem 1rem";
    p1.addEventListener("click", () => close(p2));
}
const close = (p2) => {
    p2.style.height=0;
    p2.style.padding="0 0 0 0";
    main();
}

const main = () => {
    const get = document.querySelectorAll("div");
    for (let i = 1; i < get.length; i++) {
        const p1 = get[i].firstElementChild;
        const p2 = get[i].lastElementChild;    
    p1.addEventListener("click", () => open(p1,p2));
    }
};

addEventListener("load", main);
