import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { Product } from "../product/types";
import { API } from "../../api";
import { addProductToCart } from "../cart/cartSlice";

const useCatalog = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    API.category.getAll().then(setCategories);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      API.product
        .getByCategory(selectedCategory)
        .then(setProducts)
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      API.product
        .getAll()
        .then(setProducts)
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [selectedCategory]);

  const handleAddProductToCart = useCallback(
    (product: Product) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  const handleSelectCategory = useCallback((category: string) => {
    setIsLoading(true);

    setSelectedCategory(category);
  }, []);

  useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);

  return {
    isLoading,
    products,
    categories,
    selectedCategory,
    handleAddProductToCart,
    handleSelectCategory,
  };
};

export { useCatalog };
