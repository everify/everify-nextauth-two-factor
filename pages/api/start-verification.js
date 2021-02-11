import { getUser } from "../../auth/utils";
import { Everify } from "everify";

const everify = new Everify(process.env.EVERIFY_API_KEY);
everify.sandbox();

export default async function (req, res) {
  const { username, password } = req.body;
  const user = await getUser(username, password);
  if (!user) {
    return res.status(403).send("Invalid credentials.");
  }
  const response = await everify.startVerification({
    phoneNumber: user.phoneNumber,
    method: "SMS",
  });

  return res.status(200).send("Success");
}
