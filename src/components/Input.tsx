import styled from "@emotion/styled";
import React from "react";

interface IInputLabel {
  state: any;
  setState: Function;
  placeholder?: string;
  label: string;
  showLabel?: boolean;
  type?: "password" | "text" | "date" | "number" | "email" | "tel" | "file";
}

const InputComp: React.FC<IInputLabel> = ({
  label,
  state,
  setState,
  placeholder,
  type,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  return (
    <StyledInputBox>
      <label htmlFor={label}>{placeholder}</label>

      <StyledInput
        id={label}
        placeholder={placeholder}
        value={state[label]}
        onChange={handleChange}
        type={type || "text"}
      />
    </StyledInputBox>
  );
};

export default InputComp;

const StyledInput = styled("input")`
  padding: 0.6em 1em;
  background: #ffffff13;
  border: none;
  border-bottom: 1px #a30d83 solid;
  color: #fff;
  margin-top: 0.6em;
  margin-bottom: 0.3em;
  font-size: 0.9rem;
  transition: 0.073s ease-in;
  border-radius: 4px 4px 0 0;
  width: 100%;
  :hover,
  :focus {
    background: #ffffff23;
    border-radius: 4px;
  }
`;

const StyledInputBox = styled("div")`
  margin: 0.5rem 0;
  max-width: 340px;
  min-width: 280px;

  label,
  input[type="submit"] {
    display: block;
    color: #fff;
    width: 100%;
  }

 
`;
