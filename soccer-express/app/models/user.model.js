module.exports = mongoose =>{
    const UserSchema = mongoose.model(
        'user',
        mongoose.Schema(
            {
                username : String,
                password : String,
                name : String,
                telephone : String        
            }, {timestamps: true}
        )
    )
    return UserSchema
}