const TagSelector = ({ tags, addTag }) => (
  <ul className="max-h-60 overflow-y-auto">
    {tags.map((tag) => (
      <li key={tag.key}>
        <button
          className="flex items-center w-full p-2 text-left"
          onClick={() => addTag(tag.key)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-2 fill-current"
          >
            {tag.type === 'PERSON' && (
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            )}
            {tag.type === 'PLACE' && (
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            )}
            {tag.type === 'GENERIC' && (
              <path d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z" />
            )}
          </svg>
          {tag.name}
        </button>
      </li>
    ))}
  </ul>
);

export default TagSelector;
