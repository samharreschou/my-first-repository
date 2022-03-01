function acronym(string) {
  // ...
  return string.replace(/-/g, ' ').match(/(\b|^)([a-z])/gi).join('').toUpperCase()
}

a=acronym('Portable Network Graphics');                  // "PNG"
b=acronym('First In, First Out');                        // "FIFO"
c=acronym('PHP: HyperText Preprocessor');                // "PHP"
d=acronym('Complementary metal-oxide semiconductor');    // "CMOS"
e=acronym('Hyper-text Markup Language');                 // "HTML"

console.log(a,b,c,d,e)


function isValidEmail(email) {
  // ...
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email)
}

f=isValidEmail('Foo@baz.com.ph');          // returns true
g=isValidEmail('Foo@mx.baz.com.ph');       // returns true
h=isValidEmail('foo@baz.com');             // returns true
i=isValidEmail('foo@baz.ph');              // returns true
j=isValidEmail('HELLO123@baz');            // returns false
k=isValidEmail('foo.bar@baz.to');          // returns false
l=isValidEmail('foo@baz.');                // returns false
m=isValidEmail('foo_bat@baz');             // returns false
n=isValidEmail('foo@bar.a12');             // returns false
o=isValidEmail('foo_bar@baz.com');         // returns false
p=isValidEmail('foo@bar.....com');         // returns false

console.log(f,g,h,i,j,k,l,m,n,o,p)
