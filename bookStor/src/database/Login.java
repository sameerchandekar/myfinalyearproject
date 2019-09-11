package database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class Login 
{	
	private String name;
	private String eid;
	private String pwd;
	 String mid;
	
	private String aid;
	private String cid;
	private String sid;
	private String coid;
	int zip;
	private String userid;
	private String password;
	private int role=0;
	
	public Login() {
		
	}

	public Login(String userid, String password, int role) {
		super();
		this.eid = userid;
		this.pwd = password;
		this.role = role;
	}
	public Login(String name,String eid,String pwd,String mid,String aid,String cid,String sid,String coid,String zip,int role)
	{
		super();
		this.name = name;
		this.eid = eid;
		this.pwd = pwd;
		 this.mid=mid;
		this.aid = aid;
		this.cid = cid;
		this.sid = sid;
		this.coid = coid;
		String zipI= zip;
		 this.zip=Integer.parseInt(zipI);
		 this.role=role;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getRole() {
		return role;
	}

	public void setRole(int role) {
		this.role = role;
	}

	public static int validateUser(String uid, String pwd)
	{
		int role=5;
		try {
			Connection con=DBConnect.getConnected();
			PreparedStatement ps=con.prepareStatement("select * from usertable where email_id=? and password=?");
			ps.setString(1, uid);
			ps.setString(2, pwd);
			ResultSet rs=ps.executeQuery();
			if(rs.next())
			{
				role=rs.getInt("type");
			}
		} 
		catch (Exception e)
		{
		e.printStackTrace();	
		}
		return role;
	}

	public static String getCompany(String eid) {
		String company=null;
		try {
			Connection con=DBConnect.getConnected();
			PreparedStatement ps=con.prepareStatement("select company_code from policy.companylogin where email_id=?");
			ps.setString(1, eid);
			ResultSet rs=ps.executeQuery();
			rs.next();
			int code=rs.getInt(1);
			ps=con.prepareStatement("select company_name from policy.insurance_company where company_code=?");
			ps.setLong(1, code);
			rs=ps.executeQuery();
			rs.next();
			company=rs.getString(1);
		} 
		catch (Exception e)
		{
		e.printStackTrace();	
		}
		return company;
	}

	public String register() 
	{
		String message=null;
		try {
		
			Connection con=DBConnect.getConnected();
			PreparedStatement ps=con.prepareStatement("insert into usertable values(?,?,?,?,?,?,?,?,?,?)");
			ps.setString(1,name );
			ps.setString(2,eid );
			ps.setString(3,pwd );
			ps.setString(4,mid);
			ps.setString(5,aid );
			ps.setString(6,cid );
			ps.setString(7,sid );
			ps.setString(8, coid);
			ps.setInt(9,zip);
			ps.setInt(10, role);
			int i= ps.executeUpdate();
			 if(i!=0)
				 message = "You registered successfully";
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
		}
		
		return message;
		
		
	}
	
	
	public static String getUserName(String eid) {
		String username=null;
		try {
			Connection con=DBConnect.getConnected();
			PreparedStatement ps=con.prepareStatement("select name from usertable where email_id=?");
			ps.setString(1, eid);
			ResultSet rs=ps.executeQuery();
			if(rs.next())
			username=rs.getString("name");
			
		} 
		catch (Exception e)
		{
		e.printStackTrace();	
		}
		return username;
	}

}
