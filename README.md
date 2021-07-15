# React로 youtube clone

> 기술 스택 - React, Rest API(fetch, axios), postman

### 이번 프로젝트의 주 목적은 **API 요청을 하여 데이터를 가져오는 작업 수행**

### 내부 구조

![react](/images/1.png)

구조를 살펴 보면, 크게 app, service, components 로 나누어 설계하였다.
`service.js` 에는 `class` 안 `axios`를 이용하여 API 작업 수행하는 로직이 있다. `index.js` 에 의존성 주입(Dependency Injection)을 한 뒤, `props`를 `App.jsx`에 전달하여 작업을 진행하는 흐름이다.

```jsx
// index.js
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
```

```js
// service.js
 class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
        regionCode: 'kr',
      },
    });
    return response.data.items;
  }
```

```jsx
// app.jsx
const App = ({ youtube }) => {
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);
  ...
```

### 메인 화면

![react](/images/2.png)

### 동영상 클릭 시 화면

![react](/images/3.png)

### 반응형 화면

![react](/images/5.png)

### youtube api

![youtube](/images/6.png)

### postman 사용

![postman](/images/7.png)
