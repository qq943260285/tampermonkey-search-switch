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
     * 搜索列表
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
            // 国家地球host
            "countryHost": [
                "www.baidu.com",
            ]
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
            "countryHost": [
                "www.goo.gl",
                "www.google.com.af",
                "www.google.com.ag",
                "www.google.com.ai",
                "www.google.com.ar",
                "www.google.com.au",
                "www.google.com.bd",
                "www.google.com.bh",
                "www.google.com.bn",
                "www.google.com.bo",
                "www.google.com.br",
                "www.google.com.by",
                "www.google.com.bz",
                "www.google.com.co",
                "www.google.com.co.jp",
                "www.google.com.cu",
                "www.google.com.cy",
                "www.google.com.do",
                "www.google.com.ec",
                "www.google.com.eg",
                "www.google.com.et",
                "www.google.com.fj",
                "www.google.com.ge",
                "www.google.com.gh",
                "www.google.com.gi",
                "www.google.com.gr",
                "www.google.com.gt",
                "www.google.com.hk",
                "www.google.com.iq",
                "www.google.com.jm",
                "www.google.com.jo",
                "www.google.com.kh",
                "www.google.com.kw",
                "www.google.com.lb",
                "www.google.com.ly",
                "www.google.com.mm",
                "www.google.com.mt",
                "www.google.com.mx",
                "www.google.com.my",
                "www.google.com.na",
                "www.google.com.nf",
                "www.google.com.ng",
                "www.google.com.ni",
                "www.google.com.np",
                "www.google.com.nr",
                "www.google.com.om",
                "www.google.com.pa",
                "www.google.com.pe",
                "www.google.com.pg",
                "www.google.com.ph",
                "www.google.com.pk",
                "www.google.com.pr",
                "www.google.com.py",
                "www.google.com.qa",
                "www.google.com.ru",
                "www.google.com.sa",
                "www.google.com.sb",
                "www.google.com.sg",
                "www.google.com.sl",
                "www.google.com.sv",
                "www.google.com.tj",
                "www.google.com.tr",
                "www.google.com.tw",
                "www.google.com.ua",
                "www.google.com.uy",
                "www.google.com.vc",
                "www.google.com.vn",
                "www.google.ac",
                "www.google.ad",
                "www.google.ae",
                "www.google.af",
                "www.google.ag",
                "www.google.al",
                "www.google.am",
                "www.google.as",
                "www.google.at",
                "www.google.az",
                "www.google.ba",
                "www.google.be",
                "www.google.bf",
                "www.google.bg",
                "www.google.bi",
                "www.google.bj",
                "www.google.bs",
                "www.google.bt",
                "www.google.by",
                "www.google.bo",
                "www.google.ca",
                "www.google.cat",
                "www.google.cc",
                "www.google.cd",
                "www.google.cf",
                "www.google.cg",
                "www.google.ch",
                "www.google.ci",
                "www.google.cl",
                "www.google.cm",
                "www.google.co",
                "www.google.cv",
                "www.google.cz",
                "www.google.co.ao",
                "www.google.co.bw",
                "www.google.co.ck",
                "www.google.co.cr",
                "www.google.co.hu",
                "www.google.co.id",
                "www.google.co.il",
                "www.google.co.im",
                "www.google.co.in",
                "www.google.co.je",
                "www.google.co.jp",
                "www.google.co.ke",
                "www.google.co.kr",
                "www.google.co.ls",
                "www.google.co.ma",
                "www.google.co.mz",
                "www.google.co.nz",
                "www.google.co.th",
                "www.google.co.tz",
                "www.google.co.ug",
                "www.google.co.uk",
                "www.google.co.uz",
                "www.google.co.ve",
                "www.google.co.vi",
                "www.google.co.za",
                "www.google.co.zm",
                "www.google.co.zw",
                "www.google.de",
                "www.google.dj",
                "www.google.dk",
                "www.google.dm",
                "www.google.do",
                "www.google.dz",
                "www.google.ec",
                "www.google.ee",
                "www.google.es",
                "www.google.hk",
                "www.google.mx",
                "www.google.ng",
                "www.google.ph",
                "www.google.pk",
                "www.google.pl",
                "www.google.pn",
                "www.google.ps",
                "www.google.pt",
                "www.google.qa",
                "www.google.ro",
                "www.google.rs",
                "www.google.ru",
                "www.google.rw",
                "www.google.sc",
                "www.google.se",
                "www.google.sh",
                "www.google.si",
                "www.google.sk",
                "www.google.sm",
                "www.google.sn",
                "www.google.so",
                "www.google.st",
                "www.google.sg",
                "www.google.sl",
                "www.google.td",
                "www.google.tg",
                "www.google.tw",
                "www.google.tk",
                "www.google.tl",
                "www.google.tm",
                "www.google.tn",
                "www.google.to",
                "www.google.tt",
                "www.google.ua",
                "www.google.vg",
                "www.google.vn",
                "www.google.vu",
                "www.google.ws",
            ]
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
        return '';
    }

    /**
     * 获取参数key
     * @returns {*|boolean|string}
     */
    function getKeywordString() {

        for (let i = 0; i < searchList.length; i++) {
            const search = searchList[i];
            if (matchItemHost(search)) {
                let urlParamName = getUrlParamName(search.searchUrl);
                console.log('---------------------', urlParamName)
                let urlParam = getUrlParam(window.location.href, urlParamName);
                console.log('---------------------', urlParam)
                return urlParam;
            } else {
                console.log("No Host:" + search.host)
            }
        }
        return '';
    }

    /**
     * 获取搜索向 关键字
     * @param search
     * @returns {string}
     */
    function getKeywordUrl(search) {
        let keywordString = getKeywordString();
        // alert(keywordString)
        let s = search.searchUrl.replaceAll(CONFIG.KeywordSymbol, keywordString);
        // alert(s)
        return s;
    }


    function createDiv() {
        console.log("开始创建")
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
                        return search.show && !matchItemHost(search)
                    },
                    data: search,
                }
            )

        }
        let weltTool = new WeltTool({
            title: getKeywordString(),
            itemList: itemList
        });
        console.log("完成创建")

        // alert("添加mainDivDom")
    }


    /**
     * 匹配是否支持item的host
     * @param item
     * @returns {boolean}
     */
    function matchItemHost(item) {
        if (item.host === window.location.host) {
            return true;
        }
        // 地区域名支持
        let countryHost = item.countryHost;
        if (countryHost && countryHost.length > 0) {
            for (let j = 0; j < countryHost.length; j++) {
                if (countryHost[j] === window.location.host) {
                    return true;
                }
            }
        }
        return false;
    }

    (() => {
        if (top !== window) {
            //不是顶级窗口不渲染
            console.log("不是顶部窗口");
            return;
        }

        for (let i = 0; i < searchList.length; i++) {
            if (matchItemHost(searchList[i])) {
                createDiv()
                return;
            }
        }
        // alert("不支持")
    })()
})();
