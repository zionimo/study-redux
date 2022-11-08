import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigater = useNavigate();

  // 구글로 로그인하기 버튼을 눌렀을때 파이어스토어를 들고와서 사용
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // 로그인된 결과를 구글인증을 통해서 확인 > 토큰 발급
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // 로그인된 결과 중에서 user를 통해서 관련 정보를 가져올수 있다
        const user = result.user;
        navigater("/user", {
          state: {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          },
        });
      })
      .catch((error) => {
        //
        const errorCode = error.code;
        const errorMessage = error.message;
        //
        const email = error.customData.email;
        //
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div>
      <h1>홈입니다</h1>
      <button onClick={googleLogin}> 구글로 로그인하기 </button>
    </div>
  );
};

export default Home;
