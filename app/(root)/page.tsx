import Footer from "@/components/Footer";
import { LiveProviderWrapper } from "@/components/LiveProviderWrapper";
import StartUpContainer from "@/components/StartUpContainer";
import SubHeader from "@/components/SubHeader";

export default function Home() {
  return (
    <LiveProviderWrapper>
      <SubHeader />
      <StartUpContainer />
      <Footer />
    </LiveProviderWrapper>
  );
}
