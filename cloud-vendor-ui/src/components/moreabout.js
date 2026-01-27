import React from "react";

const features = [
  {
    title: "Easy Vendor Registration",
    description: "Register and manage cloud vendors with a simple interface."
  },
  {
    title: "Secure Data Handling",
    description: "All vendor data is handled securely using backend validation."
  },
  {
    title: "Scalable Architecture",
    description: "Built to support growing vendors and cloud services."
  }
];

const MoreAbout = () => {
  return (
    <div className="more-about-container">

      {/* Left Image */}
      <div className="more-about-image">
        <img src="/photo04.png" alt="CloudXVendor" />
      </div>

      {/* Right Content */}
      <div className="more-about-content">
        <h2>More About CloudXVendor</h2>

        {/* 🔁 FOR LOOP USING MAP */}
        {features.map((item, index) => (
          <div className="feature-box" key={index}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}

        {/* <img
          src="https://static.vecteezy.com/system/resources/thumbnails/031/781/608/small/registration-doodle-icon-design-illustration-logistics-and-delivery-symbol-on-white-background-eps-10-file-vector.jpg"
          alt="Registration"
          className="icon-image"
        /> */}
      </div>

    </div>
  );
};

export default MoreAbout;
