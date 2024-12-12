# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly updating the state within the effect's dependency array.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

## Problem
The original code attempts to increment the count in the useEffect hook. However, because setting `setCount` triggers a re-render, the effect runs again, creating an infinite loop.