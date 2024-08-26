import React from "react";

import { ItemContainer } from "./styles";

function ItemRepo({ repo, onRemove }) {
    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver repositório</a><br />
            <a className="remover" href="#" onClick={() => onRemove(repo.id)}>Remover</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo;
