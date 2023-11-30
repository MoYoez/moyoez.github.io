var b = !0;
var originTitle = document.title;
var d;
document.addEventListener("visibilitychange", function () {
    document.hidden ? (clearTimeout(d), d = setTimeout(function () {
        document.title =
            "|\uff65\u03c9\uff65\uff40\u0029\u4f60\u770b\u4e0d\u89c1\u6211\u2026\u2026";
    }, 500)) : (document.title = "_(:3\u300d\u300d\u8fd8\u662f\u88ab\u53d1\u73b0\u4e86", d =
        setTimeout(function () {
            document.title = originTitle;
        }, 2E3));
});
