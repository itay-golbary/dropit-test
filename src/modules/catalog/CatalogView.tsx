import React, { FC, useEffect } from "react";

import { useCatalog } from "./useCatalog";
import { DataGrid, GridCellParams, GridColDef } from "@material-ui/data-grid";
import { StyledCatalogView } from "./styles";
import { Tooltip } from "../../components";
import { CartIcon } from "../../icons";
import { Link } from "@material-ui/core";

const columns: GridColDef[] = [
  {
    field: "image",
    headerName: "Image",
    width: 160,
    renderCell: function Image(params) {
      return (
        <img
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
  },
  // {
  //   field: "image",
  //   headerName: "Image",
  //   width: 160,
  //   valueGetter: (params: ValueGetterParams) =>
  //     `${params.getValue("firstName") || ""} ${
  //       params.getValue("lastName") || ""
  //     }`,
  // },
];

const CatalogView: FC = () => {
  const { products, handleAddProductToCart } = useCatalog();

  return (
    <StyledCatalogView>
      <div className="CatalogView__header">
        <div className="CatalogView__header_text">Catalog Page</div>

        <Link href="/cart" className="CatalogView__header_icon">
          <CartIcon />
        </Link>
      </div>

      <div className="CatalogView__grid">
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={5}
          rowHeight={120}
        />
      </div>
    </StyledCatalogView>
  );
};

export { CatalogView };
