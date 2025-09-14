# React Series Tracker

A simple React application for tracking learning series with basic CRUD operations and routing. **Designed to be completed in 1-1.5 hours.**

## Problem Statement

Create a **React Series Tracker App** - a minimal application for managing learning series with the following features:

### Core Requirements (1-1.5 hour project)

1. **Homepage with Basic CRUD Operations**
   - Display list of learning series (e.g., "Vanilla JS", "React Basics", "CSS Grid")
   - Each series shows: **name and star rating (1-5) only**
   - **Add new series** with a simple form (name + rating)
   - **Delete series** with confirmation dialog
   - Click on any series navigates to detailed view

2. **Details Page with Nested API Calls**
   - Route: `/details/:id` (URL should change)
   - Make two dependent API calls:
     - First: `getAllSeries()` - 2 second delay
     - Second: `getSeriesById(id)` - 1.5 second delay
   - Display only: ID, series name, and star rating
   - Back button to return to homepage

3. **Simple Form Component**
   - Modal form for adding new series
   - Only 2 fields: **Series Name** and **Rating (1-5)**
   - Students need to integrate the form functionality with state management

4. **Technical Implementation**
   - React Router for navigation (URLs must change)
   - Basic useState for state management
   - Mock APIs with realistic delays (1s - 3s)
   - Async/await for API calls with loading states
   - Star rating display system (1-5 stars)
   - Simple CSS for basic styling

### Simplified Data Structure
```javascript
// Basic series data - keep it simple!
[
  { id: 1, name: 'Vanilla JS', rating: 4 },
  { id: 2, name: 'React Basics', rating: 5 },
  { id: 3, name: 'CSS Grid', rating: 3 }
]
```

### What Students Need to Build
- **CRUD Operations**: Create, Read, Delete functionality
- **Form Integration**: Connect the provided form component to add new series
- **State Management**: Manage series list state with async operations
- **Router Setup**: Implement navigation between pages
- **API Integration**: Handle async calls with loading states
- **Basic Styling**: Make it look presentable

### API Functions Provided
```javascript
// Mock API with realistic delays
api.getAllSeries()     // 3 second delay
api.getSeriesById(id)  // 2 second delay  
api.createSeries(data) // 1 second delay
api.deleteSeries(id)   // 1 second delay
```

### Demo Component
- `SimpleDemo.js` - A complete working example showing the structure
- Form component is ready-to-use, students just need to integrate functionality
- Minimal complexity, maximum learning value

## Features Implemented

✅ **React App Structure**
- Clean component architecture
- Proper file organization

✅ **Routing**
- Home page (`/`) - Series list with CRUD
- Details page (`/details/:id`) - Individual series details

✅ **Context API**
- Global state management
- Actions for all CRUD operations
- Loading and error states

✅ **Mock APIs with Delays**
- `getAllSeries()` - 3 second delay
- `getSeriesById(id)` - 2 second delay  
- `createSeries()` - 1.5 second delay
- `updateSeries()` - 1.5 second delay
- `deleteSeries()` - 1 second delay

✅ **CRUD Operations**
- ➕ Create new series with form modal
- 📖 Read/display series list and details
- ✏️ Update existing series
- 🗑️ Delete series with confirmation

✅ **Nested API Calls**
- Details page first loads all series
- Then immediately fetches specific series details
- Demonstrates dependent promise pattern

✅ **UI/UX Features**
- Star rating display (★★★★☆)
- Progress bars for completion percentage
- Loading spinners during API calls
- Error handling and display
- Responsive design
- Modal forms for create/edit

## Installation & Setup

1. **Install Dependencies**
   ```bash
   cd react-series-tracker
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Browser**
   - Navigate to `http://localhost:3000`
   - App will automatically reload on file changes

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SeriesForm.js   # Modal form for create/edit
│   └── LoadingSpinner.js # Loading indicator
├── context/            # State management
│   └── SeriesContext.js # Global context provider
├── pages/              # Route components
│   ├── HomePage.js     # Main series list
│   └── DetailsPage.js  # Series details view
├── services/           # API layer
│   └── api.js          # Mock API functions
├── App.js              # Main app with routing
├── App.css             # Global styles
└── index.js            # React entry point
```

## Learning Concepts Demonstrated

### 1. **React Hooks**
- `useState` for local component state
- `useEffect` for side effects and API calls
- `useContext` for consuming global state
- `useReducer` for complex state management
- `useParams` and `useNavigate` for routing

### 2. **State Management Patterns**
- Context API with useReducer
- Global state vs local state decisions
- Action-based state updates
- Loading and error state handling

### 3. **Async Programming**
- Promise chains and async/await
- Dependent API calls (nested promises)
- Error handling in async operations
- Loading states during API calls

### 4. **React Router**
- Route configuration
- Dynamic route parameters
- Programmatic navigation
- Route-based component rendering

### 5. **Component Architecture**
- Container vs Presentational components
- Props passing and component composition
- Modal components and overlays
- Form handling and validation

## API Endpoints (Mock)

All APIs include realistic delays to simulate network requests:

| Endpoint | Method | Delay | Description |
|----------|--------|-------|-------------|
| `getAllSeries()` | GET | 3s | Fetch all learning series |
| `getSeriesById(id)` | GET | 2s | Fetch specific series details |
| `createSeries(data)` | POST | 1.5s | Create new series |
| `updateSeries(id, data)` | PUT | 1.5s | Update existing series |
| `deleteSeries(id)` | DELETE | 1s | Delete series |

## Usage Guide

1. **View Series**: Homepage displays all learning series with ratings and progress
2. **Add Series**: Click "Add New Series" to create a new learning track
3. **Edit Series**: Click "Edit" on any series card to modify details
4. **Delete Series**: Click "Delete" with confirmation prompt
5. **View Details**: Click "View Details" to see comprehensive series information
6. **Navigate**: Use browser back button or "Back to Home" button

## Student Learning Path

This project is designed for students to understand:

1. **Basic Setup** - Project structure and dependencies
2. **Component Creation** - Building reusable UI components  
3. **State Management** - Context API vs local state
4. **API Integration** - Async operations and error handling
5. **Routing** - Navigation between pages
6. **Form Handling** - Create and update operations
7. **UI/UX** - Loading states, error handling, responsive design

## Customization Ideas

Students can extend this project by:
- Adding user authentication
- Implementing real backend API
- Adding drag-and-drop reordering
- Including progress tracking timestamps
- Adding series categories/tags
- Implementing search and filtering
- Adding data persistence (localStorage)
- Including progress charts/analytics

## License

This project is created for educational purposes and is free to use and modify.
