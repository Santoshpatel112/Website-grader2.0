// import React from 'react';
// import './ScoreCard.css';
// import { useState } from 'react';
// import PerformanceCard from './PerformanceCard';
// import FeatureList from './FeatureList';
// import SEOWrapper from './SEOWrapper';
// import MobileWrapper from './MobileWrapper';
// import SecurityWrapper from './SecurityWrapper';
// import Content from './lastcontent';

// const SiteGrade = () => {

// // Mobile wrapper
// const mobileData = {
//     score: 0,
//     features: [
//       {
//         title: 'Legible Font Size',
//         description: 'Visitors may have difficulty reading small text, especially on mobile devices. We recommend at least 12px.',
//         status: 'fail',
//       },
//       {
//         title: 'Tap Targets',
//         description: 'Mobile-friendly pages perform better in search results. Make sure interactive elements like buttons and links are not too small or too close together.',
//         status: 'fail',
//       },
//       {
//         title: 'Responsive',
//         description: 'Responsive design gives you a bump in search rankings for searches on mobile devices.',
//         status: 'fail',
//       },
//     ],
//   };

// // language options
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   return (
//     <>
//     <div className="site-grade">
//       <header className="header">
//         <div className="header-logo">
//           <span><img src="https://i.ibb.co/ww9TGKX/f7f777c2e968.png" alt=""  style={{height:"18vh",width:"18vh"}}/></span>
//           <span className="header-tools">TOOLS</span>
//         </div>
//         {/* <span className="header-title">WEBSITE GRADER</span> */}
//         {/* <button className="language-btn">English</button> */}
//         <div className="relative inline-block">
//   <button
//     className="flex items-center space-x-2   rounded-3xl"
//     style={{ border: "2px solid grey", padding: "8px 12px", position: "relative", backgroundColor:"#192027", color:"white", fontWeight:"600", }}
//     onClick={() => setShowLanguageOptions(!showLanguageOptions)}
//   >
//     English <span className="icon icon-angle-down"></span>
//   </button>
//   {showLanguageOptions && (
//     <ul
//       className="absolute bg-white border rounded-md mt-2 w-40 shadow-lg"
//       style={{
//         left: "0", // Ensure the dropdown aligns to the left of the button
//         zIndex: 10, // Bring the dropdown to the front
//       }}
//     >
//       <li className="p-2 hover:bg-gray-100">
//         <a href="https://website.grader.com/de/" className="text-black">Deutsch</a>
//       </li>
//       <li className="p-2 hover:bg-gray-100">
//         <a href="https://website.grader.com/" className="text-black flex items-center">
//           <span className="icon icon-check mr-2"></span> English
//         </a>
//       </li>
//       <li className="p-2 hover:bg-gray-100">
//         <a href="https://website.grader.com/es/" className="text-black">Español</a>
//       </li>
//       <li className="p-2 hover:bg-gray-100">
//         <a href="https://website.grader.com/fr/" className="text-black">Français</a>
//       </li>
//       <li className="p-2 hover:bg-gray-100">
//         <a href="https://website.grader.com/ja/" className="text-black">日本語</a>
//       </li>
//       <li className="p-2 hover:bg-gray-100">
//         <a href="https://website.grader.com/pt/" className="text-black">Português</a>
//       </li>
//     </ul>
//   )}
// </div>

//       </header>

//       <main className="main-content">
//         <h1 className="status-title">This site is OK</h1>
//         <p className="status-description">
//           Not too shabby. Let’s see how we can bump up that score a bit. See your scorecard below
//           and take action now by creating a high-speed website with HubSpot CMS Free.
//         </p>
//         <div><button className="cta-button">Create a high-speed website</button></div>
//         {/* <button className="cta-button">Create a high-speed website</button> */}

//         <div className="website-preview">
//           <div className="browser-header">
//             <div className="browser-dot red"></div>
//             <div className="browser-dot yellow"></div>
//             <div className="browser-dot green"></div>
//           </div>
//           <img
//             src="https://tse4.mm.bing.net/th?id=OIP.vilK3CSw7dyAH24xP8ry4wHaE8&pid=Api&P=0&h=180" // Use your actual image or a placeholder
//             alt="Sarkari Result Website Preview"
//             className="website-image"
//           />
//         </div>
//       </main>
//     </div>
    
//     <div style={{}}><PerformanceCard/></div>
//     <FeatureList/>
//     <SEOWrapper/>
//     <div className="min-h-screen bg-gray-200 flex items-center justify-center mt-5 rounded-xl">
//       <MobileWrapper score={mobileData.score} features={mobileData.features} />
//     </div>
//      <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-4 rounded-xl">
//       <SecurityWrapper />
//     </div>
//    <div style={{marginTop:"2vw"}}> <Content/></div>
    
//     </>
//   );
// };

// export default SiteGrade;


// import React from 'react';
// import './ScoreCard.css';
// import { useState } from 'react';
// import PerformanceCard from './PerformanceCard';
// import FeatureList from './FeatureList';
// import SEOWrapper from './SEOWrapper';
// import MobileWrapper from './MobileWrapper';
// import SecurityWrapper from './SecurityWrapper';
// import Content from './lastcontent';

// const SiteGrade = () => {
//   // Mobile wrapper
//   const mobileData = {
//     score: 0,
//     features: [
//       {
//         title: 'Legible Font Size',
//         description: 'Visitors may have difficulty reading small text, especially on mobile devices. We recommend at least 12px.',
//         status: 'fail',
//       },
//       {
//         title: 'Tap Targets',
//         description: 'Mobile-friendly pages perform better in search results. Make sure interactive elements like buttons and links are not too small or too close together.',
//         status: 'fail',
//       },
//       {
//         title: 'Responsive',
//         description: 'Responsive design gives you a bump in search rankings for searches on mobile devices.',
//         status: 'fail',
//       },
//     ],
//   };

//   // language options
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   return (
//     <>
//       <div className="site-grade">
//         <header className="header flex flex-col md:flex-row items-center justify-between p-4 bg-gray-800 text-white">
//           <div className="header-logo flex items-center space-x-2">
//             <span><img src="https://i.ibb.co/ww9TGKX/f7f777c2e968.png" alt="" className="h-16 w-16 md:h-18 md:w-18" /></span>
//             <span className="header-tools text-lg font-semibold">TOOLS</span>
//           </div>
//           <div className="relative inline-block mt-4 md:mt-0">
//             <button
//               className="flex items-center space-x-2 rounded-3xl border-2 border-gray-400 px-4 py-2 bg-gray-700 text-white font-medium"
//               onClick={() => setShowLanguageOptions(!showLanguageOptions)}
//             >
//               English <span className="icon icon-angle-down"></span>
//             </button>
//             {showLanguageOptions && (
//               <ul className="absolute bg-white border rounded-md mt-2 w-40 shadow-lg">
//                 <li className="p-2 hover:bg-gray-100"><a href="https://website.grader.com/de/" className="text-black">Deutsch</a></li>
//                 <li className="p-2 hover:bg-gray-100"><a href="https://website.grader.com/" className="text-black flex items-center"><span className="icon icon-check mr-2"></span> English</a></li>
//                 <li className="p-2 hover:bg-gray-100"><a href="https://website.grader.com/es/" className="text-black">Español</a></li>
//                 <li className="p-2 hover:bg-gray-100"><a href="https://website.grader.com/fr/" className="text-black">Français</a></li>
//                 <li className="p-2 hover:bg-gray-100"><a href="https://website.grader.com/ja/" className="text-black">日本語</a></li>
//                 <li className="p-2 hover:bg-gray-100"><a href="https://website.grader.com/pt/" className="text-black">Português</a></li>
//               </ul>
//             )}
//           </div>
//         </header>

//         <main className="main-content p-4">
//           <h1 className="status-title text-2xl font-bold mb-2">This site is OK</h1>
//           <p className="status-description mb-4">
//             Not too shabby. Let’s see how we can bump up that score a bit. See your scorecard below
//             and take action now by creating a high-speed website with HubSpot CMS Free.
//           </p>
//           <div className="mb-4"><button className="cta-button bg-blue-600 text-white py-2 px-4 rounded-md">Create a high-speed website</button></div>

//           <div className="website-preview border rounded-lg overflow-hidden shadow-lg mb-4">
//             <div className="browser-header flex items-center space-x-1 p-2 bg-gray-200">
//               <div className="browser-dot bg-red-500 w-3 h-3 rounded-full"></div>
//               <div className="browser-dot bg-yellow-500 w-3 h-3 rounded-full"></div>
//               <div className="browser-dot bg-green-500 w-3 h-3 rounded-full"></div>
//             </div>
//             <img
//               src="https://tse4.mm.bing.net/th?id=OIP.vilK3CSw7dyAH24xP8ry4wHaE8&pid=Api&P=0&h=180"
//               alt="Sarkari Result Website Preview"
//               className="website-image w-full"
//             />
//           </div>
//         </main>
//       </div>

//       <div className="p-4"><PerformanceCard /></div>
//       <FeatureList />
//       <SEOWrapper />
//       <div className="min-h-screen bg-gray-200 flex items-center justify-center mt-5 rounded-xl">
//         <MobileWrapper score={mobileData.score} features={mobileData.features} />
//       </div>
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-4 rounded-xl">
//         <SecurityWrapper />
//       </div>
//       <div className="mt-8"><Content /></div>
//     </>
//   );
// };

// export default SiteGrade;



// import React, { useState } from 'react';
// import './ScoreCard.css';
// import PerformanceCard from './PerformanceCard';
// import FeatureList from './FeatureList';
// import SEOWrapper from './SEOWrapper';
// import MobileWrapper from './MobileWrapper';
// import SecurityWrapper from './SecurityWrapper';
// import Content from './lastcontent';

// const SiteGrade = () => {
//   // Mobile wrapper
//   const mobileData = {
//     score: 0,
//     features: [
//       {
//         title: 'Legible Font Size',
//         description: 'Visitors may have difficulty reading small text, especially on mobile devices. We recommend at least 12px.',
//         status: 'fail',
//       },
//       {
//         title: 'Tap Targets',
//         description: 'Mobile-friendly pages perform better in search results. Make sure interactive elements like buttons and links are not too small or too close together.',
//         status: 'fail',
//       },
//       {
//         title: 'Responsive',
//         description: 'Responsive design gives you a bump in search rankings for searches on mobile devices.',
//         status: 'fail',
//       },
//     ],
//   };

//   // language options
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   return (
//     <>
//       <div className="site-grade">
//         <header className="header flex flex-col md:flex-row items-center justify-between p-4 bg-gray-800 text-white">
//           <div className="header-logo flex items-center space-x-2">
//             <span><img src="https://i.ibb.co/ww9TGKX/f7f777c2e968.png" alt="" className="h-16 w-16 md:h-18 md:w-18 transition-transform duration-300 hover:scale-110" /></span>
//             <span className="header-tools text-lg font-semibold">TOOLS</span>
//           </div>
//           <div className="relative inline-block mt-4 md:mt-0">
//             <button
//               className="flex items-center space-x-2 rounded-3xl border-2 border-gray-400 px-4 py-2 bg-gray-700 text-white font-medium transition-colors duration-300 hover:bg-gray-600"
//               onClick={() => setShowLanguageOptions(!showLanguageOptions)}
//             >
//               English <span className="icon icon-angle-down"></span>
//             </button>
//             {showLanguageOptions && (
//               <ul className="absolute bg-white border rounded-md mt-2 w-40 shadow-lg">
//                 <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/de/" className="text-black">Deutsch</a></li>
//                 <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/" className="text-black flex items-center"><span className="icon icon-check mr-2"></span> English</a></li>
//                 <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/es/" className="text-black">Español</a></li>
//                 <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/fr/" className="text-black">Français</a></li>
//                 <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/ja/" className="text-black">日本語</a></li>
//                 <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/pt/" className="text-black">Português</a></li>
//               </ul>
//             )}
//           </div>
//         </header>

//         <main className="main-content p-4">
//           <h1 className="status-title text-2xl font-bold mb-2">This site is OK</h1>
//           <p className="status-description mb-4">
//             Not too shabby. Let’s see how we can bump up that score a bit. See your scorecard below
//             and take action now by creating a high-speed website with HubSpot CMS Free.
//           </p>
//           <div className="mb-4"><button className="cta-button bg-blue-600 text-white py-2 px-4 rounded-md transition-transform duration-300 hover:scale-105">Create a high-speed website</button></div>

//           <div className="website-preview border rounded-lg overflow-hidden shadow-lg mb-4">
//             <div className="browser-header flex items-center space-x-1 p-2 bg-gray-200">
//               <div className="browser-dot bg-red-500 w-3 h-3 rounded-full"></div>
//               <div className="browser-dot bg-yellow-500 w-3 h-3 rounded-full"></div>
//               <div className="browser-dot bg-green-500 w-3 h-3 rounded-full"></div>
//             </div>
//             <img
//               src="https://tse4.mm.bing.net/th?id=OIP.vilK3CSw7dyAH24xP8ry4wHaE8&pid=Api&P=0&h=180"
//               alt="Sarkari Result Website Preview"
//               className="website-image w-full transition-transform duration-300 hover:scale-105"
//             />
//           </div>
//         </main>
//       </div>

//       <div className="p-4"><PerformanceCard /></div>
//       <FeatureList />
//       <SEOWrapper />
//       <div className="min-h-screen bg-gray-200 flex items-center justify-center mt-5 rounded-xl">
//         <MobileWrapper score={mobileData.score} features={mobileData.features} />
//       </div>
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-4 rounded-xl">
//         <SecurityWrapper />
//       </div>
//       <div className="mt-8"><Content /></div>
//     </>
//   );
// };

// export default SiteGrade;



import './ScoreCard.css';
// import PerformanceCard from './PerformanceCard';
import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/button'
import './ScoreCard.css';
import PerformanceWrapper from './PerformanceWrapper ';
import FeatureList from './FeatureList';
import SEOWrapper from './SEOWrapper';
import MobileWrapper from './MobileWrapper';
import SecurityWrapper from './SecurityWrapper';
import Content from './Lastcontent';
import Lcontent from './Last2ndcontent';

const SiteGrade = () => {
  const navigate = useNavigate();

  // Mobile wrapper
  const mobileData = {
    score: 0,
    features: [
      {
        title: 'Legible Font Size',
        description: 'Visitors may have difficulty reading small text, especially on mobile devices. We recommend at least 12px.',
        status: 'fail',
      },
      {
        title: 'Tap Targets',
        description: 'Mobile-friendly pages perform better in search results. Make sure interactive elements like buttons and links are not too small or too close together.',
        status: 'fail',
      },
      {
        title: 'Responsive',
        description: 'Responsive design gives you a bump in search rankings for searches on mobile devices.',
        status: 'fail',
      },
    ],
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  // language options
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  return (
    <>
      <div className="site-grade">
        <header className="header flex flex-col md:flex-row items-center justify-between p-4 bg-white text-white rounded-xl">
          <div className="header-logo flex items-center space-x-2" >
            <span><img src="../public/newlogo.png" alt="" className="h-20 w-30 md:h-18 md:w-18 transition-transform duration-300 hover:scale-110" /></span>
            
          </div>
          <div className="relative inline-block mt-4 md:mt-0">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button className="flex items-center space-x-2 rounded-3xl border-2 border-gray-400 px-4 py-2 bg-gray-700 text-white font-medium transition-colors duration-300 hover:bg-gray-600" onClick={handleHomeClick} variant="outlie">Home</button>
            <button
              className="flex items-center space-x-2 rounded-3xl border-2 border-gray-400 px-4 py-2 bg-gray-700 text-white font-medium transition-colors duration-300 hover:bg-gray-600"
              onClick={() => setShowLanguageOptions(!showLanguageOptions)}
            >
              English <span className="icon icon-angle-down"></span>
            </button>
            </div>
            {showLanguageOptions && (
              <ul className="absolute bg-white border rounded-md mt-2 w-40 shadow-lg">
                <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/de/" className="text-black">Deutsch</a></li>
                <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/" className="text-black flex items-center"><span className="icon icon-check mr-2"></span> English</a></li>
                <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/es/" className="text-black">Español</a></li>
                <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/fr/" className="text-black">Français</a></li>
                <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/ja/" className="text-black">日本語</a></li>
                <li className="p-2 hover:bg-gray-100 transition-colors duration-300"><a href="https://website.grader.com/pt/" className="text-black">Português</a></li>
              </ul>
            )}
          </div>
        </header>

        <main className="main-content p-4">
          <h1 className="status-title text-2xl font-bold mb-2 text-center">This site is OK</h1>
          <p className="status-description mb-4 text-center">
            Not too shabby. Let’s see how we can bump up that score a bit. See your scorecard below
            and take action now by creating a high-speed website with HubSpot CMS Free.
          </p>
          <div className="mb-4 flex justify-center"><button className="cta-button bg-blue-600 text-white py-2 px-4 rounded-md transition-transform duration-300 hover:scale-105">Create a high-speed website</button></div>

          <div className="website-preview border rounded-lg overflow-hidden shadow-lg mb-4">
            <div className="browser-header flex items-center space-x-1 p-2 bg-gray-200">
              <div className="browser-dot bg-red-500 w-3 h-3 rounded-full"></div>
              <div className="browser-dot bg-yellow-500 w-3 h-3 rounded-full"></div>
              <div className="browser-dot bg-green-500 w-3 h-3 rounded-full"></div>
            </div>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.vilK3CSw7dyAH24xP8ry4wHaE8&pid=Api&P=0&h=180"
              alt=" Website Preview"
              className="website-image w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </main>
      </div>
<div className="p-4 flex justify-center"><img src="//static.hsappstatic.net/ui-images/static-2.696/optimized/design-manager.svg" alt="" /></div>
      <div className="p-4"><PerformanceWrapper/></div>
      <FeatureList />
      <div className='p-4 flex justify-center'><img src="//static.hsappstatic.net/ui-images/static-2.696/optimized/global.svg" alt="" /></div>
      <SEOWrapper />
      <div className='p-4 flex justify-center'><img src="//static.hsappstatic.net/ui-images/static-2.696/optimized/mobile-onboarding-powering-up.svg" alt="" /></div>
      <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center mt-5 rounded-xl">
        <MobileWrapper score={mobileData.score} features={mobileData.features} />
      </div>
      <div className='p-4 flex justify-center'><img src="//static.hsappstatic.net/ui-images/static-2.696/optimized/add-on-ssl.svg" alt="" /></div>
      <div className="min-h-screen  flex flex-col items-center justify-center mt-4 rounded-xl">
        <SecurityWrapper />
      </div>
      <div className='mt-8'><Lcontent /></div>
      <div className="mt-8"><Content /></div>
    </>
  );
};

export default SiteGrade;