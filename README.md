## Overview

**This project is a complete overhaul of my final bootcamp project, which was a basic news site. The new version is a modern 
monorepo setup using Turborepo and includes significant enhancements to improve development efficiency, maintainability, and 
scalability: An overengineered bootcamp project.**

**It's comprised of two main applications, a RESTful API built with the [Hono](https://hono.dev) framework and a web application built with [Next.js](https://nextjs.org).
Additionally, the project incorporates several custom packages and configurations for a seamless development experience.**


## Structure

```plaintext
root/
├── apps/
│   ├── api/
│   └── web/
├── packages/
│   ├── env/
│   ├── logger/
│   ├── ui/
│   └── db/
├── tooling/
│   ├── eslint/
│   ├── typescript/
│   ├── prettier/
│   ├── jest/
│   ├── tailwind/
│   └── github/
├── package.json
└── turbo.json
```

## Features
- **Modern Monorepo Setup:** Managed by Turborepo
- **GitHub Workflows:** For CI/CD
- **RESTful API:** Built with Hono for speed and simplicity
- **Web App:** Built with Next.js for performance and features
- **Custom Config:** For global project configurations
  - **ESLint** 
  - **TypeScript**
  - **Prettier**
  - **Jest**
  - **Tailwind**
  - **GitHub**
- **Custom Packages:**
  - **Typesafe ENV:** Built with t3-oss for type-safe environment variables
  - **Logger:** Custom logger for better development experience
  - **Design System:** For consistent UI/UX across the project
  - **Database:** Organized database setup for easy access and management

## CI/CD Setup
GitHub Actions are used for continuous integration and deployment. The workflows are configured in .github/workflows/. It includes steps for:

- Installing dependencies
- Linting and formatting checks
- Running tests
- Building the applications

## License
**This project is licensed under the MIT License. See the LICENSE file for details.**
