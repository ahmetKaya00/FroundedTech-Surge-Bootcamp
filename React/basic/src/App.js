import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row } from "reactstrap";
function App() {
  return (
    <div>
      <Container>
        <Row>
        <Navi/>
        </Row>
        <Row>
          <col xs="3">
          <CategoryList/>
          </col>
          <col xs="9">
          <ProductList/>
          </col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
