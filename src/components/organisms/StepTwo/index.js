"use client";
import React, { useState } from "react";
import styles from "./step-two.module.css";
import CustomInput from "../../molecules/CustomInput/CustomInput";
import CustomButton from "../../molecules/Button/CustomButton";
import { useRouter } from "next/router";

const StepTwo = ({ formData, setFormData }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const router = useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const areAllValuesCompleted = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        if (!areAllValuesCompleted(obj[key])) {
          return false;
        }
      } else {
        if (obj[key] === "") {
          return false;
        }
      }
    }
    return true;
  };

  const allInputsCompleted = areAllValuesCompleted(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/contract-details");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <CustomInput
          label='Nombres'
          value={formData.conyugeName}
          name='conyugeName'
          onChange={handleInputChange}
        />
        <CustomInput
          label='Apellidos'
          value={formData.conyugeLastName}
          name='conyugeLastName'
          onChange={handleInputChange}
        />
        <CustomInput
          label='DNI'
          value={formData.conyugeDni}
          name='conyugeDni'
          onChange={handleInputChange}
        />                
        <CustomButton allInputsCompleted={true}>
          SIGUIENTE
        </CustomButton>
      </form>
    </>
  );
};

export default StepTwo;
