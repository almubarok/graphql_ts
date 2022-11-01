# Graphql Typescript
see: https://node-gql.herokuapp.com/graphql

## Developed with:
- [Prisma (ORM)](https://www.prisma.io/)
- [Apollo Server (Graphql)](https://www.apollographql.com/docs/apollo-server/)
- [Nexus (Graphql Schema)](https://nexusjs.org/)
- PostgreSQL
- Typescript


## Getting started

### install depedency:
```bash
npm install
// or
yarn install
```

### generate prisma:
```bash
npm run generate
// or
yarn generate
```

### setting database
- copy `sample.env` and rename to `.env`
- set `DATABASE_URL` with your database connection string

### run development server:
```bash
npm run dev
// or
yarn dev
```

### playground
open `http://localhost:4000/graphql` with your browser to see result