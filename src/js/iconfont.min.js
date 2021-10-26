!function (e) {
    var t, c, n, l, o,
        i = '<svg><symbol id="icon-shezhi" viewBox="0 0 1024 1024"><path d="M556.8 960h-73.6c-51.2 0-89.6-41.6-89.6-89.6v-25.6c-35.2-12.8-67.2-28.8-96-51.2l-25.6 12.8c-22.4 12.8-44.8 16-67.2 9.6-22.4-6.4-41.6-22.4-54.4-41.6l-38.4-64c-25.6-44.8-9.6-99.2 32-124.8L160 576c-3.2-22.4-6.4-44.8-6.4-64 0-16 0-32 3.2-48l-22.4-12.8c-44.8-25.6-57.6-80-32-124.8l38.4-64c25.6-44.8 80-57.6 124.8-32l19.2 9.6c28.8-22.4 60.8-41.6 96-54.4v-32C377.6 105.6 416 64 467.2 64h73.6c51.2 0 89.6 41.6 89.6 89.6v28.8c32 12.8 60.8 28.8 89.6 51.2l32-19.2c41.6-25.6 99.2-9.6 124.8 32l38.4 64c25.6 44.8 9.6 99.2-32 124.8l-32 16c3.2 19.2 6.4 38.4 6.4 57.6 0 12.8 0 25.6-3.2 41.6l35.2 22.4c44.8 25.6 57.6 80 32 124.8l-38.4 64c-12.8 22.4-32 35.2-54.4 41.6-22.4 6.4-48 3.2-67.2-9.6l-28.8-16c-25.6 22.4-54.4 41.6-86.4 54.4v35.2c3.2 51.2-38.4 92.8-89.6 92.8z m-256-243.2l16 16c32 28.8 73.6 48 115.2 57.6l25.6 6.4v73.6c0 16 12.8 25.6 25.6 25.6h73.6c16 0 25.6-12.8 25.6-25.6v-80l19.2-6.4c38.4-16 73.6-35.2 102.4-64l16-16 70.4 41.6c6.4 3.2 12.8 3.2 19.2 3.2 6.4-3.2 12.8-6.4 16-12.8l38.4-64c6.4-12.8 3.2-28.8-9.6-35.2l-73.6-41.6 3.2-22.4c3.2-19.2 6.4-35.2 6.4-51.2 0-22.4-3.2-44.8-6.4-67.2l-6.4-22.4 70.4-41.6c12.8-6.4 16-22.4 9.6-35.2l-38.4-64c-3.2-6.4-9.6-9.6-16-12.8-6.4-3.2-12.8 0-19.2 3.2l-73.6 41.6-16-16c-32-28.8-67.2-48-105.6-60.8l-22.4-6.4V153.6c0-16-12.8-25.6-25.6-25.6h-73.6c-16 0-25.6 12.8-25.6 25.6v76.8l-25.6 6.4a300.8 300.8 0 0 0-112 64L288 320 230.4 284.8c-12.8-6.4-28.8-3.2-35.2 9.6l-38.4 64c-6.4 12.8-3.2 28.8 9.6 35.2l60.8 35.2-3.2 22.4c-3.2 19.2-6.4 38.4-6.4 57.6 0 22.4 3.2 48 9.6 73.6l6.4 25.6-57.6 32c-12.8 6.4-16 22.4-9.6 35.2l38.4 64c3.2 6.4 9.6 9.6 16 12.8 6.4 3.2 12.8 0 19.2-3.2l60.8-32z" fill="#333333" ></path><path d="M512 672c-89.6 0-160-70.4-160-160s70.4-160 160-160 160 70.4 160 160-70.4 160-160 160z m0-256c-54.4 0-96 41.6-96 96s41.6 96 96 96 96-41.6 96-96-41.6-96-96-96z" fill="#333333" ></path></symbol></svg>',
        d = (d = document.getElementsByTagName("script"))[d.length - 1].getAttribute("data-injectcss"),
        s = function (e, t) {
            t.parentNode.insertBefore(e, t)
        };
    if (d && !e.__iconfont__svg__cssinject__) {
        e.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }

    function a() {
        o || (o = !0, n())
    }

    function r() {
        try {
            l.documentElement.doScroll("left")
        } catch (e) {
            return void setTimeout(r, 50)
        }
        a()
    }

    t = function () {
        var e, t;
        (t = document.createElement("div")).innerHTML = i, i = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t = e, (e = document.body).firstChild ? s(t, e.firstChild) : e.appendChild(t))
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (c = function () {
        document.removeEventListener("DOMContentLoaded", c, !1), t()
    }, document.addEventListener("DOMContentLoaded", c, !1)) : document.attachEvent && (n = t, l = e.document, o = !1, r(), l.onreadystatechange = function () {
        "complete" == l.readyState && (l.onreadystatechange = null, a())
    })
}(window);
