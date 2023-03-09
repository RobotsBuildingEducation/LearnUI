import { useState } from "react";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import { getGlobalProofOfWork } from "../../common/uiSchema";

export const ImpactWallet = ({
  databaseUserDocument,
  computePercentage,
  globalWorkCounter,
  isImpactWalletOpen,
  setIsImpactWalletOpen,
}) => {
  return (
    <>
      <div>
        <Button onClick={() => setIsImpactWalletOpen(true)} variant="secondary">
          🏦
        </Button>
        &nbsp; {databaseUserDocument?.work || 0}{" "}
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
      </div>

      <Modal centered show={isImpactWalletOpen} fullscreen>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title>Impact Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body
          onHide={() => setIsImpactWalletOpen(false)}
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div>
            <p style={{ textAlign: "left" }}>
              Proof of work (PoW) is a system in which the worker proves to
              verifiers that a certain amount of effort has been expended.
              Verifiers can be machines, like those found with Bitcoin, or they
              can be people like teachers grading your homework! When you work
              with Robots Building Education, you create impact!
            </p>
            <hr />
            <h2>Scholarships Created: 5</h2>
            <p>
              Work Done By You
              <br />
              {databaseUserDocument?.work || 0} / {getGlobalProofOfWork()}
              <ProgressBar
                style={{
                  backgroundColor: "black",
                  borderRadius: "0px",
                  margin: 12,
                }}
                variant="success"
                now={Math.floor(computePercentage * 100)}
              />
              <br />
              Work Done By All
              <br />
              <b>{globalWorkCounter}</b>
              <br />
              <br />
              You are &nbsp;
              <b>
                {(
                  ((databaseUserDocument?.work || 0) / globalWorkCounter) *
                  100
                ).toFixed(2)}
                %
              </b>
              &nbsp;of the work 😳
              <ProgressBar
                style={{
                  backgroundColor: "black",
                  borderRadius: "0px",
                  margin: 12,
                }}
                variant="warning"
                now={Math.floor(
                  ((databaseUserDocument?.work || 0) / globalWorkCounter) * 100
                )}
              />
              <hr />
            </p>

            <div>
              This is an early version of Impact. For now, it will be built in
              the spirit of it. If you don't believe you can afford a down
              payment on a home, turn it into a game. Save $10,000 in stocks in
              a "tax advantaged" retirement account. You can withdraw $10,000
              without penalty if you use it to buy a home. With the right loan,
              that can leverage $10,000 into $250,000 rather safely. Now can you
              afford it?
              <br />
              Please sign up the following services if you don't have the
              following
              <ul>
                <li>A home</li>
                <li>Credit</li>
                <li>A retirement account</li>
              </ul>
              <h4>Robinhood IRA</h4>
              This lets you buy stocks in a retirement account. It pays for
              itself. It helps me make money too 🙏
              <br />
              <br />
              <br />
              <a
                href="https://join.robinhood.com/gold_invite/sheilfz"
                target={"_blank"}
                style={{
                  width: "150px",
                  border: "1px solid white",
                  padding: 24,
                  marginTop: 100,
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Stock Market Retirement Account
              </a>
              <br />
              <br />
              <br />
              <br />
              <h4>Chime Bank</h4>
              Basically lets you have a debit card that builds credit.
              <br />
              <br />
              <br />
              <a
                href="https://www.chime.com/credit-builder/"
                target={"_blank"}
                style={{
                  width: "150px",
                  border: "1px solid white",
                  padding: 24,
                  marginTop: 100,
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Credit Building With Chime
              </a>
              <br />
              <br />
              <br />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button
            variant="secondary"
            onClick={() => setIsImpactWalletOpen(false)}
          >
            Thanks!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
