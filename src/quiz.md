1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.
(My answer: .map() array method takes each element of original array  and perform manipulations on them)


2. What do we usually use `.map()` for in React?
Convert an array of raw data (usually an array of objects) into an array of JSX elements
that can be displayed on the page.
(My answer: We usually take come data from one source and pass them into our components)


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.


instead of hardcoded 
for(let i = 0; i < 5; i++) {
we use more flexible

for(let i = 0; i < someArray.length; i++) {
    
}
(My answer: Using .map() permits us to avoid hardcoding data in our components, which
make them much miore flexible and reausable.)