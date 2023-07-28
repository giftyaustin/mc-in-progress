export const addQueryToUrl = (location, history, data)=>{
    const searchParams = new URLSearchParams(location.search)
    if(data.category){
        searchParams.set('page', 1)
    }
    if(data['price[gte]'] || data['price[lte]']){
        searchParams.set('page', 1)
    }
   if(searchParams.get('category') && data.category){
    var arr = searchParams.get('category').split(',')
    
    if(arr.includes(data.category)){
       arr = arr.filter((c)=>{return(c!==data.category)})
       
    }else{
        arr.push(data.category)
     
    }
    var categoryString = arr.join(',')
 
    delete data.category
    searchParams.delete('category')
   }
    for (const key in data) {

        if(key==='k'){
            
            let newPathName = location.pathname.split('/').slice(0,3).join('/')
            
            const newPath = newPathName + `?k=${data[key]}`
            history(newPath);
            return
        }
        
        searchParams.set(key, data[key]);
      }
      const newSearch = searchParams.toString()+ (categoryString?`&category=${arr}`:'');
  
     const newPath = location.pathname + '?' + newSearch ;
     history(newPath)
}