const express = require("express")
const app = express();
const PORT = 3000;


// app.get('/', (req, res) => {
//     res.status(200);
//     res.send(`<h2>Message from Vice Chancellor</h2>

// I am delighted to welcome you all to the official website of Quaid-i-Azam University, Islamabad, the top-ranked Institution of the country. As the Vice Chancellor of this esteemed institution, I am exceedingly proud to serve alongside a team of dedicated academics and professionals committed to advancing knowledge and fostering a culture of research excellence.

// QAU proudly presents a number of globally recognized highly-cited researchers making discoveries with global impact, reflecting the recognition that our research is tackling the contemporary challenges and contributing to the common good.Quaid-i-Azam University is renowned for its academic rigor, cutting-edge research, and vibrant campus life….. Read More`)
// })

// app.get("/about", (req, res) => {
//     res.status(200).send(`<h2>Introduction</h2>
// Quaid - i - Azam University(once named Islamabad University) was established in July 1967 under the Act of National Assembly and started teaching and research programmes for PhD and MPhil degrees.It was, however, gradually and later decided to offer Master’s, graduate, and now undergraduate programmes.The University, for its international repute, faculty and programmes attracts a large number of foreign students although it offers admission to a measured number of students from all regions of the country as it is a federal public sector university.

// It has been able to establish its links with some selected universities in Europe, South Asia and the United States.The international educational and research institutions including UNESCO, IRSIP, Agencia Espanole de Cooperacion International(Spain) etc.collaborate in their research activities with the Quaid - i - Azam University.Moreover, a reasonable size of the faculty members of the University have been working in the international universities like Oxford, Cambridge, Columbia, Heidelberg etc.earning applause and awards such as International Peace Award from Brussels.

//     Currently, the Quaid - i - Azam University has four faculties and nine other teaching and research Institutes, Centre and Schools.Briefly included; Faculty of Biological Sciences, Faculty of Natural Sciences, Faculty of Social Sciences, Faculty of Medicine(affiliated), Area Study Centre for Africa, North and South America, Centre of Excellence in Gender Studies, National Institute of Pakistan Studies, National Institute of Psychology, National Institute of Historical and Cultural Research, National Institute of Asian Civilizations, and the Computer Centre.

// For growing educational and technical needs of the country, the University imparts quality education and training on lower strata of life in the field of computers and runs a wide range of short term certificate and diploma courses.Overall, the University’s academic programmes, have an enrollment of over 11,000  students.

// The University also maintains a high standard in providing services.It has well equipped classrooms, state of the art labs and libraries.Other facilities like hostels for male and female students, sports and play fields, transport, mosque, bank, utility shop, post office, photocopying and thesis / paper / printing binding, telephone exchange, café etc.are centrally located on the Campus.`)
// })

// app.get("/Faculties", (req, res) => {
//     res.status(200).send(
//         `<h2> Faculties</h2>
//         <ul>
//          <li><a href ="https://fbs.qau.edu.pk/">Faculty of Biological Sciences<a/></li>
//          <li><a href ="https://fns.qau.edu.pk/">Faculty of natural Sciences<a/></li>
//          <li><a href ="https://fss.qau.edu.pk/">Faculty of social Sciences<a/></li>
//          <li><a href ="https://qau.edu.pk/list-of-affiliated-institutes-qau/">Faculty of Medicine<a/></li>
        
//         </ul>
//         `
//     )
// })

//     // Individual faculty pages
// app.get('/faculties/biological-sciences', (req, res) => {
//     res.status(200).send(`<h2>Faculty of Biological Sciences</h2><p>Details about this faculty...</p>`);
// });


// //Server run at
// app.listen(PORT, () => {
//     console.log(`Server run at http://${PORT}`)
// })




// Store faculty data in one place
const faculties = {
    "biological-sciences": {
        title: "Faculty of Biological Sciences",
        description: "This faculty covers biology, biotechnology, and related life sciences."
    },
    "natural-sciences": {
        title: "Faculty of Natural Sciences",
        description: "This faculty covers physics, chemistry, mathematics, and earth sciences."
    },
    "social-sciences": {
        title: "Faculty of Social Sciences",
        description: "This faculty covers economics, sociology, international relations, and more."
    },
    "medicine": {
        title: "Faculty of Medicine (Affiliated)",
        description: "This faculty is affiliated and covers medical sciences."
    }
};

// Parent route — menu page
app.get('/faculties', (req, res) => {
    let listHTML = '<h2>Faculties</h2><ul>';
    for (const key in faculties) {
        listHTML += `<li><a href="/faculties/${key}">${faculties[key].title}</a></li>`;
    }
    listHTML += '</ul>';
    res.status(200).send(listHTML);
});

// ONE dynamic route handles ALL faculty pages
app.get('/faculties/:facultyName', (req, res) => {
    const faculty = faculties[req.params.facultyName];

    if (!faculty) {
        return res.status(404).send('<h1>Faculty not found</h1>');
    }

    res.status(200).send(`<h2>${faculty.title}</h2><p>${faculty.description}</p>`);
});


app.listen(PORT, () => {
    console.log(`Server run at http://localhost:${PORT}`);
});