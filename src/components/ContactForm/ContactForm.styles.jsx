import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-size: 18px;
`;
export const Label = styled.label`
  border-bottom: 3px solid #000;
  font-size: 18px;
  font-weight: 600;
`;
export const Input = styled.input`
  height: 30px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
`;
export const Button = styled.button`
  width: 140px;
  margin: auto;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
  background: #000;
  color: #6495ed;
  padding: 8px;
  border-radius: 10px;
  border: none;
`;
