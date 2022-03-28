export async function getCategories() {
  const res = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await res.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await res.json();
  return data;
}

export async function getProductsFromCategory(categoryId) {
  const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const data = await res.json();
  return data?.results;
}

export async function getProductById(productId) {
  const res = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const data = await res.json();
  return data?.results;
}

export async function getProductsBySearchTerm(searchTerm) {
  const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchTerm}`);
  const data = await res.json();
  return data?.results;
}

export const getDetailsProduct = async (idProduct) => fetch(`https://api.mercadolibre.com/items/${idProduct}/description`)
  .then((response) => response.json())
  .then((data) => data);
