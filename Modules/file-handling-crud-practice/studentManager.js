const fs = require('fs/promises');
const path = require('path');

const fileName = 'students.json';
const filePath = path.join(__dirname, fileName);


const readStudentData = async () => {
    try {
       const data =  await filePath.readFile(filePath,"utf-8")
       return JSON.parse(data)
    } catch (error) {
        if(error.code === 'ENOENT'){
            return [];
            }
            throw error;
    }
}

async function writeData(data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}