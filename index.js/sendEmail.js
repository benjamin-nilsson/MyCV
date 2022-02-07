function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "benjamin_nilsson@outlook.com",
    Password: "65593756331047B7EADCD62807584ADBC0F7",
    To: "benjamin_nilsson@outlook.com",
    From: "benjamin_nilsson@outlook.com",
    Subject: "Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("clientName").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Subject: " +
      document.getElementById("subject").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent successfully"));
}
