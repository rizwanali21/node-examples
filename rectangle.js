module.exports=(length,width,callback)=>{
    if(length>0 && width>0){
        setTimeout(()=>callback(null,
            {
                perimeter: () => (2*(length+width)),
                area: () => (length*width)
            }
                ),2000);
    }
    else{
        setTimeout(()=>callback(new Error("Dimensions must be greater than zero"),null),2000);
        
    }
}

