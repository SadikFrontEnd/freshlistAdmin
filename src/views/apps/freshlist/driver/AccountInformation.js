import React, { Component } from "react";
import { BsFillPersonFill } from "react-icons/bs";
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

export class AccountInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      selectedFile: null,
      selectedName: "",
      sortorder: "",
      // status: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  // changeHandler1 = (e) => {
  //   this.setState({ status: e.target.value });
  // };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    // console.log("abbb", data);
    // this.setState()
    // const data = new FormData();
    // data.append("name", this.state.name);
    // data.append("email", this.state.email);
    // data.append("password", this.state.password);
    // data.append("confirmpassword", this.state.confirmpassword);
    // data.append("sortorder", this.state.sortorder);

    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    axiosConfig
      .post(" /addproductcategory", {
        email: this.state.email,
        password: this.state.password,
        confirmpassword: this.state.confirmpassword,
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/category/category");
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
                  <BsFillPersonFill /> Account Information
                </h3>
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
                  <Col lg="4" md="4" className="mb-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder=" Email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="4" md="4" className="mb-1">
                    <Label>Password</Label>
                    <Input
                      required
                      type="password"
                      name="password"
                      placeholder=" Password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>

                  <Col lg="4" md="4" className="mb-1">
                    <Label> Confirm Password</Label>
                    <Input
                      required
                      type="Password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      value={this.state.confirmpassword}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                </Row>
                <Row style={{ float: "right" }}>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1 "
                  >
                    Submit
                  </Button.Ripple>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default AccountInformation;
