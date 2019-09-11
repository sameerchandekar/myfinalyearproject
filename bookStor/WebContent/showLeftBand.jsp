<%@ page language="java" import="database.*" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="homeBannerDeals_jul20" style="margin_top: 359px;" id="ip-1-filterstop">
            <div class="homeBannerDeals_heading_outer_jul20">
            <div class="homeBannerDeals_heading_jul20">
            <a><div class="homeBannerDeals_head_text_jul20">Book Categories</div></a>
            </div>
            </div>
            
            <div class="homeBannerDeals_cont_outer_jul2012">
            <div class="leftFiltersJew" id="ip-1-filters">
            <ul>
            <% 
            retrive.allCategory();
            while(retrive.rs.next())
            {String category=retrive.rs.getString(1);
            out.print("<li class=\"listitemsnew\">");
            out.print("<a href=\"showCategoryWise.jsp?category="+category);
            out.print("\">");
            out.print(category);
            out.print("</a>");
            out.print("</li>");
            }
            %>
            </ul>
            <!--listitemsnew-->
            </div>
            </div>
            </div>
</body>
</html>