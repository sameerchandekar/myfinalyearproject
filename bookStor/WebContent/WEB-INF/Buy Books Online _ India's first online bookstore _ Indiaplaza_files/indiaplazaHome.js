/* all store category navigation */

var Spry;
if (!Spry) {
    Spry = {}
} if (!Spry.Widget) {
    Spry.Widget = {}
} Spry.Widget.MenuBar = function (A, B) {
    this.init(A, B)
};
Spry.Widget.MenuBar.prototype.init = function (E, G) {
    this.element = this.getElement(E);
    this.currMenu = null;
    var D = (typeof document.all != "undefined" && typeof window.opera == "undefined" && navigator.vendor != "KDE");
    if (typeof document.getElementById == "undefined" || (navigator.vendor == "indiaplaza" && typeof window.XMLHttpRequest == "undefined") || (D && typeof document.uniqueID == "undefined")) {
        return
    } if (G) {
        for (var B in G) {
            var F = new Image;
            F.src = G[B]
        } 
    } if (this.element) {
        this.currMenu = this.element;
        var A = this.element.getElementsByTagName("li");
        for (var C = 0;
C < A.length;
C++) {
            this.initialize(A[C], E, D);
            if (D) {
                this.addClassName(A[C], "MenuBarItemIE");
                A[C].style.position = "static"
            } 
        } if (D) {
            if (this.hasClassName(this.element, "MenuBarVertical")) {
                this.element.style.position = "relative"
            } var H = this.element.getElementsByTagName("a");
            for (var C = 0;
C < H.length;
C++) {
                H[C].style.position = "relative"
            } 
        } 
    } 
};
Spry.Widget.MenuBar.prototype.getElement = function (A) {
    if (A && typeof A == "string") {
        return document.getElementById(A)
    } return A
};
Spry.Widget.MenuBar.prototype.hasClassName = function (B, A) {
    if (!B || !A || !B.className || B.className.search(new RegExp("\\b" + A + "\\b")) == -1) {
        return false
    } return true
};
Spry.Widget.MenuBar.prototype.addClassName = function (B, A) {
    if (!B || !A || this.hasClassName(B, A)) {
        return
    } B.className += (B.className ? " " : "") + A
};
Spry.Widget.MenuBar.prototype.removeClassName = function (B, A) {
    if (!B || !A || !this.hasClassName(B, A)) {
        return
    } B.className = B.className.replace(new RegExp("\\s*\\b" + A + "\\b", "g"), "")
};
Spry.Widget.MenuBar.prototype.addEventListener = function (C, B, D, A) {
    try {
        if (C.addEventListener) {
            C.addEventListener(B, D, A)
        } else {
            if (C.attachEvent) {
                C.attachEvent("on" + B, D)
            } 
        } 
    } catch (E) { } 
};
Spry.Widget.MenuBar.prototype.createIframeLayer = function (B) {
    var A = document.createElement("iframe");
    A.tabIndex = "-1";
    A.src = "javascript:false;";
    B.parentNode.appendChild(A);
    A.style.left = B.offsetLeft + "px";
    A.style.top = B.offsetTop + "px";
    A.style.width = B.offsetWidth + "px";
    A.style.height = B.offsetHeight + "px"
};
Spry.Widget.MenuBar.prototype.removeIframeLayer = function (B) {
    var A = B.parentNode.getElementsByTagName("iframe");
    while (A.length > 0) {
        A[0].parentNode.removeChild(A[0])
    } 
};
Spry.Widget.MenuBar.prototype.clearMenus = function (A) {
    var C = A.getElementsByTagName("ul");
    for (var B = 0;
B < C.length;
B++) {
        this.hideSubmenu(C[B])
    } this.removeClassName(this.element, "MenuBarActive")
};
Spry.Widget.MenuBar.prototype.bubbledTextEvent = function () {
    return (navigator.vendor == "indiaplaza" && (event.target == event.relatedTarget.parentNode || (event.eventPhase == 3 && event.target.parentNode == event.relatedTarget)))
};
Spry.Widget.MenuBar.prototype.showSubmenu = function (A) {
    if (this.currMenu) {
        this.clearMenus(this.currMenu);
        this.currMenu = null
    } if (A) {
        this.addClassName(A, "MenuBarSubmenuVisible");
        if (typeof document.all != "undefined" && typeof window.opera == "undefined" && navigator.vendor != "KDE") {
            if (!this.hasClassName(this.element, "MenuBarHorizontal") || A.parentNode.parentNode != this.element) {
                A.style.top = A.parentNode.offsetTop + "px"
            } 
        } if (typeof document.uniqueID != "undefined") {
            this.createIframeLayer(A)
        } 
    } this.addClassName(this.element, "MenuBarActive")
};
Spry.Widget.MenuBar.prototype.hideSubmenu = function (A) {
    if (A) {
        this.removeClassName(A, "MenuBarSubmenuVisible");
        if (typeof document.all != "undefined" && typeof window.opera == "undefined" && navigator.vendor != "KDE") {
            A.style.top = "";
            A.style.left = ""
        } this.removeIframeLayer(A)
    } 
};
Spry.Widget.MenuBar.prototype.initialize = function (G, F, H) {
    var E, C;
    var I = G.getElementsByTagName("a")[0];
    var D = G.getElementsByTagName("ul");
    var B = (D.length > 0 ? D[0] : null);
    var A = false;
    if (B) {
        this.addClassName(I, "MenuBarItemSubmenu");
        A = true
    } if (!H) {
        G.contains = function (K) {
            if (K == null) {
                return false
            } if (K == this) {
                return true
            } else {
                return this.contains(K.parentNode)
            } 
        }
    } var J = this;
    this.addEventListener(G, "mouseover", function (K) {
        if (J.bubbledTextEvent()) {
            return
        } clearTimeout(C);
        if (J.currMenu == G) {
            J.currMenu = null
        } J.addClassName(I, A ? "MenuBarItemSubmenuHover" : "MenuBarItemHover");
        if (B && !J.hasClassName(B, "MenuBarSubmenuVisible")) {
            E = window.setTimeout(function () {
                J.showSubmenu(B)
            }, 25)
        } 
    }, false);
    this.addEventListener(G, "mouseout", function (L) {
        if (J.bubbledTextEvent()) {
            return
        } var K = (typeof L.relatedTarget != "undefined" ? L.relatedTarget : L.toElement);
        if (!G.contains(K)) {
            clearTimeout(E);
            J.currMenu = G;
            J.removeClassName(I, A ? "MenuBarItemSubmenuHover" : "MenuBarItemHover");
            if (B) {
                C = window.setTimeout(function () {
                    J.hideSubmenu(B)
                }, 10)
            } 
        } 
    }, false)
};

function bindMenu(menuId) {
    var MenuBar1 = new Spry.Widget.MenuBar(menuId);
    $("ul.MenuBarVertical li:first").css("background", "none");
}
