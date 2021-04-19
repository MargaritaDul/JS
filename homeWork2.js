//////////1////////////

const users = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
];

const sortedByGenderArray = users.reduce((result, user) => {
  const fullName = `${user.first_name} ${user.last_name}`;
  const { id, email, gender, ip_address } = user;
  if (user.gender === "Female") {
    result["women"] = [{ id, fullName: fullName, email, gender, ip_address }];
    return result;
  }
  result["men"] = [{ id, fullName: fullName, email, gender, ip_address }];
  return result;
}, {});

console.log(sortedByGenderArray);

////////2//////////

const initialData = [
  {
    username: "Maria",
    age: 25,
  },
  {
    username: "Alex",
    age: 21,
  },
  {
    username: "Oleg",
    age: 14,
  },
  {
    username: "Dmitriy",
    age: 35,
  },
  {
    username: "Oksana",
    age: 72,
  },
];

const sorted = initialData.sort((currentUsername, nextUsername) =>
  currentUsername.username.toLowerCase() > nextUsername.username.toLowerCase()
    ? 1
    : -1
);

const filterByAge = (arr) => {
  return arr.filter((user) => {
    if (typeof user.username !== "string" || typeof user.age !== "number")
      return;
    return user.age >= 21;
  });
};

console.log(filterByAge(sorted));

/////3////

const users = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Tomara",
  },
  {
    id: 3,
    name: "Max",
  },
];

const filterById = (arr, n, m) => {
  return arr.filter((user) => {
    if (typeof user.id !== "number" || typeof user.name !== "string") return;
    return user.id !== n && user.id !== m;
  });
};

console.log(filterById(users, 1));
console.log(filterById(users, 1, 2));

////////4///////

const initialArray = [1, "Hello", 3];

const updatedArray = initialArray.map((element, index) => ({
  elementValue: element,
  elementType: typeof element,
  elementIndex: index,
}));

console.log(updatedArray);

///////5//////

const isPalindrome = (str) => {
  const lowercasedString = str.toLowerCase();
  return str === lowercasedString.split("").reverse().join("");
};

console.log(isPalindrome("шалаш"));

///////6//////

const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

const onlyIdAndTitleNewReleases = newReleases.map((release) => {
  const { id, title } = release;
  return { id, title };
});
console.log(onlyIdAndTitleNewReleases);

////////7/////

const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

const withFiveRatingId = newReleases.reduce((result, release) => {
  if (release.rating[0] === 5.0) {
    result.push(element.id);
  }
  return result;
}, []);

console.log(withFiveRatingId);

/////8/////

const videos = [
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
  {
    id: 70111470,
    title: "Die Hard",
  },
  {
    id: 654356453,
    title: "Bad Boys",
  },
];

const videosObject = videos.reduce((result, video) => {
  if (typeof video.id !== "number" || typeof video.title !== "string") return;
  result[video.id] = video.title;
  return result;
}, {});

console.log(videosObject);

/////////9/////////

const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 42,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

const squaredBoxarts = boxarts.map((element) => {
  const newObject = {
    square: element.width * element.height,
    url: element.url,
  };
  return newObject;
});

const maxSquareBoxart = squaredBoxarts.reduce((result, item) => {
  if (result.square > item.square) {
    return result;
  }
  return item;
}, []);

const maxSquareBoxartUrl = maxSquareBoxart.url;

console.log(maxSquareBoxartUrl);
