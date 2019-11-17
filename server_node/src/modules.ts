import mysql from 'mysql';
import { ToDo } from "src/model"

const host = process.env.DB_HOST || '127.0.0.1';
const port = Number(process.env.DB_PORT) || 3306;
const user = process.env.DB_USER || 'user';
const password = process.env.DB_PASSWORD || 'password';
const database = process.env.DB_NAME || 'tyoto_todo';

const connection = mysql.createConnection({
    host,
    port, 
    user,
    password,
    database,
});

connection.connect();

export async function getAllToDos() {
    return new Promise<ToDo[]>((resolve, reject) => {
        try {
            connection.query(`select * from todos;`, (error, rows: undefined | any[]) => {
                if (error) throw error;
                if (rows == null)  return resolve([]);
                const result: ToDo[] = rows.map((row) => {
                    const {id, title, detail, create_timestamp, update_timestamp} = row;
                    return {
                        id,title,detail,
                        create_at: new Date(create_timestamp),
                        update_at: update_timestamp ? new Date(update_timestamp) : undefined,
                    }
                });
                return resolve(result);
            })
        } catch(error) {
            reject(error);
        }
    })
}