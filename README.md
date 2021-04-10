# objleaves
A javascript util method that return all the leaves path of an object. That can be useful when you need the leaves path to implement some custom logic on you JSON using lodash get/set methods.

## Install with YARN
```
yarn add objleaves
```

## Install with NPM
```
npm i objleaves
```

## Example
```javascriot
const object = {
    isNested: true,
    people: [{
        name: 'Jane',
        lastName: 'Doe',
        dogs: [
            { name: 'Skippy'},
            { name: 'Lessie'},
        ],
        isHappy: true,
    }],
}

console.log(objectLeaves(object))

/* *** OUTPUT *** 
 * isNested
 * people[0].name
 * people[0].lastName
 * people[0].dogs[0].name
 * people[0].dogs[1].name
 * people[0].isHappy
 * *** ****** ***
 */
```