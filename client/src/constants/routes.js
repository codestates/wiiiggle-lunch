/* eslint-disable */
import Landing from '@/pages/Landing';
import Main from '@/pages/Main';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Mypage from '@/pages/Mypage';
import Create from '@/pages/Create';
import Detail from '@/pages/Detail';
import Search from '@/pages/Search';
import MyList from '@/pages/MyList';

const routes = [
  { path: '/', name: 'LANDING', Component: Landing },
  { path: '/main', name: 'MAIN', Component: Main },
  { path: '/login', name: 'LOGIN', Component: Login },
  { path: '/signup', name: 'SIGNUP', Component: Signup },
  { path: '/mypage', name: 'MYPAGE', Component: Mypage },
  { path: '/create', name: 'CREATE', Component: Create },
  { path: '/restaurants/:id', name: 'DETAIL', Component: Detail },
  { path: '/search', name: 'SEARCH', Component: Search },
  { path: '/mylist', name: 'MYLIST', Component: MyList },
];

export default routes;
