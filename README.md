# 🌱 TouchGrass

> An AI whose primary goal is to make you stop using the app.

**TouchGrass** is an AI-powered outdoor quest generator that creates personalized real-world activities based on your time, mood, budget, and preferred difficulty.

The idea is simple:

**Open the app → Generate a quest → Close the app → Go outside. 🌱**

🔗 **Live Demo:** https://touchgrass.adhithyan.org

---

## 🏆 Hacktoberfest 2026 — Week 1

TouchGrass was built as my submission for the [**Hacktoberfest Week 1 "Touch Grass" challenge**](https://dev.to/challenges/hacktoberfest-week1-2026-10-05).

The challenge is about building something with open-source AI at its core while encouraging people to spend more time in the real world.

TouchGrass takes that idea literally.

> **The website's job is to get you off the website.**

---

## ✨ What It Does

Tell TouchGrass:

- ⏱️ How much time you have
- 🌈 Your current mood
- 💰 How much you want to spend
- 🧗 How adventurous you feel

The AI then generates a personalized outdoor quest.

For example:

> **The Stranger**  
> 30 minutes · Free · Easy
>
> Explore somewhere nearby you've never noticed before.  
> Find something you've never noticed, take a photo, and spend a few quiet minutes observing your surroundings.

Once your quest is generated, you're supposed to **close the app and actually do it.**

---

## 🤖 AI & Open Innovation

Unlike applications that send prompts to a proprietary cloud AI API, TouchGrass runs its AI inference on **infrastructure I control**.

The application uses:

- **Ollama** for local model inference
- **Gemma**, an open-weight model
- A self-hosted **Ubuntu home server**
- Docker for deployment
- Cloudflare Tunnel for public access

### Architecture

```text
User
  │
  ▼
touchgrass.adhithyan.org
  │
  ▼
Cloudflare Tunnel
  │
  ▼
Ubuntu Home Server
  │
  ├── TouchGrass
  │      │
  │      ▼
  │   Ollama
  │      │
  │      ▼
  │   Gemma
  │
  └── Other self-hosted services
```

The user's preferences are processed by the self-hosted model instead of being sent to a proprietary AI API.

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### AI

- Ollama
- Gemma open-weight model

### Deployment

- Docker
- Ubuntu Server
- Cloudflare Tunnel
- Nginx

---

## 🚀 Running Locally

TouchGrass uses a locally hosted Gemma model through Ollama, so local development requires Ollama to be installed and running on the same machine.

### Prerequisites

- Node.js 20+
- Ollama
- A machine capable of running the Gemma model

### 1. Clone the repository

git clone https://github.com/Adhithyan2004/TouchGrass.git
cd TouchGrass

### 2. Install dependencies

npm install

### 3. Install and run Gemma

Install Ollama from:
https://ollama.com

Then pull the model:

ollama pull gemma3:1b

Make sure Ollama is running.

### 4. Configure environment variables

Create `.env.local`:

OLLAMA_URL=http://localhost:11434

### 5. Start TouchGrass

npm run dev

Open:

## http://localhost:3000

## 🌱 The Philosophy

Most AI applications try to keep you engaged.

More messages.  
More prompts.  
More time inside the application.

TouchGrass does the opposite.

The ideal user journey is:

```text
Open TouchGrass
      ↓
Tell it what you're up for
      ↓
Get a quest
      ↓
Go outside
      ↓
Touch grass
      ↓
Come back
      ↓
Complete the quest
```

If you spend less time using TouchGrass, it has done its job.

---

## 🔐 Safety

Generated quests are designed to:

- Be achievable by ordinary people
- Get the user outside
- Respect the requested time and budget
- Avoid dangerous activities
- Avoid trespassing
- Avoid requiring special equipment
- Avoid requiring internet access
- Use generic nearby public locations instead of inventing specific places

The AI-generated output is also validated and supplemented with deterministic safety information by the application.

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── quest/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── landing/
│   ├── preferences/
│   ├── quest/
│   ├── active/
│   └── complete/
│
├── lib/
└── types/
```

---

## 🎯 Why I Built This

AI is usually designed to make us spend more time with technology.

I wanted to build something where AI has the opposite goal.

TouchGrass uses AI to create a reason to leave the screen, explore your surroundings, move around, and experience something offline.

The technology is useful precisely because it helps you stop using the technology.

---

## 🏆 Hacktoberfest

[Built for the Hacktoberfest 2026 Week 1 Touch Grass challenge](https://dev.to/challenges/hacktoberfest-week1-2026-10-05).

The project explores how open-weight AI and self-hosted infrastructure can be used to build something playful, practical, and intentionally offline-oriented.

---

## 🔗 Links

- 🌱 **Live Demo:** https://touchgrass.adhithyan.org
- 💻 **GitHub:** https://github.com/Adhithyan2004/TouchGrass
