export const formConfig = {
  Profile: [
    { label: "Name", type: "text", name: "name", required: true },
    { label: "Age", type: "number", name: "age", required: true },
  ],
  Interest: [
    {
      label: "Hobbies",
      type: "checkbox",
      name: "hobbies",
      options: ["Music", "Sports", "Reading"],
      required: true,
    },
  ],
  Settings: [
    { label: "Email", type: "email", name: "email", required: true },
    {
      label: "Notifications",
      type: "radio",
      name: "notifications",
      options: ["Yes", "No"],
      required: true,
    },
  ],
};
