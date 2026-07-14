// ─────────────────────────────────────────
// 1. DATA
// ─────────────────────────────────────────

const products = [
  { id: 1, name: "Navy Suit", color: "navy", price: 299, type: "suit", fit: ["Slim", "Regular"], image: "suit-navy.png" },
  { id: 2, name: "Black Suit", color: "black", price: 299, type: "suit", fit: ["Slim", "Regular"], image: "suit-black.png" },
  { id: 3, name: "Charcoal Suit", color: "charcoal", price: 299, type: "suit", fit: ["Slim", "Regular"], image: "suit-charcoal.png" },
  { id: 4, name: "Grey Suit", color: "grey", price: 299, type: "suit", fit: ["Slim", "Regular"], image: "suit-grey.png" },
  { id: 5, name: "Brown Suit", color: "brown", price: 299, type: "suit", fit: ["Slim", "Regular"], image: "suit-brown.png" },
  { id: 6, name: "Burgundy Suit", color: "burgundy", price: 299, type: "suit", fit: ["Slim", "Regular"], image: "suit-burgundy.png" },
  { id: 7, name: "Tan Suit", color: "tan", price: 299, type: "suit", fit: ["Slim", "Regular"], image: "suit-tan.png" },
  { id: 8, name: "Royal Blue Suit", color: "royal-blue", price: 299, type: "suit", fit: ["Slim", "Regular"], image: "suit-royal-blue.png" },
  { id: 9, name: "Black Tuxedo — Shawl Lapel", color: "black", price: 349, type: "tuxedo", fit: ["Slim", "Regular"], image: "tuxedo-black-shawl.png" },
  { id: 10, name: "Black Tuxedo — Peak Lapel", color: "black", price: 349, type: "tuxedo", fit: ["Slim", "Regular"], image: "tuxedo-black-peak.png" },
  { id: 11, name: "Black Tuxedo — Notch Lapel", color: "black", price: 349, type: "tuxedo", fit: ["Slim", "Regular"], image: "tuxedo-black-notch.png" },
  { id: 12, name: "Navy Tuxedo", color: "navy", price: 349, type: "tuxedo", fit: ["Slim", "Regular"], image: "tuxedo-navy.png" },
  { id: 13, name: "White Tuxedo", color: "white", price: 349, type: "tuxedo", fit: ["Slim", "Regular"], image: "tuxedo-white.png" },
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

  const visual = document.getElementById('productVisual');
  if (visual) {
    visual.className = `product-visual-large ${product.color}`;
    visual.innerHTML = product.image
      ? `<img src="images/${product.image}" alt="${product.name}" loading="lazy">`
      : product.name;
  }

  const name = document.getElementById('productName');
  if (name) name.textContent = product.name;

  const type = document.getElementById('productType');
  if (type) type.textContent = product.type === 'suit' ? 'Suit' : 'Tuxedo';

  const price = document.getElementById('productPrice');
  if (price) price.textContent = `$${product.price}`;

  const desc = document.getElementById('productDescription');
  if (desc) desc.textContent = `The ${product.name} is available in both slim and regular fit. Mix and match your jacket and pant size independently for a perfect fit. In stock and ready to ship.`;

  const jacketSizes = ['36S','36R','36L','38S','38R','38L','40S','40R','40L','42S','42R','42L','44S','44R','44L','46R','46L'];
  const jacketContainer = document.getElementById('jacketSizes');
  if (jacketContainer) {
    jacketContainer.innerHTML = jacketSizes.map((s) =>
      `<button class="size-btn" onclick="selectSize(this, 'jacket')">${s}</button>`
    ).join('');
  }

  const pantSizes = ['28x28','28x30','30x28','30x30','30x32','32x28','32x30','32x32','34x28','34x30','34x32','36x30','36x32','38x30','38x32','40x30','40x32'];
  const pantContainer = document.getElementById('pantSizes');
  if (pantContainer) {
    pantContainer.innerHTML = pantSizes.map((s) =>
      `<button class="size-btn" onclick="selectSize(this, 'pant')">${s}</button>`
    ).join('');
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

let selectedJacket = null;
let selectedPant = null;
let selectedFit = 'slim';

const selectSize = (btn, type) => {
  const groupId = type === 'jacket' ? 'jacketSizes' : 'pantSizes';
  document.querySelectorAll(`#${groupId} .size-btn`).forEach((b) => b.classList.remove('selected'));
  btn.classList.add('selected');
  if (type === 'jacket') selectedJacket = btn.textContent;
  if (type === 'pant') selectedPant = btn.textContent;
  updateSummary();
};

const selectFit = (btn, fit) => {
  document.querySelectorAll('.fit-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  selectedFit = fit;
  updateSummary();
};

const updateSummary = () => {
  const summary = document.getElementById('selectedSummary');
  if (!summary) return;
  if (!selectedJacket && !selectedPant) {
    summary.textContent = 'Select your jacket and pant size above.';
    return;
  }
  summary.innerHTML = `
    ${selectedJacket ? `<strong>Jacket:</strong> ${selectedJacket}` : 'Select jacket size'}
    &nbsp;·&nbsp;
    ${selectedPant ? `<strong>Pant:</strong> ${selectedPant}` : 'Select pant size'}
    &nbsp;·&nbsp;
    <strong>Fit:</strong> ${selectedFit.charAt(0).toUpperCase() + selectedFit.slice(1)}
  `;
};

const addToCart = () => {
  if (!selectedJacket || !selectedPant) {
    alert('Please select both a jacket size and pant size.');
    return;
  }
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) cartCount.textContent = parseInt(cartCount.textContent) + 1;

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


// ─────────────────────────────────────────
// 8. INIT
// ─────────────────────────────────────────

const initializePage = () => {
  renderProducts();
  renderProductDetail();
  renderSuits();
  renderTuxedos();
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