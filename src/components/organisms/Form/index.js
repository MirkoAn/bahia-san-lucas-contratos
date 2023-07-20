"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import CustomInput from "../../molecules/CustomInput/CustomInput";
import CustomButton from "../../molecules/Button/CustomButton";
import { useRouter } from "next/router";

const Form = ({ formData, setFormData }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const router = useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
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
    if (formData.isConyuge) {
      router.push("/extra-details");
    } else {
      router.push("/contract-details");
    }
  };

  const handleCheckBox = (event) => {
    const { name, checked} = event.target;
    console.log("isChecked", event.target.checked);
    setFormData({ ...formData, [name]: checked });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <CustomInput
          label='Nombres'
          value={formData.name}
          name='name'
          onChange={handleInputChange}
        />
        <CustomInput
          label='Apellidos'
          value={formData.lastName}
          name='lastName'
          onChange={handleInputChange}
        />
        <CustomInput
          label='DNI'
          value={formData.dni}
          name='dni'
          onChange={handleInputChange}
        />                
        <CustomInput
          label='Domicilio'
          value={formData.address.domicilio}
          name='domicilio'
          onChange={handleAddressInputChange}
        />
        <CustomInput
          label='Departamento'
          value={formData.address.departamento}
          name='departamento'
          onChange={handleAddressInputChange}
        />
        <CustomInput
          label='Provincia'
          value={formData.address.provincia}
          name='provincia'
          onChange={handleAddressInputChange}
        />
        <CustomInput
          label='Distrito'
          value={formData.address.distrito}
          name='distrito'
          onChange={handleAddressInputChange}
        />
        <CustomInput
          label='Ocupación'
          value={formData.ocupacion}
          name='ocupacion'
          onChange={handleInputChange}
        />
        <CustomInput
          checkbox
          label='Conyuge'
          value={formData.isConyuge}
          checked={formData.isConyuge}
          name='isConyuge'
          onChange={handleCheckBox}
        />
        <CustomButton allInputsCompleted={true}>
          SIGUIENTE
        </CustomButton>
      </form>
    </>
  );
};

export default Form;
