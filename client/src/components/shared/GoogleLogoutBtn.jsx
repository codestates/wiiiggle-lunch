// import tw from 'twin.macro';
// import { GoogleLogout } from 'react-google-login';
// import Button from '@/components/elements/Button';

// export default function GoogleBtn() {
//   const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

//   const onSuccess = () => {
//     alert('LogOut made successfully!');
//   };

//   return (
//     <div>
//       <GoogleLogout
//         clientId={clientId}
//         buttonText="Google 계정 로그아웃"
//         onLogoutSuccess={onSuccess}
//         render={renderProps => (
//           <Button
//             solid
//             primary
//             lg
//             css={tw`mt-5`}
//             onClick={renderProps.onClick}
//             disabled={renderProps.disabled}
//           >
//             Google 계정 로그아웃
//           </Button>
//         )}
//         isSignedIn
//       />
//     </div>
//   );
// }
