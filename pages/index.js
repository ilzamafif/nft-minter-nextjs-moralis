import AuthPage from "../components/AuthPage";
import UploadForm from "../components/UploadForm";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, authenticate, user, logout, isLoggingOut } = useMoralis();



  const metamaskAuth = async () => {
    try {
      await authenticate({
        signingMessage: "Auth to start lazy minting your NFTs"
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  if (!isAuthenticated) {
    return (
      <AuthPage metamaskAuth={metamaskAuth} />
    )
  }

  return (
    <div>
      <UploadForm logout={logout} user={user} />
    </div>
  )
}
