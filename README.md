# YouTube Clone

A frontend YouTube clone built with React.js, featuring video browsing, search functionality, and video playback pages.

## Features

- **Video Grid**: Browse videos in a responsive grid layout
- **Search Functionality**: Search videos by title or channel
- **Category Filtering**: Filter videos by categories
- **Video Player Page**: Dedicated page for watching videos with related videos
- **Responsive Design**: Mobile-friendly layout
- **Sidebar Navigation**: Collapsible sidebar with navigation options

## Technologies Used

- **React 19**: Modern React with hooks
- **React Router**: Client-side routing
- **React Icons**: Icon library
- **Vite**: Fast build tool and development server
- **CSS**: Custom styling with responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd youtube-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Top navigation bar
│   ├── Header.css
│   ├── Sidebar.jsx         # Left sidebar navigation
│   ├── Sidebar.css
│   ├── VideoCard.jsx       # Individual video card
│   ├── VideoCard.css
│   ├── VideoGrid.jsx       # Grid of video cards
│   ├── VideoGrid.css
│   ├── CategoryBar.jsx     # Category filter buttons
│   ├── CategoryBar.css
│   ├── VideoPage.jsx       # Video player page
│   └── VideoPage.css
├── data/
│   └── videos.js           # Mock video data
├── App.jsx                 # Main app component
├── App.css                 # Main app styles
├── index.css               # Global styles
└── main.jsx                # App entry point
```

## Features in Detail

### Home Page
- Displays a grid of videos
- Category bar for filtering
- Search functionality in header
- Responsive video cards with thumbnails, titles, and metadata

### Video Page
- Large video player area
- Video details (title, views, upload date)
- Channel information with subscribe button
- Video description
- Related videos sidebar

### Navigation
- Collapsible sidebar with main navigation
- Header with search bar and user actions
- Mobile-responsive design

## Mock Data

The application uses static mock data for demonstration purposes. In a real application, this would be replaced with API calls to a backend service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes only.

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
