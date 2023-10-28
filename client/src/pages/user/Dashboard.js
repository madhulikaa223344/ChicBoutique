import React from "react";
import Layout from "../../components/layout/layout";
import UserMenu from "../../components/layout/UserMenu";
import { useAuth } from "../../context/auth";


const Dashboard = () => {

  // const loggedIN = localStorage.getItem("auth");
  // return (
  //   loggedIN ?(
  //   <Layout>Dashboard</Layout>
  //   ):(<Spinner/>)
  // );
  const [auth] = useAuth();
  return (
    <Layout  title={"Dashboard"}>
    <div className="container-fluid p-3" style={{backgroundColor:"rgb(216, 240, 248)",minWidth:"100%",minHeight:"600px"}}>
      <div className=" row">
        <div className="col-md-3">
        <UserMenu/>
        </div>
        <div className="col-md-9">
        <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
        </div>
      </div>
    </div>
      
    </Layout>
  );
};

export default Dashboard;
