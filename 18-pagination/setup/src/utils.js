const paginate = (data,number) => { //number=people per page
    const resultedArray=[];
   data=data.map((e)=>
    {return {login:e.login,
    img:e.avatar_url,
    url:e.html_url}});

    while(data.length){
        resultedArray.push(data.splice(0,number));
    }
    return resultedArray;
}

export default paginate
