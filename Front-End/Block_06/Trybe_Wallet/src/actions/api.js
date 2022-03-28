export default async function fetchData() {
  const res = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await res.json();
  return data;
}
