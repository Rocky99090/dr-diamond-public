
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Swiper from 'swiper';
import 'swiper/css';
import ScrollToTop from "./component/layout/scrolltop";
import AboutPage from "./pages/about";
import AchievementPage from "./pages/achievement";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blog-single";
import BlogPageTwo from "./pages/blogtwo";
import ContactUs from "./pages/contact";
import GalleryPage from "./pages/gallery";
import GameListSection from "./pages/gamelist";
import GameListTwoSection from "./pages/gamelisttwo";
import HomePage from './pages/home';
import HomeTwo from './pages/hometwo';
import LogIn from "./pages/login";
import PartnerPage from "./pages/partner";
import ShopPage from "./pages/shop";
import ShopCart from "./pages/shopcart";
import ShopDetails from "./pages/shopdetails";
import SignUp from "./pages/signup";
import TeamPage from "./pages/team";
import TeamSinglePage from "./pages/team-single";
import ErrorPage from "./pages/errorpage";
import { Box, Button } from "@mui/material";

// import Footer from "./component/layout/footer";
// import Header from "./component/layout/header";
// import PageHeader from './component/layout/pageheader';
// import GameList from './component/section/gamelist';


function App() {
	const openWhatsapp = () => {
		window.location.href = "https://Wa.link/drdiamondsupport?text=I want Id"
	}
	return (
		
		// <div className="App">
		// 	<ShopPage />
		// </div>
		<BrowserRouter>
			<ScrollToTop />
			<Box
      sx={{
        position: 'fixed',
        bottom: '20px !important',
        right: '20px',
        zIndex: 1000,
        '& > :not(style)': { m: 0 },
      }}
    >
      <Button
        onClick={openWhatsapp}
        aria-label="WhatsApp"
        sx={{
          backgroundColor: 'green',
          borderRadius: '50%',
          padding: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            backgroundColor: 'green',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
  <i class="icofont-brand-whatsapp"  style={{fontSize:"40px", color:'white'}}></i>
  </Button>
</Box>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="*" element={<ErrorPage />} />
				<Route path="blog" element={<BlogPage />} />
				<Route path="blog-single/:id" element={<BlogDetails />} />
				<Route path="contact" element={<ContactUs />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
