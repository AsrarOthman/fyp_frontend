import axios from "axios";
import { HOST } from "../api";

const Logout = () => {
  handleLogoutOut();
  const fetchUserAccount = async () => {
    try {
      const response = await axios.get(`${HOST}/api/users`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("data-filter", response.data.data);
      setDataFilter(response.data.data);
    } catch (error) {
      handleNavigateToLogin();
    }
  };

  const handleLogoutOut = () => setJwt("");
  useEffect(() => {
    fetchUserAccount();
  }, [jwt]);

  return;
};

export default Logout;
