const serializeAllSales = (sale) => ({
  saleId: sale.sale_id,
  date: sale.date,
  productId: sale.product_id,
  quantity: sale.quantity,
});

const serializeSale = (sale) => ({
  date: sale.date,
  productId: sale.product_id,
  quantity: sale.quantity,
});

module.exports = { serializeAllSales, serializeSale };
