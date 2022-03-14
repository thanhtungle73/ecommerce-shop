import categoryApi from 'api/categoryApi';
import sliderApi from 'api/sliderApi';
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Slider from '../components/Slider';
import NewProduct from '../components/NewProduct';

HomePage.propTypes = {};

function HomePage() {
  const [slidersData, setSliderData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);

  // Get all sliders data from api json-server.
  useEffect(() => {
    (async () => {
      try {
        const { data } = await sliderApi.getAllSliders();
        setSliderData(data);
      } catch (error) {
        console.log('Get all sliders is failed by ', error);
      }
      setLoading(false);
    })();
  }, []);

  // Get home page's category from api json-server.
  useEffect(() => {
    (async () => {
      try {
        const { data } = await categoryApi.getAll();
        setCategoryData(data);
      } catch (error) {
        console.log('Get all category is failed by ', error);
      }
      setCategoryLoading(false);
    })();
  }, []);

  return (
    <div>
      <Slider slidersData={slidersData} loading={loading}></Slider>
      <Category categories={categoryData} loading={categoryLoading} />
      <Banner />
      <NewProduct />
    </div>
  );
}

export default HomePage;
