const WHATSAPP_NUMBER = "96171561608"; // Update with your WhatsApp number (country code + number, no plus sign)

const products = [
  {
    id: "detangling-spray",
    name: "Detangling spray",
    price: 6,
    category: "Hair",
    description: "200ml. With betaine and panthenol. Silicone-free. No sticking or weighing down. Small knots unravel without pulling.",
    image: "assets/p1.jpeg",
  },
  {
    id: "sheet-mask-aha-bha",
    name: "Sheet mask AHA & BHA",
    price: 4.5,
    category: "Skin",
    description: "1 pc. Vegan. With AHA and BHA fruit acids. Removes dead skin cells and refines pores. Helps prevent blemishes and pimples for a natural glow.",
    image: "assets/p2.jpeg",
  },
  {
    id: "vitamin-c-face-mask",
    name: "Vitamin C face mask",
    price: 3.5,
    category: "Skin",
    description: "16 ml. 24-hour moisturizing with vitamin C and hyaluronic acid. Antioxidant effect. Vegan.",
    image: "assets/p3.jpeg",
  },
  {
    id: "hair-color-removal-cream",
    name: "Hair color removal cream",
    price: 16,
    category: "Hair",
    description: "100 ml. Makes hairs invisible for face, upper lip, arms, and legs. Suitable for all skin types. Individually dosable.",
    image: "assets/p4.jpeg",
  },
  {
    id: "fixing-brush-stick",
    name: "Fixing Brush Styling Finishing Stick",
    price: 9.5,
    category: "Hair",
    description: "10 ml. Against baby hairs. Quick fixation of stray hairs. Easy control. Apply to dry hair.",
    image: "assets/p5.jpeg",
  },
  {
    id: "soft-cotton-dry-shampoo",
    name: "Soft Cotton dry shampoo",
    price: 7.5,
    category: "Hair",
    description: "200 ml. Floral-fresh scent. Fresh hair without washing in seconds. No visible residue after brushing.",
    image: "assets/p6.jpeg",
  },
  {
    id: "braun-dry-shampoo",
    name: "Braun dry shampoo",
    price: 8,
    category: "Skin",
    description: "200 ml. For dark hair. Fresh hair without washing in seconds. No visible residue after brushing.",
    image: "assets/p7.jpeg",
  },
  {
    id: "makeup-remover-wipes",
    name: "3-in-1 Caring Makeup Remover Wipes",
    price: 4.5,
    category: "Makeup",
    description: "25 count. Gentle cleansing for a soft skin feeling. With vitamin E, provitamin B5, and almond oil. Fragrance-free. For dry and sensitive skin.",
    image: "assets/p8.jpeg",
  },
  {
    id: "oil-free-eye-pads",
    name: "Oil-free eye makeup remover pads",
    price: 5,
    category: "Makeup",
    description: "50 pieces. Oil-free eye pads for water-soluble makeup. Nourishes without leaving a greasy residue. Fragrance-free.",
    image: "assets/p9.jpeg",
  },
  {
    id: "micellar-eye-pads",
    name: "Micellar eye makeup remover pads, oil-based",
    price: 5,
    category: "Makeup",
    description: "50 count. Oily eye pads for waterproof makeup. Conditions the eyelashes. Fragrance-free.",
    image: "assets/p10.jpeg",
  },
  {
    id: "hair-removal-cream",
    name: "Hair removal cream",
    price: 5,
    category: "Body",
    description: "125 ml. Suitable for sensitive skin. Removes body hair easily and safely. With shea butter, silk, and lotus extract.",
    image: "assets/p11.jpeg",
  },
  {
    id: "retinol-sheet-mask",
    name: "Retinol sheet mask",
    price: 4.5,
    category: "Skin",
    description: "1 pc. Provides intense moisture with retinol, phytosqualane, and vitamin E. Firming and smoothing.",
    image: "assets/p12.jpeg",
  },
  {
    id: "bamboo-head-massage-brush",
    name: "Bamboo head massage brush",
    price: 20.5,
    category: "Hair",
    description: "1 pc. Made from premium bamboo - 100% FSC. Antistatic. Soothing massage sensation. Suitable for all hair lengths and hair types.",
    image: "assets/p13.jpeg",
  },
  {
    id: "shaving-oil",
    name: "Shaving oil",
    price: 7.5,
    category: "Body",
    description: "75 ml. With 5-fold care oil complex. For sensitive skin. Forms a protective barrier between the blade and the skin. Calms stressed skin for a silky-smooth feel.",
    image: "assets/p14.jpeg",
  },
  {
    id: "anti-blackhead-nose-strips",
    name: "Anti-blackhead nose strips, skin cleanser",
    price: 5,
    category: "Skin",
    description: "3 pieces. Removes blackheads on nose, chin, and forehead. Deep pore cleaning with salicylic acid and tea tree oil.",
    image: "assets/p15.jpeg",
  },
  {
    id: "anti-acne-patches",
    name: "Anti-acne patches, skin clear",
    price: 7,
    category: "Skin",
    description: "36 pieces. With salicylic acid for fast, targeted drying. Transparent patches in two diameters. Results visible after first application.",
    image: "assets/p16.jpeg",
  },
  {
    id: "moisturizing-hair-milk",
    name: "Moisturizing Hair Milk",
    price: 5,
    category: "Hair",
    description: "200 ml. Coconut and papaya scent. Anti-dryness effect for dry & damaged hair. Silicone-free. Vegan.",
    image: "assets/p17.jpeg",
  },
  {
    id: "natural-beauty-shower-gel",
    name: "Natural Beauty Shower Gel with Cherry Blossom Extract & Almond Oil",
    price: 4.5,
    category: "Body",
    description: "250 ml. With organic almond oil and cherry blossom extract. Dermatologically confirmed skin compatibility. pH skin neutral. Vegan.",
    image: "assets/p18.jpeg",
  },
  {
    id: "sensitive-deodorant-wipes",
    name: "Sensitive deodorant wipes",
    price: 6,
    category: "Skin",
    description: "10 pieces. Up to 24 hours of deodorant protection with aloe vera. Suitable for sensitive skin. Aluminum-free.",
    image: "assets/p19.jpeg",
  },
  {
    id: "lavender-herbal-bath",
    name: "Lavender herbal bath",
    price: 5.5,
    category: "Body",
    description: "500 ml. Dermatologically confirmed skin compatibility. With lavender oil. pH skin-neutral. Formula without microplastics and water-soluble, purely synthetic polymers.",
    image: "assets/p20.jpeg",
  },
];

const state = {
  activeFilter: "All",
  cart: [],
  showAllProducts: false,
  searchQuery: "",
};

const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const viewAllBtn = document.getElementById("viewAllBtn");
const productSearch = document.getElementById("productSearch");
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
      state.showAllProducts = false;
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

  const query = state.searchQuery.trim().toLowerCase();
  const searched = query
    ? filtered.filter((p) => p.name.toLowerCase().includes(query))
    : filtered;

  const displayList = state.showAllProducts ? searched : searched.slice(0, 12);
  displayList.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const badge = product.badge ? `<span class="badge">${product.badge}</span>` : "";
    const imageSrc = product.image || "assets/placeholder.jpg";

    const isMobile = window.matchMedia("(max-width: 540px)").matches;
    if (isMobile) {
      card.classList.add("desc-collapsed");
    }

    card.innerHTML = `
      ${badge}
      <div class="card-glow"></div>
      <div class="product-visual">
        <img src="${imageSrc}" alt="${product.name}">
      </div>
      <div class="product-body">
        <p class="eyebrow">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="subtle product-desc">${product.description}</p>
        <div class="product-footer">
          <div class="product-inline">
            <button class="toggle-desc" type="button">${isMobile ? "Details" : "Hide details"}</button>
            <span class="price price-mobile">${formatCurrency(product.price)}</span>
          </div>
          <div class="product-meta">
            <span class="price price-desktop">${formatCurrency(product.price)}</span>
            <div class="card-actions">
              <button class="add">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    `;

    card.querySelector(".add").addEventListener("click", () => addToCart(product.id));
    const toggleBtn = card.querySelector(".toggle-desc");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const isCollapsed = card.classList.toggle("desc-collapsed");
        toggleBtn.textContent = isCollapsed ? "Details" : "Hide details";
      });
    }
    productGrid.appendChild(card);
  });

  if (viewAllBtn) {
    const canShowAll = searched.length > 12;
    viewAllBtn.classList.toggle("hidden", !canShowAll);
    const label = state.activeFilter === "All" ? "products" : state.activeFilter;
    viewAllBtn.textContent = state.showAllProducts
      ? `Show fewer ${label}`
      : `View all ${label}`;
  }
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
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? `$${rounded}` : `$${rounded.toFixed(1)}`;
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
  if (productSearch) {
    productSearch.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      state.showAllProducts = false;
      renderProducts();
    });
  }
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", () => {
      state.showAllProducts = !state.showAllProducts;
      renderProducts();
    });
  }

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
