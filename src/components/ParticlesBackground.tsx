import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    
    const handleStorageChange = () => {
      const currentTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      if (currentTheme) {
        setTheme(currentTheme);
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    
    const handleThemeChange = (e: CustomEvent) => {
      setTheme(e.detail.theme);
    };
    
    window.addEventListener("themeChange" as any, handleThemeChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themeChange" as any, handleThemeChange);
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: [
              theme === "light" ? "#8B5CF6" : "#8B5CF6", // Purple
              theme === "light" ? "#3B82F6" : "#3B82F6", // Blue
              theme === "light" ? "#EC4899" : "#EC4899", // Pink
              theme === "light" ? "#10B981" : "#10B981", // Green
              theme === "light" ? "#F59E0B" : "#F59E0B"  // Amber
            ]
          },
          shape: {
            type: ["circle", "triangle", "star", "polygon"],
            options: {
              polygon: {
                sides: 5
              },
              star: {
                sides: 5
              }
            }
          },
          opacity: {
            value: theme === "light" ? 0.3 : 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: theme === "light" ? "#6B7280" : "#9CA3AF",
            opacity: theme === "light" ? 0.3 : 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 180,
              line_linked: {
                opacity: 0.8
              }
            },
            bubble: {
              distance: 250,
              size: 12,
              duration: 2,
              opacity: 0.6,
              speed: 3
            },
            repulse: {
              distance: 120,
              duration: 0.4
            },
            push: {
              particles_nb: 6
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        background: {
          color: "transparent",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      }}
    />
  );
};

export default ParticlesBackground;
