package database;

import java.io.File;
import java.sql.*;

public class bookBean 
{
	String author;
	String releasedate;
	String publication;
	double price;
	double discount;
	String isbn;
	String photo;
	String category;
	long timestamp;
	String edition;
	String binding;
	long quantity;
	String vendor;
	
	
	public String getVendor() {
		return vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public bookBean()
	{
		super();
	}
	
	public bookBean(String bookname, String author, String releasedate,
			String publication, float price, float discount, String isbn,
	 String photo, String category,
			String edition,String vendorr,int quantity) {
		super();
		
		this.bookname = bookname;
		this.author = author;
		this.releasedate = releasedate;
		this.publication = publication;
		this.price = price;
		this.discount = discount;
		this.isbn = isbn;
		this.photo = photo;
		this.category = category;
		//this.timestamp = timestamp;
		this.edition = edition;
		this.quantity = quantity;
		this.vendor=vendorr;
	}
	String bookname;
	public String getBookname() {
		return bookname;
	}

	public void setBookname(String bookname) {
		this.bookname = bookname;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getReleasedate() {
		return releasedate;
	}

	public void setReleasedate(String releasedate) {
		this.releasedate = releasedate;
	}

	public String getPublication() {
		return publication;
	}

	public void setPublication(String publication) {
		this.publication = publication;
	}

	public double getPrice() {
		
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

	public String getEdition() {
		return edition;
	}

	public void setEdition(String edition) {
		this.edition = edition;
	}

	public String getBinding() {
		return binding;
	}

	public void setBinding(String binding) {
		this.binding = binding;
	}

	public long getQuantity() {
		return quantity;
	}

	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	
	
	
	
	public int insert()
	 {int a=0;
		 try
			{
			 System.out.print("data inserted");
		Connection con=DBConnect.getConnected();
		PreparedStatement ps=con.prepareStatement("insert into bookdetails(BookName,author,releaseDate,publication,price,discount,isbn,image,category,edition,vendor_name,quantity) values(?,?,?,?,?,?,?,?,?,?,?,?)");
		File file=new File("");
       ps.setString(1,this.getBookname());
       ps.setString(2,this.getAuthor());
       ps.setString(3,this.getReleasedate());
       ps.setString(4,this.getPublication());
       ps.setDouble(5,this.getPrice());
       ps.setDouble(6,this.getDiscount());
       ps.setString(7,this.getIsbn());
       ps.setString(8, this.getPhoto());
      // ps.setBinaryStream(8, photo.getInputStream(), (int)  photo.getSize());
       ps.setString(9,this.getCategory());
       ps.setString(10,this.getEdition());
       ps.setString(11,this.getVendor());
       ps.setLong(12, this.getQuantity());
		a=ps.executeUpdate();
		
			}
		catch(Exception e)
		{
				
		}
		 if(a>0)
		 {String query="select * from wishlist where bookname='"+this.getBookname()+"' and author='"+this.getAuthor()+"'";
		 
		 String bookname=this.getBookname();
		 bookname.trim();
		 String author=this.getAuthor();
		 author.trim();


		 }   
		// else
		 System.out.print(a);
		 System.out.print("data inserted completly");
		return a;
		//return a;
	 	 
	 }
	
	public void getImage()
	{
		
	}
	
}
