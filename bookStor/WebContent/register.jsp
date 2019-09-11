<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Register</title>

<script type="text/javascript">
function validate(f)
{
	if(checkEmail(f) && checkPass(f) )
		return true;
	return false;
}

function checkPass(f)
{
	var a=f.npwd.value;
	var b=f.cpwd.value;
	
	if(a=='' && b=='')
		{
		alert("Password ERROR:Passwords should not be blank");
		return false;
		}
	else if(a.length<6)
		{
		alert("Password ERROR:Password too short");
		return false;
		}
	else if(a!=b)
		{
			alert("Password ERROR:Passwords Mismatched");
			return false;
		}
	else
		return true;
}


function checkEmail(f)
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
<table>

<tr>
<td colspan="2"><jsp:include page="header.jsp"></jsp:include></td>
</tr>

<tr><td colspan="2">
<!-- Content Place Holder -->
<br><h1 >Enter Your Valid Details</h1>
<hr width="500"></td></tr>
<form action="RegisterServlet" method="post" name="reg">
<table width="1000" cellpadding="5" cellspacing="1">

<tr>
<td align="right">* Select user type</td>
<td align="left">
		<select name=combobox>
  		<option value="customer" value="customer">Customer</option>
  		<option value="vandor" value="vendor">Vendor</option>
  		</select> 
</td>
</tr>
<tr>
<td align="right">* Enter User Name</td>
<td align="left"><input type="text" name="uid"></td>
</tr>
<tr>
<td align="right">* Enter E-mail ID</td>
<td align="left"><input type="text" name="eid"></td>
</tr>
<tr>
<td align="right">* Enter Password:</td>
<td align="left"><input type="password" name="npwd"></td>
</tr>

<tr>
<td align="right">* Confirm Password:</td>
<td align="left"><input type="password" name="cpwd"></td>
</tr>

<tr>
<td align="right">* mobile_no:</td>
<td align="left"><input type="text" name="mid"></td>
</tr>

<tr>
<td align="right">* Address :</td>
<td align="left"><input type="text" name="aid"></td>
</tr>

<tr>
<td align="right">* city:</td>
<td align="left"><input type="text" name="cid"></td>
</tr>

<tr>
<td align="right">* state:</td>
<td align="left"><input type="text" name="sid"></td>
</tr>

<tr>
<td align="right">* country:</td>
<td align="left"><input type="text" name="coid"></td>
</tr>


<tr>
<td align="right">* zip:</td>
<td align="left"><input type="text" name="zid"></td>
</tr>




<tr>
<td align="right"><input type="submit" value="Register" name="b1" onclick='return validate(this.form)'></td>
<td align="left"><input type="reset" value="Reset"></td>
</tr>

<tr>
<td></td>
<td></td>
</tr>

</table>

Please fill the above fields.Fields marked with * are mandatory.

</form>

</td>
</tr>

<tr>

</tr>

</table>


<table>

<tr>
<td colspan="2"><jsp:include page="footer.html"></jsp:include></td>
</tr>
</table>

</center>
</body>
</html>



