import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Footer from "./partials/Footer";
import HeaderNavigation from "./partials/HeaderNavigation";

const BasicLayout: React.FC = () => {
  return (
    <div>
      <HeaderNavigation />
      <div>
        <Container className="pb-5">
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default BasicLayout;
