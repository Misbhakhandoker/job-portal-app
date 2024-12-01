import { fetchProfileAction } from "@/actions";
import HomepageButtonControls from "@/components/homepage-button-controls";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Fragment } from "react";

async function Home() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  if (user && !profileInfo?._id) redirect("/onboard");

  return (
    <Fragment>
      <section className="relative w-full h-full min-h-screen pb-10">
        <div className="relative w-full h-full">
          <div className="flex flex-col-reverse gap-10 mt-16 lg:flex-row">
            <section className="w-full lg:w-[50%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10">
              <div className="flex flex-col justify-start w-full h-auto lg:pt-7">
                <span className="flex space-x-2">
                  <span className="block mb-2 border-b-2 border-gray-700 w-14 dark:border-white"></span>
                  <span className="font-medium text-gray-600 dark:text-white">
                    One Stop Solution to Find Jobs
                  </span>
                </span>
                <h1 className="mt-5 text-3xl font-extrabold text-black dark:text-white lg:text-7xl">
                  Build your best job community starting from here.
                </h1>
                <div className="flex items-center justify-start w-full gap-2 mt-6 text-white">
                  <HomepageButtonControls
                    user={JSON.parse(JSON.stringify(user))}
                    profileInfo={profileInfo}
                  />
                </div>
              </div>
            </section>
            <section className="relative w-full lg:w-[50%] flex items-center justify-end">
              <img
                src="https://utfs.io/f/FLTJFGbP6tgfGiMqg4W0ijDPdTbKtmAosSlu59eUWXOY2NFI"
                alt="Hero"
                className="z-10 object-contain w-full h-full"
              />
            </section>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
