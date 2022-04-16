SELECT
  S.song_name AS `nome`,
  COUNT(R.song_id) AS `reproducoes`
FROM SpotifyClone.User AS U
  INNER JOIN SpotifyClone.Reproduction AS R
  ON R.user_id = U.user_id
  INNER JOIN SpotifyClone.Song AS S
  ON R.song_id = S.song_id
WHERE U.sub_type IN ('gratuito', 'pessoal')
GROUP BY S.song_name
ORDER BY `nome`;
