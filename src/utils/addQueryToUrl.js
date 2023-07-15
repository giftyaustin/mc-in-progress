export const addQueryToUrl = (location, history, data)=>{
    const searchParams = new URLSearchParams(location.search)
    for (const key in data) {

        if(key==='k'){
            const newPath = location.pathname + `?k=${data[key]}`
            history(newPath);
            return
        }
        searchParams.set(key, data[key]);
      }
      const newSearch = searchParams.toString();
     const newPath = location.pathname + '?' + newSearch;
     history(newPath)
}