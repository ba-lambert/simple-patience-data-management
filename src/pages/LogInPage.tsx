// import { useForm, SubmitHandler } from "react-hook-form";

// interface IFormInput {
//   userName: string;
//   email: string;
//   password: string;
// }

// function LogInPage() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit: SubmitHandler<IFormInput> = async (data) => {
//     console.log(data);
    
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-start space-y-2'>
//         <div className='flex flex-col sm:flex-row space-x-2 justify-between'>
//           <label>Email:</label>
//           <input
//             {...register("email")}
//             placeholder='email'
//             className='border h-8 px-5 outline-none rounded-full text-gray-500 w-64'
//           />
//         </div>
//         <div className='flex flex-col sm:flex-row space-x-2 justify-between'>
//           <label>Password:</label>
//           <input
//             {...register("password")}
//             placeholder='password'
//             type="password"
//             className='border h-8 px-5 outline-none rounded-full text-gray-500 w-64'
//           />
//         </div>
//         <input type="submit" className="border bg-blue-600 mt-5 h-10 rounded-full text-white uppercase font-bold cursor-pointer hover:bg-gray-500"/>
//       </form>
//     </div>
//   );
// }

// export default LogInPage;
