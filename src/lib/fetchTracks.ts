import { SavedTrack } from 'spotify-types';
const apiToken = 'BQDkahcKxWm0HgzJyTorLG6v4tdUFS96ypf4H9e_P6nhG7pU0mWEOnf6Wr1lPKP-_AC5JwMSgmvajHxXISVi_ATCmk80TVRS8d8YGivcgZqiAT5BAiZpl2mx4crbRlusvhqGMpjLkomWX1wKjjJiecr5v0DSfX4b9P_pxt7VbfbtyTBJgcT2c94f7Q20-TTdG05cgDcWqLBBGHML7N27GPYP7ebHIA';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[] };

  return data.items;
};
