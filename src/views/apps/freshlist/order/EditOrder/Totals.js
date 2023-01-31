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
  Table,
} from "reactstrap";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../../assets/scss/plugins/extensions/editor.scss";
import draftToHtml from "draftjs-to-html";
import { Route } from "react-router-dom";
import { history } from "../../../../../history";
import axiosConfig from "../../../../../axiosConfig";

import { Tabs, Tab } from "react-bootstrap-tabs";
import { Container } from "reactstrap";
import CustomerDetails from "./CustomerDetails";
import Product from "./Products/Product";
import Vouchers from "./Products/Vouchers";
export class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      selectedFile: null,
      selectedName: "",
      sortorder: "",
      desc: "",
      brand_img: "",
      quantity: "",
      size: "",
      required: "",
      quant: "",
      optValue: "",
      opValue: "",
      status: "",
      inputlist: [{ selected: "", attribute: "", quantity: "" }],
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
  handleremove = (index) => {
    const list = [...this.state.inputlist];
    list.splice(index, 1);
    this.setState({ inputlist: list });
  };

  handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.inputlist];
    list[index][name] = value;
    this.setState({ inputlist: list });

    console.log(this.state.inputlist);
  };
  handleClick = () => {
    this.setState({
      inputlist: [
        ...this.state.inputlist,
        { selected: this.state.myvalue, attribute: "", quantity: "" },
      ],
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("sortorder", this.state.sortorder);
    data.append("quantity", this.state.quantity);
    data.append("size", this.state.size);
    data.append("required", this.state.required);
    data.append("desc", this.state.desc);
    data.append("quant", this.state.quant);
    data.append("optValue", this.state.optValue);
    data.append("opValue", this.state.opValue);
    data.append("status", this.state.status);
    // data.append("name", this.state.name);
    data.append("productName", this.state.productName);
    data.append("quant", this.state.quant);
    // if (this.state.selectedFile !== null) {
    //   data.append(
    //     "brand_img",
    //     this.state.selectedFile,
    //     this.state.selectedName
    //   );
    // }

    // axiosConfig
    //   .post("/addbrand", data)
    //   .then((response) => {
    //     console.log(response);
    //     this.props.history.push("/app/freshlist/house/HouseProductList");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="12" md="12">
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Model</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        <tr>
                          <td className="p-0">
                            Vim Liquid Yellow Bottle -ML:750ml
                          </td>
                          <td>Detergent</td>
                          <td>
                            <Input
                              type="text"
                              placeholder="Quantity"
                              name="name"
                              value="1"
                              onChange={this.changeHandler}
                            />
                          </td>
                          <td>Rs 115.00</td>
                          <td>Rs 115.00</td>
                        </tr>
                        <tr>
                          <td className="p-0">
                            Vim Bar Tum Scruber-weght 250g
                          </td>
                          <td>Detergent</td>
                          <td>
                            <Input
                              type="text"
                              placeholder="Quantity"
                              name="name"
                              value="1"
                              onChange={this.changeHandler}
                            />
                          </td>
                          <td>Rs 26.00</td>
                          <td>Rs 26.00</td>
                        </tr>
                      </>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Form>
            <div>
              <Container>
                <Tabs
                  onSelect={(index, label) => console.log(label + " selected")}
                >
                  <Tab label="Product">
                    <div>
                      <Card>
                        <div style={{ color: "#000000" }}>Add Products(s)</div>
                        <CardBody>
                          <Form className="m-1" onSubmit={this.submitHandler}>
                            <Row className="mb-2">
                              <Col lg="12" md="12" className="mb-2">
                                <Label>Choose Product</Label>
                                <CustomInput
                                  type="select"
                                  placeholder="Select Type"
                                  name="type"
                                  value={this.state.productlist}
                                  onChange={this.changeHandler}
                                >
                                  <option value="tomato">tomato</option>
                                  <option value="onion">onion</option>
                                  <option value="apple">apple</option>
                                </CustomInput>
                              </Col>
                              <Col lg="12" md="12" className="mb-2">
                                <Label>Quantity</Label>
                                <Input
                                  type="text"
                                  placeholder="Quantity"
                                  name="quant"
                                  value={this.state.quant}
                                  onChange={this.changeHandler}
                                />
                              </Col>
                              <hr />
                            </Row>
                            <Row>
                              <div
                                style={{ textAlign: "right", width: "100%" }}
                              >
                                <Button
                                  color="primary"
                                  // type="submit"
                                  className="mr-1 mb-1"
                                  onClick={this.handleClick}
                                >
                                  Add Product
                                </Button>
                                {/* {this.state.inputlist.map((e, i) => {
                                  return (
                                    <>
                                      <tr key={i}>
                                        <td className="p-0">
                                          Vim Bar Tum Scruber-weght 250g
                                        </td>
                                        <td>Detergent</td>
                                        <td>
                                          <Input
                                            type="text"
                                            placeholder="Quantity"
                                            name="name"
                                            value="1"
                                            onChange={this.changeHandler}
                                          />
                                        </td>
                                        <td>Rs 26.00</td>
                                        <td>Rs 26.00</td>
                                        <td>
                                          {this.state.inputlist.length !==
                                            0 && (
                                            <Button
                                              color="primary"
                                              className="mr-1 mt-2"
                                              style={{ height: "40px" }}
                                              onClick={() =>
                                                this.handleremove(i)
                                              }
                                            >
                                              -
                                            </Button>
                                          )}
                                        </td>
                                        <td>
                                          {this.state.inputlist.length - 1 ===
                                            i && (
                                            <Button
                                              color="primary"
                                              style={{ padding: "5px 8px" }}
                                              onClick={this.handleClick}
                                            >
                                              Add Product
                                            </Button>
                                          )}
                                        </td>
                                      </tr>
                                    </>
                                  );
                                })} */}
                              </div>
                            </Row>

                            <Row>
                              <Col className="rrr">
                                <Button
                                  color="secondary"
                                  type="submit"
                                  className="mr-1 mb-1"
                                >
                                  Back
                                </Button>
                                <Button
                                  color="primary"
                                  type="submit"
                                  className="mr-1 mb-1 "
                                >
                                  Continue
                                </Button>
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                      </Card>
                    </div>
                    {/* <Product /> */}
                  </Tab>
                  <Tab label="Vouchers">
                    <Vouchers />
                  </Tab>
                </Tabs>
                <hr />
              </Container>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Totals;
