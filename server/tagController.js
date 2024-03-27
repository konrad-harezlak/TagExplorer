const fetchTags = async (req, res) => {
    const {order,sort,pageSize} = req.query
  
    try{
        const response = await fetch(`https://api.stackexchange.com/2.3/tags?pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        const data = await response.json();
        res.status(200).json(data)
    }catch(err){
        console.error("Error occured while fetching tags: ", err)
        res.status(500).json({error: 'Error occured while fetching tags'})
    }
};

module.exports = {
  fetchTags,
};
