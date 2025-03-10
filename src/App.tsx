import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import Cookies from "js-cookie";
import theme from "./config/theme";
import { routes } from "./routes/route";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { fetchUser } from "./redux/features/userSlice";

function App() {
  // fetch user
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = Cookies.get("token_doctor_bike");
    if (token) {
      dispatch(fetchUser());
    }
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
export default App;
