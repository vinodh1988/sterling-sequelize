const model=require('../orm/model')
const route=require("express").Router();



route.get("/departments",async function(request,response){
    try{
   const  result =await model.department.findAll(
        {include:[model.employee]})
        response.json(result)
   }
   catch(e){
       response.status(500).send('server error')
   }
})



route.post("/departments",async function(request,response){
var dept={department_id:request.body.department_id,
          name:request.body.name,
          employees:request.body.employees}
          console.log(dept);
try{
      const result = await model.department.create(dept,{include: [model.employee]})
      response.send("record inserted")
    }
    catch(e){
        response.status(500).send('server error')
    }
         
})


module.exports=route;