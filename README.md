# 🚀 Initial Next.js + Tailwind Project

This project is a modern and scalable starter template, set up with Next.js (React) and Tailwind CSS. It includes robust configuration for code quality, formatting, and commit management using TypeScript, ESLint, Prettier, Husky/Commitlint and Lint-Staged.

## 🛠️ Key Technologies

- [Next.js](https://nextjs.org/): React framework for developing full-stack web applications with hybrid rendering.

- [React](https://react.dev/) & [React DOM](https://react.dev/learn): The JavaScript library for building user interfaces.

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for building designs quickly and flexibly.

- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds static typing.

- [ESLint](https://eslint.org/): For detecting problems and ensuring compliance with coding standards.

- [Prettier](https://prettier.io/): For automatic code formatting.

- [Husky](https://typicode.github.io/husky/) & [Commitlint](https://commitlint.js.org/): To ensure that all commit messages follow the Conventional Commits standard.

- [Lint-Staged](https://github.com/okonet/lint-staged): Runs linting and formatting commands only on staged files before commit.

## 🌟 First Steps

### Requirements

Asegúrate de tener **[Node.js](https://nodejs.org/)** (versión LTS recomendada) y **npm** instalados en tu sistema.

### Installation:

1. Clone the repository:

```
git clone <URL_OF_THE_REPOSITORY>
cd nextflow-starter
```

2. Install the dependencies:

```
npm install or npm i
```

**⚠️ WARNING:**
_The dependencies have exact versions. Run the command *`npm upgrade <package>@latest`* or *`npx npm-check-updates -u`* to update to the latest versions of all packages, if available._

3. Configure Husky (required for pre-commit and pre-push git hooks):

```
npm run prepare
```

## ⚙️ Available Scripts

At the root of the project, you can run the following commands:

| Command           | Description                                                                                            |
| :---------------- | :----------------------------------------------------------------------------------------------------- |
| `npm run dev`     | Start the application in development mode. It can be accessed at http://localhost:3000.                |
| `npm run build `  | Start the production server after running npm run build.                                               |
| `npm run start`   | Runs the production server after npm run build.                                                        |
| `npm run lint`    | Runs ESLint to analyze code and automatically fixes fixable issues.                                    |
| `npm run format`  | Run Prettier to automatically format files, followed by npm run lint to apply automatic linting fixes. |
| `npm run prepare` | Configure Husky's git hooks. Must be run after cloning the project.                                    |

## 📐 Code Standards and Commits

### 💡 Code Format and Style

The `npm run format` and `npm run lint` commands help you keep your code clean. What's more, thanks to Husky and lint-staged, your code is automatically formatted and checked (linted) before each commit.

#### 📝 Commit Convention

The project uses Husky and Commitlint to enforce the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

When you make a commit, your message should follow a specific format, such as:

> feat(component): add support for dark mode
> fix(api): fix bug when obtaining user data

#### ⚠️ IMPORTANT NOTE FOR THE FIRST COMMIT:

> _If you run npm run prepare before the first commit, the traditional message such as "Initial commit" will fail. You must use a valid commit type, for example:_

```
git commit -m "chore: initial project setup"
```

#### Example of Permitted Commit Types:

- **feat:** New functionality.
- **fix:** Bug fix.

- **chore:** General maintenance (updating dependencies, etc.).

- **refactor:** Code restructuring that does not introduce functionality or fix bugs.

- **style:** Changes that do not affect logic (spacing, formatting, etc.).

- **test:** Adding or modifying tests.

- **docs:** Changes to documentation.

**_Any commit that does not comply with this format will be blocked by Husky and Commitlint._**

---
