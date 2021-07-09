import React from "react";

import { Product } from "../product/types";
import { DataGridColumns } from "../../components/DataGrid/types";
import { Tooltip } from "../../components";
import { AddToCartIcon } from "../../icons";

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

export { getColumns };
