import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PropertyPulse | Find Perfect Rental Appartment",
  description: "Find Your Dream Rental Property",
  keywords: "rentals,apartments,properties",
  icons: {
    icon: [
      {
        url: "/logo.jpg",
      },
    ],
  },
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
