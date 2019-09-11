package database;
import java.sql.*;
import java.io.*;

public class temp 
{
	public void connect()
	{
try{
	Connection con=DBConnect.getConnected();
	Statement smt=con.createStatement();
	ResultSet rs=smt.executeQuery("select * from bookdetails where publication='Pearson'");
	while(rs.next())
	{
		System.out.print(rs.getString("category"));
	}
}
catch(Exception e)
{
	}
	}
public void main(String a[])
{
	temp t=new temp();
	t.connect();
	}
}	

