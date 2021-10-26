(function () {
    window.Dialog = function (config) {
        const DialogThis = this;
        const model = {
            TEXT: 0,
            DOCUMENT: 1
        }

        if (!config) {
            config = {}
        }

        if (!config.id) {
            config.id = ''
        }
        if (!config.model) {
            config.model = model.TEXT
        }
        if (!config.title) {
            config.title = '提示'
        }
        if (!config.text) {
            config.text = 'ok'
        }
        if (!config.document) {
            config.document = ''
        }
        console.log(config.document)
        if (!config.height) {
            config.height = "200px"
        }
        if (!config.width) {
            config.width = "420px"
        }
        if (config.showTop === undefined) {
            config.showTop = true
        }
        if (config.showBottom === undefined) {
            config.showBottom = true
        }

        const bodyDom = document.getElementsByTagName("body")[0];

        //生成切换框
        const mainDivDom = document.createElement('div');

        mainDivDom.id = config.id;
        mainDivDom.className = "xyzs-diolog ";
        mainDivDom.onclick = function (e) {
            DialogThis.close()
        }


        const winDivDom = document.createElement('div');
        winDivDom.className = "xyzs-diolog-win";
        winDivDom.classList.add('rubberBand')
        winDivDom.onclick = function (e) {
            e.stopPropagation();
        }


        const winTopDivDom = document.createElement('div');
        winTopDivDom.className = "xyzs-win-top";

        const winTopTitleDivDom = document.createElement('div');
        winTopTitleDivDom.className = "xyzs-top-title";
        winTopTitleDivDom.innerHTML = config.title
        winTopDivDom.appendChild(winTopTitleDivDom)
        const winTopCloseDivDom = document.createElement('div');
        winTopCloseDivDom.className = "xyzs-top-close";
        winTopCloseDivDom.innerText = 'X'
        winTopCloseDivDom.onclick = function (e) {
            DialogThis.close()
        }
        winTopDivDom.appendChild(winTopCloseDivDom)


        const winContentDivDom = document.createElement('div');
        winContentDivDom.className = "xyzs-win-content";

        winContentDivDom.style.height = config.height
        winContentDivDom.style.width = config.width

        if (model.TEXT === config.model) {
            winContentDivDom.innerHTML = config.text
        } else {
            winContentDivDom.appendChild(config.document)
        }

        const winBottomDivDom = document.createElement('div');
        winBottomDivDom.className = "xyzs-win-bottom";

        const winBottomOkDivDom = document.createElement('div');
        winBottomOkDivDom.className = "xyzs-win-button xyzs-win-ok";
        winBottomOkDivDom.innerText = '确定'
        winBottomOkDivDom.onclick = (e) => {
            e.stopPropagation()
            if (config.okClick) {
                config.okClick(e);
            }
            DialogThis.close()
        }

        var winBottomCancelDivDom = document.createElement('div');
        winBottomCancelDivDom.className = "xyzs-win-button xyzs-win-cancel";
        winBottomCancelDivDom.innerText = '取消'
        winBottomCancelDivDom.onclick = (e) => {
            e.stopPropagation()
            if (config.cancelClick) {
                config.cancelClick(e);
            }
            DialogThis.close()
        }

        winBottomDivDom.appendChild(winBottomCancelDivDom)
        winBottomDivDom.appendChild(winBottomOkDivDom)


        if (config.showTop) {
            winDivDom.appendChild(winTopDivDom)
        }
        winDivDom.appendChild(winContentDivDom)
        if (config.showBottom) {
            winDivDom.appendChild(winBottomDivDom)
        }
        mainDivDom.appendChild(winDivDom)
        bodyDom.appendChild(mainDivDom);

        this.show = function (time) {
            if (time === undefined) {
                time = 0
            }

            setTimeout(function () {
                mainDivDom.style.display = ''
            }, time);
        };

        this.close = function (time) {
            if (time === undefined) {
                time = 100
            }

            setTimeout(function () {
                mainDivDom.style.display = 'none'
            }, time);
        }
        DialogThis.close(0)
    }
})()
