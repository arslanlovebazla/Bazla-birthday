function openBox() {
    // Animation to scale up the box before disappearing
    const box = document.querySelector('.box-container');
    box.style.transform = "scale(0)";
    box.style.transition = "1s";

    setTimeout(() => {
        document.getElementById('page1').classList.add('hidden');
        document.getElementById('page2').classList.remove('hidden');
        window.scrollTo(0, 0);
    }, 1000);
}
