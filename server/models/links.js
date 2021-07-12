const mongoose=require("mongoose")
const Schema= mongoose.Schema

const userLinksSchema= new Schema({
    email:String,
    username: String,
    name: String,
    socials: [String],
    links: [{
        text: String,
        href: String
    }],
})

module.exports= mongoose.model('UserLinks',userLinksSchema)
