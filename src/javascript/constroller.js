import * as model from './model.js';
import newsView from './view.js';

const controlResults = async function () {
  try {
    //render spinner
    newsView.renderSpinner();

    //loading for results
    await model.loadResults();

    //rendering the results
    newsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
    newsView.renderError();
  }
};

const init = function () {
  newsView.addHandlerRender(controlResults);
};

init();
