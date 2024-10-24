import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <p className="text-muted-foreground">
        I focus on functionality—ensuring the project works as intended. Once
        the core features are in place and the application is stable, I then
        shift my attention to refining the design and enhancing the user
        experience.
        <br />
        <br />I am a recent graduate of Bachelor of Science in Information
        Technology from Polytechnic University of the Philippines, where I
        graduated with Latin honors —{" "}
        <span className="font-semibold text-primary">Cum Laude</span>
      </p>
      {/* <h1 className="text-transparent bg-gradient-to-b from-primary from-40% to-muted font-bold tracking-wide text-6xl text-center bg-clip-text">
        Get it done, then make it beautiful.
      </h1> */}
    </div>
  );
};

export default About;
