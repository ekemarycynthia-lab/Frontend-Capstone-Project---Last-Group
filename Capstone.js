const PLANETS_URL = "https://anurella.github.io/json/planets.json";
const FORM_ENDPOINT = "https://whitebricks.com/tsacademy.php";

/* ---------- PLANETS (Fetch API) ---------- */
function createPlanetCard({ planet, distanceFromSun, image }) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = image;
  img.alt = planet;
  img.loading = "lazy";

  const name = document.createElement("strong");
  name.textContent = planet;

  const caption = document.createElement("figcaption");
  caption.append(
    name,
    document.createElement("br"),
    "Distance from Sun: " + distanceFromSun.toLocaleString() + " million km"
  );

  figure.append(img, caption);
  return figure;
}
async function loadPlanets() {
  const section = document.getElementById("planets");
  if (!section) return;

  try {
    const res = await fetch(PLANETS_URL);
    if (!res.ok) throw new Error("HTTP" + res.status);
    const planets = await res.json();

    // replace the hard-coded cards with the fetched ones
    section.querySelectorAll("figure").forEach((f) => f.remove());
    planets.forEach((p) => section.append(createPlanetCard(p)));
  } catch (err) {
    console.error("Could not load planets:", err);
    if (!section.querySelector("figure")) {
      const msg = document.createElement("p");
      msg.textContent = "Could not load planets. Please refresh the page.";
      section.append(msg);
    }
  }
}

/* ---------- CONTACT FORM ---------- */
function showFormMessage(form, text, isError) {
  let msg = document.getElementById("form-message");
  if (!msg) {
    msg = document.createElement("p");
    msg.id = "form-message";
    msg.setAttribute("role", "status");
    msg.style.marginTop = "1rem";
    msg.style.fontWeight = "600";
    form.insertAdjacentElement("afterend", msg);
  }
  msg.textContent = text;
  msg.style.color = isError ? "#b3261e" : "#1a7a3a";
}

function setupForm() {
  const form = document.querySelector("#contact form");
  if (!form) return;
  const submitBtn = form.querySelector('input[type="submit"]');

  // the browser's built-in validation (required, email, phone pattern,
  // maxlength) runs first, so this only fires when the form is valid
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.value = "Sending...";

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("HTTP" + res.status);
      form.reset();
      showFormMessage(form, "Thanks! Your message has been sent.", false);
    } catch (err) {
      console.error("Form submit failed:", err);
      showFormMessage(form, "Something went wrong. Please try again.", true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.value = "Submit";
    }
  });
}

/* ---------- VIDEO (autoplay, muted, loop) ---------- */
function setupVideo() {
  const video = document.querySelector("#intro video");
  if (!video) return;
  video.muted = true; // browsers only allow autoplay when muted
  video.play().catch(() => {});
}

loadPlanets();
setupForm();
setupVideo();