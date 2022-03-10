
/*----------------------
// Truthy Value 
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

// Falsy Value
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
-----------------------*/

const number = 10;
if (!number) {
    console.log('Its Ok');
}
else {
    console.log('Not Ok');
}

const roll = 384;
if (roll) {
    console.log('I am first');
}
else {
    console.log('I am lost');
}



