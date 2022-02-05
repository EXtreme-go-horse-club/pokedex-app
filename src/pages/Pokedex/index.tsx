import { useEffect, useState } from "react";
import { pokeApi } from "../../services/api";
import {
  Card,
  Content,
  Filter,
  Info,
  PokeImage,
  Search,
  Skills,
  Types,
  Wrapper,
} from "./styles";

interface IPokeResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<IPokeResult>({} as IPokeResult);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    pokeApi
      .get("pokemon?limit=151")
      .then((response) => setPokemons(response.data as IPokeResult))
      .catch()
      .finally(() => setLoading(false));
  }, []);

  return (
    <Wrapper>
      {loading && <h1>Loading ...</h1>}

      <Filter>
        <Search>
          <h3>
            905 <strong>Pokemons</strong> for you to choose your favorite
          </h3>
          <input type="text" placeholder="Encuentra tu pokémon..." />
        </Search>
      </Filter>

      <Content>
        <Card>
          <Info>
            <h5>Pikachu</h5>
            <Skills>
              <div>
                <span>419</span>
                <span>40</span>
              </div>
              <div>
                <span>ataque</span>
                <span>defesa</span>
              </div>
            </Skills>
            <Types>
              <span>Grass</span>
              <span>Poison</span>
            </Types>
          </Info>
          <PokeImage>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt=""
              height="136"
              width="160"
            />
          </PokeImage>
        </Card>
      </Content>
    </Wrapper>
  );
};

export default Pokedex;
