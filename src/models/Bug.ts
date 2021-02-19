import { Pool } from "pg";


const pool = new Pool ({
    max: 20,
    connectionString: process.env.DATABASE_URL,
    idleTimeoutMillis: 30000
});


const getAllBugs = () => {};

const getBugById = (id: number) => {};
