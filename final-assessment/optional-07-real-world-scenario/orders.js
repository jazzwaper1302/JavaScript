// orders.js

// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

let orders = [];

function addOrder(customerName, items) {
  let totalPrice = 0;
  for (const item of items) {
    totalPrice += item.price;
  }

  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu'
  };
  orders.push(newOrder);
}

function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = status;
  }
}

function calculateTotalRevenue() {
  let totalRevenue = 0;
  for (const order of orders) {
    if (order.status === 'Selesai') {
      totalRevenue += order.totalPrice;
    }
  }
  return totalRevenue;
}

function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };