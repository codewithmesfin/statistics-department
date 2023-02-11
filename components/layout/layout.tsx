import Footer from "./footer";
import { useRouter } from "next/router";
import TopHeader from "./header";
import Toolbar from "./toolbar";

interface PROPS {
  children: any;
}

export default function Layout({ children }: PROPS) {
  const route = useRouter();
  return (
    <>
     <div className="hidden sm:block">
     <TopHeader />
     </div>
      <Toolbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
