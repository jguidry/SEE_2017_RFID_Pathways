function pushImage() {
		// Create a root reference
		var storageRef = firebase.storage().ref();

		// Create a reference to 'test.jpg'
		var fileRef = storageReg.child('test.jpg');
		ref.put(fileRef).then(function(snapshot) {
				console.log('Uploaded an image!');
		});
}
