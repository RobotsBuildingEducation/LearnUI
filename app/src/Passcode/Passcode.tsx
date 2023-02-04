export const Passcode = ({ handleZeroKnowledgePassword }) => {
  return (
    <div>
      <h2>Enter Passcode</h2>
      <input onChange={handleZeroKnowledgePassword} />
      <br />
      <br />
      <a
        href="https://www.patreon.com/posts/77944323"
        target="_blank"
        style={{ textDecoration: "underline", color: "white" }}
      >
        Don't know the passcode?
      </a>
    </div>
  );
};
