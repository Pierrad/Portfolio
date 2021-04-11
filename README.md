https://github.com/vitaly-t/pg-promise
https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js
https://themeptation.medium.com/how-to-use-styled-components-on-nextjs-and-typescript-1c5388e36eb
https://blog.logrocket.com/using-authentication-in-next-js/
https://gitmoji.dev/

```docker-compose build```
```docker-compose up```

## Automatic deploy from github subdirectory
https://stackoverflow.com/questions/39197334/automated-heroku-deploy-from-subfolder
Add ```"start": "next start -p $PORT"``` to nextjs => package.json

## Use Heroku database on local
- ```heroku pg:backups:capture```
- ```heroku pg:backups:download```
- ```cd latest.dump sside/db/```
- run docker container
- ```docker cp latest.dump portfolio_db_1:./```
- ```docker exec -it portfolio_db_1 /bin/sh```
- ```pg_restore --verbose --clean --no-acl --no-owner -h localhost -U postgres -d testdb latest.dump```

## Generate "JWT_SIGNING_PRIVATE_KEY"
```npx jose newkey -s 256 -t oct -a HS512```