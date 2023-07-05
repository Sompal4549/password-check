import React, { useContext } from "react";
import { LevelContext } from "../../context/LevelContext";
export default function Section({ children }) {
  const level = useContext(LevelContext);

  return (
    <section>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
