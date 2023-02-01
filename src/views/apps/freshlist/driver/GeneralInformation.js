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
import { Route } from "react-router-dom";
import swal from "sweetalert";

export class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      identity_type: "",
      identity_no: "",
      phone_no: "",
      address: "",
      // driver_img: [],
      identity_img: [],
      aadharcardimage: [],
      selectedFile: null,
      selectedName: "",
      sortorder: "",
      desc: "",
      driver_img: "",
      files: [],
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
    console.log(this.state.files);
    // console.log("fname", this.state.firstname);
    // console.log("lastname", this.state.lastname);
    // console.log("identity_type", this.state.identity_type);
    // console.log("identity_no", this.state.identity_no);
    // console.log("phone_no", this.state.phone_no);
    // console.log("address", this.state.address);
    // console.log("driver_img", this.state.driver_img);
    // console.log("identity_img", this.state.identity_img);
    const data = new FormData();
    data.append("firstname", this.state.firstname);
    data.append("lastname", this.state.lastname);
    data.append("identity_type", this.state.identity_type);
    data.append("identity_no", this.state.identity_no);
    data.append("phone_no", this.state.phone_no);
    data.append("address", this.state.address);
    data.append("driver_img", this.state.driver_img);
    data.append("identity_img", this.state.identity_img);

    // data.append("driver_img", this.state.driver_img);
    // data.append(
    //   "driverImage",
    //   this.state.selectedFile,
    //   this.state.selectedName
    // );
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    axiosConfig
      .post("/admin/add_drive", data)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.msg == "success") {
          swal("Submitted Successfully");
        }
        this.props.history.push("/app/freshlist/driver/driverList");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      // console.log(img);
      // this.setState({
      //   identity_img: URL.createObjectURL(img),
      // });
      this.setState({
        identity_img: img,
      });
    }
  };
  onImageChangeone = (event) => {
    if (event.target.files && event.target.files[0]) {
      let imgone = event.target.files[0];
      // console.log(imgone);
      // this.setState({
      //   identity_img: URL.createObjectURL(img),
      // });
      this.setState({
        aadharcardimage: imgone,
      });
    }
  };
  deliverymanimage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let imgone = event.target.files[0];
      // console.log(imgone);
      // this.setState({
      //   identity_img: URL.createObjectURL(img),
      // });
      this.setState({
        driver_img: imgone,
      });
    }
  };
  fileSelectedHandler = (e) => {
    this.setState({
      aadharcardimage: [...this.state.aadharcardimage, ...e.target.files],
    });
    console.log(this.state.aadharcardimage);
  };

  render() {
    return (
      <div>
        <div>
          <Card>
            <Row className="m-1">
              <Col>
                <h1>Edit Driver</h1>
                <h3 col-sm-6 className="float-left">
                  <BsFillPersonFill />
                  General Information
                </h3>
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
                      required
                      type="select"
                      name="identity_type"
                      placeholder="Enter Identity Type"
                      value={this.state.identity_type}
                      onChange={this.changeHandler}
                    >
                      {/* <option value="Select">--Select--</option> */}
                      {/* <option value="Aadhar">Aadhar Card</option> */}
                      <option value="Driving License">Driving License</option>
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
                      type="file"
                      // name="driver_img"
                      // value={this.state.identity}
                      // onChange={this.changeHandler}

                      onChange={this.onImageChange}
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
                  {/* <Col lg="6" md="6" className="mb-1">
                    <Label>Aadhar Card-Image</Label>
                    <CustomInput
                      required
                      type="file"
                      name="identity_img"
                      // value={this.state.identity_img}
                      // onChange={this.changeHandler}
                      onChange={this.onImageChangeone}
                    ></CustomInput>
                  </Col> */}
                  <Col lg="6" md="6" className="mb-1">
                    <Label>
                      Aadhar Card-Image
                      <span style={{ color: "red" }}>* Pdf/jpeg</span>
                    </Label>
                    <CustomInput
                      required
                      name="identity_img"
                      accept="application/pdf,image/gif, image/jpeg,image/png"
                      multiple
                      type="file"
                      onChange={this.fileSelectedHandler}
                    />
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>Driver Image</Label>
                    <CustomInput
                      required
                      type="file"
                      name="identity_img"
                      // value={this.state.identity_img}
                      // onChange={this.changeHandler}
                      onChange={this.deliverymanimage}
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
      </div>
    );
  }
}
export default GeneralInformation;

// import React, { Component } from "react";
// import GeneralInformation from "./GeneralInformation";
// import AccountInformation from "./AccountInformation";
// import VehicleInfo from "./VehicleInfo";
// import {
//   Card,
//   CardBody,
//   Col,
//   Form,
//   Row,
//   Input,
//   CustomInput,
//   Label,
//   Button,
// } from "reactstrap";
// import { history } from "../../../../history";
// import axiosConfig from "../../../../axiosConfig";

// export class AddDriver extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       selectedFile: null,
//       selectedName: "",
//       sortorder: "",
//       desc: "",
//       product_img: "",
//       status: "",
//     };
//   }

//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] });
//     this.setState({ selectedName: event.target.files[0].name });
//     console.log(event.target.files[0]);
//   };

//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("name", this.state.name);
//     data.append("sortorder", this.state.sortorder);
//     data.append("desc", this.state.desc);
//     data.append("status", this.state.status);
//     data.append(
//       "product_img",
//       this.state.selectedFile,
//       this.state.selectedName
//     );
//     //   for (var value of data.values()) {
//     //     console.log(value);
//     //  }
//     axiosConfig
//       .post(" /addproductcategory", data)
//       .then((response) => {
//         console.log(response);
//         this.props.history.push("/app/category/category");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     return (
//       <div>
//         <Col sm="12">
//           <Col>
//             <h1 sm="12">
//               <GeneralInformation />
//             </h1>
//           </Col>
//         </Col>
//         <Col sm="12">
//           <Col>
//             <h1 sm="12">
//               <AccountInformation />
//             </h1>
//           </Col>
//         </Col>
//         <Col sm="12">
//           <Col>
//             <h1 sm="12">
//               <VehicleInfo />
//             </h1>
//           </Col>
//         </Col>
//       </div>
//     );
//   }
// }
// export default AddDriver;
