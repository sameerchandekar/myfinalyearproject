package database;
import java.sql.*;
import database.*;
public class sameer
{
	
public static void main(String args[])
{bookBean b=new bookBean();
	try
	{
	Connection con=DBConnect.getConnected();
	Statement smt=con.createStatement();
	String sql="select * from bookdetails where BookName=\'The Leader Who Had No Title\'";
	ResultSet rs=smt.executeQuery(sql);
	ResultSetMetaData rss=rs.getMetaData();
	//rss.get
	
	
	while(rs.next())
	{
		String p=rs.getString("BookName");
		b.setAuthor(p);
		System.out.println(b.getAuthor());
	}
	}
	catch(Exception e)
	{
		
	}
	System.out.print(b.getAuthor());
	}
}
