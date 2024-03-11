document.addEventListener('DOMContentLoaded', (event) => {
    const workLink = document.getElementById('WorkLink');
    const Melink = document.getElementById('MeLink');
    const PayLink = document.getElementById('PayLink');
    const Contlink = document.getElementById('contLink');
    const Hirelink = document.getElementById('HireLink');

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