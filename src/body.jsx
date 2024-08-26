// thông tin sản phẩm
const ProductInfo = [
  {
    productimg: "./public/productImg/1.png",
    title: "Granola siêu hạt ăn kiêng 15% yến mạch",
    price: "133.000 VND",
    discount: "-99%",
  },
  {
    productimg: "./public/productImg/2.png",
    title: "Hạnh nhân rang muối biển, 240g, hũ",
    price: "150.000 VND",
    discount: "-99%",
  },
  {
    productimg: "./public/productImg/3.png",
    title: "Ngũ hạt thập cẩm, 135g, hũ",
    price: "42.000 VND",
    discount: "-99%",
  },
  {
    productimg: "./public/productImg/4.png",
    title: "Đậu hòa lan wasabi, 150g, hũ",
    price: "42.000 VND",
    discount: "-99%",
  },
  {
    productimg: "./public/productImg/5.png",
    title: "Nước cốt dâu tằm, 300ml, chai",
    price: "54.000 VND",
    discount: "-99%",
  },
  {
    productimg: "./public/productImg/6.png",
    title: "Trà sencha hoa hồng, 86g, hộp",
    price: "109.000 VND",
    discount: "-99%",
  },
  {
    productimg: "./public/productImg/7.png",
    title: "Bột trà xanh matcha túi 4g",
    price: "36.000 VND",
    discount: "-99%",
  },
  {
    productimg: "./public/productImg/8.png",
    title: "Bột rau má, 100g, bịch",
    price: "100.000 VND",
    discount: "-99%",
  },
];

const Products = ({ product }) => {
  return (
    <div className="product">
      {/* hình ảnh sản phẩm */}
      <img src={product.productimg} alt="1" />
      {/* title sản phẩm + icon giỏ hàng */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "12px",
          fontWeight: "bold",
        }}
        className="productTitle"
      >
        <p>{product.title}</p>
        <i className="fa-solid fa-cart-plus"></i>
      </div>
      {/* giá sản phẩm + discount */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{product.price}</p>
        <p>{product.discount}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div
      style={{
        width: "848px",
        height: "767px",
      }}
    >
      {/* line quà tặng + button "TẠO" */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Quà tặng</h1>
        <button className="btn btn-primary" type="submit">
          Tạo
        </button>
      </div>

      {/* grid danh mục hàng hóa */}
      <div
        className="gridProduct"
      >
        <Products product={ProductInfo[0]} />
        <Products product={ProductInfo[1]} />
        <Products product={ProductInfo[2]} />
        <Products product={ProductInfo[3]} />
        <Products product={ProductInfo[4]} />
        <Products product={ProductInfo[5]} />
        <Products product={ProductInfo[6]} />
        <Products product={ProductInfo[7]} />
        <nav aria-label="Page navigation example" className="paginationItem">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default { Body, ProductInfo };



