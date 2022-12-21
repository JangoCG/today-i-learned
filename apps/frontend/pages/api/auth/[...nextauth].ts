import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import AzureADProvider from "next-auth/providers/azure-ad"
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID || "",
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET || "",
      tenantId: process.env.AZURE_AD_TENANT_ID,
      authorization: {
        params: {
          scope:
            "openid Calendars.Read",
        },
      },
    })
  ],
  events: {
    signIn: async (message) => console.debug("[events] signIn:", message),
    signOut: async (message) => console.debug("[events] signOut:", message),
    session: async (message) => console.debug("[events] session:", message),
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.debug("[callbacks] signIn");
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.debug("[callbacks] redirect");
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.debug("[callbacks] session");
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.debug("[callbacks] jwt");
      return token;
    },
  },
  secret: process.env.JWT_SECRET
})
