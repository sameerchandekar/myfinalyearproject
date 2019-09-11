<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8">-->
<title>Insert title here</title>
<script type="text/javascript">
function validate(f)
{   setHiddenValues();
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
</head>
<body>
<center>
<%@include file="header.jsp" %>
<a href="pendingOrders.jsp">pending orders</a>
<table>




<tr><td colspan="2">
<!-- Content Place Holder -->
<br><h1 >Upload of Book Below:</h1>
<hr width="500"></td></tr>
<form name="upload" action="UploadServlet" method="post">
<table width="1000" cellpadding="5" cellspacing="1">


<tr>
<td align="right">* Name of Book:</td>
<td align="left"><input type="text" name="bid"></td>
</tr>
<tr>
<td align="right">* Name of the Author:</td>
<td align="left"><input type="text" name="aid"></td>
</tr>
<tr>
<div class="ui.datepicker.jquery.json">

</div>
<td align="right">* Publication Date:</td>
<td align="left"><input type="text" name="pbid"></td>
</tr>
<tr>
<td align="right">* Publisher Name:</td>
<td align="left"><input type="text" name="pbnid"></td>
</tr>
<tr>
<td align="right">* Price:</td>
<td align="left"><input type="text" name="price"></td>
</tr>
<tr>

<td align="right">* Discount:</td>
<td align="left"><input type="text" name="discount"></td>
</tr>
<tr>
<td align="right">* ISBN Number:</td>
<td align="left"><input type="text" name="isbnid"></td>
</tr>
<tr>
<td align="right">* Edition:</td>
<td align="left"><input type="text" name="edid"></td>
</tr>
<tr>
<td align="right">* Category:</td>
<td align="left"><input type="text" name="caid"></td>
</tr>
<tr>
<td align="right">* Upload Image:</td>
<td align="left"><input type="file" name="image"></td>
</tr>

<tr>
<td align="right">* Quantity:</td>
<td align="left"><input type="text" name="qid"></td>
</tr>
<tr>
<td align="right"><input type="submit" value="Upload" name="b1" onclick='return validate(this.form)' ></td>
<td align="left"><input type="reset" value="Reset"></td>
</tr>


</table>

Please fill the above fields.Fields marked with * are mandatory.

</form>

</td>
</tr>

<tr>

</tr>

</table>




<%@include file="footer.html" %>
</center>



</body>
</html>