document.addEventListener('DOMContentLoaded', function() {
    var scrollTopButton = document.getElementById('scrolltop');

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 100) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    };

    scrollTopButton.onclick = function() {
        document.documentElement.scrollTop = 0;
    };
});
