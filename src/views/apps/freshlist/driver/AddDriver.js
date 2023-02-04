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
import { BsFillPersonFill } from "react-icons/bs";
import { Route } from "react-router-dom";
import swal from "sweetalert";
export class AddDriver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      identity_type: "",
      identity_no: "",
      phone_no: "",
      address: "",
      email: "",
      password: "",
      selectedFile1: null,
      selectedName1: "",
      selectedFile2: null,
      selectedName2: "",
      selectedFile3: null,
      selectedName3: "",
      selectedFile4: null,
      selectedName4: "",
      selectedFile5: null,
      selectedName5: "",
      selectedFile6: null,
      selectedName6: "",
    };
  }
  onChangeHandler1 = event => {
    this.setState({ selectedFile1: event.target.files[0] });
    this.setState({ selectedName1: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler2 = event => {
    this.setState({ selectedFile2: event.target.files[0] });
    this.setState({ selectedName2: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler3 = event => {
    this.setState({ selectedFile3: event.target.files[0] });
    this.setState({ selectedName3: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler4 = event => {
    this.setState({ selectedFile4: event.target.files[0] });
    this.setState({ selectedName4: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler5 = event => {
    this.setState({ selectedFile5: event.target.files[0] });
    this.setState({ selectedName5: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler6 = event => {
    this.setState({ selectedFile6: event.target.files[0] });
    this.setState({ selectedName6: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const data = new FormData();
    console.log("firstname", this.state.firstname);
    console.log("lastname", this.state.lastname);
    console.log("identity_type", this.state.identity_type);
    console.log("identity_no", this.state.identity_no);
    console.log("phone_no", this.state.phone_no);
    console.log("address", this.state.address);
    console.log("email", this.state.email);
    console.log("password", this.state.password);
    console.log("confirmpassword", this.state.confirmpassword);

    data.append("firstname", this.state.firstname);
    data.append("lastname", this.state.lastname);
    data.append("identity_type", this.state.identity_type);
    data.append("identity_no", this.state.identity_no);
    data.append("phone_no", this.state.phone_no);
    data.append("address", this.state.address);
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    data.append("confirmpassword", this.state.confirmpassword);
    // data.append("identity_img", this.state.identity_img);
    // data.append("registrationCard", this.state.registrationCard);
    // data.append("insurance", this.state.insurance);
    // data.append("license", this.state.license);
    // data.append("driver_img", this.state.driver_img);

    axiosConfig
      .post("/admin/add_drive", data)
      .then(response => {
        console.log(response.data.data);
        if (response.data.msg == "success") {
          swal("Submitted Successfully");
        }
        this.props.history.push("/app/freshlist/driver/driverList");
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };
  render() {
    return (
      <div>
        <Col sm="12">
          <Col>
            <div>
              <Card>
                <Row className="m-1">
                  <Col>
                    <h1>Add Driver</h1>
                    {/* <h3 col-sm-6 className="float-left"> */}
                    {/* <BsFillPersonFill /> */}
                    {/* </h3> */}
                  </Col>
                  <Col>
                    <Route
                      render={({ history }) => (
                        <Button
                          className=" btn btn-danger float-right"
                          onClick={() =>
                            history.push("/app/freshlist/driver/driverList")
                          }
                        >
                          Back
                        </Button>
                      )}
                    />
                  </Col>
                </Row>
                <CardBody>
                  <Form className="m-1" onSubmit={this.submitHandler}>
                    <Row className="mb-2">
                      <Col lg="6" md="6" className="mb-2">
                        <Label>First Name</Label>
                        <Input
                          required
                          type="text"
                          name="firstname"
                          placeholder="First Name"
                          value={this.state.firstname}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Last Name</Label>
                        <Input
                          required
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          value={this.state.lastname}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Identity Type</Label>
                        <Input
                          type="select"
                          name="identity_type"
                          placeholder="Enter Identity Type"
                          value={this.state.identity_type}
                          onChange={this.changeHandler}
                        >
                          <option value="Driving License">
                            Driving License
                          </option>
                          <option value="PanCard">Pan Card</option>
                          <option value="PassPort">Passport</option>
                        </Input>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>
                          Identity No.-
                          {this.state.identity_type == "" ? null : (
                            <span style={{ color: "red" }}>
                              of-{this.state.identity_type}
                            </span>
                          )}
                        </Label>
                        <Input
                          required
                          type="text"
                          name="identity_no"
                          placeholder="Identity No"
                          value={this.state.identity_no}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Identity Type Image</Label>
                        <CustomInput
                          required
                          // type="file"
                          // name="driver_img"
                          // value={this.state.identity}
                          // onChange={this.changeHandler}
                          // onChange={this.onImageChange}
                          type="file"
                          onChange={this.onChangeHandler1}
                        ></CustomInput>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Phone No.</Label>
                        <Input
                          required
                          type="tel"
                          maxLength="10"
                          name="phone_no"
                          placeholder="Phone No"
                          value={this.state.phone_no}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Address</Label>
                        <Input
                          required
                          type="text"
                          name="address"
                          placeholder="Address"
                          value={this.state.address}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>
                          Aadhar Card-Image
                          <span style={{ color: "red" }}>* Pdf/jpeg</span>
                        </Label>
                        <CustomInput
                          required
                          type="file"
                          onChange={this.onChangeHandler2}
                          // name="identity_img"
                          // accept="application/pdf,image/gif, image/jpeg,image/png"
                          // multiple
                          // type="file"
                          // onChange={this.fileSelectedHandler}
                        />
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Driver Image</Label>
                        <CustomInput
                          required
                          type="file"
                          onChange={this.onChangeHandler3}
                          // type="file"
                          // name="driver_img"
                          // value={this.state.identity_img}
                          // onChange={this.changeHandler}
                          // onChange={this.onImageChange}
                          // onChange={this.driver_img}
                        ></CustomInput>
                      </Col>
                    </Row>
                    <Row className="m-1">
                      <Col>
                        {/* <h3 col-sm-6 className="float-left"> */}
                        {/* <BsFillPersonFill /> */}
                        Account Information
                        {/* </h3> */}
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg="6" md="6" className="mb-2">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder=" Email"
                          value={this.state.email}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
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

                      <Col lg="6" md="6" className="mb-1">
                        <Label> Confirm Password</Label>
                        <Input
                          // required
                          type="Password"
                          name="confirmpassword"
                          placeholder="Confirm Password"
                          value={this.state.confirmpassword}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                    </Row>
                    <Row className="m-1">
                      <Col>
                        {/* <BsFillPersonFill /> */}
                        VehicleInfo
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Registration Card</Label>
                        <CustomInput
                          required
                          type="file"
                          onChange={this.onChangeHandler4}
                          // type="file"
                          // name="identity"
                          // value={this.state.identity}
                          // onChange={this.changeHandler}
                        ></CustomInput>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Insurance</Label>
                        <CustomInput
                          required
                          type="file"
                          onChange={this.onChangeHandler5}
                          // type="file"
                          // name="identity"
                          // value={this.state.identity}
                          // onChange={this.changeHandler}
                        ></CustomInput>
                      </Col>

                      <Col lg="6" md="6" className="mb-1">
                        <Label>License</Label>
                        <CustomInput
                          required
                          // type="file"
                          // name="identity"
                          // value={this.state.identity}
                          // onChange={this.changeHandler}
                          type="file"
                          onChange={this.onChangeHandler6}
                        ></CustomInput>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Driver Photo</Label>
                        <CustomInput
                          required
                          type="file"
                          onChange={this.onChangeHandler7}
                          // type="file"
                          // name="identity"
                          // value={this.state.identity}
                          // onChange={this.changeHandler}
                        ></CustomInput>
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
          </Col>
        </Col>
      </div>
    );
  }
}
export default AddDriver;
