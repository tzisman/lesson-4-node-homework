import fs from "fs/promises";
import leftPad from "left-pad";
import { upperCase, localeUpperCase } from "upper-case";

const STR_LENGTH = 11;

async function writeLeftPad() {
    let output = "";

    for (let i = 0; i < 15; i++) {
        if(i%2 == 1)
            output += upperCase(leftPad("hello world", STR_LENGTH + i) + "\n");
        else
            output += leftPad("hello world", STR_LENGTH + i) + "\n";
    }

    try {
        await fs.writeFile("output.txt", output);
        console.log("הקובץ נוצר בהצלחה! 📄");
    } catch (err) {
        console.error("שגיאה בכתיבה לקובץ:", err);
    }

    console.log(output);
}

writeLeftPad();

