import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Main, Card, Row, Column, Table } from "../../components"
import { getProducts } from "../../store/actions/products"

const ProductsPage = (props) => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  const columns= [
    { title: "Number", field: "number" },
    { title: "Name", field: "name" },
    { title: "Date", field: "date" },
    { title: "Sku", field: "sku" },
    { title: "Weight", field: "weight" },
    { title: "Height", field: "height" },
    { title: "Width", field: "width" },
    { title: "Origin", field: "origin" },
    { title: "Minimun", field: "minimun" },
    { title: "Delay", field: "delay" },
  ];

  React.useEffect(() => {
    dispatch(getProducts());
  },[dispatch]);

  return(
    <Main title="Products Page">
      <Row>
        <Column>
          <Card>
            <Table data={products} columns={columns} responsive/>
          </Card>
        </Column>
      </Row>
    </Main>
  )
}

export default ProductsPage;
