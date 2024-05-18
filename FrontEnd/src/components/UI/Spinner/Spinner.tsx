import PuffLoader from 'react-spinners/PuffLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};
type SpinnerProps = {
  loading: boolean;
};

const Spinner = ({ loading }: SpinnerProps) => {
  return (
    <PuffLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;
