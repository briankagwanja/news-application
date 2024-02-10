import icons from 'url:../img/sprite.svg';

class NewsView {
  _parentEL = document.querySelector('.news');
  _data;
  _appleInfo = document.querySelector('.apple-info');
  _errorMessage = `We could not find your news!! Please try again`;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEL.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentEL.innerHTML = '';
  }

  addHandlerRender(handler) {
    this._appleInfo.addEventListener('click', handler);
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
            <svg>
              <use xlink:href="${icons}#icon-loader"></use>
            </svg>
          </div>
    `;

    this._clear();
    this._parentEL.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
            <img src="error.1352d23e.jpg" alt="error" class="error__img" />
            <p class="error__para">${message}</p>
        </div>
    `;

    this._clear();
    this._parentEL.insertAdjacentHTML('afterbegin', markup);
  }

  _formatDate(date) {
    const nDate = new Date(date);
    const locale = navigator.language;
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const newDate = new Intl.DateTimeFormat(locale, options).format(nDate);
    // console.log(newDate);

    return newDate;
  }

  _generateMarkup() {
    console.log(this._data);

    return `
        ${this._data
          .map(article => {
            return `
            <div news__info>
                <p class="news__title">
                <span class="news__key">Title:</span>
                <span class="news__headline"
                    >${article.title}</span
                >
                </p>

                <div class="news__group">
                <p class="news__content">
                    ${article.description}
                </p>
                </div>

                <div class="news__group">
                <p class="news__title">
                    <span class="news__key">Aurthor</span>
                    ${article.author}
                </p>

                <p class="news__title">
                    <span class="news__key">Date Published: </span>
                    ${this._formatDate(article.publishDate)}
                </p>
                </div>

                <div class="news__url">
                <a href="${article.url}" class="news__link"
                    >Read More...</a
                >
                </div>
            </div>
            
            `;
          })
          .join(' ')}
    
    `;
  }
}

export default new NewsView();
