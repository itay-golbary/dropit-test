import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Badge, DataGrid, LoadingSpinner, Tooltip } from "../../components";
import { CartIcon } from "../../icons";
import { Selector } from "../../components/Selector";

import useCatalog from "./useCatalog";
import { getColumns } from "./utils";
import { StyledCatalogView } from "./styles";

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

        <Link to="/cart" className="CatalogView__header_icon">
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

export default CatalogView;
