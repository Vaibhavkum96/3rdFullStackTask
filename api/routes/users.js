import express from "express";
import {updateUser, deleteUser, getUser, getUsers, createNewUser } from "../controllers/users.js" 

const router = express.Router(); 

//Update 
router.put("/:id", updateUser); //Tested and Working

//Delete 
router.delete("/:id", deleteUser);  //Tested and Working

//Get Single User
router.get("/:id", getUser); //Tested and Working

//Create User 
router.post("/createUser", createNewUser); //Tested and Working

//Get All Users 
router.get("/", getUsers); //Tested and Working


export default router;