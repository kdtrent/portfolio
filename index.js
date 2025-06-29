function activateButton(button) {
    // Remove "active" class from all buttons
    const buttons = document.querySelectorAll('.sidenav a', '.sidenav dropdown-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add "active" class to the clicked button
    button.classList.add('active');
  }
