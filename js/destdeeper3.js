function userId({id}) {
	return id;
}

function whois({
	displayName: displayName,
	fullName: {firstName: name}
}) {
	console.log(displayName + " is " + name);
}
const user = {
	id: 42, 
	displayName: "jdoe", 
	fullName: {firstName: "John", lastName: "Doe" }
};

console.log("userId " + userId(user));
whois(user);
