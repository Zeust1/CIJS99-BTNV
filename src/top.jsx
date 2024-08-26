const top = () => {
  return (
    <div className="topComponent">
      <h1>Yêu thích ngay</h1>

      <div style={{ display: "flex", gap: "24px" }}>
        <video
          style={{
            width: "300px",
            height: "197px",
            objectFit: 'cover'
          }}
          src="./src/assets/logo.mp4"
          controls
          autoPlay
          preload="auto"
          loop
        ></video>
        <h3 style={{ display: "flex", alignItems: "center" }}>
          Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm có
          ưu đãi
        </h3>
      </div>

      <div style={{ width: "80%", height: "187px", gap: "24px" }}>
        <h1>Mục yêu thích của bạn</h1>

        <div
          style={{
            border: "1px solid black",
            paddingLeft: "10px",
            borderRadius: '8px'
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            style={{ border: "none", width: "440px", height: "44px"}}
            className="topInput"
            type="text"
            placeholder="Tìm kiếm"
          />
        </div>

        <div 
        style={{
            display: 'flex',
            marginTop: '24px',
            gap:'24px',
        }}>
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Trạng thái
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Danh mục
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Đã thêm gần đây
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div style={{marginTop: '6px'}}><i className="fa-solid fa-list fa-2xl"></i></div>
        </div>

      </div>
    </div>
  );
};

export default top;
