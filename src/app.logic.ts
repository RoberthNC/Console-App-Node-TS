import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b:base, l:limit, s:showTable }  = yarg;

let output = '';

output += `
=======================
      Tabla del ${ base }      
=======================\n`;

for(let i = 1; i<=limit; i++){
    output += `${ base } x ${ i } = ${ base * i }\n`;
}

if(showTable) console.log(output);

const outputPath = 'outputs';
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`./${outputPath}/tabla-${ base }.txt`, output);

console.log('File created!');
