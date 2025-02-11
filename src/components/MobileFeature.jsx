// // import React from 'react';

// // const MobileFeature = ({ title, description, status }) => (
// //   <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-1/4 m-2">
// //     <div className={`text-3xl ${status === 'fail' ? 'text-red-500' : 'text-green-500'}`}>
// //       {status === 'fail' ? '✖️' : '✔️'}
// //     </div>
// //     <h3 className="font-semibold text-lg">{title}</h3>
// //     <p className="text-gray-500">{description}</p>
// //   </div>
// // );

// // export default MobileFeature;

// import React from 'react';
// import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';

// const MobileFeature = ({ title, description, status }) => (
//   <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center">
//     {/* Status Icon */}
//     <div className="mb-4">
//       {status === 'fail' ? (
//         <BsXCircleFill className="text-red-500 text-5xl" />
//       ) : (
//         <BsCheckCircleFill className="text-green-500 text-5xl" />
//       )}
//     </div>

//     {/* Title */}
//     <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>

//     {/* Description */}
//     <p className="text-black text-center text-sm">{description}</p>
//   </div>
// );

// export default MobileFeature;

import React from 'react';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';

const MobileFeature = ({ title, description, status }) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center" style={{border:'1px solid white'}}>
    {/* Status Icon */}
    <div className="mb-4">
      {status === 'fail' ? (
        <BsXCircleFill className="text-red-500 text-5xl" />
      ) : (
        <BsCheckCircleFill className="text-green-500 text-5xl" />
      )}
    </div>

    {/* Title */}
    <h3 className="text-lg font-semibold text-gray-200">{title}</h3>

    {/* Status Text */}
    <p className={`font-medium ${status === 'fail' ? 'text-red-500' : 'text-green-500'} mt-2`}>
      {status === 'fail' ? 'Not Optimized.' : 'Optimized.'}
    </p>

    {/* Description */}
    <p className="text-gray-400 text-sm mt-2">{description}</p>
  </div>
);

export default MobileFeature;
