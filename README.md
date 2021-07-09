# random-item-from-list

## Installation & Usage
### install

```sh
npm i random-item-from-list
```

### usage

```js

const randomItemList = require('random-item-from-list')

const list1 = [
    {
        name: "User1"
    },
    {
        name: "User2"
    },
    {
        name: "User3"
    },
    {
        name: "User4"
    },
    {
        name: "User5"
    }
]

const list2 = ["User1", "User2", "User3", "User4", "User5"]

console.log(randomItemList(list1)) // { name: 'User2' }
console.log(randomItemList(list2)) // User1
console.log(randomItemList()) // null
```