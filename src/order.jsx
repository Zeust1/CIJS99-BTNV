
import data from './body.jsx'
const { Body, ProductInfo } = data;
const Order = () => {
  return (
    <div
      style={{
        marginTop: "24px",
        width: "848px",
        height: "1600px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      className="orderDetail"
    >
      {/* nút trash + X */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
        }}
      >
        <i className="fa-solid fa-trash-can fa-xl"></i>
        <i className="fa-solid fa-xmark fa-2xl"></i>
      </div>

      {/* bill */}
      <div
        style={{
          width: "800px",
          height: "443px",
          display: "flex",
          gap: "34px",
          margin: "0 auto",
          fontSize: "28px",
        }}
      >
        {/* img product chosed */}
        <img src={ProductInfo[0].productimg} alt="1" />
        {/* info and type and rating and action buy */}
        <div>
          <p>{ProductInfo[0].title}</p>
          <div>
            <i className="fa-solid fa-star" style={{ color: "yellow" }}></i>
            <i className="fa-solid fa-star" style={{ color: "yellow" }}></i>
            <i className="fa-solid fa-star" style={{ color: "yellow" }}></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "34px",
              fontWeight: "bold",
            }}
          >
            <p>Giá: {ProductInfo[0].price}</p>
            <i
              style={{ marginTop: "20px" }}
              class="fa-solid fa-arrow-down fa-xl"
            ></i>
            <p style={{ color: "red", fontSize: "15px" }}>-30%</p>
          </div>
          <p style={{ fontWeight: "bold" }}>Phân loại</p>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="type"
          >
            <button type="button" class="btn btn-outline-secondary">
              Nhỏ
            </button>
            <button type="button" class="btn btn-outline-secondary">
              Vừa
            </button>
            <button type="button" class="btn btn-outline-secondary">
              Lớn
            </button>
          </div>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "120px",
                justifyContent: "space-between",
              }}
            >
              <i class="fa-solid minusplus fa-minus"></i>
              <p>0</p>
              <i class="fa-solid minusplus fa-plus"></i>
            </div>
            <button className="btn btnBuy btn-primary" type="submit">
              Chọn mua
            </button>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "24px", padding: "24px", marginTop: "34px" }}>
        Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm
        ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với
        mọi nhà
      </p>

      {/* note */}
      <div
        style={{
          width: "800px",
          margin: "0 auto",
          height: "300px",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            height: "44px",
            display: "flex",
            justifyContent: "flex-start",
            padding: "24px",
          }}
        >
          <img
            src="./public/userAvatar/user1.png"
            alt="this avatar"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <p style={{ padding: "10px" ,fontWeight: 'bold'}}>John Doe</p>
        </div>
        <p style={{ padding: "24px", fontWeight: "bold", marginTop: "24px" }}>
          Sản phẩm này sẽ mua tặng cho gia đình sau ngày 15 nè!
        </p>
        <hr style={{ width: "750px", margin: "0 auto" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              width: "84px",
              height: "20px",
              padding: "24px",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <i class="fa-solid fa-bold"></i>
            <i class="fa-solid fa-italic"></i>
            <i class="fa-solid fa-link"></i>
          </div>
          <div style={{ padding: "12px 24px" }}>
            <button className="btn btnComment btnBuy btn-primary" type="submit">
              Comment
            </button>
          </div>
        </div>
      </div>
      
      <h2 style={{padding: '24px', fontWeight: 'bold'}}>Ghi chú</h2>
      <hr style={{border: '1px solid #000000'}} />
      <h4 style={{padding: '24px'}}>Danh sách ghi chú</h4>

    <div style={{border: '1px solid #DDDD', width: '800px', borderRadius: '10px', margin: '0 auto'}}>
      <div
          style={{
            height: "44px",
            display: "flex",
            justifyContent: "flex-start",
            padding: "24px",
          }}
        >
          <img
            src="./public/userAvatar/im.png"
            alt="this avatar"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <p style={{ padding: "10px" ,fontWeight: 'bold'}}>You</p>
        </div>
        <p style={{ padding: "24px", fontWeight: "bold", marginTop: "24px" ,opacity: '0.7'}}>
             Lưu lại đã, rồi mấy nữa tính tiếp...
        </p>
        <div style={{display: 'flex', justifyContent: 'space-between',padding: '24px'}}>
            <p style={{ opacity: '0.7'}}>5 min ago</p>
            <i className="fa-solid fa-trash-can fa-xl"></i>
        </div>
    </div>
    </div>
  );
};

export default Order;
