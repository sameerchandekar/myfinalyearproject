<%@page import="java.util.Enumeration"%>
<%@ page language="java" import="java.sql.*"  contentType="text/html; charset=ISO-8859-1"
    pageEncoding="UTF-8"%>
   <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/ipmainv21.css" type="text/css">
<meta name="Keywords" content="book store, buy books online, books india, book shop, online bookstore, order book, book purchase">
<script src="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/tzddggzx.js" async="" type="text/javascript"></script>
<script id="undefined" src="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/inpage_linkid.js" async="" type="text/javascript"></script>
<script src="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/sgtracker.js" async="" type="text/javascript"></script>
<script src="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/beacon.js" async=""></script>
<script src="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/dc.js" async="" type="text/javascript"></script>
<script src="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/13915.js" async="" type="text/javascript"></script>
<script src="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/google_jquery.js" type="text/javascript"></script>
<script src="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/jquery-ui-1.js" type="text/javascript"></script><script src="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/FBScript.js" type="text/javascript"></script>
<script src="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/ipjsv43.js" type="text/javascript"></script><script src="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/indiaplazaHome.js" type="text/javascript">
</script><meta name="Description" content="Buy books online at India's first online bookstore. Guaranteed low prices and free shipping on 10 million books. Compare before you buy books online.">
  
<script type="text/javascript">
function validate(f)
{
	checkMail(f);
	var a=f.eid.value;
	var b=f.pwd.value;
	if(a=='' && b=='')
		{
		alert("Enter your Details");
		return false;
		}
	else if(a=='')
		{
		alert("User name should not be blank");
		return false;
		}
	else if(b=='')
		{
		alert("Password should not be blank");
		return false;
		}
	else if(b.length<6)
	{
	alert("Password must be of atleast 6 characters");
	return false;
	}
	else
		return true;
}

function checkMail(f)
{
	var email=f.eid.value;
	var p1=email.indexOf("@");
	var p2=email.lastIndexOf(".");
	
	if((email=='')|| (p1<=1) || (p2-p1<1) || (p2>=email.length-1)||p2<0)
		{
		alert("Please enter valid Email id");
		return false;
		}
	return true;

}
</script>






  <script type="text/javascript">        var merchant = "70483"; var cookieVal = 365;   </script>
    
    
    <link href="Buy%20Books%20Online%20_%20India%27s%20first%20online%20bookstore%20_%20Indiaplaza_files/ipbooksstorepages.css" rel="stylesheet" type="text/css">
<meta name="alexaVerifyID" content="XAOvap8QSTt8qsTdyqFrlVimt74"><meta name="msvalidate.01" content="1BC8AFD82E565B956E1783F4A7D3DFB1">
    <script type="text/javascript">
      //<![CDATA[
        $SA = { s: 13915, asynch: 1 };
        (function () {
            var sa = document.createElement("script"); sa.type = "text/javascript"; sa.async = true;
            sa.src = ("https:" == document.location.protocol ? "https://" + $SA.s + ".sa" : "http://" + $SA.s + ".a") + ".siteapps.com/" + $SA.s + ".js";
            var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(sa, t);
        })();
      //]]>
    </script>
    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_require', 'inpage_linkid', '//www.google-analytics.com/plugins/ga/inpage_linkid.js']);
        _gaq.push(['_setAccount', 'UA-147673-4']);
        _gaq.push(['_trackPageview']);
        (function () {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
            //                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    </script>
    <!-- End of Google-track Code -->
<link rel="alternate" type="application/rss+xml" title="New Releases" href="https://indiaplaza1.blob.core.windows.net/rsscatalog/Books_NewReleasesrssfeeds.xml"><link rel="alternate" type="application/rss+xml" title="IP Best Sellers" href="https://indiaplaza1.blob.core.windows.net/rsscatalog/Books_IpBestSellersrssfeeds.xml"><link rel="alternate" type="application/rss+xml" title="Top 5000 Books" href="https://indiaplaza1.blob.core.windows.net/rsscatalog/Books_5000rssfeeds.xml"><link rel="alternate" type="application/rss+xml" title="IP Recommends" href="https://indiaplaza1.blob.core.windows.net/rsscatalog/IPRecommendsrssfeeds.xml"><title>
	Buy Books Online | India's first online bookstore | Indiaplaza
</title><style type="text/css">.fb_hidden{position:absolute;top:-10000px;z-index:10001}
.fb_invisible{display:none}
.fb_reset{background:none;border-spacing:0;border:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}
.fb_link img{border:none}
.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}
.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}
.fb_dialog_content{background:#fff;color:#333}
.fb_dialog_close_icon{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px;top:8px\9;right:7px\9}
.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}
.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}
.fb_dialog_close_icon:hover{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/s816eWC-2sl.gif)}
.fb_dialog_close_icon:active{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/s816eWC-2sl.gif)}
.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size:24px;padding:20px}
.fb_dialog_top_left,
.fb_dialog_top_right,
.fb_dialog_bottom_left,
.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}
/* @noflip */
.fb_dialog_top_left{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}
/* @noflip */
.fb_dialog_top_right{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}
/* @noflip */
.fb_dialog_bottom_left{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}
/* @noflip */
.fb_dialog_bottom_right{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}
.fb_dialog_vert_left,
.fb_dialog_vert_right,
.fb_dialog_horiz_top,
.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}
.fb_dialog_vert_left,
.fb_dialog_vert_right{width:10px;height:100%}
.fb_dialog_vert_left{margin-left:-10px}
.fb_dialog_vert_right{right:0;margin-right:-10px}
.fb_dialog_horiz_top,
.fb_dialog_horiz_bottom{width:100%;height:10px}
.fb_dialog_horiz_top{margin-top:-10px}
.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}
.fb_dialog_iframe{line-height:0}
.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3b5998;color:#fff;font-size:14px;font-weight:bold;margin:0}
.fb_dialog_content .dialog_title > span{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yd/r/Cou7n-nqK52.gif)
no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}
body.fb_hidden{-webkit-transform:none;height:100%;margin:0;left:-10000px;overflow:visible;position:absolute;top:-10000px;width:100%
}
.fb_dialog.fb_dialog_mobile.loading{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ya/r/3rhSv5V8j3o.gif)
white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}
.fb_dialog.fb_dialog_mobile.loading.centered{max-height:590px;min-height:590px;max-width:500px;min-width:500px}
#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;left:0;top:0;width:100%;min-height:100%;z-index:10000}
#fb-root #fb_dialog_ipad_overlay.hidden{display:none}
.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}
.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0 0, 0 100%, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}
.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100%
}
.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px
}
.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px
}
.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0 0, 0 100%, from(#4966A6),
color-stop(0.5, #355492), to(#2A4887));border:1px solid #29447e;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset,
rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}
.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}
.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}
.fb_dialog_content .dialog_content{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #555;border-bottom:0;border-top:0;height:150px}
.fb_dialog_content .dialog_footer{background:#f2f2f2;border:1px solid #555;border-top-color:#ccc;height:40px}
#fb_dialog_loader_close{float:left}
.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}
.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}
.fb_iframe_widget{position:relative;display:-moz-inline-block;display:inline-block}
.fb_iframe_widget iframe{position:absolute}
.fb_iframe_widget_lift{z-index:1}
.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify;vertical-align:text-bottom}
.fb_hide_iframes iframe{position:relative;left:-10000px}
.fb_iframe_widget_loader{position:relative;display:inline-block}
.fb_iframe_widget_fluid{display:inline}
.fb_iframe_widget_fluid span{width:100%}
.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}
.fb_iframe_widget_loader .FB_Loader{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/y9/r/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50%;z-index:4}
.fb_button_simple,
.fb_button_simple_rtl{background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yH/r/eIpbnVKI9lR.png);background-repeat:no-repeat;cursor:pointer;outline:none;text-decoration:none}
.fb_button_simple_rtl{background-position:right 0}
.fb_button_simple .fb_button_text{margin:0 0 0 20px;padding-bottom:1px}
.fb_button_simple_rtl .fb_button_text{margin:0 10px 0 0}
a.fb_button_simple:hover .fb_button_text,
a.fb_button_simple_rtl:hover .fb_button_text,
.fb_button_simple:hover .fb_button_text,
.fb_button_simple_rtl:hover .fb_button_text{text-decoration:underline}
.fb_button,
.fb_button_rtl{background:#29447e url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/FGFbc80dUKj.png);background-repeat:no-repeat;cursor:pointer;display:inline-block;padding:0 0 0 1px;text-decoration:none;outline:none}
.fb_button .fb_button_text,
.fb_button_rtl .fb_button_text{background:#5f78ab url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/FGFbc80dUKj.png);border-top:solid 1px #879ac0;border-bottom:solid 1px #1a356e;color:#fff;display:block;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-weight:bold;padding:2px 6px 3px 6px;margin:1px 1px 0 21px;text-shadow:none}
a.fb_button,
a.fb_button_rtl,
.fb_button,
.fb_button_rtl{text-decoration:none}
a.fb_button:active .fb_button_text,
a.fb_button_rtl:active .fb_button_text,
.fb_button:active .fb_button_text,
.fb_button_rtl:active .fb_button_text{border-bottom:solid 1px #29447e;border-top:solid 1px #45619d;background:#4f6aa3;text-shadow:none}
.fb_button_xlarge,
.fb_button_xlarge_rtl{background-position:left -60px;font-size:24px;line-height:30px}
.fb_button_xlarge .fb_button_text{padding:3px 8px 3px 12px;margin-left:38px}
a.fb_button_xlarge:active{background-position:left -99px}
.fb_button_xlarge_rtl{background-position:right -268px}
.fb_button_xlarge_rtl .fb_button_text{padding:3px 8px 3px 12px;margin-right:39px}
a.fb_button_xlarge_rtl:active{background-position:right -307px}
.fb_button_large,
.fb_button_large_rtl{background-position:left -138px;font-size:13px;line-height:16px}
.fb_button_large .fb_button_text{margin-left:24px;padding:2px 6px 4px 6px}
a.fb_button_large:active{background-position:left -163px}
.fb_button_large_rtl{background-position:right -346px}
.fb_button_large_rtl .fb_button_text{margin-right:25px}
a.fb_button_large_rtl:active{background-position:right -371px}
.fb_button_medium,
.fb_button_medium_rtl{background-position:left -188px;font-size:11px;line-height:14px}
a.fb_button_medium:active{background-position:left -210px}
.fb_button_medium_rtl{background-position:right -396px}
.fb_button_text_rtl,
.fb_button_medium_rtl .fb_button_text{padding:2px 6px 3px 6px;margin-right:22px}
a.fb_button_medium_rtl:active{background-position:right -418px}
.fb_button_small,
.fb_button_small_rtl{background-position:left -232px;font-size:10px;line-height:10px}
.fb_button_small .fb_button_text{padding:2px 6px 3px;margin-left:17px}
a.fb_button_small:active,
.fb_button_small:active{background-position:left -250px}
.fb_button_small_rtl{background-position:right -440px}
.fb_button_small_rtl .fb_button_text{padding:2px 6px;margin-right:18px}
a.fb_button_small_rtl:active{background-position:right -458px}
.fb_share_count_wrapper{position:relative;float:left}
.fb_share_count{background:#b0b9ec none repeat scroll 0 0;color:#333;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;text-align:center}
.fb_share_count_inner{background:#e8ebf2;display:block}
.fb_share_count_right{margin-left:-1px;display:inline-block}
.fb_share_count_right .fb_share_count_inner{border-top:solid 1px #e8ebf2;border-bottom:solid 1px #b0b9ec;margin:1px 1px 0 1px;font-size:10px;line-height:10px;padding:2px 6px 3px;font-weight:bold}
.fb_share_count_top{display:block;letter-spacing:-1px;line-height:34px;margin-bottom:7px;font-size:22px;border:solid 1px #b0b9ec}
.fb_share_count_nub_top{border:none;display:block;position:absolute;left:7px;top:35px;margin:0;padding:0;width:6px;height:7px;background-repeat:no-repeat;background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yU/r/bSOHtKbCGYI.png)}
.fb_share_count_nub_right{border:none;display:inline-block;padding:0;width:5px;height:10px;background-repeat:no-repeat;background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yX/r/i_oIVTKMYsL.png);vertical-align:top;background-position:right 5px;z-index:10;left:2px;margin:0 2px 0 0;position:relative}
.fb_share_no_count{display:none}
.fb_share_size_Small .fb_share_count_right .fb_share_count_inner{font-size:10px}
.fb_share_size_Medium .fb_share_count_right .fb_share_count_inner{font-size:11px;padding:2px 6px 3px;letter-spacing:-1px;line-height:14px}
.fb_share_size_Large .fb_share_count_right .fb_share_count_inner{font-size:13px;line-height:16px;padding:2px 6px 4px;font-weight:normal;letter-spacing:-1px}
.fb_share_count_hidden .fb_share_count_nub_top,
.fb_share_count_hidden .fb_share_count_top,
.fb_share_count_hidden .fb_share_count_nub_right,
.fb_share_count_hidden .fb_share_count_right{visibility:hidden}
.fb_connect_bar_container div,
.fb_connect_bar_container span,
.fb_connect_bar_container a,
.fb_connect_bar_container img,
.fb_connect_bar_container strong{background:none;border-spacing:0;border:0;direction:ltr;font-style:normal;font-variant:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;vertical-align:baseline}
.fb_connect_bar_container{position:fixed;left:0 !important;right:0 !important;height:42px !important;padding:0 25px !important;margin:0 !important;vertical-align:middle !important;border-bottom:1px solid #333 !important;background:#3b5998 !important;z-index:99999999 !important;overflow:hidden !important}
.fb_connect_bar_container_ie6{position:absolute;top:expression(document.compatMode=="CSS1Compat"? document.documentElement.scrollTop+"px":body.scrollTop+"px")}
.fb_connect_bar{position:relative;margin:auto;height:100%;width:100%;padding:6px 0 0 0 !important;background:none;color:#fff !important;font-family:"lucida grande", tahoma, verdana, arial, sans-serif !important;font-size:13px !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;letter-spacing:normal !important;line-height:1 !important;text-decoration:none !important;text-indent:0 !important;text-shadow:none !important;text-transform:none !important;white-space:normal !important;word-spacing:normal !important}
.fb_connect_bar a:hover{color:#fff}
.fb_connect_bar .fb_profile img{height:30px;width:30px;vertical-align:middle;margin:0 6px 5px 0}
.fb_connect_bar div a,
.fb_connect_bar span,
.fb_connect_bar span a{color:#bac6da;font-size:11px;text-decoration:none}
.fb_connect_bar .fb_buttons{float:right;margin-top:7px}
.fb_edge_widget_with_comment{position:relative;*z-index:1000}
.fb_edge_widget_with_comment span.fb_edge_comment_widget{position:absolute}
.fb_edge_widget_with_comment span.fb_send_button_form_widget{z-index:1}
.fb_edge_widget_with_comment span.fb_send_button_form_widget .FB_Loader{left:0;top:1px;margin-top:6px;margin-left:0;background-position:50% 50%;background-color:#fff;height:150px;width:394px;border:1px #666 solid;border-bottom:2px solid #283e6c;z-index:1}
.fb_edge_widget_with_comment span.fb_send_button_form_widget.dark .FB_Loader{background-color:#000;border-bottom:2px solid #ccc}
.fb_edge_widget_with_comment span.fb_send_button_form_widget.siderender
.FB_Loader{margin-top:0}
.fbpluginrecommendationsbarleft,
.fbpluginrecommendationsbarright{position:fixed !important;bottom:0;z-index:999}
/* @noflip */
.fbpluginrecommendationsbarleft{left:10px}
/* @noflip */
.fbpluginrecommendationsbarright{right:10px}</style></head>
<body>



     <!--  <form method="post" action="" id="form1" class="default">-->

   
   
   
   <!-- header starts -->
    
<div class="header">
    <div class="header-cont">
        <div class="header-left">
            
            
            <!-- Enter logo here -->>
            
            
        </div>
        <div class="header-nav-outer">
          <div class="header-top-nav">
            </div>
            <div id="ipHeader_logininfoandcartinfo" class="search-outer">
                <div id="navigationUtility">
                    <table border="0" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td id="userGreet">
                                    <label id="lblWelcome"></label>
                                </td>
                                <td id="tdtopmenu"><ul><li><a href="Home.jsp" id="home">Home</a></li>
                                <li><a href="register.jsp" id="lnkRegister" title="Register">Register</a></li>
                                <li><a href="login.jsp"></a></li>></ul></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              
                        </li>
                    </ul>
                </div>
                <div id="cart123" style="white-space: nowrap;">
                    <div class="mybagBlk" id="miniCart">
                                            </div>
                </div>
            </div>
            <div class="nav-tabs-outer" id="iphomedeals-default" style="display: block;">
              <div class="header-nav-tab" style="font-size: 12px"></div>
	
     <div class="header-nav-tab" style="float: right">
     </div>
</div>

        </div>
        <div class="store-home-tab">
            <span style="font-weight: bold; text-transform: capitalize;"><a id="ipstorehome" href="#" title=""></a></span>
        </div>
    </div>
    
    
    <!--header ends  -->
    
    
    




</div>

    <div class="clear">
    </div>
    <div style="height: 3190px;" id="divaddtocart" class="shoppingCart">  
        <div id="divCartitems" style="margin-top: 100px;">
      </div>
    </div>
    
    
    
    
    <div id="containerPage">
        <div id="mainContainer">
          <div id="columnMain">
                <div id="searchStoreContainer">
                  <div id="searchContainer">
                      <div id="searchFormDesign">
                          
                         
                          </div>
                    </div>
                  </div>
            </div>
            </div>
          <div id="iphome">
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
            <!--hmMainArea starts here-->
            <div class="hmMainArea" style="margin-bottom: 20px;">
       
       
       
       
        <div id="divLeft" style="margin-left: -16px;" class="hmLeftBand">
           
        </div>
        <!--hmLeftBand -->
        
        
        
        
        
        <div class="cont-right">
            <div class="main-banner">
    <!--    <a href="/31-upendra-namburi/books/9789381626757.htm">
        <img width="760" height="60" border="0" style="display: block; border-top-left-radius: 0.5em;
            border-top-right-radius: 0.5em; border-bottom-right-radius: 0.5em; border-bottom-left-radius: 0.5em;"
            alt="31 by Upendra Namburi" title="31 by Upendra Namburi" src="http://images.indiaplaza.in/spotlights/booksstripbannernov8.jpg">
    </a>-->
</div>

            <div class="main-deals-cont">
                <div class="home-deals-outer">
                    <div id="divBrowsed" class="wellness-deals" style="display: none;">
                    </div>
                    
       <%
       String book_name;
Enumeration enu=request.getParameterNames();
if(!enu.hasMoreElements())
{
	book_name="";
}
else{
	 book_name=request.getParameter("book_name");
}
%>             
                    
<form action="LoginServlet" method="post">

<table width="" cellpadding="5" cellspacing="1" align="right">
<tr>
<td colspan="2" align="center">
<h1 style="font:Tahoma, Geneva, sans-serif">Login</h1>
</td>
</tr>




<!-- hidden variable -->
<input type=hidden name="book_name" value="<%=book_name%>">

<tr>
<td align="left" class="menuItem"><h3 style="font:Tahoma, Geneva, sans-serif">Email id :</h3></td>
<td align="left"><input type="text" name="eid"></td>
</tr>

<tr>
<td align="left"><h3 style="font:Tahoma, Geneva, sans-serif">Password</h3></td>
<td align="left"><input type="password" name="pwd"></td>
</tr>

<tr>
<td align="right"><input class="button10" type="submit" value="Login" name="b1" onclick='return validate(this.form)'></td>
<td align="left"><a href="register.jsp"><input type="button" class="button10" value="Register"></a></td>
</tr>

</table>
</form>
                </div>
            </div>
        </div>
    </div>
    <!--hmMainArea end here-->
    
     
    <!-- footer area starts -->
    
    
    
    <div style="display: none;">
        
            
    </div>
</div>


           
           
           
            <div class="clear">
            </div>
            <div id="divRecommending" style="display: none; width: 956px; margin: auto">
                <div class="slido">
                    <div class="home-deals-heading-outer_flip">
                        <div class="home-deals-heading_flip">
                            <div class="home-similar-deals-head_flip">
                                Recommendations
                            </div>
                        </div>
                    </div>
                    <div class="slider_small_fdp">
                        <div class="home-deals-heading-outer_flip">
                            <div class="home-deals-heading_flip bgWhite">
                                <div class="home-similar-deals-head_flip" style="font-size: 13px !important">
                                    You Recently Viewed
                                </div>
                            </div>
                        </div>
                        <div class="dealsBlk iphome-widget_small" style="margin-left: 10px; width: 235px;
                            border-right: 1px solid whiteSmoke; height: 300px;">
                            <div class="prodArea" style="width: 220px;">
                                <div class="iphome-jcarousel-skin-tango" style="width: 220px;">
                                    <div style="position: relative; display: block;" class="">
                                        <div class="jcarousel-container jcarousel-container-horizontal" style="position: relative;
                                            display: block;">
                                            <div style="overflow: hidden; position: relative;" class="jcarousel-clip jcarousel-clip-horizontal">
                                                <ul class="jcarousel-list jcarousel-list-horizontal" id="mycarousel-recentview" style="overflow: hidden;
                                                    position: relative; margin: 0px; padding: 0px; width: 328px; left: 0px; top: 0px;">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider_mid_fdp">
                        <div class="home-deals-heading-outer_flip_mid_fdp">
                            <div class="home-deals-heading_flip_mid bgWhite">
                                <div class="home-similar-deals-head_flip_mid" style="font-size: 13px !important;
                                    padding-left: 22px;">
                                    Other Products You May Like</div>
                            </div>
                        </div>
                        <div class="dealsBlk iphome-widget" style="margin-left: 10px; width: 700px;">
                            <div style="width: 700px;">
                                <div class="iphome-jcarousel-skin-tango" style="width: 700px;">
                                    <div style="position: relative; display: block;" class="jcarousel-container jcarousel-container-horizontal">
                                        <div style="overflow: hidden; position: relative;" class="jcarousel-clip jcarousel-clip-horizontal">
                                            <ul class="jcarousel-list jcarousel-list-horizontal" id="iphomemycarousel" style="overflow: hidden;
                                                position: relative; margin: 0px; padding: 0px; width: 2715px; left: 0px; height: 300px;
                                                top: 0px;">
                                            </ul>
                                        </div>
                                        <div id="mycarousel-prev" class="jcarousel-prev jcarousel-next-horizontal_mid jcarousel-prev-horizontal jcarousel-prev-disabled jcarousel-prev-disabled-horizontal" style="display: block;">
                                        </div>
                                        <div id="mycarousel-next" class="jcarousel-next jcarousel-next-horizontal_mid jcarousel-next-horizontal" style="display: block;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear">
            </div>
            <div style="width: 964px; margin-left: 20px; position: relative;">
                
            </div>
            <div class="clear">
            </div>
        </div>
        <div class="clear">
        </div>
    
    
    <!--  </form>-->

</body></html>
<!-- Footer area ends here -->