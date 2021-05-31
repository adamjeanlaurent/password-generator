export enum Flag {
    noNumbers,
    lowercaseOnly,
    uppercaseOnly,
    noSpecialChars
};

// https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
const shuffle = (str: string): string => {
    var a = str.split(''),
    n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
}

const SPECIAL_CHARS: string = shuffle('!#$%&()*+,-./:;<=>?@[\]^_`{|}~');
const LOWERCASE_LETTERS: string = shuffle('abcdefghijklmnopqrstuvwxyz');
const UPPERCASE_LETTERS: string = shuffle('ABCDEFGHIJKLMNOPQRSTUVWYXZ');
const NUMBERS: string = shuffle('0123456789');
const LEGAL_CHARACTERS: string = LOWERCASE_LETTERS + UPPERCASE_LETTERS + SPECIAL_CHARS + NUMBERS;
 
export class PasswordGenerator {
    flags: Flag[];
    length: number;
    constructor(flags: Flag[], length: number = 12) {
        this.flags = flags;
        this.length = length;
    }

    randomNumberBetweenBounds(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);   
    }

    randomCharFromString(str: string): string {
        return str.charAt(Math.random() * str.length);
    }

    generate(): string {
        const noSpecialChars: boolean = this.flags.indexOf(Flag.noSpecialChars) !== -1;
        const lowercaseOnly: boolean = this.flags.indexOf(Flag.lowercaseOnly) !== -1;
        const uppercaseOnly: boolean = this.flags.indexOf(Flag.uppercaseOnly) !== -1;
        const noNumbers: boolean = this.flags.indexOf(Flag.noNumbers) !== -1;

        let generatedPassword: string = '';

        for(let i = 0; i < this.length; i++) {
            let lookup: string = LEGAL_CHARACTERS;

            if(noSpecialChars) lookup = lookup.replace(SPECIAL_CHARS, '');
            if(lowercaseOnly) lookup = lookup.replace(UPPERCASE_LETTERS, '');
            if(uppercaseOnly) lookup = lookup.replace(LOWERCASE_LETTERS, '');
            if(noNumbers) lookup = lookup.replace(NUMBERS, '');

            const randomCharacter = this.randomCharFromString(lookup);
            generatedPassword += randomCharacter;
        }
        return generatedPassword;
    }
}