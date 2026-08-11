// const http = require('http');
// //! require(moduleName)
// //? moduleName: built-in Node module for creating HTTP servers and handling requests/responses
// //*─────────────────────────────────────────────*

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     //! http.createServer(requestListener)
//     //? requestListener: callback function invoked on every incoming HTTP request
//     //? req: incoming request object (url, method, headers, etc.)
//     //? res: response object used to send data back to the client
//     //*─────────────────────────────────────────────*

//     if (req.url === "/Home") {
//         res.writeHead(200, { 'Content-Type': "text/html" });
//         //! res.writeHead(statusCode, headersObject)
//         //? statusCode: 200 = OK, request succeeded
//         //? headersObject: sets response headers, here declaring the body as HTML
//         //*─────────────────────────────────────────────*

//         res.write("<h1>Welcome to ExamVeda.com</h1>");
//         //! res.write(chunk)
//         //? chunk: string/Buffer to send as part of the response body
//         //*─────────────────────────────────────────────*

//         res.write("<p>Your one-stop destination for job exam preparation with daily practice questions covering GK, Aptitude, English, Reasoning, Computer, and Current Affairs, for exams like SSC, Banking, UPSC, Railways, RRB, PCS, CUET, GATE, Engineering, Graduation, and more — join lakhs of aspirants successfully cracking exams with us.</p>");

//         res.end;
//         //! res.end (missing parentheses — BUG)
//         //? this references the function without calling it, so the response never actually closes
//         //? should be res.end() to properly terminate the response
//         //*─────────────────────────────────────────────*
//     }
//     else if (req.url === "/blog") {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write("<h1>Examveda Blog</h1>")
//         res.write("<i>Explore expert exam strategies, study resources, career tips, and platform updates. Stay informed and inspired with the latest from the Examveda Blog.</i>")
//         res.end();
//         //! res.end()
//         //? properly called here — closes and sends the response
//         //*─────────────────────────────────────────────*
//     }
//     else if(req.url === "/contact-us"){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write("<h1>Contact-US</h1>")

//         const contactObj ={
//            email: "example@gmail.com",
//            AdvertisementEmail : "ads@exampleadv.qau.edu.pk",
//            phone: "03009098698"
//         }
//         //! const contactObj = { key: value, ... }
//         //? email: contact address for general inquiries
//         //? AdvertisementEmail: contact address for advertising inquiries
//         //? phone: contact phone number
//         //*─────────────────────────────────────────────*

//         res.write(`Email: ${contactObj.email}<br>`)
//         res.write(`AdvertiseEmail: ${contactObj.AdvertisementEmail}<br>`)
//         res.write(`Contact Num: ${contactObj.phone}<br>`)
//         //! res.write(`template string with ${objectProperty}`)
//         //? template literal: interpolates object fields directly into an HTML string
//         //? <br>: HTML line break so each field appears on its own line
//         //*─────────────────────────────────────────────*

//         res.end();
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': "text/html" });
//         //! statusCode 404
//         //? 404: standard HTTP code for "resource not found" — used for any unmatched route
//         //*─────────────────────────────────────────────*

//         res.end("<h1>404 - Page Not Found</h1>");
//         //! res.end(data)
//         //? data: final chunk to send, then immediately closes the response — shorthand for write() + end()
//         //*─────────────────────────────────────────────*
//     }
// });

// server.listen(PORT, () => {
//     //! server.listen(port, callback)
//     //? port: the port number the server binds to and listens on
//     //? callback: runs once the server successfully starts listening
//     //*─────────────────────────────────────────────*

//     console.log("Server listen at PORT ", PORT);
// });


const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {

    switch (req.url) {
        case "/Home":
            res.writeHead(200, { 'Content-Type': "text/html" });
            res.write("<h1>Welcome to ExamVeda.com</h1>");
            res.write("<p>Your one-stop destination for job exam preparation with daily practice questions covering GK, Aptitude, English, Reasoning, Computer, and Current Affairs, for exams like SSC, Banking, UPSC, Railways, RRB, PCS, CUET, GATE, Engineering, Graduation, and more — join lakhs of aspirants successfully cracking exams with us.</p>");
            res.end();
            break;

        case "/blog":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h1>Examveda Blog</h1>");
            res.write("<i>Explore expert exam strategies, study resources, career tips, and platform updates. Stay informed and inspired with the latest from the Examveda Blog.</i>");
            res.end();
            break;

        case "/contact-us":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h1>Contact-US</h1>");

            const contactObj = {
                email: "example@gmail.com",
                AdvertisementEmail: "ads@exampleadv.qau.edu.pk",
                phone: "03009098698"
            };

            res.write(`Email: ${contactObj.email}<br>`);
            res.write(`AdvertiseEmail: ${contactObj.AdvertisementEmail}<br>`);
            res.write(`Contact Num: ${contactObj.phone}<br>`);
            res.end();
            break;

        default:
            res.writeHead(404, { 'Content-Type': "text/html" });
            res.end("<h1>404 - Page Not Found</h1>");
            break;
    }
});

server.listen(PORT, () => {
    console.log("Server listen at PORT ", PORT);
});