import StepTwo from "@/components/organisms/StepTwo";
import React from "react";

const ExtraDetails = ({ formData, setFormData }) => {
  return (
    <>
      <h3 style={{ color: "#10395a" }}>Datos del Conyuge</h3>
      <StepTwo formData={formData} setFormData={setFormData} />
    </>
  );
};

export default ExtraDetails;