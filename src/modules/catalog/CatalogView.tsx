import React, { FC } from "react";
import { Link } from "@material-ui/core";

import { useCatalog } from "./useCatalog";
import { StyledCatalogView } from "./styles";
import { Tooltip, DataGrid, LoadingSpinner, Badge } from "../../components";
import { AddToCartIcon, CartIcon } from "../../icons";
import { Product } from "../product/types";
import { DataGridColumns } from "../../components/DataGrid/types";
import { Selector } from "../../components/Selector";
import { useSelector } from "react-redux";
import { getCartState } from "../cart/cartSlice";

type GetColumns = (params: {
  handleAddProductToCart: (product: Product) => void;
}) => DataGridColumns;

const getColumns: GetColumns = ({ handleAddProductToCart }) =>
  [
    {
      field: "image",
      headerName: "Image",
      align: "center",
      headerAlign: "center",
      width: 160,
      renderCell: function Image(params) {
        return (
          <img
            alt=""
            src={params.value as string}
            className="CatalogView__grid_productImage"
          />
        );
      },
    },
    {
      field: "title",
      headerName: "Title",
      width: 240,
      renderCell: function Name(params) {
        return <Tooltip title={params.value as string}>{params.value}</Tooltip>;
      },
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "",
      headerName: "",
      sortable: false,
      filterable: false,
      align: "center",
      headerAlign: "center",
      disableClickEventBubbling: true,
      renderCell: function AddToCart(params) {
        const onClick = () => {
          handleAddProductToCart(params.row as Product);
        };

        return (
          <div className="CatalogView__grid_addToCart" onClick={onClick}>
            <Tooltip title={"Add to Cart"}>
              <AddToCartIcon />
            </Tooltip>
          </div>
        );
      },
    },
  ] as DataGridColumns;

const CatalogView: FC = () => {
  const {
    isLoading,
    products,
    categories,
    selectedCategory,
    cartItemCount,
    handleAddProductToCart,
    handleSelectCategory,
  } = useCatalog();

  return (
    <StyledCatalogView>
      <div className="CatalogView__header">
        <div className="CatalogView__header_text">Catalog Page</div>

        <Link href="/cart" className="CatalogView__header_icon">
          <Tooltip title={"Go to Cart"}>
            <Badge value={cartItemCount}>
              <CartIcon />
            </Badge>
          </Tooltip>
        </Link>
      </div>

      <div className="CatalogView__filter">
        <Selector
          label={"Select Category"}
          value={selectedCategory}
          options={categories}
          onChange={handleSelectCategory}
        />
      </div>

      <div className="CatalogView__grid">
        <DataGrid
          rows={products as []}
          columns={getColumns({ handleAddProductToCart })}
        />
      </div>

      <LoadingSpinner isVisible={isLoading} />
    </StyledCatalogView>
  );
};

export { CatalogView };
