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
