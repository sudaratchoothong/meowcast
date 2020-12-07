var firebaseConfig = {
    apiKey: "AIzaSyCTYqLiZkU2GkwKmbzsVTpmUhLvp-OVVTQ",
    authDomain: "meowcast-10d67.firebaseapp.com",
    databaseURL: "https://meowcast-10d67.firebaseio.com/",
    projectId: "meowcast-10d67",
    storageBucket: "meowcast-10d67.appspot.com",
    messagingSenderId: "228031617277",
    appId: "1:429650509455:web:adadc8b6215fe21011fafa", //ยังหาapp ในเบสไม่เจอ ที่เขียนไปเป็นของอใจารย์
    measurementId: "G-HG7G7ZEFPC" //อันนี้ด้วย
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();