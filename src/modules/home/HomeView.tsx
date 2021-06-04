import React, { FC } from "react";
import { StyledHomeView } from "./styles";

const HomeView: FC = () => {
  return (
    <StyledHomeView>
      <div className="HomeView__title">Welcome To Dropit (by Itay Golbary)</div>

      <div className="HomeView__content">
        <div className="HomeView__content_github">
          <a href="https://github.com/itay-golbary/dropit-test">GitHub Repo</a>
        </div>

        <div className="HomeView__content_email">
          <a href="mailto:itay@golbary.io">Email: itay@golbary.io</a>
        </div>

        <div className="HomeView__content_phone">Phone: 052-4655995</div>
      </div>
    </StyledHomeView>
  );
};

export { HomeView };
