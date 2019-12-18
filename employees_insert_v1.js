{
	start: {
		source: {
			uri:  "jdbc:mysql://localhost:3306/employees?useSSL=false",
			user: "demo",
			password: "demo00"
		},
		target: {
			mode: "insert",
			uri: "mongodb://localhost:27017/",
			namespace: "sdemo.employees"
		},
		template: {
                        emp_no: "$emp_no",
			first_name: "$first_name",
			last_name: "$last_name",
			gender: "$gender",
			birth_date: "$birth_date",
			hire_date: "$hire_date"
		},
		query:{
		   sql: 'SELECT * FROM employees'
		}
	}
}
