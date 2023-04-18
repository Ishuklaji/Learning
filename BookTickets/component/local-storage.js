const setData = (key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}
const getData = (key)=>{
    if(key){
        try{
            let value=JSON.parse(localStorage.getItem(key))
            return value
        }
        catch(error){
         console.error(error);
        }
    }
    else{
        return
    }
    
}

export {setData,getData}