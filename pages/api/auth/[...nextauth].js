import { Everify } from "everify";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { getUser } from "../../../auth/utils";

const everify = new Everify(process.env.EVERIFY_API_KEY);
everify.sandbox();

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
        verificationCode: { label: "verificationCode", type: "text" },
      },
      authorize: async ({ username, password, verificationCode }) => {
        const user = await getUser(username, password);
        if (!user) {
          return null;
        }
        const { status } = await everify.checkVerification({
          phoneNumber: user.phoneNumber,
          code: verificationCode,
        });
        return status === "SUCCESS" ? user : null;
      },
    }),
  ],
  callbacks: {
    async redirect() {
      return "/";
    },
  },
  pages: {
    signIn: "/login", // this will allow us to use our own login page
  },
});
