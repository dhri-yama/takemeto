// pages/index.js
import { useUser } from '@auth0/nextjs-auth0';
import Usersettings from './../components/usersettings'

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user)
  if (user) {
    return (
      <div>
        <Usersettings/>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}
