lightbox.option({
  'resizeDuration': 200, // Image resizing animation takes 0.2 seconds
  'wrapAround': true, // Last image links back to the first image
  'fadeDuration': 300 // Fade effect takes 0.3 seconds
})

// Read More button for about section
const readMoreBtn = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

if (readMoreBtn && moreText) {
  readMoreBtn.addEventListener("click", function () {
    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      readMoreBtn.innerText = "Read Less";
    } else {
      moreText.style.display = "none";
      readMoreBtn.innerText = "Read More";
    }
  });
}

// Contact form validation and submission
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const messageError = document.getElementById("message-error");
    const successMsg = document.getElementById("form-success");

    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    messageError.innerText = "";
    successMsg.innerText = "";

    let isValid = true;

    if (name === "") {
      nameError.innerText = "Please enter your full name.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailError.innerText = "Please enter your email address.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.innerText = "Please enter a valid email address.";
      isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (phone === "") {
      phoneError.innerText = "Please enter your phone number.";
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      phoneError.innerText = "Phone must be 10 digits, e.g. 082134567.";
      isValid = false;
    }

    if (message === "") {
      messageError.innerText = "Please enter your message.";
      isValid = false;
    } else if (message.length < 10) {
      messageError.innerText = "Message must be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
      const subject = encodeURIComponent(`Contact request from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
      );
      const mailto = `mailto:info@mrprice.co.za?subject=${subject}&body=${body}`;

      // Open the user's email client with the form content prefilled.
      window.location.href = mailto;
      successMsg.innerText = "Success! Your message is ready to send in your email app. Please complete the email and send it.";
      contactForm.reset();
    }
  });
}






