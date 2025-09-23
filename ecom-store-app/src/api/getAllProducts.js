const BASE_URL = "https://v2.api.noroff.dev";
export async function getAllProducts() {
  const response = await fetch(`${BASE_URL}/online-shop`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.data;
}
