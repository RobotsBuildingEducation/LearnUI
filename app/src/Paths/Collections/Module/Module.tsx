import { renderWithTooltip, ui } from "../../../common/uiSchema";
import { StyledModule } from "../../../styles/lazyStyles";
import Badge from "react-bootstrap/Badge";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// module is patreon object
export const Module = ({
  handleModuleSelection,
  path,
  collection,
  module,
}): JSX.Element | null => {
  let currentModule = ui()[path][collection][module];

  return (
    <StyledModule
      patreonObject={ui()[path][collection][module]}
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

      {/* Simple for now. tooltip added to module schema in the future. Use 'module.incomplete' as a tooltip example*/}
      <div>
        {currentModule.new
          ? renderWithTooltip(
              <div
                style={{
                  border: "1px solid #59CE00",
                  borderRadius: "10px",
                  width: "50px",
                }}
              >
                🌱
              </div>,
              "new! 🐛",
              "top",
              {
                border: "1px solid #59CE00",
                marginBottom: "6px",
                borderRadius: "10px",
              }
            )
          : currentModule.highValue
          ? renderWithTooltip(
              <div
                style={{
                  border: "1px solid #F2D466",
                  borderRadius: "10px",
                  width: "50px",
                }}
              >
                💰
              </div>,
              "high value 🤝",
              "top",
              {
                border: "1px solid #F2D466",
                marginBottom: "6px",
                borderRadius: "10px",
              }
            )
          : currentModule.incomplete
          ? renderWithTooltip(
              <div
                style={{
                  border: "1px solid #FD0000",
                  borderRadius: "10px",
                  width: "50px",
                }}
              >
                🔥
              </div>,
              `incomplete
            ${
              " " + currentModule?.tooltip ? "- " + currentModule?.tooltip : ""
            } 🔥`,
              "top",
              {
                border: "1px solid #FD0000",
                marginBottom: "6px",
                borderRadius: "10px",
                backgroundColor: "rosybrown",
              }
            )
          : null}
      </div>
    </StyledModule>
  );
};
