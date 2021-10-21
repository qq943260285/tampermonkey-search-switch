(function () {
    window.WeltTool = function (config) {
        if (!config) {
            config = new Object()
        }
        // config.color = "#2b2b2b"
        // config.height = "500px"
        // config.width = "500px"
        console.log(config.title)

        if (!config.id) {
            config.id = 'xyzs-welt-tool'
        }

        if (!config.itemList || !config.itemList.length) {
            config.itemList = [
                // {
                //     name: "名称",
                //
                //     onload: (data) => {
                //         console.log("加载前")
                //     },
                //     onunload: (e, data) => {
                //         console.log("移除前")
                //     },
                //     onclick: (e, data) => {
                //         console.log("点击")
                //         window.open("http://www.baidu.com/", '_blank');
                //     },
                //     onmouseover: (e, data) => {
                //         console.log("鼠标移动到元素上方")
                //     },
                //     onmouseout: (e, data) => {
                //         console.log("鼠标移出元素上方")
                //     },
                //     show: (data) => {
                //         console.log("回调")
                //         return true
                //     },
                //     data: {},
                //     ioc: "http://www.baidu.com/file.ioc",
                // }
            ]
        }

        let mainDivDom;

        //加载css
        const styleDom = document.createElement('style'),
            bodyDom = document.getElementsByTagName("body")[0];
        styleDom.innerHTML = '<%= indexCss %>';
        // alert("添加样式")
        bodyDom.appendChild(styleDom);

        //生成切换框
        mainDivDom = document.createElement('div');
        mainDivDom.id = config.id;
        mainDivDom.className = "xyzs-main-div";
        if (config.color) {
            mainDivDom.style.backgroundColor = config.color
        }

        mainDivDom.onmouseout = (e) => {
            console.log("移出", mainDivDom)
            mainDivDom.style.left = 30 - mainDivDom.offsetWidth + 'px'

        }
        mainDivDom.onmouseover = (e) => {
            console.log("悬停", mainDivDom)
            mainDivDom.style.left = '0px'

        }


        if (!(config.title === undefined)) {
            // 标题
            const titleDiv = document.createElement('div');
            titleDiv.className = 'xyzs-title-div'
            titleDiv.innerHTML = decodeURI(config.title)
            mainDivDom.appendChild(titleDiv)
        }

        // 切换列表
        const listDivDom = document.createElement('div');
        listDivDom.className = 'xyzs-item-list-div'
        for (let i = 0; i < config.itemList.length; i++) {
            const item = config.itemList[i];
            if (item.show(item.data)) {
                if (item.onload) {
                    item.onload(item.data)
                }
                let itemDiv = document.createElement('div');
                itemDiv.className = 'xyzs-item-div'
                itemDiv.onclick = (e) => {
                    if (item.onclick) {
                        item.onclick(e, item.data);
                    }
                }
                itemDiv.onmouseout = (e) => {
                    if (item.onmouseout) {
                        item.onmouseout(e, item.data);
                    }
                }
                itemDiv.onmouseover = (e) => {

                    if (item.onmouseover) {
                        item.onmouseover(e, item.data);
                    }
                }
                itemDiv.innerHTML = item.name
                listDivDom.appendChild(itemDiv)
            }
        }
        mainDivDom.appendChild(listDivDom)
        bodyDom.appendChild(mainDivDom);

        mainDivDom.style.left = 30 - mainDivDom.offsetWidth + 'px'
    }
})()
