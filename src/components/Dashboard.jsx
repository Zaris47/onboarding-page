import Button from "@mui/material/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import Avatar from "@mui/material/Avatar";
import dashboardGif from "../assets/logo.gif";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if(loading) return <h1>Loading please wait</h1>
  if(!user) navigate("/");


  const logoutHandler = () => {
    auth.signOut().then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <Avatar
        alt="User Profile Picture"
        src={user.photoURL}
        sx={{ width: 100, height: 100 }}
      />
      <div>Lol nothing here</div>
      <img src={dashboardGif} alt="potential Rick rolling" />
      <Button variant="outlined" onClick={logoutHandler}>Test Logout Button</Button>
    </>
  );
};

export default Dashboard;
