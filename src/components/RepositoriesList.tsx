import { useState } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");


  const { searchRepositories } = useAction();

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      <div>
        {error && <h3>error</h3>}
        {loading && <h3>loading...</h3>}
        {!error && !loading && data.map((name, i) => <div key={i}>{name}</div>)}
      </div>
    </>
  );
};

export default RepositoriesList;
