import { doc } from "firebase/firestore";
import { ProgressBar } from "react-bootstrap";
import { getGlobalProofOfWork, renderWithTooltip } from "../common/uiSchema";
import { database } from "../database/firebaseResources";

export const ProofOfWork = ({
  displayName,
  databaseUserDocument,
  computePercentage,
  globalWorkCounter,
  isModule = false,
}) => {
  console.log("PRC", computePercentage);
  console.log("sss", Math.floor(computePercentage * 100));
  if (displayName === "Demo Robots") {
    // const globalDemoUsersRef = doc(database, "global", "demoUsers");
    // console.log("GLOBAL", globalDemoUsersRef);

    return (
      <div
        style={{
          border: "1px solid #1C1C1E",
          width: "fit-content",
          // margin: "auto",
          backgroundColor: "#1C1C1E",
          marginBottom: "48px",
          maxWidth: "600px",
          minWidth: "300px",
        }}
      >
        <p>🤖 {displayName}</p>
        {renderWithTooltip(
          <div>
            🏦: {databaseUserDocument?.work || 0}{" "}
            <div>
              <ProgressBar
                style={{
                  backgroundColor: "black",
                  borderRadius: "0px",
                  margin: 12,
                }}
                variant="success"
                now={Math.floor(computePercentage * 100)}
              />
            </div>
          </div>,
          <div>
            <h6>Proof of Work</h6>
            <p>
              <hr />
              work done
              <br />
              {databaseUserDocument?.work || 0} / {getGlobalProofOfWork()}
              <hr />
              work done by everyone
              <br />
              <b>{globalWorkCounter}</b>
              <br />
              <br />
              You are <br />
              <b>
                {(
                  ((databaseUserDocument?.work || 0) / globalWorkCounter) *
                  100
                ).toFixed(2)}
              </b>
              %
              <br />
              of the work 😳
              <hr />
            </p>
            <p>Scholarships created: 5</p>
            <p style={{ textAlign: "left" }}>
              Proof of work (PoW) is a system in which the worker proves to
              verifiers that a certain amount of effort has been expended.
              Verifiers can be machines, like those found with Bitcoin, or they
              can be people like teachers grading your homework!
            </p>
          </div>,
          "left",
          {
            border: "1px solid #F2D466",
            marginBottom: "6px",
            borderRadius: "10px",

            backgroundColor: "#f2a900",
          }
        )}
        {/* <a onClick={() => auth.signOut()}>Sign-out</a> */}
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid #1C1C1E",
        width: "fit-content",

        backgroundColor: "#1C1C1E",
        marginBottom: "48px",
        maxWidth: "600px",
        minWidth: "300px",
      }}
    >
      <p>🤖 {displayName}</p>
      {renderWithTooltip(
        <div>
          🏦: {databaseUserDocument?.work || 0}{" "}
          <div>
            <ProgressBar
              style={{
                backgroundColor: "black",
                borderRadius: "0px",
                margin: 12,
              }}
              variant="success"
              now={Math.floor(computePercentage * 100)}
            />
          </div>
        </div>,
        <div>
          <h6>Proof of Work</h6>
          <p>
            <hr />
            work done
            <br />
            {databaseUserDocument?.work || 0} / {getGlobalProofOfWork()}
            <hr />
            work done by everyone
            <br />
            <b>{globalWorkCounter}</b>
            <br />
            <br />
            You are <br />
            <b>
              {(
                ((databaseUserDocument?.work || 0) / globalWorkCounter) *
                100
              ).toFixed(2)}
            </b>
            %
            <br />
            of the work 😳
            <hr />
          </p>
          <p>Scholarships created: 5</p>
          <p style={{ textAlign: "left" }}>
            Proof of work (PoW) is a system in which the worker proves to
            verifiers that a certain amount of effort has been expended.
            Verifiers can be machines, like those found with Bitcoin, or they
            can be people like teachers grading your homework!
          </p>
        </div>,
        "left",
        {
          border: "1px solid #F2D466",
          marginBottom: "6px",
          borderRadius: "10px",

          backgroundColor: "#f2a900",
        }
      )}
      {/* <a onClick={() => auth.signOut()}>Sign-out</a> */}
    </div>
  );
};
