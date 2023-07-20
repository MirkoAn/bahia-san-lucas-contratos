"use client";
import React, { useState } from "react";
import styles from "./final-step.module.css";
import DisplayContrato from "../../templates/DisplayContrato";
import DisplayResumen from "../../templates/DisplayResumen";
import DisplayConstancia from "../../templates/DisplayConstancia";
import DisplayPagare from "../../templates/DisplayPagare";
import CustomInput from "../../molecules/CustomInput/CustomInput";
import CustomButton from "../../molecules/Button/CustomButton";
import { useRouter } from "next/router";
import DisplayDeclaracion from "@/components/templates/DisplayDeclaracion";

const FinalStep = ({ formData, setFormData }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const router = useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const date = new Date();

  const day = date.getDate();
  const month =
    new Intl.DateTimeFormat("es-ES", { month: "long" })
      .format(date)
      .toLowerCase()
      .charAt(0)
      .toUpperCase() +
    new Intl.DateTimeFormat("es-ES", { month: "long" }).format(date).slice(1);
  const year = date.getFullYear();

  const formattedDate = `a los ${day} días del mes de ${month} del año ${year}`;

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
    setIsCompleted(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setFormData({
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
    setIsCompleted(false);
    router.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <CustomInput
          label='Nº de Contrato'
          value={formData.contractNumber}
          name='contractNumber'
          onChange={handleInputChange}
        />
        <CustomInput
          label='Monto Total'
          value={formData.totalAmount}
          name='totalAmount'
          onChange={handleInputChange}
          placeholder='Ejemplo: 20,000'
        />
        <CustomInput
          label='Ubicación del terreno'
          value={formData.terreno}
          name='terreno'
          onChange={handleInputChange}
        />
        <CustomButton allInputsCompleted={true}>
          GENERAR DOCUMENTOS
        </CustomButton>
      </form>
      {isCompleted && (
        <>
          <DisplayContrato
            name={formData.name.toUpperCase()}
            lastName={formData.lastName.toUpperCase()}
            dni={formData.dni}
            contractNumber={formData.contractNumber}
            formattedDate={formattedDate}
            address={formData.address}
            isConyuge={formData.isConyuge}
            conyugeName={formData.conyugeName.toUpperCase()}
            conyugeLastName={formData.conyugeLastName.toUpperCase()}
            conyugeDni={formData.conyugeDni}
            terreno={formData.terreno}
          />
          <DisplayConstancia
            name={formData.name.toUpperCase()}
            lastName={formData.lastName.toUpperCase()}
            dni={formData.dni}
            contractNumber={formData.contractNumber}
            formattedDate={formattedDate}
          />
          <DisplayResumen
            name={formData.name.toUpperCase()}
            lastName={formData.lastName.toUpperCase()}
            dni={formData.dni}
            formattedDate={formattedDate}
          />
          <DisplayPagare
            name={formData.name.toUpperCase()}
            lastName={formData.lastName.toUpperCase()}
            dni={formData.dni}
            address={formData.address}
            totalAmount={formData.totalAmount}
            isConyuge={formData.isConyuge} 
            conyugeName={formData.conyugeName.toUpperCase()} 
            conyugeLastName={formData.conyugeLastName.toUpperCase()} 
            conyugeDni={formData.conyugeDni}
          />
          <DisplayDeclaracion
            name={formData.name}
            lastName={formData.lastName}
            dni={formData.dni}
            address={formData.address}
            terreno={formData.terreno}
            ocupacion={formData.ocupacion}
            formattedDate={formattedDate}            
          />
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button}`}
              onClick={handleClick}
            >
              GENERAR NUEVOS DOCUMENTOS
            </button>
          </div>          
        </>
      )}
    </>
  );
};

export default FinalStep;
