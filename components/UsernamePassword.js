import { useState } from "react";

export default function UsernamePassword({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ username, password });
      }}
    >
      <label>
        Username
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          name="username"
          type="text"
        />
      </label>
      <label>
        Password
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          type="password"
        />
      </label>
      <button type="submit">Continue</button>
    </form>
  );
}
