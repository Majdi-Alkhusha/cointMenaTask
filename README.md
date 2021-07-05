This is a [Next.js](https://nextjs.org/) Framework for reactJS with [Material UI](https://material-ui.com/)

## To get Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build App:
package.json
```bash
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

then next build ... after that run your app next start


------------------------
If you use Custom server (Express.js)
https://nextjs.org/docs/advanced-features/custom-server
and change package.json to 
```bash
{
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}
```

Regards
