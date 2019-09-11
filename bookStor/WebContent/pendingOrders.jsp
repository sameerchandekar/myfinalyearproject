<%@ page language="java" import="database.*" import="java.sql.*" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
<center>
<%@include file="header.jsp" %>
<%
String vendorid=(String)request.getSession().getAttribute("username");

%>
<a href="book_upload.jsp">Book Upload</a>
<form action="pendingOrdersServlet" method="post">
<table class="th" bgcolor="#affffff" border="0" cellpadding="2" cellspacing="0" width="100%">
<tr>
<td>Mark if delivered</td>
<td>ISBN</td>
<td>Book Name</td>
<td>Customer name</td>
<td>Shipping address</td>
<td>Quantity</td>
<td>Total cost</td>
</tr>
<%
String sql;
Connection con=DBConnect.getConnected();
Statement smt=con.createStatement();
sql="select * from buy_table where status='pending' and vendor_name='"+vendorid+"'";
ResultSet rs=smt.executeQuery(sql);
%>

<% 
while(rs.next())
{
	
%>
<tr>
<td><input name="t" type="checkbox" value="<%=rs.getString(2)%>"></td>
<input name="customer" type="hidden" value="<%=rs.getString(4)%>">
<input name="quantity" type="hidden" value="<%=rs.getString(6)%>">
<td><%=rs.getString(1)%></td>
<td><%=rs.getString(2)%></td>
<td><%=rs.getString(4)%></td>
<td><%=rs.getString(5)%></td>
<td><%=rs.getString(6)%></td>
<td><%=rs.getString(7)%></td>
</tr>

<%
}
%>

</table>
<input type="submit" value="Delivered">
</form>
<%@include file="footer.html" %>
</center>
</body>
</html>