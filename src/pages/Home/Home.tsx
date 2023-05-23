import { useMemo, useState } from 'react';
import { useMutation } from "react-query";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ICountries } from "../../services/countries";
import { Autocomplete, TextField } from "@mui/material";
import { getLeagues } from '../../services/leagues';
// import { useGetSeasons } from '../../shared/hooks/seasons';
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
    name: 'teste'
  },
  {
    code: 'AD',
    flag: 'https://media-2.api-sports.io/flags/ad.svg',
    name: 'Andorra',
  }
]

const mockSeason: number[] = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>();
  const [selectedSeason, setSelectedSeason] = useState<number | null>();

  // const { data: countries } = useGetCountries();
  // const { data: seasons } = useGetSeasons();
  const { mutate, data } = useMutation(
    (teamName: string) => getLeagues(teamName),
    {
      onSuccess: () => {
        console.log('***deu bom')
      },
      onError: (error) => {
        console.log('***error', error)
      }
    }
  )

  console.log(data);

  const optionCountries = useMemo(() => mokCountries.map(countrie => countrie.name), []);
  const optionSeasons = useMemo(() => mockSeason.map(season => season), []);

  return (
    <Grid2>
      <Grid2 container spacing={4}>
        <Grid2>
          <Autocomplete
            disablePortal
            sx={{ width: 220 }}
            value={selectedCountry}
            onChange={(_event, newValue) => {
              if (typeof newValue !== 'string') {
                setSelectedCountry(newValue);
                setSelectedSeason(newValue);
              } else {
                setSelectedCountry(newValue);
                mutate(newValue)
              }
            }}
            options={optionCountries}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                size='small'
                label='País'
              />
            )}
          />
        </Grid2>
        <Grid2>
          <Autocomplete
            sx={{ width: 220 }}
            disablePortal
            value={selectedSeason}
            disabled={!selectedCountry?.length ? true : false}
            options={optionSeasons}
            onChange={(_event, newValue) => setSelectedSeason(newValue)}
            renderInput={
              (params) =>
                <TextField
                  {...params}
                  size='small'
                  label='Temporada'
                />
            }
          />
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default Home;