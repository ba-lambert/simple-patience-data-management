import { useMutation, gql } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";

const CREATE_APPOINTMENT = gql`
  mutation CreateAppointment($input: AppointmentInput!) {
    createAppointment(input: $input) {
      doctorId
      district
      email
    }
  }
`;

interface IFormInput {
  description: string;
  email: string;
  doctorId: string;
  district: string;
  patientId:string,
}

function DashBoard() {
  const [appointMent] = useMutation(CREATE_APPOINTMENT);
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      console.log(data);

      const response = await appointMent({
        variables: {
          input: {
            description:data.description,
            patientId:data.patientId,
            email: data.email,
            doctorId: data.doctorId,
            district: data.district,
          },
        },
      });

      // Response contains the data returned from the mutation
      console.log(response.data);

      // If you want to specifically access the appointment data
      const appointmentData = response.data.createAppointment;
      console.log(appointmentData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register("email")} />
        <label>patientId</label>
        <input {...register("patientId")} />
        <label>description</label>
        <input {...register("description")} />
        <label>Doctor</label>
        <input {...register("doctorId")} />
        <label>District</label>
        <input {...register("district")} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default DashBoard;
