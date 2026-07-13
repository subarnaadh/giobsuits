// ─────────────────────────────────────────
// 1. DATA
// ─────────────────────────────────────────

const products = [
  { id: 1, name: "Navy Suit", color: "navy", price: 299, type: "suit", fit: ["Slim", "Regular"] },
  { id: 2, name: "Black Suit", color: "black", price: 299, type: "suit", fit: ["Slim", "Regular"] },
  { id: 3, name: "Charcoal Suit", color: "charcoal", price: 299, type: "suit", fit: ["Slim", "Regular"] },
  { id: 4, name: "Grey Suit", color: "grey", price: 299, type: "suit", fit: ["Slim", "Regular"] },
  { id: 5, name: "Brown Suit", color: "brown", price: 299, type: "suit", fit: ["Slim", "Regular"] },
  { id: 6, name: "Burgundy Suit", color: "burgundy", price: 299, type: "suit", fit: ["Slim", "Regular"] },
  { id: 7, name: "Tan Suit", color: "tan", price: 299, type: "suit", fit: ["Slim", "Regular"] },
  { id: 8, name: "Royal Blue Suit", color: "royal-blue", price: 299, type: "suit", fit: ["Slim", "Regular"] },
  { id: 9, name: "Black Tuxedo — Shawl Lapel", color: "black", price: 349, type: "tuxedo", fit: ["Slim", "Regular"] },
  { id: 10, name: "Black Tuxedo — Peak Lapel", color: "black", price: 349, type: "tuxedo", fit: ["Slim", "Regular"] },
  { id: 11, name: "Black Tuxedo — Notch Lapel", color: "black", price: 349, type: "tuxedo", fit: ["Slim", "Regular"] },
  { id: 12, name: "Navy Tuxedo", color: "navy", price: 349, type: "tuxedo", fit: ["Slim", "Regular"] },
  { id: 13, name: "White Tuxedo", color: "white", price: 349, type: "tuxedo", fit: ["Slim", "Regular"] },
];

const getProductById = (id) => products.find((product) => product.id === Number(id));

// ─────────────────────────────────────────
// 2. PRODUCT FUNCTIONS
// ─────────────────────────────────────────

const renderProducts = (filter = 'all') => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const filtered = filter === 'all' ? products : products.filter((product) => product.type === filter);

  grid.innerHTML = filtered
    .map(
      (product) => `
      <article class="product-card">
        <div class="product-visual ${product.color}"></div>
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <p>${product.fit.join(' & ')} fit available</p>
        <a href="product-detail.html?id=${product.id}" class="btn secondary">View Product</a>
      </article>
    `
    )
    .join('');
};

const filterProducts = (_event, type) => {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === type);
  });
  renderProducts(type);
};

const renderProductDetail = () => {
  const detailContainer = document.getElementById('productDetail');
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = getProductById(productId);

  if (!product) {
    detailContainer.innerHTML = `
      <div class="product-detail-empty card">
        <h1>Product not found</h1>
        <p>We couldn't find the item you're looking for. Please return to the shop and choose another style.</p>
        <a href="products.html" class="btn">Back to Products</a>
      </div>
    `;
    return;
  }

  detailContainer.innerHTML = `
    <article class="product-detail card">
      <div class="product-detail-visual ${product.color}"></div>
      <div class="product-detail-copy">
        <h1>${product.name}</h1>
        <p class="price">$${product.price}</p>
        <p>${product.fit.join(' & ')} fit available</p>
        <p>${
          product.type === 'tuxedo'
            ? 'Our tuxedos are made with polished details and premium lining for formal events.'
            : 'Our suits are crafted from premium fabrics for a tailored everyday and special occasion look.'
        }</p>
        <div class="product-detail-meta">
          <span>Type: ${product.type}</span>
          <span>Fits: ${product.fit.join(', ')}</span>
        </div>
        <a href="cart.html" class="btn secondary">Add to Cart</a>
      </div>
    </article>
  `;
};

// ─────────────────────────────────────────
// Measurement Form Handling
// ─────────────────────────────────────────


const measurementForm = document.getElementById('measurementForm');
const formSuccess = document.getElementById('formSuccess');

if (measurementForm) {
  measurementForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const weddingDate = document.getElementById('weddingDate').value;
    const suitColor = document.getElementById('suitColor').value;
    const jacketSize = document.getElementById('jacketSize').value;
    const pantSize = document.getElementById('pantSize').value;
    const fitPreference = document.getElementById('fitPreference').value;

    if (!firstName || !lastName || !email || !weddingDate || !suitColor || !jacketSize || !pantSize || !fitPreference) {
      alert('Please fill in all required fields.');
      return;
    }

    measurementForm.style.display = 'none';
    formSuccess.style.display = 'block';
  });
}

// ─────────────────────────────────────────
// Product Detail
// ─────────────────────────────────────────

const renderProductDetail = () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  if (!id) return;

  const product = products.find(p => p.id === id);
  if (!product) return;

  // Set visual
  const visual = document.getElementById('productVisual');
  if (visual) {
    visual.classList.add(product.color);
    visual.textContent = product.name;
  }

  // Set text content
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productType').textContent = product.type === 'suit' ? 'Suit' : 'Tuxedo';
  document.getElementById('productPrice').textContent = `$${product.price}`;
  document.getElementById('productDescription').textContent =
    `The ${product.name} is available in both slim and regular fit. Mix and match your jacket and pant size independently for a perfect fit. In stock and ready to ship.`;

  // Jacket sizes
  const jacketSizes = ['36S','36R','36L','38S','38R','38L','40S','40R','40L','42S','42R','42L','44S','44R','44L','46R','46L'];
  document.getElementById('jacketSizes').innerHTML = jacketSizes.map(size =>
    `<button class="size-btn" onclick="selectSize(this, 'jacket')">${size}</button>`
  ).join('');

  // Pant sizes
  const pantSizes = ['28x28','28x30','30x28','30x30','30x32','32x28','32x30','32x32','34x28','34x30','34x32','36x30','36x32','38x30','38x32','40x30','40x32'];
  document.getElementById('pantSizes').innerHTML = pantSizes.map(size =>
    `<button class="size-btn" onclick="selectSize(this, 'pant')">${size}</button>`
  ).join('');
};

let selectedJacket = null;
let selectedPant = null;
let selectedFit = 'slim';

const selectSize = (btn, type) => {
  const group = type === 'jacket' ? 'jacketSizes' : 'pantSizes';
  document.querySelectorAll(`#${group} .size-btn`).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  if (type === 'jacket') selectedJacket = btn.textContent;
  if (type === 'pant') selectedPant = btn.textContent;
  updateSummary();
};

const selectFit = (btn, fit) => {
  document.querySelectorAll('.fit-btn').forEach(b => b.classList.remove('active'));
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
  if (cartCount) {
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
  }
  const btn = document.getElementById('addToCart');
  btn.textContent = '✓ Added to Cart';
  btn.style.background = '#1a6b2e';
  btn.style.borderColor = '#1a6b2e';
  setTimeout(() => {
    btn.textContent = 'Add to Cart →';
    btn.style.background = '';
    btn.style.borderColor = '';
  }, 2000);
};


// ─────────────────────────────────────────
// 3. SLIDER
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
// 4. NAVIGATION — hamburger menu
// ─────────────────────────────────────────

const initializeNavigation = () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.primary-navigation ul');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
};

// Expose functions used by inline event handlers.
window.filterProducts = filterProducts;
window.goToSlide = goToSlide;
window.changeSlide = changeSlide;

// ─────────────────────────────────────────
// 5. CALLS — run everything
// ─────────────────────────────────────────

const initializePage = () => {
  renderProducts();
  renderProductDetail();
  initializeNavigation();

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
