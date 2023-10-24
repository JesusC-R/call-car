export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "30560cc874mshaca887c8b6ad7dcp18aa02jsn14480a17eb0d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
