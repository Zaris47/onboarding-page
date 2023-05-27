import Button from "@mui/material/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import Avatar from '@mui/material/Avatar';



const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <>
    <Avatar
      alt="User Profile Picture"
      src={user.photoURL}
      sx={{ width: 100, height: 100 }}
    />
      <div>Lol nothing here</div>
      <Button variant="outlined">Test Logout Button</Button>
    </>
  );
};

export default Dashboard;
