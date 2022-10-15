INSERT INTO interviews (id,student,interviewer_id,appointment_id) VALUES (1,'Kento',2,1);
INSERT INTO interviews (id,student,interviewer_id,appointment_id) VALUES (2,'Atsu',4,7);
INSERT INTO interviews (id,student,interviewer_id,appointment_id) VALUES (3,'Umut',1,13);
INSERT INTO interviews (id,student,interviewer_id,appointment_id) VALUES (4,'Koki',5,19);
INSERT INTO interviews (id,student,interviewer_id,appointment_id) VALUES (5,'Tomo',3,25);
INSERT INTO interviews (id,student,interviewer_id,appointment_id) VALUES (6,'Niko',1,4);

ALTER SEQUENCE interviews_id_seq RESTART WITH 6;