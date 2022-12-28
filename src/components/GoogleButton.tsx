import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "../misc/GLogo.png";

interface GoogleButtonProps {}

const GoogleButton: React.FC<GoogleButtonProps> = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <button
      onClick={() => login()}
      className="google-button"
    >
      <div className="google-logo">
        <img src={GoogleLogo} alt="" />
      </div>
      <div className="text-center w-full font-semibold">
        <h1>Continue with Google</h1>
        <p className="font-light">Secured log-in</p>
      </div>
    </button>
  );
};

export default GoogleButton;
