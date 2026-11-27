(function () {
    "use strict";

    const data = window.EspaciosData;

    if (!data) {
        return;
    }

    const ICONS = {
        auditorio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16M6 20V9l6-4 6 4v11M9 20v-6h6v6M9 10h.01M15 10h.01"/></svg>',
        computador: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M7 8h4M7 11h7"/></svg>',
        hibrido: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3"/><path d="M2.8 19a5.2 5.2 0 0 1 10.4 0M16 5h5v11h-5zM18.5 19v-3"/></svg>',
        pantalla: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4M6 8h12"/></svg>',
        modular: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
        aforo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M17 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5"/></svg>',
        operacion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3v-4h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.4 7.1 7.2 4.3l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V3h4v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.8 2.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4h-.2a1.7 1.7 0 0 0-1.6 1Z"/></svg>',
        panel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M12 17v4M8 21h8M8 8h8M8 12h5"/></svg>',
        mac: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M9.5 9.2a2.5 2.5 0 1 1 5 0c0 2-2.5 2.2-2.5 4"/></svg>',
        windows: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5.5 10.5 4.5v6.3H3zM12 4.2 21 3v7.8h-9zM3 12.8h7.5v6.7L3 18.5zM12 12.8h9V21l-9-1.3z"/></svg>',
        portatil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H4zM2 19h20l-2-3H4zM9 8h6"/></svg>',
        proyeccion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="12" height="8" rx="1.5"/><path d="M15 9h4l2 3v5H7M8 20h12"/></svg>',
        play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 5 11 7-11 7z"/></svg>',
        externo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5H5V6h5"/></svg>',
        ocultar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
        chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'
    };

    const ESCAPES = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    };

    const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ESCAPES[char]);
    const select = (selector, root) => (root || document).querySelector(selector);
    const selectAll = (selector, root) => Array.from((root || document).querySelectorAll(selector));
    const svgIcon = (name) => ICONS[name] || ICONS.pantalla;
    const icon = (name, className) => '<span class="' + esc(className) + '" aria-hidden="true">' + svgIcon(name) + "</span>";

    function setHTML(id, markup) {
        const target = document.getElementById(id);
        if (target) {
            target.innerHTML = markup;
        }
    }

    function imageMarkup(image, className, attributes) {
        if (!image) {
            return "";
        }
        return (
            '<img class="' +
            esc(className) +
            '" src="' +
            esc(image.src) +
            '" alt="' +
            esc(image.alt) +
            '" width="' +
            esc(image.width) +
            '" height="' +
            esc(image.height) +
            '" loading="lazy" decoding="async" ' +
            (attributes || "") +
            ">"
        );
    }

    function sectionHead(eyebrow, titleId, title, intro) {
        return (
            '<div class="section-head">' +
            '<span class="eyebrow">' +
            esc(eyebrow) +
            "</span>" +
            '<h2 class="section-title" id="' +
            esc(titleId) +
            '">' +
            esc(title) +
            "</h2>" +
            '<p class="section-intro">' +
            esc(intro) +
            "</p>" +
            "</div>"
        );
    }

    function renderNavigation() {
        const menu = select("#nav-menu");
        if (!menu) {
            return;
        }
        menu.innerHTML = data.navigation
            .map(
                (item) =>
                    '<li><a class="nav-link" href="#' +
                    esc(item.id) +
                    '">' +
                    esc(item.label) +
                    "</a></li>"
            )
            .join("");
    }

    function renderHero() {
        setHTML(
            "hero-content",
            '<p class="hero__eyebrow">' +
                esc(data.site.projectLabel) +
                "</p>" +
                '<h1 class="hero__title" id="hero-title">' +
                esc(data.site.heroTitle) +
                "</h1>" +
                '<p class="hero__subtitle">' +
                esc(data.site.heroSubtitle) +
                "</p>" +
                '<p class="hero__description">' +
                esc(data.site.heroDescription) +
                "</p>" +
                '<div class="hero__actions">' +
                '<a class="btn btn--light" href="#infraestructura">' +
                icon("play") +
                "Explorar espacios</a>" +
                '<a class="btn btn--outline" href="#recorridos">' +
                icon("externo") +
                "Conocer recorridos 360°</a>" +
                "</div>" +
                '<p class="hero__caption">' +
                esc(data.site.heroHighlight) +
                "</p>"
        );
    }

    function renderInfrastructure() {
        const stats = data.stats
            .map(
                (stat) =>
                    '<article class="stat-card">' +
                    icon(stat.icon, "stat-card__icon") +
                    '<p class="stat-card__value">' +
                    esc(stat.value) +
                    "</p>" +
                    '<h3 class="stat-card__label">' +
                    esc(stat.label) +
                    "</h3>" +
                    '<p class="stat-card__detail">' +
                    esc(stat.detail) +
                    "</p>" +
                    "</article>"
            )
            .join("");

        const features = data.attractions
            .map(
                (feature) =>
                    '<article class="feature-card">' +
                    icon(feature.icon, "feature-card__icon") +
                    "<h3>" +
                    esc(feature.title) +
                    "</h3>" +
                    "<p>" +
                    esc(feature.text) +
                    "</p>" +
                    "</article>"
            )
            .join("");

        setHTML(
            "infraestructura-content",
            sectionHead(
                "Catálogo institucional",
                "infraestructura-title",
                "Espacios preparados para experiencias diversas",
                "La infraestructura tecnológica de la seccional Bucaramanga integra ambientes para la docencia, el trabajo con recursos digitales y los encuentros académicos e institucionales."
            ) +
                '<div class="stats-grid">' +
                stats +
                "</div>" +
                '<p class="stats-note">' +
                esc(data.statsNote) +
                "</p>" +
                '<div class="feature-grid">' +
                features +
                "</div>"
        );
    }

    function renderAudiovisuales() {
        const uses = data.audiovisuales.uses
            .map((use) => "<li>" + esc(use) + "</li>")
            .join("");

        const rooms = data.audiovisuales.rooms
            .map(
                (room) =>
                    '<details class="accordion__item" id="' +
                    esc(room.id) +
                    '">' +
                    '<summary class="accordion__summary">' +
                    "<span>" +
                    '<span class="accordion__title">' +
                    esc(room.name) +
                    "</span>" +
                    '<span class="accordion__tag">' +
                    esc(room.tag) +
                    "</span>" +
                    "</span>" +
                    '<span class="accordion__chevron">' +
                    svgIcon("chevron") +
                    "</span>" +
                    "</summary>" +
                    '<div class="accordion__content">' +
                    "<p>" +
                    esc(room.summary) +
                    "</p>" +
                    '<dl class="detail-list">' +
                    room.details
                        .map(
                            (detail) =>
                                "<dt>" +
                                esc(detail.label) +
                                "</dt><dd>" +
                                esc(detail.value) +
                                "</dd>"
                        )
                        .join("") +
                    "</dl>" +
                    (room.note ? '<p class="room-note">' + esc(room.note) + "</p>" : "") +
                    "</div>" +
                    "</details>"
            )
            .join("");

        setHTML(
            "audiovisuales-content",
            sectionHead(
                data.audiovisuales.eyebrow,
                "audiovisuales-title",
                data.audiovisuales.title,
                data.audiovisuales.intro
            ) +
                '<div class="split">' +
                '<figure class="split__media">' +
                imageMarkup(data.audiovisuales.image, "split__image") +
                '<figcaption class="split__badge">Imagen general del PDF</figcaption>' +
                "</figure>" +
                "<div>" +
                '<span class="eyebrow">Usos académicos</span>' +
                '<ul class="use-list">' +
                uses +
                "</ul>" +
                '<div class="accordion" data-accordion="audiovisuales">' +
                rooms +
                "</div>" +
                "</div>" +
                "</div>" +
                '<p class="stats-note">El documento registra dos fotografías generales de salas audiovisuales; no las asocia a un número de sala. ' +
                esc(data.audiovisuales.rooms[0].note) +
                "</p>"
        );
    }

    function renderHyflex() {
        const cards = data.hyflex.rooms
            .map(
                (room) =>
                    '<article class="space-card" id="' +
                    esc(room.id) +
                    '">' +
                    '<div class="space-card__media">' +
                    (room.image
                        ? imageMarkup(room.image, "space-card__image")
                        : '<div class="space-card__placeholder" aria-hidden="true">H2</div>') +
                    '<span class="space-card__capacity">' +
                    esc(room.capacity) +
                    "</span>" +
                    "</div>" +
                    '<div class="space-card__body">' +
                    "<h3>" +
                    esc(room.name) +
                    "</h3>" +
                    '<p class="space-card__summary">' +
                    esc(room.summary) +
                    "</p>" +
                    '<ul class="space-card__details">' +
                    room.details
                        .map((detail) => "<li>" + esc(detail) + "</li>")
                        .join("") +
                    "</ul>" +
                    (room.note ? '<p class="space-card__note">' + esc(room.note) + "</p>" : "") +
                    "</div>" +
                    "</article>"
            )
            .join("");

        const comparisonRows = data.hyflex.comparison
            .map(
                (row) =>
                    "<tr><th scope=\"row\">" +
                    esc(row.label) +
                    "</th><td>" +
                    esc(row.one) +
                    "</td><td>" +
                    esc(row.two) +
                    "</td></tr>"
            )
            .join("");

        setHTML(
            "hyflex-content",
            sectionHead(
                data.hyflex.eyebrow,
                "hyflex-title",
                data.hyflex.title,
                data.hyflex.intro
            ) +
                '<div class="hyflex-grid">' +
                cards +
                "</div>" +
                '<p class="photo-note">' +
                esc(data.hyflex.photoNote) +
                "</p>" +
                '<div class="comparison">' +
                "<h3>Comparación visual de los espacios</h3>" +
                '<div class="table-scroll">' +
                "<table>" +
                '<caption class="sr-only">Comparación de características entre HyFlex 1 y HyFlex 2</caption>' +
                "<thead><tr><th scope=\"col\">Característica</th><th scope=\"col\">HyFlex 1</th><th scope=\"col\">HyFlex 2</th></tr></thead>" +
                "<tbody>" +
                comparisonRows +
                "</tbody>" +
                "</table>" +
                "</div>" +
                "</div>"
        );
    }

    function renderInformatica() {
        const types = data.informatica.types
            .map(
                (type) =>
                    '<article class="type-card" id="' +
                    esc(type.id) +
                    '">' +
                    '<div class="type-card__top">' +
                    icon(type.icon, "type-card__icon") +
                    '<span class="type-card__count">' +
                    esc(type.count) +
                    "</span>" +
                    "</div>" +
                    '<h3 class="type-card__name">' +
                    esc(type.name) +
                    "</h3>" +
                    '<span class="type-card__tag">' +
                    esc(type.tag) +
                    "</span>" +
                    '<p class="type-card__summary">' +
                    esc(type.summary) +
                    "</p>" +
                    '<div class="type-card__body">' +
                    "<p><strong>Equipamiento registrado</strong><span>" +
                    esc(type.equipment) +
                    "</span></p>" +
                    "<p><strong>Orientación de uso</strong><span>" +
                    esc(type.orientation) +
                    "</span></p>" +
                    "</div>" +
                    "</article>"
            )
            .join("");

        const gallery = data.informatica.images
            .map((image) => imageMarkup(image, "info-gallery__image"))
            .join("");

        setHTML(
            "informatica-content",
            sectionHead(
                data.informatica.eyebrow,
                "informatica-title",
                data.informatica.title,
                data.informatica.intro
            ) +
                '<div class="type-grid">' +
                types +
                "</div>" +
                '<div class="info-gallery">' +
                gallery +
                "</div>" +
                '<p class="photo-note">' +
                esc(data.informatica.imageNote) +
                "</p>"
        );
    }

    function renderAuditorios() {
        const featured = data.auditorios.featured;
        const metrics = featured.highlights
            .map(
                (item) =>
                    '<div class="metric"><strong>' +
                    esc(item.value) +
                    "</strong><span>" +
                    esc(item.label) +
                    "</span></div>"
            )
            .join("");

        const gallery = featured.gallery
            .map((image) => imageMarkup(image, "auditorio-gallery__image"))
            .join("");

        const rooms = data.auditorios.rooms
            .map(
                (room) =>
                    '<article class="auditorio-card" id="' +
                    esc(room.id) +
                    '">' +
                    (room.image
                        ? imageMarkup(room.image, "auditorio-card__image")
                        : '<div class="auditorio-card__placeholder" aria-hidden="true">A · I</div>') +
                    '<div class="auditorio-card__body">' +
                    '<span class="auditorio-card__kicker">' +
                    esc(room.kicker) +
                    "</span>" +
                    "<h3>" +
                    esc(room.name) +
                    "</h3>" +
                    '<span class="capacity-pill">' +
                    esc(room.capacity) +
                    "</span>" +
                    '<p class="auditorio-card__summary">' +
                    esc(room.summary) +
                    "</p>" +
                    '<div class="auditorio-card__groups">' +
                    room.groups
                        .map(
                            (group) =>
                                '<div class="fact-group"><h4>' +
                                esc(group.title) +
                                "</h4><ul>" +
                                group.items
                                    .map((item) => "<li>" + esc(item) + "</li>")
                                    .join("") +
                                "</ul></div>"
                        )
                        .join("") +
                    "</div>" +
                    (room.note ? '<p class="auditorio-card__note">' + esc(room.note) + "</p>" : "") +
                    "</div>" +
                    "</article>"
            )
            .join("");

        setHTML(
            "auditorios-content",
            sectionHead(
                data.auditorios.eyebrow,
                "auditorios-title",
                data.auditorios.title,
                data.auditorios.intro
            ) +
                '<div class="auditorio-feature">' +
                '<div class="auditorio-feature__media">' +
                imageMarkup(featured.image, "auditorio-feature__image") +
                "</div>" +
                '<div class="auditorio-feature__body">' +
                '<span class="auditorio-feature__kicker">' +
                esc(featured.kicker) +
                "</span>" +
                "<h3>" +
                esc(featured.name) +
                "</h3>" +
                "<p>" +
                esc(featured.description) +
                "</p>" +
                '<div class="feature-metrics">' +
                metrics +
                "</div>" +
                "</div>" +
                "</div>" +
                '<div class="auditorio-gallery">' +
                gallery +
                "</div>" +
                '<div class="auditorio-grid">' +
                rooms +
                "</div>"
        );
    }

    function renderRecommendations() {
        const filters = data.recommendations.filters
            .map(
                (filter, index) =>
                    '<button class="filter-btn" type="button" data-filter="' +
                    esc(filter.id) +
                    '" aria-pressed="' +
                    (index === 0 ? "true" : "false") +
                    '">' +
                    esc(filter.label) +
                    "</button>"
            )
            .join("");

        const items = data.recommendations.items
            .map(
                (item) =>
                    '<article class="recommendation-card" data-category="' +
                    esc(item.category) +
                    '" id="' +
                    esc(item.id) +
                    '">' +
                    icon(item.icon, "recommendation-card__icon") +
                    "<div>" +
                    '<h3 class="recommendation-card__activity">' +
                    esc(item.activity) +
                    "</h3>" +
                    '<p class="recommendation-card__space">' +
                    esc(item.space) +
                    "</p>" +
                    '<p class="recommendation-card__text">' +
                    esc(item.explanation) +
                    "</p>" +
                    "</div>" +
                    "</article>"
            )
            .join("");

        const criteria = data.recommendations.criteria
            .map(
                (criterion) =>
                    '<article class="criterion-card">' +
                    icon(criterion.icon, "criterion-card__icon") +
                    "<h3>" +
                    esc(criterion.title) +
                    "</h3>" +
                    "<p>" +
                    esc(criterion.text) +
                    "</p>" +
                    "</article>"
            )
            .join("");

        setHTML(
            "recomendaciones-content",
            sectionHead(
                data.recommendations.eyebrow,
                "recomendaciones-title",
                data.recommendations.title,
                data.recommendations.intro
            ) +
                '<div class="filters" role="group" aria-label="Filtrar recomendaciones">' +
                filters +
                "</div>" +
                '<p class="sr-only" id="filter-status" aria-live="polite"></p>' +
                '<div class="recommendation-list" id="recommendation-list">' +
                items +
                "</div>" +
                '<div class="criteria-grid">' +
                criteria +
                "</div>" +
                '<p class="disclaimer">' +
                esc(data.recommendations.disclaimer) +
                "</p>"
        );
    }

    function renderTours() {
        const cards = data.tours.items
            .map(
                (tour) =>
                    '<article class="tour-card" id="tour-' +
                    esc(tour.id) +
                    '">' +
                    '<div class="tour-card__media">' +
                    (tour.image
                        ? imageMarkup(tour.image, "tour-card__image")
                        : '<div class="tour-card__placeholder" aria-hidden="true">360°</div>') +
                    (tour.imageIsReference ? '<span class="reference-badge">Imagen de referencia</span>' : "") +
                    "</div>" +
                    '<div class="tour-card__body">' +
                    "<h3>" +
                    esc(tour.name) +
                    "</h3>" +
                    '<div class="tour-card__actions">' +
                    '<button class="btn btn--primary btn--small" type="button" data-tour-button data-tour-id="' +
                    esc(tour.id) +
                    '" aria-expanded="false" aria-controls="frame-' +
                    esc(tour.id) +
                    '">' +
                    icon("play") +
                    "Explorar recorrido 360°" +
                    "</button>" +
                    '<a class="btn btn--secondary btn--small" href="' +
                    esc(tour.url) +
                    '" target="_blank" rel="noopener noreferrer">' +
                    icon("externo") +
                    "Abrir en pestaña nueva" +
                    "</a>" +
                    "</div>" +
                    '<div class="tour-frame" id="frame-' +
                    esc(tour.id) +
                    '" hidden>' +
                    '<div class="tour-frame__help">Si el recorrido no se visualiza aquí, use el botón para abrirlo en una pestaña nueva.</div>' +
                    "</div>" +
                    (tour.note ? '<p class="tour-card__note">' + esc(tour.note) + "</p>" : "") +
                    "</div>" +
                    "</article>"
            )
            .join("");

        setHTML(
            "recorridos-content",
            sectionHead(
                data.tours.eyebrow,
                "recorridos-title",
                data.tours.title,
                data.tours.intro
            ) +
                '<div class="tour-grid">' +
                cards +
                "</div>" +
                '<p class="tour-integration-note">' +
                esc(data.tours.integrationNote) +
                "</p>"
        );
    }

    function renderNotes() {
        const items = data.notes.items
            .map(
                (item) =>
                    '<div class="note-item"><h3>' +
                    esc(item.title) +
                    "</h3><p>" +
                    esc(item.text) +
                    "</p></div>"
            )
            .join("");

        setHTML(
            "notas-content",
            '<div class="notes-panel"><h2 id="notas-title">' +
                esc(data.notes.title) +
                '</h2><div class="notes-grid">' +
                items +
                "</div></div>"
        );
    }

    function renderFooter() {
        const footer = select("#footer-content");
        if (!footer) {
            return;
        }
        footer.innerHTML =
            '<div class="container">' +
            '<div class="footer__top">' +
            '<div class="footer__brand">' +
            '<img src="assets/IMG/logo/ucc-logo.png" alt="Universidad Cooperativa de Colombia" width="816" height="725" loading="lazy">' +
            "<h2>" +
            esc(data.footer.university) +
            "</h2>" +
            "<p>" +
            esc(data.footer.location) +
            " · " +
            esc(data.footer.area) +
            "</p>" +
            "</div>" +
            '<div class="footer__meta">' +
            "<strong>" +
            esc(data.footer.project) +
            "</strong>" +
            "<span>Catálogo interactivo de espacios tecnológicos</span>" +
            "</div>" +
            "</div>" +
            '<p class="footer__closing">' +
            esc(data.footer.closing) +
            "</p>" +
            '<p class="footer__bottom">Fuente: documento institucional “Espacios que conectan – Gestión tecnológica”, Universidad Cooperativa de Colombia, Seccional Bucaramanga.</p>' +
            "</div>";
    }

    function setupNavigation() {
        const toggle = select(".nav-toggle");
        const menu = select("#nav-menu");
        if (!toggle || !menu) {
            return;
        }

        function closeMenu() {
            menu.classList.remove("is-open");
            toggle.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Abrir menú de navegación");
            document.body.classList.remove("menu-abierto");
        }

        toggle.addEventListener("click", function () {
            const willOpen = !menu.classList.contains("is-open");
            menu.classList.toggle("is-open", willOpen);
            toggle.classList.toggle("is-open", willOpen);
            toggle.setAttribute("aria-expanded", String(willOpen));
            toggle.setAttribute("aria-label", willOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación");
            document.body.classList.toggle("menu-abierto", willOpen);
        });

        selectAll(".nav-link").forEach((link) => link.addEventListener("click", closeMenu));

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        document.addEventListener("click", (event) => {
            if (!event.target.closest(".navbar")) {
                closeMenu();
            }
        });
    }

    function setupActiveNavigation() {
        const links = selectAll(".nav-link");
        const sections = data.navigation
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);
        if (!("IntersectionObserver" in window) || !sections.length) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }
                    links.forEach((link) => {
                        link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
                    });
                });
            },
            { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
    }

    function setupAccordions() {
        selectAll("[data-accordion] details").forEach((detail) => {
            detail.addEventListener("toggle", function () {
                detail.classList.toggle("is-open", detail.open);
                if (!detail.open || !detail.parentElement) {
                    return;
                }
                const group = detail.parentElement.getAttribute("data-accordion");
                selectAll('[data-accordion="' + group + '"] details').forEach((other) => {
                    if (other !== detail) {
                        other.open = false;
                    }
                });
            });
        });
    }

    function setupFilters() {
        const buttons = selectAll(".filter-btn");
        const cards = selectAll(".recommendation-card");
        const status = select("#filter-status");

        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                const filter = button.getAttribute("data-filter");
                let visible = 0;

                buttons.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
                cards.forEach((card) => {
                    const show = filter === "todas" || card.getAttribute("data-category") === filter;
                    card.classList.toggle("is-filtered-out", !show);
                    if (show) {
                        visible += 1;
                    }
                });

                if (status) {
                    const label = buttons.find((item) => item === button).textContent.trim();
                    status.textContent = visible + " recomendaciones visibles en " + label + ".";
                }
            });
        });
    }

    function setupTours() {
        const tours = data.tours.items.reduce((map, tour) => {
            map[tour.id] = tour;
            return map;
        }, {});

        selectAll("[data-tour-button]").forEach((button) => {
            button.addEventListener("click", function () {
                const id = button.getAttribute("data-tour-id");
                const tour = tours[id];
                const frame = document.getElementById("frame-" + id);
                if (!tour || !frame) {
                    return;
                }

                const isHidden = frame.hidden;
                if (isHidden && !select("iframe", frame)) {
                    const iframe = document.createElement("iframe");
                    iframe.src = tour.url;
                    iframe.title = "Recorrido virtual 360° de " + tour.name;
                    iframe.loading = "lazy";
                    iframe.referrerPolicy = "no-referrer-when-downgrade";
                    iframe.setAttribute("allow", "fullscreen; accelerometer; gyroscope; xr-spatial-tracking");
                    iframe.setAttribute("allowfullscreen", "");
                    frame.appendChild(iframe);
                }

                frame.hidden = !isHidden;
                button.setAttribute("aria-expanded", String(isHidden));
                button.innerHTML = (isHidden ? icon("ocultar") : icon("play")) + (isHidden ? "Ocultar recorrido" : "Explorar recorrido 360°");
            });
        });
    }

    function setupReveals() {
        const nodes = selectAll("[data-reveal]");
        if (!("IntersectionObserver" in window)) {
            nodes.forEach((node) => node.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        nodes.forEach((node) => observer.observe(node));
    }

    function setupBackToTop() {
        const button = select(".back-to-top");
        if (!button) {
            return;
        }

        function updateVisibility() {
            button.hidden = window.scrollY < 500;
        }

        button.addEventListener("click", function () {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        });

        window.addEventListener("scroll", updateVisibility, { passive: true });
        updateVisibility();
    }

    function init() {
        renderNavigation();
        renderHero();
        renderInfrastructure();
        renderAudiovisuales();
        renderHyflex();
        renderInformatica();
        renderAuditorios();
        renderRecommendations();
        renderTours();
        renderNotes();
        renderFooter();
        setupNavigation();
        setupActiveNavigation();
        setupAccordions();
        setupFilters();
        setupTours();
        setupReveals();
        setupBackToTop();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
