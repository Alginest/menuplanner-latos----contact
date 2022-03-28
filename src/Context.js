import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [calory, setCalory] = useState(2000);
  const [loading, SetLoading] = useState(false);

  const getMeals = async () => {
    SetLoading(true);
    try {
      const resp = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=d185f84130504fdfb864e7049c1b9586&timeFrame=day&targetCalories=${calory}`
      );
      const { meals } = await resp.json();
      console.log(meals);
      setMeals(meals);
      SetLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getMeals();
  // }, [calory]);

  return (
    <AppContext.Provider value={{ loading, meals, calory, setCalory }}>
      {children}
    </AppContext.Provider>
  );
};

//hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
