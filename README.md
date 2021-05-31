# password-generator
simple command line password generator

Usage:

Compile typescript to javascript
``` tsc ```

```
 Generates random password, default length is 12, default character set includes special characters, 
 numbers, and uppercase and lowercase letters.
    usage: ./genpass.sh [ --flags ] 
    flags: 
      --s // disallow special characters 
      --l // all letters must be lowercase 
      --u // all letters must be uppercase
      --n // disallow numbers 
      {number} // sets length of password, ex. 5
      
      example: ./genpass.sh 15
      ~eq7~Z%&1KF|vM>
      
      example: ./genpass.sh --s --u
      1RMW74ANHQOS
     
