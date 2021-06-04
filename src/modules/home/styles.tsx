import styled from "styled-components";

const StyledHomeView = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .HomeView__title {
    margin: 64px;

    font-weight: bold;
  }

  .HomeView__content {
    padding: 16px;

    &.HomeView__content > * {
      padding-block: 4px;
    }
  }
`;

export { StyledHomeView };
