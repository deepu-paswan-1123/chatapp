import { GoogleOAuthProvider } from '@react-oauth/google';
import Messanger from './components/Messanger';
import './App.css';
import UserProvider from './components/context/UserProvider';
import AccountProvider from './components/context/AccountProvider';

function App() {
  const clientId = "227103754852-pg814ucl3ogemjv26uglj70rdnslghmn.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Messanger />
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
