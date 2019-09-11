package database;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnect 
{
	static Connection con=null;
	public static Connection getConnected()
	{
		try {
			Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
			con=DriverManager.getConnection("jdbc:odbc:bookStore");
		} 
		catch (Exception e) 
		{
			
		}
		return con;
	}
}
