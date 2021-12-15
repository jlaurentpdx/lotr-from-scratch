# The One API (sort of) From Scratch

Use [this template repo](https://github.com/alchemycodelab/react-lotr-from-scratch) as your template. Your fetch code for films and characters has been provided for you in the `/src/services` folder - you will need to add the code for books. These are the functions you will call when loading your data. Take a close look at the characters code for fetching to determine how to connect it to your state variables.

### Learning Objectives

- On load, use fetch to hit a GET endpoint, get all items, and set state and update the view using the response.
- Use useEffect hook with a dependency array to retrieve data when a component first mounts
- Create the illusion of multiple pages in a Single Page Application routes by using react-router.
- Create navigation on your application by adding `<NavLink>`s

### Description

For this deliverable, you will be fetching data from the Lord of the Rings API and creating the illusion of multiple pages using React Router.

Your app should include the following routes using React Router

- `/` which should display a home page with a header and nav links
- `/films` which should display the `<Films />` view
- `/characters` which should display the `<Characters />` view
- `/books` which should display the `<Book />` view

Remember to use the Container / Presentational pattern. Your views should hold state and pass down props / events to presentational components.

Your characters page should include the ability to filter the API by race. The possible races are

```html
<option value="All">All</option>
<option value="Dwarf">Dwarf</option>
<option value="Elf">Elf</option>
<option value="Hobbit">Hobbit</option>
<option value="Human">Human</option>
<option value="Maiar">Maiar</option>
<option value="Orc">Orc</option>
```

### Acceptance Criteria

- Users should be displayed a home page with a header and links to each of the individual route pages
- Users should see a list of the LOTR films when they navigate to `/films`
- Users should see a list of the LOTR books when they navigate to `/books`
- Users should see a list of the LOTR characters when they navigate to `/characters`
- Users should be able to filter characters by race on the characters page

### Rubric

| Task                                                                                          | Points |
| --------------------------------------------------------------------------------------------- | ------ |
| React router properly configured in App.js                                                    | 5      |
| Home Page with header and links (using `<NavLink>` components)                                | 2      |
| Films page rendered by React router at `/films` which displays a list of films                | 3      |
| Books page rendered by React router at `/books` which displays a list of books                | 3      |
| Characters page rendered by React router at `/characters` which displays a list of characters | 3      |
| Characters can be filtered by race                                                            | 3      |
| Utilizes container / presentational component pattern                                         | 1      |

### Stretch Goals (Up to 2 additional points)

- Allow users to search for characters by name - make sure to only call the API when the user clicks a button, not on every letter typed

#

-
-
-
-
-

#

# Walkthrough

1. Be sure to work on a branch! `git checkout -b dev`
1. `npm i`
1. `npm install react-router-dom@5`
1. Remove `.example` from `.env.development.local.example`
1. Add REACT_APP keys to `.env.development.local`
   - Remember to add these to **GitHub** Secrets and **Netlify** Environment Variables
1. Make new files:
   - `src/services/books.js`
   - `components/...`
     - `BookList.js`
     - `CharacterList.js`
     - `FilmList.js`
   - `view/...`
     - `Books/Books.js`
     * `Books/Books.css`
     - `Characters/Characters.js`
     * `Characters/Characters.css`
     - `Films/Films.js`
     * `Films/Films.css`
   * We can also clear all `.keep` files once this is complete
1. In `App.js`:
   - Import BrowserRouter, NavLink, Switch, and Route from `react-router-dom`
   - Import all existing Views
   - Initialize layout for page
1. In `views/`:

   - Each component in this folder will import `useEffect` and `useState` from React
   - Get info from the API using our fetch calls from `src/services/componentName.js`
   - Return the following :

   ```jsx
   return (
     <div>
       <NamedComponent />
     </div>
   );
   ```

1. In `components/`
   - Transform passed-in data (_props_) using `props.map()`
