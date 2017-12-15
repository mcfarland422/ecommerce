import axios from 'axios';

export default function(userToken, productCode){
	console.log(userToken, productCode);
	console.log("Update Cart Action running...")

	axios({
		method: "POST",
		url: `${window.apiHost}/updateCart`,
		data:{
			userToken: userToken,
			productCode: productCode
		}
	})
	return{
		type: "UPDATE_CART",
		payload: thePromise
	}
}
