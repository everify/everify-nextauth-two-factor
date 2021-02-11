import { useState } from "react";

export default function EnterVerificationCode({ onSubmit }) {
  const [verificationCode, setVerificationCode] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ verificationCode });
      }}
    >
      <label>
        Verification Code
        <input
          value={verificationCode}
          onChange={(event) => setVerificationCode(event.target.value)}
          name="verificationCode"
          autoComplete="one-time-code"
          type="text"
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
