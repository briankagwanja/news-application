import icons from 'url:../img/sprite.svg';

class NewsView {
  _parentEL = document.querySelector('.news');
  _header = document.querySelector('.header');
  _menuIconBox = document.querySelector('.menu__icon-box');
  _sidebar = document.querySelector('.container__sidebar');
  _data;
  _appleInfo = document.querySelector('.apple-info');
  _teslaInfo = document.querySelector('.tesla-info');
  _wsjInfo = document.querySelector('.wsj-info');
  _techInfo = document.querySelector('.tech-info');
  _bsInfo = document.querySelector('.bs-info');

  _errorMessage = `We could not find your news!! Please try again`;

  constructor() {
    // this._stickyHeader();
    this._showHideSidebar();
    this._stickyMenu();
    // this._hideSidebarAfterClick();
    // this._hideSidebar();
  }

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

  addAppleHandlerRender(handler) {
    this._appleInfo.addEventListener('click', handler);
  }

  addTeslaHandlerRender(handler) {
    this._teslaInfo.addEventListener('click', handler);
  }

  addBusinessHandlerRender(handler) {
    this._bsInfo.addEventListener('click', handler);
  }

  addTechHandlerRender(handler) {
    this._techInfo.addEventListener('click', handler);
  }

  addWsjHandlerRender(handler) {
    this._wsjInfo.addEventListener('click', handler);
  }

  _hideSidebar() {
    const mediaQuery = window.matchMedia('(max-width: 1200px)');

    if (mediaQuery.matches) {
      this._sidebar.classList.remove('hidden');
    }
  }

  _removeActive() {
    if (this._menuIconBox.classList.contains('active'))
      this._menuIconBox.classList.remove('active');
  }

  _hideSidebarAfterClick() {
    this._sidebar.addEventListener('click', function (e) {
      const item = e.target.closest('.categories__list');
      if (!item) return;

      this.classList.add('hidden');

      _removeActive().bind(this);
    });
  }

  _sidebarHandler() {
    this._sidebar.classList.toggle('hidden');
    this._menuIconBox.classList.toggle('active');
    // this._sidebar.style.opacity = 0;
    // this._sidebar.style.visibility = 'invisible';
  }
  _showHideSidebar() {
    this._menuIconBox.addEventListener(
      'click',
      this._sidebarHandler.bind(this)
    );
  }

  _stickyNav(entries) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      document.querySelector('.menu__icon-box').classList.add('sticky');
    }
  }

  _stickyMenu() {
    const options = {
      root: null,
      threshold: 0,
    };

    const observer = new IntersectionObserver(this._stickyNav, options);

    observer.observe(this._header);
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
