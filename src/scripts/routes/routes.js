import HomePage from '../views/pages/home';
import InvestasiPage from '../views/pages/mulai-investasi';
import Detail from '../views/pages/detail';
import TutorialPage from '../views/pages/TutorialPage';
import contact from '../views/pages/contact';
import RegisterPage from '../views/pages/register';
import DashboardPage from '../views/pages/dashboard';
import PortofolioPage from '../views/dashboard/portofolio';
import Mulai_InvestasiPage from '../views/dashboard/Mulai_investasi';
import Deviden from '../views/dashboard/deviden';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/mulai_investasi':InvestasiPage,
  '/tutorial': TutorialPage,
  '/contac' : contact,
  '/register' : RegisterPage,
  '/dashboard' : DashboardPage,
  '/portofolio' : PortofolioPage,
  '/mulai_investasi2' : Mulai_InvestasiPage,
  '/deviden': Deviden,
  '/detail/:id': Detail,

};

export default routes;
