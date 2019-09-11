package servings;

import java.io.IOException;
import java.sql.*;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import database.DBConnect;
import database.retrive;

/**
 * Servlet implementation class pendingOrdersServlet
 */
public class pendingOrdersServlet extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{String vendor=(String) request.getSession().getAttribute("username");
		PrintWriter pw=response.getWriter();
		try{
			Connection con=DBConnect.getConnected();
			//Statement smt=con.createStatement();
			String[] SelectedValues = request.getParameterValues("t");
			String[] customername=request.getParameterValues("customer");
			String[] quantity=request.getParameterValues("quantity");
			for(int i=0;i<SelectedValues.length;i++)
			{		
retrive.reduceQuantity(quantity[i], vendor, SelectedValues[i]);
			PreparedStatement ps=con.prepareStatement("update buy_table set status='delivered' where book_name='"+SelectedValues[i]+"' and customer_name='"+customername[i]+"'");
			ps.executeUpdate();
			ps.close();
			}
		response.setContentType("text/html");
		
		
		}
		catch(Exception e)
		{
			pw.print(e);
		}
		RequestDispatcher dispatcher=getServletContext().getRequestDispatcher("/"+"pendingOrders.jsp");
		dispatcher.forward(request, response);
	}

}
