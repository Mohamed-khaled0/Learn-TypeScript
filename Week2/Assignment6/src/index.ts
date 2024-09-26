// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error

// post.push("Elzero"); // Error => Cant Add
type Post = [number, string, boolean];
let post: Post = [100, "Title", true]; // Good
const [id, title, state] = post;


post = [100, "Title", true]; // Good

// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true