const app = require('./app');
const PORT = process.env.PORT || 5050;

const main = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started and listening on: http://localhost:${PORT}`)
        })
    } catch (e) {
        console.error(e);
        process.exit();
    }
}

main();