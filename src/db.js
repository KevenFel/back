import cliente from 'pg';

const { Pool } = cliente;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

export {
    pool
};