const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let contacts = [
    { name: "Zaid", role: "Developer" },
    { name: "Friend", role: "Partner" }
];

app.get('/', (req, res) => {
    res.send(`
        <div style="background-color: #1a1a2e; color: #fff; font-family: sans-serif; text-align: center; padding: 50px; height: 100vh;">
            <h1 style="color: #ff007f; font-size: 3rem;">Chill Hub</h1>
            <p style="font-size: 1.2rem;">Your custom contact keeper is officially online!</p>
            
            <div style="background: rgba(255,255,255,0.1); display: inline-block; padding: 20px; border-radius: 10px; margin-top: 20px;">
                <h3>Active Team Members:</h3>
                <ul style="list-style: none; padding: 0; text-align: left; font-size: 1.1rem;">
                    ${contacts.map(c => `<li>🔥 <strong>c.name</strong> - {c.role}</li>`).join('')}
                </ul>
            </div>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});
