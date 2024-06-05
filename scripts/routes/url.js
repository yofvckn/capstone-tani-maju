import registerPage from "../views/pages/register";
import aboutPage from "../views/pages/about";
import contact from "../views/pages/contact";
import tutorial from "../views/pages/tutorial";
import mulaiInvestasi from "../views/pages/mulai-investasi";
import detailPage from "../views/pages/detail";
import homePage from "../views/pages/home";


const routes = {
  '/' : homePage, 
  '/mulai-investasi' : mulaiInvestasi,
  '/tutorial' : tutorial,
  '/contact' : contact,
  '/register' : registerPage,
  '/detail/:id' : detailPage,
  '/about' : aboutPage,
};


export default routes;
