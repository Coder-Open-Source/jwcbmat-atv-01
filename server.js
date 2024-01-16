import { createServer } from "http"

createServer()
    .listen(
        3000, 
        "localhost",
        () => {
            console.log("Server running...")

            // ping - no pong
            setInterval(() => {
                console.log("Ping...")
            }, 2000)
    })
