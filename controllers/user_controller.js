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
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            username: req.body.username,
            address: req.body.address,
            role: 'Student',
            mobile_number: req.body.mobile_number,
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
				username: req.body.username
			})  
			if(user){   
				if(await bcrypt.compare(req.body.password, user.password)){
					res.cookie("name", `${user.first_name} ${user.last_name}`);
					res.cookie('username', user.username);
					res.cookie('role', user.role);
					res.redirect('/users');
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

	static logout = (req, res) => {
		res.clearCookie('name');
		res.clearCookie('username');
		res.clearCookie('role');
		res.redirect('/');
	}
}
