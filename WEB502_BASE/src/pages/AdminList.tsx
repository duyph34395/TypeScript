import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

function AdminList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const perPage = 8;

  useEffect(() => {
    fetch(
      `http://localhost:3000/products?_page=${page}&_limit=${perPage}&title_like=${search}`
    )
      .then((res) => {
        const total = res.headers.get("X-Total-Count");
        if (total) setTotalPages(Math.ceil(Number(total) / perPage));
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [page, search]);

  // 🔹 Hàm xóa sản phẩm
  const handleDelete = async (id: number) => {
    if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="container my-4">
      <h3 className="mb-4 fw-bold text-center text-uppercase">
        Quản lý sản phẩm
      </h3>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder=" Tìm sản phẩm..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        <Link to="/admin/products/add" className="btn btn-primary">
          + Thêm mới
        </Link>
      </div>

      <table className="table table-bordered table-hover align-middle text-center">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Mô tả</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((p, index) => (
              <tr key={p.id}>
                <td>{(page - 1) * perPage + index + 1}</td>
                <td>
                  <img
                    src={p.image.startsWith("/") ? p.image : `/images/${p.image}`}
                    alt={p.title}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                </td>
                <td className="fw-bold">{p.title}</td>
                <td className="text-truncate" style={{ maxWidth: "200px" }}>
                  {p.description}
                </td>
                <td className="text-primary fw-bold">
                  {p.price.toLocaleString()} USD
                </td>
                <td>
                  <div className="btn-group">
                    <Link
                      to={`/admin/products/edit/${p.id}`}
                      className="btn btn-sm btn-warning"
                    >
                      Sửa
                    </Link>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-muted">
                Không có sản phẩm nào.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <nav>
        <ul className="pagination justify-content-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${page === i + 1 ? "active" : ""}`}
              style={{ cursor: "pointer" }}
            >
              <span className="page-link" onClick={() => setPage(i + 1)}>
                {i + 1}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default AdminList;
