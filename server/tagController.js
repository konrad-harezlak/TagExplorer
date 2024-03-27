const fetchTags = async (req, res) => {
    const {order,sort} = req.query
  
    try{
        console.log(order)
        const response = await fetch(`https://api.stackexchange.com/2.3/tags?order=${order}&sort=${sort}&site=stackoverflow`)
        const data = await response.json();
        console.log(data)
        res.status(200).json(data)
    }catch(err){
        console.error("Error occured while fetching tags: ", err)
        res.status(500).json({error: 'Error occured while fetching tags'})
    }
};

module.exports = {
  fetchTags,
};
