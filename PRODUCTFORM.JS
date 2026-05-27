import { useState } from "react";

const ProductForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd(formData);

    setFormData({
      name: "",
      price: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Product Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) =>
          setFormData({
            ...formData,
            price: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({
            ...formData,
            description: e.target.value,
          })
        }
      />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
