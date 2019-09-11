package servings;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

//import model.InvalidUserException;

import database.Login;;

public class LoginServlet extends HttpServlet 
{
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String message=null;
		String resource="";
		String username="";
		String emailid="";
		String companyName="";
		String type=null;
		String eid=request.getParameter("eid");
		String pwd=request.getParameter("pwd");
		int role=Login.validateUser(eid,pwd);
		String name=Login.getUserName(eid);
		HttpSession session=request.getSession();
		/*String bid=(String)session.getAttribute("bookid");
		if(!(bid==null))
		{
			
		}*/
		if(role==5)
		{
			resource="user not registered.html";
			type="Administrator";
			username="Administrator";
		}
		else if(role==2)
			{
			resource="book_upload.jsp";
			type="organization";
			emailid=eid;
			username=eid;
			session.setAttribute("user", eid);
			}
			else if(role==1)
			{
					//String book_name=request.getParameter("book_name");
					//if(book_name.equals(null))
			resource="Home.jsp";
					//else
					//resource="book_details.jsp?book_name="+book_name;
			type="Customer";
			emailid=eid;
			username=eid;
			}
		else
		{
			session.invalidate();
			//logged="false";
			resource="error.jsp";
			message+="Invalid Login ...<a href=\"login.jsp\">Try Again</a>";
		}
		
		String logged="true";
		RequestDispatcher dispatcher=getServletContext().getRequestDispatcher("/"+resource);
		request.setAttribute("message", message);
       //HttpSession session=request.getSession();
		session.setAttribute("username", name);
		session.setAttribute("user", eid);
		session.setAttribute("type",type);
		session.setAttribute("logged",logged);
		session.setAttribute("emailid", emailid);
		//session.setAttribute("companyName",companyName);
		dispatcher.forward(request, response);		
	}
}
