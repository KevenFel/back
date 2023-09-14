import cliente from 'pg';

const { Pool } = cliente;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crud_uno',
    password: 'lukefe509@',
    port: 5432
});

export {
    pool
};