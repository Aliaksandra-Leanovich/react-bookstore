import { useNavigate } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { CartList } from "../components/CartList/CartList";

export const Cart = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <ButtonBack type="button" handleBack={handleBack}>
        Back
      </ButtonBack>
      <CartList />
    </div>
  );
};
