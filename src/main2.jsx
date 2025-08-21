import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import 'antd/dist/reset.css';  // Ant Design 스타일 초기화

// import App from './App2.jsx'; // 응용버전
import App from './App2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);