// Dil paketleri: TR / EN / AR
const i18n = {
  tr: {
    heroTitle: "Estetiğin Yeni Adı: EsteElit",
    heroDesc: "Profesyonel Saç Ekimi, Estetik Cerrahi ve Medikal Estetik Hizmetleri",
    freeConsult: "ÜCRETSİZ DANIŞMA AL",
    services: "Hizmetlerimiz",
    hair: "Saç Ekimi",
    hairDesc: "FUE, DHI ve ileri teknik saç ekimi çözümleri",
    plastic: "Plastik Cerrahi",
    plasticDesc: "Burun estetiği, yüz germe ve daha fazlası",
    medical: "Medikal Estetik",
    medicalDesc: "Dolgu, botoks, cilt bakımı",
    details: "Detaylar",
    about: "Hakkımızda",
    aboutDesc: "EsteElit, deneyimli hekimlerle etik ve profesyonel hizmet sunar.",
    ourExp: "BİZİM DENEYİMİMİZ",
    beforeAfter: "Öncesi & Sonrası",
    contact: "İletişim",
    addressLabel: "Adres",
    nameLabel: "Adınız",
    phoneLabel: "Telefon",
    messageLabel: "Mesajınız",
    send: "Gönder",
    menuPlastic: "Plastik Cerrahi",
    menuHair: "Saç Ekimi",
    menuMedical: "Medikal Estetik",
    menuBlog: "Blog/TV",
    whatsappWelcome: "Hoş geldiniz! Nasıl yardımcı olabilirim?"
  },
  en: {
    heroTitle: "The New Name of Aesthetics: EsteElit",
    heroDesc: "Professional Hair Transplantation, Plastic Surgery and Medical Aesthetics",
    freeConsult: "GET FREE CONSULTATION",
    services: "Our Services",
    hair: "Hair Transplant",
    hairDesc: "FUE, DHI and advanced hair transplant techniques",
    plastic: "Plastic Surgery",
    plasticDesc: "Rhinoplasty, facelift and more",
    medical: "Medical Aesthetics",
    medicalDesc: "Fillers, botox, skincare",
    details: "Details",
    about: "About Us",
    aboutDesc: "EsteElit provides ethical and professional care with experienced physicians.",
    ourExp: "OUR EXPERIENCE",
    beforeAfter: "Before & After",
    contact: "Contact",
    addressLabel: "Address",
    nameLabel: "Your Name",
    phoneLabel: "Phone",
    messageLabel: "Your Message",
    send: "Send",
    menuPlastic: "Plastic Surgery",
    menuHair: "Hair Transplant",
    menuMedical: "Medical Aesthetics",
    menuBlog: "Blog/TV",
    whatsappWelcome: "Welcome! How can I help?"
  },
  ar: {
    heroTitle: "الاسم الجديد للجمال: إست إليت",
    heroDesc: "زراعة الشعر وجراحة التجميل والطب التجميلي الاحترافي",
    freeConsult: "احصل على استشارة مجانية",
    services: "خدماتنا",
    hair: "زراعة الشعر",
    hairDesc: "تقنيات FUE و DHI وتقنيات متقدمة لزراعة الشعر",
    plastic: "الجراحة التجميلية",
    plasticDesc: "تجميل الأنف وشد الوجه والمزيد",
    medical: "الطب التجميلي",
    medicalDesc: "الفيلر والبوتوكس والعناية بالبشرة",
    details: "التفاصيل",
    about: "من نحن",
    aboutDesc: "إست إليت تقدم رعاية أخلاقية ومهنية مع أطباء ذوي خبرة.",
    ourExp: "خبرتنا",
    beforeAfter: "قبل وبعد",
    contact: "اتصال",
    addressLabel: "العنوان",
    nameLabel: "اسمك",
    phoneLabel: "الهاتف",
    messageLabel: "رسالتك",
    send: "إرسال",
    menuPlastic: "الجراحة التجميلية",
    menuHair: "زراعة الشعر",
    menuMedical: "الطب التجميلي",
    menuBlog: "المدونة / التلفاز",
    whatsappWelcome: "مرحبًا! كيف يمكنني المساعدة؟"
  }
};

function setLang(lang='tr'){
  const t = i18n[lang] || i18n.tr;
  document.querySelectorAll("[data-t]").forEach(el=>{
    const key = el.getAttribute("data-t");
    if (t[key]) el.textContent = t[key];
  });
  const bubble = document.getElementById("welcome-bubble");
  if (bubble) bubble.textContent = t.whatsappWelcome;
}

function autoImages(){
  // Hero: estetik enjeksiyon görseli
  const hero = document.querySelector(".hero.banner .hero-img");
  if (hero) hero.src = "https://images.unsplash.com/photo-1598300054243-67e84d3df8aa?auto=format&fit=crop&w=1600&q=80";

  // Hizmetler: ikon yerine yakın temalı görseller (yeşil estetik uyumlu)
  const imgMap = {
    "hair-card": "https://images.unsplash.com/photo-1596524430380-85bbf9417f3e?auto=format&fit=crop&w=1000&q=80",
    "plastic-card": "https://images.unsplash.com/photo-1581092928067-3b6f89c0a8b2?auto=format&fit=crop&w=1000&q=80",
    "medical-card": "https://images.unsplash.com/photo-1583912268185-016b34c0a6db?auto=format&fit=crop&w=1000&q=80",
    "rhinoplasty": "https://images.unsplash.com/photo-1581093588401-16fc9b12a674?auto=format&fit=crop&w=1200&q=80",
    "facelift": "https://images.unsplash.com/photo-1594824476961-5b01d0df6cf9?auto=format&fit=crop&w=1200&q=80",
    "breast-aesthetics": "https://images.unsplash.com/photo-1581090700227-1c7a9551b9ef?auto=format&fit=crop&w=1200&q=80",
    "drops": "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80",
    "fue": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    "dhi": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    "safir-teknigi": "https://images.unsplash.com/photo-1520975922284-5f5737d8a538?auto=format&fit=crop&w=1200&q=80",
    "medical-botox": "https://images.unsplash.com/photo-1579154204601-01588f351e87?auto=format&fit=crop&w=1200&q=80",
    "medical-filler": "https://images.unsplash.com/photo-1587560699334-13da96f2c6b0?auto=format&fit=crop&w=1200&q=80",
    "medical-skin": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
  };

  document.querySelectorAll("[data-img-key]").forEach(el=>{
    const key = el.getAttribute("data-img-key");
    if (imgMap[key]) el.src = imgMap[key];
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  const select = document.getElementById("lang");
  setLang(select?.value || 'tr');
  select?.addEventListener("change", (e)=> setLang(e.target.value));

  // WhatsApp karşılama balonu
  const bubble = document.getElementById("welcome-bubble");
  if (bubble){
    setTimeout(()=> bubble.classList.add("show"), 600);
    setTimeout(()=> bubble.classList.remove("show"), 5000);
  }

  autoImages();
});