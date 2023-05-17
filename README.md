# Edustipend Node.js Service

This Node.js service provides API endpoints for retrieving comments and posts data from an external API. Follow the instructions below to run the service locally.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
   Replace `<repository-url>` with the URL of your GitHub repository.

2. Navigate to the project directory:
   ```bash
   cd edustipend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the Node.js service:
   ```bash
   npm start
   ```

2. Once the service is running, you can access the following API endpoints:

   - **GET /api/comments**
     - Retrieve comments data from the external API.
     - Optional query parameter:
       - `limit`: Limits the number of items returned in the response. Example: `/api/comments?limit=9` will return only 9 comments.

   - **GET /api/posts**
     - Retrieve posts data from the external API.
     - Optional query parameter:
       - `limit`: Limits the number of items returned in the response. Example: `/api/posts?limit=9` will return only 9 posts.

   Access the endpoints in your web browser or use tools like cURL or Postman to make GET requests to the specified URLs.

   Examples:
   - Retrieve comments: `http://localhost:3000/api/comments`
   - Retrieve limited comments: `http://localhost:3000/api/comments?limit=9`
   - Retrieve posts: `http://localhost:3000/api/posts`
   - Retrieve limited posts: `http://localhost:3000/api/posts?limit=9`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Make sure to replace `<repository-url>` in the instructions with the actual URL of your GitHub repository.

In the README file, I have provided sections for installation, usage, contributing, and license. Feel free to add or modify these sections based on your specific needs.