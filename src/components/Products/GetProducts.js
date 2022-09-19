import { searchAll } from "../../services/MyPet_API";

async function getProducts() {
  try {
    const promise = await searchAll();
    return promise;
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}

export { getProducts };
