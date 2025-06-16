document.addEventListener("DOMContentLoaded", () => {
  // === COUNTER ANIMATION ===
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 150;

      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCounter();
  });

  // === JOIN BUTTON EFFECTS ===
  const buttons = document.querySelectorAll(".join-btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.boxShadow = "0 0 10px #0ff, 0 0 20px #0ff";
      btn.style.transform = "scale(1.05)";
      btn.style.transition = "all 0.3s ease-in-out";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.boxShadow = "none";
      btn.style.transform = "scale(1)";
    });
  });

  // === FORM SUBMISSION (Join & Contact) ===
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const jsonData = {};
      formData.forEach((value, key) => {
        jsonData[key] = value;
      });

      try {
        const res = await fetch(form.action, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        });

        if (res.ok) {
          alert("Form submitted successfully!");
          form.reset();
        } else {
          alert("There was a problem submitting the form.");
        }
      } catch (err) {
        console.error("Form error:", err);
        alert("Network error occurred.");
      }
    });
  });

  // === BOXES HOVER EFFECT (Why Join section, etc.) ===
  const highlightBoxes = document.querySelectorAll(".highlight-box");
  highlightBoxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
      box.style.transform = "translateY(-5px)";
      box.style.boxShadow = "0 0 15px #0ff, 0 0 25px #0ff";
      box.style.transition = "all 0.3s ease";
    });

    box.addEventListener("mouseleave", () => {
      box.style.transform = "translateY(0)";
      box.style.boxShadow = "none";
    });
  });
});
