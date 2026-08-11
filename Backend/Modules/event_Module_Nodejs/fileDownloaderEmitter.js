const EventEmitter = require('events');

//! class FileDownloader extends EventEmitter
//? extends EventEmitter -> gives this class access to .on(), .emit(), .once(), etc.
//*─────────────────────────────────────────────*//
class FileDownloader extends EventEmitter {

    //! download(fileName)
    //? fileName -> name of the file being "downloaded", passed along with events
    //*─────────────────────────────────────────────*//
    download(fileName) {

        //! this.emit("start", fileName)
        //? "start"   -> event name fired immediately when download begins
        //? fileName  -> data passed to the "start" listener
        //*─────────────────────────────────────────────*//
        this.emit("start", fileName)

        //! setTimeout(callback, delay)
        //? callback -> fires "progress" event at 50%
        //? delay    -> 1000ms simulated wait before first progress update
        //*─────────────────────────────────────────────*//
        setTimeout(() => {
            this.emit("progress", fileName, 50)

            //! setTimeout(callback, delay) - nested
            //? callback -> fires "progress" event at 100%, then decides success/error
            //? delay    -> 1000ms simulated wait before second progress update
            //*─────────────────────────────────────────────*//
            setTimeout(() => {
                this.emit("progress", fileName, 100)

                //! Math.random()
                //? returns a decimal between 0 and 1, used to randomly decide outcome
                //*─────────────────────────────────────────────*//
                const isSuccess = Math.random() > 0.5

                if (isSuccess) {
                    //! this.emit("success", fileName)
                    //? "success"  -> fired when the simulated download completes successfully
                    //? fileName   -> data passed to the "success" listener
                    //*─────────────────────────────────────────────*//
                    this.emit("success", fileName)
                } else {
                    //! this.emit("error", errorMessage)
                    //? "error"       -> fired when the simulated download fails
                    //? errorMessage  -> string describing what went wrong
                    //*─────────────────────────────────────────────*//
                    this.emit("error", `Failed to download ${fileName}`)
                }

            }, 1000)

        }, 1000)
    }
}

const downloader = new FileDownloader()

//! downloader.on(event, listener)
//? event      -> "start"
//? listener   -> logs the file name when download begins
//*─────────────────────────────────────────────*//
downloader.on("start", (fileName) => {
    console.log(`Starting download: ${fileName}`)
})

//! downloader.on(event, listener)
//? event      -> "progress"
//? listener   -> logs the file name and current percent complete
//*─────────────────────────────────────────────*//
downloader.on("progress", (fileName, percent) => {
    console.log(`${fileName} is ${percent}% downloaded`)
})

//! downloader.on(event, listener)
//? event      -> "success"
//? listener   -> logs a success message when download completes
//*─────────────────────────────────────────────*//
downloader.on("success", (fileName) => {
    console.log(`${fileName} downloaded successfully.`)
})

//! downloader.on(event, listener)
//? event      -> "error"
//? listener   -> logs the error message if download fails
//*─────────────────────────────────────────────*//
downloader.on("error", (errorMessage) => {
    console.log(`Error: ${errorMessage}`)
})

//! downloader.download(fileName)
//? fileName -> triggers the whole simulated download sequence
//*─────────────────────────────────────────────*//
downloader.download("report.pdf")