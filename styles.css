body {
    font-family: 'Montserrat', Arial, sans-serif;
    background: #f3f4f6;
    margin: 0;
    padding: 0;
    color: #222;
}

.main-header {
    position: relative;
    height: 350px;
    background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: headerFadeIn 1.2s ease;
}

@keyframes headerFadeIn {
    from { opacity: 0; transform: scale(1.06); }
    to { opacity: 1; transform: scale(1); }
}

.header-overlay {
    background: rgba(23, 23, 23, 0.48);
    color: #fff;
    padding: 40px 60px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
    animation: overlayIn 1.5s cubic-bezier(0.18,0.89,0.32,1.28);
}

@keyframes overlayIn {
    from { transform: translateY(-40px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

h1 {
    font-size: 2.7rem;
    margin: 0 0 12px 0;
    letter-spacing: 2px;
}

.subtitle {
    font-size: 1.2rem;
    color: #eee;
    letter-spacing: 1px;
}

/* Cookie Popup */
.cookie-popup {
    position: fixed;
    bottom: 38px;
    left: 50%;
    transform: translateX(-50%) scale(0.96);
    background: transparent;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.45s cubic-bezier(0.62,0.12,0.14,1.02), transform 0.45s cubic-bezier(0.62,0.12,0.14,1.02), visibility 0.45s;
}
.cookie-popup.show {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    transform: translateX(-50%) scale(1);
}
.cookie-popup.hide {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateX(-50%) scale(0.96);
}
.cookie-popup-inner {
    background: #222;
    color: #fff;
    padding: 22px 32px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 1rem;
}
.cookie-popup .cookie-buttons {
    margin-left: 18px;
    display: flex;
    gap: 8px;
}
.cookie-popup button {
    background: #4CAF50;
    color: #fff;
    border: none;
    padding: 7px 15px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}
.cookie-popup button:last-child {
    background: #d32f2f;
}
.cookie-popup button:hover {
    transform: scale(1.07);
}

/* Carrusel principal de anuncios */
.ads-carousel-section {
    max-width: 800px;
    margin: 35px auto 10px auto;
    padding: 0 16px;
}
.ads-carousel-section h2 {
    margin-bottom: 8px;
    color: #2d2d2d;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 1px;
}
.ads-carousel {
    background: #fff;
    border-radius: 8px;
    padding: 10px 20px;
    border: 1px solid #eaeaea;
    box-shadow: 0 1px 8px rgba(30,30,60,0.07);
    overflow: hidden;
    position: relative;
    height: 48px;
    display: flex;
    align-items: center;
    font-size: 1.08rem;
}
.ad {
    min-width: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 0.7s cubic-bezier(0.6,0.2,0.4,1);
    font-weight: 500;
    color: #1a3b5d;
    display: flex;
    align-items: center;
}
.ad.active {
    opacity: 1;
    position: relative;
}
.ad-name {
    color: #1976d2;
    font-weight: bold;
    margin-right: 12px;
}

/* Noticias */
.news-section {
    max-width: 1100px;
    margin: 28px auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
}
.news-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(62,92,135,0.09);
    overflow: hidden;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s, box-shadow 0.25s;
    animation: cardIn 1s cubic-bezier(0.2,0.7,0.3,1.13);
}
.news-card:hover {
    transform: translateY(-7px) scale(1.03);
    box-shadow: 0 8px 22px rgba(44,88,164,0.15);
}
.news-card img {
    width: 100%;
    height: 190px;
    object-fit: cover;
    transition: filter 0.3s;
}
.news-card:hover img {
    filter: brightness(0.96) contrast(1.1);
}
.news-content {
    padding: 17px 15px 20px 15px;
    display: flex;
    flex-direction: column;
    flex: 1;
}
.news-content h3 {
    font-size: 1.16rem;
    margin: 0 0 6px 0;
    color: #1c344b;
    font-weight: 700;
}
.news-content p {
    margin: 0 0 13px 0;
    color: #444;
    font-size: 0.99rem;
}
.read-more {
    color: #1976d2;
    margin-top: auto;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.97rem;
    align-self: flex-start;
    transition: color 0.2s;
}
.read-more:hover {
    color: #0d47a1;
}

@keyframes cardIn {
    from { opacity: 0; transform: translateY(30px);}
    to { opacity: 1; transform: translateY(0);}
}
.animate-in {
    animation: cardIn 0.8s cubic-bezier(0.2,0.7,0.3,1.13);
}

/* Carrusel de Anuncios Destacados */
.featured-ads-section {
    max-width: 800px;
    margin: 60px auto 35px auto;
    padding: 0 16px;
}
.featured-ads-section h2 {
    font-size: 1.22rem;
    color: #1a3b5d;
    margin-bottom: 12px;
    font-weight: 700;
    letter-spacing: 1px;
}
.featured-ads-carousel {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 8px rgba(30,30,60,0.07);
    border: 1px solid #eaeaea;
    height: 95px;
    position: relative;
    overflow: hidden;
}
.featured-ad {
    display: flex;
    align-items: center;
    gap: 20px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    opacity: 0;
    transition: opacity 0.65s cubic-bezier(0.6,0.2,0.4,1);
    padding: 18px 24px;
    box-sizing: border-box;
}
.featured-ad.active {
    opacity: 1;
    position: relative;
}
.featured-ad img {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #1976d2;
}

/* Footer */
footer {
    padding: 24px 0 18px 0;
    background: #222;
    color: #eee;
    text-align: center;
    margin-top: 50px;
    font-size: 0.98rem;
    letter-spacing: 1px;
}

/* Responsive */
@media (max-width: 950px) {
    .news-section {
        flex-direction: column;
        align-items: center;
    }
    .news-card {
        max-width: 96vw;
        width: 95vw;
    }
    .main-header {
        height: 240px;
    }
    .header-overlay {
        padding: 24px 10px;
    }
    .featured-ads-section,
    .ads-carousel-section {
        max-width: 99vw;
    }
}

@media (max-width: 600px) {
    .main-header {
        height: 150px;
    }
    .header-overlay h1 {
        font-size: 1.25rem;
    }
    .header-overlay .subtitle {
        font-size: 0.98rem;
    }
    .cookie-popup-inner {
        flex-direction: column;
        align-items: flex-start;
        padding: 16px 12px;
        font-size: 0.92rem;
        gap: 12px;
    }
}
