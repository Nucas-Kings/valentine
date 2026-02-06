document.addEventListener("DOMContentLoaded", function () {
  var noBtn = document.getElementById("noBtn");
  var yesBtn = document.getElementById("yesBtn");
  var yesMessage = document.getElementById("yesMessage");
  var confettiContainer = document.getElementById("confetti");

  // Make the "No" button run away
  noBtn.addEventListener("mouseover", function () {
    var buttonsDiv = noBtn.parentElement;
    var bounds = buttonsDiv.getBoundingClientRect();

    var maxX = bounds.width - noBtn.offsetWidth;
    var maxY = bounds.height - noBtn.offsetHeight;

    var randomX = Math.random() * maxX;
    var randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });

  // When they click "Yes"
  yesBtn.addEventListener("click", function () {
    yesMessage.style.display = "block";
    yesBtn.disabled = true;
    noBtn.disabled = true;

    // Confetti effect
    for (var i = 0; i < 80; i++) {
      var piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.animationDuration = (2 + Math.random() * 2) + "s";
      piece.style.animationDelay = (Math.random() * 0.5) + "s";
      confettiContainer.appendChild(piece);

      (function (p) {
        setTimeout(function () {
          p.remove();
        }, 4000);
      })(piece);
    }
  });
});
