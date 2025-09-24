const BASE_URL = "https://v2.api.noroff.dev";
export async function getAllProducts(
  page = 1,
  limit = 10,
  sort = "title",
  order = "asc"
) {
  const response = await fetch(
    `${BASE_URL}/online-shop?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.data;
}
