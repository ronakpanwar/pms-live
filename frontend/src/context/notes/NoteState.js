import axios from "axios";
import NoteContext from "./noteContext";
import { useEffect, useState } from "react";
import { userApi } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { setAdmins } from "../../redux/userSlice";

const NoteState = (props)=>{

    // Admin data
    const adminData = {
        name: "ronak",
        email: "ronakpanwar18@gmail.com",
        password: "rpv@238"
    };

    const [admin, setAdmin] = useState(adminData);
      

     const dispatch = useDispatch();


     






    const updatePassword = (newPassword) => {
        setAdmin({
            ...admin,
            password: newPassword
        });
        
       
    }
  

    // student details

    const studentData= [
        {
        firstname : "Ronak",
        lastname :"panwar",
        email : "ronakpanwar18@gmail.com",
        address : "mandsaour",
        branch : "CSBS",
        enrollmentno : "0002CB211043",
        year: "3rd",
        gender : "male",
        phonenumber : 62637150673,
        password : "ronak@123",
        aboutme : null ,
        skills : null,
        experience : null ,
        resume : null ,

    },
    {
        firstname : "Ayush",
        lastname :"sahu",
        email : "ayush@gmail.com",
        address : "bhopal",
        branch : "CSBS",
        enrollmentno : "0002CB211012",
        year: "3rd",
        gender : "male",
        phonenumber : 11111111,
        password : "ayush@123",
        aboutme : null ,
        skills : null,
        experience : null ,
        resume : null ,

    }

];
 
    const [student , setStudent] = useState(studentData);

    // add student
    const addStudent = async (newStudent) => {
        setStudent([...student, newStudent]);
        console.log(student);
    }
    const sL = student.length;


    // to store student information
    const [sData , setsData] = useState({
        firstname : "",
        lastname :"",
        email :"",
        address : "",
        branch : "",
        enrollmentno : "",
        year: "",
        gender : "",
        phonenumber : "",
        password : "",
        aboutme : "" ,
        skills : "",
        experience : "",
        resume : "" ,

    });
 const studentdata= async(data)=>{
        for(let i =0 ; i < student.length ; i++){
            if(data.user === student[i].enrollmentno){
                setsData(student[i]);
                break;
            }
        }
    }


    // update student profile
    const updateStudent = async(data) => {
        setStudent(prevStudents => prevStudents.map(student => {
            if (student.enrollmentno === data.enrollmentno) {
                return { ...student, ...data }; // Update the student with the new data
            }
            return student; // Return the student unchanged if it's not the one to update
        }));
    };


// Add company 

 const companyData = [
    {
        companyname: 'TCS',
        address: 'Delhi',
         email: 'tcs@gmail.com',
         website: 'www.tcs.com',
         phone: '0000-0000',
         password: 'tcs123'
    }
    ,{
        companyname: 'Flipcart',
        address: 'delhi',
         email: 'flipcart@gmail.com',
         website: 'www.flipcart.com',
         phone: '0000-0000',
         password: 'flipcart123'
    }
 ]

  const [company , setCompany] = useState(companyData);
   
//   add company 
   const addCompany = async(newCompany)=>{
       setCompany([...company , newCompany]);
      
   }


  const cL = company.length;

//   company data
 const [cData , setcData] = useState({
    companyname: '',
    address: '',
     email: '',
     website: '',
     phone: '',
     password: ''
 })
  
 const companydata = (data)=>{
    for(let i =0 ; i < company.length ; i++){
        if(data.user === company[i].email){
            setcData(company[i]);
            break;
        }
    }
 }





    return(
        <NoteContext.Provider value={{admin , updatePassword , student, sL , addStudent , company, cL,addCompany ,studentdata , sData , updateStudent , cData , companydata }}>
        {props.children}
        </NoteContext.Provider>
    )
 
}

export default NoteState 