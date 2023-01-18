const knex = require('knex')
const {options} = require('./options/MariaDB')

class ClientSQL{

    constructor(config){

        this.knex = knex(config)
        
    }

    async save(obj){

       return this.knex('products').insert(obj)
    
    }

    async saveMessage(msg){

        return this.knex('messages').insert(msg)

    }

    getAllMessages(){
        return this.knex('messages').select('*')
    }

    getById(_id){

        return this.knex('messages').select('*').where('id', _id)

    }

    getAll(){
        return this.knex('products').select('*')
    }

    async updateById(_id, obj){

        return this.knex.from('products').where('id', _id).update({...obj})
        
    }


    async deleteById(_id){

        return this.knex.from('products').where('id', _id)
        
    }

    async deleteAll(){

        return this.knex('products').del()
    }

    close(){
        this.knex.destroy()
    }

}

const Cdor = new ClientSQL(options)

module.exports = Cdor