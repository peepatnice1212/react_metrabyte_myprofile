ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'peepatnice1212';

CREATE DATABASE `nicedb`;

use nicedb;

CREATE TABLE nicedb.personal_record (
    `id` int not null AUTO_INCREMENT,
    `data_nice` varchar(45) not null,
    primary key (id)
);

INSERT INTO nicedb.personal_record(`id`,`data_nice`)
VALUES (1,"พีรภัทร"),(2,"เทียนสวัสดิ์"),(3,"Peerapat"),(4,"Thiensawat"),(5,"ไนซ์"),(6,"Nice"),(7,"21"),(8,"ชอบทำงาน + ชอบเล่นดนตรี"),(9,"ไม่มีสิ่งไหนที่เราทำไม่ได้ มีแต่ทำไม่เป็น");