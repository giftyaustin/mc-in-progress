export const sendPostRequest = async(uri, data)=>{
    const response = await fetch(uri,{ method:'POST', headers:{"Content-type":'application/json'}, body: JSON.stringify(data)})
    const res = await response.json()
    return res;
}

export const sendGETRequest = async(uri)=>{
    const response  = await fetch(uri)
    const res = await response.json()
    return res;
}