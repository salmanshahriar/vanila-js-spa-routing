const urlPageTitle = "Website";

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.navbar-menu a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            urlRoute(event);
            toggleMenuOpen();
        });
    });
});

const urlRoutes = {
    404: {
        template: "/templates/404.html",
        title: "404 | " + urlPageTitle,
        description: "Not Found",
    },
    "/": {
        template: "/templates/index.html",
        title: "Home | " + urlPageTitle,
        description: "This is Home page",
    },
    "/arena": {
        template: "/templates/arena.html",
        title: "Arena | " + urlPageTitle,
        description: "This is Arena page",
    },
    "/posts": {
        template: "/templates/posts.html",
        title: "Posts | " + urlPageTitle,
        description: "This is Posts page",
    },
    "/notices": {
        template: "/templates/notices.html",
        title: "Notices | " + urlPageTitle,
        description: "This is Notices page",
    },
    "/acknowledgement": {
        template: "/templates/acknowledgement.html",
        title: "Acknowledgement | " + urlPageTitle,
        description: "This is Acknowledgement page",
    },
    "/zone": {
        template: "/templates/zone.html",
        title: "Zone | " + urlPageTitle,
        description: "This is Zone page",
    },
};

const urlRoute = (event) => {
    event.preventDefault();
    const path = event.target.getAttribute('href') || "/";
    window.history.pushState({}, "", path);
    urlLocationHandler();
}

const urlLocationHandler = async () => {
    const path = window.location.pathname;
    const route = urlRoutes[path] || urlRoutes["404"];
    const html = await fetch(route.template).then((data) => data.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name=description]').setAttribute("content", route.description);
}

window.onpopstate = urlLocationHandler;
urlLocationHandler();
