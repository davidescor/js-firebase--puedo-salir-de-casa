var firebaseConfig = {
  apiKey: "********-********",
  authDomain: "********-********.firebaseapp.com",
  databaseURL: "https://********-********.********.com",
  projectId: "********-********",
  storageBucket: "********-********.********.com",
  messagingSenderId: "********",
  appId: "********:********:********:********",
  measurementId: "********-********"
};

firebase.initializeApp(firebaseConfig);

const remoteConfig = firebase.remoteConfig();

remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600000,
};

remoteConfig.fetchAndActivate()
.then(() => {
  showWelcomeMessage();
})
.catch((err) => {
  console.error('Firebase Remote Config failed to initialize', err);
});

function showWelcomeMessage() {
  const messageValue = remoteConfig.getValue('message');
  console.log(remoteConfig.getValue('message'));
  document.getElementById('data-firebase').innerHTML = messageValue._value;

}

