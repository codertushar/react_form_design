import React from "react";

function FormTab({ fields, formData, setFormData, errors, setErrors }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const validateField = (field) => {
    if (field.required && !formData[field.name]) {
      setErrors((prev) => ({
        ...prev,
        [field.name]: "This field is required.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, [field.name]: "" }));
    }
  };

  return (
    <div className="form-tab">
      {fields.map((field) => (
        <div key={field.name} className="form-field">
          <label>{field.label}</label>
          {field.type === "checkbox" || field.type === "radio" ? (
            field.options.map((option) => (
              <label key={option}>
                <input
                  type={field.type}
                  name={field.name}
                  value={option}
                  checked={formData[field.name] === option}
                  onChange={handleChange}
                  onBlur={() => validateField(field)}
                />
                {option}
              </label>
            ))
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              onBlur={() => validateField(field)}
            />
          )}
          {errors[field.name] && (
            <span className="error">{errors[field.name]}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default FormTab;
