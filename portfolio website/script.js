function gmail_button() {
    var gmail_text = document.getElementById("gmail-text");
    var gmail_icon = document.getElementById("gmail-icon");

    
    if (gmail_text.style.display === "none" || gmail_text.style.display === "") {
        gmail_text.style.display = "block";
        gmail_icon.style.display = "none";
    }

    gmail_text.addEventListener("mouseleave",function() {
        gmail_icon.style.display = "block";
        gmail_text.style.display = "none";
    });
  }
  
  function whatsapp_button() {

    var whatsapp_icon = document.getElementById("whatsapp-icon");
    var whatsapp_number = document.getElementById("whatsapp-number");
    
    if (whatsapp_number.style.display === "none" || whatsapp_number.style.display === "") {
        whatsapp_number.style.display = "block";
        whatsapp_icon.style.display = "none";
    }

    whatsapp_number.addEventListener("mouseleave",function() {
        whatsapp_icon.style.display = "block";
        whatsapp_number.style.display = "none";
    });
  }

