window.addEventListener('DOMContentLoaded', () => {
    // Popup cookies
    function showCookiePopup() {
        const popup = document.getElementById('cookie-popup');
        popup.classList.add('show');
    }
    function hideCookiePopup() {
        const popup = document.getElementById('cookie-popup');
        popup.classList.remove('show');
        popup.classList.add('hide');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }
    document.getElementById('accept-cookies').onclick = hideCookiePopup;
    document.getElementById('decline-cookies').onclick = hideCookiePopup;
    setTimeout(showCookiePopup, 700);
     
    document.getElementById("num").textContent = Math.floor(Math.random() * 100) + 1;

    // Animación de tarjetas de noticias
    const cards = document.querySelectorAll('.news-card');
    cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('animate-in'), 160 + i * 120);
    });

    // Carrusel de anuncios principales
    const ads = document.querySelectorAll('#ads-carousel .ad');
    let currentAd = 0;
    function showAd(index) {
        ads.forEach((ad, i) => ad.classList.toggle('active', i === index));
    }
    function nextAd() {
        currentAd = (currentAd + 1) % ads.length;
        showAd(currentAd);
    }
    if (ads.length > 0) {
        showAd(currentAd);
        setInterval(nextAd, 3500);
    }

    // Carrusel de anuncios destacados
    const featuredAds = document.querySelectorAll('#featured-ads-carousel .featured-ad');
    let currentFeaturedAd = 0;
    function showFeaturedAd(index) {
        featuredAds.forEach((ad, i) => ad.classList.toggle('active', i === index));
    }
    function nextFeaturedAd() {
        currentFeaturedAd = (currentFeaturedAd + 1) % featuredAds.length;
        showFeaturedAd(currentFeaturedAd);
    }
    if (featuredAds.length > 0) {
        showFeaturedAd(currentFeaturedAd);
        setInterval(nextFeaturedAd, 4000);
    }
});