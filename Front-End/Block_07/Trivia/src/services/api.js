const API_URL = 'https://opentdb.com/api_token.php?command=request';

export async function fetchQuestions(token) {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=5&token=${token}`,
  );
  const data = await res.json();
  return data;
}

export async function fetchToken() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
