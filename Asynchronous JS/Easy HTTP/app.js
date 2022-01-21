const http = new easyHTTP();

// Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(
//   error,
//   response
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// Get single post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function (
//   error,
//   response
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// Create Data
const data = {
  title: "Custom Post",
  body: "This is a custom post"
};

// Create post
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   error,
//   response
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// Update post
// http.put("https://jsonplaceholder.typicode.com/posts/45", data, function(
//   error,
//   response
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// Delete post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  error,
  response
) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});