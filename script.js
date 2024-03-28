document.addEventListener('DOMContentLoaded', (event) => {
    const workLink = document.getElementById('WorkLink');
    const Melink = document.getElementById('MeLink');
    const PayLink = document.getElementById('PayLink');
    const Contlink = document.getElementById('contLink');
    const Hirelink = document.getElementById('HireLink');
    const MenuClick = document.getElementById('Menu');

    Hirelink.addEventListener('click', (e) => {
        e.preventDefault();
        const bookmark = document.getElementById('Hire');
        bookmark.scrollIntoView({ behavior: 'smooth' });
    });

    MenuClick.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Clicked')
        if (document.querySelector('.headerSmaller').classList.contains('active')) {
        document.querySelector('.headerSmaller').classList.remove('active')
        } else {
            document.querySelector('.headerSmaller').classList.add('active')
        }
    });
});
