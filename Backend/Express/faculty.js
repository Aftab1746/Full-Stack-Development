const express = require("express");
//! require(moduleName)
//? moduleName: built-in package that provides the Express web framework
//*─────────────────────────────────────────────*

const app = express();
//! express()
//? calling the factory function returned by require('express'), builds a new app instance with .get, .post, .use, .listen, etc.
//*─────────────────────────────────────────────*

const PORT = 8000;
//! const PORT = number
//? PORT: the port number the server will bind to and listen on
//*─────────────────────────────────────────────*

const faculties = [
    {
        slug: "natural-sciences",
        title: "Faculty of Natural Sciences",
        description: "This faculty covers physics, chemistry, mathematics, and earth sciences."
    },
    {
        slug: "biological-sciences",
        title: "Faculty of Biological Sciences",
        description: "This faculty covers biology, biotechnology, and related life sciences."
    },
    {
        slug: "social-sciences",
        title: "Faculty of Social Sciences",
        description: "This faculty covers economics, sociology, international relations, and more."
    },
    {
        slug: "medicine",
        title: "Faculty of Medicine Sciences",
        description: "This faculty is affiliated and covers medical sciences."
    }
];
//! const faculties = [ {slug, title, description}, ... ]
//? slug: URL-safe identifier used in the route path (lowercase, hyphenated)
//? title: display name shown to the user in the list and detail page
//? description: longer text shown only on the individual faculty's detail page
//*─────────────────────────────────────────────*

app.get("/faculties", (req, res) => {
    //! app.get(path, requestListener)
    //? path: URL pattern this route matches ("/faculties")
    //? requestListener: callback invoked on every GET request to that path, receives (req, res)
    //*─────────────────────────────────────────────*

    const itemList = faculties
        .map(faculty => `<li><a href="/faculties/${faculty.slug}">${faculty.title}</a></li>`)
        .join('');
    //! faculties.map(callback).join(separator)
    //? callback: runs once per faculty object, returns an HTML <li> string built from that faculty's slug and title
    //? separator: string placed between joined array items (empty string here, so items sit back-to-back)
    //*─────────────────────────────────────────────*

    res.status(200).send(`<h2>Faculties</h2><ul>${itemList}</ul>`);
    //! res.status(code).send(body)
    //? code: 200 = OK, request succeeded
    //? body: HTML string sent as the response, combines the heading and the joined list items
    //*─────────────────────────────────────────────*
});

app.get("/faculties/:slug", (req, res) => {
    //! app.get(path, requestListener)
    //? path: URL pattern with a dynamic segment (":slug") that matches any value in that position
    //? requestListener: callback invoked on every GET request matching this pattern, receives (req, res)
    //*─────────────────────────────────────────────*

    const faculty = faculties.find(f => f.slug === req.params.slug);
    //! faculties.find(callback)
    //? callback: runs once per faculty, returns true for the one whose slug matches the URL parameter
    //? req.params.slug: the actual value from the URL in place of ":slug" (e.g. "medicine")
    //*─────────────────────────────────────────────*

    if (!faculty) {
        return res.status(404).send('<h1>Faculty not found</h1>');
        //! res.status(code).send(body)
        //? code: 404 = Not Found, no faculty matched the given slug
        //? body: HTML string sent as the error response
        //*─────────────────────────────────────────────*
    }

    res.status(200).send(`<h2>${faculty.title}</h2><p>${faculty.description}</p>`);
    //! res.status(code).send(body)
    //? code: 200 = OK, matching faculty was found
    //? body: HTML string showing that faculty's title and description
    //*─────────────────────────────────────────────*
});

app.listen(PORT, () => {
    //! app.listen(port, callback)
    //? port: the port number the server binds to and listens on
    //? callback: runs once the server successfully starts listening
    //*─────────────────────────────────────────────*

    console.log(`Server run at http://localhost:${PORT}`);
});