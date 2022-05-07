const { Model, schema, field } = require('firestore-schema-validator');

const UserSchema = schema({
    firstName: field('First Name')
      .string()
      .trim()
      .minLength(3)
      .require('First Name is required'),

    lastName: field('Last Name')
      .string()
      .trim()
      .minLength(2)
      .require('Last Name is required'),

    email: field('Email Address')
      .string()
      .email()
      .require('Email Address is required'),

    password: field('Password')
      .string()
      .match(/[A-Z]/, '%s must contain an uppercase letter.')
      .match(/[a-z]/, '%s must contain a lowercase letter.')
      .match(/[0-9]/, '%s must contain a digit.')
      .minLength(8)
      .require('Password is required'),

    avatar: field('Avatar')
      .string()  
      .default('/images/pro-pic.png'), 

    bio: field('Bio')
      .string()
      .default('Happy new user'),
      
    coins: field('Coins')
      .arrayOf().string(),    
    
  })

  
   


module.exports = {
    UserSchema
}