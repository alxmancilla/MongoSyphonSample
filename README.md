# MongoSyphonSample
Sample for migrating data from Oracle to MongoDB using MongoSyphon



##Instructions

1. Install a basic  Oracle 12c and SQL Developer 12c in local machine. Here you can find instructions to install it on Mac X OS

https://medium.com/@mfofana/how-to-install-oracle-database-on-mac-os-sierra-10-12-or-above-c0b350fd2f2c

2. Install Maven and JDK 1.8

3. Download ojdbc8 and ucp12 jars and install them locally due Oracle does not provide a public maven repository for those files
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
 
6. Run mvn package.  (for building MongoSyphon.jar file)

7. Run DDL and SQL statements (create_emp_table.sql) on SQL Developer

8. Execute MongoSyphon with initial_load_emp_table.js
```
java -jar MongoSyphon.jar -c initial_load_emp_table.js
```
9. Run SQL statements (add_upd_emp_table.sql) on SQL Developer

10. Execute MongoSyphon with cdc_emp_table.js
```
java -jar MongoSyphon.jar -c cdc_emp_table.js
```

You can use Compass or mongo shell to show changes after step 8 and 10


