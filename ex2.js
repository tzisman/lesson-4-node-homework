import colors from "colors"
import fs from 'fs/promises';

let arr;

async function readFileToArray(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8'); // קורא את כל הקובץ כטקסט
        const lines = data.split(/\r?\n/); // מחלק לפי שורות (גם Windows וגם Linux)
        return lines;
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
}


(async () => {
    arr = await readFileToArray('products.txt'); 
    console.log(arr[0].green);
    console.log(arr[1].red.underline);
    console.log(arr[2].brightBlue);
    console.log(arr[3].gray);
    console.log(arr[4].yellow);
})();

colors.setTheme({
    my: 'green.underline'
  });