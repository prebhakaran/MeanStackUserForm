const getUsers =(req,res)=>{
    res.send('Get users successful');    //res.send for jst displaying msg
}

const addUser = (req,res)=>{      //adduser function is consoled 
    console.log(req.body);
    res.json({status:'User added successfully'})      //msg send in json format
}

const updateUser = (req,res)=>{      
    console.log(req.body);
    res.json({status:'User updated successfully'})     
}

const deleteUser = (req,res)=>{      
    console.log(req.body);
    res.json({status:'User deleted successfully'})     
}

module.exports = {getUsers,addUser,updateUser,deleteUser}  //can be used only if exported and use curly brackets