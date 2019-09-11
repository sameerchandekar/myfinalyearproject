package database;
import java.io.*;
import java.net.InetAddress;
import java.util.Properties;
import java.util.Date;
import javax.mail.*;
import javax.mail.internet.*;
import javax.mail.*;
import javax.activation.*;

public class SMTPSend 
{

    public SMTPSend() {
    	
    }

    public  void msgsend(String mobileno,String message) 
    {
    	System.out.print("message sent");
        String username = "pradyut5";
        String password = "9613020172a";
        String smtphost = "ipipi.com";
        String compression = "Compression Option goes here - find out more";
        String from = "pradyut5@ipipi.com";
        String to = "91"+mobileno+"@sms.ipipi.com";
        String body = message;
        Transport tr = null;

        try {
         Properties props = System.getProperties();
         props.put("mail.smtp.auth", "true");

         // Get a Session object
         Session mailSession = Session.getDefaultInstance(props, null);

         // construct the message
         Message msg = new MimeMessage(mailSession);

         //Set message attributes
         msg.setFrom(new InternetAddress(from));
         InternetAddress[] address = {new InternetAddress(to)};
         msg.setRecipients(Message.RecipientType.TO, address);
         msg.setSubject(compression);
         msg.setText(body);
         msg.setSentDate(new Date());

         tr = mailSession.getTransport("smtp");
         tr.connect(smtphost, username, password);
         msg.saveChanges();
         tr.sendMessage(msg, msg.getAllRecipients());
         tr.close();
         } catch (Exception e) {
             e.printStackTrace();
         }
       // return true;
    }
//public static void main(String arsg[])
//{
//SMTPSend s=new SMTPSend();
//s.msgsend();
//}
      
}