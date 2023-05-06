"use client"; // 이거 선언해야해. 13부터는 컴포넌트가 바이디폴트로 서버컴포넌트로 사용되기 떄문에. 나이거 클라이언트로 사용하겠다고 선언을 해야함

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export function SessionProvider({ children, session }: Props) {
  return <Provider>{children}</Provider>;
}
