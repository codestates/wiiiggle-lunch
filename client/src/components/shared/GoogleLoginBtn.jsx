// import { GoogleLogin } from 'react-google-login';
// import Button from '@/components/elements/Button';

// export default function GoogleBtn() {
//   const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

//   const onSuccess = res => {
//     console.log('[Login Success] currentUser:', res.profileObj);
//   };

//   const onFailure = res => {
//     console.log('[Login Failed] res:', res);
//   };

//   return (
//     <div>
//       <GoogleLogin
//         clientId={clientId}
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy="single_host_origin"
//         render={renderProps => (
//           <Button
//             solid
//             primary
//             lg
//             onClick={renderProps.onClick}
//             disabled={renderProps.disabled}
//           >
//             Google 계정으로 로그인
//           </Button>
//         )}
//         isSignedIn
//       />
//     </div>
//   );
// }
