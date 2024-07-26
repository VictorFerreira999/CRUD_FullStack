import mysql from "mysql"

export const db = mysql.createConnection({
   host:"localhost",
   user: "victor",
   password: "123456789",
   database: crud
})