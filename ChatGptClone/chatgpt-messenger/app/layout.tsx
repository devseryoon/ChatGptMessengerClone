import SideBar from "../components/SideBar";
import "../styles/globals.css";
import { SessionProvider } from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextAuth]";
import Login from "../components/Login";
//얘는 이 전체 프로젝트에 근간이 되는 레이아웃임.

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions); // 펑셔널 컴포넌트에서 어웨이트를 쓴다고??! 쓸수있다 서버컴포넌트는 에이싱크 컴포넌트로. 그러나 클라이언트컴포넌트라면 말이 달라지지.
  //로그인하면 세션컴포넌트생김, 로그아웃하면 세션컴포넌트 사라짐.
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {/** Side bar */}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>
              {/** Once I login => Session,
               * Once I logOut => No Session
               */}
              {/** ClientProvider - Notification
               * 이건 리액트 토스트 쓰는거를 여기다 넣을 거임
               */}

              <div className="bg-[#343541] flex-1"> {children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
//서버 컴포넌트가 있어서 우리의 배리어블을 좀더 프로텍트 할 수 있다. 퍼블릭으로 안 뺴둘 수 있다.
