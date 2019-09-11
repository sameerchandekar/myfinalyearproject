package servings;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import database.retrive;

public class BuyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    	{PrintWriter pw=response.getWriter();
    	
    		//get book id;
    		String bid="";
    		
    		String customer=(String) request.getSession().getAttribute("username");
    		String isbn=request.getParameter("isbn");
    		String bookname=request.getParameter("bookname");
    		String vendor=request.getParameter("vendor");
    		String price=request.getParameter("price");
    		String emailid=request.getParameter("emailid");
    		String shipping_address=request.getParameter("shipping_address");
    		String pincode=request.getParameter("pincode");
    		String quantity=request.getParameter("quantity");
    		//String emailid=request.getParameter("emailid");
    		//pw.print(customer);
    		//pw.print(isbn);
    		retrive.purchase(isbn,bookname,vendor,customer,price,quantity,shipping_address,pincode);
    		/*HttpSession s=request.getSession();
    		String logged=(String)s.getAttribute("logged");
    		
    	
    		if(logged.equalsIgnoreCase("true"))
    		{
    			target="Home.jsp";
    		}
    		else
    		{
    			target="login.jsp";
    		}
    		s.setAttribute("bookid", bid);*/
    		String target="Home.jsp";
    		RequestDispatcher dispatcher=getServletContext().getRequestDispatcher("/"+target);
    		dispatcher.forward(request, response);
	}

}
