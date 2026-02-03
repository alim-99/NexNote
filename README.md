# NexNote 🤖

<p align="center">
  <img src="public/notes-svgrepo-com.svg" alt="NexNote Logo" width="150"/>
</p>

<h3 align="center">The Future of Note-Taking is Here.</h3>

<p align="center">
  <strong>NexNote</strong> is an intelligent note-taking application that helps you create, update, and even summarize your notes with the power of AI.
</p>

---

## 🚀 Core Features

- **✍️ Modern Editor:** A clean and intuitive editor for a seamless writing experience.
- **🤖 AI-Powered Summarization:** Automatically summarize long notes into concise points with a single click.
- **🔐 Secure Authentication:** User authentication powered by [Clerk](https://clerk.com/) to keep your notes safe.
- **🎨 Theming:** Switch between light and dark modes for your comfort.
- **🔍 Powerful Search:** Instantly find the note you're looking for.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** TypeScript
- **Authentication:** [Clerk](https://clerk.com/)
- **Styling:** Tailwind CSS
- **Font:** Bricolage Grotesque

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/nexnote.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd nexnote
    ```
3.  Install dependencies:
    ```sh
    npm install
    ```
4.  Create a `.env.local` file in the root and add your Clerk environment keys:
    ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
    CLERK_SECRET_KEY=your_secret_key
    ```
5.  Start the development server:
    ```sh
    npm run dev
    ```

The application should now be running at `https://nex-note-nu.vercel.app/`