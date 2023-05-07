"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      {/* 이미지 컴포넌트 컨피그제이에스가서 도메인 우리가 신뢰할 수 있는 적용해놔야 함. */}
      <button
        onClick={() => {
          signIn("google"); // 구글로 리다이렉트.
        }}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
