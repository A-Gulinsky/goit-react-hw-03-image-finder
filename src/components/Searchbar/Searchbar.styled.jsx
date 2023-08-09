import styled from "@emotion/styled";

import { Form, Field } from 'formik'

export const SearchbarForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled(Field)`
  padding-top: 8px;
  padding-bottom: 8px;

  width: 300px;
  
  font-size: 16px;

  background-color: #fff;
  border: 1px solid transparent;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  outline: transparent;

`

export const Button = styled.button`

  height: 36px;

  background-color: #fff;
  border: 1px solid transparent;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  cursor: pointer;
`