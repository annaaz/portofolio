const crypto = require("crypto");
const express = require("express");

const PORT = process.env.PORT || 3000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mock in-memory store. Seeded with one existing user.
const users = [
  {
    id: "user-1",
    name: "Alice Example",
    email: "alice@example.com",
    passwordHash: hashPassword("password123"),
    createdAt: "2026-01-01T00:00:00.000Z",
  },
];

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function normalizeEmail(email) {
  return String(email).trim().toLowerCase();
}

function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

function validateRegistration(body) {
  const errors = [];

  if (body == null || typeof body !== "object" || Array.isArray(body)) {
    return ["Request body must be a JSON object"];
  }

  const name = typeof body.name === "string" ? body.name.trim() : body.name;
  const email = typeof body.email === "string" ? body.email.trim() : body.email;
  const password = body.password;

  if (typeof name !== "string" || name.length < 2) {
    errors.push("name must be a string with at least 2 characters");
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    errors.push("email must be a valid email address");
  }

  if (typeof password !== "string" || password.length < 8) {
    errors.push("password must be a string with at least 8 characters");
  }

  return errors;
}

const app = express();

app.use(express.json());

app.post("/api/users/register", (req, res, next) => {
  try {
    const errors = validateRegistration(req.body);

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: errors,
      });
    }

    const name = req.body.name.trim();
    const email = normalizeEmail(req.body.email);
    const password = req.body.password;

    if (findUserByEmail(email)) {
      return res.status(409).json({
        success: false,
        error: "Email already exists",
      });
    }

    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      passwordHash: hashPassword(password),
      createdAt: new Date().toISOString(),
    };

    users.push(user);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Not found",
  });
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  if (error instanceof SyntaxError && "body" in error) {
    return res.status(400).json({
      success: false,
      error: "Invalid JSON payload",
    });
  }

  console.error(error);

  return res.status(500).json({
    success: false,
    error: "Internal server error",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

module.exports = app;
