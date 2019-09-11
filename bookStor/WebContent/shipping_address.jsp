<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
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

<table width="1000" cellpadding="5" cellspacing="1">


<tr>
<td align="right">* ISBN:</td>
<%out.print("<td>"+request.getParameter("isbn")+"</td>"); %>

</tr>

<tr>
<td align="right">* book name</td>
<%out.print("<td>"+request.getParameter("bookname")+"</td>"); %>
</tr>

<tr>
<td align="right">* vendor_name</td>

<%//System.out.print(request.getParameter("vendorname"));
out.print("<td>"+request.getParameter("vendorname")+" book depot"+"</td>"); %>
</tr>

<tr>
<td align="right">* customer_name</td>
<%out.print("<td>"+request.getSession().getAttribute("user")+"</td>"); %>
</tr>
<form action="BuyServlet" method="post" name="reg">
<tr>
<td align="right">* shipping_address</td>
<td align="left"><input type="text" name="shipping_address" size="100"></td>
</tr>

<tr>
<td align="right">* Pin Code</td>
<td align="left"><input type="text" name="pincode" size="100"></td>
</tr>
<tr>
<td align="right">* quantity</td>
<td align="left"><input type="text" name="quantity"></td>
</tr>

<tr>
<td align="right">* Price</td>
<%out.print("<td>"+request.getParameter("price")+"</td>"); %>
</tr>

<tr>
<td align="right"><input type="submit" value="Purches" name="b1" ></td>
<td align="left"><input type="reset" value="Reset"></td>
</tr>

</table>

Please fill the above fields.Fields marked with * are mandatory.
<% out.print("<input type=\"hidden\" name=\"isbn\" value=\""+request.getParameter("isbn")+"\">");%>
<% out.print("<input type=\"hidden\" name=\"bookname\" value=\""+request.getParameter("bookname")+"\">");%>
<% out.print("<input type=\"hidden\" name=\"vendor\" value=\""+request.getParameter("vendorname")+"\">");%>
<% out.print("<input type=\"hidden\" name=\"price\" value=\""+request.getParameter("price")+"\">");%>
<% out.print("<input type=\"hidden\" name=\"emailid\" value=\""+request.getSession().getAttribute("emailid")+"\">");%>
</form>
<jsp:include page="footer.html"></jsp:include>
</center>


</body>
</html>