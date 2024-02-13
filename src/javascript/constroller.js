import * as model from './model.js';
import newsView from './view.js';

const controlAppleResults = async function () {
  try {
    //render spinner
    newsView.renderSpinner();

    //loading for results
    await model.loadAppleResults();

    //rendering the results
    newsView.render(model.state.search.results.apple);
  } catch (err) {
    console.log(err);
    newsView.renderError();
  }
};

const controlTeslaResults = async function () {
  try {
    //render spinner
    newsView.renderSpinner();

    //loading for results
    await model.loadTeslaResults();
    //rendering the results
    newsView.render(model.state.search.results.tesla);
  } catch (err) {
    console.log(err);
    newsView.renderError();
  }
};

const controlWsjResults = async function () {
  try {
    //render spinner
    newsView.renderSpinner();

    //loading for results
    await model.loadWsjResults();

    //rendering the results
    newsView.render(model.state.search.results.wsj);
  } catch (err) {
    console.log(err);
    newsView.renderError();
  }
};

const controlBusinessResults = async function () {
  try {
    //render spinner
    newsView.renderSpinner();

    //loading for results
    await model.loadBusinessResults();

    //rendering the results
    newsView.render(model.state.search.results.usbus);
  } catch (err) {
    console.log(err);
    newsView.renderError();
  }
};

const controlTechResults = async function () {
  try {
    //render spinner
    newsView.renderSpinner();

    //loading for results
    await model.loadTechResults();

    //rendering the results
    newsView.render(model.state.search.results.tech);
  } catch (err) {
    console.log(err);
    newsView.renderError();
  }
};
// controlResults();
const init = function () {
  newsView.addAppleHandlerRender(controlAppleResults);
  newsView.addBusinessHandlerRender(controlBusinessResults);
  newsView.addTechHandlerRender(controlTechResults);
  newsView.addTeslaHandlerRender(controlTeslaResults);
  newsView.addWsjHandlerRender(controlWsjResults);
};

init();
