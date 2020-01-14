export const codeSnippets = {
  lambda: `
    const LambdaList = ({ listItems }) => {
      const [items, setItems] = useState(listItems);
      const toggleStatus = itemId => {
        setItems(state =>
          state.map(item =>
            item.id === itemId ? { ...item, isActive: !item.isActive } : item
          )
        );
      };
    
      return (
        <ul className="list">
          {items.map(item => (
            <LambdaListItem
              item={item}
              key={item.id}
              onClick={() => toggleStatus(item.id)}
            />
          ))}
        </ul>
      );
    };
    `,
  reference: `
    const ListUseReference = ({ listItems }) => {
      const [items, setItems] = useState(listItems);
      // using 'useCallback' to pass a memoized version of the callback as onClick handler
      const handler = useCallback(itemId => {
        setItems(state =>
          state.map(item =>
            item.id === itemId ? { ...item, isActive: !item.isActive } : item
          )
        );
      }, []);
    
      return (
        <ul className="list">
          {items.map(item => (
            <ReferenceListItem item={item} key={item.id} onClick={handler} />
          ))}
        </ul>
      );
    };
    `
};
