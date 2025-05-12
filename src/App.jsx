import { Outlet } from "react-router";
import { Navbar, Footer } from "./Components/"
import { AuthProvider } from "./Context/Auth/AuthContext";
import { UIProvider } from "./Context/UI/UIContext";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AuthProvider>
          <UIProvider>
            <Navbar />
            <main className="pt-20">
              <Outlet />
            </main>
            <Footer />
          </UIProvider>
        </AuthProvider>
      </LocalizationProvider>
    </>
  );
}

export default App;
