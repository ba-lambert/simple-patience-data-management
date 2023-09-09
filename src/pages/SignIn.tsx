import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, gql } from '@apollo/client';
// import {usestate} from 'react'

interface IFormInput {
  userName: string;
  email: string;
  password: string;
}
const ADD_BOOK_MUTATION = gql`
mutation Login($userName: String, $email: String, $password: String, $profile: String) {
  login(userName: $userName, email: $email, password: $password, profile: $profile) {
    email
    password
    profile
    userName
  }
}
`;

function SignIn() {
  const [signIn] = useMutation(ADD_BOOK_MUTATION)
  // const [email,setEmail] = usestate('');
  // const [password,setPassword] = usestate('');
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // e.preventDefault();
    const response = await signIn({
      variables:{
        email:data.email,
        password:data.password
      }
    })
    const token = response
    console.log(token);
    
  };


  return (
    <div className="flex flex-row justify-center items-center space-x-3 mx-10 w-screen border border-black h-[85%] rounded-2xl overflow-hidden font-poppins">
      <img
        src="https://img.freepik.com/free-photo/beautiful-african-american-doctor-couple-white_155003-41583.jpg"
        alt=""
        className="flex-1 h-[100%] w-[50%] object-cover hidden sm:block"
      />
      <div className="flex flex-col flex-2 w-[50%] justify-center items-center space-y-10">
        <img src="https://www.aha.org/sites/default/files/achi/AHA%20Logo%20-%20transparent%20background.gif" alt="" className="w-20 rounded-full top-0"/>
        <h1 className="te font-bold capitalize text-3xl text-blue-500">
          Sign In
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start space-y-2">
          <div className="flex flex-col sm:flex-row space-x-2 justify-between">
            <label>userName:</label>
            <input {...register("userName")} placeholder="user" className="border h-8 px-5 outline-none rounded-full text-gray-500 w-64"/>
          </div>
          <div className="flex flex-col sm:flex-row space-x-2 justify-between">
            <label>email:</label>
            <input {...register("email")} placeholder="email" className="border h-8 px-5 outline-none rounded-full text-gray-500 w-64"/>
          </div>
          <div className="flex flex-col sm:flex-row space-x-2  justify-between">
            <label>Password:</label>
            <input {...register("password")} placeholder="password" type="password" className="border h-8 px-5 outline-none rounded-full text-gray-500 w-64"/>
          </div>
          <input type="submit" className="border bg-blue-600 mt-5 h-10 rounded-full text-white uppercase font-bold cursor-pointer hover:bg-gray-500"/>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
