window.onload = () => {
    menuActivator = document.querySelector('.menu');
    topArea = document.querySelector('.top');
    closeButton = topArea.querySelector('.close');
    menuActivator.onclick = () => {
        topArea.style.display = 'block';
        topArea.style.transform = 'translate(calc(100vw - ' + topArea.offsetWidth + 'px))';
        topArea.style.boxShadow = '0 0 25px 1px #FFF1';
        closeButton.onclick = () => {
            topArea.style.transform = 'translate(100vw)';
            topAreaContent = topArea.innerHTML;
            window.setTimeout(() => {
                topArea.style.display = 'none';
                topArea.style.transform = 'translate(100vw)';
            }, 350);
        };
    };
    window.onresize = () => {
        setTimeout(() => {
            topArea.style.display = 'none';
        }, 350);
        topArea.style.transform = null;
        closeButton.style.display = null;
    }
    window.onscroll = () => {
        setTimeout(() => {
            topArea.style.display = 'none';
        }, 350);
        topArea.style.transform = null;
        closeButton.style.display = null;
    }
};