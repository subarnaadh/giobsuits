// ─────────────────────────────────────────
// 1. DATA
// ─────────────────────────────────────────

const products = [
  // ── SUITS — real catalog, $850 each. Photos only exist for the 4
  // colors that match your original photo shoot (Navy/Black/Charcoal/
  // Royal Blue). Medium Grey, Light Grey, Beautiful Blue, and Beige
  // are real products but have NO matching photo yet — they render
  // as a plain color swatch until real photography exists.
  { id: 1, name: "Navy Super 150's Wool Suit", color: "navy", price: 850, type: "suit", fit: ["Slim", "Modern"], image: "suit-navy.png" },
  { id: 2, name: "Black Suit", color: "black", price: 850, type: "suit", fit: ["Slim", "Modern"], image: "suit-black.png" },
  { id: 3, name: "Charcoal Grey Super 150's Wool Suit", color: "charcoal", price: 850, type: "suit", fit: ["Slim", "Modern"], image: "suit-charcoal.png" },
  { id: 4, name: "Royal Blue Super 150's Wool", color: "royal-blue", price: 850, type: "suit", fit: ["Slim", "Modern"], image: "suit-royal-blue.png" },
  { id: 5, name: "Medium Grey Super 150's Wool Suit", color: "medium-grey", price: 850, type: "suit", fit: ["Slim", "Modern"] },
  { id: 6, name: "Light Grey Super 150's Wool Suit", color: "light-grey", price: 850, type: "suit", fit: ["Slim", "Modern"] },
  { id: 7, name: "Beautiful Blue Super 150's Wool Suit", color: "beautiful-blue", price: 850, type: "suit", fit: ["Slim", "Modern"] },
  { id: 8, name: "Beige Super 150's Suit", color: "beige", price: 850, type: "suit", fit: ["Slim", "Modern"] },

  // ── TUXEDOS — real catalog, $950 each. No White Tuxedo exists in
  // Shopify (it was in the original placeholder data only) — removed.
  { id: 9, name: "Black Shawl Lapel 1 Button Wool Tuxedo", color: "black", price: 950, type: "tuxedo", fit: ["Slim", "Modern"], image: "tuxedo-black-shawl.png" },
  { id: 10, name: "Black Peak Lapel Wool Tuxedo", color: "black", price: 950, type: "tuxedo", fit: ["Slim", "Modern"], image: "tuxedo-black-peak.png" },
  { id: 11, name: "Black Notch Wool Tuxedo", color: "black", price: 950, type: "tuxedo", fit: ["Slim", "Modern"], image: "tuxedo-black-notch.png" },
  { id: 12, name: "Navy Shawl Lapel Wool Tuxedo", color: "navy", price: 950, type: "tuxedo", fit: ["Slim", "Modern"], image: "tuxedo-navy.png" },

  // ── SHIRTS — real catalog. No photos exist yet, rendered as color
  // swatches. NOTE: "100% Premium Cotton Black Shirt" shows two
  // different prices ($55 and $125) across its size variants in the
  // Shopify export — that's a real data inconsistency, not something
  // I introduced. Using $125 (the price on the majority of its sizes)
  // — flag this to Gio to fix in Shopify.
  { id: 13, name: "100% Cotton White Shirt", color: "white-shirt", price: 100, type: "shirt", fit: ["Slim", "Modern"] },
  { id: 14, name: "100% Cotton French Cuff Shirt", color: "white-shirt", price: 100, type: "shirt", fit: ["Slim", "Modern"] },
  { id: 15, name: "100% Cotton White Tuxedo Shirt", color: "white-shirt", price: 100, type: "shirt", fit: ["Slim", "Modern"] },
  { id: 16, name: "100% Premium Cotton White Shirt", color: "white-shirt", price: 125, type: "shirt", fit: ["Slim", "Modern"] },
  { id: 17, name: "100% Premium White French Cuff Shirt", color: "white-shirt", price: 125, type: "shirt", fit: ["Slim", "Modern"] },
  { id: 18, name: "100% Premium White Tuxedo Shirt", color: "white-shirt", price: 125, type: "shirt", fit: ["Slim", "Modern"] },
  { id: 19, name: "100% Premium Light Blue Shirt", color: "light-blue", price: 125, type: "shirt", fit: ["Slim", "Modern"] },
  { id: 20, name: "100% Premium Cotton Black Shirt", color: "black", price: 125, type: "shirt", fit: ["Slim", "Modern"] },
  { id: 21, name: "100% Premium Cotton Pink Shirt", color: "pink", price: 125, type: "shirt", fit: ["Slim", "Modern"] },
  { id: 22, name: "100% Premium Cotton Lavender Shirt", color: "lavender", price: 125, type: "shirt", fit: ["Slim", "Modern"] },

  // ── PANTS (separates) — real catalog, $250 each. No photos exist
  // of the pants ALONE (only full-suit photos, which would be
  // misleading to show for a trousers-only product) — color swatches
  // for all of these until real standalone pants photography exists.
  { id: 23, name: "Black 100% Wool Pants", color: "black", price: 250, type: "pants", fit: ["Slim", "Modern"] },
  { id: 24, name: "Charcoal Grey 100% Wool Pant", color: "charcoal", price: 250, type: "pants", fit: ["Slim", "Modern"] },
  { id: 25, name: "Medium Grey 100% Wool Pant", color: "medium-grey", price: 250, type: "pants", fit: ["Slim", "Modern"] },
  { id: 26, name: "Light Grey 100% Wool Pants", color: "light-grey", price: 250, type: "pants", fit: ["Slim", "Modern"] },
  { id: 27, name: "Navy 100% Wool Pants", color: "navy", price: 250, type: "pants", fit: ["Slim", "Modern"] },
  { id: 28, name: "Royal Blue Wool Pants", color: "royal-blue", price: 250, type: "pants", fit: ["Slim", "Modern"] },

  // ── VESTS — real catalog, $55–100. No Fit option in Shopify for
  // these (just one size axis), so no fit array.
  { id: 29, name: "V-Black", color: "black", price: 100, type: "vest" },
  { id: 30, name: "V-Charcoal", color: "charcoal", price: 100, type: "vest" },
  { id: 31, name: "V-Medium Grey", color: "medium-grey", price: 100, type: "vest" },
  { id: 32, name: "V-Lite Grey", color: "light-grey", price: 100, type: "vest" },
  { id: 33, name: "V-Navy", color: "navy", price: 100, type: "vest" },
  { id: 34, name: "V-Beautiful Blue", color: "beautiful-blue", price: 100, type: "vest" },
  { id: 35, name: "V-Royal Blue", color: "royal-blue", price: 100, type: "vest" },
  { id: 36, name: "V-Beige", color: "beige", price: 100, type: "vest" },
  { id: 37, name: "Low Cut Black Wool Vest", color: "black", price: 55, type: "vest" },
  { id: 38, name: "V-Low Navy", color: "navy", price: 100, type: "vest" },
  { id: 39, name: "V-Low Black", color: "black", price: 100, type: "vest" },
];

const getProductById = (id) => products.find((p) => p.id === Number(id));

// Every product now carries its own photo filename, so this works
// for both suits and tuxedos even where multiple products share
// the same color (e.g. the 3 black tuxedo lapel styles).
const productVisualHTML = (product) => {
  if (!product.image) return '';
  return `<img src="images/${product.image}" alt="${product.name}" loading="lazy">`;
};


// ─────────────────────────────────────────
// 2. PRODUCT FUNCTIONS
// ─────────────────────────────────────────

const renderProducts = (filter = 'all') => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? products
    : products.filter((p) => p.type === filter);

  grid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <div class="product-visual ${product.color}">${productVisualHTML(product)}</div>
      <h3>${product.name}</h3>
      <p class="price">$${product.price}</p>
      <p>${product.fit.join(' & ')} fit available</p>
      <a href="product-detail.html?id=${product.id}" class="btn secondary">View Product</a>
    </article>
  `).join('');
};

const filterProducts = (type) => {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === type);
  });
  renderProducts(type);
};

const renderProductDetail = () => {
  const detailContainer = document.getElementById('productDetail');
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);

  if (!id) {
    detailContainer.innerHTML = `<div class="card"><h1>Product not found</h1><a href="products.html" class="btn">Back to Products</a></div>`;
    return;
  }

  const product = getProductById(id);
  if (!product) {
    detailContainer.innerHTML = `<div class="card"><h1>Product not found</h1><a href="products.html" class="btn">Back to Products</a></div>`;
    return;
  }

  currentProduct = product;
  currentSelections = {};
  currentFit = null;

  const visual = document.getElementById('productVisual');
  if (visual) {
    visual.className = `product-visual-large ${product.color}`;
    visual.innerHTML = product.image
      ? `<img src="images/${product.image}" alt="${product.name}" loading="lazy">`
      : product.name;
  }

  const name = document.getElementById('productName');
  if (name) name.textContent = product.name;

  const typeLabels = { suit: 'Suit', tuxedo: 'Tuxedo', shirt: 'Shirt', pants: 'Pants', vest: 'Vest' };
  const type = document.getElementById('productType');
  if (type) type.textContent = typeLabels[product.type] || product.type;

  const price = document.getElementById('productPrice');
  if (price) price.textContent = `$${product.price}`;

  const desc = document.getElementById('productDescription');
  if (desc) {
    desc.textContent = product.type === 'vest'
      ? `The ${product.name} is available in a full range of chest sizes. In stock and ready to ship.`
      : `The ${product.name} is available in both Slim and Modern fit. In stock and ready to ship.`;
  }

  // Build the size selector(s) for this product's type. A suit/tuxedo
  // gets Jacket + Pant; a shirt gets Neck; pants get Waist; a vest
  // gets Chest and no Fit option at all.
  const optionsContainer = document.getElementById('productOptions');
  const scheme = SIZE_SCHEMES[product.type] || [];
  if (optionsContainer) {
    const sizeGroupsHTML = scheme.map(({ key, label, sizes }) => `
      <div class="option-group">
        <label>${label}</label>
        <div class="size-grid" data-size-group="${key}">
          ${sizes.map((s) => `<button class="size-btn" onclick="selectSize(this, '${key}')">${s}</button>`).join('')}
        </div>
      </div>
    `).join('');

    const fitHTML = product.type === 'vest' ? '' : `
      <div class="option-group">
        <label>Fit</label>
        <div class="fit-options">
          <button class="fit-btn" onclick="selectFit(this, 'Slim')">Slim</button>
          <button class="fit-btn" onclick="selectFit(this, 'Modern')">Modern</button>
        </div>
      </div>
    `;

    optionsContainer.innerHTML = sizeGroupsHTML + fitHTML;
  }

  updateSummary();
};


const renderSuits = (colorFilter = 'all') => {
  const grid = document.getElementById('suitGrid');
  if (!grid) return;

  const suits = products.filter(p => p.type === 'suit');
  const filtered = colorFilter === 'all'
    ? suits
    : suits.filter(p => p.color === colorFilter);

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-visual ${product.color}">${productVisualHTML(product)}</div>
      <h3>${product.name}</h3>
      <p class="price">$${product.price}</p>
      <p>${product.fit.join(' & ')} fit available</p>
      <a href="product-detail.html?id=${product.id}" class="btn secondary">View Product</a>
    </article>
  `).join('');
};

const filterByColor = (color) => {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderSuits(color);
};

const renderTuxedos = (colorFilter = 'all') => {
  const grid = document.getElementById('tuxedoGrid');
  if (!grid) return;

  const tuxedos = products.filter(p => p.type === 'tuxedo');
  const filtered = colorFilter === 'all'
    ? tuxedos
    : tuxedos.filter(p => p.color === colorFilter);

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-visual ${product.color}">${productVisualHTML(product)}</div>
      <h3>${product.name}</h3>
      <p class="price">$${product.price}</p>
      <p>${product.fit.join(' & ')} fit available</p>
      <a href="product-detail.html?id=${product.id}" class="btn secondary">View Product</a>
    </article>
  `).join('');
};

const filterTuxedos = (color) => {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderTuxedos(color);
};

// Shared renderer for Shirts / Pants / Vests grids on the Shirts &
// Accessories page. No color filtering here (unlike suits/tuxedos) —
// just show everything in that type.
const renderByType = (gridId, type) => {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const items = products.filter(p => p.type === type);

  grid.innerHTML = items.map(product => `
    <article class="product-card">
      <div class="product-visual ${product.color}">${productVisualHTML(product)}</div>
      <h3>${product.name}</h3>
      <p class="price">$${product.price}</p>
      ${product.fit ? `<p>${product.fit.join(' & ')} fit available</p>` : ''}
      <a href="product-detail.html?id=${product.id}" class="btn secondary">View Product</a>
    </article>
  `).join('');
};

const openGroupModal = () => {
  document.getElementById('groupModal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeGroupModal = (e) => {
  if (!e || e.target.id === 'groupModal' || e.target.classList.contains('modal-close')) {
    document.getElementById('groupModal').classList.remove('open');
    document.body.style.overflow = '';
  }
};

const submitGroup = (e) => {
  e.preventDefault();
  document.getElementById('groupForm').style.display = 'none';
  document.getElementById('groupSuccess').style.display = 'block';
};


// ─────────────────────────────────────────
// 3. MEASUREMENT FORM
// ─────────────────────────────────────────

const initMeasurementForm = () => {
  const form = document.getElementById('measurementForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = ['firstName','lastName','email','weddingDate','suitColor','jacketSize','pantSize','fitPreference'];
    const allFilled = fields.every((id) => {
      const el = document.getElementById(id);
      return el && el.value.trim();
    });
    if (!allFilled) {
      alert('Please fill in all required fields.');
      return;
    }
    form.style.display = 'none';
    if (success) success.style.display = 'block';
  });
};


// ─────────────────────────────────────────
// 4. PRODUCT DETAIL INTERACTIONS
// ─────────────────────────────────────────

// Which size fields a product needs, based on its type. Suits/tuxedos
// need jacket AND pant; shirts need a neck size; pants need a waist
// size; vests need a chest size and have no Fit option at all (matches
// the real Shopify data — vests only have one option axis).
const SIZE_SCHEMES = {
  suit: [{ key: 'jacket', label: 'Jacket Size', sizes: ['36S','36R','36L','38S','38R','38L','40S','40R','40L','42S','42R','42L','44S','44R','44L','46R','46L'] },
         { key: 'pant', label: 'Pant Size', sizes: ['28x28','28x30','30x28','30x30','30x32','32x28','32x30','32x32','34x28','34x30','34x32','36x30','36x32','38x30','38x32','40x30','40x32'] }],
  tuxedo: [{ key: 'jacket', label: 'Jacket Size', sizes: ['36S','36R','36L','38S','38R','38L','40S','40R','40L','42S','42R','42L','44S','44R','44L','46R','46L'] },
           { key: 'pant', label: 'Pant Size', sizes: ['28x28','28x30','30x28','30x30','30x32','32x28','32x30','32x32','34x28','34x30','34x32','36x30','36x32','38x30','38x32','40x30','40x32'] }],
  shirt: [{ key: 'neck', label: 'Neck Size', sizes: ['14','14.5','15','15.5','16','16.5','17','17.5','18','18.5','19','19.5','20','20.5','21'] }],
  pants: [{ key: 'waist', label: 'Waist Size', sizes: ['29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','46','48','50','52'] }],
  vest: [{ key: 'chest', label: 'Chest Size', sizes: ['34','36','38','40','42','44','46','48','50','52','54','56','58'] }],
};

let currentProduct = null;
let currentSelections = {};
let currentFit = null;

const selectSize = (btn, groupKey) => {
  document.querySelectorAll(`[data-size-group="${groupKey}"] .size-btn`).forEach((b) => b.classList.remove('selected'));
  btn.classList.add('selected');
  currentSelections[groupKey] = btn.textContent;
  updateSummary();
};

const selectFit = (btn, fit) => {
  document.querySelectorAll('.fit-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  currentFit = fit;
  updateSummary();
};

const updateSummary = () => {
  const summary = document.getElementById('selectedSummary');
  if (!summary || !currentProduct) return;

  const scheme = SIZE_SCHEMES[currentProduct.type] || [];
  const parts = scheme.map(({ key, label }) =>
    currentSelections[key] ? `<strong>${label}:</strong> ${currentSelections[key]}` : `Select ${label.toLowerCase()}`
  );
  if (currentProduct.type !== 'vest') {
    parts.push(currentFit ? `<strong>Fit:</strong> ${currentFit}` : 'Select fit');
  }
  summary.innerHTML = parts.join('&nbsp;·&nbsp;');
};

// ─────────────────────────────────────────
// 4b. CART — persisted to localStorage so it survives page navigation
// on this multi-page site. Each line item is keyed by product ID +
// its exact size/fit selections, so ordering the same suit in two
// different sizes creates two separate lines, not one merged line.
// ─────────────────────────────────────────

const CART_KEY = 'giobCart';

const getCart = () => {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
};

const updateCartBadge = () => {
  const totalQty = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach((el) => {
    el.textContent = totalQty;
  });
};

// A stable string key for a cart line — same product + same exact
// selections = same line (quantity increments instead of duplicating).
const cartLineKey = (productId, selections, fit) =>
  `${productId}|${JSON.stringify(selections)}|${fit || ''}`;

const addToCart = () => {
  if (!currentProduct) return;

  const scheme = SIZE_SCHEMES[currentProduct.type] || [];
  const missing = scheme.filter(({ key }) => !currentSelections[key]);
  if (missing.length) {
    alert(`Please select ${missing.map(m => m.label.toLowerCase()).join(' and ')}.`);
    return;
  }
  if (currentProduct.type !== 'vest' && !currentFit) {
    alert('Please select a fit.');
    return;
  }

  const cart = getCart();
  const key = cartLineKey(currentProduct.id, currentSelections, currentFit);
  const existing = cart.find((item) => item.key === key);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      productId: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      image: currentProduct.image || null,
      color: currentProduct.color,
      selections: { ...currentSelections },
      fit: currentFit,
      qty: 1,
    });
  }
  saveCart(cart);

  const btn = document.getElementById('addToCart');
  if (btn) {
    btn.textContent = '✓ Added to Cart';
    btn.style.background = '#1a6b2e';
    btn.style.borderColor = '#1a6b2e';
    setTimeout(() => {
      btn.textContent = 'Add to Cart →';
      btn.style.background = '';
      btn.style.borderColor = '';
    }, 2000);
  }
};

const removeCartItem = (key) => {
  const cart = getCart().filter((item) => item.key !== key);
  saveCart(cart);
  renderCartPage();
};

const changeCartQty = (key, delta) => {
  const cart = getCart();
  const item = cart.find((i) => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    return removeCartItem(key);
  }
  saveCart(cart);
  renderCartPage();
};

const renderCartPage = () => {
  const container = document.getElementById('cartItems');
  const emptyState = document.getElementById('cartEmpty');
  const summaryEl = document.getElementById('cartSummary');
  if (!container) return; // not on the cart page

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (summaryEl) summaryEl.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (summaryEl) summaryEl.style.display = 'block';

  container.innerHTML = cart.map((item) => {
    const selectionsText = Object.entries(item.selections)
      .map(([k, v]) => `${k.charAt(0).toUpperCase() + k.slice(1)}: ${v}`)
      .join(' · ');
    const fitText = item.fit ? ` · Fit: ${item.fit}` : '';
    const visualHTML = item.image
      ? `<img src="images/${item.image}" alt="${item.name}" loading="lazy">`
      : '';
    return `
      <div class="cart-item">
        <div class="cart-item-visual ${item.color}">${visualHTML}</div>
        <div class="cart-item-info">
          <h3>${item.name}</h3>
          <p class="cart-item-options">${selectionsText}${fitText}</p>
          <div class="cart-qty-stepper">
            <button onclick="changeCartQty('${item.key}', -1)" aria-label="Decrease quantity">−</button>
            <span>${item.qty}</span>
            <button onclick="changeCartQty('${item.key}', 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <div class="cart-item-price">
          <p class="cart-line-total">$${(item.price * item.qty).toFixed(2)}</p>
          <button class="cart-remove-btn" onclick="removeCartItem('${item.key}')">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)}`;
};

const handleCheckout = () => {
  alert('Checkout isn\'t connected yet — this will redirect to Shopify\'s secure checkout once the Storefront API integration (Phase 3) is complete. No payment is being processed right now.');
};


// ─────────────────────────────────────────
// 5. SLIDER
// ─────────────────────────────────────────

let currentSlide = 0;
let slideInterval = null;
let slides = [];
let dots = [];

const goToSlide = (index) => {
  if (!slides.length || !dots.length) return;
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
};

const changeSlide = (direction) => goToSlide(currentSlide + direction);


// ─────────────────────────────────────────
// 6. NAVIGATION
// ─────────────────────────────────────────

const initializeNavigation = () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.primary-navigation ul');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
};


// ─────────────────────────────────────────
// 6b. SUZY CHAT WIDGET (UI only — not wired to a real backend yet)
// ─────────────────────────────────────────

const openChatWidget = () => {
  const panel = document.getElementById('chatPanel');
  if (panel) panel.classList.add('open');
};

const closeChatWidget = () => {
  const panel = document.getElementById('chatPanel');
  if (panel) panel.classList.remove('open');
};


// ─────────────────────────────────────────
// 7. EXPOSE GLOBAL FUNCTIONS
// ─────────────────────────────────────────

window.filterProducts = filterProducts;
window.filterByColor = filterByColor;
window.filterTuxedos = filterTuxedos;
window.goToSlide = goToSlide;
window.changeSlide = changeSlide;
window.selectSize = selectSize;
window.selectFit = selectFit;
window.addToCart = addToCart;
window.openGroupModal = openGroupModal;
window.closeGroupModal = closeGroupModal;
window.submitGroup = submitGroup;
window.openChatWidget = openChatWidget;
window.closeChatWidget = closeChatWidget;
window.removeCartItem = removeCartItem;
window.changeCartQty = changeCartQty;
window.handleCheckout = handleCheckout;


// ─────────────────────────────────────────
// 8. INIT
// ─────────────────────────────────────────

const initializePage = () => {
  renderProducts();
  renderProductDetail();
  renderSuits();
  renderTuxedos();
  renderByType('shirtGrid', 'shirt');
  renderByType('pantsGrid', 'pants');
  renderByType('vestGrid', 'vest');
  renderCartPage();
  updateCartBadge();
  initializeNavigation();
  initMeasurementForm();

  slides = Array.from(document.querySelectorAll('.slide'));
  dots = Array.from(document.querySelectorAll('.dot'));

  if (slides.length && dots.length) {
    goToSlide(currentSlide);
    slideInterval = setInterval(() => changeSlide(1), 5000);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePage);
} else {
  initializePage();
}