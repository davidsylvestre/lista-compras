import axios from "axios";

export default async function getFoodOptions() {
  const url = "";
  const { data } = await axios.get(
    "https://taco-food-api.herokuapp.com/api/v1/food"
  );
  return data.map((food) => ({ option: food.description }));
}
