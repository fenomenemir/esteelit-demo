document.addEventListener("DOMContentLoaded", () => {
  // Dinamik görsel yükleme
  const cards = document.querySelectorAll("[data-image]");
  cards.forEach(card => {
    const slug = card.getAttribute("data-image");
    const img = document.createElement("img");
    img.src = `https://picsum.photos/seed/${slug}/400/250`;
    img.alt = slug;
    card.prepend(img);
  });

  // Menü highlight
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.style.textDecoration = "underline";
    }
  });
});