// Import necessary libraries
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// Define interface for form input
interface IFormInput {
  doctor: string;
  email: string;
  patientId: string;
  district: string;
  description: string;
}

// Define the Form component
function Form() {
  const { register, handleSubmit, getValues } = useForm<IFormInput>();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<IFormInput>({
    doctor: "",
    email: "",
    patientId: "",
    district: "",
    description: "",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setCurrentStep(currentStep + 1);
  };

  const handleNext = () => {
    if (currentStep === 1 && !getValues("doctor")) {
      return;
    }

    if (currentStep === 1) {
      const data = {
        doctor: getValues("doctor"),
        email: getValues("email"),
        patientId: getValues("patientId"),
        district: getValues("district"),
        description: getValues("description"),
      };
      setFormData(data);
    }

    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-3 gap-9">
              <div className="flex flex-col">
                <label>email</label>
                <input
                  {...register("email")}
                  className="border border-black w-80 rounded outline-none px-6 py-1"
                />
              </div>
              <div className="flex flex-col">
                <label>PatientId</label>
                <input
                  {...register("patientId")}
                  className="border border-black w-80 rounded outline-none px-6 py-1"
                />
              </div>
              <div className="flex flex-col">
                <label>District</label>
                <input
                  {...register("district")}
                  className="border border-black w-80 rounded outline-none px-6 py-1"
                />
              </div>
              <div className="flex flex-col">
                <label>Doctor</label>
                <input
                  {...register("doctor")}
                  className="border border-black w-80 rounded outline-none px-6 py-1"
                />
              </div>
              <div className="flex flex-col">
                <label>description</label>
                <input
                  {...register("description")}
                  className="border border-black w-80 rounded outline-none px-6 py-1"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={currentStep === 2 ? "active-step" : ""}>
            <label>Email: {formData.email}</label>
			<label>Email: {formData.doctor}</label>
			<label>Email: {formData.patientId}</label>
			<label>Email: {formData.district}</label>
			<label>Email: {formData.description}</label>
          </div>
        );
      // Add more cases for additional steps

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-start space-y-10 border border-black h-96">
      <div className="flex w-full justify-center items-center space-x-3 mt-5">
        <Link
          to={"/form"}
          className={currentStep === 1 ? "text-blue-600 font-bold uppercase" : ""}
        >
          Dosiye Isaba
        </Link>
        <div className="h-1 rounded-full bg-slate-500 w-72"></div>
        <Link
          to={"/form/inshamake"}
          className={currentStep === 2 ? "text-blue-600 font-bold uppercase" : ""}
        >
          Inshamake
        </Link>
        <div className="h-1 rounded-full bg-slate-500 w-72"></div>
        <Link
          to={"/form/approve"}
          className={currentStep === 3 ? "text-blue-600 font-bold uppercase" : ""}
        >
          approve
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between space-y-10">
        {renderStep()}
        {currentStep !== 1 && (
          <button type="button" onClick={handlePrevious} className="bg-blue-600 text-white px-4 py-2 rounded">
            Previous
          </button>
        )}
        {currentStep !== 2 && (
          <button type="button" onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
            Next
          </button>
        )}
        {currentStep === 2 && (
          <input type="submit" value="Submit" className="bg-blue-600 text-white px-4 py-2 rounded" />
        )}
      </form>
    </div>
  );
}

export default Form;
