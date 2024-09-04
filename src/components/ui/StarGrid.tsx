import { useState, useEffect } from "react";

export default function StarGrid() {
  const [grid, setGrid] = useState<[number, number]>([220, 130]);

  // Function to update the grid based on screen size
  const updateGrid = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1024) {
      // Large screens (e.g., desktops)
      setGrid([220, 130]);
    } else {
      // Small screens (e.g., tablets, phones)
      setGrid([320, 60]);
    }
  };

  useEffect(() => {
    // Initial grid size determination
    updateGrid();

    // Update grid size when the window is resized
    window.addEventListener("resize", updateGrid);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateGrid);
    };
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={`0 0 ${grid[1] * 32} ${grid[0] * 32}`}
      className="absolute h-full w-full -z-10"
      id="star-grid"
      opacity={100}
      style={{
        maskImage: "linear-gradient(black, transparent)",
      }}
    >
      <g className="star-grid-group">
        {[...Array(grid[0])].map((_, i) => {
          return [...Array(grid[1])].map((_, j) => {
            return (
              <path
                key={`${i}-${j}`}
                fill="currentColor"
                opacity="100"
                className="star-grid-item"
                d={`M${j * 32},${
                  i * 32 + 10
                }a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`}
              />
            );
          });
        })}
      </g>
    </svg>
  );
}
