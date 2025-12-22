const WHATSAPP_NUMBER = "96171561608"; // Update with your WhatsApp number (country code + number, no plus sign)

const products = [
  {
    id: "glow-kit",
    name: "Glow Ritual Kit",
    price: 68,
    category: "Skin Care",
    description: "A three-step ritual with enzyme cleanser, dew serum, and cloud cream for a bright, cushiony finish.",
    image: "assets/p1.jpg",
  },
  {
    id: "midnight-reset",
    name: "Midnight Reset",
    price: 56,
    category: "Skin Care",
    description: "Retinal alternative, ceramide mist, and peptide balm that repair while you sleep.",
    image: "assets/p2.jpg",
  },
  {
    id: "silk-cleanse",
    name: "Silk Cleanse Gel",
    price: 24,
    category: "Hair Care",
    description: "pH-balanced gel with rice ferment and amino acids-melts sunscreen without stripping.",
    image: "assets/p3.jpg",
  },
  {
    id: "melting-milk",
    name: "Melting Milk Balm",
    price: 28,
    category: "Body Care",
    description: "Cream-to-milk balm with meadowfoam and oat lipid for a plush first cleanse.",
    image: "assets/p4.jpg",
  },
  {
    id: "glass-serum",
    name: "Glass Skin Serum",
    price: 36,
    category: "Skin Care",
    description: "Niacinamide, hyaluronic acid, and tranexamic acid for tone-evening, pore-softening radiance.",
    image: "assets/p5.jpg",
  },
  {
    id: "calm-essence",
    name: "Calm Barrier Essence",
    price: 32,
    category: "Supplements / Vitamins",
    description: "Green tea, panthenol, and beta-glucan to soothe flushed, sensitized skin instantly.",
    image: "assets/p6.jpg",
  },
  {
    id: "smooth-peel",
    name: "Smooth Renew Peel",
    price: 30,
    category: "Body Care",
    description: "Lactic + mandelic blend buffered with polyglutamic acid for a no-burn weekly reset.",
    image: "assets/p7.jpg",
  },
  {
    id: "spot-veil",
    name: "Spot Veil Corrector",
    price: 22,
    category: "Makeup",
    description: "Encapsulated salicylic and azelaic acid target blemishes without drying surrounding skin.",
    image: "assets/p8.jpg",
  },
];

const state = {
  activeFilter: "All",
  cart: [],
};

const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const cartPanel = document.getElementById("cartPanel");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartToggle = document.getElementById("cartToggle");
const closeCart = document.getElementById("closeCart");
const bubbleField = document.getElementById("bubbleField");
let checkoutModal;
let checkoutForm;
let nameInput;
let phoneInput;
let locationSelect;
let checkoutError;
let checkoutDelivery;
let checkoutTotal;

const deliveryAreas = [
  { key: "Beirut", label: "Beirut", fee: 5 },
  { key: "Mount-lebanon", label: "Mount Lebanon", fee: 7 },
  { key: "South", label: "South", fee: 10 },
  { key: "North", label: "North/Tripoli", fee: 9 },
  { key: "Bekaa", label: "Bekaa/Zahle", fee: 11 },
];

function init() {
  renderFilters();
  renderProducts();
  attachEvents();
  renderCart();
  createBubbles();
  buildCheckoutModal();
  initReveal();
}

function renderFilters() {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const filters = ["All", ...categories];
  categoryFilters.innerHTML = "";

  filters.forEach((label) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    if (label === state.activeFilter) btn.classList.add("active");
    btn.addEventListener("click", () => {
      state.activeFilter = label;
      renderFilters();
      renderProducts();
    });
    categoryFilters.appendChild(btn);
  });
}

function renderProducts() {
  productGrid.innerHTML = "";
  const filtered = state.activeFilter === "All"
    ? products
    : products.filter((p) => p.category === state.activeFilter);

  filtered.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const badge = product.badge ? `<span class="badge">${product.badge}</span>` : "";
    const shortDescription = product.description.length > 90
      ? `${product.description.slice(0, 90)}...`
      : product.description;
    const imageSrc = product.image || "assets/placeholder.jpg";

    card.innerHTML = `
      ${badge}
      <div class="card-glow"></div>
      <div class="product-visual">
        <img src="${imageSrc}" alt="${product.name}">
      </div>
      <div class="product-body">
        <p class="eyebrow">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="subtle product-desc">${shortDescription}</p>
        <div class="product-inline">
          <button class="toggle-desc" type="button">Details</button>
          <span class="price price-mobile">${formatCurrency(product.price)}</span>
        </div>
        <div class="product-meta">
          <span class="price price-desktop">${formatCurrency(product.price)}</span>
          <div class="card-actions">
            <button class="add">Add to cart</button>
          </div>
        </div>
      </div>
    `;

    card.querySelector(".add").addEventListener("click", () => addToCart(product.id));
    const toggleBtn = card.querySelector(".toggle-desc");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const isOpen = card.classList.toggle("show-desc");
        toggleBtn.textContent = isOpen ? "Hide details" : "Details";
      });
    }

    productGrid.appendChild(card);
  });
}

function addToCart(productId) {
  const item = state.cart.find((i) => i.id === productId);
  if (item) {
    item.qty += 1;
  } else {
    state.cart.push({ id: productId, qty: 1 });
  }
  renderCart();
  openCart();
}

function changeQty(productId, delta) {
  const item = state.cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((i) => i.id !== productId);
  }
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  state.cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;
    const lineTotal = product.price * item.qty;
    total += lineTotal;

    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <div>
        <h4>${product.name}</h4>
        <p class="meta">${formatCurrency(product.price)} · ${product.category}</p>
      </div>
      <div class="qty-controls">
        <button aria-label="Decrease">-</button>
        <span>${item.qty}</span>
        <button aria-label="Increase">+</button>
      </div>
    `;

    const [decreaseBtn, , increaseBtn] = li.querySelectorAll("button, span");
    decreaseBtn.addEventListener("click", () => changeQty(item.id, -1));
    increaseBtn.addEventListener("click", () => changeQty(item.id, 1));

    cartItems.appendChild(li);
  });

  cartTotal.textContent = formatCurrency(total);
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function openCart() {
  cartPanel.classList.add("open");
  cartBackdrop.classList.add("show");
}

function closeCartPanel() {
  cartPanel.classList.remove("open");
  cartBackdrop.classList.remove("show");
}

function formatCurrency(value) {
  return `$${value.toFixed(0)}`;
}

function handleCheckout() {
  if (!state.cart.length) return alert("Your cart is empty.");
  openCheckoutModal();
}

function submitCheckout(e) {
  e.preventDefault();
  if (!state.cart.length) {
    closeCheckoutModal();
    return alert("Your cart is empty.");
  }

  const name = nameInput.value.trim();
  const phone = phoneInput.value.replace(/\s|-/g, "");
  const locationKey = locationSelect.value;
  const location = deliveryAreas.find((area) => area.key === locationKey);

  checkoutError.textContent = "";

  if (!name || !phone || !locationKey) {
    checkoutError.textContent = "Please fill name, phone, and delivery area.";
    if (!name) nameInput.focus();
    else if (!phone) phoneInput.focus();
    else locationSelect.focus();
    return;
  }

  if (!name) {
    checkoutError.textContent = "Please enter your name.";
    nameInput.focus();
    return;
  }

  if (!isLebanesePhone(phone)) {
    checkoutError.textContent = "Enter a valid Lebanese number (e.g., +96171234567).";
    phoneInput.focus();
    return;
  }

  if (!location) {
    checkoutError.textContent = "Please select your delivery area.";
    locationSelect.focus();
    return;
  }

  let subtotal = 0;
  const orderLines = [];
  state.cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;
    subtotal += product.price * item.qty;
    orderLines.push(`${product.name} x${item.qty} - ${formatCurrency(product.price * item.qty)}`);
  });

  const lines = [
    "New j-holic order",
    "----------------",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Area: ${location.label}`,
    "",
    ...orderLines,
    `Subtotal: ${formatCurrency(subtotal)}`,
    `Delivery (${location.label}): ${formatCurrency(location.fee)}`,
    `Total with delivery: ${formatCurrency(subtotal + location.fee)}`,
    "",
    "Preferred contact: WhatsApp",
    "Notes: ",
  ];

  const message = encodeURIComponent(lines.join("\n"));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  closeCheckoutModal();
  window.open(url, "_blank");
}

function isLebanesePhone(value) {
  const cleaned = value.replace(/\D/g, "");
  // Accept +961 / 961 / 0 followed by 7-8 digits (Lebanese mobile/landline lengths)
  const lebaneseRegex = /^(?:961|0)(?:[1-9]\d{7}|[1-9]\d{6})$/;
  const plusRegex = /^961(?:[1-9]\d{7}|[1-9]\d{6})$/;

  if (value.startsWith("+")) {
    return plusRegex.test(cleaned);
  }
  return lebaneseRegex.test(cleaned);
}

function buildCheckoutModal() {
  checkoutModal = document.createElement("div");
  checkoutModal.className = "modal-backdrop";
  const areaOptions = deliveryAreas.map(
    (area) => `<option value="${area.key}">${area.label} (${formatCurrency(area.fee)} delivery)</option>`
  ).join("");
  checkoutModal.innerHTML = `
    <div class="modal-panel">
      <div class="modal-header">
        <div>
          <p class="eyebrow">Finalize</p>
          <h3>Delivery details</h3>
        </div>
        <button class="icon close-modal" aria-label="Close modal">x</button>
      </div>
      <form class="modal-form">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your full name" required />
        </label>
        <label>
          <span>Phone (Lebanon)</span>
          <input type="tel" name="phone" placeholder="+96171234567" required />
        </label>
        <label>
          <span>Delivery area</span>
          <select name="location" required>
            <option value="">Select area (delivery added)</option>
            ${areaOptions}
          </select>
        </label>
        <div class="form-summary">
          <div>
            <span>Delivery</span>
            <strong id="deliveryFee">--</strong>
          </div>
          <div>
            <span>Order total</span>
            <strong id="deliveryTotal">--</strong>
          </div>
        </div>
        <p class="form-note">We confirm everything via WhatsApp before shipping.</p>
        <p class="form-error" aria-live="polite"></p>
        <button type="submit" class="primary block">Send order via WhatsApp</button>
      </form>
    </div>
  `;
  document.body.appendChild(checkoutModal);

  checkoutForm = checkoutModal.querySelector("form");
  nameInput = checkoutForm.querySelector('input[name="name"]');
  phoneInput = checkoutForm.querySelector('input[name="phone"]');
  locationSelect = checkoutForm.querySelector('select[name="location"]');
  checkoutError = checkoutForm.querySelector(".form-error");
  checkoutDelivery = checkoutForm.querySelector("#deliveryFee");
  checkoutTotal = checkoutForm.querySelector("#deliveryTotal");

  checkoutForm.addEventListener("submit", submitCheckout);
  locationSelect.addEventListener("change", updateCheckoutSummary);
  checkoutModal.querySelector(".close-modal").addEventListener("click", closeCheckoutModal);
  checkoutModal.addEventListener("click", (e) => {
    if (e.target === checkoutModal) closeCheckoutModal();
  });
}

function attachEvents() {
  checkoutBtn.addEventListener("click", handleCheckout);
  cartToggle.addEventListener("click", openCart);
  closeCart.addEventListener("click", closeCartPanel);
  cartBackdrop.addEventListener("click", closeCartPanel);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartPanel();
      closeCheckoutModal();
    }
  });
}

function openCheckoutModal() {
  if (!checkoutModal) return;
  checkoutModal.classList.add("show");
  updateCheckoutSummary();
  nameInput.focus();
}

function closeCheckoutModal() {
  if (!checkoutModal) return;
  checkoutModal.classList.remove("show");
  checkoutError.textContent = "";
}

function getCartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return sum;
    return sum + product.price * item.qty;
  }, 0);
}

function updateCheckoutSummary() {
  if (!checkoutDelivery || !checkoutTotal) return;
  const subtotal = getCartSubtotal();
  const location = deliveryAreas.find((area) => area.key === locationSelect.value);
  const fee = location ? location.fee : 0;
  checkoutDelivery.textContent = location ? formatCurrency(fee) : "--";
  checkoutTotal.textContent = formatCurrency(subtotal + fee);
}

function createBubbles() {
  if (!bubbleField) return;
  const bubbleCount = 28;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < bubbleCount; i += 1) {
    const bubble = document.createElement("span");
    bubble.className = "bubble";
    const size = Math.random() * 22 + 12; // 12-34px
    const left = Math.random() * 100;
    const delay = Math.random() * -12;
    const duration = Math.random() * 12 + 12;
    bubble.style.setProperty("--size", `${size}px`);
    bubble.style.left = `${left}%`;
    bubble.style.bottom = `${Math.random() * 40 - 10}%`;
    bubble.style.animationDelay = `${delay}s`;
    bubble.style.setProperty("--duration", `${duration}s`);
    frag.appendChild(bubble);
  }
  bubbleField.appendChild(frag);
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", init);
