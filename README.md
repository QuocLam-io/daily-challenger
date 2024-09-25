# Daily Challenge Social Accountability App

<style>
  summary {
    background-color: grey;
  }
</style>

<details>
  <summary >Description (Coming Soon)</summary>

This section will provide an in-depth description of the project, including key features, user flows, and other details. Stay tuned!

</details>

## Tech Stack

- **Next.js**: The core framework for the app.
- **TypeScript**: For type-safe development.
- **shadcn**: A component library built on top of Tailwind CSS for rapid UI development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Postgres** (via **NeonDB**): The relational database used to store challenge data.
- **Clerk**: Authentication service to manage user signups and logins.
- **Prisma**: ORM for managing database access and queries with a schema-driven approach.

## Features

- Users can create **numerical challenges** (e.g., "50 push-ups a day") or **boolean challenges** (e.g., "Pick up groceries").
- Challenges can be tracked with completion status and optional progress for numerical challenges.
- Optional **deadlines** can be set for challenges, encouraging users to complete them within a specific time.
- The app supports tracking when a challenge is completed.
- All challenges start with a `completed: false` status and can be marked as complete when the user finishes them.
- Soft delete functionality ensures that challenges are not permanently deleted immediately.

## Setup

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/challenge-tracker-app.git
cd challenge-tracker-app
```
