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

import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import Multiselect from "multiselect-react-dropdown";
import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";
import { Route } from "react-router-dom";

export class EditVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "",
      phone_no: "",
      order_zone: "",
      delivery_add: "",
      attribute: "",
      email: "",
      delivery_date: "",
      time_slot: "",
      status: "",
      productName: [],
      attribuName: [],
      new_address: "",
      notify: [],
      myvalue: "",
      inputlist: [{ selected: "", attribute: "", quantity: "" }],
      // selectedOptions: [],
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleremove = index => {
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
  async componentDidMount() {
    axiosConfig
      .get("/admin/product_list")
      .then(response => {
        // console.log(response);
        this.setState({
          productName: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/getall_units")
      .then(response => {
        this.setState({
          attribuName: response.data.data,
        });
      })
      .catch(err => {
        swal("Oops", "Something went wrong!", "error");
        console.log(err);
      });
  }

  submitHandler = e => {
    e.preventDefault();

    axiosConfig
      .post("/admin/addorder", this.state)

      .then(response => {
        console.log(response.data.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/freshlist/order/all");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Vendor
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className="float-right"
                    color="primary"
                    onClick={() =>
                      history.push("/app/freshlist/vendor/addVendor")
                    }
                  >
                    Add Vendor
                  </Button>
                )}
              />
            </Col>
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
    );
  }
}
export default EditVendor;

// this is a text push
