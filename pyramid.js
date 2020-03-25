// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
function pyramid(n) { }
pyramid(1)
//     '#'
pyramid(2)
//     ' # '
//     '###'
pyramid(3)
//     '  #  '
 //     ' ### '
//     '#####'
pyramid(4)
//    '   #   '
//    '  ###  '
//    ' ##### '

function pyramid(n) {
    let pyramid = [];
    for (let i =0;i<2*n-1;i++){
        pyramid[i]=" ";
    }
    pyramid[n-1] = "#";
    console.log(pyramid.join(""));
    for (let i =1 ;i<n;i++){
        pyramid[n-1-i]="#";
        pyramid[n-1+i]="#";
        console.log(pyramid.join(""));
    }
}