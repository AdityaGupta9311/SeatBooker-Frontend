import Navbar from "../components/Navbar";
import SliderComponent from "../components/SliderComponent";
import Footer from "../components/Footer";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container pt-24 mx-auto">
        <SliderComponent category="Action" />
        <SliderComponent category="Comedy" />
        <SliderComponent category="Drama" />
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
