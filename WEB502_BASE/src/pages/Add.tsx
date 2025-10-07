function Add() {
  return (
    <div>
      <h3 className="fw-bold mb-3">Thêm sản phẩm mới</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Giá</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Mô tả</label>
          <textarea className="form-control" rows={3}></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
}

export default Add;
