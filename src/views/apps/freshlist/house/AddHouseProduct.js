import React from "react";
import { Tabs, Tab } from "react-bootstrap-tabs";
import { Container } from "reactstrap";
import General from "./productData/General";
import Data from "./productData/Data";
import Links from "./productData/Links";
import Attribute from "./productData/Attribute";
import Discount from "./productData/Discount";
import Special from "./productData/Special";
import ImageGallery from "./productData/ImageGallery";
function AddHouseProduct() {
  return (
    <div>
      <Container>
        <Tabs onSelect={(index, label) => console.log(label + " selected")}>
          <Tab label="General">
            <General />
          </Tab>
          <Tab label="Data">
            <Data />
          </Tab>
          <Tab label="Links">
            <Links />
          </Tab>
          <Tab label="Attribute">
            <Attribute />
          </Tab>
          <Tab label="Option">Tab 5 Option</Tab>
          <Tab label="Recurring">Tab 6 Recurring</Tab>
          <Tab label="Discount">
            <Discount />
          </Tab>
          <Tab label="Special">
            <Special />
          </Tab>
          <Tab label="Image">
            <ImageGallery />
          </Tab>
          <Tab label="Banners">Tab 10 Banners</Tab>
          <Tab label="Videos">Tab 11 Data</Tab>
          <Tab label="Reward Points">Tab 12 Links</Tab>
          <Tab label="SEO">Tab 13 SEO</Tab>
          <Tab label="Design">Tab 14 Design</Tab>
        </Tabs>
        <hr />
      </Container>
    </div>
  );
}

export default AddHouseProduct;

// import React, { Component } from "react";
// import {
//   Card,
//   CardBody,
//   Col,
//   Form,
//   Row,
//   Input,
//   Label,
//   Button,
//   FormGroup,
//   CustomInput,
//   List,
// } from "reactstrap";
// import Multiselect from "multiselect-react-dropdown";
// import { history } from "../../../../history";
// import axiosConfig from "../../../../axiosConfig";
// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "../../../../assets/scss/plugins/extensions/editor.scss";
// import draftToHtml from "draftjs-to-html";
// import { Route } from "react-router-dom";

// export class AddHouseProduct extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product_name: "",
//       selectedFile: null,
//       selectedName: "",
//       description: "",
//       type: "",
//       attribuName: [],
//       model: "",
//       brand: "",
//       quantity: "",
//       gst_class: "",
//       min_selling_Q: "",
//       max_selling_Q: "",
//       reward_points: "",
//       product_image: "",
//       video_url: "",
//       meta_desc: "",
//       metadata: "",
//       product_search_tags: "",
//       category: "",
//       sub_category: "",
//       mrp: "",
//       nomrp: "",
//       buying_price: "",
//       m_margin: "",
//       selling_price: "",
//       m_customer: "",
//       save_parsent: "",
//       units_name: "",
//       buying_price1: "",
//       createdAt: "",
//       categoryT: [],
//       brN: [],
//       unT: [],
//       status: "",
//       attributename: "",
//       attributevalue: "",
//       radio1: "",
//       inputlist: [{ notify: "", attribute: "", quantity: "" }],
//     };
//   }
//   handleremove = (index) => {
//     const list = [...this.state.inputlist];
//     list.splice(index, 1);
//     this.setState({ inputlist: list });
//   };

//   handleinputchange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...this.state.inputlist];
//     list[index][name] = value;

//     this.setState({ inputlist: list });
//   };
//   handleClick = () => {
//     this.setState({
//       inputlist: [
//         ...this.state.inputlist,
//         { notify: "", attribute: "", quantity: "" },
//       ],
//     });
//   };
//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] });
//     this.setState({ selectedName: event.target.files[0].name });
//     console.log(event.target.files[0]);
//   };
//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files });
//     this.setState({ selectedName: event.target.files.name });
//     console.log(event.target.files);
//   };

//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };
//   changeHandler2 = (e) => {
//     this.setState({ radio1: e.target.value });
//   };
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   onEditorStateChange = (editorState) => {
//     this.setState({
//       editorState,
//       desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
//     });
//   };
//   async componentDidMount() {
//     axiosConfig.get("/admin/getall_units").then((response) => {
//       this.setState({
//         attribuName: response.data.data,
//       });
//     });
//     axiosConfig
//       .get("/admin/getallcategory")
//       .then((response) => {
//         console.log(response);
//         this.setState({
//           categoryT: response.data.data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     axiosConfig
//       .get("/admin/brandlist")
//       .then((response) => {
//         console.log(response);
//         this.setState({
//           brN: response.data.data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   submitHandler = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("product_name", this.state.product_name);
//     data.append("description", this.state.description);
//     data.append("type", this.state.type);
//     data.append("status", this.state.status);
//     data.append("model", this.state.model);
//     data.append("brand", this.state.brand);
//     data.append("desc", this.state.desc);
//     data.append("quantity", this.state.quantity);
//     data.append("gst_class", this.state.gst_class);
//     data.append("min_selling_Q", this.state.min_selling_Q);
//     data.append("max_selling_Q", this.state.max_selling_Q);
//     data.append("reward_points", this.state.reward_points);
//     data.append("video_url", this.state.video_url);
//     data.append("meta_desc", this.state.meta_desc);
//     data.append("metadata", this.state.metadata);
//     data.append("product_search_tags", this.state.product_search_tags);
//     data.append("category", this.state.category);
//     data.append("sub_category", this.state.sub_category);
//     data.append("mrp", this.state.mrp);
//     data.append("buying_price", this.state.buying_price);
//     data.append("m_margin", this.state.m_margin);
//     data.append("selling_price", this.state.selling_price);
//     data.append("m_customer", this.state.m_customer);
//     data.append("save_parsent", this.state.save_parsent);
//     data.append("units_name", this.state.units_name);
//     data.append("createdAt", this.state.createdAt);
//     data.append("status", this.state.status);
//     for (const file of this.state.selectedFile) {
//       if (this.state.selectedFile !== null) {
//         data.append("product_image", file, file.name);
//       }
//     }
//     for (var value of data.values()) {
//       console.log(value);
//     }
//     for (var key of data.keys()) {
//       console.log(key);
//     }
//     axiosConfig
//       .post("/admin/addproduct", data)
//       .then((response) => {
//         console.log(response);
//         this.props.history.push("/app/freshlist/house/HouseProductList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     return (
//       <div>
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Add Product
//               </h1>
//             </Col>
//             <Col>
//               <Route
//                 render={({ history }) => (
//                   <Button
//                     className=" btn btn-danger float-right"
//                     onClick={() =>
//                       history.push("/app/freshlist/house/houseProductList")
//                     }
//                   >
//                     Back
//                   </Button>
//                 )}
//               />
//             </Col>
//           </Row>
//           <Row>
//             <Col md="9">
//               <CardBody className="d-flex">
//                 <Form className="mx-2 " onSubmit={this.submitHandler}>
//                   <Row className="mb-2">
//                     <Col lg="6" md="6" className="mb-2">
//                       <Label> Product Name</Label>
//                       <Input
//                         type="text"
//                         placeholder="Product Name"
//                         name="name"
//                         value={this.state.name}
//                         onChange={this.changeHandler}
//                       />
//                     </Col>

//                     <Col lg="6" md="6" className="mb-2">
//                       <Label>Type</Label>
//                       <CustomInput
//                         type="select"
//                         placeholder="Select Type"
//                         name="type"
//                         value={this.state.name}
//                         onChange={this.changeHandler}
//                       >
//                         <option>---Select---</option>
//                         <option value="veg">Veg</option>
//                         <option value="nonveg">Non-Veg</option>
//                         <option value="egg">Egg only</option>
//                       </CustomInput>
//                     </Col>
//                     <Col lg="6" md="6" className="mb-1">
//                       <Label>Brand</Label>
//                       <Input
//                         type="select"
//                         placeholder="Enter brand"
//                         name="brand"
//                         value={this.state.brand}
//                         onChange={this.changeHandler}
//                       >
//                         <option>select Brand</option>
//                         {this.state.brN?.map((brandlist) => (
//                           <option value={brandlist?._id} key={brandlist?._id}>
//                             {brandlist?.brand_name}
//                           </option>
//                         ))}
//                       </Input>
//                     </Col>
//                     {/* <Col lg="6" md="6" className="mb-1">
//                       <Label>Color</Label>
//                       <Input
//                         type="select"
//                         name="color_name"
//                         value={this.state.color_name}
//                         onChange={this.changeHandler}
//                       >
//                         <option>select Color</option>
//                         {this.state.clR?.map((all_color) => (
//                           <option value={all_color?._id} key={all_color?._id}>
//                             {all_color?.color_name}
//                           </option>
//                         ))}
//                       </Input>
//                     </Col> */}
//                     {/* <Col lg="6" md="6" className="mb-1">
//                       <Label>Size</Label>
//                       <Input
//                         type="select"
//                         name="size_name"
//                         value={this.state.size_name}
//                         onChange={this.changeHandler}
//                       >
//                         <option>select Size</option>
//                         {this.state.size?.map((all_size) => (
//                           <option value={all_size?._id} key={all_size?._id}>
//                             {all_size?.size_name}
//                           </option>
//                         ))}
//                       </Input>
//                     </Col> */}

//                     <Col lg="6" md="6" className="mb-1">
//                       <Label>Model</Label>
//                       <Input
//                         type="text"
//                         placeholder="Enter Model"
//                         name="type"
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col>

//                     {/* <Col lg="6" md="6" className="mb-1">
//                       <Label>Fix Price</Label>
//                       <Input
//                         type="text"
//                         placeholder="Enter Fix Price"
//                         name="type"
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col> */}
//                   </Row>
//                   {this.state.inputlist.map((e, i) => {
//                     return (
//                       <Row key={i}>
//                         {/* <Col lg="3" md="3" className="mb-1">
//                           <Label>Product Name</Label>
//                           <Multiselect
//                             name="notify"
//                             value={this.state.notify}
//                             isObject={false}
//                             placeholder="Search and Select"
//                             onRemove={(e) => {
//                               console.log(e);
//                             }}
//                             onSelect={(e) => {
//                               this.setState({ notify: e });

//                               console.log(e);
//                             }}
//                             selectionLimit="1"
//                             onChange={(e) => this.handleinputchange(e, i)}
//                             options={[
//                               "Aalu - 2kg ",
//                               "tamater",
//                               "ata",
//                               "milk",
//                               "began,",
//                             ]}
//                             showCheckbox
//                             className="mmm"
//                           />

//                         </Col> */}
//                         {/* <Col lg="6" md="6">
//                           <Label>Attribute Name</Label>
//                           <Multiselect
//                             name="attributename"
//                             value={this.state.attributename}
//                             isObject={false}
//                             onRemove={(e) => {
//                               console.log(e);
//                             }}
//                             onSelect={(e) => {
//                               this.setState({ attributename: e });
//                               console.log(e);
//                             }}
//                             onChange={this.changeHandler}
//                             options={["KG", "Gram", "Meter", "Liter"]}
//                             showCheckbox
//                             className="mmm"
//                           />
//                         </Col> */}
//                         <Col lg="6" md="6" className="mb-2">
//                           <Label>Attribute Value</Label>
//                           <Multiselect
//                             name="attributevalue"
//                             value={this.state.attributevalue}
//                             isObject={false}
//                             onRemove={(e) => {
//                               console.log(e);
//                             }}
//                             onSelect={(e) => {
//                               this.setState({ attributevalue: e });
//                               console.log(e);
//                             }}
//                             onChange={this.changeHandler}
//                             options={["1KG", "2KG", "5KG", "10KG"]}
//                             showCheckbox
//                             className="mmm"
//                           />
//                         </Col>
//                         <Col lg="6" md="6" className="mb-2">
//                           <Label>Quantity</Label>
//                           <Input
//                             type="number"
//                             placeholder="Quantity"
//                             name="quantity"
//                             value={this.state.inputlist.notify}
//                             onChange={(e) => this.handleinputchange(e, i)}
//                           />
//                         </Col>
//                         <Col lg="6" md="6" className="">
//                           <Label>Price</Label>
//                           <Input
//                             type="number"
//                             placeholder="Price"
//                             name="price"
//                             value={this.state.inputlist.price}
//                             onChange={(e) => this.handleinputchange(e, i)}
//                           />
//                         </Col>
//                         <Col lg="6" md="6" className="mb-1">
//                           <Label>Discount %</Label>
//                           <Input
//                             type="text"
//                             placeholder="Enter Discount"
//                             name="type"
//                             value={this.state.sortorder}
//                             onChange={this.changeHandler}
//                           />
//                         </Col>

//                         {/* <Col>
//                       <Button.Ripple
//                         onClick={this.handleClick}
//                         color="primary"
//                         className="mr-1 mt-2"
//                       >
//                         Add new Field
//                       </Button.Ripple>
//                     </Col> */}
//                         <Col
//                           lg="3"
//                           md="3"
//                           className="d-flex justify-content-left my-2"
//                         >
//                           {this.state.inputlist.length - 1 === i && (
//                             <Button
//                               color="primary"
//                               style={{ height: "40px" }}
//                               className="mr-1 mt-2 addmorebutton form-control"
//                               onClick={this.handleClick}
//                             >
//                               Add
//                             </Button>
//                           )}
//                           {this.state.inputlist.length !== 1 && (
//                             <Button
//                               color="primary"
//                               style={{ height: "40px", width: "100%" }}
//                               className="mr-1 mt-2 addmorebutton form-control d-flex justify-content-center"
//                               onClick={() => this.handleremove(i)}
//                             >
//                               Remove
//                             </Button>
//                           )}
//                         </Col>
//                       </Row>
//                     );
//                   })}
//                   <Row>
//                     {/* <Col lg="6" md="6" className="mb-2">
//                       <Label>Attribute</Label>
//                       <CustomInput
//                         type="select"
//                         placeholder="Select Attribute"
//                         name="type"
//                         value={this.state.name}
//                         onChange={this.changeHandler}
//                       >
//                         <option>---Select---</option>
//                         <option value="1KG">1KG</option>
//                         <option value="2KG">2KG</option>
//                         <option value="3KG">3KG</option>
//                       </CustomInput>
//                     </Col> */}

//                     <Col lg="6" md="6" className="mb-2">
//                       <Label>GST Class %</Label>
//                       <CustomInput
//                         type="select"
//                         placeholder="Select Type"
//                         name="type"
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       >
//                         <option>---Select---</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                       </CustomInput>
//                     </Col>
//                     <Col lg="6" md="6" className="mb-1">
//                       <Label>Minimum Selling Quatity</Label>
//                       <Input
//                         type="text"
//                         placeholder=""
//                         name="type"
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col>
//                     <Col lg="6" md="6" className="mb-1">
//                       <Label>Maximum Selling Quantity</Label>
//                       <Input
//                         type="text"
//                         placeholder=""
//                         name="type"
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col>
//                     <Col lg="6" md="6" className="mb-1">
//                       <Label>Reward Points</Label>
//                       <Input
//                         type="number"
//                         placeholder=""
//                         name="type"
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col>

//                     <Col lg="6" md="6" className="mb-1">
//                       <Label>Thumnail Image</Label>
//                       <CustomInput
//                         type="file"
//                         placeholder=""
//                         name=""
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col>
//                     <Col lg="6" md="6" className="mb-1">
//                       <Label>Upload Product Images</Label>
//                       <CustomInput
//                         type="file"
//                         placeholder=""
//                         name=""
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col>
//                     {/* <Col lg="6" md="6" className="mb-1">
//                       <Label>Upload Product Images</Label>
//                       <CustomInput
//                         type="file"
//                         placeholder=""
//                         name=""
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col> */}

//                     {/* <Col lg="6" md="6" className="mb-1">
//                       <Label>Upload Product Images</Label>
//                       <CustomInput
//                         type="file"
//                         placeholder=""
//                         name=""
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col> */}
//                     <Col lg="6" md="6" className="mb-1">
//                       <Label>Video Url</Label>
//                       <Input
//                         type="text"
//                         placeholder=""
//                         name="type"
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col>
//                     <Col lg="6" md="6" className="mb-1">
//                       <FormGroup tag="fieldset" onChange={this.changeHandler2}>
//                         <Label>Bundle:</Label>
//                         <div className="d-flex">
//                           <FormGroup check>
//                             <Input
//                               value="bundleyes"
//                               name="radio1"
//                               type="radio"
//                             />

//                             <Label check className="mr-2">
//                               Yes
//                             </Label>
//                           </FormGroup>
//                           <FormGroup check>
//                             <Input
//                               value="bundleNO"
//                               name="radio1"
//                               type="radio"
//                             />
//                             <Label check>No</Label>
//                           </FormGroup>
//                         </div>
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     {this.state.radio1 === "bundleyes" ? (
//                       <>
//                         <Col lg="6" md="6" className="">
//                           <Label>Bundle</Label>
//                           <Input
//                             type="text"
//                             placeholder=""
//                             name="type"
//                             value={this.state.sortorder}
//                             onChange={this.changeHandler}
//                           />
//                         </Col>
//                         <Col lg="6" md="6" className="">
//                           <Label>Attribute Value</Label>
//                           <Input
//                             type="text"
//                             placeholder=""
//                             name="type"
//                             value={this.state.sortorder}
//                             onChange={this.changeHandler}
//                           />
//                         </Col>
//                         <Col lg="6" md="6" className="">
//                           <Label>Price</Label>
//                           <Input
//                             type="text"
//                             placeholder=""
//                             name="type"
//                             value={this.state.sortorder}
//                             onChange={this.changeHandler}
//                           />
//                         </Col>
//                       </>
//                     ) : null}
//                   </Row>
//                   <Row className="my-1">
//                     <Col lg="12" md="12">
//                       <h1 col-sm-6 className="float-left">
//                         SEO
//                       </h1>
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col lg="12" md="12" className="mb-1">
//                       <Label>MetaData</Label>
//                       <textarea
//                         type="text"
//                         rows={4}
//                         className="form-control"
//                         placeholder="MetaData"
//                         name="type"
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col>
//                     <Col lg="12" md="12" className="mb-1">
//                       <Label>MetaData Description </Label>
//                       <textarea
//                         type="text"
//                         className="form-control"
//                         rows={4}
//                         placeholder="Description"
//                         name="type"
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col>
//                     <Col lg="12" md="12" className="mb-1">
//                       <Label>Product Search Tags</Label>
//                       <textarea
//                         type="text"
//                         rows={4}
//                         className="form-control"
//                         placeholder="Product Search Tags"
//                         name="type"
//                         value={this.state.sortorder}
//                         onChange={this.changeHandler}
//                       />
//                     </Col>
//                   </Row>

//                   <Row className="">
//                     <Col lg="12" md="12" className="mb-2 mt-1">
//                       <FormGroup>
//                         <Label className="mb-1">
//                           <h3>Price</h3>
//                         </Label>
//                         <div>
//                           <input
//                             style={{ marginRight: "3px" }}
//                             type="radio"
//                             name="status"
//                             value="MRP"
//                           />
//                           <span style={{ marginRight: "80px" }}>MRP</span>
//                           {this.state.buying_price1 === "" ? (
//                             <Row className="mb-2 mt-1">
//                               <Col lg="6" md="6">
//                                 <FormGroup>
//                                   <Label>MRP</Label>
//                                   <Input
//                                     type="text"
//                                     placeholder="MRP"
//                                     name="mrp"
//                                     value={this.state.mrp}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                               <Col lg="6" md="6">
//                                 <FormGroup>
//                                   <Label>Buying Price</Label>
//                                   <Input
//                                     type="text"
//                                     placeholder="Enter Buying Price"
//                                     name="buying_price"
//                                     value={this.state.buying_price}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                               <Col lg="6" md="6">
//                                 <FormGroup>
//                                   <Label>M Margin (%)</Label>
//                                   <Input
//                                     type="text"
//                                     placeholder="Enter M Margin"
//                                     name="m_margin"
//                                     value={this.state.m_margin}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                               <Col lg="6" md="6">
//                                 <FormGroup>
//                                   <Label>Selling Price</Label>
//                                   <Input
//                                     type="text"
//                                     readOnly
//                                     placeholder="Enter Selling Price"
//                                     name="selling_price"
//                                     value={this.state.selling_price}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                               <Col lg="6" md="6">
//                                 <FormGroup>
//                                   <Label>M Customer</Label>
//                                   <Input
//                                     type="text"
//                                     readOnly
//                                     placeholder="Enter M Customer"
//                                     name="Mcustom"
//                                     value={this.state.Mcustom}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                               <Col lg="6" md="6">
//                                 <FormGroup>
//                                   <Label>Save %</Label>
//                                   <Input
//                                     type="text"
//                                     readOnly
//                                     placeholder="Enter Save %"
//                                     name="save"
//                                     value={this.state.save}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                             </Row>
//                           ) : null}

//                           <input
//                             style={{ marginRight: "3px" }}
//                             type="radio"
//                             name="status"
//                             value="NO MRP"
//                           />
//                           <span style={{ marginRight: "3px" }}>NO MRP</span>

//                           {this.state.buying_price === "" ? (
//                             <Row className="mb-2 mt-1">
//                               <Col lg="4" md="4">
//                                 <FormGroup>
//                                   <Label>MRP</Label>
//                                   <Input
//                                     type="text"
//                                     placeholder="Enter MRP"
//                                     name="onmrp"
//                                     value={this.state.onmrp}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                               <Col lg="4" md="4">
//                                 <FormGroup>
//                                   <Label>Buying Price</Label>
//                                   <Input
//                                     type="text"
//                                     placeholder="Enter Buying Price"
//                                     name="buying_price1"
//                                     value={this.state.buying_price1}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                               <Col lg="4" md="4">
//                                 <FormGroup>
//                                   <Label>M Margin (%)</Label>
//                                   <Input
//                                     type="text"
//                                     placeholder="Enter M Margin"
//                                     name="m_margin"
//                                     value={this.state.m_margin}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                               <Col lg="4" md="4">
//                                 <FormGroup>
//                                   <Label>Selling Price</Label>
//                                   <Input
//                                     type="text"
//                                     readOnly
//                                     placeholder="Enter Selling Price"
//                                     name="selling_price"
//                                     value={this.state.selling_price}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                               <Col lg="4" md="4">
//                                 <FormGroup>
//                                   <Label>M Customer</Label>
//                                   <Input
//                                     type="text"
//                                     readOnly
//                                     placeholder="Enter M Customer"
//                                     name="Mcustom"
//                                     value={this.state.Mcustom}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                               <Col lg="4" md="4">
//                                 <FormGroup>
//                                   <Label>Save %</Label>
//                                   <Input
//                                     readOnly
//                                     type="text"
//                                     placeholder="Enter Save %"
//                                     name="save"
//                                     value={this.state.save}
//                                     onChange={this.changeHandler}
//                                   />
//                                 </FormGroup>
//                               </Col>
//                             </Row>
//                           ) : null}
//                         </div>
//                       </FormGroup>
//                     </Col>

//                     <Col lg="12" md="12">
//                       <FormGroup>
//                         <Label>Description</Label>
//                         <Editor
//                           toolbarClassName="demo-toolbar-absolute"
//                           wrapperClassName="demo-wrapper"
//                           editorClassName="demo-editor"
//                           editorState={this.state.editorState}
//                           onEditorStateChange={this.onEditorStateChange}
//                           toolbar={{
//                             image: {
//                               uploadCallback: this.uploadImageCallBack,
//                               previewImage: true,
//                               alt: { present: false, mandatory: false },
//                               uploadEnabled: true,
//                               inputAccept:
//                                 "image/gif,image/jpeg,image/jpg,image/png,image/svg",
//                             },
//                           }}
//                         />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Button.Ripple
//                       color="primary"
//                       type="submit"
//                       className="mr-1 mb-1"
//                     >
//                       Add
//                     </Button.Ripple>
//                   </Row>
//                 </Form>
//               </CardBody>
//             </Col>
//             <Col md="3" className="mt-3">
//               <FormGroup check inline>
//                 <List type="unstyled">
//                   <li>
//                     <Input type="checkbox" />
//                     <Label check>Category</Label>
//                     <ul>
//                       <li style={{ listStyleType: "none" }}>
//                         <Input type="checkbox" />
//                         <Label check> Sub Category</Label>
//                       </li>
//                       <li style={{ listStyleType: "none" }}>
//                         <Input type="checkbox" />
//                         <Label check> Sub Category</Label>
//                       </li>
//                     </ul>
//                   </li>
//                 </List>
//               </FormGroup>
//               <FormGroup check inline>
//                 <List type="unstyled">
//                   <li>
//                     <Input type="checkbox" />
//                     <Label check>Category</Label>
//                     <ul>
//                       <li style={{ listStyleType: "none" }}>
//                         <Input type="checkbox" />
//                         <Label check> Sub Category</Label>
//                       </li>
//                       <li style={{ listStyleType: "none" }}>
//                         <Input type="checkbox" />
//                         <Label check> Sub Category</Label>
//                       </li>
//                     </ul>
//                   </li>
//                 </List>
//               </FormGroup>
//             </Col>
//           </Row>
//         </Card>
//       </div>
//     );
//   }
// }
// export default AddHouseProduct;
