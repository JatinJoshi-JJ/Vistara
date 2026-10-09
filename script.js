/* ========================================================
           VISTARA GALLERY CATALOG DATASET (16 WORKS)
           ======================================================== */
const galleryItems = [
  {
    id: "v-01",
    title: "Nordic Minimalist Geometry",
    author: "Mikael Hedström",
    category: "Architecture",
    moodColor: "rgba(0, 229, 255, 0.4)",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Hasselblad X2D 100C",
      lens: "XCD 38mm f/2.5",
      aperture: "f/5.6",
      shutter: "1/250s",
      iso: "64",
    },
  },
  {
    id: "v-02",
    title: "Monolithic Shadow Play",
    author: "Elena Rostova",
    category: "Architecture",
    moodColor: "rgba(61, 90, 254, 0.4)",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Sony A7R V",
      lens: "FE 24-70mm f/2.8 GM II",
      aperture: "f/8.0",
      shutter: "1/500s",
      iso: "100",
    },
  },
  {
    id: "v-03",
    title: "Neon Cyberpunk Visor",
    author: "Kaito Tanaka",
    category: "Cyberpunk",
    moodColor: "rgba(255, 82, 82, 0.4)",
    img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Fujifilm GFX 100S",
      lens: "GF 110mm f/2",
      aperture: "f/2.0",
      shutter: "1/160s",
      iso: "400",
    },
  },
  {
    id: "v-04",
    title: "Golden Hour Solitude",
    author: "Sarah Jenkins",
    category: "Portraits",
    moodColor: "rgba(255, 183, 3, 0.4)",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Canon EOS R5",
      lens: "RF 85mm f/1.2L",
      aperture: "f/1.4",
      shutter: "1/800s",
      iso: "100",
    },
  },
  {
    id: "v-05",
    title: "Alpine Ridge Alpenglow",
    author: "Lukas Weber",
    category: "Nature",
    moodColor: "rgba(0, 229, 255, 0.4)",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Nikon Z8",
      lens: "NIKKOR Z 14-24mm f/2.8 S",
      aperture: "f/11",
      shutter: "1/60s",
      iso: "64",
    },
  },
  {
    id: "v-06",
    title: "Midnight Subway Transit",
    author: "David Chen",
    category: "Street",
    moodColor: "rgba(61, 90, 254, 0.4)",
    img: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Leica Q3",
      lens: "Summilux 28mm f/1.7",
      aperture: "f/2.0",
      shutter: "1/125s",
      iso: "1600",
    },
  },
  {
    id: "v-07",
    title: "Botanical Form in Solitude",
    author: "Chloe Dubois",
    category: "Minimalism",
    moodColor: "rgba(0, 229, 255, 0.4)",
    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Sony A1",
      lens: "FE 90mm f/2.8 Macro",
      aperture: "f/4.0",
      shutter: "1/320s",
      iso: "100",
    },
  },
  {
    id: "v-08",
    title: "Urban Glass Monolith",
    author: "Marcus Vance",
    category: "Architecture",
    moodColor: "rgba(61, 90, 254, 0.4)",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Canon EOS R5",
      lens: "TS-E 24mm f/3.5L II",
      aperture: "f/8.0",
      shutter: "1/250s",
      iso: "100",
    },
  },
  {
    id: "v-09",
    title: "Crimson Ambient Studio",
    author: "Nadia Rossi",
    category: "Portraits",
    moodColor: "rgba(255, 82, 82, 0.4)",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Hasselblad 907X",
      lens: "XCD 45mm f/4",
      aperture: "f/4.0",
      shutter: "1/125s",
      iso: "200",
    },
  },
  {
    id: "v-10",
    title: "Misty Pacific Coast",
    author: "Oliver Scott",
    category: "Nature",
    moodColor: "rgba(0, 229, 255, 0.4)",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Fujifilm GFX 50S II",
      lens: "GF 32-64mm f/4",
      aperture: "f/11",
      shutter: "0.5s",
      iso: "100",
    },
  },
  {
    id: "v-11",
    title: "Tokyo Shinjuku Crossing",
    author: "Kenji Sato",
    category: "Street",
    moodColor: "rgba(255, 82, 82, 0.4)",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Leica M11",
      lens: "Noctilux 50mm f/0.95",
      aperture: "f/1.2",
      shutter: "1/500s",
      iso: "800",
    },
  },
  {
    id: "v-12",
    title: "Curved Concrete Brutalism",
    author: "Simon Lindqvist",
    category: "Architecture",
    moodColor: "rgba(0, 229, 255, 0.4)",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Sony A7R V",
      lens: "FE 16-35mm f/2.8 GM",
      aperture: "f/8.0",
      shutter: "1/400s",
      iso: "100",
    },
  },
  {
    id: "v-13",
    title: "Foggy Pine Peaks",
    author: "Hannah Arendt",
    category: "Nature",
    moodColor: "rgba(61, 90, 254, 0.4)",
    img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Nikon Z7 II",
      lens: "NIKKOR Z 24-120mm f/4 S",
      aperture: "f/5.6",
      shutter: "1/200s",
      iso: "200",
    },
  },
  {
    id: "v-14",
    title: "Cybernetic Street Lights",
    author: "Ren Amamiya",
    category: "Cyberpunk",
    moodColor: "rgba(0, 229, 255, 0.4)",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Sony FX3",
      lens: "FE 35mm f/1.4 GM",
      aperture: "f/1.4",
      shutter: "1/100s",
      iso: "1250",
    },
  },
  {
    id: "v-15",
    title: "Pure Ceramic Vase",
    author: "Mia Thorne",
    category: "Minimalism",
    moodColor: "rgba(255, 183, 3, 0.4)",
    img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Canon R6 II",
      lens: "RF 50mm f/1.2L",
      aperture: "f/2.8",
      shutter: "1/250s",
      iso: "100",
    },
  },
  {
    id: "v-16",
    title: "Monochrome City Stride",
    author: "Paul Dumont",
    category: "Street",
    moodColor: "rgba(61, 90, 254, 0.4)",
    img: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80",
    exif: {
      camera: "Leica Monochrom",
      lens: "APO-Summicron 50mm",
      aperture: "f/4.0",
      shutter: "1/1000s",
      iso: "320",
    },
  },
];

// Global State
let activeCategory = "all";
let searchQuery = "";
let sortMode = "featured";
let favorites = JSON.parse(localStorage.getItem("vistara_favorites") || "[]");
let currentArcMode = "panorama"; // 'panorama' or 'fan'

const toastPill = document.getElementById("toastPill");
function showToast(msg) {
  toastPill.textContent = msg;
  toastPill.classList.add("show");
  setTimeout(() => toastPill.classList.remove("show"), 2400);
}

function updateFavoritesCounter() {
  document.getElementById("statSavedFavs").textContent = favorites.length;
}
updateFavoritesCounter();

// Render Primary Gallery
const galleryGrid = document.getElementById("galleryGridMatrix");
function renderGallery() {
  let filtered = galleryItems.filter((item) => {
    const matchesCat =
      activeCategory === "all" || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  if (sortMode === "title-asc")
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  else if (sortMode === "title-desc")
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  else if (sortMode === "favorites-first")
    filtered.sort(
      (a, b) =>
        (favorites.includes(b.id) ? 1 : 0) - (favorites.includes(a.id) ? 1 : 0),
    );

  galleryGrid.innerHTML = "";
  if (filtered.length === 0) {
    galleryGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
                        <p style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">No photographs matched your query.</p>
                        <p style="font-size: 0.9rem;">Try searching for another keyword or select "All Works".</p>
                    </div>
                `;
    return;
  }

  filtered.forEach((item) => {
    const isFav = favorites.includes(item.id);
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.innerHTML = `
                    <div class="card-media-wrapper">
                        <span class="card-category-badge">${item.category}</span>
                        <button type="button" class="btn-card-fav ${isFav ? "is-fav" : ""}" data-id="${item.id}" aria-label="Save to favorites">
                            ${isFav ? "♥" : "♡"}
                        </button>
                        <img src="${item.img}" alt="${item.title}" class="gallery-img-thumb" loading="lazy">
                    </div>
                    <div class="card-info-pane">
                        <h3 class="card-title-text">${item.title}</h3>
                        <p class="card-creator-credit">By ${item.author}</p>
                        <div class="card-exif-preview">
                            <span>${item.exif.camera}</span>
                            <span>${item.exif.aperture} • ${item.exif.shutter}</span>
                        </div>
                    </div>
                `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn-card-fav")) return;
      openLightbox(item);
    });

    const favBtn = card.querySelector(".btn-card-fav");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(item.id);
    });

    galleryGrid.appendChild(card);
  });

  init3DTiltCards();
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((favId) => favId !== id);
    showToast("Removed from favorites");
  } else {
    favorites.push(id);
    showToast("Saved to favorites ❤️");
  }
  localStorage.setItem("vistara_favorites", JSON.stringify(favorites));
  updateFavoritesCounter();
  renderGallery();
}

// Search & Filters
document.getElementById("gallerySearchInput").addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderGallery();
});

document.getElementById("gallerySortSelect").addEventListener("change", (e) => {
  sortMode = e.target.value;
  renderGallery();
});

const categoryTabs = document.querySelectorAll(".btn-category-tab");
categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    categoryTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeCategory = tab.getAttribute("data-category");
    renderGallery();
  });
});

const densityBtns = document.querySelectorAll(".btn-density");
densityBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    densityBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const mode = btn.getAttribute("data-density");
    galleryGrid.className = "gallery-grid-matrix";
    if (mode === "compact") galleryGrid.classList.add("density-compact");
    if (mode === "large") galleryGrid.classList.add("density-large");
  });
});

// ========================================================
// NEW FEATURE: 3D CYLINDRICAL HORIZON & RADIAL FAN SHOWCASE
// Inspired by Screenshots: "Our Works" & "Best People"
// ========================================================
const arcTrack = document.getElementById("arcCardsTrack");
const arcWorks = galleryItems.slice(0, 5); // 5 Masterworks

function renderArcShowcase() {
  arcTrack.innerHTML = "";
  const total = arcWorks.length;
  const midIndex = Math.floor(total / 2);

  arcWorks.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "arc-card-tile";
    card.setAttribute("data-idx", idx);

    const offsetFromCenter = idx - midIndex; // -2, -1, 0, 1, 2

    card.innerHTML = `
                    <span class="arc-badge-top">0${idx + 1} • Masterwork</span>
                    <img src="${item.img}" alt="${item.title}" class="arc-card-thumb">
                    <div class="arc-card-meta-glass">
                        <div class="arc-card-title">${item.title}</div>
                        <div class="arc-card-sub">${item.author}</div>
                    </div>
                `;

    // Calculate base transforms depending on active mode
    applyArcTransform(card, offsetFromCenter, currentArcMode);

    // Hover physics
    card.addEventListener("mouseenter", () => {
      if (currentArcMode === "panorama") {
        card.style.transform = `translateX(${offsetFromCenter * 210}px) translateZ(120px) rotateY(0deg) scale(1.12)`;
      } else {
        card.style.transform = `translateX(${offsetFromCenter * 140}px) translateY(-35px) rotateZ(0deg) scale(1.16)`;
      }
    });

    card.addEventListener("mouseleave", () => {
      applyArcTransform(card, offsetFromCenter, currentArcMode);
    });

    card.addEventListener("click", () => openLightbox(item));
    arcTrack.appendChild(card);
  });
}

function applyArcTransform(card, offset, mode) {
  if (mode === "panorama") {
    // Screenshot 2: "Our Works" Cylindrical 3D Perspective Horizon
    const rotY = -offset * 14; // Curves inwards
    const transX = offset * 215;
    const transZ =
      Math.cos((offset / 2) * (Math.PI / 2.5)) * 40 - Math.abs(offset) * 35;
    card.style.transform = `translateX(${transX.toFixed(1)}px) translateZ(${transZ.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg)`;
    card.style.zIndex = 10 - Math.abs(offset);
  } else {
    // Screenshot 1: "Best People" Radial Fanned Arc
    const rotZ = offset * 9; // Fan arc
    const transX = offset * 135;
    const transY = Math.abs(offset) * 22; // Arcs downwards
    card.style.transform = `translateX(${transX.toFixed(1)}px) translateY(${transY.toFixed(1)}px) rotateZ(${rotZ.toFixed(1)}deg)`;
    card.style.zIndex = 10 - Math.abs(offset);
  }
}

document.getElementById("btnModePanorama").addEventListener("click", () => {
  currentArcMode = "panorama";
  document.getElementById("btnModePanorama").classList.add("active");
  document.getElementById("btnModeFan").classList.remove("active");
  document.getElementById("arcSectionTitle").textContent = "Our Works";
  renderArcShowcase();
});

document.getElementById("btnModeFan").addEventListener("click", () => {
  currentArcMode = "fan";
  document.getElementById("btnModeFan").classList.add("active");
  document.getElementById("btnModePanorama").classList.remove("active");
  document.getElementById("arcSectionTitle").textContent = "Curated Deck Arc";
  renderArcShowcase();
});

renderArcShowcase();

// ========================================================
// BORDERLESS 3D FLUID WAVE MATRIX ENGINE
// ========================================================
const waveMatrix = document.getElementById("wavePlaneMatrix");
let waveSwell = 26;
let isWavePaused = false;
let waveTime = 0;

function initWaveMatrix() {
  waveMatrix.innerHTML = "";
  for (let i = 0; i < 36; i++) {
    const item = galleryItems[i % galleryItems.length];
    const tile = document.createElement("div");
    tile.className = "wave-card-tile";
    tile.setAttribute("data-col", i % 6);
    tile.setAttribute("data-row", Math.floor(i / 6));

    tile.innerHTML = `<img src="${item.img}" alt="${item.title}" class="wave-tile-img">`;
    tile.addEventListener("click", () => openLightbox(item));
    waveMatrix.appendChild(tile);
  }
}
initWaveMatrix();

function renderWavePhysics() {
  if (!isWavePaused) {
    waveTime += 0.026;
    const tiles = waveMatrix.querySelectorAll(".wave-card-tile");
    tiles.forEach((tile) => {
      const col = parseFloat(tile.getAttribute("data-col"));
      const row = parseFloat(tile.getAttribute("data-row"));
      const elevation =
        Math.sin(waveTime * 2.2 + col * 0.95 + row * 0.75) * waveSwell;
      tile.style.transform = `translateZ(${elevation.toFixed(1)}px)`;
    });
  }
  requestAnimationFrame(renderWavePhysics);
}
renderWavePhysics();

document.getElementById("btnWaveSwell").addEventListener("click", () => {
  waveSwell = waveSwell === 26 ? 48 : 26;
  document.getElementById("btnWaveSwell").textContent =
    waveSwell === 48
      ? "🌊 Wave Swell: Ocean Surge"
      : "🌊 Wave Swell: CalmWaters";
});

document.getElementById("btnWavePause").addEventListener("click", () => {
  isWavePaused = !isWavePaused;
  document.getElementById("btnWavePause").textContent = isWavePaused
    ? "▶ Resume Flow"
    : "⏸ Pause Flow";
});

// ========================================================
// 3D INFINITE HYPERSPACE TUNNEL (SMOOTH LERP INTERPOLATION)
// ========================================================
const tunnelTrack = document.getElementById("hyperspaceTunnel");
const tunnelStage = document.getElementById("tunnelStageWorld");
const tunnelGlow = document.getElementById("tunnelAmbientGlow");
const tunnelCards = [];
let autoCruise = false;
let cruiseProgress = 0;

// Smooth Damped Inertia State
let targetScrollProgress = 0;
let currentScrollProgress = 0;

function initHyperspaceTunnel() {
  tunnelStage.innerHTML = "";
  galleryItems.slice(0, 8).forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "tunnel-card-item";
    card.innerHTML = `
                    <img src="${item.img}" alt="${item.title}" class="tunnel-card-img">
                    <div class="tunnel-card-caption">${item.title}</div>
                `;
    card.addEventListener("click", () => openLightbox(item));
    tunnelStage.appendChild(card);
    tunnelCards.push({ el: card, item, index: idx });
  });
}
initHyperspaceTunnel();

function updateTunnelLayout(scrollNorm) {
  const total = tunnelCards.length;
  tunnelCards.forEach((tc, idx) => {
    const cardOffset = (idx / total + scrollNorm) % 1;
    const zPos = -1800 + cardOffset * 2150;
    const xPos = Math.sin(cardOffset * Math.PI * 2) * 280;
    const yPos = Math.cos(cardOffset * Math.PI * 2) * 110 - 120; // Shifted up by 120px to prevent covering the button

    let opacity = 1;
    if (zPos < -1500) opacity = (zPos + 1800) / 300;
    if (zPos > 200) opacity = (350 - zPos) / 150;
    opacity = Math.max(0, Math.min(1, opacity));

    tc.el.style.transform = `translate3d(${xPos.toFixed(1)}px, ${yPos.toFixed(1)}px, ${zPos.toFixed(1)}px)`;
    tc.el.style.opacity = opacity.toFixed(2);

    if (Math.abs(zPos) < 180) {
      tunnelGlow.style.setProperty("--tunnel-glow-color", tc.item.moodColor);
    }
  });
}

window.addEventListener(
  "scroll",
  () => {
    const rect = tunnelTrack.getBoundingClientRect();
    const totalScrollable = tunnelTrack.offsetHeight - window.innerHeight;
    const currentScrolled = -rect.top;
    const progress = Math.max(
      0,
      Math.min(1, currentScrolled / totalScrollable),
    );
    targetScrollProgress = progress * 2.8;
  },
  { passive: true },
);

// Smooth Lerp Animation Loop
function tunnelPhysicsLoop() {
  if (autoCruise) {
    cruiseProgress += 0.0022;
    updateTunnelLayout(cruiseProgress);
  } else {
    // Smooth exponential damping (Lerp) for buttery smooth flight
    currentScrollProgress +=
      (targetScrollProgress - currentScrollProgress) * 0.08;
    updateTunnelLayout(currentScrollProgress);
  }
  requestAnimationFrame(tunnelPhysicsLoop);
}
tunnelPhysicsLoop();

document.getElementById("btnAutoCruise").addEventListener("click", () => {
  autoCruise = !autoCruise;
  document.getElementById("btnAutoCruise").textContent = autoCruise
    ? "🚀 Auto Cruise: Active"
    : "🚀 Auto Cruise: Off";
});

// Lightbox Functions
const lightboxModal = document.getElementById("lightboxModal");
let currentLightboxItem = null;

function openLightbox(item) {
  currentLightboxItem = item;
  document.getElementById("lightboxImg").src = item.img;
  document.getElementById("lightboxImg").alt = item.title;
  document.getElementById("lightboxTitle").textContent = item.title;
  document.getElementById("lightboxAuthor").textContent =
    `Photographed by ${item.author}`;

  document.getElementById("exifCamera").textContent = item.exif.camera;
  document.getElementById("exifLens").textContent = item.exif.lens;
  document.getElementById("exifAperture").textContent = item.exif.aperture;
  document.getElementById("exifShutter").textContent = item.exif.shutter;
  document.getElementById("exifIso").textContent = item.exif.iso;
  document.getElementById("exifCategory").textContent = item.category;

  const favBtn = document.getElementById("btnLightboxFav");
  favBtn.innerHTML = favorites.includes(item.id)
    ? "<span>♥ Saved Favorite</span>"
    : "<span>♡ Save Favorite</span>";

  lightboxModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightboxModal.classList.remove("open");
  document.body.style.overflow = "auto";
}

document
  .getElementById("btnCloseLightbox")
  .addEventListener("click", closeLightbox);
lightboxModal.addEventListener("click", (e) => {
  if (e.target === lightboxModal) closeLightbox();
});

document.getElementById("btnLightboxFav").addEventListener("click", () => {
  if (currentLightboxItem) {
    toggleFavorite(currentLightboxItem.id);
    document.getElementById("btnLightboxFav").innerHTML = favorites.includes(
      currentLightboxItem.id,
    )
      ? "<span>♥ Saved Favorite</span>"
      : "<span>♡ Save Favorite</span>";
  }
});

document.getElementById("btnCopyLink").addEventListener("click", () => {
  if (currentLightboxItem) {
    try {
      const temp = document.createElement("textarea");
      temp.value =
        window.location.href.split("#")[0] + "#" + currentLightboxItem.id;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
      showToast("Direct work link copied! 📋");
    } catch (err) {
      showToast("Link copied!");
    }
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightboxModal.classList.contains("open")) {
    closeLightbox();
  }
});

// 3D Tilt Cards
function init3DTiltCards() {
  document.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      card.style.transform = `perspective(1000px) rotateX(${(-normY * 8).toFixed(1)}deg) rotateY(${(normX * 8).toFixed(1)}deg) translateZ(6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    });
  });
}

// ========================================================
// IMAGE TRAIL EFFECT ON MOUSE MOVE
// ========================================================
const trailSection = document.getElementById("imageTrailSection");
const trailCanvas = document.getElementById("trailCanvas");
const trailImages = galleryItems.map(item => item.img); 
let lastMousePos = { x: 0, y: 0 };
let trailImgIndex = 0;
const distanceThreshold = 60; 

if (trailSection && trailCanvas) {
    trailSection.addEventListener("mousemove", (e) => {
        const rect = trailSection.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const distance = Math.hypot(mouseX - lastMousePos.x, mouseY - lastMousePos.y);

        if (distance > distanceThreshold) {
            lastMousePos = { x: mouseX, y: mouseY };

            const imgEl = document.createElement("img");
            imgEl.src = trailImages[trailImgIndex % trailImages.length];
            imgEl.className = "trail-image";
            
            // Random rotation for natural feel
            const randomRotation = (Math.random() - 0.5) * 40; 
            
            imgEl.style.setProperty("--x", mouseX + "px");
            imgEl.style.setProperty("--y", mouseY + "px");
            imgEl.style.setProperty("--rot", randomRotation + "deg");

            trailCanvas.appendChild(imgEl);

            // Force reflow
            void imgEl.offsetWidth;
            
            imgEl.classList.add("active");

            setTimeout(() => {
                imgEl.classList.remove("active");
                imgEl.classList.add("fade");
            }, 600);

            setTimeout(() => {
                imgEl.remove();
            }, 1200);

            trailImgIndex++;
        }
    });
}

// Particle Canvas Physics
const canvas = document.getElementById("ambientDustCanvas");
const ctx = canvas.getContext("2d");
const reticleCursor = document.getElementById("reticleCursor");

let w = window.innerWidth;
let h = window.innerHeight;
function resizeCanvas() {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const particles = Array.from({ length: 160 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  vx: (Math.random() - 0.5) * 1.5,
  vy: (Math.random() - 0.5) * 1.5,
  size: 1.2 + Math.random() * 2,
  alpha: 0.3 + Math.random() * 0.5,
}));

let mouseX = w / 2;
let mouseY = h / 2;
let smoothX = mouseX;
let smoothY = mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function renderCanvasPhysics() {
  smoothX += (mouseX - smoothX) * 0.14;
  smoothY += (mouseY - smoothY) * 0.14;

  reticleCursor.style.left = `${smoothX}px`;
  reticleCursor.style.top = `${smoothY}px`;

  ctx.clearRect(0, 0, w, h);
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const color = isDark ? "#d4af37" : "#111111"; // Updated to Gold for Dark, Obsidian for Light

  particles.forEach((p) => {
    const dx = smoothX - p.x;
    const dy = smoothY - p.y;
    const dist = Math.hypot(dx, dy);

    if (dist < 220) {
      p.vx += (dx / dist) * 0.25;
      p.vy += (dy / dist) * 0.25;
    }

    p.x += p.vx;
    p.y += p.vy;
    p.vx *= 0.96;
    p.vy *= 0.96;

    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
  });

  requestAnimationFrame(renderCanvasPhysics);
}
renderCanvasPhysics();

// FAQ Toggle
document.querySelectorAll(".faq-item-tile").forEach((item) => {
  item.addEventListener("click", () => item.classList.toggle("open"));
});

// Theme Toggle
document.getElementById("btnThemeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const target = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", target);
  document.getElementById("themeIcon").textContent =
    target === "dark" ? "🌓" : "☀️";
  showToast(`Switched to ${target} mode`);
});

// Back to top
document.getElementById("btnScrollTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Initialize Primary Gallery
renderGallery();

// ========================================================
// SMART HEADER (HIDE ON SCROLL DOWN, SHOW ON SCROLL UP)
// ========================================================
let lastScrollY = window.scrollY;
const siteHeader = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 100) {
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      siteHeader.classList.add("header-hidden");
    } else {
      // Scrolling up
      siteHeader.classList.remove("header-hidden");
    }
  } else {
    // At the top
    siteHeader.classList.remove("header-hidden");
  }
  
  lastScrollY = currentScrollY;
}, { passive: true });

// ========================================================
// LENIS SMOOTH SCROLLING
// ========================================================
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  if (typeof updateParallaxPhysics === 'function') updateParallaxPhysics();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ========================================================
// ROLLING TEXT & MAGNIFIER CURSOR LOGIC
// ========================================================
document.querySelectorAll(".section-heading-bold, #heroFlipTitle").forEach((heading) => {
  const text = heading.innerText;
  heading.setAttribute("data-text", text);
  heading.innerHTML = `<span class="rolling-text-inner">${text}</span>`;
  heading.classList.add("rolling-text");

  // Hover events for Magnifier cursor
  heading.addEventListener("mouseenter", () => {
    reticleCursor.classList.add("magnifier-mode");
  });
  heading.addEventListener("mouseleave", () => {
    reticleCursor.classList.remove("magnifier-mode");
  });
});

// ========================================================
// PARALLAX FLOATING KINETIC SECTION LOGIC
// ========================================================
const parallaxStage = document.getElementById('parallaxStage');
if (parallaxStage) {
  const floatElements = Array.from(parallaxStage.querySelectorAll('.floating-element'));
  
  const pConfig = {
    sensitivity: -1.0,
    depthMultiplier: 1.0,
    enable3DTilt: true,
    lerpFactor: 0.08,
    tiltScale: 12.0
  };

  let targetNX = 0, targetNY = 0;
  let currentNX = 0, currentNY = 0;
  let isStageIdle = true;
  let pIdlePhase = 0;

  window.addEventListener('mousemove', (e) => {
    targetNX = (e.clientX / window.innerWidth) - 0.5;
    targetNY = (e.clientY / window.innerHeight) - 0.5;
    isStageIdle = false;
  });

  window.addEventListener('mouseleave', () => {
    isStageIdle = true;
  });

  // Fade-in animation via Intersection Observer
  const parallaxObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        floatElements.forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), 150 * i);
        });
        parallaxObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  
  parallaxObserver.observe(parallaxStage);

  // Hook into the existing lenis RAF loop
  window.updateParallaxPhysics = function() {
    // Parallax floating physics calculation
    if (isStageIdle) {
      pIdlePhase += 0.015;
      targetNX = Math.sin(pIdlePhase * 0.8) * 0.12;
      targetNY = Math.cos(pIdlePhase * 0.6) * 0.1;
    }

    currentNX += (targetNX - currentNX) * pConfig.lerpFactor;
    currentNY += (targetNY - currentNY) * pConfig.lerpFactor;

    floatElements.forEach((el) => {
      const depth = parseFloat(el.getAttribute('data-depth') || '1.0');
      const tx = currentNX * depth * pConfig.depthMultiplier * (pConfig.sensitivity * 85);
      const ty = currentNY * depth * pConfig.depthMultiplier * (pConfig.sensitivity * 85);
      
      let transformStr = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
      if (pConfig.enable3DTilt) {
        const rotX = -currentNY * depth * pConfig.tiltScale;
        const rotY = currentNX * depth * pConfig.tiltScale;
        transformStr += ` rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
      }
      el.style.transform = transformStr;
    });
  };
}
