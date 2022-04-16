SELECT COUNT(R.song_id) AS `quantidade_musicas_no_historico`
FROM SpotifyClone.User AS U
INNER JOIN SpotifyClone.Reproduction AS R
ON U.user_id = R.user_id
WHERE U.username = 'Bill';
