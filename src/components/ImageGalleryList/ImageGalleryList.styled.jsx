import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  margin-bottom: 40px;
`

export const Li = styled.li`
  width: 350px;
  height: 250px;

  transition: 250ms;

  &:hover,
  &:focus {
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    transform: scale(1.02);
  }
`