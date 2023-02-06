import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const GetStarted = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setIsModalOpen(true)}>
        Get Started
      </Button>
      <br />
      <br />
      <a
        target={"_blank"}
        href="https://www.patreon.com/RobotsBuildingEducation"
        style={{ color: "white" }}
      >
        <Button variant="dark">
          <img
            style={{ borderRadius: "6px" }}
            width="32px"
            src="https://pbs.twimg.com/profile_images/1266950784609992705/xEe7mBx9_400x400.png"
          />
          &nbsp; Discover More @ Patreon
        </Button>
      </a>

      <Modal centered show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Get Started</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>What is this?</h3>
          <p>
            The goal is to create the best possible first hour of learning to
            encourage you to believe that you can accomplish whatever you want.
            <br />
            <br />
            Robots Building Education is an education platform where
            subscriptions are pooled to create $1,000 scholarships. Subscription
            costs are kept down while the value of content increases over time.
            We want to increase access to important Creator Economy skills like
            writing code, growing on social media or understanding business
            while also maximizing the impact of our digital learning.
            <br />
            <br />
            Think of it like another way to fund schools. Our digital space is
            shared no differently than communities are with their property
            values. It creates a more fair system.
            <br />
            <br />
            To find the passcode to enter the app, subscribe to the Patreon.
            Refunds are available. $1, $3, $50, $1000 all have access to the
            same features. Your $1
          </p>
          <hr />
          <br />I haven't finished this "Getting Started" because I'm still
          building a lot of things. The Patreon has all the content
          sequentially, so it makes most sense to start from the beginning and
          scroll upward. However, the content on Patreon is "discovery" mode.
          There is no order.{" "}
          <b>Improvements to content will happen on Patreon first</b> while
          updates here will be "production". Currently, most things are kind of
          messy because of construction. Things to look forward to:
          <br />
          <br />
          <ol>
            <li>A stronger introduction and ability to onboard.</li>
            <li>
              Proof of Work point system to monitor progress and eventually
              introduce global payments and credentialing. Work should
              eventually produce meaningful discovery and reward outside of
              scholarship generation that is{" "}
              <b>
                strictly not Pavlovian or mouse-wheeling mechanics into the
                system
              </b>
            </li>
            <li>
              Ranked modules (new, high value, rare value) to incentivize
              growing in a path or exploring different topics
            </li>
            <li>Improved essay formatting</li>
            <li>Fine-tuned, fast and humanized chatGPT prompts</li>
            <li>
              Meaningful and tightly curated advertising to improve communal
              growth
            </li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Thanks!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
