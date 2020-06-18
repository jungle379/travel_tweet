export const entry = __dirname + "/src/main.js";
export const output = {
  path: __dirname + "/dist",
  filename: "like-button.js"
};
export const module = {
  loaders: [{
    test: /\.js$/,
    loader: "babel",
    query: {
      presets: ["react", "es2015", "stage-0"] //react入れないとエラー出るよ&書き方がES2015だと違うよ
    }
  }]
};