import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import CategoryButtons from '../../components/Buttons/RecipeFilterButton/style';
import ShareButton from '../../components/Buttons/ShareButton';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar';
import HeaderProvider from '../../contexts/HeaderContext/HeaderProvider';
import { recoveryDoneRecipesFromLocalStorage } from '../../redux/actions/doneActions';
import {
  CardContainer,
  CardContent,
  Container,
  FiltersContainer,
  TagContent,
} from './style';

function DoneRecipes() {
  const doneRecipes = useSelector((state) => state.doneRecipes);
  const dispatch = useDispatch();

  const [filterRecipes, setFilterRecipes] = useState([]);

  const history = useHistory();
  const { pathname } = useLocation();

  const filterButton = ({ target: { name } }) => {
    if (name === 'food' && doneRecipes.length !== 0) {
      const filterFoods = doneRecipes.filter((e) => e.type === name);
      setFilterRecipes(filterFoods);
    } else if (name === 'drink' && doneRecipes.length !== 0) {
      const filterDrinks = doneRecipes.filter((e) => e.type === name);
      setFilterRecipes(filterDrinks);
    } else if (doneRecipes.length !== 0) {
      setFilterRecipes(doneRecipes);
    }
  };

  useEffect(() => {
    dispatch(recoveryDoneRecipesFromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    setFilterRecipes(doneRecipes);
  }, [doneRecipes]);

  return (
    <>
      <HeaderProvider>
        <Header title="Done Recipes" history={ history } hasSearch={ false } />
        <SearchBar path={ pathname } />
      </HeaderProvider>
      <Container>
        <FiltersContainer>
          <CategoryButtons
            name="all"
            data-testid="filter-by-all-btn"
            type="button"
            onClick={ filterButton }
          >
            All
          </CategoryButtons>
          <CategoryButtons
            name="food"
            data-testid="filter-by-food-btn"
            type="button"
            onClick={ filterButton }
          >
            Food
          </CategoryButtons>
          <CategoryButtons
            name="drink"
            data-testid="filter-by-drink-btn"
            type="button"
            onClick={ filterButton }
          >
            Drinks
          </CategoryButtons>
        </FiltersContainer>
        {filterRecipes.length > 0
          && filterRecipes.map((recipe, i) => (
            <CardContainer key={ i }>
              <div className="w-1/2">
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <img
                    className="rounded-l-md"
                    data-testid={ `${i}-horizontal-image` }
                    src={ recipe.image }
                    alt={ recipe.name }
                  />
                </Link>
              </div>
              <CardContent>
                <span className="flex justify-between">
                  <p
                    className="opacity-50"
                    data-testid={ `${i}-horizontal-top-text` }
                  >
                    {recipe.type === 'drink'
                      ? recipe.alcoholicOrNot
                      : `${recipe.nationality} - ${recipe.category}`}
                  </p>
                  <ShareButton
                    favoriteId={ recipe.id }
                    testid={ `${i}-horizontal-share-btn` }
                    type={ recipe.type }
                  />
                </span>
                <Link
                  className="text-xl"
                  to={ `/${recipe.type}s/${recipe.id}` }
                  data-testid={ `${i}-horizontal-name` }
                >
                  {recipe.name}
                </Link>
                <span data-testid={ `${i}-horizontal-done-date` }>
                  {`Done in: ${recipe.doneDate}`}
                </span>
                <span className="flex justify-evenly">
                  {recipe.tags.length > 0
                    && recipe.tags.map((tag, index) => (
                      <TagContent
                        key={ index }
                        data-testid={ `${i}-${tag}-horizontal-tag` }
                      >
                        {tag}
                      </TagContent>
                    ))}
                </span>
              </CardContent>
            </CardContainer>
          ))}
      </Container>
    </>
  );
}

export default DoneRecipes;
