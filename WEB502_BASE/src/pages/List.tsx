import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

function List() {
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

  return (
    <div className="container my-4">
      <h3 className="mb-4 fw-bold text-center text-uppercase">
        Danh sách sản phẩm
      </h3>

    
      {/* Hiển thị danh sách sản phẩm */}
      <div className="row">
        {products.length > 0 ? (
          products.map((p) => (
            <div key={p.id} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={p.image.startsWith("/") ? p.image : `/images/${p.image}`}
                  className="card-img-top"
                  alt={p.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title fw-bold">{p.title}</h6>
                  <p className="card-text text-muted small flex-grow-1">
                    {p.description}
                  </p>
                  <p className="fw-bold text-primary mb-2">
                    {p.price.toLocaleString()} USD
                  </p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary btn-sm">Mua ngay</button>
                    <button className="btn btn-outline-success btn-sm">
                      Add cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-4">
            Không tìm thấy sản phẩm nào.
          </p>
        )}
      </div>

      {/* Phân trang */}
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

export default List;
