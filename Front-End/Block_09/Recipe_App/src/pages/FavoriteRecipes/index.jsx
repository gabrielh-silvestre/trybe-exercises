import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { recoveryFavoriteFromLocalStorage } from '../../redux/actions/favoriteActions';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar';
import HeaderProvider from '../../contexts/HeaderContext/HeaderProvider';
import FavoriteButton from '../../components/Buttons/FavoriteButton';
import ShareButton from '../../components/Buttons/ShareButton';
import { CardContainer, Container, FiltersContainer } from '../DoneRecipes/style';
import CategoryButtons from '../../components/Buttons/RecipeFilterButton/style';
import CardContent from './style';

function FavoriteRecipes() {
  const favoriteRecipes = useSelector((state) => state.favorites.favoriteRecipes);
  const dispatch = useDispatch();

  const [filterRecipes, setFilterRecipes] = useState([]);

  const history = useHistory();
  const { pathname } = useLocation();

  const filterButton = ({ target: { name } }) => {
    if (name === 'food' && favoriteRecipes.length !== 0) {
      const filterFoods = favoriteRecipes.filter((e) => e.type === name);
      setFilterRecipes(filterFoods);
    } else if (name === 'drink' && favoriteRecipes.length !== 0) {
      const filterDrinks = favoriteRecipes.filter((e) => e.type === name);
      setFilterRecipes(filterDrinks);
    } else if (favoriteRecipes.length !== 0) {
      setFilterRecipes(favoriteRecipes);
    }
  };

  useEffect(() => {
    dispatch(recoveryFavoriteFromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    setFilterRecipes(favoriteRecipes);
  }, [favoriteRecipes]);

  return (
    <>
      <HeaderProvider>
        <Header title="Favorite Recipes" history={ history } hasSearch={ false } />
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
        {favoriteRecipes.length > 0 && filterRecipes.map((recipe, i) => (
          <CardContainer key={ i }>
            <div className="w-1/3">
              <Link
                to={ `/${recipe.type}s/${recipe.id}` }
              >
                <img
                  className="rounded-l-md"
                  data-testid={ `${i}-horizontal-image` }
                  src={ recipe.image }
                  alt={ recipe.name }
                />
              </Link>
            </div>
            <CardContent>
              <div>
                <p
                  className="opacity-50"
                  data-testid={ `${i}-horizontal-top-text` }
                >
                  {recipe.type === 'drink'
                    ? recipe.alcoholicOrNot
                    : `${recipe.nationality} - ${recipe.category}`}
                </p>
                <Link
                  className="text-xl max-h-7 overflow-hidden inline-block"
                  to={ `/${recipe.type}s/${recipe.id}` }
                  data-testid={ `${i}-horizontal-name` }
                >
                  { recipe.name }
                </Link>
              </div>
              <div className="flex justify-evenly items-start w-full">
                <ShareButton
                  testid={ `${i}-horizontal-share-btn` }
                  favoriteId={ recipe.id }
                  type={ recipe.type }
                />
                <FavoriteButton
                  blackHeartClass=""
                  recipe={ recipe }
                  testid={ `${i}-horizontal-favorite-btn` }
                />
              </div>
            </CardContent>
          </CardContainer>
        ))}
      </Container>
    </>
  );
}

export default FavoriteRecipes;
