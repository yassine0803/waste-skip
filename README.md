# Waste Skip Booking Application

A modern, responsive React application for selecting and booking waste skip containers. Built with React 19, Vite, and Tailwind CSS, this single-page application provides an intuitive interface for users to browse available skip sizes, view pricing, and make selections through an elegant bottom bar interface.

## 🚀 Features

- **Interactive Skip Selection**: Click on skip cards to view details and pricing
- **Dynamic Bottom Bar**: Contextual bottom bar that appears when a skip is selected
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Modern UI**: Clean, gradient-enhanced interface with smooth animations
- **State Management**: Centralized state management using React Context API

## 📁 Project Structure

```
waste-skip/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── BottomBar.jsx  # Selection interface with Back/Continue buttons
│   │   ├── SkipCard.jsx   # Individual skip display cards
│   │   └── SkeletonCard.jsx # Loading placeholders
│   ├── context/           # State management
│   │   └── SkipSelectionContext.jsx # Central state for skip selection
│   ├── hooks/             # Custom React hooks
│   │   └── useSkips.js    # Skip data fetching logic
│   ├── pages/             # Page-level components
│   │   └── ChooseSkipPage.jsx # Main page displaying skip options
│   ├── services/          # API and data services
│   │   └── skipService.js # Skip data retrieval functions
│   ├── config/            # Configuration files
│   │   └── axiosConfig.js # HTTP client setup
│   ├── App.jsx           # Root component with context providers
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and Tailwind imports
├── .env                  # Environment variables
├── .gitignore           # Git ignore patterns
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration for Tailwind
├── vite.config.js       # Vite build configuration
└── README.md           # This file
```

## 🏗️ How It Works

### Context-Based State Management

The application uses React's Context API for state management, centered around the `SkipSelectionContext`. This approach eliminates prop drilling and provides a clean way to share selected skip information across components.

**Key Context Features:**
- `selectedSkip`: Stores the currently selected skip object
- `selectSkip()`: Function to set a new skip selection
- `clearSelection()`: Function to reset the selection
- `isBottomBarVisible`: Boolean indicating whether the bottom bar should be displayed

### Component Hierarchy

```
App (SkipSelectionProvider)
├── ChooseSkipPage
│   └── SkipCard (multiple instances)
└── BottomBar (conditionally rendered)
```

### User Flow

1. **Browse Skips**: Users see a grid of available skip containers with sizes and pricing
2. **Make Selection**: Clicking a skip card triggers the context to update the selected skip
3. **Bottom Bar Appears**: The bottom bar slides up from the bottom with selection details
4. **Action Buttons**: Users can either go "Back" (clear selection) or "Continue" (proceed with booking)

### Bottom Bar Behavior

The `BottomBar` component uses absolute positioning and appears at the bottom of the screen when a skip is selected. It features:

- **Responsive Layout**: Different layouts for mobile and desktop views
- **Selection Display**: Shows the selected skip's size and price
- **Action Buttons**: Back button to clear selection, Continue button for next steps
- **Smooth Animations**: Slide-in animations and backdrop blur effects

## 🛠️ Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yassine0803/waste-skip.git
   cd waste-skip
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

4. **Preview build on netlify**
   Navigate to `https://storied-peony-88fe27.netlify.app`

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## 🎨 Styling and Design

The application uses **Tailwind CSS** for styling, providing:

- **Utility-First Approach**: Rapid development with utility classes
- **Responsive Design**: Mobile-first responsive breakpoints
- **Modern Aesthetics**: Gradients, shadows, and smooth transitions
- **Consistent Spacing**: Systematic spacing and typography scales

### Key Design Elements

- **Gradient Backgrounds**: Blue to indigo gradients for visual appeal
- **Card-Based Layout**: Clean card interfaces for skip display
- **Interactive States**: Hover and active states for better user feedback
- **Backdrop Effects**: Blur effects for modal-like bottom bar experience

## 🔧 Configuration

### Vite Configuration

The project uses Vite for fast development and optimized builds:
- Hot Module Replacement (HMR) for instant updates
- Optimized production builds
- Modern JavaScript features support

### Tailwind Configuration

This project uses **Tailwind CSS v4** with the modern `@tailwindcss/vite` plugin approach. Tailwind is configured through:
- `postcss.config.js` - PostCSS configuration that integrates Tailwind CSS
- `@tailwindcss/vite` plugin in the Vite setup
- Direct CSS imports in `src/index.css`

This setup provides:
- Zero-config Tailwind CSS integration
- Automatic CSS purging for production builds
- Modern CSS features and optimizations

## 🚀 Deployment

To deploy the application:

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting provider

**Built with ❤️ using React, Vite, and Tailwind CSS**
