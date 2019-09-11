<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head profile="http://gmpg.org/xfn/11">
<title>News Magazine</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="imagetoolbar" content="no" />
<link rel="stylesheet" href="styles/layout.css" type="text/css" />
<script type="text/javascript" src="scripts/jquery-1.4.1.min.js"></script>
<script type="text/javascript" src="scripts/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="scripts/jquery.timers.1.2.js"></script>
<script type="text/javascript" src="scripts/jquery.galleryview.2.1.1.min.js"></script>
<script type="text/javascript" src="scripts/jquery.galleryview.setup.js"></script>
</head>
<body id="top">
<div class="wrapper col0">
  <div id="topline">
    <p></p>
    <ul>
      <li><a href="Home.jsp">Home</a></li>
      <%
      try{
     String logged=null;
     //session.setAttribute("logged", "true");
      logged=(String)request.getSession().getAttribute("logged");
      if(logged==null)
      {
      out.print("<li><a href=\"login.jsp\">Login</a></li>");
      out.print("<li><a href=\"register.jsp\">Register User</a></li>");
      }
      else if(logged.equals("true"))
      {
    	  
      out.print("<li><a href=\"login.jsp\">"+session.getAttribute("user")+"</a></li>");
      out.print("<li><a href=\"LogoutServlet\"><b>Log out</b></a></li>");
      out.print("<li><a href=\"wishList.jsp\">add wish</a></li>");
      }
      
      }
      catch(Exception e)
      {
    	 
      }
   	  %>
   	  
     <li><a href="#">About Us</a></li>
    </ul>
    <br class="clear" />
  </div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
  <div id="header">
    <div class="fl_left">
      <h1><a href="#"><strong>B</strong>ook <strong>S</strong>tore</a></h1>

    </div>
    <div class="fl_right"><a href="#"><img src="" alt="" /></a></div>
    <br class="clear" />
  </div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper col2">
  <div id="topbar">
    <div id="topnav">
      <ul>
        
      </ul>
    </div>
    
    <br class="clear" />
  </div>
</div>
</body>
</html>