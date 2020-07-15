let myYoutubeVideo1 = {
  title: "Loops in JavaScript",
  videolength: 15,
  videoCreator: "Hitesh CHoudhary",
  videoDescription: "this is a video description and a long one",
};
//   console.log(myYoutubeVideo);
//   console.log(
//     `Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`
//   );

let myYoutubeVideo2 = {
  title: "Functions in JavaScript",
  videolength: 11,
  videoCreator: "Hitesh CHoudhary",
  videoDescription: "this is a video description and a long one",
};

let changeVideoLength = function (myObject) {
  return {
    formatOne: `TIme of this video is ${myObject.videolength + 2} min`,
    formatTwo: `TIme of this video is ${myObject.videolength} min`,
  };
};

let adOne = changeVideoLength(myYoutubeVideo1);
console.log(adOne.formatTwo);
changeVideoLength(myYoutubeVideo2);
