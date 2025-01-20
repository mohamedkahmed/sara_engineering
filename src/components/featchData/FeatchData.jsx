import { createClient } from "contentful";
import { useEffect, useState } from "react";

function checkURLProtocal(url) {
  const rgex = /http(s)/gi;
  const newURL = rgex.test(url) ? url : `https:${url}`;
  return newURL;
}

/* home sliders */

const homeSliderContent = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "LPe6JTpY3vcr7nZWk8pJxcf9CcHwkNH7fLCxke69gYY",
});

export const useFetchHomeSlider = () => {
  const [loading, setLoading] = useState(true);
  const [homeslider, setHomeSlider] = useState([]);
  const getData = async () => {
    try {
      const response = await homeSliderContent.getEntries({ content_type: "homeSlider" });
      const homeSlider = response.items.map((item) => {
        const { title, desc, img, url } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        return { title, id, desc, image, url };
      });
      setHomeSlider(homeSlider);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, homeslider };
};

/* home features */

const aboutFeaturess = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "9Ihxy3dZO8Ch0WrjvjjoornxG5Hy4O0omIvSmKPQ-6w",
});

export const useFetchAboutFeatures = () => {
  const [loading, setLoading] = useState(true);
  const [aboutFeat, setAaboutFeat] = useState([]);
  const getData = async () => {
    try {
      const response = await aboutFeaturess.getEntries({ content_type: "aboutFeatures" });
      const aboutFeatures = response.items.map((item) => {
        const { title, num, iconImage } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(iconImage?.fields?.file?.url);
        return { title, id, image, num };
      });
      setAaboutFeat(aboutFeatures);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, aboutFeat };
};

/* home solutions */

const singleSolution = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "X_CsVfAVIZP8I-9kQS3MM4p5It_90dtA98VbdyvYrTo",
});

export const useFetchHomeSolution = () => {
  const [loading, setLoading] = useState(true);
  const [homesolution, setSingleSolution] = useState([]);
  const getData = async () => {
    try {
      const response = await singleSolution.getEntries({ content_type: "homeSolutions" });
      const homeSolutions = response.items.map((item) => {
        const { title, img, url } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        return { id, title, image, url };
      });
      setSingleSolution(homeSolutions);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, homesolution };
};

/* roadmap */

const homeRoadmap = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "yzxKi8TmT7wSnGkO3OCPnJRtCtwtxfWf_72x6LcQevc",
});

export const useFetchRoadmap = () => {
  const [loading, setLoading] = useState(true);
  const [roadmmap, setRoadmap] = useState([]);
  const getData = async () => {
    try {
      const response = await homeRoadmap.getEntries({ content_type: "roadmap" });
      const roadmap = response.items.map((item) => {
        const { desktopRoadMap, mobileRoadMap } = item.fields;
        const id = item.sys.id;
        const deskRoad = checkURLProtocal(desktopRoadMap?.fields?.file?.url);
        const mobileRoad = checkURLProtocal(mobileRoadMap?.fields?.file?.url);
        return {id ,deskRoad, mobileRoad };
      });
      setRoadmap(roadmap);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, roadmmap };
};

/* our team */

const ourTeams = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "rqJW13mik9M-6A9mMuNWqCv-YuzRz9HnUnkqkiDSAHI",
});

export const useFetchOurTeams = () => {
  const [load, setLoading] = useState(true);
  const [ourteam, setOurTeam] = useState([]);
  const getData = async () => {
    try {
      const response = await ourTeams.getEntries({ content_type: "ourTeam" });
      const ourTeam = response.items.map((item) => {
        const { name, job, img, url } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        return { name, job, id, image, url };
      });
      setOurTeam(ourTeam);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { load, ourteam };
};

/* Building Automation */

const buildingAutomationPage = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "BDFUe1wBI5xO_9MMxaGdG6LP1buGsSNxbkzA-1DiDLw",
});

export const useFetchBuildingAutomation = () => {
  const [loading, setLoading] = useState(true);
  const [buildingAutomation, setBuildingAutomation] = useState([]);
  const getData = async () => {
    try {
      const response = await buildingAutomationPage.getEntries({ content_type: "buildingAutomation" });
      const buildingAutomation = response.items.map((item) => {
        const { img, title, para1, para2, prandImg } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        const prandImage = prandImg.map((ele) => {
          return checkURLProtocal(ele.fields?.file?.url);
        });
        return { id, image, title, para1, para2, prandImage };
      });
      setBuildingAutomation(buildingAutomation);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, buildingAutomation };
};

/* Industrial Automation */

const industrialAutomationPage = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "UAbyY63Iy_uTfJ1s2_D1242tk7JrkM4YaVaA8X8lvjM",
});

export const useFetchIndustrialAutomation = () => {
  const [loading, setLoading] = useState(true);
  const [industrialAutomation, setIndustrialAutomation] = useState([]);
  const getData = async () => {
    try {
      const response = await industrialAutomationPage.getEntries({ content_type: "industrialAutomation" });
      const industrialAutomation = response.items.map((item) => {
        const { img, title, para1, para2, brandImg } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        const brandImage = brandImg.map((ele) => {
          return checkURLProtocal(ele.fields?.file?.url);
        });
        return { id, image, title, para1, para2, brandImage };
      });
      setIndustrialAutomation(industrialAutomation);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, industrialAutomation };
};

/* Energy Monitoring */

const energyMonitoringPage = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "nMXEx5gcWq96rmJBUQCuqRx0HPhTflu0MRijmPplV44",
});

export const useFetchEnergyMonitoring = () => {
  const [loading, setLoading] = useState(true);
  const [energyMonitoring, setEnergyMonitoring] = useState([]);
  const getData = async () => {
    try {
      const response = await energyMonitoringPage.getEntries({ content_type: "energyMonitoring" });
      const energyMonitoring = response.items.map((item) => {
        const { img, title, para1, para2, brandImg } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        const brandImage = brandImg.map((ele) => {
          return checkURLProtocal(ele.fields?.file?.url);
        });
        return { id, image, title, para1, para2, brandImage };
      });
      setEnergyMonitoring(energyMonitoring);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, energyMonitoring };
};

/* Wiring Devices */

const wiringDevicesPage = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "CCTCeBEUKdO1X1BmwUnwnf6sMVg525WC-e0O9j9bV7s",
});

export const useFetchWiringDevices = () => {
  const [loading, setLoading] = useState(true);
  const [wiringDevices, setWiringDevices] = useState([]);
  const getData = async () => {
    try {
      const response = await wiringDevicesPage.getEntries({ content_type: "wiringDevices" });
      const wiringDevices = response.items.map((item) => {
        const { img, title, para1, para2, brandImg } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        const brandImage = brandImg.map((ele) => {
          return checkURLProtocal(ele.fields?.file?.url);
        });
        return { id, image, title, para1, para2, brandImage };
      });
      setWiringDevices(wiringDevices);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, wiringDevices };
};

/* Electric Vehicles Chargers */

const electricVehiclesChargersPage = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "Enlj2d1oDAtkfJ4cC2mUZW9w3CxK51qV5FdeztMITrY",
});

export const useFetchElectricVehiclesChargers = () => {
  const [loading, setLoading] = useState(true);
  const [electricVehiclesChargers, setElectricVehiclesChargers] = useState([]);
  const getData = async () => {
    try {
      const response = await electricVehiclesChargersPage.getEntries({ content_type: "electricVehiclesChargers" });
      const electricVehiclesChargers = response.items.map((item) => {
        const { img, title, para1, para2, brandImg } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        const brandImage = brandImg.map((ele) => {
          return checkURLProtocal(ele.fields?.file?.url);
        });
        return { id, image, title, para1, para2, brandImage };
      });
      setElectricVehiclesChargers(electricVehiclesChargers);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, electricVehiclesChargers };
};

/* Electic solutions */

const electicSolutionPage = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "lqxHn9vlFbIsS9gAvVoj-iEMGDNkvXTb2oqZvUCD_6Q",
});

export const useFetchElecticSolution = () => {
  const [loading, setLoading] = useState(true);
  const [electicSolution, setElecticSolution] = useState([]);
  const getData = async () => {
    try {
      const response = await electicSolutionPage.getEntries({ content_type: "electicSolution" });
      const electicSolution = response.items.map((item) => {
        const { title, desc, img } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        return { id, title, desc, image };
      });
      setElecticSolution(electicSolution);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, electicSolution };
};

/* app mamagement system */

const appManageSyetem = createClient({
  space: "wjc8e5m7rth8",
  environment: "master",
  accessToken: "Gs_fvl302qnNh8ebUc0_IHZOD4Fq214Z2EL3t_KQSis",
});

export const useFetchAppManage = () => {
  const [loading, setLoading] = useState(true);
  const [appManage, setAppManage] = useState([]);
  const getData = async () => {
    try {
      const response = await appManageSyetem.getEntries({ content_type: "appManageSystem" });
      const appManageSystem = response.items.map((item) => {
        const { mainTitle, title, desc, img, right } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        return { mainTitle, title, id, desc, image, right };
      });
      setAppManage(appManageSystem);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, appManage };
};

/* portal mamagement system */

const portalManageSyetem = createClient({
  space: "wjc8e5m7rth8",
  environment: "master",
  accessToken: "erhEIfu4de1j7b4tjvtq6SWDLbIzPGoRucuFQ5hHVEI",
});

export const useFetchPortal = () => {
  const [loading, setLoading] = useState(true);
  const [portalManage, setPotalManage] = useState([]);
  const getData = async () => {
    try {
      const response = await portalManageSyetem.getEntries({ content_type: "portalManageSystem" });
      const portalManageSystem = response.items.map((item) => {
        const { mainTitle, title, desc, img, right } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        return { mainTitle, title, id, desc, image, right };
      });
      setPotalManage(portalManageSystem);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, portalManage };
};

/* Electric Vehicles Chargers */

const ourCompaniesPage = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "cpLviQg6koOL6ETmZX0J8HBadJHacQ4b4SA2sk-aUMQ",
});

export const useFetchOurCompanies = () => {
  const [loading, setLoading] = useState(true);
  const [ourCompanies, setOurCompanies] = useState([]);
  const getData = async () => {
    try {
      const response = await ourCompaniesPage.getEntries({ content_type: "ourCompanies" });
      const ourCompanies = response.items.map((item) => {
        const { img, logo, para1, para2, brandImg, right, arrowColor, idTitle, url, sideImg } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        const logoImg = checkURLProtocal(logo?.fields?.file?.url);
        const sideBarImg = checkURLProtocal(sideImg?.fields?.file?.url);
        const brandImage = brandImg.map((ele) => {
          return checkURLProtocal(ele.fields?.file?.url);
        });
        return { id, image, para1, para2, brandImage, right, logoImg, arrowColor, idTitle, url, sideBarImg };
      });
      setOurCompanies(ourCompanies);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, ourCompanies };
};

/* news */

const ourNewsPage = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "Gpo84wvwcyO1JJxcNwn22xXrfpIyq6pTuNGnV6U1pvM",
});

export const useFetchOurNews = () => {
  const [loading, setLoading] = useState(true);
  const [ourNews, setOurNews] = useState([]);
  const getData = async () => {
    try {
      const response = await ourNewsPage.getEntries({ content_type: "news" });
      const news = response.items.map((item) => {
        const { img, para1, para2, title, subImages, subtitle,date, url, youWantToAddVideo
        } = item.fields;
        const id = item.sys.id;
        /* const date = item.sys.createdAt; */
        const image = checkURLProtocal(img?.fields?.file?.url);
        const urlVid = checkURLProtocal(url?.fields?.file?.url);
        const subImg = subImages.map((ele) => {
          return checkURLProtocal(ele.fields?.file?.url);
        });
        return { id, image, para1, para2, title, subImg, date, subtitle, urlVid, youWantToAddVideo
        };
      });
      setOurNews(news);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, ourNews };
};

/* contact */

const contactUs = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "wjVpL5ZECwCigpUieKNRj31ggQNlkShP6vTUt5bSB78",
});

export const useFetchContactUs = () => {
  const [loading, setLoading] = useState(true);
  const [contactLinks, setContactLinks] = useState([]);
  const getData = async () => {
    try {
      const response = await contactUs.getEntries({ content_type: "contact" });
      const contact = response.items.map((item) => {
        const { email, phone, location } = item.fields;
        const id = item.sys.id;
        return { id, email, phone, location };
      });
      setContactLinks(contact);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, contactLinks };
};

const categoriesPage = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "0zIWW-tvJVN_5A5iEWIe5mB7dVHONxl-liY4zeHh47A",
});

export const useFetchCategoriesPage = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCateories] = useState([]);
  const [projectIds, setProjectIds] = useState([]);

  const getData = async () => {
    try {
      let ids = [];
      const response = await categoriesPage.getEntries({ content_type: "categories" });
      const categories = response.items.map((item) => {
        const { category, subCategories } = item.fields;
        const id = item.sys.id;
        const collectCategories = subCategories.map((sub) => {
          const { title, projects } = sub.fields;
          const subId = sub.sys.id;
          const mapProjectIds = projects?.map((project) => {
            const projectId = project.sys.id;
            const result = { id: projectId, categoryId: id, subCategoryId: subId };
            ids.push(result);
            return result;
          });
          return { id: subId, title, categoryId: id, projects: mapProjectIds };
        });
        return { id, category, subCategories: collectCategories };
      });
      const collectSubCategories = new Array().concat(...categories.map((e) => e.subCategories));
      setSubCateories(collectSubCategories);
      setProjectIds(ids);
      setCategories(categories);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, categories, subCategories, projectIds };
};

const projectsPage = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "MZ9rcTraw_0e9bMZuZGzyN4TrHdUiOZzcOm3q9RKLgw",
});

export const useFetchProjectsPage = (projectId) => {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState({});
  const getData = async () => {
    try {
      const response = await projectsPage.getEntry(projectId);
      const { title, description, subtitle, client, consultant, mainContractor, mepContractor, providedSystem, status, projectYear, images } =
        response.fields;
        const subImg = images.map((ele) => {
            return checkURLProtocal(ele.fields?.file?.url);
          });
      setProject({
        title,
        description,
        subtitle,
        client,
        consultant,
        main_contractor:mainContractor,
        mep_contractor:mepContractor,
        provided_system:providedSystem,
        status,
        project_year:projectYear,
        subImg,
        createdAt: response.metadata?.createdAt,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, project };
};

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const response = await projectsPage.getEntries({ content_type: "mainProject" });

      const result = response.items.map((item) => {
        const { title, description, subtitle, client, consultant, mainContractor, mepContractor, providedSystem, status, projectYear, images, url, youWantToAddVideo } =
          item.fields;
          const subImg = images?.map((ele) => {
            return checkURLProtocal(ele.fields?.file?.url);
          });
          const urlVid = url?.map((ele) => {
            return checkURLProtocal(ele.fields?.file?.url);
          });
          
        return {
          title,
          description,
          subtitle,
          client,
          consultant,
          main_contractor:mainContractor,
          mep_contractor:mepContractor,
          provided_system:providedSystem,
          status,
          project_year:projectYear,
          subImg,
          id: item.sys.id,
          createdAt: item.metadata?.createdAt,
          urlVid,
          youWantToAddVideo
        };
      });

      setProjects(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};


/* home background cover  */

const homeBackground = createClient({
  space: "ehrzekm71ide",
  environment: "master",
  accessToken: "kCq12SQF1Ahb-L-Xvfiv_UlykGLViV7z_W9YIH0CXK4",
});

export const useFetchHomeBackground = () => {
  const [loading, setLoading] = useState(true);
  const [homeBackg, setHomeBackground] = useState([]);
  const getData = async () => {
    try {
      const response = await homeBackground.getEntries({ content_type: "homeBackgroundCover" });
      const homeBackgroundCover = response.items.map((item) => {
        const { img, backgroundVideo,youWantToAddVideo } = item.fields;
        const id = item.sys.id;
        const image = checkURLProtocal(img?.fields?.file?.url);
        const videoLink = checkURLProtocal(backgroundVideo?.fields?.file?.url);
        return { id, image, videoLink,youWantToAddVideo};
      });
      setHomeBackground(homeBackgroundCover);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, homeBackg };
};