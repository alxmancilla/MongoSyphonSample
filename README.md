# MongoSyphonSample
Sample for migrating data from Oracle to MongoDB using MongoSyphon



## Instructions

1. Install a basic  Oracle 12c and SQL Developer 12c in local machine. [Here](https://medium.com/@mfofana/how-to-install-oracle-database-on-mac-os-sierra-10-12-or-above-c0b350fd2f2c) you can find instructions to install it on Mac OS



2. Install Maven 3.6 and JDK 1.8

3. Download [ojdbc8](https://mvnrepository.com/artifact/com.oracle.jdbc/ojdbc8) and [ucp12](https://mvnrepository.com/artifact/com.oracle.jdbc/ucp) jar files and install them locally.

```
mvn install:install-file -Dfile=ojdbc8-12.2.0.1.jar -DpomFile=ojdbc8-12.2.0.1.pom.xml 

mvn install:install-file -Dfile=ucp-12.2.0.1.jar -DpomFile=ucp-12.2.0.1.pom.xml 
```

4. Clone MongoSyphon repository from https://github.com/johnlpage/MongoSyphon

5. Change pom.xml to use mongo-java-driver version 3.6.4 and ojdbc8 version 12.2.0.1

 ```
 <dependency>
      <groupId>org.mongodb</groupId>
      <artifactId>mongo-java-driver</artifactId>
      <version>3.6.4</version>
    </dependency>
    <dependency>
        <groupId>com.oracle.jdbc</groupId>
        <artifactId>ojdbc8</artifactId>
        <version>12.2.0.1</version>
    </dependency>
 ```   
 
6. Build MongoSyphon.jar file using Maven

```
mvn package
```

7. Run DDL and SQL statements (create_emp_table.sql) on SQL Developer

8. Execute MongoSyphon with initial_load_emp_table.js
```
java -jar bin/MongoSyphon.jar -c initial_load_emp_table.js
```
9. Run SQL statements (add_upd_emp_table.sql) on SQL Developer

10. Execute MongoSyphon with cdc_emp_table.js
```
java -jar bin/MongoSyphon.jar -c cdc_emp_table.js
```

You can use MongoDB Compass or mongo shell to see changes on MongoDB after step 8 and 10


