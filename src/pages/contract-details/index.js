import FinalStep from "@/components/organisms/FinalStep";
import React from "react";

const ContractDetails = ({ formData, setFormData }) => {
  return (
    <>
      <h3 style={{ color: "#10395a" }}>Datos del Contrato</h3>
      <FinalStep formData={formData} setFormData={setFormData} />
    </>
  );
};

export default ContractDetails;