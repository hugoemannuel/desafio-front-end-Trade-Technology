import { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginContext from "../../shared/context/LoginContext";
import { useMutation } from "react-query";
import { getCountries } from "../../services/countries";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const { apiKey, setApiKey, setContries } = useContext(LoginContext);
  const [error, setError] = useState(false);

  const { mutate: handleLogin } = useMutation(
    (apiKey?: string) => getCountries(apiKey), {
    onSuccess: (countries) => {
      if (countries.length) {
        toast.error('Logado com sucesso', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 4000,
        })
        setError(false)
        setContries(countries)
        navigate('/home')
      } else {
        setError(true);
        toast.error('Api key nao foi passada corretamente ou ela nao esta cadastrada', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 4000,
        })
      }
    },
    onError: () => {
      setError(true);
      toast.error('Api key nao foi passada corretamente ou ela nao esta cadastrada', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
      })
    }
  }
  );

  return (
    <Grid2 spacing={3} alignItems='center' mt={30}>
      <Grid2>
        <TextField
          sx={{ width: 220 }}
          type="text"
          error={error}
          placeholder="Digite o api Key"
          value={apiKey}
          onChange={({ target: { value } }) => setApiKey(value)}
          size="small"
          label='Api key'
        />
      </Grid2>
      <Grid2 mt={2}>
        <Button sx={{ width: 220 }} onClick={() => handleLogin(apiKey)} size="small" variant="contained">
          Login
        </Button>
      </Grid2>
      <ToastContainer />
    </Grid2>
  )
}

export default Login;