document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const formSteps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");
  const progressBar = document.querySelector(".progress");

  const nextBtns = document.querySelectorAll(".btn-next");
  const prevBtns = document.querySelectorAll(".btn-prev");

  const dobInput = document.getElementById("dob");
  const ageOutput = document.getElementById("age");

  let currentStep = 0;

  function updateFormSteps() {
    formSteps.forEach((step, index) => {
      if (index === currentStep) {
        step.classList.add("form-step-active");
      } else {
        step.classList.remove("form-step-active");
      }
    });

    progressSteps.forEach((step, index) => {
      if (index < currentStep) {
        step.classList.add("progress-step-active");
      } else {
        step.classList.remove("progress-step-active");
      }
    });

    const progressWidth = (currentStep / (formSteps.length - 1)) * 100 + "%";
    progressBar.style.width = progressWidth;
  }

  function handleNextClick() {
    if (currentStep === 0) {
      // Validate the Date of Birth and calculate age
      const dob = new Date(dobInput.value);
      if (!dob || isNaN(dob)) {
        alert("Please enter a valid Date of Birth.");
        return;
      }
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      ageOutput.textContent = `Age: ${age}`;
    }

    if (currentStep < formSteps.length - 1) {
      if (!validateStep(currentStep)) {
        return;
      }
      currentStep++;
      updateFormSteps();
    } else {
      alert("Registration form submitted successfully.");
    }
  }

  function handlePrevClick() {
    if (currentStep > 0) {
      currentStep--;
      updateFormSteps();
    }
  }

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", handleNextClick);
  });

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", handlePrevClick);
  });

  function validateStep(step) {
    const inputs = formSteps[step].querySelectorAll("input[required]");
    for (const input of inputs) {
      if (input.value.trim() === "") {
        alert("Please fill in all required fields.");
        return false;
      }
    }
    return true;
  }

  updateFormSteps();
});

function calculateAge() {
  const dob = document.getElementById("dob").value;
  const dobDate = new Date(dob);
  const today = new Date();

  // Calculate the age
  let age = today.getFullYear() - dobDate.getFullYear();

  // Check if the birthday has occurred this year or not
  if (
      today.getMonth() < dobDate.getMonth() ||
      (today.getMonth() === dobDate.getMonth() && today.getDate() < dobDate.getDate())
  ) {
      age--;
  }

  // Display the calculated age
  document.getElementById("age").value = age;
}

// Attach the calculateAge function to the Date of Birth (DOB) input field's change event
const dobInput = document.getElementById("dob");
dobInput.addEventListener("change", calculateAge);

document.addEventListener("DOMContentLoaded", function () {
  const messTimingsContainer = document.getElementById("messTimingsContainer");
  const messCheckbox = document.querySelector('input[name="mess"]');
  const messTimingsCheckboxes = document.querySelectorAll('input[name="mess-timings"]');

  // Function to show mess timings
  function showMessTimings() {
    messTimingsContainer.style.display = "block";
  }

  // Function to hide mess timings
  function hideMessTimings() {
    messTimingsContainer.style.display = "none";
    // Uncheck all mess timings checkboxes when hiding
    messTimingsCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

  // Listen for changes on the mess checkbox
  messCheckbox.addEventListener("change", function () {
    if (messCheckbox.checked) {
      showMessTimings();
    } else {
      hideMessTimings();
    }
  });
});

