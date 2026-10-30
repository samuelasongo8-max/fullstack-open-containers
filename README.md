# Fullstack Open Containers

## Exercise 22 – My containerized development environment

This development setup runs the React/Vite Phonebook frontend and Express backend in containers, with Nginx serving the app at `http://localhost:8081`. It uses the original Phonebook source from the sibling `phonebook-exercise21` folder and keeps its source files read-only inside the containers.

Original application: [samuelasongo8-max/phonebook-exercise21](https://github.com/samuelasongo8-max/phonebook-exercise21)

From the repository root, start the environment with:

```bash
docker compose -f my-app/docker-compose.dev.yml up --build
```

Stop it with `Ctrl+C`, then run `docker compose -f my-app/docker-compose.dev.yml down`.
