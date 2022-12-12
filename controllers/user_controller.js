let path = require("path");
let UserModel = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = class UserController {
  
  static login = (req, res) => {
    res.status(200);
    res.setHeader("Content-Type","text/html");
    res.sendFile(path.resolve("views/login.html"));
  }
  
  static register = (req, res) => {
    res.status(200);
    res.setHeader("Content-Type","text/html");
    res.sendFile(path.resolve("views/register.html"));
  }

  static dashboard = (req, res) => {
	res.status(200);
	res.setHeader("Content-Type","text/html");
	res.sendFile(path.resolve("views/dashboard.html"));
}

  static generateHash = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  static registerUser = async (req, res) => {
    try{
        let user = new UserModel({
            first_name: "",
            last_name: "",
            age: "",
            username: "",
            address: "",
            role: 'Student',
            mobile_number: "",
            email: req.body.email,
            password: await this.generateHash(req.body.password)
        })
        await user.save()
       res.redirect('/login')
    }
    catch(error){
        console.log(error);
    }
  }
  
	static loginUser = async (req, res) => {
		try{
			let user = await UserModel.findOne({
				email: req.body.email
			})  
			if(user){   
				if(await bcrypt.compare(req.body.password, user.password)){
					if (user.first_name && user.last_name){
            res.cookie("name", `${user.first_name} ${user.last_name}`);
          }
					res.cookie('email', user.email);
					res.cookie('role', user.role);
					res.redirect('/dashboard');
				}
				else{
					res.redirect('/login');
				}
			}
		else{
			res.redirect('/login');
		}
		}    
		catch(error){
			console.log(error);
		}

	}

  static getUserDetails = async (req, res) => {
    let user = await UserModel.findOne({
      email: req.body.email
    })
    if(user){
      res.status(200);
      res.setHeader("Content-Type","text/json");
      res.send(JSON.stringify(user.body));
    }
  }

  static admission = async (req, res) => {
    let user = await UserModel.findOne({
      email: req.body.email
    })  
    if(user){
      await UserModel.updateOne({_id: user._id}, {$set: {first_name: req.body.first_name, last_name: req.body.last_name, age: req.body.age, email: req.body.email, username: req.body.username, address: req.body.address, mobile_number: req.body.mobile_number}}).then(() => {
        res.redirect('/dashboard');
      });
    }
  }

	static logout = (req, res) => {
		res.clearCookie('email');
		res.clearCookie('name');
		res.clearCookie('role');
		res.redirect('/');
	}
}
