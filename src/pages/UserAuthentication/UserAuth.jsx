import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./styles.css";
import SignIn from "./SignIn";
import Register from "./Register";

import banner from "../../assets/images/auth-banner.svg";

const UserAuth = () => {
  return (
    <div>
      <div className="px-2 pb-12">
        <div className="bg-base-100 h-screen xl:h-[85vh]  rounded-xl lg:px-24 py-16">
          <div className="flex flex-col-reverse gap-12 lg:-mt-10 xl:-mt-0  lg:flex-row ">
            <div className="text-center hidden lg:block flex-1 lg:text-left">
              <h3 className="text-center test drop-shadow-2xl text-5xl text-black font-semibold  ">
                Explore With SwiftTask
              </h3>
              <img
                className="xl:w-[80%] mx-auto lg:mx-0 "
                src={banner}
                alt=""
              />
            </div>
            <div className="flex-1">
              {/* tabs */}
              <div>
                <Tabs>
                  <TabList>
                    <Tab>Sign In</Tab>
                    <div className="border-r-2 h-8  border-gray-400"></div>
                    <Tab>Register</Tab>
                  </TabList>

                  {/* sign in */}

                  <TabPanel>
                    <SignIn></SignIn>
                  </TabPanel>

                  {/* register */}
                  <TabPanel>
                    <Register></Register>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
