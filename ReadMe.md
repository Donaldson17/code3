# Blog Posts Project

This is a simple blog post web application. Users can view a list of posts, see post details, and add new posts. The project uses a local JSON server as a backend.

## Features

- View all blog posts with images and titles
- Click a post to see its details (title, image, content, author)
- Add a new post with a title, content, author, and optional image URL

## Project Structure

```
code3/
├── index.html
├── db.json
├── ReadMe.md
├── css/
│   └── style.css
├── images/
│   ├── benz1.png
│   ├── benz2.png
│   └── benz3.png
└── src/
    └── index.js
```

## Getting Started

1. **Install JSON Server**  
   Make sure you have [JSON Server](https://github.com/typicode/json-server) installed:
   ```
   npm install -g json-server
   ```

2. **Start the Backend**  
   Run the following command in the project directory:
   ```
   json-server --watch db.json --port 3000
   ```

3. **Open the App**  
   Open `index.html` in your browser or use Live Server in VS Code.

## Customization

- Add images to the `images/` folder and use their paths as image URLs.
- Edit `db.json` to add or remove posts manually.

## License

This project is for educational purposes.