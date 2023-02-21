import { Icon, Message, Divider } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderMeassage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <Message
      attached
      header={signupRoute ? "get Started" : "Welcome Back"}
      icon={signupRoute ? "settings" : "privacy"}
      content={
        signupRoute ? "Create new Account" : "Login with Email and Password"
      }
    />
  );
};
export const FooterMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <>
      {signupRoute ? (
        <>
          <Message color="teal" attached="bottom" warning>
            <Icon name="help" />
            Existing User?
            <Link href="/login">Login Hear Instead</Link>
            <Divider hidden />
          </Message>
        </>
      ) : (
        <>
          <Message attached="bottom" warning>
            <Icon name="lock" />
            <Link href="/reset">Login Hear Instead</Link>
          </Message>

          <Message attached="bottom" warning>
            <Icon name="help" />
            New User? <Link href="/signup">Login Hear Instead</Link> Instead(" ")
          </Message>
        </>
      )}
    </>
  );
};
