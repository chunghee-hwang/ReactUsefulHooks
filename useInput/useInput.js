import { useState } from "react";

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      console.log(event.target);
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(event.target.value);
      } else {
        setValue("");
      }
    };
  
    return { value, onChange };
  };