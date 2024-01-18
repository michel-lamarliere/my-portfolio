import { useMutation } from '@tanstack/react-query';
import { axios } from '@/libs/axios';

type InputValuesDTO = {
  name: string;
  emailAddress: string;
  message: string;
};

const request = async (values: InputValuesDTO) => {
  await axios.post('/michel/form', {
    name: values.name,
    emailAddress: values.emailAddress,
    message: values.message
  });
};

export const useSendEmail = () => {
  return useMutation({
    mutationFn: (values: InputValuesDTO) => request(values)
  });
};
