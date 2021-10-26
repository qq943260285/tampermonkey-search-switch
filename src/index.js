(function () {

    /**
     * 请求类型
     */
    let SEARCH_TYPE = {
        /**
         * 参数
         */
        RequestParam: 0,
        /**
         * 路径参数
         */
        PathVariable: 1
    }
    /**
     * 配置
     */
    const CONFIG = {
        // 搜索地址关键字字符
        KeywordSymbol: '%s',
        // DIV 工具 Id
        DivId: "xyzs-search",
        // 默认 请求类型 （当没有数据是）
        defaultSearchType: SEARCH_TYPE.RequestParam,
        // 默认 数据为非自定 （当没有数据是）
        defaultCustomize: false,

    };

    /**
     *
     */
    let searchList = [
        {
            // 排序、索引、id、唯一
            "index": 1,
            // 名称
            "name": "百度",
            // Host
            "host": "www.baidu.com",
            // Url关键字（用于相同host区分）
            "urlKeyword": [],
            // 搜索地址 %=关键字
            "searchUrl": "https://www.baidu.com/s?wd=%s",
            // 搜索类型
            "searchType": SEARCH_TYPE.RequestParam,
            // 样式
            "css": "",
            // 备注
            "remark": "备注",
            // 是否自定义
            "customize": false,
            // 显示
            "show": true,
        },
        {
            "index": 2,
            "name": "必应",
            "host": "cn.bing.com",
            "searchUrl": "https://cn.bing.com/search?q=%s",
            "searchType": SEARCH_TYPE.RequestParam,
            "show": true,
        },
        {
            "index": 3,
            "name": "好搜",
            "host": "www.so.com",
            "searchUrl": "https://www.so.com/s?q=%s",
            "searchType": SEARCH_TYPE.RequestParam,
            "show": true,
        },
        {
            "index": 4,
            "name": "知乎",
            "host": "www.zhihu.com",
            "searchUrl": "https://www.zhihu.com/search?type=content&q=%s",
            "searchType": SEARCH_TYPE.RequestParam,
            "show": true,
        },
        {
            "index": 5,
            "name": "谷歌",
            "host": "www.google.com",
            "searchUrl": "https://www.google.com/search?q=%s",
            "searchType": SEARCH_TYPE.RequestParam,
            "show": true,
        },
        {
            "index": 6,
            "name": "搜狗",
            "host": "www.sogou.com",
            "searchUrl": "https://www.sogou.com/web?query=%s",
            "searchType": SEARCH_TYPE.RequestParam,
            "show": true,
        },
        {
            "index": 7,
            "name": "GitHub",
            "host": "github.com",
            "searchUrl": "https://github.com/search?o=desc&q=%s&s=stars&type=Repositories",
            "searchType": SEARCH_TYPE.RequestParam,
            "show": true,
        },
    ];

    /**
     * 获取Url参数名
     * @param url
     * @returns {boolean|*}
     */
    function getUrlParamName(url) {
        // window.location.search.substring(1)
        let pList = url.substring(url.indexOf('?') + 1).split("&");
        for (let i = 0; i < pList.length; i++) {
            var pair = pList[i].split("=");
            if (pair[1] === CONFIG.KeywordSymbol) {
                return pair[0];
            }
        }
        return false;
    }

    /**
     * 获取Url参数
     * @param url
     * @param name
     * @returns {boolean|*}
     */
    function getUrlParam(url, name) {
        // window.location.search.substring(1)
        let pList = url.substring(url.indexOf('?') + 1).split("&");
        for (let i = 0; i < pList.length; i++) {
            console.log("---", pList[i])
            const pair = pList[i].split("=");
            if (pair[0] === name) {
                return pair[1];
            }
        }
        return false;
    }

    function getKeywordString() {

        for (let i = 0; i < searchList.length; i++) {
            const search = searchList[i];
            if (search.host === window.location.host) {
                let urlParamName = getUrlParamName(search.searchUrl);
                console.log('---------------------', urlParamName)
                // alert("参数名：" + urlParamName)
                let urlParam = getUrlParam(window.location.href, urlParamName);
                console.log('---------------------', urlParam)
                // alert("参数：" + urlParam)
                return urlParam;
            } else {
                console.log("No Host:" + search.host)
            }
        }
        return '';
    }

    function getKeywordUrl(search) {
        let keywordString = getKeywordString();
        // alert(keywordString)
        let s = search.searchUrl.replaceAll(CONFIG.KeywordSymbol, keywordString);
        // alert(s)
        return s;
    }


    function createDiv() {
        let itemList = []
        for (let i = 0; i < searchList.length; i++) {
            const search = searchList[i];
            itemList.push(
                {
                    name: search.name,
                    title: search.host,
                    // onload: (data) => {
                    //     console.log("加载前")
                    // },
                    // onunload: (e, data) => {
                    //     console.log("移除前")
                    // },
                    onclick: (e, data) => {
                        console.log("点击")
                        window.open(getKeywordUrl(search), '_blank');
                    },
                    // onmouseover: (e, data) => {
                    //     console.log("鼠标移动到元素上方")
                    // },
                    // onmouseout: (e, data) => {
                    //     console.log("鼠标移出元素上方")
                    // },
                    show: (data) => {
                        console.log("回调")
                        return search.show && search.host !== window.location.host
                    },
                    data: search,
                }
            )

        }

        let weltTool = new WeltTool({
            title: getKeywordString(),
            itemList: itemList
        });

        // alert("添加mainDivDom")
    }

    function init() {
        if (top !== window) {
            //不是顶级窗口不渲染
            console.log("soTab！不是顶部窗口");
            return;
        }

        for (let i = 0; i < searchList.length; i++) {
            if (searchList[i].host === window.location.host) {
                createDiv()
                return;
            }
        }
        // alert("不支持")
    }

    // alert("ok")
    !function start() {
        // alert("start：" + window.location.host)
        init()
    }()

    // !function breakDiv() {
    //     //地址
    //     var href = location.href;
    //     if (href0 != href) {
    //         var oldDOM = document.getElementById(CONFIG.DivId);
    //         if (oldDOM) {
    //             oldDOM.parentNode.removeChild(oldDOM);
    //         }
    //         soTab_init();
    //         href0 = href;
    //     }
    //     setTimeout(breakDiv, 2222);
    // }();

})();
