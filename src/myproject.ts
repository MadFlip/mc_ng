export class Project {
    title: string;
    desc: string;
    imgUrl: { small: string, retina: string }[];
    linksTitle: string;
    linksList: { link: string, title: string }[];
    linksTitle2?: string;
    linksList2?: { link: string, title: string }[];
}

export const PROJECTS: Project[] = [
    {
        title: "Houseville", desc: "HTML, CSS, JQuery, JS, Responsive",
        imgUrl: [{ small: "assets/img/card-housville.jpg", retina: "assets/img/card-housville@2x.jpg 2x" }],
        linksTitle: "Some of pages:",
        linksList: [
            { link: "http://showcase.nikitinteam.com/houseville/", title: "Home" },
            { link: "http://showcase.nikitinteam.com/houseville/catalog.html", title: "Catalog" },
            { link: "http://showcase.nikitinteam.com/houseville/magazine.html", title: "Magazine" },
            { link: "http://showcase.nikitinteam.com/houseville/article.html", title: "Article" },
            { link: "http://showcase.nikitinteam.com/houseville/contact-us.html", title: "Contacts" }
        ]
    }, {
        title: "Strggl", desc: "HTML, CSS, JQuery, JS, Responsive",
        imgUrl: [{ small: "assets/img/card-strggl.jpg", retina: "assets/img/card-strggl@2x.jpg 2x" }],
        linksTitle: "Landing page:",
        linksList: [
            { link: "http://showcase.nikitinteam.com/strggl/", title: "Home" }
        ],
        linksTitle2: "Website (beta):",
        linksList2: [
            { link: "https://d.strggl.net/login.html", title: "strggl.net" }
        ]
    }, {
        title: "NIKITIN TEAM", desc: "HTML, CSS, JQuery, JS, Responsive, Wordpress",
        imgUrl: [{ small: "assets/img/card-nikitin.jpg", retina: "assets/img/card-nikitin@2x.jpg 2x" }],
        linksTitle: "Landing page:",
        linksList: [
            { link: "https://nikitinteam.com/offer", title: "nikitinteam.com/offer" }
        ],
        linksTitle2: "Website:",
        linksList2: [
            { link: "https://nikitinteam.com", title: "nikitinteam.com" }
        ]
    }, {
        title: "Gecoin", desc: "HTML, CSS, JQuery, JS, Responsive",
        imgUrl: [{ small: "assets/img/card-gecoin.jpg", retina: "assets/img/card-gecoin@2x.jpg 2x" }],
        linksTitle: "Page:",
        linksList: [
            { link: "http://showcase.nikitinteam.com/gecoin/", title: "Home" }
        ]
    }, {
        title: "Road Safety", desc: "HTML, SCSS, JQuery, JS, Gulp, Responsive",
        imgUrl: [{ small: "assets/img/card-roadsafety.jpg", retina: "assets/img/card-roadsafety@2x.jpg 2x" }],
        linksTitle: "Some of pages:",
        linksList: [
            { link: "http://showcase.nikitinteam.com/rtsi/v/", title: "Home" },
            { link: "http://showcase.nikitinteam.com/rtsi/v/gallery.html", title: "Gallery" },
            { link: "http://showcase.nikitinteam.com/rtsi/v/contacts.html", title: "Contacts" },
            { link: "http://showcase.nikitinteam.com/rtsi/v/campaign-seatbelt.html", title: "Campaign" },
            { link: "http://showcase.nikitinteam.com/rtsi/v/partners.html", title: "Partners" }
        ]
    }, {
        title: "Crypto lawyer", desc: "HTML, SCSS, JQuery, JS, Gulp, Responsive, Wordpress",
        imgUrl: [{ small: "assets/img/card-cryptolawyer.jpg", retina: "assets/img/card-cryptolawyer@2x.jpg 2x" }],
        linksTitle: "Website:",
        linksList: [
            { link: "http://cryptolawyer.nikitinteam.com", title: "cryptolawyer.io" }
        ]
    }, {
        title: "Lerevent", desc: "HTML, PHP, SCSS, JQuery, JS, Gulp, Responsive",
        imgUrl: [{ small: "assets/img/card-lerevent.jpg", retina: "assets/img/card-lerevent@2x.jpg 2x" }],
        linksTitle: "Website:",
        linksList: [
            { link: "http://www.lerevent.fr/en/", title: "www.lerevent.fr" }
        ]
    }, {
        title: "Code & Pepper", desc: "HTML, SCSS, JQuery, JS, Gulp, Responsive",
        imgUrl: [{ small: "assets/img/card-codepepper.jpg", retina: "assets/img/card-codepepper@2x.jpg 2x" }],
        linksTitle: "Page:",
        linksList: [
            { link: "http://showcase.nikitinteam.com/codepepper/", title: "Home" }
        ]
    }, {
        title: "e-commerce", desc: "HTML, SCSS, JQuery, JS, Gulp, Responsive",
        imgUrl: [{ small: "assets/img/card-ecommerce.jpg", retina: "assets/img/card-ecommerce@2x.jpg 2x" }],
        linksTitle: "Some of pages:",
        linksList: [
            { link: "http://showcase.nikitinteam.com/ecommerce/", title: "Home" },
            { link: "http://showcase.nikitinteam.com/ecommerce/catalog-inner.html", title: "Catalog" },
            { link: "http://showcase.nikitinteam.com/ecommerce/product.html", title: "Product" },
            { link: "http://showcase.nikitinteam.com/ecommerce/my-orders.html", title: "My orders" },
            { link: "http://showcase.nikitinteam.com/ecommerce/checkout.html", title: "Checkout" }
        ]
    }, {
        title: "Universepay", desc: "HTML, CSS, JQuery, JS, Responsive",
        imgUrl: [{ small: "assets/img/card-universepay.jpg", retina: "assets/img/card-universepay@2x.jpg 2x" }],
        linksTitle: "Some of pages:",
        linksList: [
            { link: "http://showcase.nikitinteam.com/universepay/inner.html", title: "Dashboard" },
            { link: "http://showcase.nikitinteam.com/universepay/inner-card-details.html", title: "Card details" },
            { link: "http://showcase.nikitinteam.com/universepay/inner-operations2.html", title: "Operation" },
            { link: "http://showcase.nikitinteam.com/universepay/inner-sessions.html", title: "Sessions" },
            { link: "http://showcase.nikitinteam.com/universepay/inner-profile.html", title: "Profile" }
        ]
    }, {
        title: "GK4", desc: "HTML, CSS, JQuery, JS, Responsive",
        imgUrl: [{ small: "assets/img/card-gk4.jpg", retina: "assets/img/card-gk4@2x.jpg 2x" }],
        linksTitle: "Some of pages:",
        linksList: [
            { link: "http://showcase.nikitinteam.com/gk4/", title: "Home" },
            { link: "http://showcase.nikitinteam.com/gk4/category.html", title: "Category" },
            { link: "http://showcase.nikitinteam.com/gk4/product.html", title: "Product" },
            { link: "http://showcase.nikitinteam.com/gk4/new_offer.html", title: "Offer" },
            { link: "http://showcase.nikitinteam.com/gk4/account_orders.html", title: "Oders" }
        ]
    }, {
        title: "Poetree", desc: "HTML, CSS, JQuery, JS, Responsive",
        imgUrl: [{ small: "assets/img/card-poetree.jpg", retina: "assets/img/card-poetree@2x.jpg 2x" }],
        linksTitle: "Website:",
        linksList: [
            { link: "https://poetree.club", title: "poetree.club" }
        ]
    }, {
        title: "ZAZA", desc: "HTML, CSS, JQuery, JS, Responsive",
        imgUrl: [{ small: "assets/img/card-zaza.jpg", retina: "assets/img/card-zaza@2x.jpg 2x" }],
        linksTitle: "Some of pages:",
        linksList: [
            { link: "http://showcase.nikitinteam.com/zaza/", title: "Home" },
            { link: "http://showcase.nikitinteam.com/zaza/deals.html", title: "Category" }
        ]
    },{
        title: "Banzai", desc: "HTML, CSS, JQuery, JS, Responsive",
        imgUrl: [{ small: "assets/img/card-banzai.jpg", retina: "assets/img/card-banzai@2x.jpg 2x" }],
        linksTitle: "Pages:",
        linksList: [
            { link: "http://showcase.nikitinteam.com/banzai/", title: "Home" },
            { link: "http://showcase.nikitinteam.com/banzai/vacancy.html", title: "Vacancy" }
        ]
    }, {
        title: "TDL Challenge", desc: "HTML, CSS, JQuery, JS",
        imgUrl: [{ small: "assets/img/card-dlc.jpg", retina: "assets/img/card-dlc@2x.jpg 2x" }],
        linksTitle: "Website:",
        linksList: [
            { link: "https://dailylogochallenge.com", title: "dailylogochallenge.com" }
        ]
    }
]; 