import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductsCard from "./ProductsCard";
import { useSearchParams } from "react-router-dom";
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let serachQuery = query.get("q") || "";
    console.log("쿼리값은?", serachQuery);
    let url = `https://my-json-server.typicode.com/Heung-e-ya/hnm-shop/products?q=${serachQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductsCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
