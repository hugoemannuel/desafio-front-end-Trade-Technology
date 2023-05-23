import { useMemo } from 'react';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ICountries } from "../../services/countries";
import { Autocomplete, TextField } from "@mui/material";
// import { useGetCountries } from "../../shared/hooks/countries";

const mokCountries: ICountries[] = [
  {
    code: 'AL',
    flag: 'https://media-1.api-sports.io/flags/al.svg',
    name: 'Albania'
  },
  {
    code: 'DX',
    flag: "https://media-2.api-sports.io/flags/dz.svg",
    name: 'Algeria',
  },
  {
    code: 'AL',
    flag: 'https://media-1.api-sports.io/flags/al.svg',
    name: 'Albania'
  },
  {
    code: 'AD',
    flag: 'https://media-2.api-sports.io/flags/ad.svg',
    name: 'Andorra',
  }
]

const Home = () => {
  // const { data: countries } = useGetCountries()
  const optionAutoComplete = useMemo(() => {
    return mokCountries.map(countrie => ({ label: countrie.name }))
  }, [])

  return (
    <Grid2 container >
      <Grid2>
        <Autocomplete
          sx={{ width: 220 }}
          disablePortal
          options={optionAutoComplete}
          renderInput={
            (params) =>
              <TextField
                {...params}
                size='small'
                label='Pais'
              />
          }
        />
      </Grid2>

    </Grid2>
  )
}

export default Home;