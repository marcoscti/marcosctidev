document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 6,
        focusAt: 'center',
        autoplay: 2000,
        hoverpause: true,
        breakpoints: {
            768: {
                perView: 2
            },
            300: {
                perView: 2
            }
        }
    }).mount();
    const btnDarkMode = document.getElementById('dark-mode');
    if(localStorage.getItem('colorMode') == 'true'){
        btnDarkMode.innerHTML = 'Modo Claro';
        document.body.classList.add('dark');
        document.querySelectorAll('img').forEach(img => {
            img.classList.add('dark');
        })
    }else{
        btnDarkMode.innerHTML = 'Modo Escuro';
    }
    btnDarkMode.addEventListener('click', ()=>{

        if (localStorage.getItem('colorMode') == 'true') {
            btnDarkMode.innerHTML = 'Modo Escuro';
            document.querySelectorAll('img').forEach(img => {
                img.classList.remove('dark');
            })
            document.body.classList.remove('dark');
            localStorage.removeItem('colorMode');
            btnDarkMode.innerHTML = 'Modo Escuro';
        }else{
            localStorage.setItem('colorMode', 'true');
            document.querySelectorAll('img').forEach(img => {
                img.classList.add('dark');
            })
            btnDarkMode.innerHTML = 'Modo Claro';
            btnDarkMode.classList.add('dark');
            document.body.classList.add('dark');
        }
    });
    document.getElementById('send-whatsapp').addEventListener('click', () => {
        let dataLayer = window.dataLayer || [];
        dataLayer.push({
        'event': 'WhatsappClick',
        'eventCategory': 'Contato',
        'eventAction': 'Click',
        'eventLabel': 'Contato Whatsapp',
        'eventDate': new Date()
        });
      })
});


