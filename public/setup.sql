CREATE DATABASE course_evolution;

CREATE TABLE faculty(
    l_Name varchar(100),
    f_Name varchar(100),
    email_id varchar(100),
    course_id varchar(100),
    PRIMARY KEY (course_id)
      );


CREATE TABLE course(
    q_id int NOT NULL,
    course_id varchar(100),
    question varchar(100) NOT NULL,
    q_type varchar(1) NOT NULL,
    info json NOT NULL,
    PRIMARY KEY (q_id),
    FOREIGN KEY (course_id) references faculty(course_id)
    );


/*

- insert values into tables
insert into faculty values ('Galen', 'long', 'abc@drexel.edu', 'CS375');
insert into faculty values ('Galen3', 'long1', 'abc123@drexel.edu', 'CS275');

insert into course values (1, 'CS375', 'Question 1', 'A', '{ "option": "A", "list": {"A": "option A","B": "option B", "C": "option C"}, "response": "B"}');


- join a table
F.l_name, F.f_name, F.course_id, C.question, C.q_type, C.info from faculty AS F inner join course AS C on F.course_id = C.course_id;
*/