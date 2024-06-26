import { createContext, useContext, useEffect, useState } from "react";
import {
  useFetchCategoriesPage,
  useFetchProjects,
} from "../featchData/FeatchData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { projects } = useFetchProjects();
  const { categories, projectIds } = useFetchCategoriesPage();
  const [storedProjects, setStoredProjects] = useState([]);
  const [myData, setMyData] = useState([]);
  const unique_Data = ["All", ...new Set(categories.map((item) => item.id))];
  const [bageid, setbageid] = useState(null);
  const [catgery_active, setcatgery_active] = useState("All");

  useEffect(() => {
    const collectProjects = projects
      .filter((e) => {
        return projectIds.some((pro) => pro.id == e.id);
      })
      .map((e) => {
        const project = projectIds.find((pro) => pro.id == e.id);
        return {
          ...e,
          ...project,
        };
      });
    setStoredProjects(collectProjects);
    setMyData(collectProjects);
  }, [projectIds, projects]);

  const FilterateItems = (catgery) => {
    setcatgery_active(catgery);
    if (catgery === "All") {
      return setMyData([...storedProjects]);
    }
    const newItems = storedProjects.filter((item) => {
      const categoryProjects = projectIds
        .filter((e) => e.categoryId == catgery)
        ?.map((e) => e.id);
      return categoryProjects.includes(item.id);
    });
    return setMyData(newItems);
  };
  const [massage_Apper, setmassage_Apper] = useState(false);

  const massageHandelar = () => {
    setmassage_Apper(!massage_Apper);
  };
  const close_massage = () => {
    setmassage_Apper(false);
  };
  return (
    <AppContext.Provider
      value={{
        bageid,
        setbageid,
        myData,
        close_massage,
        FilterateItems,
        catgery_active,
        unique_Data,
        massage_Apper,
        massageHandelar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
