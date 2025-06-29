function activateButton(button) {
    // Remove "active" class from all buttons
    const buttons = document.querySelectorAll('.sidenav a', '.sidenav button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add "active" class to the clicked button
    button.classList.add('active');
  }

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        activateButton(button);
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
