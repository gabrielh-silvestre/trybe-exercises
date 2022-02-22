FROM mysql:5.7

COPY sakila_DB.sql ./docker-entrypoint-initdb.d

WORKDIR /app/exercise_DB

ENV MYSQL_ROOT_PASSWORD=my-secret-pw

EXPOSE 3306

CMD [ "--default-authentication-plugin=mysql_native_password" ]