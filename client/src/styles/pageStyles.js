import { css } from 'twin.macro';

const pageStyles = css`
  // ! landing page
  .landing.page-enter {
    opacity: 0;
  }

  .landing.page-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }

  .landing.page-exit {
    opacity: 1;
  }

  .landing.page-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }

  // ! main, create, mypage, detail
  .main.page-enter,
  .create.page-enter,
  .mypage.page-enter,
  .restaurants.page-enter {
    opacity: 0;
    transform: translateX(100vh);
  }

  .main.page-enter-active,
  .create.page-enter-active,
  .mypage.page-enter-active,
  .restaurants.page-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 350ms;
    transition: opacity 300ms, transform 350ms linear;
  }

  .main.page-exit,
  .create.page-exit,
  .mypage.page-exit,
  .restaurants.page-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .main.page-exit-active,
  .create.page-exit-active,
  .mypage.page-exit-active,
  .restaurants.page-exit-active {
    opacity: 0;
    transform: translateX(-100vh);
    transition-delay: 350ms;
    transition: opacity 300ms, transform 350ms linear;
  }
`;

export default pageStyles;
