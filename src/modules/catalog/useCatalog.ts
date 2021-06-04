import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { Product } from "../product/types";
import { API } from "../../api";
import { addProductToCart } from "../cart/cartSlice";

const useCatalog = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    API.product.getAll().then(setProducts);
  }, []);

  const handleAddProductToCart = useCallback(
    (product: Product) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return { products, handleAddProductToCart };
};

export { useCatalog };
