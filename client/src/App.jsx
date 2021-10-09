import { Switch, Route } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

import Landing from '@/pages/Landing';
import Main from '@/pages/Main';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Mypage from '@/pages/Mypage';
import Create from '@/pages/Create';
import Detail from '@/pages/Detail';
import Search from '@/pages/Search';
import MyList from '@/pages/MyList';
import Nav from './components/shared/Nav';

export default function App() {
  return (
    <Layout>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/restaurants/:id" component={Detail} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/mylist" component={MyList} />
      </Switch>
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
