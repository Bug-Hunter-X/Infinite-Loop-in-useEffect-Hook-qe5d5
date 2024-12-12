```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: runs only once on mount
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Increment every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div>Count: {count}</div>;
}
```