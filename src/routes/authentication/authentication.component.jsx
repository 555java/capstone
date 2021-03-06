// import {
//   auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.compomemt";
import SignInForm from "../../components/sign-in-form/sign-in-form.compomemt";
import "./authentication.styles.scss";
const Authentication = () => {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};
export default Authentication;

//version with sign in with redirect too
//
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

// const SignIn = () => {
//   useEffect(() => {
//     async function fetchData() {
//       const response = await getRedirectResult(auth).catch((e) => {
//         console.log("error");
//         console.dir(e);
//       });
//       if (response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//       }
//     }
//     fetchData();
//   }, []);

//   const logGoogleUser = async () => {
//     const { user } = await signInWithGooglePopup();
//     const userDocRef = await createUserDocumentFromAuth(user);
//   };

//   return (
//     <div>
//       <h1>Sign In Page</h1>
//       <button onClick={logGoogleUser}> Sign in with google popup</button>
//       <button onClick={signInWithGoogleRedirect}>
//         Sign in with google redirect
//       </button>
//     </div>
//   );
// };
// export default SignIn;
