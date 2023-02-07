import { ui, uiPaths } from "../../common/uiSchema";
import {
  StyledCollectionContainer,
  StyledModule,
} from "../../styles/lazyStyles";
import { Module } from "./Module/Module";

export const Collections = ({
  handleModuleSelection,
  visibilityMap,
  currentPath,
}): JSX.Element | null => {
  if (currentPath) {
    let path = ui()[currentPath]; // Engineer: {}
    let collections = Object.keys(path); // []]
    let display = collections.map((collection) => {
      let modules = Object.keys(path[collection]);

      if (modules?.length) {
        return (
          <div>
            <br />
            <h3>{collection}</h3>

            <br />
            <div>
              💰= high value &nbsp;| &nbsp;🌱 = new &nbsp;| &nbsp;🔥 =
              underConstruction
              <br />
              <br />
            </div>
            <StyledCollectionContainer>
              {modules.map((module) => (
                <Module
                  path={currentPath}
                  collection={collection}
                  module={module}
                  handleModuleSelection={handleModuleSelection}
                />
              ))}
            </StyledCollectionContainer>
          </div>
        );
      }
    });

    return (
      <div
        style={{
          transition: "0.23s all ease-in-out",
          // opacity: isCodingVisible ? 1 : 0,
          // visibility: isCodingVisible ? "visible" : "hidden",
        }}
      >
        {display}
      </div>
    );
  }
};
