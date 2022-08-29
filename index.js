var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function rectangle(length,width){
    console.log("Computing Area and Parameter for Rectangle with length: "+length+" and width: "+width);
    if(length>0 && width>0){
        console.log("Area: "+rect.area(length,width));
        console.log("Perimeter: "+rect.perimeter(length,width));
    }
    else{
        console.log("Please enter valid dimensions");
    }
}

rectangle(5,6);
rectangle(0,4);
rectangle(4,-5);
