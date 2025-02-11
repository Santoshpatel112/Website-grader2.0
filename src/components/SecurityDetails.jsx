// import React from 'react';

// const SecurityDetails = ({ title, status, description }) => {
//   return (
//     <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
//       <div className={`text-4xl ${status ? 'text-green-500' : 'text-red-500'}`}>
//         {status ? '✅' : '❌'}
//       </div>
//       <h3 className="text-xl font-semibold mt-4">{title}</h3>
//       <p className="text-gray-600 mt-2">{status ? 'Secured.' : 'Not Secured.'}</p>
//       <p className="text-gray-500 mt-2">{description}</p>
//     </div>
//   );
// };

// export default SecurityDetails;


import React from 'react';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';

const SecurityDetails = ({ title, status, description }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center" style={{border:'1px solid white'}}>
      {/* Status Icon */}
      <div className="mb-4">
        {status ? (
          <BsCheckCircleFill className="text-green-500 text-5xl" />
        ) : (
          <BsXCircleFill className="text-red-500 text-5xl" />
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-200">{title}</h3>

      {/* Status Text */}
      <p className={`font-medium ${status ? 'text-green-500' : 'text-red-500'} mt-2`}>
        {status ? 'Secured.' : 'Not Secured.'}
      </p>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-2">{description}</p>
    </div>
  );
};

export default SecurityDetails;
