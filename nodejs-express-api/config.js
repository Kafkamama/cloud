export default {
	app: {
		name: "Cloud",
		url: "http://localhost:8060",
		frontendUrl: "http://localhost:8050",
		secret: "641ca4ab6225fbed4c802fce180bc3e4",
		language: "english",
		publicDir: "assets",
	},
	auth: {
		userTokenSecret: "a200376A-1ax%W@e05cfYY6Q!!0-913782cd2864db653f28",
		apiTokenSecret: "8eec69c8$Xax%W!35dea9B#Q-!07734a75df89dd5120fab9",
		jwtDuration: 30, //in minutes
		otpDuration: 5, //in minutes
	},
	database: {
		name:"cloud",
		type: "mysql",
		host: "localhost",
		username: "root",
		password: "123456",
		port: "3306",
		charset: "utf8",
		recordlimit: 10,
		ordertype: "DESC"
	},
	mail: {
		username:"",
		password: "",
		senderemail:"",
		sendername:"",
		host: "",
		secure: true,
		port: ""
	},
	upload: {
		tempDir: "uploads/temp/",
		import_data: {
			filenameType: "timestamp",
			extensions: "json,csv",
			limit: "10",
			maxFileSize: "3",
			returnFullpath: "false",
			filenamePrefix: "",
			uploadDir: "uploads/files/"
		},
		
	},
	s3: {
		secretAccessKey: "",
		accessKeyId: "",
		region: "us-west-2",
		bucket: "",
	},
	
	locales: {
		'english': 'English',
	}

}