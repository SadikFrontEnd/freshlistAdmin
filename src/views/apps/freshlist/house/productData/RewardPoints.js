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
import { history } from "../../../../../history";
import axiosConfig from "../../../../../axiosConfig";

export class RewardPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      default: "",
      ex_customer: "",
      selectedFile: null,
      selectedName: "",
      sortorder: "",
      brand_img: "",
      inputlist: [{ selected: "", attribute: "", quantity: "" }],
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleremove = (index) => {
    const list = [...this.state.inputlist];
    list.splice(index, 1);
    this.setState({ inputlist: list });
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
    data.append("default", this.state.default);
    data.append("ex_customer", this.state.ex_customer);
    data.append("sortorder", this.state.sortorder);
    if (this.state.selectedFile !== null) {
      data.append(
        "brand_img",
        this.state.selectedFile,
        this.state.selectedName
      );
    }
  };
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <hr />
              <Row>
                <Col lg="12" md="12">
                  <Label>Points</Label>
                  <Input
                    type="text"
                    //   placeholder="Date End"
                    name="name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />{" "}
                </Col>
              </Row>
              <Row>
                <Col lg="12" md="12">
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Customer Group</th>
                        <th>Reward Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5">Default</td>

                        <td>
                          <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5">Existing Customer</td>

                        <td>
                          <Input
                            type="text"
                            name="ex_customer"
                            value={this.state.ex_customer}
                            onChange={this.changeHandler}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default RewardPoints;
