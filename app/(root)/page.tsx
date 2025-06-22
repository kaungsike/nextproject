import { auth } from "@/auth";
import { LiveProviderWrapper } from "@/components/LiveProviderWrapper";
import StartUpContainer from "@/components/StartUpContainer";
import SubHeader from "@/components/SubHeader";

export default async function Home() {

  const session = await auth();

  console.log(session)

  return (
    <LiveProviderWrapper>
      <SubHeader />
      <StartUpContainer />
    </LiveProviderWrapper>
  );
}
