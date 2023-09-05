export const generateUniqueId = (params:any)=>{
    let characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const word = params.substring(0,3)
    const distCode = word.toUpperCase()
    let uniqueId=distCode
    for(let i=0;i<=20;i++){
        const randomIndex = Math.floor(Math.random()*characters.length) 
        uniqueId += characters.charAt(randomIndex)
    }
    return uniqueId
}