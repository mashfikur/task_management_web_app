import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./styles.css";

const UserAuth = () => {
  return (
    <div>
      <div>
        <div className="bg-base-200 min-h-[70vh] rounded-xl p-24">
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="text-center flex-1 lg:text-left">
              <h3 className="text-center text-5xl text-black font-semibold mt-12 ">
                Explore With SwiftTask
              </h3>
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
                    <div className="card   shadow-2xl bg-base-100 ">
                      <form className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered focus:outline-none"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Password</span>
                          </label>
                          <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered focus:outline-none"
                            required
                          />
                          <label className="label">
                            <a
                              href="#"
                              className="label-text-alt link link-hover"
                            >
                              Forgot password?
                            </a>
                          </label>
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-primary">Sign In</button>
                        </div>
                      </form>
                    </div>
                  </TabPanel>

                  {/* register */}
                  <TabPanel>
                    <div className="card   shadow-2xl bg-base-100">
                      <form className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            placeholder="name"
                            className="input input-bordered focus:outline-none"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered focus:outline-none"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Password</span>
                          </label>
                          <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered focus:outline-none"
                            required
                          />
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-primary">Register</button>
                        </div>
                      </form>
                    </div>
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
