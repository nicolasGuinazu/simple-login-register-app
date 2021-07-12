
const fs=require('fs')
const path=require('path')
const db=path.join(__dirname, '../database/users.json')

let Users={
    getUsers: function () {
        return JSON.parse(fs.readFileSync(db,'utf-8'))
    },
    findAll:function(){
        return this.getUsers()
    },
    findByPk:function(id){
        let allUsers=this.findAll()
        let selectedUser=allUsers.find(el=>el.id==id)
        return selectedUser
    },
    findByField:function(field,data){
        let allUsers=this.findAll()
        let foundUser=allUsers.find(el=>el[field]==data)
        return foundUser
    },
    idGenerator:function(){
        let users=this.findAll()
        let lastUser=users[users.length-1]
        let newId
        if(users.length<1){
            newId=1
        }else{
            newId=lastUser.id+1
        }
    
        return newId
    },
    create:function(data){
        let allUsers=this.findAll()
        let newUser={
            id:this.idGenerator(),
            ...data
        }
        allUsers.push(newUser);
        fs.writeFileSync(db,JSON.stringify(allUsers,null,2))
    },
    delete:function(id){
        let allUsers=this.findAll()
        let newArray=allUsers.filter(el=>el.id!=id)
        fs.writeFileSync(db,JSON.stringify(newArray,null,2))
    },
}

module.exports=Users