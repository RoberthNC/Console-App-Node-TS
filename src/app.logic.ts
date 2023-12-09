
import fs from 'fs';

let output = '';
let base = 5;

output += `
=======================
      Tabla del ${ base }      
=======================\n`;

for(let i = 1; i<=10; i++){
    output += `${ base } x ${ i } = ${ base * i }\n`;
}

console.log(output);

const outputPath = 'outputs';
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`./${outputPath}/tabla-${ base }.txt`, output);

console.log('File created!');