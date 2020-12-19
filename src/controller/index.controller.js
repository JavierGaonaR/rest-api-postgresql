const { Pool } = require('pg');

const pool = new Pool({
    host: 'ec2-34-200-106-49.compute-1.amazonaws.com',
    user: 'uyoyadwlnoqivi',
    password: '0236c81f9886f27649b7aa565af5986f41bdb8f5472c97df8d36c520f8a9ece3',
    database: 'd77085kei1f9ne',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

module.exports = {
    pool
}