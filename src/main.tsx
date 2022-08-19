import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// import 'antd/dist/antd.css';
// import 'react-antd-ts/node_modules/antd/dist/antd.css';
// import 'react-antd-ts/dist/layouts/AdminLayout/AdminLayout.css';

import  { AdminLayout }  from 'react-antd-ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AdminLayout>
      <App></App>
    </AdminLayout>
  </React.StrictMode>
)
