import { About } from "./About/About";

export const Header = () => {
  return (
    <>
      <h2>RO.₿.E</h2>
      <h3 style={{ color: "white" }}>Robots Building Education</h3>
      <img
        width="200px"
        src="https://res.cloudinary.com/eduprojectsil/image/upload/v1674212147/Screen_Shot_2023-01-20_at_2.55.21_AM_ipay84.png"
      />

      <br />
      <br />
      <About />
    </>
  );
};
