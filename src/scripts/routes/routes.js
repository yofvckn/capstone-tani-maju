/* eslint-disable no-undef */
import aboutPage from '../views/pages/about';
import contacPage from '../views/pages/contact';
import daftarBisnis from '../views/pages/daftarkanBisnis';
import detailPage from '../views/pages/detail';
import HomePage from '../views/pages/home';
import mulaiInvestasi from '../views/pages/mulai-investasi';
import panduanPage from '../views/pages/panduan';
import registerPage from '../views/pages/registerLogin';

const routes = {

  '/': HomePage,
  '/daftarbisnis': daftarBisnis,
  '/contact': contacPage,
  '/daftarkanbisnis': daftarBisnis,
  '/mulaiinvestasi': mulaiInvestasi,
  '/panduan': panduanPage,
  '/about': aboutPage,
  '/detail/:id': detailPage,
  '/registerlogin': registerPage,
};
export default routes;
