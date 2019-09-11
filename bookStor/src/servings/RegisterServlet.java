package servings;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.http.*;
import database.*;
import java.lang.*;
import java.util.Enumeration;
 /* Servlet implementation class RegisterServlet
 */
public class RegisterServlet extends HttpServlet 
{
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{int flag=3;
		String message="flag is true";
		String resource=new String();
		String check=request.getParameter("eid");
		flag=retrive.checkIfRepeat(check);
		int t=3;
		String param=request.getParameter("combobox");
			if(param.equalsIgnoreCase("customer"))
			{
					t=01;
			}
		else
		{
			t=02;
		}
		String name= request.getParameter("uid");
		String eid= request.getParameter("eid");
		String npwd= request.getParameter("npwd");
		String mid= request.getParameter("mid");
		String aid= request.getParameter("aid");
		String cid= request.getParameter("cid");
		String sid= request.getParameter("sid");
		String coid= request.getParameter("coid");
		String zid = request.getParameter("zid");
		
		if(flag==1)
		{
			resource="already.html";
		}
		else if(flag==0)
		{
		Login newUser= new Login(name,eid,npwd,mid,aid,cid,sid,coid,zid,t);
		message =newUser.register();
		resource="login.jsp";
		}
		
		RequestDispatcher dispatcher= getServletContext().getRequestDispatcher("/"+resource);
		HttpSession session= request.getSession();
		session.setAttribute("message", message);
		dispatcher.forward(request, response);
		
	}

}
