import { SavedTrack } from 'spotify-types';
const apiToken = 'BQAAiBZ4Z0L5F1C2gUW3UNl-bDci9iBJLbFCUDp6CL64RD6ZgsGO0sfZokEghZDzcF6ANka-1K1oh1AqkcZfazRwO3LYWATfbh6yfKPgAV0CKhCM1FBMNbiU6mA_-mZnzNacckIhj6ZMI9-a8tIwW91aDEJwNb8MHxOJ0Dux5WrKHtdDUInTYtx4MuOfpKHWSWhidVaDbrWc7n8iCfywQTJT0VmmPw';

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
