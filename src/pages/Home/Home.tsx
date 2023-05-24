import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useMutation } from "react-query";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ToastContainer, toast } from 'react-toastify';
import { ICountries } from "../../services/countries";
import { Autocomplete, TextField } from "@mui/material";
import { getLeagues, iLeaguesAndSeasons } from '../../services/leagues';
// import { useGetSeasons } from '../../shared/hooks/seasons';
import LoginContext from '../../shared/context/LoginContext';
// import { useNavigate } from 'react-router-dom';

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

const mockSeason: number[] = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];

// Albania - 2008;

const mockLeagues: iLeaguesAndSeasons[] = [
  {
    country: {
      code: "AL",
      flag: "https://media-2.api-sports.io/flags/al.svg",
      name: "Albania",
    },
    league: {
      id: 513,
      logo: "https://media-1.api-sports.io/football/leagues/513.png",
      name: "2nd Division - Group B",
      type: "League",
    },
    seasons: [
      {
        current: false,
        end: "2012-05-13",
        start: "2011-09-25",
        year: 20011
      },
      {
        current: false,
        end: "2013-04-28",
        start: "2012-09-23",
        year: 20012,
      }
    ]
  },
  {
    country: {
      code: "AL",
      flag: "https://media-2.api-sports.io/flags/al.svg",
      name: "Albania",
    },
    league: {
      id: 512,
      logo: "https://media-2.api-sports.io/football/leagues/512.png",
      name: "2nd Division - Group A",
      type: "League",
    },
    seasons: [
      {
        current: false,
        end: "2012-05-13",
        start: "2011-09-25",
        year: 20011
      },
      {
        current: false,
        end: "2013-04-28",
        start: "2012-09-23",
        year: 20012,
      }
    ]
  }
]

const Home = () => {
  // const navigate = useNavigate();
  // const { apiKey, countries } = useContext(LoginContext);
  const [selectedCountry, setSelectedCountry] = useState<string | null>();
  const [selectedSeason, setSelectedSeason] = useState<number | null>();
  const [selectedLeague, setSelectedLeague] = useState<string | null>();
  const [leagueId, setLeagueId] = useState<number>()

  // const { data: seasons } = useGetSeasons(apiKey);

  // const { mutate: setTeamName, data: laguesAndSeasons } = useMutation(
  //   (teamName: string) => getLeagues(teamName, apiKey),
  //   {
  //     onError: () => {
  //       toast.error('Nao foi possivel trazer as ligas', {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 4000,
  //       })
  //     }
  //   }
  // )

  const optionCountries = useMemo(() => {
    // if (countries) {
    //   const allContries = countries.map(country => country.name);
    //   return allContries
    // } else {
    //   const allContries = mokCountries.map(country => country.name);
    //   return allContries
    // }
    const allContries = mokCountries.map(country => country.name);
    return allContries
  }, [])

  const optionSeasons = useMemo(() => mockSeason, []);

  const optionsLeagues = useMemo(() => mockLeagues.map(league => league.league.name), []);

  const handleChangeLeague = useCallback((newValue: string | null) => {
    if (typeof newValue === 'string') {
      const findLeagueId = mockLeagues.find(league => league.league.name === newValue)?.league.id;
      setLeagueId(findLeagueId)
    }
  }, [])

  console.log('***leagueId', leagueId)

  // useEffect(() => { if (!apiKey) navigate('/') }, [apiKey, navigate])

  return (
    <Grid2 xs={12}>
      <Grid2 container spacing={4} flexWrap='wrap' alignItems='center'>
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
                // setTeamName(newValue)
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
            disabled={!selectedCountry?.length || !mockLeagues ? true : false}
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
        <Grid2>
          <Autocomplete
            sx={{ width: 220 }}
            disablePortal
            value={selectedLeague}
            options={optionsLeagues}
            onChange={(_event, newValue) => handleChangeLeague(newValue)}
            disabled={!selectedSeason ? true : false}
            renderInput={
              (params) =>
                <TextField
                  {...params}
                  size='small'
                  label='Liga'
                />
            }
          />
        </Grid2>
      </Grid2>
      <ToastContainer />
    </Grid2>
  )
}

export default Home;