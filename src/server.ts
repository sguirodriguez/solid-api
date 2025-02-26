import { app } from "./app";
import dayjs from 'dayjs';
import { router } from "./routes";

app.listen(3333, () => {
    console.log(
        `🚀 Best server in the world started on port ${3333
        }, environment: development at ${dayjs().format('DD-MM-YYYY HH:mm:ss')}.`
    );
})

app.use(router)