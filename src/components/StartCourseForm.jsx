import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from './Button';
import Checkbox from './Checkbox';
import Input from './Input';

const schema = yup.object({
  name: yup.string().required('Please provide a name!'),
  email: yup.string().email().required('Please provide an email!'),
});

const defaultSubmit = async (formData) => {
  let response;
  try {
    response = await fetch('https://lemon-ai.com/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.log('There was an error', error);
  }

  if (response?.ok) {
    console.log('Use the response here!');
  } else {
    console.log(`HTTP Response Code: ${response?.status}`);
  }
  alert(JSON.stringify(formData));
};

const StartCourseForm = ({ onSubmit = defaultSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form className="flex flex-col w-[300px]" onSubmit={handleSubmit(onSubmit)}>
      <Input name="name" errors={errors} register={register} />
      <Input name="email" errors={errors} register={register} />
      <div className="mt-[44px]">
        <Checkbox
          name="updates"
          register={register}
          text="I want to reveive updates via email."
        />
      </div>
      <Button>Start the Course</Button>
    </form>
  );
};

export default StartCourseForm;
