import React from "react";
import Layout from "../components/layout/layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus " style={{backgroundColor:"rgb(216, 240, 248)",minWidth:"100%",minHeight:"600px"}}>
        <div className="col-md-6 ">
          <img
            src="/images/policy.webp"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;