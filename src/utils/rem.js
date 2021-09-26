(function () {
    // todo matchMedia('媒体查询')
    // 确定设备是横向还是纵向的查询列表; matches: 查询结果
    let mediaQueryList = window.matchMedia('(orientation:portrait)')
    function onMatchMediaChange(mediaQueryList) {
        if (mediaQueryList.matches) { // 竖屏
            setTimeout(() => {
                // 重新计算竖屏宽度rem
                autoRootFontSize();
            });
        } else { // 横屏
            setTimeout(() => {
                // 重新计算横屏宽度rem
                autoRootFontSize();
            });
        }
    }
    onMatchMediaChange(mediaQueryList)
    // mediaQueryList.addListener(onMatchMediaChange); // 移除: removeListener
    // mediaQueryList.addEventListener('change', onMatchMediaChange);

    /* 计算rem */
    function autoRootFontSize() {
        let width = document.documentElement.getBoundingClientRect().width;
        let size = (Math.max(width, 1200)) / 1920 * 16
        const fontSize = `${size > 16 ? 16 : size}px`
        document.documentElement.style.fontSize = fontSize
    }
    window.addEventListener('resize', autoRootFontSize)
    autoRootFontSize()
})()