function findDepartment() {
  const input = document.getElementById("department");
  const result = document.getElementById("result");
  const language = document.getElementById("language").value;
  const destination = input.value.trim();

  if (destination === "") {
    alert(language === "ta"
      ? "தயவுசெய்து ஒரு துறையைத் தேர்வு செய்யுங்கள்."
      : "Please select a department.");
    return;
  }

  const known = [
    "reception",
    "emergency",
    "cardiology",
    "laboratory",
    "pharmacy",
    "radiology"
  ];

  if (!known.includes(destination.toLowerCase())) {
    result.innerHTML = language === "ta"
      ? "<h3>துறை கிடைக்கவில்லை</h3><p>பட்டியலில் உள்ள துறையைத் தேர்வு செய்யுங்கள்.</p>"
      : "<h3>Department not found</h3><p>Please choose a listed department.</p>";
    return;
  }

  if (language === "ta") {
    result.innerHTML =
      "<h3>வழிகாட்டுதல்</h3>" +
      "<p>உங்கள் இலக்கு: " + destination + "</p>" +
      "<p>இது ஒரு Demo. உண்மையான பாதைக்கு மருத்துவமனை வரைபடம் தேவை.</p>";
  } else {
    result.innerHTML =
      "<h3>Navigation Instructions</h3>" +
      "<p>Your destination: " + destination + "</p>" +
      "<p>This is a demo. A verified hospital map is needed for real routing.</p>";
  }
}

function changeLanguage() {
  const tamil =
    document.getElementById("language").value === "ta";

  document.getElementById("searchLabel").textContent =
    tamil ? "துறையைத் தேடுங்கள்" : "Search Department";

  document.getElementById("department").placeholder =
    tamil ? "உதாரணம்: Laboratory" : "Example: Cardiology";
}