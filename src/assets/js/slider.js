 function openTab(evt, tabName) {
                var i, x, tablinks;
                x = document.getElementsByClassName("content-tab");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tab");
                for (i = 0; i < x.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
                }
                document.getElementById(tabName).style.display = "block";
                evt.currentTarget.className += " is-active";
            }

            $(document).ready(function () {
                $(".navbar-burger").click(function () {
                    $("#navbarBasicExample").toggleClass("menu_open");
                });

                $(function () {
                    $("#img_gallery2").slick({
                        infinite: true,
                        speed: 300,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    });
                });
});


            jQuery(document).ready(function () {
                jQuery("#img_gallery").slick({
                    arrow: true,
                    infinite: true,
                    autoplay: true,
                    centerPadding: "60px",
                    slidesToShow: 3,
                    slidesToScroll: 3,
                });
            });