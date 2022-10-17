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
          url: "https://bl-backend.herokuapp.com/",
        },
      ],
    },
    apis: ["./src/routes/*.js"],
  };