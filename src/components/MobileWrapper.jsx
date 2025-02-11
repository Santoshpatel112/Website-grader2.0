// // import React from 'react';
// // import MobileFeature from './MobileFeature';

// // const MobileWrapper = ({ score, features }) => (
// //   <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
// //     {/* Header with Score and Title */}
// //     <div className="text-center mb-8">
// //       <div className="text-5xl font-bold text-yellow-500">{score}/30</div>
// //       <h1 className="text-3xl font-bold text-gray-800">Mobile</h1>
// //       <p className="text-gray-600 mt-2">
// //         Traffic from mobile devices is growing fast. Optimize your website for mobile or you’ll miss out on valuable traffic, leads, and revenue.
// //       </p>
// //        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-blue-600">
// //           Improve your website performance with a free 15-minute lesson
// //         </button>
// //     </div>

// //     {/* Mobile Preview Image */}
// //     <div className="flex justify-center mb-8">
// //       <img
// //         src="https://m.media-amazon.com/images/I/71GCuB90SEL.png" // Update the path to your image here
// //         alt="Mobile Preview"
// //         className="h-48 w-32 object-cover rounded-lg shadow-lg"
// //       />
// //     </div>

// //     {/* Features List */}
// //     <div className="flex flex-wrap justify-center">
// //       {features.map((feature, index) => (
// //         <MobileFeature key={index} {...feature} />
// //       ))}
// //     </div>
// //   </div>
// // );

// // export default MobileWrapper;

// import React from 'react';
// import { BsFillPhoneFill } from 'react-icons/bs';
// import MobileFeature from './MobileFeature';

// const MobileWrapper = ({ score, features }) => (
//   <div
//     className="p-6 rounded-lg"
//     style={{
//       backgroundColor: '#2C3E50',
//       color: 'white',
//     }}
//   >
//     {/* Header with Score and Title */}
//     <div className="text-center mb-8">
//       <div className="text-5xl font-bold text-yellow-400">{score}/30</div>
//       <h1 className="text-2xl font-bold mt-2 text-gray-200">Mobile</h1>
//       <p className="text-white mt-2">
//         Traffic from mobile devices is growing rapidly. Optimize your website to capture valuable traffic, leads, and revenue.
//       </p>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-blue-600 mt-4">
//         Improve your website performance with a free 15-minute lesson
//       </button>
//     </div>

//     {/* Mobile Preview Image */}
//     <div className="flex justify-center mb-8">
//       <img
//         src="https://m.media-amazon.com/images/I/71GCuB90SEL.png" // Update the path to your image here
//         alt="Mobile Preview"
//         className="h-48 w-32 object-cover rounded-lg shadow-lg"
//       />
//     </div>

//     {/* Features List */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {features.map((feature, index) => (
//         <MobileFeature key={index} {...feature} />
//       ))}
//     </div>
//   </div>
// );

// export default MobileWrapper;


import React from 'react';
import MobileFeature from './MobileFeature';

const MobileWrapper = ({ score, features }) => (
  <div
    className="p-6 rounded-lg"
    style={{
      backgroundColor: '#2C3E50',
      color: 'white',
    }}
  >
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-yellow-400">{score}/30</h2>
      <h1 className="text-2xl font-bold mt-2 text-gray-200">Mobile</h1>
      <p className="text-white mt-2">
        Traffic from mobile devices is growing rapidly. Optimize your website to capture valuable traffic, leads, and revenue.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-blue-600 mt-4">
        Improve your website performance with a free 15-minute lesson
      </button>
    </div>

    {/* Mobile Preview Image */}
    <div className="flex justify-center mb-8">
      <img
        src="https://m.media-amazon.com/images/I/71GCuB90SEL.png" // Update the image URL as needed
        alt="Mobile Preview"
        className="h-48 w-32 object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Features List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <MobileFeature key={index} {...feature} />
      ))}
    </div>
  </div>
);

export default MobileWrapper;
