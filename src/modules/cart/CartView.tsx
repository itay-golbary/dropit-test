import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { BackIcon } from "../../icons";
import { LoadingSpinner, Tooltip } from "../../components";

import { useCart } from "./useCart";
import { StyledCart, StyledCartModal } from "./styles";

const CartView: FC = () => {
  const {
    isLoading,
    isCheckoutModalOpen,
    cartState,
    cartTotal,
    handleResetCart,
    handleCheckout,
    handleCloseCheckoutModal,
  } = useCart();

  return (
    <StyledCart>
      <div className="Cart__header">
        <div className="Cart__header_main">
          <div className="Cart__header_main_back">
            <Tooltip title={"Go back to Catalog"}>
              <Link to="/catalog">
                <BackIcon />
              </Link>
            </Tooltip>
          </div>

          <div className="Cart__header_main_title">Cart Page</div>
        </div>
        <div className="Cart__header_reset" onClick={handleResetCart}>
          Reset Cart
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Price Per Unit</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartState.map(({ product, count }) => (
              <TableRow key={product.id.toString()}>
                <TableCell component="th" scope="row">
                  <Tooltip title={product.title}>{product.title}</Tooltip>
                </TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{count}</TableCell>
                <TableCell align="right">{count * product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="Cart__table_footer">
          <div className="Cart__table_footer_title">Total</div>
          <div className="Cart__table_footer_value">{cartTotal}</div>
        </div>
      </TableContainer>

      <div className="Cart__checkout" onClick={handleCheckout}>
        Checkout
      </div>

      <StyledCartModal
        open={isCheckoutModalOpen}
        onClose={handleCloseCheckoutModal}
      >
        <div className="Cart__modal">
          <div className="Cart__modal_body">
            <div className="Cart__modal_body_text">
              Your order has being sent! Hurray!!
            </div>
          </div>

          <div className="Cart__modal_footer">
            <div
              className="Cart__modal_footer_button"
              onClick={handleCloseCheckoutModal}
            >
              Continue
            </div>
          </div>
        </div>
      </StyledCartModal>

      <LoadingSpinner isVisible={isLoading} />
    </StyledCart>
  );
};

export default CartView;
