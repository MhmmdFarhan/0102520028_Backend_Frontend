import express, { Request, Response } from "express";
import cors from "cors";
import app from "./app";

const PORT = 3000;

app.use(cors());
app.use(express.json());

// Endpoint 1
app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    service: "Express CRUD API",
  });
});

// Endpoint 2
app.get("/profile", (req: Request, res: Response) => {
  res.json({
    nama: "Muhamad Farhan",
    umur: 24,
    pekerjaan: "Mahasiswa",
  });
});

// Endpoint 3
app.get("/about", (req: Request, res: Response) => {
  res.json({
    aplikasi: "Latihan Express TypeScript",
    versi: "1.0.0",
    deskripsi: "API sederhana untuk tugas pertemuan 1",
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});