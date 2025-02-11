

// //  Update part 2 ✈️✈️✈️ 

// import React from "react";
// import PropTypes from "prop-types";

// const PerformanceCard = ({
//   imageUrl,
//   pageSize,
//   pageRequests,
//   pageSpeed,
//   performanceScore,
// }) => {
//   console.log("PerformanceCard props data:", {
//     imageUrl,
//     pageSize,
//     pageRequests,
//     pageSpeed,
//     performanceScore,
//   });

//   console.log("ImageUrl :: ",imageUrl);
//   console.log("PageSize :: ",pageSize);
//   console.log("PageRequests :: ",pageRequests);
//   console.log("PageSpeed :: ",pageSpeed);
//   console.log("PerformanceScore :: ",performanceScore);
  
  
  
//   return (
//     <div
//       className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-xl mx-auto"
//       id="performance"
//     >
//       {/* Image Section */}
//       {imageUrl ? (
//         <img src={imageUrl} alt="Performance illustration" className="w-24 h-24 mb-4" />
//       ) : (
//         <div className="w-24 h-24 mb-4 bg-gray-200 flex items-center justify-center rounded-full">
//           <span className="text-gray-500">No Image</span>
//         </div>
//       )}

//       {/* Main Performance Section */}
//       <div className="text-center mb-6">
//         <div className="text-4xl font-bold text-red-500">
//           {performanceScore}
//           <span className="text-gray-500">/25</span>
//         </div>
//         <h2 className="text-xl font-semibold mb-2">Performance</h2>
//         <p className="text-gray-600 text-sm mb-3">
//           Optimizing your website performance is crucial to increasing traffic, improving conversion rates, generating more leads, and increasing revenue.
//         </p>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-blue-600">
//           Improve your website performance with a free 15-minute lesson
//         </button>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
//         {/* Page Size */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Size</h3>
//           <div className="text-2xl font-bold text-green-500 mt-2">{pageSize} </div>
//         </div>

//         {/* Page Requests */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Requests</h3>
//           <div className="text-2xl font-bold text-red-500 mt-2">{pageRequests}</div>
//         </div>

//         {/* Page Speed */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Speed</h3>
//           <div className="text-2xl font-bold text-red-500 mt-2">{pageSpeed} SEC</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// PerformanceCard.propTypes = {
//   imageUrl: PropTypes.string,
//   pageSize: PropTypes.string,
//   pageRequests: PropTypes.number,
//   pageSpeed: PropTypes.string,
//   performanceScore: PropTypes.number,
// };

// export default PerformanceCard;








// import React from "react";
// import PropTypes from "prop-types";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
// import { FaTachometerAlt, FaRegFileAlt, FaCloudDownloadAlt } from "react-icons/fa";

// const PerformanceCard = ({
//   imageUrl,
//   pageSize,
//   pageRequests,
//   pageSpeed,
//   performanceScore,
// }) => {
//   return (
//     <Card className="p-6 bg-gray-600 text-gray-100 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
//       {/* Header Section */}
//       <CardHeader className="text-center mb-4">
//         {imageUrl ? (
//           <img
//             src={imageUrl}
//             alt="Performance"
//             className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
//           />
//         ) : (
//           <div className="w-24 h-24 mx-auto bg-gray-700 flex items-center justify-center rounded-full">
//             <span className="text-gray-500">No Image</span>
//           </div>
//         )}
//         <div className="mt-4">
//           <div className="text-4xl font-extrabold text-yellow-500">
//             {performanceScore}
//             <span className="text-gray-500 text-2xl">/25</span>
//           </div>
//           <h2 className="text-2xl font-semibold mt-2">Performance Score</h2>
//         </div>
//       </CardHeader>

//       {/* Content Section */}
//       <CardContent className="text-center space-y-4">
//         <p className="text-gray-400">
//           Optimizing your website performance is crucial to increasing traffic, improving conversion rates, and boosting revenue.
//         </p>
//         <Button className="w-full bg-blue-600 hover:bg-blue-500 text-sm py-2 shadow-md">
//           Improve your website performance with a free lesson
//         </Button>
//       </CardContent>

//       {/* Statistics Section */}
//       <CardFooter className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-6">
//         {/* Page Size */}
//         <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md">
//           <FaCloudDownloadAlt className="text-3xl text-green-400 mb-2" />
//           <h3 className="text-sm font-medium text-gray-400">Page Size</h3>
//           <div className="text-xl font-bold text-green-400">{pageSize}</div>
//         </div>

//         {/* Page Requests */}
//         <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md">
//           <FaRegFileAlt className="text-3xl text-yellow-400 mb-2" />
//           <h3 className="text-sm font-medium text-gray-400">Page Requests</h3>
//           <div className="text-xl font-bold text-yellow-400">{pageRequests}</div>
//         </div>

//         {/* Page Speed */}
//         <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md">
//           <FaTachometerAlt className="text-3xl text-red-400 mb-2" />
//           <h3 className="text-sm font-medium text-gray-400">Page Speed</h3>
//           <div className="text-xl font-bold text-red-400">{pageSpeed} SEC</div>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// };

// PerformanceCard.propTypes = {
//   imageUrl: PropTypes.string,
//   pageSize: PropTypes.string,
//   pageRequests: PropTypes.number,
//   pageSpeed: PropTypes.string,
//   performanceScore: PropTypes.number,
// };

// export default PerformanceCard;

import React from "react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { FaTachometerAlt, FaRegFileAlt, FaCloudDownloadAlt } from "react-icons/fa";

const PerformanceCard = ({
  imageUrl,
  pageSize,
  pageRequests,
  pageSpeed,
  performanceScore,
}) => {
  return (
    <Card style={{ backgroundColor: "#2C3E50" }} className="p-6  text-gray-100 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      {/* Header Section */}
      <CardHeader className="text-center mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Performance"
            className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
          />
        ) : (
          <div className="w-24 h-24 mx-auto bg-gray-700 flex items-center justify-center rounded-full">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        <div className="mt-4">
          <div className="text-4xl font-extrabold text-yellow-500">
            {performanceScore}
            <span className="text-white text-2xl">/25</span>
          </div>
          <h2 className="text-2xl font-semibold mt-2">Performance Score</h2>
        </div>
      </CardHeader>

      {/* Content Section */}
      <CardContent className="text-center space-y-4">
        <p className="text-gray-400">
          Optimizing your website performance is crucial to increasing traffic, improving conversion rates, and boosting revenue.
        </p>
        <Button className="w-full bg-blue-600 hover:bg-blue-500 text-sm py-2 shadow-md">
          Improve your website performance with a free lesson
        </Button>
      </CardContent>

      {/* Statistics Section */}
      <CardFooter className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-6">
        {/* Page Size */}
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md" style={{border:"1px solid white"}}>
          <FaCloudDownloadAlt className="text-3xl text-green-400 mb-2" />
          <h3 className="text-sm font-medium text-gray-400">Page Size</h3>
          <div className="text-xl font-bold text-green-400">{pageSize}</div>
        </div>

        {/* Page Requests */}
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md" style={{border:"1px solid white"}}>
          <FaRegFileAlt className="text-3xl text-yellow-400 mb-2" />
          <h3 className="text-sm font-medium text-gray-400">Page Requests</h3>
          <div className="text-xl font-bold text-yellow-400">{pageRequests}</div>
        </div>

        {/* Page Speed */}
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md" style={{border:"1px solid white"}}>
          <FaTachometerAlt className="text-3xl text-red-400 mb-2" />
          <h3 className="text-sm font-medium text-gray-400">Page Speed</h3>
          <div className="text-xl font-bold text-red-400" >{pageSpeed} SEC</div>
        </div>
      </CardFooter>
    </Card>
  );
};

PerformanceCard.propTypes = {
  imageUrl: PropTypes.string,
  pageSize: PropTypes.string,
  pageRequests: PropTypes.number,
  pageSpeed: PropTypes.string,
  performanceScore: PropTypes.number,
};

export default PerformanceCard;
