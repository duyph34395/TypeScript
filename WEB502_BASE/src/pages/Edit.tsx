import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

interface Product {
  id?: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Product>({
    title: "",
    price: 0,
    description: "",
    image: "",
  });

  // 🔹 Lấy thông tin sản phẩm theo id
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch(() => toast.error("Không tìm thấy sản phẩm!"));
  }, [id]);

  // 🔹 Cập nhật dữ liệu khi người dùng nhập
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🔹 Gửi form cập nhật sản phẩm
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success("Cập nhật sản phẩm thành công!");
      navigate("/products");
    } else {
      toast.error("Cập nhật thất bại!");
    }
  };

  return (
    <div className="container my-4">
      <h3 className="mb-4 fw-bold text-uppercase text-center">
        Cập nhật sản phẩm
      </h3>

      <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
        <div className="mb-3">
          <label className="form-label fw-bold">Tên sản phẩm</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Giá</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Mô tả</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Ảnh</label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
            required
          />
          {formData.image && (
            <img
              src={
                formData.image.startsWith("/")
                  ? formData.image
                  : `/images/${formData.image}`
              }
              alt="Preview"
              className="img-fluid mt-2 rounded shadow-sm"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
          )}
        </div>

        <button type="submit" className="btn btn-success w-100">
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default Edit;
