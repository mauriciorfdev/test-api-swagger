# How to Document an Express API with Swagger UI

## About Project

Swagger allows to describe the structure of an API and generate interactive documentation for testing API endpoints.

> Swagger provides a tool for presenting documentation: _Swagger UI_. Swagger UI creates a web page from a YAML or JSON file that contains a detailed description of your entire API (OpenAPI Specification)

In this project we use:

- A simple Jedi REST API built with Express _(v5.1.0)_
- Swagger UI package _(swagger-ui-express version: v5.0.1)_
- JSON file using the OpenAPI specification.

### _Notes_:

- For learning purposes, the _Jedi_ API uses an array of objects with `id` and `name`

### Screenshots

![swaggerUI](/images/swaggerui.png)

## Installation

1. Clone the repo

```
https://github.com/mauriciorfdev/test-api-swagger.git
```

2. Install NPM Packages: `npm install`

## Usage

1. Run the server: `npm run dev`
2. On the browser: `http://localhost:3000/api-docs/`
3. Try using the interface!

_You can also use Postman or Thunder Client VS Code Extension_

## TIPS

- Use the [Swagger Editor](https://editor.swagger.io/) as a guide to write/modify the source api definition (_JSON File_)
