var postRightAsync = false, postLeftAsync = false, postRecommendAsync = false, leftLoadingComplete = false, rightLoadingComplete = false, recommendLoadingComplete = false, isRecommendItems = false;
var recommendItem = [], slidingItems = [], vertSlidingItems = []; ;
var currentSlide = 0, totalSlide = 0, productPerSlide = 4, recommendLastLoadedItem = 0, rightLastLodingItem = 0, LeftLastLodingItem = 0, rightTotalItems = 0, leftTotalItems = 0;
var _postURL = document.location.protocol + '//' + document.location.host + "/buildmasterpagecontent.aspx";
var bgLoadingImg = "ip_lazy_bg_gray_new.gif";
var bgLoadingImg2 = "ip_lazy_load_img.gif";
var user_type = null;
var xmlBrowseData = null;

// sdmenu starts
function SDMenu(id) {
    if (!document.getElementById || !document.getElementsByTagName)
        return false;
    if (document.getElementById(id) == null || document.getElementById(id) == undefined)
        return false;
    this.menu = document.getElementById(id);
    this.submenus = this.menu.getElementsByTagName("div");
    this.remember = true;
    this.speed = 3;
    this.markCurrent = true;
    this.oneSmOnly = true;
}
SDMenu.prototype.init = function () {
    var mainInstance = this;
    for (var i = 0; i < this.submenus.length; i++)
        this.submenus[i].getElementsByTagName("span")[0].onclick = function () {
            mainInstance.toggleMenu(this.parentNode);
        };
    if (this.markCurrent) {
        var links = this.menu.getElementsByTagName("a");
        var parentElm = null;
        if (document.location.pathname.indexOf("1.htm") != -1 || document.location.pathname.indexOf("2.htm") != -1) {
            for (var i = 0; i < links.length; i++)
                if (document.location.href.indexOf(links[i].href) != -1) {
                    links[i].className = "current";
                    parentElm = links[i].parentNode;
                    break;
                }
        }
        else {
            var p = document.location.search.replace("?", "").split("&");
            for (var j = 0; j < p.length; j++) {
                var t = p[j].split("=");
                if (t.length > 1 && $("#hdnStorename").length > 0) {
                    if (t[0].toLowerCase() == "category")
                        t[1] += "-" + $("#hdnStorename").val() + "-1.htm";
                    else if (t[0].toLowerCase() == "subcategory")
                        t[1] += "-" + $("#hdnStorename").val() + "-2.htm";
                }
                for (var i = 0; i < links.length; i++) {
                    var l = links[i].href.split("?");
                    if (t.length > 1 && l[0].indexOf(t[1].toLowerCase()) != -1) {
                        links[i].className = "current";
                        parentElm = links[i].parentNode;
                        break;
                    }
                }
            }
        }
        this.collapseAll();
        if (parentElm != null && parentElm != undefined) {
            this.toggleMenu(parentElm);
        }
    }
    //    if (this.remember) {
    //        var regex = new RegExp("sdmenu_" + encodeURIComponent(this.menu.id) + "=([01]+)");
    //        var match = regex.exec(document.cookie);
    //        if (match) {
    //            var states = match[1].split("");
    //            for (var i = 0; i < states.length; i++)
    //                this.submenus[i].className = (states[i] == 0 ? "collapsed" : "");
    //        }
    //    }
};
SDMenu.prototype.toggleMenu = function (submenu) {
    if (submenu.className == "collapsed" || submenu.className == null)
        this.expandMenu(submenu);
    else if (submenu.className != "")
        this.collapseMenu(submenu);
};
SDMenu.prototype.expandMenu = function (submenu) {
    var fullHeight = submenu.getElementsByTagName("span")[0].offsetHeight;
    var links = submenu.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++)
        fullHeight += links[i].offsetHeight;
    var moveBy = Math.round(this.speed * links.length); var mainInstance = this;
    var intId = setInterval(function () {
        var curHeight = submenu.offsetHeight;
        var newHeight = curHeight + moveBy;
        if (newHeight < fullHeight)
            submenu.style.height = newHeight + "px";
        else {
            clearInterval(intId);
            submenu.style.height = "";
            submenu.className = "";
            mainInstance.memorize();
        }
    }, 30);
    this.collapseOthers(submenu);
};
SDMenu.prototype.collapseMenu = function (submenu) {
    var minHeight = submenu.getElementsByTagName("span")[0].offsetHeight;
    var moveBy = Math.round(this.speed * submenu.getElementsByTagName("a").length);
    var mainInstance = this;
    var intId = setInterval(function () {
        var curHeight = submenu.offsetHeight;
        var newHeight = curHeight - moveBy;
        if (newHeight > minHeight)
            submenu.style.height = newHeight + "px";
        else {
            clearInterval(intId);
            submenu.style.height = "";
            submenu.className = "collapsed";
            mainInstance.memorize();
        }
    }, 30);
};
SDMenu.prototype.collapseOthers = function (submenu) {
    if (this.oneSmOnly) {
        for (var i = 0; i < this.submenus.length; i++)
            if (this.submenus[i] != submenu && this.submenus[i].className != "collapsed")
                this.collapseMenu(this.submenus[i]);
    }
};
SDMenu.prototype.expandAll = function () {
    var oldOneSmOnly = this.oneSmOnly; this.oneSmOnly = false;
    for (var i = 0; i < this.submenus.length; i++)
        if (this.submenus[i].className == "collapsed")
            this.expandMenu(this.submenus[i]);
    this.oneSmOnly = oldOneSmOnly;
};
SDMenu.prototype.collapseAll = function () {
    for (var i = 0; i < this.submenus.length; i++)
        if (this.submenus[i].className != "collapsed" && this.submenus[i].className != "")
            this.collapseMenu(this.submenus[i]);
};
SDMenu.prototype.memorize = function () {
    if (this.remember) {
        var states = new Array();
        for (var i = 0; i < this.submenus.length; i++)
            states.push(this.submenus[i].className == "collapsed" ? 0 : 1);
        var d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = "sdmenu_" + encodeURIComponent(this.menu.id) + "=" + states.join("") + "; expires=" + d.toGMTString() + "; path=/";
    }
};
// sdmenu ends

jQuery.fn.ipslidy = function () {
    (function (b) { b.fn.slidy = function (y) { if (this.length == 0) { a("Selector invalid or missing!"); return; } else { if (this.length > 1) { return this.each(function () { b.fn.slidy.apply(b(this), [y]); }); } } var d = b.extend({}, b.fn.slidy.defaults, y), i = b(this), r = this.attr("id"), q = i.children(d.children), j = q.length, m = (d.children == "img") ? q : q.find("img"), n = 0, h = false; if (r === undefined) { r = "slidy-" + i.index(); i.attr("id", r); } i.data("options", d).css({ cursor: d.cursor, height: d.height + "px", overflow: "hidden", position: "relative", width: d.width + "px" }); q.each(function (B) { b(this).css({ position: "absolute", "z-index": j - B }).attr("id", i.attr("id") + "-" + (B + 1)); }); m.attr({ height: d.height, width: d.width }).css("border", "0"); if (d.children == "a" && d.target != "") { q.attr("target", d.target); } q.hide().first().show(); if (d.menu) { $menu = b("<ul/>", { id: r + "-slidy-menu", "class": "slidy-menu" }).insertAfter(i); } var u = function () { clearTimeout(n); }, g = function () { u(); }, w = function (D) { u(); var F = b(this), B = F.index(), C = F.parent().children(".slidy-link-selected"), E = C.index(); if (B != E) { C.removeClass("slidy-link-selected"); F.addClass("slidy-link-selected"); l(E, B); } }, v = function (B) { t(b(B.target).parent("a").index()); }, e = function () { var E = b(this), B = E.index(), C = E.parent().children(".slidy-link-selected"), D = C.index(); t(D); }, s = function (D) { u(); var F = b(this), B = F.index(), C = F.parent().children(".slidy-link-selected"), E = C.index(); if (B != E) { C.removeClass("slidy-link-selected"); F.addClass("slidy-link-selected"); } t(B); }; if (d.menu) { var z = (d.target != "") ? 'target="' + d.target + '"' : "", c = "", k, A; m.each(function () { A = b(this); k = A.parent(d.children); c += '<li><a href="' + k.attr(k.is("a") ? "href" : "title") + '" ' + z + ">" + A.attr("title") + "</a></li>"; }); $menu.html(c); var x = parseInt((d.width / j) + (j - 1)), p = d.width - (x * j), f = $menu.children("li"); if (d.action == "mouseenter") { f.mouseenter(w).mouseleave(e); } else { if (d.action == "click") { f.click(s); } else { a('action attribute must to be "click" or "mouseenter"!'); return; } } f.css("width", x).first().addClass("slidy-link-selected").end().last().css({ "border-right": "0", width: (x + p) - (j - 1) }); if (d.animation == "slide" || d.animation == "fade") { f.mousemove(function () { var B = b(this); if (!B.hasClass("slidy-link-selected")) { B.mouseenter(); } }); } } t(0); if (d.pause) { i.mouseenter(g).mouseleave(v); } function t(B) { var D = j - 1, C = null; if (B > D) { B = 0; C = D; } else { if (B <= 0) { B = 0; C = D; } else { C = B - 1; } } l(C, B); n = setTimeout(function () { t(++B); }, d.time); } function l(C, B) { if (!h) { h = true; if (d.animation == "fade") { q.eq(C).fadeOut(d.speed).end().eq(B).fadeIn(d.speed, function () { o(B); h = false; }); } else { if (d.animation == "slide") { q.css("z-index", 0).eq(B).css("z-index", j).slideDown(d.speed, function () { q.eq(C).hide(); o(B); h = false; }); } else { q.eq(C).hide().end().eq(B).show(0, function () { o(B); h = false; }); } } } } function o(B) { if (d.menu) { i.next("ul.slidy-menu").children().removeClass("slidy-link-selected").eq(B).addClass("slidy-link-selected"); } } return i; }; function a(c) { if (window.console && window.console.log) { window.console.log(c); } } b.fn.slidy.defaults = { action: "mouseenter", animation: "normal", children: "img", cursor: "default", height: 200, menu: false, pause: false, speed: 600, target: "", time: 3600, width: 500 }; })(jQuery);
    return { init: function (elementid) { if ($('#' + elementid).length > 0) { $('#' + elementid).slidy({ animation: 'fade', children: 'a', menu: true, pause: true, speed: 400, time: 4000, width: 760, height: 200 }); } } }
} ();
jQuery.fn.iplazyload = function () {
    (function (a, b, c, d) { var e = a(b); a.fn.lazyload = function (c) { function i() { var b = 0; f.each(function () { var c = a(this); if (h.skip_invisible && !c.is(":visible")) return; if (!a.abovethetop(this, h) && !a.leftofbegin(this, h)) if (!a.belowthefold(this, h) && !a.rightoffold(this, h)) c.trigger("appear"), b = 0; else if (++b > h.failure_limit) return !1 }) } var f = this, g, h = { threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: b, data_attribute: "original", skip_invisible: !0, appear: null, load: null }; return c && (d !== c.failurelimit && (c.failure_limit = c.failurelimit, delete c.failurelimit), d !== c.effectspeed && (c.effect_speed = c.effectspeed, delete c.effectspeed), a.extend(h, c)), g = h.container === d || h.container === b ? e : a(h.container), 0 === h.event.indexOf("scroll") && g.bind(h.event, function (a) { return i() }), this.each(function () { var b = this, c = a(b); b.loaded = !1, c.one("appear", function () { if (!this.loaded) { if (h.appear) { var d = f.length; h.appear.call(b, d, h) } a("<img />").bind("load", function () { c.hide().attr("src", c.data(h.data_attribute))[h.effect](h.effect_speed), b.loaded = !0; var d = a.grep(f, function (a) { return !a.loaded }); f = a(d); if (h.load) { var e = f.length; h.load.call(b, e, h) } }).attr("src", c.data(h.data_attribute)).error(function () { c.trigger("onerror"); }) } }), 0 !== h.event.indexOf("scroll") && c.bind(h.event, function (a) { b.loaded || c.trigger("appear") }) }), e.bind("resize", function (a) { i() }), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function (b) { b.originalEvent.persisted && f.each(function () { a(this).trigger("appear") }) }), a(b).load(function () { i() }), this }, a.belowthefold = function (c, f) { var g; return f.container === d || f.container === b ? g = e.height() + e.scrollTop() : g = a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold }, a.rightoffold = function (c, f) { var g; return f.container === d || f.container === b ? g = e.width() + e.scrollLeft() : g = a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold }, a.abovethetop = function (c, f) { var g; return f.container === d || f.container === b ? g = e.scrollTop() : g = a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height() }, a.leftofbegin = function (c, f) { var g; return f.container === d || f.container === b ? g = e.scrollLeft() : g = a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width() }, a.inviewport = function (b, c) { return !a.rightoffold(b, c) && !a.leftofbegin(b, c) && !a.belowthefold(b, c) && !a.abovethetop(b, c) }, a.extend(a.expr[":"], { "below-the-fold": function (b) { return a.belowthefold(b, { threshold: 0 }) }, "above-the-top": function (b) { return !a.belowthefold(b, { threshold: 0 }) }, "right-of-screen": function (b) { return a.rightoffold(b, { threshold: 0 }) }, "left-of-screen": function (b) { return !a.rightoffold(b, { threshold: 0 }) }, "in-viewport": function (b) { return a.inviewport(b, { threshold: 0 }) }, "above-the-fold": function (b) { return !a.belowthefold(b, { threshold: 0 }) }, "right-of-fold": function (b) { return a.rightoffold(b, { threshold: 0 }) }, "left-of-fold": function (b) { return !a.rightoffold(b, { threshold: 0 }) } }) })(jQuery, window, document);
    return { load: function (container) { if ($("#" + container).length > 0) { var options = { effect: "fadeIn" }; $("#" + container).find("img").lazyload(options); } } }
} ();

$(function () {
    bindMenu('MenuBar1');

    var _home = $("#form1").attr("class");
    var $Store = '';
    $("input:hidden[id*=hdnStorename]").each(function () { if (trimString($(this).val()).length > 0) { $Store = $(this).val(); return false; } });
    $("#storeNavigation").mouseenter(function () {
        $("#myElement").attr("class", "left-categories-cont-inactive2"); $("#allStoreHeader").attr("class", "left-categories-head-up");
        if ($("ul div a img[src*='ip_lazy_bg_gray_new.gif']").length > 0) allStoreLazyImageLoader($("ul div a img[src*='ip_lazy_bg_gray_new.gif']"));
    }).mouseleave(function () {
        if (_home != "home") $("#myElement").attr("class", "left-categories-cont-inactive"); $("#allStoreHeader").attr("class", "left-categories-head-down");
    });
    if (_home === "home") {
        $("#storeNavigation").trigger("mouseenter");
        if ($("#divAboutus").length > 0) $("#divAboutus").show().find("p").css({ "margin-bottom": "8px" });
    }

    $("div:[id^='iphomedeals-']").hide(); $("#iphomedeals-default").show();
    if ($("#ipstorehome") != null && $("#ipstorehome") != undefined)
    { $("div:[id^='iphomedeals-']").hide(); if ($Store.toLowerCase() != "" && _home != "home") { $("a#ipstorehome").html($Store + ' ' + "Home"); $("a#ipstorehome").attr({ title: $Store, href: "/" + $Store + "/" }); if ($("#iphomedeals-" + $Store.toLowerCase()).length > 0) $("#iphomedeals-" + $Store.toLowerCase()).show(); else $("#iphomedeals-default").show(); } else { $("#iphomedeals-default").show(); } }

    user_type = getCookieValue("UserType");
    if (_home != "home") {
        xmlBrowseData = TexttoXML(getCookieValue("RviewdNew"));
        if (xmlBrowseData != null && xmlBrowseData != undefined && $(xmlBrowseData).find("P").length > 0)
            getBrowsedDataNew();
        getRecommendSkus(true);
    }
    $(".prodInfo home_buynow").live("click", function () {
        var produrl = $(this).attr("produrl") || null;
        if (produrl != null && produrl != undefined && produrl.length > 0)
            window.location.href = produrl;
        return false;
    });

    //recommendation part
    $(".recom_buynow").live("click", function () {
        var produrl = $(this).attr("produrl") || null;
        if (produrl != null && produrl != undefined && produrl.length > 0)
            window.location.href = produrl;
        return false;
    });
    $('#mycarousel-next').bind('click', function () {
        totalSlide = Math.ceil(recommendItem.length / productPerSlide);
        if (currentSlide < totalSlide) {
            var toRightSliding = 0;
            if (slidingItems[currentSlide + 1] != null && slidingItems[currentSlide + 1] != undefined)
                toRightSliding = slidingItems[currentSlide + 1];
            if (toRightSliding == 0 && recommendLoadingComplete === false && postRightAsync === false) {
                getRecommendItems();
            }
            else if (toRightSliding > 0) {
                currentSlide += 1;
                mycarouselStyle("iphomemycarousel", toRightSliding, "right");
            }
        }
        if (totalSlide === currentSlide) $("#mycarousel-next").attr("class", "jcarousel-next jcarousel-next-horizontal jcarousel-next-disabled jcarousel-next-disabled-horizontal");
        else $("#mycarousel-next").attr("class", "jcarousel-next jcarousel-next-horizontal");
    });
    $('#mycarousel-prev').bind('click', function () {
        if (currentSlide > 1) {
            currentSlide = currentSlide - 1;
            var toLeftSliding = 0;
            if (slidingItems[currentSlide + 1] != null && slidingItems[currentSlide + 1] != undefined) {
                toLeftSliding = slidingItems[currentSlide + 1];
                if (toLeftSliding > 0)
                    mycarouselStyle("iphomemycarousel", toLeftSliding, "left");
            }
        }
        if (currentSlide === 1) $("#mycarousel-prev").attr("class", "jcarousel-prev jcarousel-next-horizontal_mid jcarousel-prev-horizontal jcarousel-prev-disabled jcarousel-prev-disabled-horizontal");
        else $("#mycarousel-prev").attr("class", "jcarousel-prev jcarousel-next-horizontal_mid jcarousel-prev-horizontal");
    });
});

//Display a notavaiable image if a particlar product image is not availabe on server
var img_onerror = function (ele) { ele = ele || this; if (ele.getAttribute('data-retry') == null && ele.getAttribute('data-error-url')) { ele.setAttribute('data-retry', "true"); var old_src = ele.src; ele.src = ele.getAttribute('data-error-url'); ele.alt = 'error'; } };
function initLAZYLOAD(containerid) { if (typeof $.fn.iplazyload == "object" && typeof $.fn.iplazyload.load == "function") { $.fn.iplazyload.load(containerid); } }
function initSLIDY(elementid) { if (typeof $.fn.ipslidy == "object" && typeof $.fn.ipslidy.init == "function") { $.fn.ipslidy.init(elementid); } }
function getRecommendItems() {
    var start = recommendLastLoadedItem == 0 ? 1 : recommendLastLoadedItem + 1;
    var p_id = getRecommendData(start);
    if (p_id != "") {
        $.ajax({
            beforeSend: function () { postRightAsync = true; },
            type: "POST", url: _postURL, data: { recommends: "true", sku: p_id, start: start, end: productPerSlide }, context: document.body,
            success: function (data) {
                currentSlide += 1;
                if (jQuery.parseJSON(data) != null && jQuery.parseJSON(data) != undefined) mycarousel_itemAddCallback(jQuery.parseJSON(data), start);
                if (totalSlide === 0) recommendLoadingComplete = false;
                else if (currentSlide === totalSlide) recommendLoadingComplete = true;
                postRightAsync = false;
                return false;
            }
        });
    }
}
function imageLazyLoader(startIndex, endIndex) {
    for (var i = startIndex; i <= endIndex; i++) {
        lazyImage("leftDiv", $("#iphomemycarousel li[jcarouselindex=" + i + "]").find("img[src*='ip_lazy_load_img.gif']"));
    }
}
function mycarousel_itemAddCallback(jsonData, start) {
    if (jsonData["0"] > 0) {
        slidingItems[currentSlide] = jsonData["0"];
        var j = start;
        var end = start + parseInt(jsonData["0"]);
        while (j <= end) {
            if (jsonData[j.toString()] != null && jsonData[j.toString()] != undefined)
                $('#iphomemycarousel').append("<li jcarouselindex='" + j + "' style='list-style:none;float:left;margin:0px;height:265px;' class='jcarousel-item jcarousel-item-horizontal jcarousel-item-" + (j) + " jcarousel-item-" + (j) + "-horizontal'><div class='ProductBlk leftAlign ProductBlk-lesspd' align='center'>" + jsonData[j.toString()] + "</div></li>");
            j++;
        }
        if ($('#iphomemycarousel li').length >= 4) {
            $('#divRecommending').show(); imageLazyLoader(start, j); recommendLastLoadedItem = $('#iphomemycarousel li').length;
            if (currentSlide > 1) mycarouselStyle("iphomemycarousel", parseInt(jsonData["0"]), "right");
        }
    }
}
function mycarouselStyle(containerId, li_count, direction) {
    var toSliding = li_count * $("#" + containerId + " li:eq(0)").width();
    switch (direction) {
        case "right":
            $("#mycarousel-prev").attr("class", "jcarousel-prev jcarousel-next-horizontal_mid jcarousel-prev-horizontal");
            $('#iphomemycarousel').animate({ width: '+=' + toSliding, left: '-=' + toSliding }, "slow");
            break;
        case "left":
            $('#iphomemycarousel').animate({ left: '+=' + toSliding }, "slow");
            $("#mycarousel-next").attr("class", "jcarousel-next jcarousel-next-horizontal");
            break;
    }
}
function getRecommendData(index) {
    var p_ids = new Array();
    if (index < recommendItem.length) { for (var k = 0; recommendItem.length > 5 && k < productPerSlide && k < recommendItem.length; k++) { if (recommendItem[index]) { p_ids.push(recommendItem[index]); index += 1; } } }
    return p_ids.join();
}
function getRecommendSkus(isPost) {
    var _storeName = $("#hdnStorename").val() || '';
    if (isPost) {
        $.ajax({
            beforeSend: function () { isRecommendItems = false; }, type: "POST", url: _postURL, data: { recommends: "true", store: _storeName, pageURL: document.location.pathname }, context: document.body,
            success: function (data) {
                if (data != null) {
                    isRecommendItems = true;
                    var recomResult = ipPARSEJSON(data);
                    if (recomResult != null && recomResult != undefined) {
                        recommendItem = recomResult.skus ? recomResult.skus : '';
                        if (recommendItem.length >= 4) getRecommendItems();
                    }
                }
                return false;
            }
        });
    }
}
//recommendation part end

function ipPARSEJSON(data) {
    var resultJSON = '';
    try { resultJSON = typeof jQuery == "function" ? jQuery.parseJSON(data) : $.parseJSON(data); }
    catch (err) { resultJSON = ''; }
    return resultJSON;
}
function lazyImageLoader($img, h) {
    if ($img != null && $img != undefined) {
        if ($img.attr("src") != undefined && $img.attr("src").indexOf(bgLoadingImg) != -1) {
            var imgSRC = $img.attr("original") != null && $img.attr("original") != undefined ? $img.attr("original") : $img.attr("src");
            if (imgSRC.indexOf("images.indiaplaza") != -1) imgSRC = imgSRC.replace("images.", "img" + Math.floor(Math.random() * (5 - 1) + 1) + ".");
            $img.attr('src', imgSRC);
            var imgWidth = $img.width();
            var imgHeight = $img.width();
            var NewHeight = h;
            var NewWidth = (imgWidth / imgHeight) * imgHeight;
            $img.css({ width: NewWidth, height: NewHeight });
        }
    }
}
function allStoreLazyImageLoader(arrObj) {
    for (var i = 0; i < arrObj.length; i++) {
        var obj = arrObj[i];
        if (obj != null && obj != undefined) {
            if (obj.getAttribute("src") != undefined && obj.getAttribute("src").indexOf('ip_lazy_bg_gray_new.gif') != -1) {
                var imgSRC = obj.getAttribute("original") != null && obj.getAttribute("original") != undefined ? obj.getAttribute("original") : obj.getAttribute("src");
                if (imgSRC.indexOf("images.indiaplaza") != -1) imgSRC = imgSRC.replace("images.", "img" + Math.floor(Math.random() * (5 - 1) + 1) + ".");
                obj.setAttribute('src', imgSRC);
            }
        }
    }
}
function getCookieValue(c_name) {
    var i, x, y, cookieCollection = document.cookie.split(";");
    for (i = 0; i < cookieCollection.length; i++) {
        x = cookieCollection[i].substr(0, cookieCollection[i].indexOf("="));
        y = cookieCollection[i].substr(cookieCollection[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
    return "";
}
function TexttoXML(text) {
    var xmlDoc = null;
    try {
        text = decodeURIComponent((text + '').replace(/\+/g, '%20'));
        if (text.length > 0) {
            if (typeof $ == "function") xmlDoc = $.parseXML(text);
            if (typeof jQuery == "function") xmlDoc = jQuery.parseXML(text);
            else if (window.DOMParser) {
                var parser = new DOMParser();
                xmlDoc = parser.parseFromString(text, "text/xml");
            }
        }
    }
    catch (err) {
    }
    return xmlDoc;
}
function getBrowsedData() {
    $.ajax({
        beforeSend: function () { $("#divBrowsed").show(); },
        type: "POST", url: _postURL, data: { browsed: "true" }, context: document.body,
        success: function (data) {
            if (data != null && data != undefined && data.length > 0) { $("#divBrowsed").html(data); initLAZYLOAD('divBrowsed'); }
        },
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                //Not connect.\n Verify Network.
                $("#divBrowsed").hide();
            } else if (jqXHR.status == 404) {
                //Requested page not found. [404].
                $("#divBrowsed").hide();
            } else if (jqXHR.status == 500) {
                //Internal Server Error [500].
                $("#divBrowsed").hide();
            } else if (exception === 'parsererror') {
                //Requested JSON parse failed.
                $("#divBrowsed").hide();
            } else if (exception === 'timeout') {
                //Time out error.
                $("#divBrowsed").hide();
            } else if (exception === 'abort') {
                //Ajax request aborted.
                $("#divBrowsed").hide();
            } else {
                //Uncaught Error.
                $("#divBrowsed").hide();
            }
        }
    });
}
function getBrowsedDataNew() {
    $.ajax({
        beforeSend: function () { $("#mycarousel-recentview").show(); },
        type: "POST", url: _postURL, data: { recentview: "true" }, context: document.body,
        success: function (data) {
            if (data != null && data != undefined && data.length > 0) { $("#mycarousel-recentview").html(data); lazyImage("storeRightDiv", $("#mycarousel-recentview").find("img[src*='" + bgLoadingImg + "']")); }
            else { $("#mycarousel-recentview").html("<li class='emptyitem' style='float: left; list-style: none; width: 228px;'>No Items</li>"); }
        },
        error: function (jqXHR, exception) { $("#mycarousel-recentview").html("<li class='emptyitem' style='float: left; list-style: none; width: 228px;'>No Items</li>"); }
    });
}
function lazyImageLoaderDefault($img) {
    if ($img != null && $img != undefined) {
        if ($img.attr("src") != undefined) {
            if ($img.attr("src").indexOf(bgLoadingImg) != -1 || $img.attr("src").indexOf(bgLoadingImg2) != -1) {
                var imgSRC = $img.attr("original") != null && $img.attr("original") != undefined ? $img.attr("original") : $img.attr("src");
                if (imgSRC.indexOf("images.indiaplaza") != -1) imgSRC = imgSRC.replace("images.", "img" + Math.floor(Math.random() * (5 - 1) + 1) + ".");
                $img.attr('src', imgSRC);
            }
        }
    }
}
function lazyImage(divpos, lazyImages) {
    for (var i = 0; i < lazyImages.length; i++) {
        if (divpos === "leftDiv" || divpos === "storeLeftDiv" || divpos === "storeRightDiv") lazyImageLoaderDefault($(lazyImages[i]));
        else if (divpos === "rightDiv") lazyImageLoader($(lazyImages[i]), 150);
    };
}
function ShowAllList(elm) { if ($("#" + elm).length > 0) { $("#" + elm).toggleClass('shownAll'); $('html,body').animate({ scrollTop: $("#" + elm).offset().top }, 'fast'); } }
