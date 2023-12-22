# Project Title

## Description

This project is a comprehensive backend system built using Node.js, Express, and MongoDB. It provides functionalities to manage user authentication, file uploads, and associated details.

### Features

- **User Authentication**: Utilizes JWT for secure user registration, login, logout, and profile management. Passwords are securely hashed using bcrypt.
- **User Profile**: Allows users to register with a unique email, username, and an avatar uploaded to Cloudinary.
- **Upload Management**: Offers functionalities to create, update, delete, and retrieve file uploads associated with specific users. Each upload can have multiple files with respective details.
- **File Details Management**: Enables users to create, update, and delete details associated with files uploaded. These details include name, description, and timestamp.

### Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database used to store user and upload-related data.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JWT (JSON Web Tokens)**: Used for secure authentication.
- **Bcrypt**: Library for hashing passwords securely.
- **Cloudinary**: Cloud-based image and video management service used for avatar uploads.
- For API endpoints and examples, refer to the [Postman Collection]([link-to-your-postman-collection](https://universal-star-350473.postman.co/workspace/New-Team-Workspace~e0c863f1-62ad-4bfc-9e5c-9f0a990ce90c/collection/30678801-96798a37-d454-438f-b8e4-bb5211d8d492?action=share&creator=30678801)).

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB database set up
- Cloudinary API credentials

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/your-username/repository-name.git
    ```

2. Install dependencies

    ```bash
    cd repository-name
    npm install
    ```

3. Set up environment variables

    - Create a `.env` file based on the provided `.env.example` and add necessary credentials.

4. Start the server

    ```bash
    npm start
    ```

### Usage

- **User Registration**: Send a POST request to `/api/user/register` with username, email, and password.
- **User Login**: Send a POST request to `/api/user/login` with email and password. This returns a token for authentication.
- **Upload Management**: Access endpoints in `/api/upload` for creating, updating, and retrieving uploads and associated details.
- **User Profile Update**: Send a PUT request to `/api/user/:id` with updated username and avatar for profile modification.

### Endpoints

**User Routes:**

- `/api/user/register`: Register a new user.
- `/api/user/login`: Log in a user.
- `/api/user/logout`: Log out the user.
- `/api/user/getById/:id`: Get user details by ID.
- `/api/user/:id`: Update user details.

**Upload Routes:**

- `/api/upload/:userId`: Create a new upload.
- `/api/upload/create/:uploadId/:fileId`: Create details for a file in an upload.
- `/api/upload/update/:uploadId/:fileId/:detailId`: Update details for a file in an upload.
- `/api/upload/delete/:uploadId/:fileId/:detailId`: Delete details for a file in an upload.
- `/api/upload/getAll/:userId`: Get all uploads by user ID.
- `/api/upload/files/:uploadId`: Get files by upload ID.
- `/api/upload/details/:uploadId/:fileId`: Get details by file ID in an upload.

### Contributing

Feel free to contribute by opening issues or pull requests. Follow the existing code style and guidelines.

### License

This project is licensed under the MIT License.
