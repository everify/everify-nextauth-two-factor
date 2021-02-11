import Head from "next/head";
import Link from "next/link";

import { useSession, signOut } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {session && (
        <h1>
          Yay! You are logged in!{" "}
          <button onClick={() => signOut()}>Log me out again</button>
        </h1>
      )}
      {!session && (
        <div>
          <h1>You are not logged in. </h1>
          <Link href="/login">
            <a>Click here to log in.</a>
          </Link>
        </div>
      )}
    </div>
  );
}
