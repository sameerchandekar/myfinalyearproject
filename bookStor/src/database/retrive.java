package database;
import java.sql.*;

public class retrive 
{
	public static ResultSet rs=null;
	public static ResultSetMetaData rsmd=null;
	public static bookBean b=new bookBean();
		
	 public void connect()
	{
		try
	{
Connection con=DBConnect.getConnected();
Statement smt=con.createStatement();
String sql="select * from bookdetails";
rs=smt.executeQuery(sql);
//while(rs.next())
{
	//returnObject();
}
}
catch(Exception e)
{
		
}	 
	
}
	 
	 
	static public bookBean returnOBJ()
	 {try{
		rs.next();
	 }
	 catch(Exception e)
	 {}
		return b;
		  
	 }
	
	static public void allCategory()
	{
		try{
		Connection con=DBConnect.getConnected();
		Statement smt=con.createStatement();
		String sql="select DISTINCT category from bookdetails";
		rs=smt.executeQuery(sql);
		}
		catch(Exception e)
		{
			
		}	
	}
	
	static public void selectQuery(String category)
	{
	try{
		Connection con=DBConnect.getConnected();
	Statement smt=con.createStatement();
	String sql="select * from bookdetails where category='"+category+"'";
	rs=smt.executeQuery(sql);
	rsmd=rs.getMetaData();
	}
	catch(Exception e)
	{
		
	}

	}

	public static bookBean setRS()
	{
		try{
		rs.next();	
		b.setBookname(rs.getString("Bookname"));
		b.setAuthor(rs.getString("author"));
		b.setCategory(rs.getString("category"));
		b.setDiscount(rs.getDouble("discount"));
		b.setEdition(rs.getString("edition"));
		b.setIsbn(rs.getString("isbn"));
		b.setPhoto(rs.getString("image"));
		b.setPrice(rs.getFloat("price"));
		b.setPublication(rs.getString("publication"));
		b.setReleasedate(rs.getString("releaseDate"));
		}
		catch(Exception e)
		{
			
		}
		return b;
		}
public static bookBean book_detailsDisplay(String book_name)
{	 try
	{
	Connection con=DBConnect.getConnected();
	Statement smt=con.createStatement();
	//System.out.print(book_name);
	
	String sql="select * from bookdetails where BookName='"+book_name+"'";
	ResultSet rs=smt.executeQuery(sql);
	ResultSetMetaData rsmd=rs.getMetaData();
	//rsmd.getColumnName(3);
	//int count=rsmd.getColumnCount();
	//System.out.print(rsmd.getColumnName(3));
	if(rs.next())
		//System.out.print("rs executed");
		//System.out.print(rs.getString(3));
		b.setBookname(rs.getString("BookName"));
		b.setAuthor(rs.getString("author"));
		b.setReleasedate(rs.getString("releaseDate"));
		b.setPublication(rs.getString("publication"));
		b.setPrice(rs.getFloat("price"));
		b.setDiscount(rs.getFloat("discount"));
		b.setIsbn(rs.getString("isbn"));
		//this.setPhoto(rs.getString(8));
		b.setCategory(rs.getString("category"));
		//b.setTimestamp(rs.getInt(10));
		b.setEdition(rs.getString("edition"));
}
	catch(Exception e)
	{	
		
		System.out.print(e);
	}
	return b;	
}

static public int checkIfRepeat(String email)
{
	int flag=0;
try
{
	Connection con=DBConnect.getConnected();
Statement smt=con.createStatement();
String sql="select email_id from bookdetails where email_id='"+email+"'";
ResultSet rs=smt.executeQuery(sql);
if(rs.next())
	flag=0;
else
	flag=0;
}
catch(Exception e)
{}
return flag;
	}



@SuppressWarnings("unused")
public static void checkWishList(String bookname,String author)
{
	try{
		System.out.print(bookname+"   "+author);
Connection conn=DBConnect.getConnected();
Statement smtt=conn.createStatement();
//smt.setString(1, bookname);
//smt.setString(2, author);
String sql;
String sq="SELECT * FROM wishlist WHERE bookname='"+bookname+"'AND author='"+author+"'";

//System.out.print(finalquery);
ResultSet rs=smtt.executeQuery(sq);

while(rs.next())
{ String msg="Dear customer your wished book "+rs.getString("bookname")+" by "+rs.getString("author")+"is now available";
System.out.print("while loop");	
//SMTPSend.main(null);
	SMTPSend s=new SMTPSend();
	s.msgsend(rs.getString("mobile_no"),msg);
	String delete="delete from wishlist where bookname='"+rs.getString(1)+"'";
	smtt.executeQuery(delete);
	
	}
}
catch(Exception e)
{System.out.print(e);
	}
	System.out.print(" check method executed completly");
}


public static String[] vendors(String bookname)
{  String[] a=new String[10];
try
{
	Connection con=DBConnect.getConnected();
	Statement smt=con.createStatement();
	String query="select vendor_name from bookdetails where BookName='"+bookname+"'";
	ResultSet rs=smt.executeQuery(query);
	int i=0;
	while(rs.next())
	{
		a[i]=rs.getString("vendor_name");
		System.out.print(a[i]);
		i++;
	}
}
catch(Exception e)
{}
	return a;
	}
public static void purchase(String isbn,String bookname,String vendor,String customer,String price,String quantity,String shipping,String pincode)
{System.out.print("vendor name is"+vendor);
	//vendor="sanjay book depot";
vendor=vendor+" book depot";
	try{
		int quanti=Integer.parseInt(quantity);
Float pric=Float.parseFloat(price);
pric=quanti*pric;
	Connection cn=DBConnect.getConnected();
	PreparedStatement ps=cn.prepareStatement("insert into buy_table values(?,?,?,?,?,?,?,?)");
	ps.setString(1, isbn);
	ps.setString(2, bookname);
	ps.setString(3, vendor);
	ps.setString(4, customer);
	ps.setString(5, shipping);
	ps.setInt(6,quanti);
	ps.setFloat(7, pric);
	ps.setString(8, "pending");
	int a=0;
	a=ps.executeUpdate();
	System.out.print(a);
	if(a>0)
		//reduceQuantity(quantity,vendor,bookname,isbn);
	cn.close();
}catch(Exception e)
{
	System.out.print(e);}
}
public static void reduceQuantity(String quantity,String vendor,String bookname)
{System.out.print(vendor);
System.out.print("\n");
System.out.print(bookname);
	try{
	Connection con=DBConnect.getConnected();
	Statement smt=con.createStatement();
	String sql="select quantity from bookdetails where vendor_name=\""+vendor+"\" and BookName='"+bookname+"'";
	System.out.print(sql+"\n");
	ResultSet rsa=smt.executeQuery(sql);
	rsa.next();
	int quant=rsa.getInt("Quantity");
	System.out.print(quant);
	//int pq=Integer.parseInt(quant);
	int rq=Integer.parseInt(quantity);
	
	int comp=quant-rq;
	System.out.print(comp);
	if(comp>0)
	{
		String query="update bookdetails set quantity="+comp+" where vendor_name=\""+vendor+"\" and BookName=\""+bookname+"\"";
		System.out.print(query);
		smt.executeQuery(query);
	}
	else
	{
		System.out.print("deleted");
		String query="delete from bookdetails where vendor_name=\""+vendor+"\"and BookName=\""+bookname+"\"";
		smt.executeQuery(query);	
	}
	
	}
	catch(Exception e)
	{
		
	}
	
	System.out.print("method completely executed");
}
}