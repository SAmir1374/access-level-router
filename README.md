![npm](https://img.shields.io/npm/v/access-level-router)
![license](https://img.shields.io/npm/l/access-level-router)
![issues](https://img.shields.io/github/issues/your-username/access-level-router)
[View on GitHub](https://github.com/SAmir1374/access-level-router)

کتابخانه مدیریت دسترسی
این کتابخانه ابزاری برای مدیریت دسترسی کاربران در برنامه‌های React ارائه می‌دهد. با استفاده از این کتابخانه، می‌توانید مسیرهای محافظت‌شده را براساس نقش کاربران و سطح دسترسی گروه‌ها پیکربندی کنید. این ابزار مناسب برنامه‌هایی است که نیاز به مدیریت پیچیده نقش‌ها و مسیرها دارند.

ویژگی‌ها
مدیریت مسیرهای محافظت‌شده
قابلیت کنترل دسترسی براساس نقش و گروه کاربران
پشتیبانی از React Router
نصب
برای نصب این کتابخانه، از دستور زیر استفاده کنید:

npm install access-level-router

yarn add access-level-router


استفاده
نمونه‌ای از استفاده در یک برنامه React: 


import React from 'react';
import { AccessLvlProvider } from 'your-library-name';

function App() {
  const routes = [
    {
      pageUrl: '/dashboard',
      isPublic: false,
      roles: ['admin', 'editor'],
      groupRoles: ['manager'],
      component: () => <div>Dashboard</div>,
    },
  ];

  return (
    <AccessLvlProvider
      routers={routes}
      hasToken={true}
      userRole={['admin']}
      groupRoles={['manager']}
      navigateIfNoTokenURL="/login"
    >
      <div>محصول شما اینجاست</div>
    </AccessLvlProvider>
  );
}

export default App;
  


Access Management Library
This library provides tools to manage user access in React applications. With it, you can configure protected routes based on user roles and group access levels. It's ideal for applications requiring complex role and route management.

Features
Protected route management
Access control based on user roles and groups
Compatible with React Router
Installation
To install this library, use the following command:

npm install access-level-router

yarn add access-level-router



Usage
Here’s an example of how to use it in a React app:

tsx
Copy code



import React from 'react';
import { AccessLvlProvider } from 'your-library-name';

function App() {
  const routes = [
    {
      pageUrl: '/dashboard',
      isPublic: false,
      roles: ['admin', 'editor'],
      groupRoles: ['manager'],
      component: () => <div>Dashboard</div>,
    },
  ];

  return (
    <AccessLvlProvider
      routers={routes}
      hasToken={true}
      userRole={['admin']}
      groupRoles={['manager']}
      navigateIfNoTokenURL="/login"
    >
      <div>Your content goes here</div>
    </AccessLvlProvider>
  );
}

export default App;


