import React from "react";
import { useLocation } from "react-router-dom";
import { Card, CardFooter } from "@/components/ui/card";
import { FiMail as MailIcon, FiPhone as PhoneIcon, FiTwitter as TwitterIcon } from "react-icons/fi";
import "../assets/lighthouce.css";
import ScoreCard from "./scorecard";
import SiteGrade from "./SiteGrade";


function Lighthouse() {
  const location = useLocation(); // Access the location object from React Router
  const analysisData = location.state?.analysisData; // Access the state passed during navigation

  // Handle the case when no data is available
  if (!analysisData) {
    return <p>No data available. Please run the analysis first.</p>;
  }

  return (
    <div className="container">
      <div className="left-panel">
        <ScoreCard url={analysisData.url} scores={analysisData.scores} />
        <CardFooter className="flex justify-center space-x-4 mt-4">
          <a href="mailto:santoshpatelvns5@gmail.com" className="text-gray-600 hover:text-blue-500">
            <MailIcon size={24} />
          </a>
          <a href="tel:+918467941850" className="text-gray-600 hover:text-green-500">
            <PhoneIcon size={24} />
          </a>
          <a href="https://x.com/Santoshp3259330" className="text-gray-600 hover:text-blue-400">
            <TwitterIcon size={24} />
          </a>
        </CardFooter>
      </div>
      <div className="right-panel">
        {/* SiteGrade can be used for additional data display or information */}
        <SiteGrade data={analysisData}/>
      </div>
    </div>
  );
}

export default Lighthouse;
