package servings;

import java.io.DataInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import database.*;
/**
 * Servlet implementation class UploadServlet
 */
public class UploadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		PrintWriter pw=response.getWriter();
		
		/*String saveFile;
		int MAX_SIZE=100000;
		String s=request.getParameter("filename");
		
		ServletOutputStream out=null;
		DataInputStream in=null;
		FileOutputStream fileOut=null;
		
		try{
			response.setContentType("text/html");
			//out=response.getOutputStream();
		}
		
		catch(Exception e){
			System.out.println("Error getting output stream");
			System.out.println("Error description"+ e);
			return;
			
		}
		String file;
		//try{
			String contentType=request.getContentType();
			//pw.println(contentType);
			pw.println();
			//pw.println(contentType.length());
			pw.println();
			if(contentType !=null && contentType.indexOf("multipart/form-data") != -1)
			{
				in =new DataInputStream(request.getInputStream());
				int formDataLength=request.getContentLength();
				if(formDataLength>MAX_SIZE){
					pw.println("sorry file is too large to upload");
					pw.flush();
					return;
					}
				byte dataBytes[]=new byte[formDataLength];
				int bytesRead=0;
				int totalBytesRead=0;
				while (totalBytesRead<formDataLength){
					bytesRead=in.read(dataBytes, totalBytesRead, formDataLength);
					totalBytesRead +=bytesRead;
					}
				 file=new String(dataBytes);
			//	pw.print(file);
			pw.print("<br/>");
			pw.print("<br/>");
			pw.print("<br/>");
			pw.print("<br/>");
			pw.print("<br/>");
				dataBytes=null;
				int lastIndex=contentType.lastIndexOf("=");
				String boundary=contentType.substring(lastIndex+1,contentType.length());	
				
			
		
		saveFile=file.substring(file.indexOf("filename=\"")+10);
		saveFile=saveFile.substring(0,saveFile.indexOf("\n"));
		saveFile=saveFile.substring(saveFile.lastIndexOf("\\")+1,saveFile.indexOf("\""));
		int pos;
		pos=file.indexOf("filename=\"");
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		int boundaryLocation=file.indexOf(boundary,pos);
		String imagefile=file.substring(pos,boundaryLocation-2);
		String filename=new String("C:\\Users\\sameer\\workspace\\bookStor\\WebContent\\images\\"+saveFile);
		pw.print(imagefile);
		pos=file.indexOf("name=\"bid\"");
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		boundaryLocation=file.indexOf(boundary,pos);
		*/
		String bookName=request.getParameter("bid");//file.substring(pos,boundaryLocation-2);
		//pw.print(bookName);
		//pw.print("</br>");
		/*pos=file.indexOf("name=\"aid\"");
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		boundaryLocation=file.indexOf(boundary,pos);
		*/String author=request.getParameter("aid");//file.substring(pos,boundaryLocation-2);
		//pw.print(author);pw.print("</br>");
		/*pos=file.indexOf("name=\"pbid\"");
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		boundaryLocation=file.indexOf(boundary,pos);
		*/String pubdate=request.getParameter("pbid");//file.substring(pos,boundaryLocation-4);
		//pw.print(pubdate);pw.print("</br>");
		/*pos=file.indexOf("name=\"pbnid\"");
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		boundaryLocation=file.indexOf(boundary,pos);
		*/String publisher=request.getParameter("pbnid");//file.substring(pos,boundaryLocation-2);
		//pw.print(publisher);pw.print("</br>");
		/*pos=file.indexOf("name=\"price\"");
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		boundaryLocation=file.indexOf(boundary,pos);
		*/String price=request.getParameter("price");//file.substring(pos,boundaryLocation-2);
		//pw.print(price);pw.print("</br>");
		/*pos=file.indexOf("name=\"discount\"");
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		boundaryLocation=file.indexOf(boundary,pos);
		*/String discount=request.getParameter("discount");//file.substring(pos,boundaryLocation-2);
		//pw.print(discount);pw.print("</br>");
		/*pos=file.indexOf("name=\"isbnid\"");
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		boundaryLocation=file.indexOf(boundary,pos);
		*/String isbn=request.getParameter("isbnid");//file.substring(pos,boundaryLocation-2);
		//pw.print(isbn);pw.print("</br>");
		/*pos=file.indexOf("name=\"edid\"");
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		boundaryLocation=file.indexOf(boundary,pos);
		*/String edition=request.getParameter("edid");//file.substring(pos,boundaryLocation-2);
		//pw.print(edition);pw.print("</br>");
		
		/*pos=file.indexOf("name=\"caid\"");
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		boundaryLocation=file.indexOf(boundary,pos);
		*/String category=request.getParameter("caid");//file.substring(pos,boundaryLocation-2);
		//pw.print(category);pw.print("</br>");
		/*pos=file.indexOf("name=\"qid\"");
		pos=file.indexOf("\n",pos)+1;
		pos=file.indexOf("\n",pos)+1;
		boundaryLocation=file.indexOf(boundary,pos);
		*/String quantity=request.getParameter("qid");//file.substring(pos,boundaryLocation-4);
		//pw.print(quantity);pw.print("</br>");
		//File checkFile=new File(filename);
		/*if(checkFile.exists())
		{
			if(!overWrite.toLowerCase().equals("true"))
			{
				if(overWritePage.equals(""))
				{
					out.println("sorry, file already exists");
				}
				else
				{
					response.sendRedirect(overWritePage);
				}
				return;
			}
		}*/
		//File fileDir=new File(rootPath + directory);
		//if(!fileDir.exists())
		//{
		//	fileDir.mkdirs();
		//}
		/*fileOut=new FileOutputStream(filename);
		fileOut.write(imagefile.getBytes(),0,imagefile.length());
	*/	/*if(successPage.equals(""))
		{
			out.println(successMessage);
			out.println("file written to :"+ filename);
		}
		else
		{
			response.sendRedirect(successPage);
		}*/
	    
	/*}
	else
	{
		out.println("request not multipart/form-data");
	}
   }
	catch(Exception e)
	{
		try{
			System.out.println("error in doPost" + e)
			out.println("an unexpected err has occured");
			out.println("error descriptio" + e);
		}
		catch(Exception e){
			
		}
		finally
		{
			try{*/
		//		fileOut.close();
			/*}
			catch(Exception f){
				
			}
			try{*/
			//	in.close();
			/*}
			catch(Exception f){
				
			}
			try{
				*///out.close();/*
			/*}
			catch(Exception f){
				
			}
		}
	}*/
			/*}
		catch(Exception e)
		{}*/
		
		
		//}
					
		
		
		response.setContentType("text/html");
		//PrintWriter pw=response.getWriter();
    
	
	//pw.print("price is at last:"+price);
	float pricee=Float.parseFloat(price);
	float disc=Float.parseFloat(discount);
	//pw.print(quantity.length());
	int quant=Integer.parseInt(quantity);
	//int pdate=Integer.parseInt(pubdate);
	String vendor=(String)request.getSession().getAttribute("username");
	String saveFile=request.getParameter("image");
	int a=saveFile.lastIndexOf("\\");
	saveFile=saveFile.substring(a+1,saveFile.length());
	bookBean b=new bookBean(bookName,author,pubdate,publisher,pricee,disc,isbn,saveFile,category,edition,vendor,quant);
	b.insert();
	//int a=
	//SMTPSend p=new SMTPSend();
	//p.msgsend();
	//bookName.trim();
	//bookName.toString();
	//author.trim();
	//author.toString();
	retrive.checkWishList(bookName,author);
	
	pw.print("data inserted");
	RequestDispatcher dispatcher=getServletContext().getRequestDispatcher("/book_upload.jsp");
	dispatcher.forward(request, response);
			}
			}
	
	
	
	
