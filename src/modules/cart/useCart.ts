import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartState, resetCartState } from "./cartSlice";

const useCart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(selectCartState());

  const [isLoading, setIsLoading] = useState(false);
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);

  const cartTotal = useMemo(
    () =>
      cartState.reduce<number>(
        (acc, { count, product }) => acc + count * product.price,
        0
      ),
    [cartState]
  );

  const handleResetCart = useCallback(() => {
    dispatch(resetCartState());
  }, [dispatch]);

  const handleCheckout = useCallback(() => {
    if (cartState.length) {
      setIsLoading(true);

      handleResetCart();

      setTimeout(() => {
        setCheckoutModalOpen(true);
        setIsLoading(false);
      }, 1000);
    }
  }, [cartState.length, handleResetCart]);

  const handleCloseCheckoutModal = useCallback(() => {
    setCheckoutModalOpen(false);
  }, []);

  return {
    isLoading,
    isCheckoutModalOpen,
    cartState,
    cartTotal,
    handleResetCart,
    handleCheckout,
    handleCloseCheckoutModal,
  };
};

export { useCart };
