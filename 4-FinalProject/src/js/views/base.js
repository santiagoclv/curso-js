export const searchForm = document.querySelector('.search');
export const searchResult = document.querySelector('.results');
export const searchResultList = document.querySelector('.results__list');

// const getRamdomId = () => Math.random().toString(36).substring(7);

export const elementStrings = {
    loader: "loader"
}

export const clearLoader = (parent) => {
    const loader = parent?.getElementsByClassName(elementStrings.loader)[0];
    loader?.remove();
};

export const renderLoader = (parent) => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent?.insertAdjacentHTML("afterbegin", loader);
};