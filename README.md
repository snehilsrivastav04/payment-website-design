# Payme - The All-in-One Finance Platform

This is a web application built with Next.js, designed to showcase a modern fintech platform. It was prototyped and developed using Studio.

## Frameworks & Libraries

This project is built with a modern, robust, and scalable tech stack:

*   **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)

*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)


## Getting Started

Follow these instructions to get the development environment running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (v18 or later) and npm installed.

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/snehilsrivastav04/payment-website-design.git
    cd payment-website-design
    ```

2.  **Install dependencies:**
    Run the following command to install all the necessary packages defined in `package.json`:
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    This project uses a `.env` file for environment variables. You can create one by copying the example if one is provided, or create an empty `.env` file in the root of the project.
    ```bash
    touch .env
    ```

4.  **Run the Development Server:**
    To start the Next.js development server, run:
    ```bash
    npm run dev
    ```
    The application will be available at [http://localhost:9002](http://localhost:9002).

## Project Structure

*   `src/app/`: Contains the main application pages, layouts, and routing logic (using the Next.js App Router).
*   `src/components/`: Shared React components used across the application.
    *   `src/components/ui/`: Auto-generated ShadCN UI components.
    *   `src/components/landing/`: Components specific to the landing page.
*   `src/lib/`: Utility functions and shared libraries.
*   `public/`: Static assets like images and fonts.
*   `tailwind.config.ts`: Configuration file for Tailwind CSS.
*   `next.config.ts`: Configuration file for Next.js.
