INSERT INTO interviewers (id SERIAL PRIMARY KEY,name TEXT,avatar:TEXT) VALUES (1,'Sylvia Palmer','https://i.imgur.com/LpaY82x.png')
INSERT INTO interviewers (id SERIAL PRIMARY KEY,name TEXT,avatar:TEXT) VALUES (2,'Tori Malcolm','https://i.imgur.com/Nmx0Qxo.png')
INSERT INTO interviewers (id SERIAL PRIMARY KEY,name TEXT,avatar:TEXT) VALUES (3,'Mildred Nazir','https://i.imgur.com/T2WwVfS.png')
INSERT INTO interviewers (id SERIAL PRIMARY KEY,name TEXT,avatar:TEXT) VALUES (4,'Cohana Roy','https://i.imgur.com/FK8V841.jpg')
INSERT INTO interviewers (id SERIAL PRIMARY KEY,name TEXT,avatar:TEXT) VALUES (5,'Sven Jones','https://i.imgur.com/twYrpay.jpg')

ALTER SEQUENCE interviewers_id_seq RESTART WITH 5;