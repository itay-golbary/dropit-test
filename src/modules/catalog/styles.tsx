import styled from "styled-components";

const StyledCatalogView = styled.div`
  .CatalogView__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-inline: 8px;
    margin-block: 16px;

    .CatalogView__header_text {
      font-size: 24px;
      font-weight: bold;
    }

    .CatalogView__header_icon {
      padding: 8px;
    }
  }

  .CatalogView__filter {
    width: 200px;

    margin: 8px;
    padding: 8px;
  }

  .CatalogView__grid {
    height: 720px;
    width: 100%;

    .CatalogView__grid_productImage {
      width: 60px;
      object-fit: contain;
    }

    .CatalogView__grid_addToCart {
      cursor: pointer;
    }
  }
`;

export { StyledCatalogView };
