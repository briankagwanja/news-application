import {
  API_URL_APPLE,
  API_URL_TECH,
  API_URL_TESLA,
  API_URL_USBUS,
  API_URL_WSJ,
} from './config';
import { getJSON, getMultipleJSON } from './helper';

export const state = {
  search: {
    results: {
      apple: [],
      wsj: [],
      tesla: [],
      usbus: [],
      tech: [],
    },
  },
};

// const url = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/5';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'c3c650098emshac01e7037e0f21ap18e0b6jsnc47ef0a9b85a',
//     'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com',
//   },
// };

//

// const url = 'https://newly-released-movies.p.rapidapi.com/genres';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'c3c650098emshac01e7037e0f21ap18e0b6jsnc47ef0a9b85a',
//     'X-RapidAPI-Host': 'newly-released-movies.p.rapidapi.com',
//   },
// };

export const loadAppleResults = async function () {
  try {
    const data = await getJSON(API_URL_APPLE);

    console.log(data);

    state.search.results.apple = data.articles.map(article => {
      return {
        author: article.author,
        title: article.title,
        description: article.description,
        publishDate: article.publishedAt,
        url: article.url,
      };
    });

    console.log(state.search.results);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loadTeslaResults = async function () {
  try {
    const data = await getJSON(API_URL_TESLA);

    console.log(data);

    state.search.results.tesla = data.articles.map(article => {
      return {
        author: article.author,
        title: article.title,
        description: article.description,
        publishDate: article.publishedAt,
        url: article.url,
      };
    });

    console.log(state.search.results);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loadTechResults = async function () {
  try {
    const data = await getJSON(API_URL_TECH);

    console.log(data);

    state.search.results.tech = data.articles.map(article => {
      return {
        author: article.author,
        title: article.title,
        description: article.description,
        publishDate: article.publishedAt,
        url: article.url,
      };
    });

    console.log(state.search.results);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loadWsjResults = async function () {
  try {
    const data = await getJSON(API_URL_WSJ);

    console.log(data);

    state.search.results.wsj = data.articles.map(article => {
      return {
        author: article.author,
        title: article.title,
        description: article.description,
        publishDate: article.publishedAt,
        url: article.url,
      };
    });

    console.log(state.search.results);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loadBusinessResults = async function () {
  try {
    const data = await getJSON(API_URL_USBUS);

    console.log(data);

    state.search.results.usbus = data.articles.map(article => {
      return {
        author: article.author,
        title: article.title,
        description: article.description,
        publishDate: article.publishedAt,
        url: article.url,
      };
    });

    console.log(state.search.results);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
