import Tag from 'components/Tag';

const TagList = ({ tags }) => (
  <ul>
    {tags.map((tag) => (
      <li key={tag.key} className="mt-2">
        <Tag tag={tag} />
      </li>
    ))}
  </ul>
);

export default TagList;
