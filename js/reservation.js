const tablesState = [
  { id: 1, seats: 2, status: "available" },
  { id: 2, seats: 2, status: "reserved" },
  { id: 3, seats: 4, status: "available" },
  { id: 4, seats: 4, status: "available" },
  { id: 5, seats: 6, status: "reserved" },
  { id: 6, seats: 6, status: "available" },
  { id: 7, seats: 8, status: "available" },
  { id: 8, seats: 12, status: "available", isVipOnly: true }
];

let selectedTableId = null;

function initReservation() {
  const tableGrid = document.getElementById('table-selector-grid');
  const resForm = document.getElementById('luxury-reservation-form');
  const dateInput = document.getElementById('res-date');

  if (!resForm) return;

  // Set min date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  // Render Table Layout
  function renderTables() {
    if (!tableGrid) return;
    tableGrid.innerHTML = '';

    tablesState.forEach(tbl => {
      const node = document.createElement('div');
      node.className = `table-node ${tbl.status}`;
      if (selectedTableId === tbl.id) {
        node.classList.add('selected-table');
      }

      const seatsText = tbl.isVipOnly ? "VIP Table" : `${tbl.seats} Seats`;

      node.innerHTML = `
        <span class="table-number">T-${tbl.id}</span>
        <span class="table-seats">${seatsText}</span>
      `;

      if (tbl.status === 'available') {
        node.addEventListener('click', () => {
          // Deselect previous
          const prevSelected = tableGrid.querySelector('.selected-table');
          if (prevSelected) prevSelected.classList.remove('selected-table');

          // Select current
          selectedTableId = tbl.id;
          node.classList.add('selected-table');
        });
      }

      tableGrid.appendChild(node);
    });
  }

  renderTables();

  // Form Submit Handler
  resForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('res-name').value.trim();
    const email = document.getElementById('res-email').value.trim();
    const phone = document.getElementById('res-phone').value.trim();
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;
    const occasion = document.getElementById('res-occasion').value;
    const isVip = document.getElementById('res-vip').checked;

    if (!selectedTableId) {
      alert("Please select a table from the interactive map.");
      return;
    }

    // VIP rule validation
    if (selectedTableId === 8 && !isVip) {
      alert("Table 8 is reserved exclusively for VIP Experiences. Please check the VIP Experience request box.");
      return;
    }

    // Success response
    const reservationCode = `CF-${Math.floor(1000 + Math.random() * 9000)}-${selectedTableId}`;
    
    // Save to local storage
    const booking = {
      code: reservationCode,
      name,
      email,
      phone,
      date,
      time,
      guests,
      table: selectedTableId,
      occasion,
      vip: isVip,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('caffotto_last_booking', JSON.stringify(booking));

    // Show custom confirmation modal or message
    showBookingConfirmation(booking);

    // Update status to reserved
    const bookedTable = tablesState.find(t => t.id === selectedTableId);
    if (bookedTable) {
      bookedTable.status = 'reserved';
      selectedTableId = null;
      renderTables();
    }
    
    resForm.reset();
  });
}

function showBookingConfirmation(booking) {
  const container = document.createElement('div');
  container.className = 'luxury-modal';
  container.id = 'booking-confirm-modal';
  container.style.display = 'flex';

  container.innerHTML = `
    <div class="modal-content-wrapper glass-panel" style="max-width: 500px; text-align: center; display: block;">
      <i data-lucide="award" style="color: var(--accent-gold); width: 60px; height: 60px; margin: 0 auto 1.5rem auto;"></i>
      <h3 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 1rem;">Reservation Confirmed</h3>
      <p style="color: var(--accent-gold); letter-spacing: 0.15em; font-size: 0.9rem; margin-bottom: 2rem;">CODE: ${booking.code}</p>
      
      <div style="text-align: left; margin-bottom: 2rem; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); padding: 1.5rem 0; font-size: 0.85rem; line-height: 1.8;">
        <div style="display:flex; justify-content:space-between;"><strong>Guest:</strong> <span>${booking.name}</span></div>
        <div style="display:flex; justify-content:space-between;"><strong>Table:</strong> <span>T-${booking.table}</span></div>
        <div style="display:flex; justify-content:space-between;"><strong>Date & Time:</strong> <span>${booking.date} @ ${booking.time}</span></div>
        <div style="display:flex; justify-content:space-between;"><strong>Guests:</strong> <span>${booking.guests} Pax</span></div>
        ${booking.occasion ? `<div style="display:flex; justify-content:space-between;"><strong>Occasion:</strong> <span>${booking.occasion}</span></div>` : ''}
        <div style="display:flex; justify-content:space-between;"><strong>VIP Status:</strong> <span>${booking.vip ? 'Privé Member' : 'Standard'}</span></div>
      </div>
      
      <p style="font-size: 0.8rem; color: var(--text-beige); line-height: 1.6; margin-bottom: 2rem;">
        An invitation details card has been sent to your email. We look forward to hosting you at Caffotto.
      </p>
      
      <button class="btn-premium filled" style="width: 100%" onclick="document.getElementById('booking-confirm-modal').remove()">
        <span>Confirm Invitation</span>
      </button>
    </div>
  `;

  document.body.appendChild(container);
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.initReservation = initReservation;
