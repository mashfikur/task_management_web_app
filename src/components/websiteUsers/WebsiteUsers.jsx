import { useEffect, useState } from "react";
import Card from "./Card";

const WebsiteUsers = () => {
  const [usersInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch("/userinfo.json")
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  return (
    <div className="min-h-screen px-4 mb-5">
      <div className="text-center my-24 space-y-3 ">
        <h3 className="lg:text-6xl text-4xl font-semibold text-white">
          {" "}
          Empowering Diverse Professionals
        </h3>
        <p className="text-gray-400 ">
          Whether {"you're "}a developer, corporate professional, or banker,
          Swift Task is crafted to elevate your workflow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {usersInfo.map((info, idx) => (
          <Card key={idx} info={info}></Card>
        ))}
      </div>
    </div>
  );
};

export default WebsiteUsers;
