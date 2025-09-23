const BASE_URL = "https://v2.api.noroff.dev";
export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/online-shop/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const data = await response.json();
  return data.data;
}
