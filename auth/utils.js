export async function getUser(username, password) {
  // in production you would want to modify this logic
  // to check that the user exists in the database and that
  // the hashed password matches.
  if (username === "admin1" && password === "password123") {
    return {
      name: "John Doe",
      username: "admin1",
      phoneNumber: "+491723064444",
    };
  }
  return undefined;
}
