import { useState } from "react";

const useForm = (initialState) => {
  // Init Value
  const [input, setInput] = useState(initialState);

  // Handle Form Value
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Reset form
  const resetForm = () => {
    setInput(initialState);
  };
  return { input, handleInputChange, resetForm };
};

export default useForm;
