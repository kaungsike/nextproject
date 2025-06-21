import React from 'react';
import BreadCrumbContainer from '@/components/BreadCrumbContainer';
import CreateStartupContainer from '../components/CreateStartupContainer';
import { auth } from '@/auth';
import ConfirmBox from '@/components/ConfirmBox';

const Page = async () => {
  const session = await auth();

  return (
    <div className="mt-5">
      <BreadCrumbContainer currentPage="Create Startup" />
      <CreateStartupContainer />
      {/* Pass session status to the client component */}
      {!session && <ConfirmBox />}
    </div>
  );
};

export default Page;
