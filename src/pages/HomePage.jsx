import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
      );
      const data = await res.json();
      // console.log(data.hits);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  const handleSearchRecipe=(e)=>{
      e.preventDefault();  // ! to prevent the page from loading
      fetchRecipes(e.target[0].value)
  }
  return (
    <div className="bg-[#faf9fb p-10 flex-1 ">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="flex items-center gap-2 rounded-lg p-2 shadow-md">
            <Search size={24} className="hover:cursor-pointer" />
            <input
              type="text"
              className="text-sm md:text-md grow  outline-none  border-none"
              placeholder="What do you wanna cook today?"
            />
          </label>
        </form>
        <h1 className=" font-bold text-3cl md:text-5xl mt-4"> Recommended</h1>
        <p className=" text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular Choices
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* 1st recipe */}
          {/*<RecipeCard */}

          {!loading &&
            recipes.map(({ recipe }, index) => (
              // console.log(recipe);
              <RecipeCard key={index} recipe={recipe} />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
