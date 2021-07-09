import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API } from "../../api";
import useFlag from "../../hooks/useFlag";
import { Product } from "../product/types";
import { addProductToCart, selectCartState } from "../cart";

const useCatalog = () => {
  const dispatch = useDispatch();

  const cart = useSelector(selectCartState());

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, onStartLoading, onEndLoading] = useFlag(true);

  const cartItemCount = useMemo(
    () => cart.reduce((acc, current) => acc + current.count, 0),
    [cart]
  );

  const handleAddProductToCart = useCallback(
    (product: Product) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  const handleSelectCategory = useCallback((category: string) => {
    onStartLoading();

    setSelectedCategory(category);
  }, []);

  useEffect(() => {
    API.category.getAll().then(setCategories);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      API.product
        .getByCategory(selectedCategory)
        .then(setProducts)
        .finally(onEndLoading);
    } else {
      API.product.getAll().then(setProducts).finally(onEndLoading);
    }
  }, [selectedCategory]);

  return {
    isLoading,
    products,
    categories,
    selectedCategory,

    cartItemCount,

    handleAddProductToCart,
    handleSelectCategory,
  };
};

export default useCatalog;
