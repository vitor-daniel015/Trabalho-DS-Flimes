import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

admin.initializeApp({
    credential: admin.credential.cert("./ds-atividade-firebase-adminsdk-fbsvc-e4051963b7.json")
});

const db = admin.firestore();

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTdhMTFiNGJjYzk1YzA1MWNjZTBkNTI2YTJkMzQxYSIsIm5iZiI6MTc2MzkyMjQ1Ni40OTgsInN1YiI6IjY5MjM1MjE4M2UyZGJhN2NiOTk1OGE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1xon_cKC0XuRMfxg1-Aigg-N-yAiEhOxeKHRzMfj5iE";

const PORT = 8080;

app.get("/api/tmdb/popular", async (req, res) => {
    try {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=pt-BR",
            {
                headers: {
                    Authorization: `Bearer ${TMDB_TOKEN}`
                }
            }
        );

        const data = await response.json();
        res.json(data.results || []);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/tmdb/search", async (req, res) => {
    try {
        const q = req.query.q;

        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${q}&language=pt-BR`,
            {
                headers: {
                    Authorization: `Bearer ${TMDB_TOKEN}`
                }
            }
        );

        const data = await response.json();
        res.json(data.results || []);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/api/register", async (req, res) => {
    try {
        const user = req.body;
        await db.collection("users").add(user);
        res.json({ message: "Cadastro efetuado com sucesso!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/users", async (req, res) => {
    try {
        const snapshot = await db.collection("users").get();
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});
