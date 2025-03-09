import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRoutedMyDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token_doctor_bike");
    if (token) {
      if (user?.data?.id === "") {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate, user]);
  return children;
}
