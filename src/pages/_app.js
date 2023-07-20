// import App from "./app";
import "./globals.css";

import React, { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../components/organisms/Layout";


const App = ({ Component, pageProps }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    dni: "",
    isConyuge: false,
    address: {
      domicilio: "",
      departamento: "",
      provincia: "",
      distrito: "",
    },
    conyugeName: "",
    conyugeLastName: "",
    conyugeDni: "",
    contractNumber: "",
    totalAmount: "",
    ocupacion: "",
    terreno: "",
  });

  return (
    <Layout>
      <Component {...pageProps} setFormData={setFormData} formData={formData} />
    </Layout>
  );
};

export default withRouter(App);
