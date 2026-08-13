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
// 1c. DISPLAY NAME — one naming convention, applied everywhere.
// The raw `name` field stays untouched (it mirrors the Shopify
// export, and Gio manages that data), but every listing/detail view
// renders through this so labeling is consistent site-wide and the
// wool story is baked into the product name itself.
//
// Convention: "100% Australian Wool [Color] [Style descriptor] [Type]"
//   e.g. "100% Australian Wool Navy Suit"
//        "100% Australian Wool Black Shawl Lapel Tuxedo"
// Cotton items (shirts) and un-confirmed-fabric items (vests) are
// left as-is rather than guessed at.
// ─────────────────────────────────────────

const COLOR_LABELS = {
  navy: 'Navy', black: 'Black', charcoal: 'Charcoal Grey', grey: 'Grey',
  'medium-grey': 'Medium Grey', 'light-grey': 'Light Grey', brown: 'Brown',
  burgundy: 'Burgundy', tan: 'Tan', 'royal-blue': 'Royal Blue',
  'beautiful-blue': 'Beautiful Blue', beige: 'Beige', 'white-tux': 'White',
  'navy-tux': 'Navy', 'black-tux': 'Black', 'white-shirt': 'White',
  'light-blue': 'Light Blue', pink: 'Pink', lavender: 'Lavender',
};

const TYPE_LABELS = { suit: 'Suit', tuxedo: 'Tuxedo', shirt: 'Shirt', pants: 'Pants', vest: 'Vest' };

// Words stripped out of the raw name before rebuilding it — fabric
// references (we state fabric via the "100% Australian Wool" prefix
// instead), the color itself (re-added from COLOR_LABELS), and
// generic type words (re-added from TYPE_LABELS).
const NAME_STOPWORDS = [
  "100%", "super 150's", "super 150s", "premium", "wool", "cotton",
  "pant", "pants", "suit", "tuxedo", "shirt", "vest",
];

const formatProductName = (product) => {
  // Only suits, tuxedos, and wool pants get the wool-forward rename —
  // shirts (cotton) and vests (fabric unconfirmed) keep their given name.
  if (!['suit', 'tuxedo', 'pants'].includes(product.type)) return product.name;

  const colorLabel = COLOR_LABELS[product.color] || product.color;
  const typeLabel = product.type === 'pants' ? 'Pants' : TYPE_LABELS[product.type];

  // Strip fabric/type/color words out of the raw name, keep whatever
  // distinguishing style words are left (e.g. "Shawl Lapel", "Peak Lapel").
  let leftover = product.name;
  const colorWords = colorLabel.split(' ');
  [...NAME_STOPWORDS, ...colorWords].forEach((word) => {
    leftover = leftover.replace(new RegExp(`\\b${word.replace(/'/g, "\\'")}\\b`, 'gi'), ' ');
  });
  leftover = leftover.replace(/\s+/g, ' ').trim();

  const styleWords = leftover ? ` ${leftover}` : '';
  return `100% Australian Wool ${colorLabel}${styleWords} ${typeLabel}`.replace(/\s+/g, ' ').trim();
};

// ─────────────────────────────────────────
// 1d. PRODUCT CARD — single source of truth for every listing grid
// (All Products, Suits, Tuxedos, Shirts, Pants, Accessories).
//
// Uses the "stretched link" pattern: the whole card is clickable via
// an absolutely-positioned <a> covering it, which lets the like
// button sit on top and stay independently clickable without illegal
// nested <a><button></a> markup.
// ─────────────────────────────────────────

const LIKED_KEY = 'suitStandardLikedProducts';

const getLikedIds = () => {
  try {
    return JSON.parse(localStorage.getItem(LIKED_KEY)) || [];
  } catch (e) {
    return [];
  }
};

const toggleLike = (e, id) => {
  e.preventDefault();
  e.stopPropagation();
  const liked = getLikedIds();
  const idx = liked.indexOf(id);
  if (idx > -1) liked.splice(idx, 1); else liked.push(id);
  localStorage.setItem(LIKED_KEY, JSON.stringify(liked));
  const btn = e.currentTarget;
  btn.classList.toggle('liked', idx === -1);
  btn.textContent = idx === -1 ? '♥' : '♡';
};

// Static placeholder rating until a real review system exists —
// same value everywhere for now, per Gio/Subarna's call.
const ratingHTML = () => `
  <div class="product-rating">
    <span class="stars" aria-hidden="true">★★★★☆</span>
    <span class="rating-score">4.5</span>
    <a href="#" class="reviews-link" onclick="event.preventDefault(); event.stopPropagation();">Reviews</a>
  </div>
`;

const productCardHTML = (product) => {
  const liked = getLikedIds().includes(product.id);
  return `
  <article class="product-card">
    <div class="product-visual ${product.color}">
      ${productVisualHTML(product)}
      <button type="button" class="like-btn ${liked ? 'liked' : ''}" onclick="toggleLike(event, ${product.id})" aria-label="Save this item">${liked ? '♥' : '♡'}</button>
    </div>
    <div class="product-card-info">
      <h3>${formatProductName(product)}</h3>
      <p class="price">$${product.price}</p>
      ${ratingHTML()}
    </div>
    <a href="product-detail.html?id=${product.id}" class="product-card-link" aria-label="View ${formatProductName(product)}"></a>
  </article>
`;
};


// ─────────────────────────────────────────
// 2. PRODUCT FUNCTIONS
// ─────────────────────────────────────────

// ─────────────────────────────────────────
// 1b. FILTER SIDEBAR — Gender/Fit/Price, shared across every
// product-listing page. Works alongside the existing type/color
// filter buttons rather than replacing them.
// ─────────────────────────────────────────

const sidebarFilters = { fits: [], priceMin: null, priceMax: null };

// Track each page's current primary filter (type or color) so that
// toggling a sidebar filter re-renders without losing that selection.
let currentProductTypeFilter = 'all';
let currentSuitColorFilter = 'all';
let currentTuxedoColorFilter = 'all';
let currentTuxedoLapelFilter = 'all';

const applySidebarFilters = (items) => items.filter((p) => {
  if (sidebarFilters.fits.length > 0) {
    if (!p.fit || !p.fit.some((f) => sidebarFilters.fits.includes(f))) return false;
  }
  if (sidebarFilters.priceMin !== null && p.price < sidebarFilters.priceMin) return false;
  if (sidebarFilters.priceMax !== null && p.price > sidebarFilters.priceMax) return false;
  return true;
});

const reapplyAllFilters = () => {
  renderProducts(currentProductTypeFilter);
  renderSuits(currentSuitColorFilter);
  renderTuxedos(currentTuxedoColorFilter);
  renderByType('shirtGrid', 'shirt');
  renderByType('pantsGrid', 'pants');
  renderByType('vestGrid', 'vest');
};

const updateFilterUI = () => {
  const count = sidebarFilters.fits.length + ((sidebarFilters.priceMin !== null || sidebarFilters.priceMax !== null) ? 1 : 0);
  document.querySelectorAll('.filter-count').forEach((el) => { el.textContent = count; });

  const tags = [];
  sidebarFilters.fits.forEach((f) => tags.push({ label: `Fit: ${f}`, action: `removeFitFilter('${f}')` }));
  if (sidebarFilters.priceMin !== null || sidebarFilters.priceMax !== null) {
    const min = sidebarFilters.priceMin !== null ? `$${sidebarFilters.priceMin}` : '$0';
    const max = sidebarFilters.priceMax !== null ? `$${sidebarFilters.priceMax}` : '+';
    tags.push({ label: `Price: ${min}-${max}`, action: 'removePriceFilter()' });
  }
  document.querySelectorAll('.active-filter-tags').forEach((container) => {
    container.innerHTML = tags.map((t) => `<span class="filter-tag">${t.label} <button onclick="${t.action}">×</button></span>`).join('');
  });
};

const toggleFitFilter = (fit, checked) => {
  if (checked) {
    if (!sidebarFilters.fits.includes(fit)) sidebarFilters.fits.push(fit);
  } else {
    sidebarFilters.fits = sidebarFilters.fits.filter((f) => f !== fit);
  }
  reapplyAllFilters();
  updateFilterUI();
};

const setPricePreset = (min, max, btn) => {
  sidebarFilters.priceMin = min;
  sidebarFilters.priceMax = max;
  document.querySelectorAll('.price-preset-btn').forEach((b) => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.price-min-input').forEach((el) => { el.value = min ?? ''; });
  document.querySelectorAll('.price-max-input').forEach((el) => { el.value = max ?? ''; });
  reapplyAllFilters();
  updateFilterUI();
};

const applyPriceRange = (scopeEl) => {
  const container = scopeEl.closest('.filter-sidebar');
  const minEl = container.querySelector('.price-min-input');
  const maxEl = container.querySelector('.price-max-input');
  sidebarFilters.priceMin = minEl.value !== '' ? parseFloat(minEl.value) : null;
  sidebarFilters.priceMax = maxEl.value !== '' ? parseFloat(maxEl.value) : null;
  document.querySelectorAll('.price-preset-btn').forEach((b) => b.classList.remove('active'));
  reapplyAllFilters();
  updateFilterUI();
};

const removeFitFilter = (fit) => {
  sidebarFilters.fits = sidebarFilters.fits.filter((f) => f !== fit);
  document.querySelectorAll(`.fit-filter-checkbox[data-fit="${fit}"]`).forEach((cb) => { cb.checked = false; });
  reapplyAllFilters();
  updateFilterUI();
};

const removePriceFilter = () => {
  sidebarFilters.priceMin = null;
  sidebarFilters.priceMax = null;
  document.querySelectorAll('.price-preset-btn').forEach((b) => b.classList.remove('active'));
  document.querySelectorAll('.price-min-input, .price-max-input').forEach((el) => { el.value = ''; });
  reapplyAllFilters();
  updateFilterUI();
};

const clearAllFilters = () => {
  sidebarFilters.fits = [];
  sidebarFilters.priceMin = null;
  sidebarFilters.priceMax = null;
  document.querySelectorAll('.fit-filter-checkbox').forEach((cb) => { cb.checked = false; });
  document.querySelectorAll('.price-preset-btn').forEach((b) => b.classList.remove('active'));
  document.querySelectorAll('.price-min-input, .price-max-input').forEach((el) => { el.value = ''; });
  reapplyAllFilters();
  updateFilterUI();
};

const renderProducts = (filter = 'all') => {
  currentProductTypeFilter = filter;
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const byType = filter === 'all'
    ? products
    : products.filter((p) => p.type === filter);
  let filtered = applySidebarFilters(byType);

  // If the page was reached via a search (products.html?q=...), narrow
  // results to matching product names and show a heads-up note.
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q');
  const note = document.getElementById('searchResultsNote');
  if (query) {
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
    if (note) {
      note.textContent = `Showing ${filtered.length} result${filtered.length === 1 ? '' : 's'} for "${query}"`;
      note.style.display = 'block';
    }
  } else if (note) {
    note.style.display = 'none';
  }

  grid.innerHTML = filtered.map(productCardHTML).join('');
};

// Any search box on the site (nav, overlay, sidebar) funnels here —
// takes the user to the All Products page filtered by their query.
const handleSiteSearch = (inputEl) => {
  const query = inputEl.value.trim();
  if (!query) return;
  window.location.href = `products.html?q=${encodeURIComponent(query)}`;
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
    visual.className = `gallery-frame gallery-hero ${product.color}`;
    visual.innerHTML = product.image
      ? `<img src="images/${product.image}" alt="${product.name}" loading="lazy">`
      : product.name;
  }

  // Wool fabric info block — wool-forward copy for suits/tuxedos/pants
  // (their actual fabric), honest cotton copy for shirts, and a
  // neutral quality note for vests where fabric isn't confirmed yet.
  const woolBlock = document.getElementById('productWoolBlock');
  if (woolBlock) {
    const isWool = ['suit', 'tuxedo', 'pants'].includes(product.type);
    if (isWool) {
      woolBlock.innerHTML = `
        <div class="wool-block-visual">🐑</div>
        <div class="wool-block-copy">
          <span class="eyebrow">The Fabric</span>
          <h3>Cut From 100% Australian Wool</h3>
          <p>Never polyester. Wool breathes, regulates temperature, and holds its shape wear after wear — it's why this ${TYPE_LABELS[product.type] || product.type} feels as good at hour 12 as it does at hour one.</p>
          <a href="why.html">Why wool, not polyester? →</a>
        </div>
      `;
    } else if (product.type === 'shirt') {
      woolBlock.innerHTML = `
        <div class="wool-block-visual">🧵</div>
        <div class="wool-block-copy">
          <span class="eyebrow">The Fabric</span>
          <h3>100% Cotton, Built to Pair With Wool</h3>
          <p>Our shirts are 100% cotton — breathable and easy-care, made to sit right under a 100% Australian wool suit or tuxedo.</p>
          <a href="why.html">Why wool, not polyester? →</a>
        </div>
      `;
    } else {
      woolBlock.style.display = 'none';
    }
  }

  const name = document.getElementById('productName');
  if (name) name.textContent = formatProductName(product);

  const typeLabels = { suit: 'Suit', tuxedo: 'Tuxedo', shirt: 'Shirt', pants: 'Pants', vest: 'Vest' };
  const type = document.getElementById('productType');
  if (type) type.textContent = typeLabels[product.type] || product.type;

  const price = document.getElementById('productPrice');
  if (price) price.textContent = `$${product.price}`;

  const desc = document.getElementById('productDescription');
  if (desc) {
    const displayName = formatProductName(product);
    desc.textContent = product.type === 'vest'
      ? `The ${displayName} is available in a full range of chest sizes. In stock and ready to ship.`
      : `The ${displayName} is available in both Slim and Modern fit. In stock and ready to ship.`;
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
  currentSuitColorFilter = colorFilter;
  const grid = document.getElementById('suitGrid');
  if (!grid) return;

  const suits = products.filter(p => p.type === 'suit');
  const byColor = colorFilter === 'all'
    ? suits
    : suits.filter(p => p.color === colorFilter);
  const filtered = applySidebarFilters(byColor);

  grid.innerHTML = filtered.map(productCardHTML).join('');
};

const filterByColor = (color) => {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderSuits(color);
};

const renderTuxedos = (colorFilter = 'all') => {
  currentTuxedoColorFilter = colorFilter;
  const grid = document.getElementById('tuxedoGrid');
  if (!grid) return;

  const tuxedos = products.filter(p => p.type === 'tuxedo');
  const byColor = colorFilter === 'all'
    ? tuxedos
    : tuxedos.filter(p => p.color === colorFilter);
  const byLapel = currentTuxedoLapelFilter === 'all'
    ? byColor
    : byColor.filter(p => p.name.toLowerCase().includes(currentTuxedoLapelFilter));
  const filtered = applySidebarFilters(byLapel);

  grid.innerHTML = filtered.map(productCardHTML).join('');
};

const filterTuxedosByLapel = (lapel) => {
  currentTuxedoLapelFilter = lapel;
  document.querySelectorAll('.lapel-filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderTuxedos(currentTuxedoColorFilter);
};

const filterTuxedos = (color) => {
  document.querySelectorAll('.filter-btn:not(.lapel-filter-btn)').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderTuxedos(color);
};

// Shared renderer for Shirts / Pants / Vests grids on the Shirts &
// Accessories page. No color filtering here (unlike suits/tuxedos) —
// just show everything in that type.
const renderByType = (gridId, type) => {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const byType = products.filter(p => p.type === type);
  const items = applySidebarFilters(byType);

  grid.innerHTML = items.map(productCardHTML).join('');
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

// ─────────────────────────────────────────
// 2b. WEDDING PARTY BUILDER
//
// KNOWN LIMITATION (flag for Gio): this is stored in localStorage on
// the organizer's own browser — same-browser round-trips (organizer
// building the party, previewing their own member links) work fully,
// but a link opened on a groomsman's own phone/computer won't see
// this data until party records live on a real backend. The full
// front-end flow below is built and ready to swap onto real API
// calls once the backend exists — that's exactly today's Phase 2
// discussion with the seller dashboard.
// ─────────────────────────────────────────

const WEDDING_PARTY_KEY = 'suitStandardWeddingParties';
const PARTY_COLORS = [
  { key: 'navy', label: 'Navy' }, { key: 'black', label: 'Black' },
  { key: 'charcoal', label: 'Charcoal Grey' }, { key: 'medium-grey', label: 'Medium Grey' },
  { key: 'light-grey', label: 'Light Grey' }, { key: 'beautiful-blue', label: 'Beautiful Blue' },
  { key: 'royal-blue', label: 'Royal Blue' }, { key: 'beige', label: 'Beige' },
];

let currentParty = null;

const getAllParties = () => {
  try {
    return JSON.parse(localStorage.getItem(WEDDING_PARTY_KEY)) || {};
  } catch (e) {
    return {};
  }
};

const saveParty = (party) => {
  const all = getAllParties();
  all[party.id] = party;
  localStorage.setItem(WEDDING_PARTY_KEY, JSON.stringify(all));
  currentParty = party;
};

const getPartyById = (id) => getAllParties()[id] || null;

const submitGroup = (e) => {
  e.preventDefault();

  const party = {
    id: 'party_' + Date.now().toString(36),
    eventName: document.getElementById('groupEventName').value.trim(),
    location: document.getElementById('groupLocation').value.trim(),
    weddingDate: document.getElementById('groupWeddingDate').value,
    organizer: {
      firstName: document.getElementById('groupFirstName').value.trim(),
      lastName: document.getElementById('groupLastName').value.trim(),
      email: document.getElementById('groupEmail').value.trim(),
      role: document.getElementById('groupRole').value,
    },
    color: null,
    members: [],
  };
  saveParty(party);

  document.getElementById('groupForm').style.display = 'none';
  document.getElementById('groupSuccess').style.display = 'block';
  renderPartyBuilder();
};

const partyShareUrl = (party) =>
  `${window.location.origin}${window.location.pathname.replace('wedding.html', '')}wedding.html?party=${party.id}`;

const partyMemberUrl = (party, memberId) =>
  `${partyShareUrl(party)}&member=${memberId}#individual`;

const renderPartyBuilder = () => {
  if (!currentParty) return;

  const intro = document.getElementById('partyShareIntro');
  if (intro) {
    intro.textContent = `${currentParty.eventName || 'Your event'} is set up. Pick a color, then add your party so everyone gets their own link to submit measurements.`;
  }

  const shareLink = document.getElementById('partyShareLink');
  if (shareLink) shareLink.value = partyShareUrl(currentParty);

  const swatchWrap = document.getElementById('partyColorSwatches');
  if (swatchWrap) {
    swatchWrap.innerHTML = PARTY_COLORS.map(({ key, label }) => `
      <button type="button" class="party-color-swatch ${key} ${currentParty.color === key ? 'selected' : ''}"
        title="${label}" aria-label="${label}" onclick="selectPartyColor('${key}')"></button>
    `).join('');
  }

  renderPartyMembers();
};

const selectPartyColor = (colorKey) => {
  if (!currentParty) return;
  currentParty.color = colorKey;
  saveParty(currentParty);
  renderPartyBuilder();
};

const addPartyMember = (e) => {
  e.preventDefault();
  if (!currentParty) return;

  const nameInput = document.getElementById('partyMemberName');
  const roleSelect = document.getElementById('partyMemberRole');
  const name = nameInput.value.trim();
  if (!name) return;

  currentParty.members.push({
    id: 'member_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name,
    role: roleSelect.value,
    status: 'pending',
  });
  saveParty(currentParty);
  nameInput.value = '';
  renderPartyMembers();
};

const removePartyMember = (memberId) => {
  if (!currentParty) return;
  currentParty.members = currentParty.members.filter((m) => m.id !== memberId);
  saveParty(currentParty);
  renderPartyMembers();
};

const copyMemberLink = (memberId) => {
  const url = partyMemberUrl(currentParty, memberId);
  navigator.clipboard?.writeText(url);
  alert(`Link copied for this groomsman:\n${url}`);
};

const copyPartyLink = () => {
  const input = document.getElementById('partyShareLink');
  if (!input) return;
  navigator.clipboard?.writeText(input.value);
  alert('Event link copied to clipboard.');
};

const renderPartyMembers = () => {
  const list = document.getElementById('partyMembersList');
  if (!list || !currentParty) return;

  if (!currentParty.members.length) {
    list.innerHTML = `<p class="section-sub">No party members added yet — add your groomsmen below.</p>`;
    return;
  }

  list.innerHTML = currentParty.members.map((m) => `
    <div class="party-member-row">
      <div class="party-member-info">
        <span class="party-member-name">${m.name}</span>
        <span class="party-member-role">${m.role.replace('-', ' ')}</span>
      </div>
      <span class="party-member-status ${m.status}">${m.status}</span>
      <div class="party-member-actions">
        <button type="button" onclick="copyMemberLink('${m.id}')">Copy Link</button>
        <button type="button" onclick="removePartyMember('${m.id}')">Remove</button>
      </div>
    </div>
  `).join('');
};

// If this page was opened via a party/member link, pick up right
// where the organizer or groomsman left off instead of showing the
// generic wedding page from scratch.
const initWeddingParty = () => {
  const params = new URLSearchParams(window.location.search);
  const partyId = params.get('party');
  const memberId = params.get('member');
  if (!partyId) return;

  const party = getPartyById(partyId);
  if (!party) return;
  currentParty = party;

  if (memberId) {
    // A groomsman opened their personal link — show the party context,
    // lock the color to the party's chosen color, and jump to the form.
    const banner = document.getElementById('partyContextBanner');
    const member = party.members.find((m) => m.id === memberId);
    if (banner) {
      banner.style.display = 'block';
      banner.innerHTML = `You're ordering for <strong>${party.eventName}</strong>${member ? ` as the ${member.role.replace('-', ' ')}` : ''}. Your suit color is set to match the party.`;
    }
    const colorSelect = document.getElementById('suitColor');
    if (colorSelect && party.color) {
      colorSelect.value = party.color;
      colorSelect.disabled = true;
    }
    const roleSelect = document.getElementById('role');
    if (roleSelect && member) roleSelect.value = member.role;

    const measurementForm = document.getElementById('measurementForm');
    if (measurementForm) {
      measurementForm.addEventListener('submit', () => {
        if (member) {
          member.status = 'submitted';
          saveParty(party);
        }
      });
    }

    document.getElementById('individual')?.scrollIntoView({ behavior: 'smooth' });
  } else {
    // The organizer returning to their own party link — open straight
    // to the builder instead of the empty "create a group" form.
    openGroupModal();
    document.getElementById('groupForm').style.display = 'none';
    document.getElementById('groupSuccess').style.display = 'block';
    renderPartyBuilder();
  }
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

const CART_KEY = 'suitStandardCart';

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
// 6c. STICKY CATEGORY BAR — measures the real height of the sticky
// site-header and pins the category bar directly beneath it, so it
// sticks to the top as the user scrolls (Suitsupply-style) without
// ever overlapping the nav above it.
// ─────────────────────────────────────────

const initStickyCategoryBar = () => {
  const header = document.querySelector('.site-header');
  const bar = document.getElementById('categoryBar');
  if (!header || !bar) return;

  const setOffset = () => {
    // If the header is currently hidden (scrolled down), the category
    // bar takes over the top spot instead of leaving a gap.
    if (header.classList.contains('nav-hidden')) {
      document.documentElement.style.setProperty('--category-bar-top', '12px');
      return;
    }
    const headerRect = header.getBoundingClientRect();
    const offset = 16 + headerRect.height + 12;
    document.documentElement.style.setProperty('--category-bar-top', `${offset}px`);
  };

  setOffset();
  window.addEventListener('resize', setOffset);
  // Exposed so initHeaderScrollBehavior can re-run it on hide/show.
  bar.__setCategoryBarOffset = setOffset;
};

// ─────────────────────────────────────────
// 6d. HEADER HIDE-ON-SCROLL — the header slides away as soon as you
// scroll down (past a small threshold so it doesn't twitch on tiny
// scrolls), and only reappears once you've scrolled back to the very
// top of the page, not on every upward scroll.
// ─────────────────────────────────────────

const initHeaderScrollBehavior = () => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const bar = document.getElementById('categoryBar');
  let lastY = window.scrollY;
  const HIDE_AFTER = 80;
  const TOP_THRESHOLD = 10;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    if (y > lastY && y > HIDE_AFTER) {
      header.classList.add('nav-hidden');
    } else if (y <= TOP_THRESHOLD) {
      header.classList.remove('nav-hidden');
    }

    if (bar && bar.__setCategoryBarOffset) bar.__setCategoryBarOffset();
    lastY = y;
  }, { passive: true });
};


// ─────────────────────────────────────────
// 6b. SUZY CHAT WIDGET (UI only — not wired to a real backend yet)
// ─────────────────────────────────────────

// ─────────────────────────────────────────
// 6b. SUZY CHAT WIDGET — a real rule-based FAQ assistant, not a
// UI shell. No AI/API involved (that needs a backend to keep an
// API key safe) — this matches typed/clicked questions to real,
// accurate answers about how the site actually works.
// ─────────────────────────────────────────

const SUZY_TOPICS = {
  sizing: {
    label: "How does mix & match sizing work?",
    answer: "Every suit and tuxedo lets you pick your jacket size and pant size independently — so if you're a 40R jacket and a 32x30 pant, you're never stuck with a matched off-the-rack set. Just choose both sizes on the product page before adding to cart.",
    keywords: ["mix", "match", "jacket size", "pant size", "sizing", "independent"],
  },
  fit: {
    label: "How do I find my fit?",
    answer: "Head to our Fit Guide & Finder page — it walks through taking your own measurements, and includes a size calculator that recommends a starting jacket and pant size based on your height, weight, and build.",
    keywords: ["fit", "measurement", "measure", "body type", "size calculator", "which size"],
  },
  wedding: {
    label: "Plan a wedding party order",
    answer: "Visit our Weddings page to get started. You can create a group, pick one color for the whole party, and each groomsman fills in their own measurements — every suit ships directly to that person.",
    keywords: ["wedding", "groomsmen", "group", "party", "bulk"],
  },
  shipping: {
    label: "What's your shipping time?",
    answer: "We ship nationwide. Most orders ship within 5-7 business days of being placed — exact delivery windows will be confirmed at checkout once our full ordering system is live.",
    keywords: ["ship", "shipping", "delivery", "arrive", "how long"],
  },
  returns: {
    label: "I need to return or exchange",
    answer: "We offer returns and exchanges. For now, email us directly at info@giobsuits.com with your order details and our team will help sort it out.",
    keywords: ["return", "exchange", "refund", "send back"],
  },
  stylist: {
    label: "Talk to a stylist",
    answer: "Our styling team is happy to help. Email info@giobsuits.com and mention what you're shopping for — a wedding, an interview, everyday wear — and someone will follow up personally.",
    keywords: ["stylist", "talk to", "human", "agent", "real person", "contact"],
  },
};

const SUZY_FALLBACK = "I don't have an answer for that one yet, but you can reach our team directly at info@giobsuits.com and we'll get back to you.";

const appendChatMessage = (sender, text) => {
  const container = document.getElementById('chatMessages');
  if (!container) return;
  const bubble = document.createElement('div');
  bubble.className = `chat-message chat-message-${sender}`;
  bubble.textContent = text;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
};

const askSuzy = (topicKey) => {
  const topic = SUZY_TOPICS[topicKey];
  if (!topic) return;
  appendChatMessage('user', topic.label);
  appendChatMessage('bot', topic.answer);
};

// Free-text matching: find the topic whose keywords best match the
// user's typed question. Falls back honestly if nothing matches
// well, rather than guessing at an answer.
const matchSuzyTopic = (text) => {
  const lower = text.toLowerCase();
  let bestKey = null;
  let bestScore = 0;
  Object.entries(SUZY_TOPICS).forEach(([key, topic]) => {
    const score = topic.keywords.filter((kw) => lower.includes(kw)).length;
    if (score > bestScore) {
      bestScore = score;
      bestKey = key;
    }
  });
  return bestScore > 0 ? bestKey : null;
};

const handleChatInput = () => {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  appendChatMessage('user', text);
  const matchedKey = matchSuzyTopic(text);
  appendChatMessage('bot', matchedKey ? SUZY_TOPICS[matchedKey].answer : SUZY_FALLBACK);

  input.value = '';
};

const openChatWidget = () => {
  const panel = document.getElementById('chatPanel');
  if (panel) panel.classList.add('open');

  const container = document.getElementById('chatMessages');
  if (container && container.children.length === 0) {
    appendChatMessage('bot', "Hi, I'm Suzy! Ask me a question below, or tap one of the quick options to get started.");
  }
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
window.filterTuxedosByLapel = filterTuxedosByLapel;
window.goToSlide = goToSlide;
window.changeSlide = changeSlide;
window.selectSize = selectSize;
window.selectFit = selectFit;
window.addToCart = addToCart;
window.openGroupModal = openGroupModal;
window.closeGroupModal = closeGroupModal;
window.submitGroup = submitGroup;
window.openChatWidget = openChatWidget;
window.askSuzy = askSuzy;
// ─────────────────────────────────────────
// 6c. FIT PREDICTOR — a real height/weight/build/waist based size
// calculator, using the same kind of off-the-rack sizing logic
// real menswear retailers use for a "starting point" recommendation.
// No photo/AI analysis — that needs a backend, this doesn't.
// ─────────────────────────────────────────

// Jacket sizes actually available across the real catalog.
const AVAILABLE_JACKET_SIZES = [36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
// Waist sizes actually available for suit/tuxedo pants specifically
// (standalone Pants product sizing goes wider — see SIZE_SCHEMES.pants).
const AVAILABLE_SUIT_WAISTS = [28, 30, 32, 34, 36, 38, 40];
const AVAILABLE_INSEAMS = [28, 30, 32];

const nearestFrom = (value, list) => list.reduce((closest, cur) =>
  Math.abs(cur - value) < Math.abs(closest - value) ? cur : closest
);

const calculateFitPrediction = () => {
  const ft = parseFloat(document.getElementById('fpHeightFt').value);
  const inches = parseFloat(document.getElementById('fpHeightIn').value);
  const weight = parseFloat(document.getElementById('fpWeight').value);
  const waist = parseFloat(document.getElementById('fpWaist').value);
  const build = document.getElementById('fpBuild').value;
  const fit = document.getElementById('fpFit').value;

  if (!ft || isNaN(inches) || !weight || !waist || !build || !fit) {
    alert('Please fill in every field so we can calculate an accurate estimate.');
    return;
  }

  const heightIn = (ft * 12) + inches;

  // Length code from height.
  const lengthCode = heightIn < 67 ? 'S' : heightIn < 73 ? 'R' : 'L';

  // Base jacket number from weight bracket.
  let baseJacket;
  if (weight < 140) baseJacket = 36;
  else if (weight < 155) baseJacket = 38;
  else if (weight < 170) baseJacket = 40;
  else if (weight < 185) baseJacket = 42;
  else if (weight < 200) baseJacket = 44;
  else if (weight < 215) baseJacket = 46;
  else if (weight < 230) baseJacket = 48;
  else if (weight < 245) baseJacket = 50;
  else if (weight < 260) baseJacket = 52;
  else if (weight < 275) baseJacket = 54;
  else if (weight < 290) baseJacket = 56;
  else baseJacket = 58;

  // Build adjusts the base estimate — a broader build needs more
  // room through the chest/shoulders even at the same weight.
  const buildAdjustment = { slim: -2, average: 0, athletic: 2, broad: 4 };
  const adjustedJacket = baseJacket + (buildAdjustment[build] || 0);
  const jacketNumber = nearestFrom(adjustedJacket, AVAILABLE_JACKET_SIZES);
  const jacketSize = `${jacketNumber}${lengthCode}`;

  // Suit pant waist — clamped to what's actually available for
  // suit/tuxedo pants specifically (28-40).
  const minWaist = Math.min(...AVAILABLE_SUIT_WAISTS);
  const maxWaist = Math.max(...AVAILABLE_SUIT_WAISTS);
  const clampedWaist = nearestFrom(waist, AVAILABLE_SUIT_WAISTS);
  const waistNeedsAlteration = waist < minWaist || waist > maxWaist;

  // Inseam estimate from height.
  const inseam = heightIn < 66 ? 28 : heightIn < 70 ? 30 : 32;
  const suitPantSize = `${clampedWaist}x${inseam}`;

  const headline = document.getElementById('fitPredictorHeadline');
  const detail = document.getElementById('fitPredictorDetail');
  const resultBox = document.getElementById('fitPredictorResult');

  if (headline) headline.textContent = `Your starting size: Jacket ${jacketSize}, Pant ${suitPantSize}, ${fit} fit`;
  if (detail) {
    let text = `Based on what you entered, we'd start you at a ${jacketSize} jacket paired with a ${suitPantSize} pant in our ${fit} fit. `;
    if (waistNeedsAlteration) {
      text += `Your waist measurement is outside our standard suit-pant range — we recommend the closest size shown and having the waist tailored, or contacting our styling team for a custom option. `;
    }
    text += 'This is a real starting estimate, not a guarantee — for a perfect fit, we always recommend confirming with your own measurements before ordering, especially for wedding party orders.';
    detail.textContent = text;
  }
  if (resultBox) {
    resultBox.style.display = 'block';
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};

window.handleChatInput = handleChatInput;
window.calculateFitPrediction = calculateFitPrediction;
window.closeChatWidget = closeChatWidget;
window.removeCartItem = removeCartItem;
window.changeCartQty = changeCartQty;
window.handleCheckout = handleCheckout;
window.toggleFitFilter = toggleFitFilter;
window.setPricePreset = setPricePreset;
window.applyPriceRange = applyPriceRange;
window.removeFitFilter = removeFitFilter;
window.removePriceFilter = removePriceFilter;
window.clearAllFilters = clearAllFilters;
window.handleSiteSearch = handleSiteSearch;
window.selectPartyColor = selectPartyColor;
window.addPartyMember = addPartyMember;
window.removePartyMember = removePartyMember;
window.copyMemberLink = copyMemberLink;
window.copyPartyLink = copyPartyLink;
window.toggleLike = toggleLike;


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
  initStickyCategoryBar();
  initHeaderScrollBehavior();
  initWeddingParty();

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