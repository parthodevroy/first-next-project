# My First Next.js Project
Developer Website
## live link  ==
https://first-next-project-bice.vercel.app/

##  Project Description
This is a **Next.js 16 + Firebase Authentication** project built with React, TailwindCSS, and DaisyUI.  
The app includes:

- User registration & login using Firebase Auth
- Responsive UI with Hero section and Card layouts
- Dynamic routing for product pages
- Client-side authentication flow
- Smooth animations (can integrate Framer Motion)

---

## 🛠 Setup & Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd my-first-next
## 2.**
npm install
## 3.**
NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
NEXT_PUBLIC_FIREBASE_APP_ID=<your-app-id>
## 4
npm run dev
## 5.**
npm run build
npm start
## 6**
| Route            | Type    | Description                         |
| ---------------- | ------- | ----------------------------------- |
| `/`              | Public  | Home page with Hero & Card sections |
| `/register`      | Public  | User registration page              |
| `/login`         | Public  | User login page                     |
| `/products`      | Public  | Products listing page               |
| `/products/[id]` | Dynamic | Product detail page based on ID     |
| `/_not-found`    | Static  | Custom 404 page                     |
## 7.......⚡ Technologies Used

Next.js 16 (App Router)

React 19

Firebase Auth

TailwindCSS + DaisyUI

Lucide React Icons

SweetAlert2 (for alerts)

MongoDB (for product data)