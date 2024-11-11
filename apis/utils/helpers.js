const generate = (email1, email2) => {
	let email4 = email1 > email2 ? email1 : email2
	let email3 = email1 < email2 ? email1 : email2

	return email3 + "-" + email4
}

module.exports = {
    generate
}