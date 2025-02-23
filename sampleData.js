const axios=require('axios');
const Data = async()=>{
    try {
        const response=await axios.get('http://localhost:3000/api/sampleData');
        if(response.status===200){
            console.log(response.data);
        }
        else{
            console.log('Data not fetched')
        }
    } catch (error) {
        console.log(error)
    }
}
Data();