import { ui } from "../../../common/uiSchema";
import { StyledModule } from "../../../styles/lazyStyles";

export const Module = ({
  handleModuleSelection,
  path,
  collection,
  module,
}): JSX.Element | null => {
  let currentModule = ui[path][collection][module];
  return (
    <StyledModule
      key={currentModule.button}
      onClick={() => handleModuleSelection(currentModule)}
    >
      {currentModule.sourceType === "video" ? (
        <span> &#9658;&nbsp;{currentModule.button}</span>
      ) : (
        ""
      )}
      {currentModule.sourceType === "markdown" ? (
        <span>📄&nbsp;{currentModule.button}</span>
      ) : (
        ""
      )}
    </StyledModule>
  );
};
