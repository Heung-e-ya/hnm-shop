import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useEffect, useState } from "react";
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProcut] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Heung-e-ya/hnm-shop/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProcut(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-detail-img">
          <img width={500} src={product?.img} />
        </Col>
        <Col>
          <div className="detail-new">{product?.choice == true ? "Conscious choice" : ""}</div>
          <div className="detail-new">{product?.new == true ? "신제품" : ""}</div>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>
            <p>사이즈</p>
            <div className="size-container">
              {product?.size.map((size) => (
                <Button className="size-button" size="lg" variant="outline-secondary">
                  {size}
                </Button>
              ))}
            </div>
            <div>
              <Button className="add-button" variant="dark" size="lg">
                추가
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
