import Image from "next/image";
import React from "react";
import Form from "@/components/organisms/Form";
  
const Home = ({ formData, setFormData }) => {
  return (
    <>
      <h3 style={{ color: "#10395a" }}>Datos del Cliente</h3>
      <Form setFormData={setFormData} formData={formData} />
    </>
  );
};

export default Home;
