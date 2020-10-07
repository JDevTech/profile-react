import * as firebase from "firebase/app";
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9JjhgqZJTPp8T_md1tHj__z_X9j9UwKk",
  authDomain: "patagonian-test-dcb86.firebaseapp.com",
  databaseURL: "https://patagonian-test-dcb86.firebaseio.com",
  projectId: "patagonian-test-dcb86",
  storageBucket: "patagonian-test-dcb86.appspot.com",
  messagingSenderId: "984551055210",
  appId: "1:984551055210:web:226e623b7d04965e010f13"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const imagesStorage = "Images";
const imagesCollection= "Images";
const storage = firebase.storage();

export const uploadImage = async (image) => {

  const uploadTask = storage.ref(`${imagesStorage}/${image.name}`).put(image);

  const response = await new Promise(resolve => {
    uploadTask.on('state_changed', (snapshot) => { console.log(snapshot) }, (error) => { resolve(resolve) }, () => {

      storage.ref(imagesStorage).child(image.name).getDownloadURL().then(url => {
          firebase.firestore().collection(imagesCollection).add({
            imgURL: url
          }).then((res) => {
            resolve(res)
          }, err => {
            resolve(err)
          })
      }, err => {
        resolve(err)
      });

    });
  });

  return response;
}

export const getImages = () => {
  return firebase.firestore().collection(imagesCollection).get();
}

export const deleteImage = (id) => {
  return firebase.firestore().collection(imagesCollection).doc(id).delete()
}
