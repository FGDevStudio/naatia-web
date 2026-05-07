const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

reveals.forEach((el) => observer.observe(el));

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  if (!button || !answer) return;

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((other) => {
      other.classList.remove("active");
      const otherAnswer = other.querySelector(".faq-answer");
      if (otherAnswer) otherAnswer.style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

const parallaxEls = document.querySelectorAll(".glow, .logo-core, .floating-badge");

if (window.innerWidth > 900) {
  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    parallaxEls.forEach((el, index) => {
      const factor = (index + 1) * 3;
      el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre")?.value.trim() || "";
    const empresa = document.getElementById("empresa")?.value.trim() || "";
    const correo = document.getElementById("correo")?.value.trim() || "";
    const celular = document.getElementById("celular")?.value.trim() || "";
    const servicio = document.getElementById("servicio")?.value || "";
    const mensaje = document.getElementById("mensaje")?.value.trim() || "";

    if (!nombre || !correo || !mensaje) {
      if (formMessage) {
        formMessage.textContent = "Por favor completa nombre, correo y mensaje.";
        formMessage.className = "form-note error";
      }
      return;
    }

    const numeroWhatsApp = "5215633383690";

    const texto = `
Hola, me interesa una propuesta de Naatia.

Nombre: ${nombre}
Empresa: ${empresa}
Correo: ${correo}
Celular: ${celular}
Servicio: ${servicio}
Necesidad: ${mensaje}
    `.trim();

    if (formMessage) {
      formMessage.textContent = "Gracias. Estamos abriendo WhatsApp con tu solicitud.";
      formMessage.className = "form-note success";
    }

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    setTimeout(() => {
      window.open(url, "_blank");
    }, 500);
  });
}