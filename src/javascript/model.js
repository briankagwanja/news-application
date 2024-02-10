import {
  API_URL_APPLE,
  API_URL_TECH,
  API_URL_TESLA,
  API_URL_USBUS,
  API_URL_WSJ,
} from './config';
import { getJSON } from './helper';

export const state = {
  search: {
    results: [],
  },
};

const deleteNull = function (arr) {
  const output = arr.filter(obj => {
    return obj.values.includes(null);
  });

  console.log(output);
};

export const loadResults = async function () {
  try {
    const data = await getJSON(API_URL_TESLA);
    // const data2 = await getJSON(API_URL_TESLA);
    // const data3 = await getJSON(API_URL_TECH);
    // const data4 = await getJSON(API_URL_USBUS);
    // const data5 = await getJSON(API_URL_WSJ);
    console.log(data);

    deleteNull(data.articles);

    state.search.results = data.articles.map(article => {
      return {
        author: article.author,
        title: article.title,
        description: article.description,
        publishDate: article.publishedAt,
        url: article.url,
      };
    });

    console.log(state.search.results);

    // state.search.results = data2.articles.map(article => {
    //   return {
    //     author: article.author,
    //     title: article.title,
    //     description: article.description,
    //     publishDate: article.publishedAt,
    //     url: article.url,
    //   };
    // });

    // state.search.results = data3.articles.map(article => {
    //   return {
    //     author: article.author,
    //     title: article.title,
    //     description: article.description,
    //     publishDate: article.publishedAt,
    //     url: article.url,
    //   };
    // });

    // state.search.results = data4.articles.map(article => {
    //   return {
    //     author: article.author,
    //     title: article.title,
    //     description: article.description,
    //     publishDate: article.publishedAt,
    //     url: article.url,
    //   };
    // });

    // state.search.results = data5.articles.map(article => {
    //   return {
    //     author: article.author,
    //     title: article.title,
    //     description: article.description,
    //     publishDate: article.publishedAt,
    //     url: article.url,
    //   };
    // });

    //   console.log(state.search.results);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// loadResults();
