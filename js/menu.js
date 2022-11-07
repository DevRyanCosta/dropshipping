window.onload = () => {
    menuActivator = document.querySelector('.menu');
    topArea = document.querySelector('.top');
    closeButton = topArea.querySelector('.close');
    menuActivator.onclick = () => {
        topArea.style.display = 'block';
        topArea.style.transform = 'translate(calc(100vw - ' + topArea.offsetWidth + 'px))';
        topArea.style.boxShadow = '0 0 25px 1px #FFF1';
        topArea.style.opacity = '1';
        closeButton.onclick = () => {
            topArea.style.transform = 'translate(100vw)';
                topArea.style.opacity = '0';
                topAreaContent = topArea.innerHTML;
            window.setTimeout(() => {
                topArea.style.display = 'none';
                topArea.style.transform = 'translate(100vw)';
            }, 350);
        };
    };
    window.onresize = () => {
        setTimeout(() => {
            if (window.matchMedia("(max-width: 950px)").matches == true) {
                topArea.style.display = 'none';
            } else {
                topArea.style.display = null;
            }
        }, 350);
        topArea.style.transform = null;
        closeButton.style.display = null;
    }
    window.onscroll = () => {
        if (window.matchMedia("(max-width: 950px)").matches == true) {
            setTimeout(() => {
                topArea.style.display = 'none';
            }, 350);
            topArea.style.transform = null;
            closeButton.style.display = null;
        }
    }
};