// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8");

const pokeFilter = (pokemon) => pokemon.name === 'Squirtl';
describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectError = new Error('Não temos esse pokémon para você :(');

    expect(getPokemonDetails(pokeFilter, (error, msg) => expect(error).toEqual(expectError)));
    done();
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedPokemon = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';

    expect(getPokemonDetails(pokeFilter, (error, msg) => expect(msg).toEqual(expectedPokemon)));;
    done();
  });
});
