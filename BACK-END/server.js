import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

// ES Module equivalents for __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === 'production') {
    // Correctly resolve the path to FRONT-END/dist relative to BACK-END/server.js
    const frontEndDistPath = path.join(__dirname, '..', 'FRONT-END', 'dist');
    app.use(express.static(frontEndDistPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(frontEndDistPath, 'index.html'));
    });
}

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
            console.log(`Server started at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();
