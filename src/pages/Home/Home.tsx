import { useMemo, useState } from 'react';
import { useMutation } from "react-query";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ICountries } from "../../services/countries";
import { Autocomplete, TextField } from "@mui/material";
import { getLeagues } from '../../services/leagues';
import { useGetCountries } from "../../shared/hooks/countries";
import { useGetSeasons } from '../../shared/hooks/seasons';


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

  const { data: countries } = useGetCountries();
  const { data: seasons } = useGetSeasons();

  const { mutate: setTeamName, data: laguesAndSeasons } = useMutation(
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

  const optionCountries = useMemo(() => {
    if (countries) {
      const allContries = countries.map(country => country.name);
      return allContries
    }
    const allContries = mokCountries.map(country => country.name);
    return allContries
  }, [countries])

  const optionSeasons = useMemo(() => {
    if (seasons) return seasons
    return mockSeason
  }, [seasons]);

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
                setTeamName(newValue)
                setSelectedCountry(newValue);
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
            disabled={!selectedCountry?.length && !laguesAndSeasons ? true : false}
            options={optionSeasons}
            onChange={(_event, newValue) => {
              if (typeof newValue === 'number') {
                setSelectedSeason(newValue)
              } else {
                setSelectedSeason(newValue)
              }
            }}
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