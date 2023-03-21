       // function to prevent default behavior and reset form
       const form = document.getElementById('contact-form');
       form.addEventListener('submit', function (e) {
           e.preventDefault();
           document.getElementById('contact-form').reset();
           alert("Form sent successfully!")
       })

       // Button to to top
       // Get the button
       let mybutton = document.getElementById("myBtn");

       // When the user scrolls down 150px from the top of the document, show the button
       window.onscroll = function () {
           scrollFunction()
       };

       function scrollFunction() {
           if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
               mybutton.style.display = "block";
           } else {
               mybutton.style.display = "none";
           }
       }

       // When the user clicks on the button, scroll to the top of the document
       function topFunction() {
           document.body.scrollTop = 0;
           document.documentElement.scrollTop = 0;
       }

       /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
       function myFunction() {
           var x = document.getElementById("myTopnav");
           if (x.className === "topnav") {
               x.className += " responsive";
           } else {
               x.className = "topnav";
           }
       }