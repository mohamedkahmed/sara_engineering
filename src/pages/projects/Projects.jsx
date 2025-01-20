import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ArrowDownIcon, BreadCrumb, Loading } from "../../components";
import { useGlobalContext } from "../../components/context/Context";
import { useFetchCategoriesPage } from "../../components/featchData/FeatchData";
import {AsNavFor} from "../../components";
import "./ProjectContent.scss";
import "./Projects.scss";
const Projects = () => {
  const { loading, categories } = useFetchCategoriesPage();
  const [show, setShow] = useState(false);

  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState();
  const { FilterateItems, catgery_active, myData } = useGlobalContext();
  const [subCategories, setSubCategories] = useState([]);

  if (loading) return <Loading />;

  return (
    <>
      <BreadCrumb
        title="Projects"
        desc="Our projects span government, semi-government, and private sectors, encompassing both local and multinational companies."
        img="/images/49.png"
      />
      <ArrowDownIcon alignItems="right" />
      <section className="our_projects_wrapper">
        <div className="container">
          <div className="title_top">
            <h2 data-aos="fade-right">our finished works</h2>
            <p data-aos="fade-left">
              Anyway, you still use Lorem Ipsum and rightly so, as it will
              always have
            </p>
          </div>

          {/* catgery */}

          <div className="filter-data">
            <div className="unqe-catgery">
              {categories.length >= 2 && (
                <button
                  onClick={() => {
                    FilterateItems("All");
                    setShow(false);
                    setSubCategories([]);
                    setSelectedCategoryId(undefined);
                    setSelectedSubCategoryId(undefined);
                  }}
                  className={
                    catgery_active === "All" ? "btn-more active" : "btn-more"
                  }
                >
                  All
                </button>
              )}
              {categories.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setShow(true);
                      setSelectedCategoryId(item.id);
                      setSelectedSubCategoryId(undefined);
                      FilterateItems(item.id);
                      setSubCategories(() => item.subCategories || []);
                    }}
                    className={
                      catgery_active === item.id
                        ? "btn-more active"
                        : "btn-more"
                    }
                  >
                    {item.category}
                  </button>
                );
              })}
            </div>
            {show && (
              <div className="unqe-catgery">
                {subCategories.map((item) => {
                  const subCategoryProjects = item.projects?.length;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedSubCategoryId(item.id);
                      }}
                      className={
                        selectedSubCategoryId === item.id
                          ? "btn-more active"
                          : "btn-more"
                      }
                      disabled={!subCategoryProjects}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          </div>

          <div className={selectedSubCategoryId ? undefined : "projects_container container"}>
            {myData
              .filter((product) => {
                if (selectedSubCategoryId)
                  return product.subCategoryId == selectedSubCategoryId;
                return product;
              })
              .map((item) => {
                const {urlVid, youWantToAddVideo} = item
                if (selectedSubCategoryId) return (
                  <section key={item.id} className="project_content">
                  <div className="images">
                    <div className="side_img_di">
                    </div>

                    <AsNavFor slides={item?.subImg || []} videos={urlVid} youWantToAddVideo={youWantToAddVideo}  />
                  </div>
                  <div className="content">
                    <h2>{item?.title}</h2>
                    <h5>{item?.subtitle}</h5>
                    <p title={item?.description}>{item?.description}</p>
                    <div className="about_project">
                      <ul>
                        <li>
                          <div>
                            <p>Client </p>
                          </div>
                          <div>
                            <span>{item?.client}</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p>Consultant </p>{" "}
                          </div>
                          <div>
                            <span>{item?.consultant}</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p>Main Contractor </p>
                          </div>
                          <div>
                            <span>{item?.main_contractor}</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p>Mep Contractor</p>
                          </div>
                          <div>
                            <span>{item?.mep_contractor}</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p>Provided System</p>
                          </div>
                          <div>
                            <span>{item?.provided_system}</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p>project status</p>
                          </div>
                          <div>
                            <span>
                              {item?.status} {item?.project_year}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                )
                return (
                  <div className="parent_card" key={item.id}>
                    <article className="card">
                      <div className="temporary_image">
                        <img
                          loading="lazy"
                          className="img"
                          src={item.subImg?.[0]}
                          alt={item.title}
                          title={item.title}
                        />
                      </div>
                      <div
                        className="card_content"
                        onClick={() => {
                          setSelectedCategoryId(item.categoryId);
                          setSelectedSubCategoryId(item.subCategoryId);
                          setShow(true);
                          FilterateItems(item.categoryId)
                          const filterSubCategories = categories.find((e) => e.id === item.categoryId)?.subCategories || [];
                            setSubCategories(filterSubCategories);
                      }}
/*                         to={
                          item.subCategoryId
                            ? `/categories/${item.categoryId}/${item.subCategoryId}`
                            : `/categories/${item.categoryId}`
                        } */
                      >
                        <span className="card_title">{item.title}</span>
                        <span className="link_to">
                          <MdKeyboardArrowDown />
                        </span>
                      </div>
                    </article>
                  </div>
                );
              })}
          </div>
      </section>
    </>
  );
};

export default Projects;