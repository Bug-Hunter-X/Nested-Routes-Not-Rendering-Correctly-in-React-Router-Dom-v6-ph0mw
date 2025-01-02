```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <div>Home</div>;}
function About() { return <div>About</div>;}
function NotFound() {
  const location = useLocation();
  // Check if the current route is truly not found or if nested routes are interfering
  console.log(location.pathname);
  if (location.pathname !== '/' && location.pathname !== '/about') {
    return <div>Not Found</div>;
  } else {
    return null; // Do not render anything when a valid route is present
  }
}
export default App;
```