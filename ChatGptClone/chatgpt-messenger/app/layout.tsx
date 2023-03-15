import SideBar from "../components/SideBar";
import "../styles/globals.css";
import { SessionProvider } from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextAuth]";
//얘는 이 전체 프로젝트에 근간이 되는 레이아웃임.
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          <div className="flex">
            {/** Side bar */}
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
              <SideBar />
            </div>

            {/** ClientProvider - Notification
             * 이건 리액트 토스트 쓰는거를 여기다 넣을 거임
             */}

            <div className="bg-[#343541] flex-1"> {children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
