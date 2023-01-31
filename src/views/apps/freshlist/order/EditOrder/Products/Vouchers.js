import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";

export class Vouchers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      productlist: "",
      quantity: "",
      selectedFile: null,
      selectedName: "",
      sortorder: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("productName", this.state.productName);
    data.append("quantity", this.state.quantity);
    data.append("sortorder", this.state.sortorder);
    axiosConfig
      .post("/addbrand", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/freshlist/house/HouseProductList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <div style={{ color: "#000000" }}>Add Vouchers(s)</div>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="12" md="12" className="mb-2">
                  <Label>Choose Vouchers</Label>
                  <CustomInput
                    type="select"
                    placeholder="Select Type"
                    name="type"
                    value={this.state.productlist}
                    onChange={this.changeHandler}
                  >
                    <option value="1">1</option>
                    <option value="onion">2</option>
                    <option value="apple">3</option>
                  </CustomInput>
                </Col>
                <Col lg="12" md="12" className="mb-2">
                  <Label>Quantity</Label>
                  <Input
                    type="text"
                    placeholder="Quantity"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.changeHandler}
                  />
                </Col>
                <hr />
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1 right"
                >
                  Add Voucher
                </Button.Ripple>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1 right"
                >
                  Add Voucher
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Vouchers;
