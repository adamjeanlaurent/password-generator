import { Flag, PasswordGenerator } from './PasswordGenerator';

const main = (): void => {
    let noSpecialChars: boolean = false;
    let lowercaseOnly: boolean =false;
    let uppercaseOnly: boolean = false;
    let noNumbers: boolean = false;

    let length = 12;

    for(let i = 2; i < process.argv.length; i++) {
        if(process.argv[i] === '--help') {
            let usage = '';
            usage += 'Generate random password, default length is 12. \n';
            usage += './genpass.sh [ --flags ] \n ';
            usage += '\t flags: \n';
            usage += '\t --s // disallow special characters \n';
            usage += '\t --l // all letters must be lowercase \n';
            usage += '\t --u // all letters must be uppercase \n';
            usage += '\t --n // disallow numbers \n';
            usage += '\t {number} // sets length of password, ex. 5';
            console.log(usage);
            return;
        }
        const parsed = parseInt(process.argv[i]);
        if(process.argv[i] === '--s') noSpecialChars = true;
        else if(process.argv[i] === '--l') lowercaseOnly = true;
        else if(process.argv[i] === '--u') uppercaseOnly = true;
        else if(process.argv[i] === '--n') noNumbers = true;
        else if(!isNaN(parsed)) {
            if(parsed <= 0) {
                console.log(`invalid arguments ${parsed}. length cannot be negative or 0`);
                return;
            }
            length = parsed;
        }
        else {
            // invalid arg
            console.log(`invalid argument ${process.argv[i]}. Use the --help flag for usage.`);
            return;
        }
    }

    const flags: Flag[] = [];
    if(noSpecialChars) flags.push(Flag.noSpecialChars);
    if(lowercaseOnly) flags.push(Flag.lowercaseOnly);
    if(uppercaseOnly) flags.push(Flag.uppercaseOnly);
    if(noNumbers) flags.push(Flag.noNumbers);

    const passwordGenerator: PasswordGenerator = new PasswordGenerator(flags, length);
    const password = passwordGenerator.generate();
    console.log(password);
}

main();
