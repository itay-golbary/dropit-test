import styled from "styled-components";
import { Modal } from "@material-ui/core";

const StyledCart = styled.div`
  .Cart__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 8px;
    padding: 8px;

    .Cart__header_main {
      display: flex;
      align-items: center;

      .Cart__header_main_back {
        padding: 8px;

        cursor: pointer;
      }

      .Cart__header_main_title {
        padding-inline: 8px;

        font-size: 18px;
        font-weight: bold;
      }
    }

    .Cart__header_reset {
      padding-inline: 16px;
      padding-block: 8px;

      font-size: 18px;

      cursor: pointer;
    }
  }

  .Cart__table_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 8px;
    padding: 8px;

    font-size: 24px;

    .Cart__table_footer_title {
      padding: 8px;
    }

    .Cart__table_footer_value {
      padding: 8px;

      font-weight: bold;
    }
  }

  .Cart__checkout {
    position: fixed;
    bottom: 0;

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 8px;
    padding: 24px;

    background-color: black;

    font-size: 36px;
    font-weight: bold;
    color: white;

    cursor: pointer;
  }
`;

const StyledCartModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Cart__modal {
    width: 50%;
    height: 50%;

    background-color: white;

    .Cart__modal_body {
      height: 100%;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      .Cart__modal_body_text {
        font-size: 24px;
        font-weight: bold;
      }
    }

    .Cart__modal_footer {
      background-color: white;

      .Cart__modal_footer_button {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 16px;

        cursor: pointer;

        background-color: black;

        font-weight: bold;
        color: white;
      }
    }
  }
`;

export { StyledCart, StyledCartModal };
