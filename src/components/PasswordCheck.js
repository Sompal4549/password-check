import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";

export const PasswordCheck = () => {
  const [password, setPassword] = useState("");

  return (
    <div>
      Password checklist using react-password-checklist package
      <form>
        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital"]}
          minLength={5}
          value={password}
        />
      </form>
    </div>
  );
};
