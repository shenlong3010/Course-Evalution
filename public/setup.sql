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