import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY!, 
});

export async function sendWelcomeEmail(email: string, name: string) {
  try {
    const sentFrom = new Sender("51ndgwvnk9qlzqx8.mlsender.net", "PexelXus");
    const recipients = [new Recipient(email, name)];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject("Welcome to PexelXus 🎉")
      .setTemplateId("0p7kx4x8m8eg9yjr")
      .setPersonalization([
        {
          email: email,
          data: {
            name: name,
          },
        },
      ]);

    await mailerSend.email.send(emailParams);

    console.log("✅ Welcome email sent!");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}

export async function sendDonateEmail(name: string, email: string, amount: number) {
  try {
    const sentFrom = new Sender("test-51ndgwvnk9qlzqx8.mlsender.net", "PexelXus"); 
    const recipients = [new Recipient(name, email)];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject("Thanks Dontating PexelXus 🎉")
      .setHtml(`<p>Hi ${name},</p><p>Thanks for Donating of ${amount} to pexelxus. 🚀</p>`);

    await mailerSend.email.send(emailParams);

    console.error("✅ Email sent successfully!")
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
};

export async function sendContactEmail(name: string, email: string, message: string) {
  try {
    const sentFrom = new Sender("support@pexelxus.com")
    const recipients = [new Recipient("PexelXus", "support@pexelxus.com")];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject( `message from ${name}`)
      .setHtml(`<p>Hi admin new contact email from 
        
        name: ${name} 
        email: ${email}
        message: ${message}`);
      await mailerSend.email.send(emailParams);

    console.log("Email sent successfully!")
  } catch (error: unknown) {
    console.log("Error sending Email", error)
  }
}
             