# Portfolio

This portfolio was built with **Next.js**, **Apollo Client** and **styled-components**. It is able to get information about the repositories pinned to github, as well as some basic profile information.

## Layout

### Desktop

<div style="display:flex; align-items:center; justify-content: center">
<img  src="https://images2.imgbox.com/74/ed/KKxSKbPR_o.gif" alt="Layout Desktop"/>
</div>

### Mobile

<div style="display:flex; align-items:center; justify-content: center">
<img src="https://images2.imgbox.com/ea/07/tZyyFr4P_o.gif" alt="Layout Mobile"/>
</div>

## Getting Started

First, clone this repository.

```bash
git clone https://github.com/diogosaucedo/Portifolio
```

Install dependencies.

```bash
npm install
```

Access `lib/queries/login.js` and insert **YOUR LOGIN**

```javascript
export  const  LOGIN_GITHUB = "insertYourLoginHere"
```

This project uses [dotenv](https://www.npmjs.com/package/dotenv) for environment variables. Create a file named `.env` in `/` with your **personal github access token** .
[Here's](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) how to create a personal access token.

```
GITHUB_PERSONAL_ACCESS_TOKEN=yourPersonalAccessTokenHere
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

### `/lib/`

Refers to Apollo Client, contains settings, queries and user data to communicate with github.

### `/public/`

Stores all public files, such as: images and pdf.

### `/src/components/`

Contains all react components styled with styled-components.

### `/src/pages/`

This folder is the same folder created in the project root when starting with the `create-next-app` command, it has just been moved to `/src/` for easier organization.

### `/src/styles/`

Refers to the global styles and color theme used throughout the project.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
