export const API_KEY='AIzaSyBxQE1ovek6y1L_I1KpqWwJuVyVp-7SZHs';


export const valueConverter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000) +"k"
    }
    else{
        return value
    }


}