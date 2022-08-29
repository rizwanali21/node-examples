var rect = require('./rectangle');

function rectangleCal(length,width){
    console.log("Computing Area and Parameter for Rectangle with length: "+length+" and width: "+width);
    rect(length,width,(err,rectangle)=>{
        if(err)console.log("Error Occured: "+err.message);
        else{
            console.log("Area: "+rectangle.area());
            console.log("Perimeter: "+rectangle.perimeter());
        }
    })
}

rectangleCal(5,6);
rectangleCal(0,4);
rectangleCal(4,-5);
