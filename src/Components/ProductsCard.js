import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProductsCard = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="imageContainer" onClick={showDetail}>
      <div className="imageBox">
        <img
          width={300}
          src={isHover ? item?.hover : item.img}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          alt=""
        />
      </div>
      <div className="new choice">{item?.choice == true ? "Conscious choice" : ""}</div>
      <div className="titel">{item?.title}</div>
      <div className="price">₩{item?.price}</div>
      <div className="new">{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductsCard;
