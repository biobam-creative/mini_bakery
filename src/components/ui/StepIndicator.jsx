import React from "react";

const StepIndicator = ({ currentStep, setCurrentStep, totalSteps }) => {
  // const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);
  const steps = ["Personal Info", "Address", "Verification", "ID Upload"];
  // console.log(stepCompleted);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "block",
          fontSize: "0.8rem",
          color: "#000",
          marginTop: "10px",
          fontWeight: "bold",
          margin: "0 0 10px 0",
        }}
      >
        {`Step ${currentStep}: ${steps[currentStep - 1]}`}
      </div>
      <div
        onClick={() => setCurrentStep(steps.indexOf(step) + 1)} // Update currentStep to the clicked step
        style={{
          display: "flex",
          gap: "5px",
          width: "100%",
        }}
      >
        {steps.map((step) => (
          <div
            key={step}
            style={{
              width: "100%",
              height: "5px",
              borderRadius: "5px",
              background:
                steps.indexOf(step) + 1 <= currentStep ? "#7359c6" : "grey",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
