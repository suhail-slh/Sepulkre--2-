// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Pricing',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Order Now',
    path: '/dashboard/ordernow',
    icon: icon('ic_cart'),
  },
  {
    title: 'Order History',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'About us',
    path: '/dashboard/aboutus',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
