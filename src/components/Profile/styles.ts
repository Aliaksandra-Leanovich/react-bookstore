import styled from "styled-components";
import { Colors } from "../../ui/colors";

const ChangeForm = styled.form`
  display: grid;
  row-gap: 20px;

  margin: 20px 0;
  width: 100%;
  max-width: 500px;
`;

const ChangeInput = styled.input`
  font-weight: 16px;
  line-height: 20px;

  color: ${Colors.BLACK};

  padding: 16px;
  width: 100%;

  border: 2px solid ${Colors.BLACK};

  &::placeholder {
    color: ${Colors.GREY};
  }
`;
const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;
const SaveButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  color: ${Colors.BLACK};
  background-color: ${Colors.ORANGE};

  width: 100%;
  padding: 10px;

  border-radius: 25px;
  border: 2px solid ${Colors.BLACK};

  cursor: pointer;
`;

const LabelInput = styled.p`
  font-size: 27px;
  font-weight: 500;
  line-height: 18px;
`;

export { ChangeForm, SaveButton, ChangeInput, StyledProfile, LabelInput };
