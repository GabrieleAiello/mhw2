/****** Gestione Navbar2 centrale ******/
let sezioneNovitaEInEvidenza, sezioneUomo, sezioneDonna, sezioneKids, sezioneOutlet;

document.addEventListener("DOMContentLoaded", function() {
    sezioneNovitaEInEvidenza = document.querySelector('#elenco-pannello1');
    sezioneUomo = document.querySelector('#elenco-pannello2');
    sezioneDonna = document.querySelector('#elenco-pannello3');
    sezioneKids = document.querySelector('#elenco-pannello4');
    sezioneOutlet = document.querySelector('#elenco-pannello5');

    const novitaEInEvidenzaLink = document.querySelector('#navbar2-C a:first-child');
    novitaEInEvidenzaLink.addEventListener('mouseenter', function() {
        closePanels();
        sezioneNovitaEInEvidenza.style.display = 'block';
    });
        sezioneNovitaEInEvidenza.addEventListener('mouseleave', function() {
        sezioneNovitaEInEvidenza.style.display = 'none';
    });

    const uomoLink = document.querySelector('#navbar2-C a:nth-child(2)');
    uomoLink.addEventListener('mouseenter', function() {
        closePanels();
        sezioneUomo.style.display = 'block';
    });
    sezioneUomo.addEventListener('mouseleave', function() {
        sezioneUomo.style.display = 'none';
    });

    const donnaLink = document.querySelector('#navbar2-C a:nth-child(3)');
    donnaLink.addEventListener('mouseenter', function() {
        closePanels();
        sezioneDonna.style.display = 'block';
    });
    sezioneDonna.addEventListener('mouseleave', function() {
        sezioneDonna.style.display = 'none';
    });

    const kidsLink = document.querySelector('#navbar2-C a:nth-child(4)');
    kidsLink.addEventListener('mouseenter', function() {
        closePanels();
        sezioneKids.style.display = 'block';
    });
    sezioneKids.addEventListener('mouseleave', function() {
        sezioneKids.style.display = 'none';
    });

    const outletLink = document.querySelector('#navbar2-C a:nth-child(5)');
    outletLink.addEventListener('mouseenter', function() {
        closePanels();
        sezioneOutlet.style.display = 'block';
    });
    sezioneOutlet.addEventListener('mouseleave', function() {
        sezioneOutlet.style.display = 'none';
    });
}); 

function closePanels() {
    sezioneNovitaEInEvidenza.style.display = 'none';
    sezioneUomo.style.display = 'none';
    sezioneDonna.style.display = 'none';
    sezioneKids.style.display = 'none';
    sezioneOutlet.style.display = 'none';
}


/******* Cambio immagine preferito al click *******/
document.addEventListener("DOMContentLoaded", function() {
    const hearts = document.querySelectorAll('.catalog-actions img.img-preferito');

    hearts.forEach(function(heart) {
        heart.addEventListener('click', function() {
            if (heart.src.includes('immagini/preferiti.png')) {
                heart.src = 'immagini/preferito-pieno.png';
            } else {
                heart.src = 'immagini/preferiti.png';
            }
        });
    });
});


/******* Gestione carrello *******/
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.catalog-actions .buttonAddToCart');
    const cartCounter = document.createElement('div');
    let itemCount = 0;

    cartCounter.textContent = 'Gli elementi presenti nel carrello sono: ' + itemCount;
    cartCounter.classList.add('cart-counter');

    const boxEsterno = document.querySelector('#catalogo .BoxEsterno');
    boxEsterno.parentNode.insertBefore(cartCounter, boxEsterno.nextSibling);

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            if (button.textContent === 'Aggiungi al Carrello') {
                button.textContent = 'Rimuovi dal carrello';
                button.style.backgroundColor = 'grey';
                itemCount++;
            } else {
                button.textContent = 'Aggiungi al Carrello';
                button.style.backgroundColor = 'lightgray';
                itemCount--;
            }
            cartCounter.textContent = 'Gli elementi presenti nel carrello sono: ' + itemCount;
        });
    });
});


/******* Menù laterale mobile ******/
document.addEventListener("DOMContentLoaded", function() {
    let item = document.querySelector('#Hamburger-icon');
    item.addEventListener("click", function() {
        document.body.classList.toggle('menu-open');
    });
});

/****** Tooltip Nike ******/
document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('#Nike');
    const tooltipText = image.getAttribute('data-text');
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = tooltipText;
    document.body.appendChild(tooltip);

    image.addEventListener('mouseenter', function() {
        tooltip.style.display = 'block';
    });

    image.addEventListener('mousemove', function(e) {
        updateTooltipPosition(e);
    });

    image.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });

    function updateTooltipPosition(e) {
        const xOffset = 20;
        const yOffset = 10;

        let x = e.clientX + xOffset;
        let y = e.clientY + yOffset;


        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }
});

