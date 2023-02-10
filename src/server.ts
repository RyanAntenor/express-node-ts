import 'module-alias/register';
import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is ready on ${PORT}`);
});