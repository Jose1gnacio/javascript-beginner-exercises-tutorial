// Your code here:
function sing(numb) {
    for (let i = numb; i >= 0 ; i--) {
        if (i == 1) {
            console.log (i + " " + "bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        } else if (i == 0){
            console.log ("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
        } else console.log (i + " " + "bottle of milk on the wall," + i + " " + "bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.")
        
    }
    
}
sing(99)