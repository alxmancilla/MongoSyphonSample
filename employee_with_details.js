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
			hire_date: "$hire_date",
			departments: ["@deptsection"],
			salaries: ["@salarysection"]
		},
		query:{
		   sql: 'SELECT * FROM employees'
		}
	},

	deptsection: {
		template: {
			dept_no: "$dept_no",
			dept_name: "@deptnamesection",
                        from_date: "$from_date",
			to_date: "$to_date"
		},
		query:{
			sql: 'SELECT dept_no, from_date, to_date FROM employees.dept_emp WHERE emp_no = ?  ORDER BY to_date DESC LIMIT 5'
		},
		params: [ "emp_no" ]
	},

        deptnamesection: {
		template: {
			_value: "$dept_name"
		},
		query: {
			sql: 'SELECT dept_name FROM employees.departments WHERE dept_no = ?'
		},
		params: [ "dept_no" ]
	},

	salarysection: {
		template: {
			salary: "$salary",
			from_date: "$from_date",
			to_date: "$to_date"
		},
		query: {
			sql: 'SELECT salary, from_date, to_date FROM employees.salaries WHERE emp_no = ? ORDER BY to_date DESC LIMIT 5'
		},
		params : [ "emp_no" ]
	}
}
