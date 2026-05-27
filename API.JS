const API_URL = process.env.REACT_APP_API_URL;

export const getProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createProduct = async (product) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return response.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
