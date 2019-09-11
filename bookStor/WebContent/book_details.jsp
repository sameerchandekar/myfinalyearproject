<%@ page language="java" import="database.*" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<center>
<jsp:include page="header.jsp"></jsp:include>
<%
String book_name=request.getParameter("book_name");
//out.print(book_name+"</br>");
bookBean b1=new bookBean();
b1=retrive.book_detailsDisplay(book_name);
%>
<form action="shipping_address.jsp" method="post">
<%
out.print("Book name    :<input type=\"text\" name=\"bookname\" value=\""+retrive.b.getBookname()+"\" readonly=\"readonly\" size=\"100\"/>");
out.print("<br/>");out.print("<br/>");
out.print("Author       :<input type=\"text\" name=\"author\" value=\""+b1.getAuthor()+"\" readonly=\"readonly\" size=\"100\"/>");
out.print("<br/>");out.print("<br/>");
out.print("Edition      :<input type=\"text\" name=\"edition\" value=\""+b1.getEdition()+"\" readonly=\"readonly\" size=\"100\"/>");
out.print("<br/>");out.print("<br/>");
out.print("Publicaton   :<input type=\"text\" name=\"publication\" value=\""+b1.getPublication()+"\" readonly=\"readonly\" size=\"100\"/>");
out.print("<br/>");out.print("<br/>");
out.print("Release Date :<input type=\"text\" name=\"releasedate\" value=\""+b1.getReleasedate()+"\" readonly=\"readonly\" size=\"100\"/>");
out.print("<br/>");out.print("<br/>");
out.print("Discount     :<input type=\"text\" name=\"discount\" value=\""+b1.getDiscount()+"\" readonly=\"readonly\" size=\"100\"/>");
out.print("<br/>");out.print("<br/>");
out.print("Price     :<input type=\"text\" name=\"price\" value=\""+b1.getPrice()+"\" readonly=\"readonly\" size=\"100\"/>");
out.print("<br/>");out.print("<br/>");
out.print("Vendors:"+"</br>");
out.print("<input type=\"hidden\" name=\"isbn\" value=\""+b1.getIsbn()+"\">");
out.print("<select name=\"vendorname\" tabindex=\"100\">");
String vendorlist[]=retrive.vendors(b1.getBookname());
System.out.print(vendorlist.length);
for(int i=0;i<4;i++)
{
	System.out.print(vendorlist[i]);
	//out.print("<input type=hidden name=vendorname value="+vendorlist[i]+">");
out.print("<option name="+vendorlist[i]+" value="+vendorlist[i]+">"+vendorlist[i]+"</option>");
}
out.print("</select>");
out.print("<br/>");
if(request.getSession().getAttribute("logged")=="true")
out.print("<input type=\"submit\" name=\"\" value=\"Buy\"/>");
else
out.print("<a href=\"login.jsp\">Please login to buy</a>");
%>
</form>

<jsp:include page="footer.html"></jsp:include>
</center>
</body>
</html>