import { Switch, Route } from 'react-router-dom';
import tw, { css, styled } from 'twin.macro';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Landing from '@/pages/Landing';
import Main from '@/pages/Main';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Mypage from '@/pages/Mypage';
import Create from '@/pages/Create';
import Detail from '@/pages/Detail';
import Search from '@/pages/Search';
import MyList from '@/pages/MyList';
import UnderBar from '@/components/shared/UnderBar';
import Nav from '@/components/shared/Nav';
import { loadUserRequestAction } from '@/store/reducers/users';
import Portal from '@/hoc/Portal';
import Toast from './components/shared/Toast';

export default function App() {
  const dispatch = useDispatch();
  const { alerts } = useSelector(state => state.toast);

  useEffect(() => {
    dispatch(loadUserRequestAction);
  }, []);

  return (
    <Layout>
      <Nav />
      <Content>
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
        <UnderBar />
      </Content>
      <Portal selector="#toast">
        {alerts.map(alert => (
          <Toast
            key={alert.id}
            message={alert.message}
            isWarning={alert.isWarning}
          />
        ))}
      </Portal>
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
const Content = styled.main(() => [
  tw`px-4 py-2`,
  css`
    margin-top: 56px;
    height: calc(100vh - 56px);
  `,
]);
