// ==UserScript==
// @name            搜索引擎助手：搜索切换/搜索引擎切换，快速跳转/切换关键字搜索
// @namespace       https://github.com/qq943260285
// @version         1.0.1
// @description     搜索引擎助手，搜索切换/搜索引擎切换，快速跳转/切换关键字搜索，自定义搜索站点，提供快捷搜索工具支持。
// @author          小宇专属
// @license         GPL-3.0-only
// @icon            https://raw.githubusercontent.com/qq943260285/tampermonkey-search-switch/master/assets/logo_ico.png
// @create          2021-10-20
// @lastmodified    2021-10-26
// @supportURL      https://github.com/qq943260285/tampermonkey-search-switch.git
// @feedback-url    https://github.com/qq943260285/tampermonkey-search-switch.git
// @note
// @include         *
// @grant           GM_addStyle
// ==/UserScript==

"use strict";

(function() {
    window.WeltTool = function(config) {
        if (!config) config = {};
        if (!config.id) config.id = "xyzs-welt-tool";
        if (!config.itemList || !config.itemList.length) config.itemList = [];
        var mainDivDom, titleDiv = document.createElement("style"), bodyDom = document.getElementsByTagName("body")[0];
        if (titleDiv.innerHTML = ".xyzs-welt-tool{position:fixed;display:flex;background-color:#000;opacity:.3;border-radius:0 40px 40px 0;padding:10px 35px 10px 5px;flex-direction:column;bottom:100px;left:0;z-index:99999;transition:all .4s;box-shadow:2px 2px 4px 0 #c1c1c1}.xyzs-welt-tool:hover{opacity:1;border-radius:0 10px 10px 0}.xyzs-welt-tool .xyzs-title-div{font-size:5px;margin:0 5px 5px 5px}.xyzs-welt-tool .xyzs-item-list-div{margin:0;display:flex;justify-content:center}.xyzs-welt-tool .xyzs-item-list-div .xyzs-item-div{display:flex;margin:0 5px;color:#0cc;font-size:14px;cursor:pointer;line-height:1}.xyzs-welt-tool .xyzs-item-list-div .xyzs-item-div:hover{color:#0ff}", bodyDom.appendChild(titleDiv), (mainDivDom = document.createElement("div")).id = config.id, 
        mainDivDom.className = "xyzs-welt-tool", config.color) mainDivDom.style.backgroundColor = config.color;
        if (mainDivDom.onmouseout = function(e) {
            mainDivDom.style.left = 30 - mainDivDom.offsetWidth + "px";
        }, mainDivDom.onmouseover = function(e) {
            mainDivDom.style.left = "0px";
        }, void 0 !== config.title) {
            titleDiv = document.createElement("div");
            titleDiv.className = "xyzs-title-div", titleDiv.innerHTML = decodeURI(config.title), 
            mainDivDom.appendChild(titleDiv);
        }
        var listDivDom = document.createElement("div");
        listDivDom.className = "xyzs-item-list-div";
        for (var i = 0; i < config.itemList.length; i++) (function(itemDiv) {
            var item = config.itemList[itemDiv];
            if (item.show(item.data)) {
                if (item.onload) item.onload(item.data);
                itemDiv = document.createElement("div");
                itemDiv.className = "xyzs-item-div", itemDiv.title = item.title, itemDiv.onclick = function(e) {
                    if (item.onclick) item.onclick(e, item.data);
                }, itemDiv.onmouseout = function(e) {
                    if (item.onmouseout) item.onmouseout(e, item.data);
                }, itemDiv.onmouseover = function(e) {
                    if (item.onmouseover) item.onmouseover(e, item.data);
                }, itemDiv.innerHTML = item.name, listDivDom.appendChild(itemDiv);
            }
        })(i);
        mainDivDom.appendChild(listDivDom), bodyDom.appendChild(mainDivDom), mainDivDom.style.left = 30 - mainDivDom.offsetWidth + "px";
    };
})(), function() {
    function getKeywordString() {
        for (var i = 0; i < searchList.length; i++) {
            var urlParam = searchList[i];
            if (urlParam.host === window.location.host) {
                urlParam = function(url) {
                    for (var pList = url.substring(url.indexOf("?") + 1).split("&"), i = 0; i < pList.length; i++) {
                        var pair = pList[i].split("=");
                        if (pair[1] === CONFIG.KeywordSymbol) return pair[0];
                    }
                    return !1;
                }(urlParam.searchUrl), urlParam = function(url, name) {
                    for (var pList = url.substring(url.indexOf("?") + 1).split("&"), i = 0; i < pList.length; i++) {
                        var pair = pList[i].split("=");
                        if (pair[0] === name) return pair[1];
                    }
                    return !1;
                }(window.location.href, urlParam);
                return urlParam;
            }
        }
        return "";
    }
    function createDiv() {
        for (var itemList = [], _loop = function(i) {
            var search = searchList[i];
            itemList.push({
                name: search.name,
                title: search.host,
                onclick: function(e, data) {
                    window.open(function(search) {
                        var keywordString = getKeywordString();
                        return search.searchUrl.replaceAll(CONFIG.KeywordSymbol, keywordString);
                    }(search), "_blank");
                },
                show: function(data) {
                    return search.show && search.host !== window.location.host;
                },
                data: search
            });
        }, i = 0; i < searchList.length; i++) _loop(i);
        new WeltTool({
            title: getKeywordString(),
            itemList: itemList
        });
    }
    var SEARCH_TYPE_RequestParam = 0, CONFIG = {
        KeywordSymbol: "%s",
        DivId: "xyzs-search",
        defaultSearchType: SEARCH_TYPE_RequestParam,
        defaultCustomize: !1
    }, searchList = [ {
        index: 1,
        name: "百度",
        host: "www.baidu.com",
        urlKeyword: [],
        searchUrl: "https://www.baidu.com/s?wd=%s",
        searchType: SEARCH_TYPE_RequestParam,
        css: "",
        remark: "备注",
        customize: !1,
        show: !0
    }, {
        index: 2,
        name: "必应",
        host: "cn.bing.com",
        searchUrl: "https://cn.bing.com/search?q=%s",
        searchType: SEARCH_TYPE_RequestParam,
        show: !0
    }, {
        index: 3,
        name: "好搜",
        host: "www.so.com",
        searchUrl: "https://www.so.com/s?q=%s",
        searchType: SEARCH_TYPE_RequestParam,
        show: !0
    }, {
        index: 4,
        name: "知乎",
        host: "www.zhihu.com",
        searchUrl: "https://www.zhihu.com/search?type=content&q=%s",
        searchType: SEARCH_TYPE_RequestParam,
        show: !0
    }, {
        index: 5,
        name: "谷歌",
        host: "www.google.com",
        searchUrl: "https://www.google.com/search?q=%s",
        searchType: SEARCH_TYPE_RequestParam,
        show: !0
    }, {
        index: 6,
        name: "搜狗",
        host: "www.sogou.com",
        searchUrl: "https://www.sogou.com/web?query=%s",
        searchType: SEARCH_TYPE_RequestParam,
        show: !0
    }, {
        index: 7,
        name: "GitHub",
        host: "github.com",
        searchUrl: "https://github.com/search?o=desc&q=%s&s=stars&type=Repositories",
        searchType: SEARCH_TYPE_RequestParam,
        show: !0
    } ];
    !function() {
        (function() {
            if (top !== window) return;
            for (var i = 0; i < searchList.length; i++) if (searchList[i].host === window.location.host) return createDiv();
        })();
    }();
}();