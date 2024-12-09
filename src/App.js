import React, { useState } from "react";
import { formConfig } from "./formConfig";
import FormTab from "./FormTab";
import "./styles.css";

function App() {
  const [currentTab, setCurrentTab] = useState("Profile");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const tabs = Object.keys(formConfig);
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex < tabs.length - 1) {
      setCurrentTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const tabs = Object.keys(formConfig);
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex > 0) {
      setCurrentTab(tabs[currentIndex - 1]);
    }
  };

  const handleSubmit = () => {
    console.log("Form Submitted: ", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="app">
      <h1>Form UI</h1>
      <div className="tabs">
        {Object.keys(formConfig).map((tab) => (
          <button
            key={tab}
            className={currentTab === tab ? "active" : ""}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <FormTab
        fields={formConfig[currentTab]}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
      />
      <div className="navigation">
        {currentTab !== "Profile" && (
          <button onClick={handlePrevious}>Previous</button>
        )}
        {currentTab !== "Settings" ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default App;
