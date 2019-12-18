{
	start: {
		source: {
			uri:  "jdbc:oracle:thin:@localhost:1521/xe",
			user: "jdbcuser",
			password: "jdbcuser123"
		},
		target: {
			mode: "insert",
			uri: "mongodb://localhost:27017/",
			namespace: "test.emp_orcl"
		},
		template: {
                       _id: "$EMPNO",
                        emp_no: "$EMPNO",
			full_name: "$ENAME",
			job: "$JOB",
			mgr: "$MGR",
			hire_date: "$HIREDATE",
			salary: "$SAL",
			comm: "$COMM",
			deptno: "$DEPTNO",
			lm_date: "$LMDATE"
		},
		query:{
		   sql: 'SELECT * FROM emp WHERE TRUNC(lmdate) < TRUNC(sysdate - 1 ) '
		}
	}
}
