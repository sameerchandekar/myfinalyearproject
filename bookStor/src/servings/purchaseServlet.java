package servings;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import database.*;

/**
 * Servlet implementation class purchaseServlet
 */
public class purchaseServlet extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String isbn=request.getParameter("isbn");
		String bookname=request.getParameter("bookname");
		String vendor=request.getParameter("vendorname");
		String customer=request.getParameter("emailid");
		String shipping=request.getParameter("shipping_address");
		String pincode=request.getParameter("pincode");
		String quantity=request.getParameter("quantity");
		String price=request.getParameter("price");
		retrive.purchase(isbn,bookname,vendor,customer,price,quantity,shipping,pincode);
		RequestDispatcher dispatcher=getServletContext().getRequestDispatcher("/Home.jsp");
		dispatcher.forward(request, response);		
	}

}
