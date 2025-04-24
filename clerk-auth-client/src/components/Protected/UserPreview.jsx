const UserPreview = ({userData}) => {
    const renderObject = (obj) => {
        if (typeof obj !== 'object' || obj === null) {
          return String(obj);
        }
    
        return (
          <ul>
            {Object.entries(obj).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong>
                {typeof value === 'object' ? renderObject(value) : String(value)}
              </li>
            ))}
          </ul>
        );
      };
    
      return (
        <div>
          {renderObject(userData)}
        </div>
      );
}

export default UserPreview;