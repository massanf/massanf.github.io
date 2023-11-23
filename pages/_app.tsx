import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import Theme from "@/components/theme";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
     <Component {...pageProps} />
     <Theme>
       <Component {...pageProps} />
     </Theme>
    </RecoilRoot>
  );
};

export default MyApp;