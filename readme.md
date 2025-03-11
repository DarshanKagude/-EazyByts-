# Portfolio Website with CMS

This project is a full-stack portfolio website with a Content Management System (CMS), built using React, Node.js, Express.js, and MongoDB.

## Features

* **Dynamic Portfolio:** Showcase your projects, skills, and achievements.
* **CMS Integration:** Easily manage and update content through an intuitive interface.
* **User Authentication:** Secure access to the CMS dashboard.
* **Responsive Design:** Compatible across various devices and browsers.
* **Blog Section:** Share your thoughts and insights through blog posts.
* **Contact Form:** Allow visitors to easily contact you.
* **Theme Customization:** Personalize the appearance of your portfolio.
* **Email Notifications:** Receive email notifications for contact form inquiries.

## Technologies

* **Frontend:**
    * React.js
    * HTML
    * CSS
    * JavaScript
    * Axios
    * React Router
* **Backend:**
    * Node.js
    * Express.js
    * MongoDB
    * Mongoose
    * JSON Web Tokens (JWT)
    * bcryptjs
    * nodemailer
    * cors
    * dotenv
* **Development:**
    * npm
    * nodemon
    * concurrently

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd portfolio-website
    ```

2.  **Install dependencies:**

    ```bash
    npm run install-all
    ```

3.  **Create a `.env` file:**

    * In the root directory, create a `.env` file and add the following environment variables:

        ```
        PORT=5000
        MONGODB_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        EMAIL_USER=your_email_user
        EMAIL_PASS=your_email_pass
        ```

    * Replace the placeholder values with your actual data.

4.  **Run the application in development mode:**

    ```bash
    npm run dev
    ```

5.  **Build for production:**

    ```bash
    npm run build
    npm run start
    ```

## Project Structure