import { IRepositoryItemProps } from "../interfaces/repository-props.interface.";

export function RepositoryItem(props: IRepositoryItemProps) {
  return (
    <li>
      <strong>{ props.repository?.name }</strong>
      <p>{ props.repository?.description }</p>

      <a href={ props.repository?.html_url }>Acessar repositório</a>
    </li>
  );
}