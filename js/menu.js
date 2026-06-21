const menuData = [
  // Signature Coffees
  {
    id: "sig-gold-latte",
    name: "24K Golden Espresso Ritual",
    category: "signature-coffees",
    price: 24.00,
    description: "Double-shot single-origin Ethiopian espresso infused with organic honey, steamed macadamia milk, and topped with delicate 24-karat edible gold leaf flakes.",
    image: "images/hero.png",
    chefRecommend: true,
    nutrition: { calories: 120, protein: "3g", fat: "5g", carbs: "16g" },
    ingredients: ["24K Edible Gold Leaf", "Single-Origin Ethiopian Espresso", "Organic Macadamia Milk", "Raw Wildflower Honey"]
  },
  {
    id: "sig-espresso-smoke",
    name: "Smoked Oakwood Cortado",
    category: "signature-coffees",
    price: 18.00,
    description: "Espresso extracted over cold-pressed cream, smoked tableside with applewood and oakwood chips inside a crystal cloche.",
    image: "images/about.png",
    chefRecommend: false,
    nutrition: { calories: 80, protein: "2g", fat: "6g", carbs: "4g" },
    ingredients: ["Oakwood Smoke", "Espresso Extra-Dark", "Cold-Pressed Cream", "Vanilla Infusion"]
  },

  // Espresso Collection
  {
    id: "esp-ristretto",
    name: "Caffotto Ristretto Trio",
    category: "espresso-collection",
    price: 12.00,
    description: "Three single-origin extractions comparing volcanic soil beans from Sumatra, Guatemala, and Kona, Hawaii.",
    image: "images/about.png",
    chefRecommend: true,
    nutrition: { calories: 5, protein: "0g", fat: "0g", carbs: "1g" },
    ingredients: ["Sumatran Arabica", "Guatemalan Antigua", "Kona Typica"]
  },
  {
    id: "esp-macchiato",
    name: "Velvet Foam Macchiato",
    category: "espresso-collection",
    price: 9.00,
    description: "Traditional macchiato marked with a silky microfoam cap, dusted with dark Belgian cacao.",
    image: "images/hero.png",
    chefRecommend: false,
    nutrition: { calories: 25, protein: "1g", fat: "1g", carbs: "3g" },
    ingredients: ["Espresso", "Organic Whole Milk Microfoam", "72% Cacao Dust"]
  },

  // Cold Coffees
  {
    id: "cold-nitrogen",
    name: "Nitro Charcoal Brew",
    category: "cold-coffees",
    price: 15.00,
    description: "Nitrogen-infused cold brew steeped for 24 hours with activated charcoal and organic maple syrup.",
    image: "images/hero.png",
    chefRecommend: false,
    nutrition: { calories: 45, protein: "0g", fat: "0g", carbs: "11g" },
    ingredients: ["Cold-Brew Extract", "Activated Coconut Charcoal", "Maple Syrup", "Pure Nitrogen"]
  },
  {
    id: "cold-glace",
    name: "Affogato Grand Cru",
    category: "cold-coffees",
    price: 19.50,
    description: "Creamy Madagascar vanilla bean gelato drowned in a hot shot of double-extracted Geisha espresso.",
    image: "images/dessert.png",
    chefRecommend: true,
    nutrition: { calories: 240, protein: "4g", fat: "14g", carbs: "26g" },
    ingredients: ["Madagascar Vanilla Gelato", "Geisha Espresso", "Almond Wafer Crumbs"]
  },

  // Gourmet Pizzas
  {
    id: "pizza-truffle",
    name: "Bianca al Tartufo",
    category: "gourmet-pizzas",
    price: 36.00,
    description: "White pizza topped with fresh buffalo mozzarella, hand-foraged Italian black truffle shavings, porcini mushrooms, and baby arugula.",
    image: "images/pizza.png",
    chefRecommend: true,
    nutrition: { calories: 780, protein: "28g", fat: "32g", carbs: "92g" },
    ingredients: ["Fresh Buffalo Mozzarella", "Shaved Black Truffle", "Porcini Mushrooms", "Baby Arugula", "Cold-Pressed Olive Oil"]
  },
  {
    id: "pizza-burrata",
    name: "Burrata & Prosciutto Fig Crudo",
    category: "gourmet-pizzas",
    price: 32.00,
    description: "Artisanal crust topped with creamy burrata cheese, 24-month aged Prosciutto di Parma, caramelized mission figs, and aged balsamic glaze.",
    image: "images/pizza.png",
    chefRecommend: false,
    nutrition: { calories: 840, protein: "34g", fat: "29g", carbs: "110g" },
    ingredients: ["Creamy Burrata", "24-Month Prosciutto di Parma", "Caramelized Mission Figs", "Modena Aged Balsamic", "Sourdough Crust"]
  },

  // Artisanal Pastas
  {
    id: "pasta-lobster",
    name: "Lobster & Saffron Mafaldine",
    category: "artisanal-pastas",
    price: 42.00,
    description: "Ribbon-cut mafaldine pasta tossed with butter-poached Maine lobster claw, saffron cream sauce, and fennel pollen.",
    image: "images/pizza.png",
    chefRecommend: true,
    nutrition: { calories: 650, protein: "32g", fat: "22g", carbs: "78g" },
    ingredients: ["Poached Maine Lobster", "Saffron Threads", "Handmade Mafaldine Pasta", "Fennel Pollen", "White Wine Reduction"]
  },
  {
    id: "pasta-gnocchi",
    name: "Truffle Gnocchi Parisienne",
    category: "artisanal-pastas",
    price: 34.00,
    description: "Pan-seared herb gnocchi served with a rich, silky white truffle cream, wild oyster mushrooms, and parmigiano reggiano.",
    image: "images/pizza.png",
    chefRecommend: false,
    nutrition: { calories: 590, protein: "18g", fat: "26g", carbs: "70g" },
    ingredients: ["Herb Gnocchi", "White Truffle Cream", "Oyster Mushrooms", "Aged Parmigiano Reggiano"]
  },

  // Risottos
  {
    id: "risotto-gold",
    name: "Risotto d'Oro Milanese",
    category: "risottos",
    price: 38.00,
    description: "Creamy Carnaroli rice cooked in a saffron-infused bone broth, finished with whipped bone marrow and topped with a gold-leaf sheet.",
    image: "images/pizza.png",
    chefRecommend: true,
    nutrition: { calories: 520, protein: "14g", fat: "24g", carbs: "62g" },
    ingredients: ["Carnaroli Rice", "Saffron", "Whipped Bone Marrow", "Gold Leaf Sheet", "Aged Pecorino Romano"]
  },

  // Quesadillas
  {
    id: "quesadilla-duck",
    name: "Confit Duck & Gruyère Quesadilla",
    category: "quesadillas",
    price: 28.00,
    description: "Crispy artisan tortilla folded with slow-cooked shredded duck confit, melted Cave-Aged Gruyère cheese, and a smoked cherry glaze.",
    image: "images/pizza.png",
    chefRecommend: false,
    nutrition: { calories: 640, protein: "29g", fat: "30g", carbs: "58g" },
    ingredients: ["Shredded Duck Confit", "Cave-Aged Gruyère", "Smoked Cherry Glaze", "Flour Tortilla"]
  },

  // Desserts
  {
    id: "des-dome",
    name: "Caffotto Chocolate Dome",
    category: "desserts",
    price: 22.00,
    description: "Dark chocolate dome with gold leaf details, melted tableside with hot espresso ganache to reveal a raspberry hazelnut center.",
    image: "images/dessert.png",
    chefRecommend: true,
    nutrition: { calories: 340, protein: "5g", fat: "22g", carbs: "38g" },
    ingredients: ["70% Valrhona Dark Chocolate", "Hot Espresso Ganache", "Raspberry Coulis", "Piedmont Hazelnuts"]
  },

  // Cheesecakes
  {
    id: "des-cheesecake",
    name: "Pistachio Baklava Cheesecake",
    category: "cheesecakes",
    price: 18.00,
    description: "Creamy Greek yogurt cheesecake layered on a crispy pistachio and walnut baklava crust, drizzled with orange blossom honey.",
    image: "images/dessert.png",
    chefRecommend: true,
    nutrition: { calories: 420, protein: "8g", fat: "24g", carbs: "48g" },
    ingredients: ["Orange Blossom Honey", "Pistachios & Walnuts", "Phyllo Pastry", "Greek Yogurt Cream Cheese"]
  },

  // Brownies
  {
    id: "des-brownie",
    name: "Salted Caramel Whiskey Fudge Brownie",
    category: "brownies",
    price: 16.00,
    description: "Warm, rich dark chocolate fudge brownie infused with single-malt scotch, topped with smoked sea salt caramel and gold dust.",
    image: "images/dessert.png",
    chefRecommend: false,
    nutrition: { calories: 380, protein: "4g", fat: "19g", carbs: "46g" },
    ingredients: ["Single-Malt Scotch", "Dark Chocolate Fudge", "Smoked Sea Salt Caramel", "Gold Dust"]
  },

  // Mocktails
  {
    id: "mock-lavender",
    name: "Lavender Butterfly Pea Elixir",
    category: "mocktails",
    price: 14.00,
    description: "A color-changing botanical mocktail blending organic lavender syrup, fresh lemon juice, butterfly pea flower tea, and rose water spray.",
    image: "images/hero.png",
    chefRecommend: false,
    nutrition: { calories: 60, protein: "0g", fat: "0g", carbs: "15g" },
    ingredients: ["Butterfly Pea Flower Tea", "Lavender Syrup", "Fresh Lemon Juice", "Rose Water Extract"]
  },

  // Shakes
  {
    id: "shake-espresso",
    name: "Smoked Espresso Hazelnut Frappé",
    category: "shakes",
    price: 16.00,
    description: "Gourmet cold shake blending house-made hazelnut butter, cold espresso, smoked salt gelato, and topped with gold flakes and chocolate shavings.",
    image: "images/dessert.png",
    chefRecommend: true,
    nutrition: { calories: 380, protein: "6g", fat: "18g", carbs: "45g" },
    ingredients: ["Smoked Salt Gelato", "Hazelnut Butter", "Espresso Concentrate", "Gold Flakes"]
  }
];

function initMenu() {
  const menuGrid = document.getElementById('menu-grid');
  const filterButtons = document.querySelectorAll('.menu-filter-btn');

  if (!menuGrid) return;

  function renderMenu(category = 'all') {
    menuGrid.innerHTML = '';
    
    const filteredItems = category === 'all' 
      ? menuData 
      : menuData.filter(item => item.category === category);

    filteredItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.setAttribute('data-id', item.id);
      
      const recommendBadge = item.chefRecommend 
        ? `<div class="chef-recommend-badge">Chef's Selection</div>` 
        : '';

      card.innerHTML = `
        <div class="menu-img-wrapper">
          ${recommendBadge}
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="menu-info">
          <h3 class="menu-item-name">${item.name}</h3>
          <span class="menu-item-price">$${item.price.toFixed(2)}</span>
        </div>
        <p class="menu-desc">${item.description}</p>
        <div class="menu-actions">
          <button class="preview-trigger-btn" onclick="openMenuModal('${item.id}')" style="text-decoration:none; border:1px solid var(--accent-gold); padding:0.5rem 1rem; color:var(--accent-gold);">Chef's Details</button>
        </div>
      `;
      menuGrid.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');
      renderMenu(btn.getAttribute('data-filter'));
    });
  });

  renderMenu('all');
}

function openMenuModal(itemId) {
  const item = menuData.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('menu-detail-modal');
  if (!modal) return;

  const modalContent = modal.querySelector('.modal-content-wrapper');
  
  modalContent.innerHTML = `
    <button class="modal-close-btn" onclick="closeMenuModal()">
      <i data-lucide="x"></i>
    </button>
    <div class="modal-img-container">
      <img src="${item.image}" alt="${item.name}">
    </div>
    <div class="modal-info-panel">
      <h3>${item.name}</h3>
      <div class="modal-price">$${item.price.toFixed(2)}</div>
      <p class="modal-desc">${item.description}</p>
      
      <div class="modal-meta-grid">
        <div class="modal-meta-item">
          <span class="label">Nutrition Info</span>
          <span class="val">${item.nutrition.calories} kcal (P: ${item.nutrition.protein}, F: ${item.nutrition.fat}, C: ${item.nutrition.carbs})</span>
        </div>
        <div class="modal-meta-item">
          <span class="label">Ingredients</span>
          <span class="val">${item.ingredients.join(', ')}</span>
        </div>
      </div>
      
      <button class="btn-premium filled" style="width:100%" onclick="window.location.href='reservation.html'; closeMenuModal();">
        <span>Reserve Table to Taste</span>
      </button>
    </div>
  `;

  modal.style.display = 'flex';
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeMenuModal() {
  const modal = document.getElementById('menu-detail-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Global expose
window.initMenu = initMenu;
window.openMenuModal = openMenuModal;
window.closeMenuModal = closeMenuModal;
window.menuData = menuData;
