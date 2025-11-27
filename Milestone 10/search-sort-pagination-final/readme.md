### Corrections -01

When you do search , you have send skip value 0 to server , otherwise searching may not work perfectly from 1-last pages

```js
const handleSearch = (e) => {
  setSearchText(e.target.value);
  //Set Current Page to 0 . It will make skip = 0
  setCurrentPage(0);
};
```

### Advice - 01

**Add a Loading State** to show the Loading on Page change

### Advice - 02

you can also use **Axios** to send the params in such a easy way

```js
const res = await axios.get("/apps", {
  params: { limit, skip, sortField, sortOrder, search },
});
```
