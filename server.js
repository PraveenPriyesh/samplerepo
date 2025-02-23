const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use dynamic port for Render

app.use(express.json());

const sampleData = {
    "Function": "TestingData"
};

// Corrected API Route
app.get('/api/sampleData', (req, res) => { 
    res.json(sampleData);
});

// Start Server
app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});
