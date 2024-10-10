# Full Stack Ecommerce - Nextjs

This repository hosts the source code for an eCommerce platform built with Next.js, TypeScript, MongoDB, and Tailwind CSS. The application features an Admin panel for managing products and a User panel for a seamless shopping experience.

## Demo

- Live Preview: [https://ecommerce-nextjs-by-shan.vercel.app/](https://ecommerce-nextjs-by-shan.vercel.app/)

## Features

- Admin panel for viewing, creating, editing, and deleting products
- User-friendly landing page to browse products
- Add/remove items from the cart
- Cart popup displaying items and total amount
- User authentication with NextAuth
- UploadThings integration for file uploads
- Responsive design with Tailwind CSS
- Global state management using Redux Toolkit for managing cart and user authentication state

## Screenshots

![Home](https://i.ibb.co/RBrdM5y/ecommerce-1.png)
- Home Page

![Products](https://i.ibb.co/fkh1Czw/ecommerce-2.png)
- Products Section

![Cart](https://i.ibb.co/fH6wCLP/ecommerce-3.png)
- Cart Popup

![Admin](https://i.ibb.co/N3psZMT/ecommerce-4.png)
- Admin Products

![Add Product](https://i.ibb.co/myfzGKX/ecommerce-5.png)
- Admin Add Products
  
## Run Locally

Clone the project

```bash
    https://github.com/Mshandev/ecommerce-nextjs.git
```
Go to the project directory

```bash
    cd ecommerce-nextjs
```
Install dependencies

```bash
    npm install
```

Setup Environment Vaiables

```Make .env file in "root" folder and store environment Variables
  CLIENT_ID = YOUR-GOOGLE-CLIENT-ID
  CLIENT_SECRET = YOUR-GOOGLE-CLIENT-SECRET
  NEXTAUTH_SECRET = YOUR-NEXT-AUTH-SECRET
  MONGO_URI = YOUR-MONGO-URL
  UPLOADTHING_TOKEN = YOUR-UPLOADTHINGS-URL
 ```

Start the server

```bash
    npm run dev
```

## Tech Stack
* [Nextjs](https://nextjs.org/)
* [Mongodb](https://www.mongodb.com/)
* [UploadThings](https://uploadthing.com/)
* [Redux-Toolkit](https://redux-toolkit.js.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Tailwind](https://tailwindcss.com/)
* [Next-Auth](https://next-auth.js.org/)

## Deployment

The application is deployed on Vercel.

## Contributing

Contributions are always welcome!
Just raise an issue, and we will discuss it.

## Feedback

If you have any feedback, please reach out to me [here](https://www.linkedin.com/in/muhammad-shan-full-stack-developer/)
