import ReactDOM from "react-dom/client";
/*TODO: Khai báo biến root và khởi tạo với ReactDOM.createRoot(), sau đó truyền element vừa tạo vào hàm root.render() để render element ra U
          Nhung vao day bootrap
          SPR chay moi tren index.js vi chua DOM root
          */
const root = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
    root.render(<div>
        {/*TODO:Khởi tạo element mang giá trị hiển thị thời gian hiện tại
*/}
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>);
};
/*TODO: Buớc 4: Sử dụng hàm hàm tick() để cập nhật thời gian*/
setInterval(tick, 1000);