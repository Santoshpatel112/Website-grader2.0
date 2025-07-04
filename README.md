# Website Grader 

A comprehensive web application that analyzes website performance, SEO, security, and mobile responsiveness using Google's PageSpeed Insights API. Built with React, Vite, and modern web technologies.

## 🌟 Features

### Core Analysis Capabilities
- **Performance Analysis**: Real-time website speed and performance metrics
- **SEO Evaluation**: Search engine optimization assessment and recommendations
- **Security Audit**: Security best practices and vulnerability checks
- **Mobile Responsiveness**: Mobile-friendly design and accessibility testing
- **Accessibility Testing**: WCAG compliance and user accessibility features

### User Experience Features
- **Multi-language Support**: English and German translations with extensible language system
- **Real-time Analysis**: Instant website grading with detailed reports
- **Email Notifications**: Automated email delivery of analysis results
- **Interactive Scorecards**: Visual performance indicators and progress tracking
- **Responsive Design**: Mobile-first approach with modern UI/UX

### Technical Features
- **Google PageSpeed API Integration**: Leverages Google's Lighthouse for accurate analysis
- **EmailJS Integration**: Automated email delivery system
- **Context API**: Global state management for performance data
- **React Router**: Single-page application with smooth navigation
- **Tailwind CSS**: Modern, utility-first styling framework

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Google PageSpeed Insights API key (optional, for production)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Website-grader2.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
Website-grader2.0/
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   ├── WebsiteGrader.jsx # Main analysis component
│   │   ├── Lighthouse.jsx   # Results display component
│   │   ├── SiteGrade.jsx    # Detailed site grading
│   │   ├── PerformanceWrapper.jsx # Performance analysis
│   │   ├── SEOWrapper.jsx   # SEO analysis
│   │   ├── MobileWrapper.jsx # Mobile responsiveness
│   │   ├── SecurityWrapper.jsx # Security analysis
│   │   ├── Contact.jsx      # Contact form
│   │   └── Servicepage.jsx  # Services page
│   ├── Context/
│   │   └── context.jsx      # React Context for state management
│   ├── hooks/
│   │   └── use-toast.js     # Custom toast notifications
│   ├── lib/
│   │   └── utils.js         # Utility functions
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js          # Vite build configuration
```

## 🎯 Key Components

### WebsiteGrader.jsx
The main analysis component that:
- Accepts website URLs for analysis
- Integrates with Google PageSpeed Insights API
- Provides multi-language support (English/German)
- Sends analysis results via email
- Navigates to detailed results page

### Lighthouse.jsx
Results display component featuring:
- Comprehensive score visualization
- Performance metrics breakdown
- Interactive progress indicators
- Contact information integration
- Navigation back to analysis

### SiteGrade.jsx
Detailed site grading component with:
- Performance analysis with metrics
- SEO feature evaluation
- Mobile responsiveness testing
- Security assessment
- Actionable improvement recommendations

### Performance Wrappers
Specialized components for different analysis areas:
- **PerformanceWrapper**: Speed and loading metrics
- **SEOWrapper**: Search engine optimization features
- **MobileWrapper**: Mobile-friendly design testing
- **SecurityWrapper**: Security best practices

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Google PageSpeed Insights API Key (optional)
VITE_GOOGLE_PAGESPEED_API_KEY=your_api_key_here

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### API Integration
The application uses Google's PageSpeed Insights API for website analysis. The API endpoint is:
```
https://www.googleapis.com/pagespeedonline/v5/runPagespeed
```

## 📊 Analysis Categories

### Performance Metrics
- **Page Speed**: Loading time analysis
- **Page Size**: Total resource size
- **Page Requests**: Number of HTTP requests
- **Performance Score**: Overall performance rating (0-100)

### SEO Analysis
- **Meta Descriptions**: Search result descriptions
- **Indexing Permissions**: Search engine access
- **Content Optimization**: Content quality assessment
- **Link Structure**: Internal and external linking

### Mobile Responsiveness
- **Responsive Design**: Mobile-friendly layout
- **Tap Targets**: Touch-friendly interactive elements
- **Font Sizes**: Readable text on mobile devices
- **Viewport Configuration**: Mobile viewport settings

### Security Assessment
- **HTTPS Implementation**: Secure connection verification
- **JavaScript Libraries**: Outdated library detection
- **Security Headers**: Security header analysis
- **Best Practices**: Security best practices compliance

## 🌐 Multi-language Support

The application supports multiple languages with a translation system:

```javascript
const translations = {
  en: {
    title: "Website Grader",
    subtitle: "Grade your website in seconds...",
    // ... more translations
  },
  de: {
    title: "Website Grader",
    subtitle: "Bewerten Sie Ihre Website in Sekunden...",
    // ... German translations
  }
};
```

## 📧 Email Integration

The application uses EmailJS for automated email delivery:

- **Analysis Results**: Sends comprehensive analysis reports
- **Contact Form**: Handles user inquiries and feedback
- **Template System**: Customizable email templates
- **Error Handling**: Robust error handling for email delivery

## 🎨 UI/UX Features

### Design System
- **Tailwind CSS**: Utility-first styling
- **Shadcn/ui Components**: Modern, accessible UI components
- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: Theme support (configurable)

### Interactive Elements
- **Progress Indicators**: Visual score representation
- **Hover Effects**: Enhanced user interaction
- **Loading States**: Smooth loading animations
- **Toast Notifications**: User feedback system

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Netlify Deployment
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables

### GitHub Pages
```bash
npm install gh-pages --save-dev
npm run build
npm run deploy
```

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- ESLint configuration for code quality
- Prettier for code formatting
- React best practices
- Component-based architecture

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: santoshpatelvns5@gmail.com
- **Phone**: +91 8467941850
- **Twitter**: [@Santoshp3259330](https://x.com/Santoshp3259330)

## 🙏 Acknowledgments

- Google PageSpeed Insights API for website analysis
- EmailJS for email integration
- React and Vite for the development framework
- Tailwind CSS for styling
- Shadcn/ui for UI components
- Lucide React for icons

---

**Website Grader 2.0** - Empowering website owners with comprehensive performance analysis and actionable insights.
