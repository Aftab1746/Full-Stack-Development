// const EventEmitter = require("events")

// //! Centralized event name constants
// //? Prevents typos when emitting/listening — one source of truth
// //*─────────────────────────────────────────────*//
// const EVENTS = {
//     LOGIN: "user_login",
//     PURCHASE: "user_purchase",
//     PROFILE_UPDATE: "profile_update",
//     LOGOUT: "user_logout",
//     SUMMARY: "summary",
// }

// const shoppingEmitter = new EventEmitter()

// //! Event count tracker
// //*─────────────────────────────────────────────*//
// const countEvents = {
//     login_count: 0,
//     purchase_count: 0,
//     update_count: 0,
//     logout_count: 0,
// }

// //! Error listener — prevents uncaught EventEmitter errors from crashing the process
// //*─────────────────────────────────────────────*//
// shoppingEmitter.on("error", (err) => {
//     console.error("EventEmitter Error:", err.message)
// })

// shoppingEmitter.on(EVENTS.LOGIN, (username) => {
//     console.log(`${username} logged in`)
//     countEvents.login_count++
// })

// shoppingEmitter.on(EVENTS.PURCHASE, (products) => {
//     // const productList = Object.values(products).join(", ")
//     // console.log(`Purchased Products: ${productList}`)
//     console.log(`Purchased Products: ${products.laptop}, ${products.mobile}`)
//     countEvents.purchase_count++
// })

// shoppingEmitter.on(EVENTS.PROFILE_UPDATE, (updatedUsername) => {
//     console.log(`User updated to ${updatedUsername}`)
//     countEvents.update_count++
// })

// shoppingEmitter.on(EVENTS.LOGOUT, (username) => {
//     console.log(`${username} logged out`)
//     countEvents.logout_count++
// })

// shoppingEmitter.on(EVENTS.SUMMARY, () => {
//     console.log("Total Count:", countEvents)
// })

// //! Emit all events in sequence
// //*─────────────────────────────────────────────*//
// shoppingEmitter.emit(EVENTS.LOGIN, "Aftab Burki")
// shoppingEmitter.emit(EVENTS.PURCHASE, { laptop: "Laptop", mobile: "Mobile" })
// shoppingEmitter.emit(EVENTS.PROFILE_UPDATE, "Haroon Ali")
// shoppingEmitter.emit(EVENTS.LOGOUT, "Haroon Ali")
// shoppingEmitter.emit(EVENTS.SUMMARY)


const EventEmitter = require("events")
const fs = require("fs")           // (1) Add this — needed to read/write files
const path = require("path")       // (2) Add this — for a safe file path

const COUNTS_FILE = path.join(__dirname, "counts.json")   // (3) Where we persist data

const EVENTS = {
    LOGIN: "user_login",
    PURCHASE: "user_purchase",
    PROFILE_UPDATE: "profile_update",
    LOGOUT: "user_logout",
    SUMMARY: "summary",
}

const shoppingEmitter = new EventEmitter()

//! loadCounts()
//? Reads counts.json if it exists, otherwise returns default zeros
//*─────────────────────────────────────────────*//
function loadCounts() {
    if (fs.existsSync(COUNTS_FILE)) {
        const raw = fs.readFileSync(COUNTS_FILE, "utf-8")
        return JSON.parse(raw)
    }
    return {
        login_count: 0,
        purchase_count: 0,
        update_count: 0,
        logout_count: 0,
    }
}

//! saveCounts(counts)
//? Writes the current counts object back to counts.json
//*─────────────────────────────────────────────*//
function saveCounts(counts) {
    fs.writeFileSync(COUNTS_FILE, JSON.stringify(counts, null, 2))
}

// (4) Load existing counts instead of hardcoding zeros
const countEvents = loadCounts()

shoppingEmitter.on("error", (err) => {
    console.error("EventEmitter Error:", err.message)
})

shoppingEmitter.on(EVENTS.LOGIN, (username) => {
    console.log(`${username} logged in`)
    countEvents.login_count++
})

shoppingEmitter.on(EVENTS.PURCHASE, (products) => {
    console.log("Purchased Products:", products)
    countEvents.purchase_count++
})

shoppingEmitter.on(EVENTS.PROFILE_UPDATE, (updatedUsername) => {
    console.log(`User updated to ${updatedUsername}`)
    countEvents.update_count++
})

shoppingEmitter.on(EVENTS.LOGOUT, (username) => {
    console.log(`${username} logged out`)
    countEvents.logout_count++
})

shoppingEmitter.on(EVENTS.SUMMARY, () => {
    console.log("Total Count:", countEvents)
    saveCounts(countEvents)   // (5) Persist before the process ends
})

shoppingEmitter.emit(EVENTS.LOGIN, "Aftab Burki")
shoppingEmitter.emit(EVENTS.PURCHASE, { laptop: "Laptop", mobile: "Mobile" })
shoppingEmitter.emit(EVENTS.PROFILE_UPDATE, "Haroon Ali")
shoppingEmitter.emit(EVENTS.LOGOUT, "Haroon Ali")
shoppingEmitter.emit(EVENTS.SUMMARY)