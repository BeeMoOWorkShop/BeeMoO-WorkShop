document.addEventListener('DOMContentLoaded', (event) => {
    const workLink = document.getElementById('WorkLink');
    const Melink = document.getElementById('MeLink');
    const PayLink = document.getElementById('PayLink');
    const Contlink = document.getElementById('contLink');
    const Hirelink = document.getElementById('HireLink');
    const MenuClick = document.getElementById('Menu');


    
    /*workLink.addEventListener('click', (e) => {
        e.preventDefault();
        const bookmark = document.getElementById('WorkShow');
        bookmark.scrollIntoView({ behavior: 'smooth' });
    });*/

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
      

    /*PayLink.addEventListener('click', (e) => {
        e.preventDefault();
        const bookmark = document.getElementById('Pay');
        bookmark.scrollIntoView({ behavior: 'smooth' });
    });

    Contlink.addEventListener('click', (e) => {
        e.preventDefault();
        const bookmark = document.getElementById('cont');
        bookmark.scrollIntoView({ behavior: 'smooth' });
    });

   /* Melink.addEventListener('click', (e) => {
        e.preventDefault();
        const bookmark = document.querySelector('.MyImage');
        bookmark.scrollIntoView({ behavior: 'smooth' });
    });*/
});
