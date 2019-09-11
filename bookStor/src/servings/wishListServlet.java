package servings;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.*;

import database.DBConnect;

/**
 * Servlet implementation class wishListServlet
 */
public class wishListServlet extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{PrintWriter pw=response.getWriter();
	response.setContentType("text/html");
     String name=request.getParameter("bookname");
     String author=request.getParameter("author");
     String mobile=request.getParameter("mobileno");
     String emailid=(String)request.getSession().getAttribute("emailid");
     try{
     Connection con=DBConnect.getConnected();
    PreparedStatement ps=con.prepareStatement("insert into wishlist values(?,?,?,?)");
    ps.setString(1, name);
    ps.setString(2, author);
    ps.setString(3, emailid);
    ps.setString(4, mobile);
    int flag=ps.executeUpdate();
    if(flag>0)
    {
    	pw.print("You will be notified when book gets available");
    	RequestDispatcher dispatcher=getServletContext().getRequestDispatcher("/Home.jsp");
    	dispatcher.forward(request, response);		
    }
     }
     catch(Exception e)
     {
    	 
     }
	}

}
