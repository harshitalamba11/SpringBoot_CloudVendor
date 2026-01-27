import React from "react";

const steps = [
  {
    title: "Register Vendor",
    description: "Fill in vendor details including ID, name, address, and phone number to add a new vendor.",
    icon: "https://cdn-icons-png.flaticon.com/512/1250/1250615.png"
  },
  {
    title: "Verify Details",
    description: "System checks for duplicate IDs and validates the vendor information for accuracy.",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
  },
  {
    title: "Manage Entries",
    description: "Update, delete, or view vendor details easily. Manage all vendor data efficiently in one place.",
    icon: "https://cdn-icons-png.flaticon.com/512/1086/1086741.png"
  }
];

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2>How CloudXVendor Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-number">{index + 1}</div>
            <img src={step.icon} alt={step.title} className="step-icon" />
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
