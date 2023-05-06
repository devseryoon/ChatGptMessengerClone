"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div>
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      {/* 이미지 컴포넌트 컨피그제이에스가서 도메인 우리가 신뢰할 수 있는 적용해놔야 함. */}
      <button> Sign In to use ChatGPT</button>
    </div>
  );
};

export default Login;
