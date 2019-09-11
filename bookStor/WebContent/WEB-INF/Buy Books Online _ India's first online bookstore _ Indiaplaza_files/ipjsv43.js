var securedURL = document.location.hostname == "www.indiaplaza.com" ? "https://" + document.location.hostname : "http://" + document.location.hostname + ":" + document.location.port;
var qsParm = new Array(); var query = window.location.search.substring(1); var parms = query.split('&'); for (var i = 0; i < parms.length; i++) { var pos = parms[i].indexOf('='); if (pos > 0) { var key = parms[i].substring(0, pos); var val = parms[i].substring(pos + 1); qsParm[key] = val; } }

String.prototype.trim = function () { return this.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); };
function trimString(str) { return str.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); }
function showError(errMsg, id) { if ($("#" + id).length > 0) { $("#" + id).show(); $("#" + id).html(errMsg); } }
function hideMask() { if (document.getElementById("mask") != null && document.getElementById("mask") != undefined) { document.getElementById("mask").style.display = "none"; document.getElementById("mask").setAttribute("style", "display:none"); } }
function showMask() { if (document.getElementById("mask") != null && document.getElementById("mask") != undefined) { document.getElementById("mask").style.display = "block"; document.getElementById("mask").setAttribute("style", "display:block"); } }
//function getSearchStoreValue() { return $("#selectAllStoresContainer").find("span.value").find("span").html(); }
function getSearchStoreValue() { if ($("#selectAllStoresContainer").find("span.value").find("span").html().indexOf("span") == -1) { return $("#selectAllStoresContainer").find("span.value").find("span").html(); } else { return "all"; } }
function ReadCookie(cookieName) {
    var theCookie = " " + document.cookie;
    var ind = theCookie.indexOf(" " + cookieName + "=");
    if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
    if (ind == -1 || cookieName == "") return "";
    var ind1 = theCookie.indexOf(";", ind + 1);
    if (ind1 == -1) ind1 = theCookie.length;
    return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
}
$(function () {
    if (ReadCookie("AxisWebsite") == "Axis") {
        $("#divlogo").attr("class", "axislogo");
        $("#fbloginliMaster").hide();
        $("#fbloginbtn").hide();
    }
});
$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "/buildmasterpagecontent.aspx?Globalmenu=true",
        context: document.body,
        cache: false,
        success: function (data) {
            if (data != null) {
                var topmenuResult = typeof jQuery == "function" ? jQuery.parseJSON(data) : $.parseJSON(data);
                if (topmenuResult != null && topmenuResult != undefined) {
                    $("#tdtopmenu").html(topmenuResult["topMenu"]);
                    $("#lblWelcome").html(topmenuResult["userName"]);
                    if (topmenuResult["faceBook"] === "show") {
                        $("#fbloginliMaster").css({ display: "block" });
                    }
                }
            }
        }
    });
    cartcount();
});
/* init.js */
$(document).ready(function () {
    $('.formAutoFill').each(function () {
        $(this).find('input[type="text"],textarea').focus(function () {
            if ($(this).val() == $(this).attr('title')) $(this).val('');
            $(this).css({ fontWeight: 'normal' });
        });
        $(this).find('input:text,textarea').blur(function () {
            if (!$(this).val()) $(this).val($(this).attr('title'));
            if ($(this).val() == $(this).attr('title')) {
                if ($(this).parent().parent().find('label[for="' + $(this).attr('id') + '"] strong').length) $(this).css({ fontWeight: 'bold' });
            }
        });
        $(this).find('input[type="text"],textarea').each(function () {
            var myLabel = $(this).parent().parent().find('label[for="' + $(this).attr('id') + '"]:not(.formHide)');
            if (!myLabel.find('input[type="text"]').length) myLabel.addClass('formLabelHide');
            $(this).val($(this).attr('title'));
            if (myLabel.find('strong').length) $(this).css({ fontWeight: 'bold' });
        });
    });
    $('#selectAllStoresContainer').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('opened');
        $(this).find('ul').slideToggle(200);
    });
    $('body').click(function (e) {
        if ($('#selectAllStoresContainer ul').is(':visible') == true) {
            $('#selectAllStoresContainer').toggleClass('opened');
            $('#selectAllStoresContainer ul').slideUp(200);
        }
        //        if ($('#authenticatoinTab').is(':visible') == true && $("#hdloginclicked").val()=="true" {
        //            $('#authenticatoinTab').slideUp(200);
        //        }
        if ($('#ContentPlaceHolder1_DeliveryPopUpDiv').is(':visible') == true && e.target.className != "deliveryPopupText" && e.target.className != "deliveryPopHead") {
            $('#ContentPlaceHolder1_DeliveryPopUpDiv').hide();
        }
        if ($('#ContentPlaceHolder1_BrowseControl_DeliveryPopUpDiv').is(':visible') == true && e.target.className != "deliveryPopupText" && e.target.className != "deliveryPopHead") {
            $('#ContentPlaceHolder1_BrowseControl_DeliveryPopUpDiv').hide();
        }
        if ($('#ContentPlaceHolder1_FinalPage_DeliveryPopUpDiv').is(':visible') == true && e.target.className != "deliveryPopupText" && e.target.className != "deliveryPopHead") {
            $('#ContentPlaceHolder1_FinalPage_DeliveryPopUpDiv').hide();
        }
        if ($('#ContentPlaceHolder1_outStockDiv').is(':visible') == true && e.target.className != "ImagPopUp2 outStockPopStyle" && e.target.className != "outStockDefault" && e.target.className != "outStockerrmsg" && e.target.className != "txtOutStockemailid" && e.target.className != "butOutStocksubmit" && e.target.className != "outStockHead") {
            $('#ContentPlaceHolder1_outStockDiv').hide();
        }
        if ($('#ContentPlaceHolder1_FinalPage_outStockDiv').is(':visible') == true && e.target.className != "ImagPopUp2 outStockPopStyle" && e.target.className != "outStockDefault" && e.target.className != "outStockerrmsg" && e.target.className != "txtOutStockemailid" && e.target.className != "butOutStocksubmit" && e.target.className != "outStockHead") {
            $('#ContentPlaceHolder1_FinalPage_outStockDiv').hide();
        }
        if ($('#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_divShippablePopup').is(':visible') == true && e.target.className != "ImagPopUp2 notShippableStyle" && e.target.className != "NotShoppableContent") {
            $('#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_divShippablePopup').hide();
        }
    });
    $('#authenticatoinTab').click(function (e) {
        e.stopPropagation();
    });
    $('#selectAllStoresContainer li').hover(function () {
        if ($.browser.msie) { $(this).toggleClass('opened'); }
    }, function () {
        if ($.browser.msie) { $(this).toggleClass('opened'); }
    });
    $('#selectAllStoresContainer li').click(function (e) {
        $('#selectAllStoresContainer span').html($(this).html());
        $(this).find('ul').slideToggle(200);
    });
    //$("#authenticatoinTab").tabs();
});

//if ($("#hdnVizurysrc").length) { $("#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_vizuryfinalsec").find("iframe").attr("src", $("#hdnVizurysrc").val()); $("#hdnVizurysrc").val(""); } 
//if ($("#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_vizuryfinalsec").length) { if ($("#hdnVizurysrc").length) $("#hdnVizurysrc").val($("#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_vizuryfinalsec").find("iframe").attr("src")); $("#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_vizuryfinalsec").find("iframe").attr("src", ""); } 

/* add to cart pop up */
$(document).ready(function () { $("a#my_cart_menu").click(function (event) { $("div#divaddtocart").removeClass("shoppingCart"); $("div#divaddtocart").addClass("maskaddtocartpopup"); $("div#divCartitems").addClass("innerdivpopup"); $.ajax({ beforeSend: function () { showMask(); }, type: "POST", url: "/BuildShopCart.aspx?GetCart=true", context: document.body, dataType: "text", cache: false, success: function (data) { $("div#divCartitems").html(data); hideMask(); } }); document.getElementById('divaddtocart').style['display'] = 'block'; cartcount(); return false; }); }); function closecart() { $("#divaddtocart").hide(); if ($("#vizurycartsec").find("iframe").length) $("#vizurycartsec").find("iframe").attr("src", ""); return false; } function removecart(linkbut) { $(document).ready(function () { var sku = document.getElementById("Removesku" + linkbut.id.replace("anchor", "")).value; if ($("#hdnstorename" + linkbut.id.replace("anchor", "")) && $("#hdnitemname" + linkbut.id.replace("anchor", ""))) { _gaq.push(['_trackEvent', $("#hdnstorename" + linkbut.id.replace("anchor", "")).val(), 'Removed from cart', $("#hdnitemname" + linkbut.id.replace("anchor", "")).val()]); } $.ajax({ beforeSend: function () { $("#divremovecart" + linkbut.id.replace("anchor", "")).show(); }, type: "POST", url: "/BuildShopCart.aspx?Remove=" + sku, context: document.body, dataType: "text", cache: false, success: function (data) { $("div#divCartitems").html(data); $("#divremovecart" + linkbut.id.replace("anchor", "")).hide(); } }); }); cartcount(); return false; } function updatecart(linkbut) { if ($("#" + linkbut.id).html() != "Change Qty") { var regNum = /^[0-9]+$/; $(document).ready(function () { var sku = $("#Removesku" + linkbut.id.replace("updateanchor", "")).val(); var qty = $("#txtqty" + linkbut.id.replace("updateanchor", "")).val(); if (!regNum.test(qty)) { alert("Please enter a valid quantity"); $("#" + "txtqty" + linkbut.id.replace("updateanchor", "")).focus(); cartcount(); return false; } else if (parseInt(qty) <= 0) { alert("Please enter a valid quantity"); $("#" + "txtqty" + linkbut.id.replace("updateanchor", "")).focus(); cartcount(); return false; } $.ajax({ beforeSend: function () { $("#divpopupqtyupdateprogress" + linkbut.id.replace("updateanchor", "")).show(); }, type: "POST", url: "/BuildShopCart.aspx?Update=" + sku + "," + qty, context: document.body, dataType: "text", cache: false, success: function (data) { $("div#divCartitems").html(''); $("div#divCartitems").html(data); $("#divpopupqtyupdateprogress" + linkbut.id.replace("updateanchor", "")).hide(); cartcount(); } }); }); } else { $("#" + linkbut.id).html(''); $("#" + linkbut.id).html('Save'); $("#" + "txtqty" + linkbut.id.replace("updateanchor", "")).show(); $("#" + "txtqty" + linkbut.id.replace("updateanchor", "")).val($("#lblqty" + linkbut.id.replace("updateanchor", "")).html()); $("#lblqty" + linkbut.id.replace("updateanchor", "")).hide(); $("#" + "txtqty" + linkbut.id.replace("updateanchor", "")).focus(); } return false; }
function cartcount() { $(document).ready(function () { $.ajax({ type: "POST", url: "/BuildShopCart.aspx?CartCount=true", context: document.body, dataType: "text", cache: false, success: function (data) { var totCartItem = !isNaN(data.match(/(\d+)/g)) && data.match(/(\d+)/g) != null ? data.match(/(\d+)/g) : 0; if (totCartItem > 0) { $("a#my_cart_menu").html("<b>My Cart (" + totCartItem + ") / <span style='color:#FF8000;font-size:12px;'>Start Checkout</span><span style='color:#FF8000;font-size:15px;'>&nbsp;&rsaquo;&rsaquo;</span></b>"); } else { $("a#my_cart_menu").html("<b>My Cart (" + totCartItem + ")</b>"); } } }); }); }
function showcart() { $(document).ready(function () { $.ajax({ beforeSend: function () { showMask(); }, type: "POST", url: "/BuildShopCart.aspx?showCart=true", context: document.body, dataType: "text", cache: false, success: function (data) { $("div#divCartitems").html(data); hideMask(); cartcount(); $("div#divaddtocart").removeClass("shoppingCart"); $("div#divaddtocart").addClass("maskaddtocartpopup"); $("div#divCartitems").addClass("innerdivpopup"); $("div#divaddtocart").show(); } }); }); } function PopUpRedirect() { var url = qsParm['refurl']; if (url != "undefined" && url != "") window.location = unescape(url); else { window.location = "/"; } return false; }
function lnkSigninclick() { if ($("#lnkSignin").text().toLowerCase() != "logout") { window.location.href = securedURL + "/sublogin.aspx?ReturnUrl=" + document.location.pathname + document.location.search; } else { window.location.href = "/signout.aspx"; } return false; }
function myaccountclick() { window.location.href = "/myaccount/myAccount.aspx?Pending=1"; return false; }
function lnkRegisterclick() { window.location.href = securedURL + "/sublogin.aspx?Reg=1&ReturnUrl=/"; return false; }
function ShowLogin() { if ($("#hdnExpired").val() == "true") { signinbut(); $('#authenticatoinTab').slideDown("fast"); if ($("#inpuname").length && $("#inpuname").val().length == 0) $("#inpuname").focus(); else if ($("#inppassword").length) $("#inppassword").focus(); return false; } else { $("#fragment-1").show(); $("#fragment-2").hide(); } }
function logintoggle() { $("#divsignup").hide("slow"); $("#divlogin").show("slow"); return false; }
function signupbut() { $("#fragment-1").hide(); $("#fragment-2").show(); $("#txtname").val(''); $("#txtmobileno").val(''); $("#txtemailid").val(''); $("#txtpassword").val(''); $("#txtconformpassword").val(''); $("#signuperrormsg").html(''); $("#signuperrormsg").hide(); }
function getusername(loginid) { $.ajax({ beforeSend: function () { showMask(); }, type: "POST", url: "/ValidateUser.aspx", data: { GetUsername: encodeURIComponent(loginid) }, context: document.body, success: function (data) { hideMask(); $("#litWelcome").html("<span style='text-transform:capitalize;'>" + data + "</span>"); $("#lnkRegister").hide(); $("#myaccount").show(); } }); }
function forgotPwd() { $("#fgtpwderrmsg").attr('class', 'errMsg').hide(); $("#txtEmail").val(''); if ($('#forgotpwrd').css('display') == 'none') { $('#forgotpwrd').show(); $("#txtEmail").focus(); _gaq.push(['_trackEvent', 'Forgot Password', 'Forgot Password Clicked']); } else { $('#forgotpwrd').hide(); } return false; }
function signinbut() { $("#fragment-1").show(); $("#fragment-2").hide(); if ($("#hdnExpired").val() != "true") $("#inpuname").val(''); $("#inppassword").val(''); $("#signinerrormsg").html('').hide(); }
function ShowRegPromo() { if ($('#authenticatoinTab').css("display") == "none") { if ($("#hdnUserType").val() != "true") { if ($("#lnkSignin").text().toLowerCase() == "login") { $("#regPromo").show(); $("#regPromo").slideDown("slow"); $("#regPromo").attr("style", "left:590px; top: 25px; position: absolute; width: 210px;height:auto;back;margin:4px;"); } } } }
function ShowRegister() { $("a#lnkRegister").click(); return false; }
function newregbut() {
    var erroMsg = "";
    var filter = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,4})+)$/;
    var regmob = /^[0-9]+$/;
    var regtxt = /^[a-zA-Z\s]+$/;
    $("#signuperrormsg").html('').hide();
    if (trimString($("#txtname").val()).length == 0) { erroMsg = "Please enter name."; showError(erroMsg, "signuperrormsg"); $("#txtname").focus(); return false; }
    else if ($("#txtname").val().length > 0) { if (!regtxt.test($("#txtname").val())) { erroMsg = "Please enter a valid name."; showError(erroMsg, "signuperrormsg"); $("#txtname").focus(); return false; } }
    if (erroMsg.length == 0 && trimString($("#txtmobileno").val()).length == 0) { erroMsg += "Please enter Mobileno"; showError(erroMsg, "signuperrormsg"); $("#txtmobileno").focus(); return false; }
    else if (erroMsg.length == 0 && $("#txtmobileno").val().length < 10) { erroMsg += "Please enter 10 digit Mobileno"; showError(erroMsg, "signuperrormsg"); $("#txtmobileno").focus(); return false; }
    else if (erroMsg.length == 0 && $("#txtmobileno").val().length > 0) { if (!regmob.test($("#txtmobileno").val())) { erroMsg += "Please enter valid Mobileno"; showError(erroMsg, "signuperrormsg"); $("#txtmobileno").focus(); return false; } }
    if (erroMsg.length == 0 && trimString($("#txtemailid").val()).length == 0) { erroMsg += "Please enter a valid email id."; showError(erroMsg, "signuperrormsg"); $("#txtemailid").focus(); return false; }
    else if (erroMsg.length == 0 && $("#txtemailid").val().length > 0) { if (!filter.test($("#txtemailid").val())) { erroMsg += "Please enter a valid email id."; showError(erroMsg, "signuperrormsg"); $("#txtemailid").focus(); return false; } }
    if (erroMsg.length == 0 && trimString($("#txtpassword").val()).length == 0 && trimString($("#txtconformpassword").val()).length == 0) { erroMsg += "Please enter a password."; showError(erroMsg, "signuperrormsg"); $("#txtpassword").focus(); return false; }
    else if (erroMsg.length == 0 && trimString($("#txtpassword").val()).length == 0 || trimString($("#txtconformpassword").val()).length == 0) { erroMsg += "Please enter the same password in both password fields."; var elmid = ''; if (trimString($("#txtpassword").val()).length == 0) elmid = "#txtpassword"; else if (trimString($("#txtconformpassword").val()).length == 0) elmid = "#txtconformpassword"; if (elmid.length > 0) { showError(erroMsg, "signuperrormsg"); $(elmid).focus(); return false; } }
    else if (erroMsg.length == 0 && $("#txtpassword").val() != $("#txtconformpassword").val()) { erroMsg += "Please enter the same password in both password fields."; showError(erroMsg, "signuperrormsg"); $("#txtpassword").val(''); $("#txtconformpassword").val(''); $("#txtpassword").focus(); return false; }
    else {
        $.ajax({
            beforeSend: function () { showMask(); },
            type: "POST",
            url: "/ValidateUser.aspx",
            data: { Register: "true", name: encodeURIComponent($("#txtname").val()), mobile: encodeURIComponent($("#txtmobileno").val()), email: encodeURIComponent($("#txtemailid").val()), pwd: encodeURIComponent($("#txtpassword").val()) },
            context: document.body,
            success: function (data) {
                hideMask(); if (data != "valid") {
                    $("#signuperrormsg").show(); $("#signuperrormsg").html(data);
                    _gaq.push(['_trackEvent', 'Error', 'Popup Sign Up', $("#signuperrormsg").html()]);
                }
                else if (data == "fail") {
                    $("#signuperrormsg").show(); $("#signuperrormsg").html("Please try again.");
                    _gaq.push(['_trackEvent', 'Error', 'Popup Sign Up', $("#signuperrormsg").html()]);
                }
                else {
                    getusername($("#txtemailid").val());
                    $("#lnkSignin").html("Logout");
                    $("#lnkSignin").attr("href", "/signout.aspx");
                    $('#authenticatoinTab').slideUp("fast");
                    _gaq.push(['_trackEvent', 'Sing-up', 'Registration done successfully', 'Registered']);
                    _gaq.push(["_setCustomVar", 1, "ipcode", getCookie("UserId"), 1]);
                }
            }
        });
    } return false;
}
function Sendmailbut() {
    var erroMsg = "";
    var filter = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,4})+)$/;
    $("#fgtpwderrmsg").html('').hide();
    if (trimString($("#txtEmail").val()).length == 0) {
        showError("Please enter a valid email id.", "fgtpwderrmsg"); $("#txtEmail").focus();
    }
    else {
        if (!filter.test($("#txtEmail").val())) {
            showError("Please enter a valid email id.", "fgtpwderrmsg"); $("#txtEmail").focus();
        }
        else {
            var id = '"' + $("#txtEmail").val() + '"';
            $.ajax({
                beforeSend: function () { showMask(); },
                type: "POST", url: "/login.aspx/forgotsubmit",
                data: "{ 'id' : '" + encodeURIComponent(id) + "'}",
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    hideMask();
                    if (result.d != "valid") {
                        $("#fgtpwderrmsg").removeClass('sendMail').addClass('errMsg');
                        showError("No account found with that email address. Please register.", elmid);
                        $("#txtEmail").focus();
                        _gaq.push(['_trackEvent', 'Error', 'Forgot Password On Popup Sign In', $("#fgtpwderrmsg").html() + "/" + $("#txtEmail").val()]);
                    }
                    else if (result.d == "fail") {
                        $("#fgtpwderrmsg").removeClass('sendMail').addClass('errMsg');
                        showError("Please try again.", elmid);
                        $("#txtEmail").focus();
                        _gaq.push(['_trackEvent', 'Error', 'Forgot Password On Popup Sign In', $("#fgtpwderrmsg").html() + "/" + $("#txtEmail").val()]);
                    }
                    else if (result.d == "valid") {
                        $("#fgtpwderrmsg").removeClass('errMsg').addClass('sendMail');
                        $("#fgtpwderrmsg").html('Your password has been mailed to your email address registered with us.').show();
                        $("#forgotpwrd").hide();
                        _gaq.push(['_trackEvent', 'Forgot Password', 'Email Submitted on Popup Sing In', $("#txtEmail").val()]);
                    }
                }
            });
        }
    }
    return false;
}
function loginbut() {
    var erroMsg = "";
    $("#signinerrormsg").html('').hide();
    if (trimString($("#inpuname").val()).length == 0) {
        erroMsg = "Please enter a valid email id or username.";
        $("#inpuname").focus();
    }
    if (erroMsg == "" && trimString($("#inppassword").val()).length == 0) {
        erroMsg += "Please enter your password.";
        $("#inppassword").focus();
    }
    if (erroMsg != "") {
        showError(erroMsg, "signinerrormsg");
    }
    else {
        $.ajax({
            beforeSend: function () { showMask(); },
            type: "POST",
            url: "/ValidateUser.aspx",
            data: { ExtUser: "true", uid: encodeURIComponent($("#inpuname").val()), pwd: encodeURIComponent($("#inppassword").val()) },
            context: document.body,
            success: function (data) {
                hideMask();
                if (data != "valid") {
                    $("#signinerrormsg").show(); $("#signinerrormsg").html("Email/Password is wrong. Please try again.");
                    _gaq.push(['_trackEvent', 'Error', 'Popup Sign In', $("#signinerrormsg").html() + "/" + $("#inpuname").val() + "/" + $("#inppassword").val()]);
                    $("#inpuname").val(''); $("#inppassword").val(''); $("#inpuname").focus();
                }
                else if (data == "fail") {
                    $("#signinerrormsg").show(); $("#signinerrormsg").html("Please try again.");
                    _gaq.push(['_trackEvent', 'Error', 'Popup Sign In', $("#signinerrormsg").html() + "/" + $("#inpuname").val() + "/" + $("#inppassword").val()]);
                    $("#inpuname").val(''); $("#inppassword").val(''); $("#inpuname").focus();
                }
                else if (data == "valid") {
                    cartcount(); getusername($("#inpuname").val()); $("#lnkRegister").hide(); $("#myaccount").show(); $("#lnkSignin").html("Logout"); $("#lnkSignin").attr("title", "Logout"); $("#lnkSignin").attr("href", "/signout.aspx"); $('#authenticatoinTab').hide();
                    _gaq.push(["_setCustomVar", 1, "ipcode", getCookie("UserId"), 1]);
                    gethomepagespotlights();
                    if ($("#hdnExpired").val() == "true") { $("#hdnExpired").val("false"); myaccountclick(); }
                }
            }
        });
    } return false;
}
/* cascadingmenu */
$(function () { var b = $("#seeAllStores"), a = b.find("a"); b.find("li").hover(function () { if ($.browser.msie && $.browser.version.substr(0, 1) < 7 && $(this).attr("class").indexOf("left") !== -1) { $(this).addClass("menuover-left") } else if (!$.browser.msie) { var v = $(this); if (v.parent('ul').parent('li').length == 1) { v.parent('ul').parent('li').addClass('current') } else { v.parent('ul').parent('div.col').parent('.containerMenu').parent('li').addClass('current'); } } $(this).addClass("menuover"); }, function () { $(this).removeClass("menuover"); if ($.browser.msie && $.browser.version.substr(0, 1) < 7 && $(this).attr("class").indexOf("left") !== -1) { $(this).removeClass("menuover-left") } else if (!$.browser.msie) { var y = $(this); if (y.parent('ul').parent('li').length == 1) { y.parent('ul').parent('li').removeClass('current') } else { y.parent('ul').parent('div.col').parent('.containerMenu').parent('li').removeClass('current'); } } }); a.blur(function () { $(this).parent("li").removeClass("menuover") }); a.focus(function () { $(this).parents("li").addClass("menuover") }); b.find("li:has(ul,div.containerMenu) a:last-child").blur(function () { $(this).parents("li").removeClass("menuover") }); b.find("li:has(ul,div.containerMenu)").addClass("hasChild"); }); $.fn.cascadingMenu = function (c) { c = $.extend({ iframe: false, animate: false, animateOut: false, animateSpeed: 500, easing: "linear" }, c); var a = $(this), b = a.find("> ul li.hasChild:not(:has(div.containerMenu)) ul, > ul li.hasChild:not(:has(div.containerMenu)) li.hasChild ul, li > div.containerMenu"); if ($.browser.msie && $.browser.version.substr(0, 1) < 7 && c.iframe === true) { b.each(function () { $(this).prepend("<iframe onfocus=\"if (window.event.shiftKey) {$(this).parents('li:first').find('a:first').focus();}else{$(this).next('li:first').find('a:first').focus();}\" style=\"position:absolute; top:0; left:0; z-index:-1; filter:mask(); width:" + this.offsetWidth + "px;height:" + this.clientHeight + 'px;" frameborder="0"></iframe>') }) } if (c.animate !== false) { b.each(function () { var d = $(this); d.parent("li").hover(function () { var g = "0px", f = "0px", e = "0px"; g = d.css("left"); f = d.css("top"); e = d.css("right"); d.css({ left: g, top: f, right: e }); if (d.parent("li").hasClass("left") === true || d.parents("li").hasClass("left") === true) { d.css({ left: "auto", right: "0" }) } if (c.animate === "fade") { d.stop(true, true).hide().fadeIn(c.animateSpeed, c.easing) } else { if (c.animate === "slide") { d.stop(true, true).hide().slideDown(c.animateSpeed, c.easing) } } }, function () { if (c.animateOut === "fade") { d.stop().fadeOut(150, function () { d.attr("style", "").show() }) } else { if (c.animateOut === "slide") { d.stop().slideUp(150, function () { d.attr("style", "").show() }) } else { d.stop(true, true).attr("style", "").show() } } }) }) } };
$(function () {
    $("#txtSearch").blur(function () {
        if ($(this).val().trim().length == 0) {
            $(this).val('Search for products').css({ "color": '#B2B2B2', "border-color": '#CCCCCC' });
        }
    }).focus(function () {
        if ($(this).val().trim().toLowerCase() == "search for products") {
            $(this).val('').css('color', '#333333');
        }
    })
    //    .mousedown(function () {
    //        if ($("#txtSearch").val().trim().toLowerCase() == "search for products") {
    //            $("#txtSearch").focus();
    //        }
    //    })
    .keyup(function (e) {
        if (e.keyCode == 13 || e.which == 13) {
            if (getSearchStoreValue().toLowerCase() == "all" && ($("#txtSearch").val().trim().length == 0 || $("#txtSearch").val().trim().toLowerCase() == "search for products")) {
                return false;
            }
            else if ($(this).val().trim().length != 0 && $(this).val().trim().toLowerCase() != "search for products") {
                //$("#btnSearch").click();
                DoSearch();
            }
            else if (getSearchStoreValue().toLowerCase() != "all") {
                //$("#btnSearch").click();
                DoSearch();
            }
        }
        else {
            if ((e.keyCode == 8 || e.which == 8) && $(this).val().trim().length == 0) {
                $(this).focus(); e.returnValue = false;
                if (e.preventDefault) e.preventDefault();
            }
            else if ($(this).val().trim().length > 2) checkKey(this, '', e);
        }
    });
    $("#txtSearch").trigger("blur");
});
function DoSearch() {
    var txt;
    var sn;
    ajax_options_hide();
    txt = $("#txtSearch").val();
    sn = getSearchStoreValue();

    if ($("#txtSearch").val().toLowerCase() == "search for products") {
        $("#txtSearch").focus();
        return false;
    }
    else {
        if (($("#txtSearch").val().toLowerCase() == "search for products" || $("#txtSearch").val().length == 0) && sn.toLowerCase() != "all") {
            window.location.href = "/" + sn.toLowerCase() + "/";
            return false;
        }
        if ($("#txtSearch").val().trim().length > 0 && getSearchStoreValue().trim().length > 0) {
            $("#txtSearch").css('border-color', '');
            window.location.href = "/searchproductsall.aspx?sn=" + sn + "&q=" + txt; return false;
        }
        else
            return false;
    }
}
function ddlStoresChange() { if ($("#txtSearch").val().toLowerCase() == "search for products" || $("#txtSearch").val().trim().length == 0) { $("#txtSearch").focus(); return; } } function Do_Compare() { var elem = document.getElementById('Viewcombtn'); if (elem.textContent) elem.innerHTML = elem.textContent; else elem.innerHTML = elem.innerText; var comparedetails = elem.innerHTML; var count = comparedetails.match(/[\d\.]+/g); if (count.length > 0 && !isNaN(count[0])) { if (count[0] == 0) { alert('Please select atleast two products!'); return false; } else if (count[0] == 1) { alert('Please select atleast two products!'); return false; } else if (count[0] > 5) { alert('Please select <= 5 product!'); return false; } else { if (document.getElementById('hdnCompare').value != '' && document.getElementById('hdnStorename').value != '') { var type = document.getElementById('hdnCompare').value.split(':'); if (type.length > 1) { var refurl; if (document.URL.indexOf(".htm") != -1) refurl = encodeURIComponent(document.URL.substring(document.URL.lastIndexOf("/"), document.URL.length).replace(".htm", "$")); else refurl = encodeURIComponent("/" + document.getElementById('hdnStorename').value.toLowerCase() + "/"); var requrl = "/" + document.getElementById('hdnStorename').value + "/compare.aspx?storename=" + document.getElementById('hdnStorename').value + "&Type=" + type[0] + "&Value=" + type[1] + "&refurl=" + refurl; window.location.href = requrl; return false; } } } } return false; } function FinalPageActiveTabChanged(sender, e) { var lblDescription = document.getElementById('ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab1_lblDescription'); var lblReviews = document.getElementById('ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab2_lblReviews'); var lblSpcification = document.getElementById('ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab3_lblSpcification'); var lblFlashes = document.getElementById('ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab4_lblFlashes'); var lblAccessories = document.getElementById('ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab5_lblAccessories'); var lblSoftware = document.getElementById('ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab6_lblSoftware'); var lblContentBax = document.getElementById('ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab7_lblContentBax'); var lblFeatures = document.getElementById('ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab8_lblFeatures'); var lblcrossseller = document.getElementById('ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab9_lblcrossseller'); var lblVideo = document.getElementById('ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab10_lblVideo'); var id = sender.get_activeTab().get_id(); if (lblDescription != null) lblDescription.className = 'tabBg'; if (lblReviews != null) lblReviews.className = 'tabBg'; if (lblSpcification != null) lblSpcification.className = 'tabBg'; if (lblFlashes != null) lblFlashes.className = 'tabBg'; if (lblAccessories != null) lblAccessories.className = 'tabBg'; if (lblSoftware != null) lblSoftware.className = 'tabBg'; if (lblContentBax != null) lblContentBax.className = 'tabBg'; if (lblFeatures != null) lblFeatures.className = 'tabBg'; if (lblcrossseller != null) lblcrossseller.className = 'tabBg'; if (lblVideo != null) lblVideo.className = 'tabBg'; if (id == "ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab1") lblDescription.className = 'tabBgActive'; else if (id == "ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab2") lblReviews.className = 'tabBgActive'; else if (id == "ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab3") lblSpcification.className = 'tabBgActive'; else if (id == "ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab4") lblFlashes.className = 'tabBgActive'; else if (id == "ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab5") lblAccessories.className = 'tabBgActive'; else if (id == "ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab6") lblSoftware.className = 'tabBgActive'; else if (id == "ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab7") lblContentBax.className = 'tabBgActive'; else if (id == "ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab8") lblFeatures.className = 'tabBgActive'; else if (id == "ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab9") lblcrossseller.className = 'tabBgActive'; else if (id == "ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_TabContain_Tab10") lblVideo.className = 'tabBgActive'; } function ShowPopUp(sname, feature) { var url = "/StaticPageContainer1.aspx?htmlfilename=" + sname + "_Glossary#" + feature; window.open(url, "Glossary", "height=600,width=800,status=no,toolbar=no,menubar=no,maximize=no,resize=no,scrollbars=yes"); } function buyNowOutofStock(sname, SkuID) { if ($('.addCartBut')) { $('.addCartBut').removeClass('addCartBut').addClass('outofstockNonBooks'); if ($('div.outofstockNonBooks')) { $('div.outofstockNonBooks').html(''); $('div.outofstockNonBooks').html("<a style='cursor:pointer'></a>"); } } } function LargeVideoStore(obj) { var gd = document.getElementById('divVideo'); var img1 = gd.getElementsByTagName('img'); for (var i = 0; i < img1.length; i++) { img1[i].className = "videoBorderEmpty"; } obj.className = "videoBorder"; var LrgVideo = document.getElementById('iframeVideo'); LrgVideo.src = obj.alt; _gaq.push(['_trackEvent', 'Engagement Metrics', 'Videos watched', obj.title + '/' + $(obj).next('div').html()]); } function OutofStockInsertMailID() { var regMail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; var mailVal = $("#txtOutStockemailid").val(); var errMsg = ''; $("#outStockerrmsg").html(''); $("#outStockerrmsg").hide(); if ($("#txtOutStockemailid").val().length == 0) { errMsg = "Please enter a mail-id"; $("#txtOutStockemailid").focus(); } else if (!regMail.test(mailVal)) { errMsg = "Please enter a valid mail-id"; $("#txtOutStockemailid").focus(); } if (errMsg.length > 0) { $("#outStockerrmsg").show(); $("#outStockerrmsg").html(errMsg); $("#outStockerrmsg").css('display', 'block'); return false; } var skuid = $("#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_hdnSku").val(); var storeName = $("#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_hdnStorename").val(); var productName = $("#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_hdnProductName").val(); $.ajax({ beforeSend: function () { showMask(); }, url: "/Common/OutofStock.aspx?mail=" + mailVal + "&store=" + storeName + "&sku=" + skuid + "&name=" + productName, context: document.body, success: function (data) { if (data != "success") { $("#outStockerrmsg").show(); $("#outStockerrmsg").html(data); hideMask(); } else { hideMask(); $('#outStockerrmsg').show(); $("#outStockerrmsg").html('Thanks for your interest.We will notify you on <br/>' + mailVal + ' when this product is available again.'); $("#outStockerrmsg").css('color', 'green'); $("#outStockerrmsg").css('border', '1px solid green'); _gaq.push(['_trackEvent', 'Engagement Metrics', 'Out of Stock Submit Clicked', productName + '/' + getCookie("UserId")]); } } }); return false; } function OutofStockPopUpClose() { $('#ContentPlaceHolder1_outStockDiv').hide(); } $(function () { $('.outofstockNonBooks').click(function (e) { e.stopPropagation(); $('#ContentPlaceHolder1_outStockDiv').css('left', $(this).offset().left); $('#ContentPlaceHolder1_outStockDiv').css('top', $(this).offset().top - 140); $('#ContentPlaceHolder1_outStockDiv').show(); $("#txtOutStockemailid").attr("value", ""); $("#outStockerrmsg").css('display', 'none'); $('#ContentPlaceHolder1_outStockDiv p').addClass('outStockDefault'); var title = $("#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_hdnProductName").val(); _gaq.push(['_trackEvent', 'Engagement Metrics', 'Out of Stock Button Clicked', title + '/' + getCookie("UserId")]); }); }); $(function () { $(".addCartBut").hover(function () { $(".addCartBut").find('a').css('cursor', 'pointer'); $(".addCartBut").find('a').attr('title', 'Add to cart'); var dropdownlist = $(".smVariantBg").find("select"); var notSelectedFlag = false; var toolTipString = ''; for (var i = 0; i < dropdownlist.length; i++) { if (dropdownlist[i].selectedIndex == 0) { notSelectedFlag = true; if (toolTipString.length == 0) toolTipString = dropdownlist[i].value.replace('-- ', '').replace(' --', ''); else toolTipString += " and " + dropdownlist[i].value.replace('-- Select', '').replace(' --', ''); } } if (notSelectedFlag) { $(".addCartBut").find('a').css('cursor', 'not-allowed'); toolTipString = 'Before Adding to Cart, select ' + toolTipString + ' from above.'; $(".addCartBut").find('a').attr('title', toolTipString); } }); }); function OutofStockPopUpCloseBook() { $('#ContentPlaceHolder1_FinalPage_outStockDiv').hide(); } $(function () { $('.fdpBuyBut').click(function (e) { e.stopPropagation(); $('#ContentPlaceHolder1_FinalPage_outStockDiv').css('left', $(this).offset().left); $('#ContentPlaceHolder1_FinalPage_outStockDiv').css('top', $(this).offset().top - 130); $('#ContentPlaceHolder1_FinalPage_outStockDiv').show(); $("#txtOutStockemailid").attr("value", ""); $("#outStockerrmsg").css('display', 'none'); $('#ContentPlaceHolder1_FinalPage_outStockDiv p').addClass('outStockDefault'); var title = $('#ContentPlaceHolder1_FinalPage_hdnProductName').val(); _gaq.push(['_trackEvent', 'Engagement Metrics', 'Out of Stock Button Clicked', title + '/' + getCookie("UserId")]); }); }); function OutofStockInsertMailIDBook() { var regMail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; var mailVal = $("#txtOutStockemailid").val(); var errMsg = ''; $("#outStockerrmsg").html(''); $("#outStockerrmsg").hide(); if ($("#txtOutStockemailid").val().length == 0) { errMsg = "Please enter a mail-id"; $("#txtOutStockemailid").focus(); } else if (!regMail.test(mailVal)) { errMsg = "Please enter a valid mail-id"; $("#txtOutStockemailid").focus(); } if (errMsg.length > 0) { $("#outStockerrmsg").show(); $("#outStockerrmsg").html(errMsg); $("#outStockerrmsg").css('display', 'block'); return false; } var skuid = $("#ContentPlaceHolder1_FinalPage_hdnSku").val(); var storeName = $("#ContentPlaceHolder1_FinalPage_hdnStorename").val(); var productName = $("#ContentPlaceHolder1_FinalPage_hdnProductName").val(); $.ajax({ beforeSend: function () { showMask(); }, url: "/Common/OutofStock.aspx?mail=" + mailVal + "&store=" + storeName + "&sku=" + skuid + "&name=" + productName, context: document.body, success: function (data) { if (data != "success") { $("#outStockerrmsg").show(); $("#outStockerrmsg").html(data); hideMask(); } else { $('#outStockerrmsg').show(); $("#outStockerrmsg").html('Thanks for your interest.We will notify you on <br/>' + mailVal + ' when this product is available again.'); $("#outStockerrmsg").css('color', 'green'); $("#outStockerrmsg").css('border', '1px solid green'); _gaq.push(['_trackEvent', 'Engagement Metrics', 'Out of Stock Submit Clicked', productName + '/' + getCookie("UserId")]); } } }); return false; } function ValidateNewLetter() { var regMail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; $("#ContentPlaceHolder1_HomePageCtrl_divMessage").html(''); $("#ContentPlaceHolder1_HomePageCtrl_divMessage").hide(); if ($("#ContentPlaceHolder1_HomePageCtrl_txtNewsLetter1").val().trim().length == 0) { $("#ContentPlaceHolder1_HomePageCtrl_divMessage").html('Please enter a valid email-id'); $("#ContentPlaceHolder1_HomePageCtrl_divMessage").show(); return false; } else if (!regMail.test($("#ContentPlaceHolder1_HomePageCtrl_txtNewsLetter1").val())) { $("#ContentPlaceHolder1_HomePageCtrl_divMessage").html('Please enter a valid email-id'); $("#ContentPlaceHolder1_HomePageCtrl_divMessage").show(); return false; } return true; } $(function () { $('.notShippableCss').click(function (e) { e.stopPropagation(); $('#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_DivNotShippable').css('left', $(this).offset().left - 200); $('#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_DivNotShippable').css('top', $(this).offset().top); $('#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_divShippablePopup').show(); }); }); function NotShppableclose() { $('#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_divShippablePopup').hide(); }
/* ajax.js */
function sack(file) { this.xmlhttp = null; this.resetData = function () { this.method = "POST"; this.queryStringSeparator = "?"; this.argumentSeparator = "&"; this.URLString = ""; this.encodeURIString = true; this.execute = false; this.element = null; this.elementObj = null; this.requestFile = file; this.vars = new Object(); this.responseStatus = new Array(2); }; this.resetFunctions = function () { this.onLoading = function () { }; this.onLoaded = function () { }; this.onInteractive = function () { }; this.onCompletion = function () { }; this.onError = function () { }; this.onFail = function () { }; }; this.reset = function () { this.resetFunctions(); this.resetData(); }; this.createAJAX = function () { try { this.xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e1) { try { this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e2) { this.xmlhttp = null; } } if (!this.xmlhttp) { if (typeof XMLHttpRequest != "undefined") { this.xmlhttp = new XMLHttpRequest(); } else { this.failed = true; } } }; this.setVar = function (name, value) { this.vars[name] = Array(value, false); }; this.encVar = function (name, value, returnvars) { if (true == returnvars) { return Array(encodeURIComponent(name), encodeURIComponent(value)); } else { this.vars[encodeURIComponent(name)] = Array(encodeURIComponent(value), true); } }; this.processURLString = function (string, encode) { encoded = encodeURIComponent(this.argumentSeparator); regexp = new RegExp(this.argumentSeparator + "|" + encoded); varArray = string.split(regexp); for (i = 0; i < varArray.length; i++) { urlVars = varArray[i].split("="); if (true == encode) { this.encVar(urlVars[0], urlVars[1]); } else { this.setVar(urlVars[0], urlVars[1]); } } }; this.createURLString = function (urlstring) { if (this.encodeURIString && this.URLString.length) { this.processURLString(this.URLString, true); } if (urlstring) { if (this.URLString.length) { this.URLString += this.argumentSeparator + urlstring; } else { this.URLString = urlstring; } } this.setVar("rndval", new Date().getTime()); urlstringtemp = new Array(); for (key in this.vars) { if (false == this.vars[key][1] && true == this.encodeURIString) { encoded = this.encVar(key, this.vars[key][0], true); delete this.vars[key]; this.vars[encoded[0]] = Array(encoded[1], true); key = encoded[0]; } urlstringtemp[urlstringtemp.length] = key + "=" + this.vars[key][0]; } if (urlstring) { this.URLString += this.argumentSeparator + urlstringtemp.join(this.argumentSeparator); } else { this.URLString += urlstringtemp.join(this.argumentSeparator); } }; this.runResponse = function () { eval(this.response); }; this.runAJAX = function (urlstring) { if (this.failed) { this.onFail(); } else { this.createURLString(urlstring); if (this.element) { this.elementObj = document.getElementById(this.element); } if (this.xmlhttp) { var self = this; if (this.method == "GET") { totalurlstring = this.requestFile + this.queryStringSeparator + this.URLString; this.xmlhttp.open(this.method, totalurlstring, true); } else { this.xmlhttp.open(this.method, this.requestFile, true); try { this.xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") } catch (e) { } } this.xmlhttp.onreadystatechange = function () { switch (self.xmlhttp.readyState) { case 1: self.onLoading(); break; case 2: self.onLoaded(); break; case 3: self.onInteractive(); break; case 4: self.response = self.xmlhttp.responseText; self.responseXML = self.xmlhttp.responseXML; self.responseStatus[0] = self.xmlhttp.status; self.responseStatus[1] = self.xmlhttp.statusText; if (self.execute) { self.runResponse(); } if (self.elementObj) { elemNodeName = self.elementObj.nodeName; elemNodeName.toLowerCase(); if (elemNodeName == "input" || elemNodeName == "select" || elemNodeName == "option" || elemNodeName == "textarea") { self.elementObj.value = self.response; } else { self.elementObj.innerHTML = self.response; } } if (self.responseStatus[0] == "200") { self.onCompletion(); } else { self.onError(); } self.URLString = ""; break; } }; this.xmlhttp.send(this.URLString); } } }; this.reset(); this.createAJAX(); }
/* unbxd auto.js */
var searchVar; var searchCount; var loadImage = true; var oldFacetEl; var ajaxBox_offsetX = 0; var ajaxBox_offsetY = 0; var ajax_list_externalFile = '/AutoComplete.ashx'; var minimumLettersBeforeLookup = 1; var ajax_list_objects = new Array(); var ajax_list_cachedLists = new Array(); var ajax_list_cachedData = new Array(); var ajax_list_activeInput = false; var ajax_list_activeItem; var ajax_list_optionDivFirstItem = false; var ajax_list_currentLetters = new Array(); var ajax_optionDiv = false; var ajax_optionDiv_iframe = false; var dept_names = new Array(); dept_names = ["all", "mobiles", "cameras", "pc", "electronics", "appliances", "apparel", "babyproductsstore", "cakes", "cdroms", "chocolates", "condoms", "cosmetics", "flowers", "foods", "furnishings", "giftarticles", "handicrafts", "health", "jewellery", "movies", "music", "paintings", "perfumes", "spirituality", "stationery", "sweets", "toys", "watches", "books", "accessories"]; var deptSelected = ''; var categorySelected = ''; var deptHtml = ''; var dict = 'custom'; var prodType = ''; var autoSelField = 0; var depSelChange = false; var isPageOne = true; var ajax_list_MSIE = false; if (navigator.userAgent.indexOf('MSIE') >= 0 && navigator.userAgent.indexOf('Opera') < 0) ajax_list_MSIE = true; var currentListIndex = 0; $(document).ready(function () { $(document).keyup(function (e) { var searchtxt = trim($("#txtSearch").val()); if (window.event) { if (e.keyCode == 27) { ajax_options_hide(); } if (e.keyCode == 13) { if (searchtxt == null || searchtxt.length == 0) return; } } else if (e.which) { if (e.which == 27) { ajax_options_hide(); } if (e.which == 13) { if (searchtxt == null || searchtxt.length == 0) return; } } }); }); function ajax_getTopPos(inputObj) { var returnValue = inputObj.offsetTop; while ((inputObj = inputObj.offsetParent) != null) { returnValue += inputObj.offsetTop; } return returnValue; } function ajax_list_cancelEvent() { return false; } function ajax_getLeftPos(inputObj) { var returnValue = inputObj.offsetLeft; while ((inputObj = inputObj.offsetParent) != null) returnValue += inputObj.offsetLeft; return returnValue; } function ajax_option_setValue(e, inputObj) { var flag = false; if (!inputObj) inputObj = this; var tmpValue = inputObj.innerHTML; if (ajax_list_MSIE) tmpValue = inputObj.innerText; else tmpValue = inputObj.textContent; if (!tmpValue) tmpValue = inputObj.innerHTML; if ($('#selectAllStoresContainer span span').html().toLowerCase() == "all" && ajax_list_cachedLists[''][0][$("input#txtSearch").val().toLowerCase().replace(" ", "+")] != null && ajax_list_cachedLists[''][0][$("input#txtSearch").val().toLowerCase().replace(" ", "+")] != undefined) { var SelectedDiv = ajax_list_cachedLists[''][0][$("input#txtSearch").val().toLowerCase().replace(" ", "+")]; for (i = 0; i < SelectedDiv.length; i++) { var StoreName = SelectedDiv[i]; if (StoreName.length > 0 && StoreName[0][0] != undefined && StoreName[0][0].replace(/<.*?>/g, '').toLowerCase() == tmpValue.toLowerCase()) { $('#selectAllStoresContainer span span').html(StoreName[2].toLowerCase()); flag = true; break; } } } ajax_list_activeInput.value = tmpValue; if (document.getElementById(ajax_list_activeInput.name + '_hidden')) document.getElementById(ajax_list_activeInput.name + '_hidden').value = inputObj.id; if (flag) { $("#btnSearch").click(); } ajax_options_hide(); } function ajax_options_hide() { if (ajax_optionDiv) ajax_optionDiv.style.display = 'none'; if (ajax_optionDiv_iframe) ajax_optionDiv_iframe.style.display = 'none'; } var lastActiveItem; function ajax_options_rollOverActiveItem(item, fromKeyBoard) { if (lastActiveItem) lastActiveItem.className = 'optionDiv'; item.className = 'optionDivSelected'; ajax_list_activeItem = item; lastActiveItem = item; if (fromKeyBoard) { if (ajax_list_activeItem.offsetTop > ajax_optionDiv.offsetHeight) { ajax_optionDiv.scrollTop = ajax_list_activeItem.offsetTop - ajax_optionDiv.offsetHeight + ajax_list_activeItem.offsetHeight + 2; } if (ajax_list_activeItem.offsetTop < ajax_optionDiv.scrollTop) { ajax_optionDiv.scrollTop = 0; } } } function ajax_option_list_buildList(letters, paramToExternalFile) { ajax_optionDiv.style.paddingLeft = '2px'; ajax_optionDiv.innerHTML = ''; ajax_list_activeItem = false; var hdnDept; if (ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()].length <= 1) { ajax_options_hide(); return; } ajax_list_optionDivFirstItem = false; var optionsAdded = false; var catLength = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][0][0].length < 3 ? ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][0][0].length : 3; var brandLength = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][1][0].length < 3 ? ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][1][0].length : 3; var prodLength = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][2][0].length < 4 ? ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][2][0].length : 4; var catDif = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][0][0].length - 3; var brandDif = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][1][0].length - 3; var prodDif = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][2][0].length - 4; if (catDif < 0 && brandDif > 0) { if (-catDif > brandDif) { catDif += brandDif; brandDif = 0; brandLength = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][1][0].length; } else if (-catDif <= brandDif) { brandLength = brandLength - catDif; brandDif += catDif; catDif = 0; } } else if (brandDif < 0 && catDif > 0) { if (-brandDif > catDif) { brandDif += catDif; catDif = 0; catLength = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][0][0].length; } else if (-brandDif <= catDif) { catLength = catLength - brandDif; catDif += brandDif; brandDif = 0; } } if (catDif < 0 && prodDif > 0) { if (-catDif > prodDif) { catDif += prodDif; prodDif = 0; prodLength = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][2][0].length; } else if (-catDif <= prodDif) { prodLength = prodLength - catDif; prodDif += catDif; catDif = 0; } } else if (prodDif < 0 && catDif > 0) { if (-prodDif > catDif) { prodDif += catDif; catDif = 0; catLength = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][0][0].length; } else if (-prodDif <= catDif) { catLength = catLength - prodDif; catDif += prodDif; prodDif = 0; } } if (brandDif < 0 && prodDif > 0) { if (-brandDif > prodDif) { brandDif += prodDif; prodDif = 0; prodLength = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][2][0].length; } else if (-brandDif <= prodDif) { prodLength = prodLength - brandDif; brandDif = 0; prodDif += brandDif; } } else if (prodDif < 0 && brandDif > 0) { if (-prodDif > brandDif) { prodDif += brandDif; brandDif = 0; brandLength = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][1][0].length; } else if (-prodDif <= brandDif) { brandLength = brandLength - prodDif; prodDif = 0; brandDif += prodDif; } } if (ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][0][0].length > 0) { var catDiv = document.createElement('DIV'); catDiv.style.color = '#003366'; catDiv.style.fontSize = '11pt'; catDiv.style.fontWeight = '600'; ajax_optionDiv.appendChild(catDiv); catDiv.innerHTML = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][0][2]; for (var no = 0; no < catLength; no++) { if (ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][0][0][no].length == 0) continue; optionsAdded = true; var div = document.createElement('DIV'); var items = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][0][0][no].split(/###/gi); if (ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][0][0].length == 1 && ajax_list_activeInput.value == items[0]) { ajax_options_hide(); return; } hdnDept = document.createElement('INPUT'); hdnDept.setAttribute("type", "hidden"); hdnDept.setAttribute("name", catDiv.innerHTML + no); hdnDept.setAttribute("value", catDiv.innerHTML); div.innerHTML = items[items.length - 1]; div.id = items[0]; div.className = 'optionDiv'; div.onmouseover = function () { ajax_options_rollOverActiveItem(this, false) }; div.onclick = ajax_option_setValue; div.appendChild(hdnDept); if (!ajax_list_optionDivFirstItem) ajax_list_optionDivFirstItem = div; ajax_optionDiv.appendChild(div); } } if (ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][1][0].length > 0) { if (optionsAdded) { var lineDiv = document.createElement('DIV'); lineDiv.style.backgroundColor = '#000000'; ajax_optionDiv.appendChild(lineDiv); } var brandDiv = document.createElement('DIV'); brandDiv.style.color = '#003366'; brandDiv.style.fontSize = '11pt'; brandDiv.style.fontWeight = '600'; ajax_optionDiv.appendChild(brandDiv); brandDiv.innerHTML = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][1][2]; for (var no = 0; no < brandLength; no++) { if (ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][1][0][no].length == 0) continue; optionsAdded = true; var div = document.createElement('DIV'); var items = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][1][0][no].split(/###/gi); if (ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][1][0].length == 1 && ajax_list_activeInput.value == items[0]) { ajax_options_hide(); return; } hdnDept = document.createElement('INPUT'); hdnDept.setAttribute("type", "hidden"); hdnDept.setAttribute("name", brandDiv.innerHTML + no); hdnDept.setAttribute("value", brandDiv.innerHTML); div.innerHTML = items[items.length - 1]; div.id = items[0]; div.className = 'optionDiv'; div.onmouseover = function () { ajax_options_rollOverActiveItem(this, false) }; div.onclick = ajax_option_setValue; div.appendChild(hdnDept); if (!ajax_list_optionDivFirstItem) ajax_list_optionDivFirstItem = div; ajax_optionDiv.appendChild(div); } } if (ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][2][0].length > 0) { if (optionsAdded) { var lineDiv = document.createElement('DIV'); lineDiv.style.backgroundColor = '#000000'; ajax_optionDiv.appendChild(lineDiv); } var productDiv = document.createElement('DIV'); productDiv.style.color = '#003366'; productDiv.style.fontSize = '11pt'; productDiv.style.fontWeight = '600'; ajax_optionDiv.appendChild(productDiv); productDiv.innerHTML = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][2][2]; for (var no = 0; no < prodLength; no++) { if (ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][2][0][no].length == 0) continue; optionsAdded = true; var div = document.createElement('DIV'); var items = ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][2][0][no].split(/###/gi); if (ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()][2][0].length == 1 && ajax_list_activeInput.value == items[0]) { ajax_options_hide(); return; } hdnDept = document.createElement('INPUT'); hdnDept.setAttribute("type", "hidden"); hdnDept.setAttribute("name", productDiv.innerHTML + no); hdnDept.setAttribute("value", productDiv.innerHTML); div.innerHTML = items[items.length - 1]; div.id = items[0]; div.className = 'optionDiv'; div.onmouseover = function () { ajax_options_rollOverActiveItem(this, false) }; div.onclick = ajax_option_setValue; div.appendChild(hdnDept); if (!ajax_list_optionDivFirstItem) ajax_list_optionDivFirstItem = div; ajax_optionDiv.appendChild(div); } } if (optionsAdded) { ajax_optionDiv.style.display = 'block'; if (ajax_optionDiv_iframe) ajax_optionDiv_iframe.style.display = ''; } } function ajax_option_resize(inputObj) { ajax_optionDiv.style.top = (ajax_getTopPos(inputObj) + inputObj.offsetHeight + ajaxBox_offsetY) + 'px'; ajax_optionDiv.style.left = (ajax_getLeftPos(inputObj) + ajaxBox_offsetX) + 'px'; if (ajax_optionDiv_iframe) { ajax_optionDiv_iframe.style.left = ajax_optionDiv.style.left; ajax_optionDiv_iframe.style.top = ajax_optionDiv.style.top; } } function ajax_showOptions(inputObj, paramToExternalFile, e) { autoSelField = GetDeptIndex($('#selectAllStoresContainer span span').html()); if (e.keyCode == 13 || e.keyCode == 9) return; if (!ajax_list_currentLetters[autoSelField]) ajax_list_currentLetters[autoSelField] = new Array(); if (!depSelChange) { if (ajax_list_currentLetters[autoSelField][inputObj.name] == inputObj.value) return; } if (!ajax_list_cachedLists[paramToExternalFile]) ajax_list_cachedLists[paramToExternalFile] = new Array(); if (!ajax_list_cachedLists[paramToExternalFile][autoSelField]) ajax_list_cachedLists[paramToExternalFile][autoSelField] = new Array(); ajax_list_currentLetters[autoSelField][inputObj.name] = inputObj.value; if (!ajax_optionDiv) { ajax_optionDiv = document.createElement('DIV'); ajax_optionDiv.id = 'ajax_listOfOptions'; document.body.appendChild(ajax_optionDiv); if (ajax_list_MSIE) { ajax_optionDiv_iframe = document.createElement('IFRAME'); ajax_optionDiv_iframe.border = '0'; ajax_optionDiv_iframe.style.width = ajax_optionDiv.clientWidth + 'px'; ajax_optionDiv_iframe.style.height = ajax_optionDiv.clientHeight + 'px'; ajax_optionDiv_iframe.id = 'ajax_listOfOptions_iframe'; document.body.appendChild(ajax_optionDiv_iframe); } var allInputs = document.getElementsByTagName('INPUT'); for (var no = 0; no < allInputs.length; no++) { if (!allInputs[no].onkeyup) allInputs[no].onfocus = ajax_options_hide; } var allSelects = document.getElementsByTagName('SELECT'); for (var no = 0; no < allSelects.length; no++) { allSelects[no].onfocus = ajax_options_hide; } var oldonkeydown = document.body.onkeydown; if (typeof oldonkeydown != 'function') { document.body.onkeydown = ajax_option_keyNavigation; } else { document.body.onkeydown = function () { oldonkeydown(); ajax_option_keyNavigation(); } } var oldonresize = document.body.onresize; if (typeof oldonresize != 'function') { document.body.onresize = function () { ajax_option_resize(inputObj); }; } else { document.body.onresize = function () { oldonresize(); ajax_option_resize(inputObj); } } } if (inputObj.value.length < minimumLettersBeforeLookup) { ajax_options_hide(); return; } ajax_optionDiv.style.top = (ajax_getTopPos(inputObj) + inputObj.offsetHeight + ajaxBox_offsetY) + 'px'; ajax_optionDiv.style.left = (ajax_getLeftPos(inputObj) + ajaxBox_offsetX) + 'px'; if (ajax_optionDiv_iframe) { ajax_optionDiv_iframe.style.left = ajax_optionDiv.style.left; ajax_optionDiv_iframe.style.top = ajax_optionDiv.style.top; } ajax_list_activeInput = inputObj; ajax_optionDiv.onselectstart = ajax_list_cancelEvent; currentListIndex++; if (ajax_list_cachedLists[paramToExternalFile][autoSelField][inputObj.value.toLowerCase()]) { ajax_option_list_buildList(inputObj.value, paramToExternalFile, currentListIndex); } else { var tmpIndex = currentListIndex / 1; var ajaxIndex = ajax_list_objects.length; ajax_list_objects[ajaxIndex] = new sack(); ajax_option_list_showContent(ajaxIndex, inputObj, paramToExternalFile, tmpIndex); } } function ajax_option_keyNavigation(e) { if (document.all) e = event; if (!ajax_optionDiv) return; if (ajax_optionDiv.style.display == 'none') return; if (e.keyCode == 38 || e.which == 38) { if (!ajax_list_activeItem) return; if (ajax_list_activeItem && !ajax_list_activeItem.previousSibling) return; ajax_options_rollOverActiveItem(/*ajax_list_activeItem.previousSibling*/getPreviosSuggItem(), true); } if (e.keyCode == 40 || e.which == 40) { if (!ajax_list_activeItem) { ajax_options_rollOverActiveItem(ajax_list_optionDivFirstItem, true); } else { if (!ajax_list_activeItem.nextSibling) return; ajax_options_rollOverActiveItem(/*ajax_list_activeItem.nextSibling*/getNextSuggItem(), true); } } if (e.keyCode == 13 || e.which == 13 || e.keyCode == 9 || e.which == 9) { if (ajax_list_activeItem && ajax_list_activeItem.className == 'optionDivSelected') ajax_option_setValue(false, ajax_list_activeItem); if (e.keyCode == 13 || e.which == 13) return false; else return true; } if (e.keyCode == 27 || e.which == 27) { ajax_options_hide(); } } function getPreviosSuggItem() { var prevItem = ajax_list_activeItem.previousSibling; if (prevItem.className == 'optionDiv') { return prevItem; } else { ajax_list_activeItem = ajax_list_activeItem.previousSibling; return getPreviosSuggItem(); } } function getNextSuggItem() { var nextItem = ajax_list_activeItem.nextSibling; if (nextItem.className == 'optionDiv') { return nextItem; } else { ajax_list_activeItem = ajax_list_activeItem.nextSibling; return getNextSuggItem(); } } document.documentElement.onclick = autoHideList; function autoHideList(e) { if (document.all) e = event; if (e != null) { if (e.target) { source = e.target; } else if (e.srcElement) { source = e.srcElement; } if (source.nodeType == 3) source = source.parentNode; if (source.tagName.toLowerCase() != 'input' && source.tagName.toLowerCase() != 'textarea') { if (source.parentNode != null && source.parentNode != undefined && source.parentNode.id == 'ajax_listOfOptions') { ajax_options_hide(); $("input#txtSearch").css('border-color', ''); DoSearch(); } } } } function ajax_option_list_showContent(ajaxIndex, inputObj, paramToExternalFile, whichIndex) { if (whichIndex != currentListIndex) return; var letters = inputObj.value.replace(" ", "+"); var autoArr1 = new Array(); var autoArr2 = new Array(); var autoArr3 = new Array(); var autoUrl1 = ''; var autoUrl2 = ''; var autoUrl3 = ''; var autoVar1 = ''; var autoVar2 = ''; var autoVar3 = ''; autoSelField = GetDeptIndex($('#selectAllStoresContainer span span').html()); if (autoSelField == 0) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=mobiles_autosuggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=cameras_autosuggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=books_name_suggest&q=' + letters; } else if (autoSelField == 1) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=mobiles_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=mobiles_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=mobiles_category_suggest&q=' + letters; } else if (autoSelField == 2) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=cameras_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=cameras_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=cameras_category_suggest&q=' + letters; } else if (autoSelField == 3) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=pc_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=pc_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=pc_category_suggest&q=' + letters; } else if (autoSelField == 4) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=electronics_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=electronics_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=electronics_category_suggest&q=' + letters; } else if (autoSelField == 5) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=appliances_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=appliances_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=appliances_category_suggest&q=' + letters; } else if (autoSelField == 6) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=apparel_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=apparel_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=apparel_category_suggest&q=' + letters; } else if (autoSelField == 7) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=babyproductsstore_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=babyproductsstore_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=babyproductsstore_category_suggest&q=' + letters; } else if (autoSelField == 8) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=cakes_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=cakes_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=cakes_category_suggest&q=' + letters; } else if (autoSelField == 9) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=cdroms_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=cdroms_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=cdroms_category_suggest&q=' + letters; } else if (autoSelField == 10) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=chocolates_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=chocolates_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=chocolates_category_suggest&q=' + letters; } else if (autoSelField == 11) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=condoms_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=condoms_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=condoms_category_suggest&q=' + letters; } else if (autoSelField == 12) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=cosmetics_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=cosmetics_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=cosmetics_category_suggest&q=' + letters; } else if (autoSelField == 13) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=flowers_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=flowers_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=flowers_category_suggest&q=' + letters; } else if (autoSelField == 14) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=foods_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=foods_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=foods_category_suggest&q=' + letters; } else if (autoSelField == 15) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=furnishings_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=furnishings_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=furnishings_category_suggest&q=' + letters; } else if (autoSelField == 16) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=giftarticles_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=giftarticles_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=giftarticles_category_suggest&q=' + letters; } else if (autoSelField == 17) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=handicrafts_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=handicrafts_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=handicrafts_category_suggest&q=' + letters; } else if (autoSelField == 18) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=health_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=health_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=health_category_suggest&q=' + letters; } else if (autoSelField == 19) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=jewellery_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=jewellery_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=jewellery_category_suggest&q=' + letters; } else if (autoSelField == 20) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=movies_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=movies_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=movies_category_suggest&q=' + letters; } else if (autoSelField == 21) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=music_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=music_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=music_category_suggest&q=' + letters; } else if (autoSelField == 22) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=paintings_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=paintings_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=paintings_category_suggest&q=' + letters; } else if (autoSelField == 23) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=perfumes_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=perfumes_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=perfumes_category_suggest&q=' + letters; } else if (autoSelField == 24) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=spirituality_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=spirituality_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=spirituality_category_suggest&q=' + letters; } else if (autoSelField == 25) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=stationery_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=stationery_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=stationery_category_suggest&q=' + letters; } else if (autoSelField == 26) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=sweets_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=sweets_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=sweets_category_suggest&q=' + letters; } else if (autoSelField == 27) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=toys_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=toys_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=toys_category_suggest&q=' + letters; } else if (autoSelField == 28) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=watches_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=watches_brand_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=watches_category_suggest&q=' + letters; } else if (autoSelField == 29) { autoUrl1 = ajax_list_externalFile + '?' + 'sn=books_name_suggest&q=' + letters; autoUrl2 = ajax_list_externalFile + '?' + 'sn=books_author_suggest&q=' + letters; autoUrl3 = ajax_list_externalFile + '?' + 'sn=books_category_suggest&q=' + letters; } var trackUrl = ajax_list_externalFile + '?' + 'q=autosuggest:"' + letters + '"&wt=json&fl=autosuggest,rowid&echoParams=none&rows=40&hl=true&hl.fl=autosuggest&hl.simple.pre=<strong>&hl.simple.post=</strong>'; $.when($.ajax({ url: autoUrl1, async: true }), $.ajax({ async: true, url: autoUrl2 }), $.ajax({ url: autoUrl3, async: true })).done(function (a1, a2, a3) { autoSuggObj1 = eval("(" + a1[2].responseText + ")"); autoSuggObj2 = eval("(" + a2[2].responseText + ")"); autoSuggObj3 = eval("(" + a3[2].responseText + ")"); var elements = new Array(); elements[0] = new Array(); elements[1] = new Array(); elements[2] = new Array(); if (autoSelField == 0) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].mobiles_autosuggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].cameras_autosuggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].books_name_suggest[0]; } elements[0][2] = 'Mobiles'; elements[1][2] = 'Cameras'; elements[2][2] = 'Books'; } else if (autoSelField == 1) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].mobiles_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].mobiles_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].mobiles_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 2) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].cameras_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].cameras_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].cameras_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 3) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].pc_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].pc_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].pc_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 4) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].electronics_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].electronics_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].electronics_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 5) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].appliances_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].appliances_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].appliances_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 6) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].apparel_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].apparel_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].apparel_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 7) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].babyproductsstore_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].babyproductsstore_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].babyproductsstore_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 8) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].cakes_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].cakes_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].cakes_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 9) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].cdroms_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].cdroms_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].cdroms_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 10) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].chocolates_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].chocolates_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].chocolates_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 11) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].condoms_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].condoms_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].condoms_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 12) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].cosmetics_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].cosmetics_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].cosmetics_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 13) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].flowers_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].flowers_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].flowers_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 14) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].foods_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].foods_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].foods_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 15) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].furnishings_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].furnishings_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].furnishings_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 16) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].giftarticles_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].giftarticles_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].giftarticles_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 17) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].handicrafts_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].handicrafts_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].handicrafts_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 18) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].health_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].health_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].health_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 19) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].jewellery_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].jewellery_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].jewellery_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 20) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].movies_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].movies_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].movies_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 21) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].music_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].music_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].music_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 22) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].paintings_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].paintings_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].paintings_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 23) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].perfumes_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].perfumes_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].perfumes_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 24) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].spirituality_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].spirituality_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].spirituality_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 25) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].stationery_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].stationery_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].stationery_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 26) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].sweets_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].sweets_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].sweets_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 27) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].toys_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].toys_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].toys_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 28) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].watches_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].watches_brand_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].watches_category_suggest[0]; } elements[0][2] = 'Products'; elements[1][2] = 'Brands'; elements[2][2] = 'Categories'; } else if (autoSelField == 29) { for (count = 0; count < autoSuggObj1.response.docs.length; count++) { autoArr1[autoArr1.length] = autoSuggObj1.highlighting[autoSuggObj1.response.docs[count].rowid].books_name_suggest[0]; } for (count = 0; count < autoSuggObj2.response.docs.length; count++) { autoArr2[autoArr2.length] = autoSuggObj2.highlighting[autoSuggObj2.response.docs[count].rowid].books_author_suggest[0]; } for (count = 0; count < autoSuggObj3.response.docs.length; count++) { autoArr3[autoArr3.length] = autoSuggObj3.highlighting[autoSuggObj3.response.docs[count].rowid].books_category_suggest[0]; } elements[0][2] = 'Books'; elements[1][2] = 'Authors'; elements[2][2] = 'Categories'; } elements[0][0] = uniqueSuggestion(autoArr1, letters.length); elements[1][0] = uniqueSuggestion(autoArr2, letters.length); elements[2][0] = uniqueSuggestion(autoArr3, letters.length); elements[0][1] = autoSuggObj1.response.docs.length; elements[1][1] = autoSuggObj2.response.docs.length; elements[2][1] = autoSuggObj3.response.docs.length; elements.sort(sortAutoSugg); ajax_list_cachedLists[paramToExternalFile][autoSelField][letters.toLowerCase()] = elements; ajax_option_list_buildList(letters, paramToExternalFile); }); } function sortAutoSugg(a, b) { return b[1] - a[1]; } function uniqueSuggestion(arrayName, len) { var newArray = new Array(); var arrLen = arrayName.length; labelSug: for (var i = 0; i < arrLen; i++) { for (var j = 0; j < newArray.length; j++) { arrayName[i] = arrayName[i].replace(/[?!\-%$#@*+=.]+/g, ' '); if (newArray[j] == arrayName[i]) { continue labelSug; } } if (arrayName[i].length > 0) { arrayName[i] = arrayName[i].replace(/[?!\-%$#@*+=.]+/g, ' '); newArray[newArray.length] = arrayName[i]; } if (newArray.length == 10) { return newArray; } } return newArray; } function trim(str) { if (!str || typeof str != 'string') return null; return str.replace(/^[\s]+/, '').replace(/[\s]+$/, '').replace(/[\s]{2,}/, ' '); } function checkKey(el, dummy, e) { var keynum; if (window.event) { keynum = e.keyCode } else if (e.which) { keynum = e.which } if (keynum == 13) { $("input#txtSearch").css('border-color', ''); $("input#btnSearch").click(); } else { ajax_showOptions(el, '', e); } return false; } function onDeptSelect(e) { var el = $("input#txtSearch").val(); ajax_showOptions(el, '', e); } function trimText(txt) { if (txt.length > 20) { txt = txt.substring(0, 19) + '..'; } return txt; } function GetDeptIndex(value) { for (i = 0; i < dept_names.length; i++) if (dept_names[i] == value) return i; return -1; }
/* script.js */
$(document).ready(function () { $('#menu ul li:first').addClass('act'); var totWidth = 0; var positions = new Array(); $('#slides .slide').each(function (i) { positions[i] = totWidth; totWidth += $(this).width(); if (!$(this).width()) { alert("Please, fill in width & height for all your images!"); return false; } }); $('#slides').width(totWidth); $('#menu ul li a').click(function (e, keepScroll) { e.stopPropagation(); $('li.menuItem').removeClass('act').addClass('inact'); $(this).parent().addClass('act'); var pos = $(this).parent().prevAll('.menuItem').length; $('#slides').stop().animate({ marginLeft: -positions[pos] + 'px' }, 450); e.preventDefault(); if (!keepScroll) clearInterval(itvl); }); var current = 1; function autoAdvance() { if (current == -1) return false; $('#menu ul li a').eq(current % $('#menu ul li a').length).trigger('click', [true]); current++; } var changeEvery = 5; var itvl = setInterval(function () { autoAdvance(); }, changeEvery * 1000); $('#menu ul li a').wrapInner('<span><span><span></span></span></span>'); $('#menu ul li a').css('padding', '0'); });
/* Left Navigation Menu */
function Next(div) {
    if ($(".lefthomeFilters ul li")) {
        var list = $(".lefthomeFilters ul li");
        var id = parseInt($(".lefthomeFilters ul").find("li:visible").last().next().attr("id").replace("cat", ""));
        var lastli_id = parseInt($(".lefthomeFilters ul li:last").attr("id").replace("cat", ""));
        if (id == lastli_id || isNaN(id))
            return;
        var count = 0;
        $(list).hide();
        for (var i = 0; i <= lastli_id; i++) {
            if ($(list[i]).attr("id") != undefined && $(list[i]).attr("id") != null) {
                var attr_id = $(list[i]).attr("id").replace("cat", "");
                if (parseInt(attr_id) == id) {
                    $(list[i]).show();
                    count++;
                    id++;
                }
                if (count > 9)
                    break;
            }
        }
    }
}
function Previous(div) {
    if ($(".lefthomeFilters ul li")) {
        var list = $(".lefthomeFilters ul li");
        var id = parseInt($(".lefthomeFilters ul").find("li:visible").first().prev().attr("id").replace("cat", ""));
        var lastli_id = parseInt($(".lefthomeFilters ul li:last").attr("id").replace("cat", ""));
        if (id == 1 || isNaN(id))
            return;
        var count = 0;
        $(list).hide();
        for (var i = lastli_id; i >= 0; i--) {
            if ($(list[i]).attr("id") != undefined && $(list[i]).attr("id") != null) {
                var attr_id = $(list[i]).attr("id").replace("cat", "");
                if (parseInt(attr_id) == id) {
                    $(list[i]).show();
                    count++;
                    id--;
                }
                if (count > 9)
                    break;
            }
        }
    }
}
$(function () {
    // Share Email
    $("#ContentPlaceHolder1_ctl02_txtShareMail").blur(function () {
        if ($("#ContentPlaceHolder1_ctl02_txtShareMail").val().trim().length == 0) {
            //$("#ContentPlaceHolder1_ctl02_txtShareMail").val('Type in e-mail addresses: jo@example.com, jan@example.com. These will not be used for marketing.');
            $("#ContentPlaceHolder1_ctl02_txtShareMail").val('Put a comma after each id');
        }
    });
    $("#ContentPlaceHolder1_ctl02_txtShareMail").focus(function () {
        if ($("#ContentPlaceHolder1_ctl02_txtShareMail").val().trim().toLowerCase() == "put a comma after each id") {
            $("#ContentPlaceHolder1_ctl02_txtShareMail").val('');
        }
    });
    $("#ContentPlaceHolder1_ctl02_txtShareMail").mousedown(function () {
        if ($("#ContentPlaceHolder1_ctl02_txtShareMail").val().trim().toLowerCase() == "put a comma after each id") {
            $("#ContentPlaceHolder1_ctl02_txtShareMail").focus();
        }
    });
    //social tracking code
    $("a[href='https://www.facebook.com/indiaplaza']").click(function () {
        _gaq.push(['_trackSocial', "facebook", "Top Facebook Button Clicked"]);
    });
    $("a[href='http://www.twitter.com/indiaplaza']").click(function () {
        _gaq.push(['_trackSocial', "twitter", "Top Twitter Button Clicked"]);
    });
    $("a[href='https://plus.google.com/107889841706455239243']").click(function () {
        _gaq.push(['_trackSocial', "google+", "Top google+ Button Clicked"]);
    });
    $("a[href='http://pinterest.com/indiaplaza/']").click(function () {
        _gaq.push(['_trackSocial', "pinterest", "Top Pinterest Button Clicked"]);
    });
    $(".fbLikenew").click(function () {
        _gaq.push(['_trackSocial', "facebook", "Like", document.location.href]);
    });
    $(".pinitnew").click(function () {
        _gaq.push(['_trackSocial', "pinit", "Like", document.location.href]);
    });
    $(".googleplusnew").click(function () {
        _gaq.push(['_trackSocial', "googleplus", "Like", document.location.href]);
    });
    $(".tweetnew").click(function () {
        _gaq.push(['_trackSocial', "tweet", "Like", document.location.href]);
    });
});
//---------------------------------------
function lnkAddtoWish(itemDetails) {
    //_gaqinit();
    _gaq.push(['_trackEvent', 'Engagement Metrics', 'Added Item to Wish List', itemDetails]);
    if ($("#lnkSignin").text().toLowerCase() != "logout") {
        showMask();
        window.location.href = securedURL + "/sublogin.aspx?ReturnUrl=/myaccount/myaccount.aspx?addwish=" + itemDetails;
        hideMask();
        return false;
    }
    else {
        showMask();
        window.location.href = "/myaccount/myaccount.aspx?addwish=" + itemDetails;
        hideMask();
        return false;
    }
}
function lnkmovetoPrivate(itemDetails, obj) {
    showMask();
    $.post("/WishList/wishlistqueryexecute.aspx", { movewish: itemDetails + ",Private" }, function (data) {
        if (data == "success") {
            //_gaqinit();
            _gaq.push(['_trackEvent', 'Engagement Metrics', 'Moved Item to Private Wish List', itemDetails]);
            return false;
        }
        else {
            alert("Please try again.");
            $(obj).attr("href", "");
        }
        hideMask();
    });
}
function lnkmovetoPublic(itemDetails, obj) {
    showMask();
    $.post("/WishList/wishlistqueryexecute.aspx", { movewish: itemDetails + ",Public" }, function (data) {
        if (data == "success") {
            //_gaqinit();
            _gaq.push(['_trackEvent', 'Engagement Metrics', 'Moved Item to Public Wish List', itemDetails]);
            return false;
        }
        else {
            alert("Please try again.");
            $(obj).attr("href", "");
        }
        hideMask();
    });
}
function RemoveFromWishList(skuID, variantID) {
    showMask();
    var wishType = $("#ContentPlaceHolder1_ctl02_hdnListHead").val();
    $.post("/WishList/wishlistqueryexecute.aspx", { Removewish: skuID + "," + variantID }, function (data) {
        if (data == "success") {
            //_gaqinit();
            _gaq.push(['_trackEvent', 'Engagement Metrics', 'Removed Item from Wish List', skuID]);
            window.location.href = "/myaccount/myAccount.aspx?bind=" + wishType;
            return false;
        }
        else {
            alert("Please try again.");
        }
        hideMask();
        return false;
    });
    return false;
}
//Item Move to Cart & Remove from Wishlist Table
function RemoveItemWishListMoveToCart(skuid, VariantID) {
    showMask();
    $("#" + skuid).css("display", "none");
    $.post("/WishList/wishlistqueryexecute.aspx", { Removewish: skuid + "," + VariantID }, function (data) {
        if (data == "success" || data == "") {
            //_gaqinit();
            _gaq.push(['_trackEvent', 'Engagement Metrics', 'Removed Item from Wish List & Move to Cart', skuid]);
            return false;
        }
        else {
            alert("Please try again.");
        }
        hideMask();
        return false;
    });
    return false;
}
//records move from add to cart to Wish List
function AddtocartToWish(linkbut) {
    var sku = $("#Removesku" + linkbut.id.replace("movewishlist", "")).val();
    var storeName = $("#hdnstorename" + linkbut.id.replace("movewishlist", "")).val();
    $.post("/WishList/wishlistqueryexecute.aspx", { Cartwish: sku + "," + storeName }, function (data) {
        if (data == "success") {
            showcart();
            //_gaqinit();
            _gaq.push(['_trackEvent', 'Engagement Metrics', 'Removed Item from Cart & Move to Wish List', sku]);
            return false;
        }
        else {
            alert("Please try again.");
        }
        return false;
    });
    return false;
}
function lnkfdpWishList() {
    var itemDetails = $("#ContentPlaceHolder1_FinalControlValuesHolder_ctl00_FDPMainSection_hdnWishDetails").val();
    //_gaqinit();
    _gaq.push(['_trackEvent', 'Engagement Metrics', 'Added Item to Wish List', itemDetails]);
    if ($("#lnkSignin").text().toLowerCase() != "logout") {
        showMask();
        window.location.href = securedURL + "/sublogin.aspx?ReturnUrl=/myaccount/myaccount.aspx?addwish=" + itemDetails;
        hideMask();
        return false;
    }
    else {
        showMask();
        window.location.href = "/myaccount/myaccount.aspx?addwish=" + itemDetails;
        hideMask();
        return false;
    }
}
function lnkfdpWishListBooks() {
    var itemDetails = $("#ContentPlaceHolder1_FinalPage_hdnWishDetails").val();
    //_gaqinit();
    _gaq.push(['_trackEvent', 'Engagement Metrics', 'Added Item to Wish List', itemDetails]);
    if ($("#lnkSignin").text().toLowerCase() != "logout") {
        showMask();
        window.location.href = securedURL + "/sublogin.aspx?ReturnUrl=/myaccount/myaccount.aspx?addwish=" + itemDetails;
        hideMask();
        return false;
    }
    else {
        showMask();
        window.location.href = "/myaccount/myaccount.aspx?addwish=" + itemDetails;
        hideMask();
        return false;
    }
}
function sharepopup(e) {
    $("#ContentPlaceHolder1_ctl02_lblErrorMsg").html('');
    $("#ContentPlaceHolder1_ctl02_lblMailID").html('');
    $("#ContentPlaceHolder1_ctl02_txtShareMail").val('Put a comma after each id');
    $.post("/WishList/wishlistqueryexecute.aspx", { slink: "ShareLink" }, function (data) {
        if (data != "") {
            $("#ContentPlaceHolder1_ctl02_lblMailID").html(data);
            $('#ContentPlaceHolder1_ctl02_divPopupPublicURL').css('left', 30); $('#ContentPlaceHolder1_ctl02_divPopupPublicURL').css('top', $(this).top + 10);
            $("#ContentPlaceHolder1_ctl02_divPopupPublicURL").show('slow');
            return false;
        }
        else {
            alert("Please try again.");
        }
        return false;
    });
    return false;
}
function SharePopUpclose() {
    $("#ContentPlaceHolder1_ctl02_divPopupPublicURL").hide();
    return false;
}
function submitEmail() {
    var regMail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var errMsg = '';
    $("#ContentPlaceHolder1_ctl02_lblErrorMsg").html('');
    if ($("#ContentPlaceHolder1_ctl02_txtShareMail").val().trim().toLowerCase() == "put a comma after each id") {
        $("#ContentPlaceHolder1_ctl02_lblErrorMsg").html("Enter the mail id");
        $("#ContentPlaceHolder1_ctl02_txtShareMail").focus();
        return false;
    }
    else {
        if ($("#ContentPlaceHolder1_ctl02_txtShareMail").length == 0) {
            $("#ContentPlaceHolder1_ctl02_lblErrorMsg").html("Enter the mail id");
            $("#ContentPlaceHolder1_ctl02_txtShareMail").focus();
            return false;
        }
        else {
            var splitVal = $("#ContentPlaceHolder1_ctl02_txtShareMail").val().split(',');
            var puburl = $("#ContentPlaceHolder1_ctl02_lblshowURL").text();
            for (var i = 0; i < splitVal.length; i++) {
                splitVal[i] = trimString(splitVal[i]);
                if (!regMail.test(splitVal[i].toString())) {
                    if (errMsg.length == 0)
                        errMsg = "(" + splitVal[i].toString() + ")";
                    else
                        errMsg += " & (" + splitVal[i].toString() + ")";
                }
            }
            if (errMsg.length != 0) {
                $("#ContentPlaceHolder1_ctl02_lblErrorMsg").html("Invalid mail-id " + errMsg);
                return false;
            }
            else {
                var firstSplitVal = "";
                var secondSplitVal = "";
                if ($("#ContentPlaceHolder1_ctl02_chkCCMail").is(':checked')) {
                    firstSplitVal = $("#ContentPlaceHolder1_ctl02_lblMailID").html().split('(');
                    secondSplitVal = firstSplitVal[1].toString().replace(")", "");
                    secondSplitVal = trimString(secondSplitVal);
                }
                $.ajax({
                    beforeSend: function () { $("#smprogress").show(); },
                    type: "POST",
                    url: "/wishlist/wishlistqueryexecute.aspx",
                    data: { smail: encodeURIComponent($("#ContentPlaceHolder1_ctl02_txtShareMail").val()),
                        ccmail: encodeURIComponent(secondSplitVal),
                        link: encodeURIComponent(puburl)
                    },
                    context: document.body,
                    success: function (data) {
                        $("#smprogress").hide();
                        if (data == "success") {
                            $("#ContentPlaceHolder1_ctl02_lblErrorMsg").html("Mail sent successfully");
                            $("#ContentPlaceHolder1_ctl02_lblErrorMsg").css("color", "green");
                            return false;
                        }
                        else {
                            alert("Please try again.");
                            return false;
                        }
                    }
                });
            }
        }
    }
    return false;
}
function AddtocartToWishList(linkbut) {
    var sku = $("#Removesku" + linkbut.id.replace("movewishlist", "")).val();
    var storeName = $("#hdnstorename" + linkbut.id.replace("movewishlist", "")).val();
    //_gaqinit();
    _gaq.push(['_trackEvent', 'Engagement Metrics', 'Removed Item from Cart & Move to Wish List', sku]);
    if ($("#lnkSignin").text().toLowerCase() != "logout") {
        showMask();
        window.location.href = securedURL + "/sublogin.aspx?ReturnUrl=/myaccount/myaccount.aspx?Cartwish=" + sku + "," + storeName + "&bind=Private";
        hideMask();
        return false;
    }
    else {
        $.post("/WishList/wishlistqueryexecute.aspx", { Cartwish: sku + "," + storeName }, function (data) {
            if (data == "success") {
                showcartWishMsg();
                return false;
            }
            else {
                alert("Please try again.");
            }
            return false;
        });
        return false;
    }
}
//Master Page Wishlist link 
function lnkMasterWish() {
    //_gaqinit();
    _gaq.push(['_trackEvent', 'Engagement Metrics', 'Wish List Clicked']);
    if ($("#lnkSignin").text().toLowerCase() != "logout") {
        showMask();
        window.location.href = securedURL + "/sublogin.aspx?ReturnUrl=/myaccount/myaccount.aspx?bind=Private";
        hideMask();
        return false;
    }
    else {
        showMask();
        window.location.href = "/myaccount/myaccount.aspx?bind=Private";
        hideMask();
        return false;
    }
}
// End the wishlist script
function showcartWishMsg() { $(document).ready(function () { $.ajax({ beforeSend: function () { showMask(); }, type: "POST", url: "/BuildShopCart.aspx?showCart=true&wish=1", context: document.body, dataType: "text", cache: false, success: function (data) { $("div#divCartitems").html(data); hideMask(); cartcount(); $("div#divaddtocart").removeClass("shoppingCart"); $("div#divaddtocart").addClass("maskaddtocartpopup"); $("div#divCartitems").addClass("innerdivpopup"); $("div#divaddtocart").show(); } }); }); } function PopUpRedirect() { var url = qsParm['refurl']; if (url != "undefined" && url != "") window.location = unescape(url); else { window.location = "/"; } return false; }
function getCookie(cn) {
    var key, cc = document.cookie.split(";");
    var value = '';
    for (var i = 0; i < cc.length; i++) {
        key = cc[i].substr(0, cc[i].indexOf("="));
        value = cc[i].substr(cc[i].indexOf("=") + 1);
        key = key.replace(/^\s+|\s+$/g, "");
        if (key == cn) {
            return unescape(value);
        }
    }
}
//To get different spotlights based on user logged-in or not
function gethomepagespotlights() {
    var u_type = getCookie("UserType");
    u_type = u_type || '';
    if (u_type.toLowerCase() == "r") {
        if (document.getElementById('divloggedusers') != null && document.getElementById('divloggedusers') != undefined)
            document.getElementById('divloggedusers').style.display = 'block';
        if (document.getElementById('divnonloggedusers') != null && document.getElementById('divnonloggedusers') != undefined)
            document.getElementById('divnonloggedusers').style.display = 'none';
    }
    else {
        if (document.getElementById('divnonloggedusers') != null && document.getElementById('divnonloggedusers') != undefined)
            document.getElementById('divnonloggedusers').style.display = 'block';
        if (document.getElementById('divloggedusers') != null && document.getElementById('divloggedusers') != undefined)
            document.getElementById('divloggedusers').style.display = 'none';
    }
}
//_gaq object initialization
function _gaqinit() { if (_gaq === null || _gaq === undefined) var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-147673-4']); _gaq.push(['_trackPageview']); }