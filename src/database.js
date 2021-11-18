const { Pool } = require ('pg')

const pool = new Pool({
    host: 'ec2-34-199-224-49.compute-1.amazonaws.com',
    user: 'oxtmznlrczmpms',
    password: '8f38724a5d7257694821d847db3e040871dbadacd32f435d0f2400e39fd71487',
    database: 'd521d29g2dbl7k',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})
module.exports = pool;