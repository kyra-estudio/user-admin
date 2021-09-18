const onlyAdmin = (req, res, next) => {
	const user = req.session.user;
	if (req.session.user) {
		if (!user.admin) {
			return res.redirect('/pages/books');
		}
	} else {
		res.redirect('/pages/books');
	}
	console.log({ session: req.session });
	next();
};

const existUser = (req, res, next) => {
	if (req.session.user) {
		return res.redirect('/pages/books');
	}

	next();
};

module.exports = {
	onlyAdmin,
	existUser,
};
