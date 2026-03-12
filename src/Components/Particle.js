import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

function Particle({ theme }) {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const isDark = theme !== 'light-theme';
  const primaryColor = isDark ? '#00cec9' : '#6c5ce7';
  const secondaryColor = isDark ? '#a29bfe' : '#00cec9';

  return (
    <div className="App">
      <Particles
        width="100%"
        height="100vh"
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 6 },
              repulse: { distance: 300, duration: 0.4 },
            },
          },
          particles: {
            color: { value: [primaryColor, secondaryColor] },
            links: {
              color: primaryColor,
              distance: 150,
              enable: true,
              opacity: 0.35,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: { enable: true, area: 1600 },
              value: 80,
            },
            opacity: {
              value: { min: 0.3, max: 0.8 },
              animation: { enable: true, speed: 0.5, sync: false },
            },
            shape: { type: ["circle", "triangle"] },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Particle;
