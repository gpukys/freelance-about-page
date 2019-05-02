function professionDropdown() {
    document.getElementById("professionDropdown").classList.toggle("show");
}

function stateDropdown() {
    document.getElementById("stateDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var lastId,
    topMenu = $(".navigation"),
    topMenuHeight = topMenu.outerHeight() + 1,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });
    menuItems.push(topMenu.find('#scaprolink')[0])

$(window).scroll(function () {
    
    if ($(this).scrollTop() < 3200) {
        $(".navigation").css("top",Math.max(0,188-$(this).scrollTop()));
    } else {
        $(".navigation").css("top",(3200-$(this).scrollTop()));
    }
    console.log($(this).scrollTop());
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop - 150)
            return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        temp = '[href="#' + id + '"]'
        if (id == 'scapro') {
            menuItems.removeClass("active")
            $('#scaprolink').addClass('active')
        } else {
            menuItems.removeClass("active")
            $(temp).addClass("active");
        }
    }
});