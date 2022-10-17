export const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API REST",
        version: "1.0.0",
        description: "Desafio Bsale - Backend",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./src/routes/*.js"],
  };