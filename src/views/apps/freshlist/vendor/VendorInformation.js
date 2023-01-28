import React, { Component } from "react";

import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  CustomInput,
  Label,
  Button,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import { Route } from "react-router-dom";

export class VendorInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mobileNo: "",
      email: "",
      selectedFile: null,
      selectedName: "",
      sortorder: "",
      desc: "",
      doorNo: "",
      product_img: "",
      aadhar_img: "",
      pan_img: "",
      status: "",
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
    data.append("mobileNo", this.state.mobileNo);
    data.append("email", this.state.email);
    data.append("sortorder", this.state.sortorder);
    data.append("doorNo", this.state.doorNo);
    data.append("desc", this.state.desc);
    data.append("status", this.state.status);
    data.append(
      "product_img",
      this.state.selectedFile,
      this.state.selectedName
    );
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    axiosConfig
      .post(" /addvender", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/vender/venderList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <div>
          <Card>
            <Row className="m-1">
              <Col>
                <h3 col-sm-6 className="float-left">
                  Vendor Information
                </h3>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className="btn btn-danger float-right"
                      onClick={() =>
                        history.push("/app/freshlist/vendor/vendorList")
                      }
                    >
                      Back
                    </Button>
                  )}
                />
              </Col>

              {/* <div className="table-input mr-1">
                                <Input
                                    placeholder="search by Product..."
                                    onChange={(e) =>
                                        this.updateSearchQuery(e.target.value)
                                    }
                                    value={this.state.value}
                                />
                            </div> */}
            </Row>
            <CardBody>
              <Form className="m-1" onSubmit={this.submitHandler}>
                <Row className="mb-2">
                  <Col lg="6" md="6" className="mb-2">
                    <Label>Name</Label>
                    <Input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>

                  <Col lg="6" md="6" className="mb-1">
                    <Label>Mobile No.</Label>
                    <Input
                      required
                      type="number"
                      name="mobileNo"
                      placeholder="Enter Mobile Number."
                      value={this.state.mobileNo}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>Email</Label>
                    <Input
                      required
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>Door Number</Label>
                    <Input
                      type="text"
                      name="desc"
                      placeholder="Door Number"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>Street</Label>
                    <Input
                      type="text"
                      name="street"
                      placeholder="Street"
                      value={this.state.street}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>City</Label>
                    <Input
                      type="text"
                      name="desc"
                      placeholder="City"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>PINCODE</Label>
                    <Input
                      type="text"
                      name="desc"
                      placeholder="PINCODE"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default VendorInformation;
