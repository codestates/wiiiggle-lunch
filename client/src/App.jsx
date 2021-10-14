import { Route } from 'react-router-dom';
import tw, { css, styled } from 'twin.macro';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import UnderBar from '@/components/shared/UnderBar';
import Nav from '@/components/shared/Nav';
import { loadUserRequestAction } from '@/store/reducers/users';
import Portal from '@/hoc/Portal';
import routes from '@/constants/routes';
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
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={350}
                classNames="page"
                unmountOnExit
              >
                <div className={`${path.split('/')[1] || 'landing'}`}>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        <UnderBar />
      </Content>
      <Portal selector="#toast">
        {alerts.map(alert => (
          <Toast
            key={alert.id}
            open={alert.open}
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
