import { signIn } from "next-auth/client";
import { useState } from "react";
import UsernamePassword from "../components/UsernamePassword";
import EnterVerificationCode from "../components/EnterVerificationCode";

export default function LoginPage() {
  const [hasStartedVerification, setHasStartedVerification] = useState(false);
  const [credentials, setCredentials] = useState();
  const startVerification = async ({ username, password }) => {
    await fetch("/api/start-verification", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    setCredentials({ username, password });
    setHasStartedVerification(true);
  };
  const checkVerification = async ({ verificationCode }) => {
    await signIn("credentials", {
      ...credentials,
      verificationCode,
    });
  };
  if (!hasStartedVerification) {
    return <UsernamePassword onSubmit={startVerification} />;
  } else {
    return <EnterVerificationCode onSubmit={checkVerification} />;
  }
}
